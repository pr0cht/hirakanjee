"""
AI Handwriting Grader and Classifier for Hirakanjee
Evaluates canvas drawings against ETL9G-trained ONNX character models.
"""

import os
import sys
import json
import argparse
from pathlib import Path
import numpy as np
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

# Global cached ONNX session and labels
_SESSION = None
_LABELS = None

def get_model_and_labels():
    global _SESSION, _LABELS
    if _SESSION is None or _LABELS is None:
        import onnxruntime as ort
        
        base_dir = Path(__file__).resolve().parent
        model_path = base_dir / 'kanji_ETL9G.onnx'
        labels_path = base_dir / 'class_labels.json'
        
        if not model_path.exists():
            raise FileNotFoundError(f"Model file not found: {model_path}")
        if not labels_path.exists():
            raise FileNotFoundError(f"Class labels file not found: {labels_path}")
            
        with open(labels_path, 'r', encoding='utf-8') as f:
            _LABELS = json.load(f)
            
        opts = ort.SessionOptions()
        opts.inter_op_num_threads = 2
        opts.intra_op_num_threads = 2
        _SESSION = ort.InferenceSession(str(model_path), sess_options=opts, providers=['CPUExecutionProvider'])
        
    return _SESSION, _LABELS

def preprocess_canvas_image(image_path, target_size=(64, 64)):
    """
    Preprocess drawn canvas image from Electron:
    1. Load image (supports transparent RGBA, RGB, or L).
    2. Convert to grayscale with white strokes on black background.
    3. Auto-crop to stroke bounding box.
    4. Center on square canvas with proportional padding.
    5. Resize to model target_size.
    6. Normalize to [0.0, 1.0].
    """
    img = Image.open(image_path)
    
    # Handle RGBA with transparency
    if img.mode == 'RGBA':
        # Create white background canvas
        bg = Image.new('RGB', img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        img = bg.convert('L')
    elif img.mode != 'L':
        img = img.convert('L')
        
    arr = np.array(img, dtype=np.float32)
    
    # The canvas in React usually has white background (255) and black stroke (0).
    # If the image is mostly light (>128 mean), invert it so strokes are white (>0) on black (0).
    if np.mean(arr) > 128:
        arr = 255.0 - arr
        
    # Threshold noise
    threshold = 25.0
    mask = arr > threshold
    
    if not np.any(mask):
        return None, 0.0  # Empty canvas
        
    # Find bounding box
    ymin, ymax = np.where(mask.any(axis=1))[0][[0, -1]]
    xmin, xmax = np.where(mask.any(axis=0))[0][[0, -1]]
    
    cropped = arr[ymin:ymax+1, xmin:xmax+1]
    h, w = cropped.shape
    
    # Margin padding (approx 12% border)
    max_dim = max(h, w)
    margin = int(max_dim * 0.12) + 2
    canvas_dim = max_dim + 2 * margin
    
    square = np.zeros((canvas_dim, canvas_dim), dtype=np.float32)
    pad_y = (canvas_dim - h) // 2
    pad_x = (canvas_dim - w) // 2
    square[pad_y:pad_y+h, pad_x:pad_x+w] = cropped
    
    # Resize
    pil_square = Image.fromarray(np.uint8(np.clip(square, 0, 255)))
    resized = pil_square.resize(target_size, Image.Resampling.BILINEAR)
    
    norm_arr = np.array(resized, dtype=np.float32) / 255.0
    stroke_density = float(np.mean(norm_arr > 0.1))
    
    # Shape [1, 1, 64, 64]
    input_tensor = np.expand_dims(np.expand_dims(norm_arr, axis=0), axis=0)
    return input_tensor, stroke_density

def softmax(x):
    e_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return e_x / np.sum(e_x, axis=-1, keepdims=True)

def grade_image(image_path, target_char=None):
    """
    Grades an input image against a target character or finds the best character match.
    """
    try:
        session, labels_meta = get_model_and_labels()
    except Exception as e:
        return {
            "error": f"Failed to initialize AI model: {str(e)}",
            "identity": None,
            "quality": {"percent": 0.0}
        }
        
    chars = labels_meta['chars']
    char_to_id = labels_meta['char_to_id']
    
    input_tensor, stroke_density = preprocess_canvas_image(image_path, target_size=(64, 64))
    if input_tensor is None:
        return {
            "identity": {
                "target": target_char,
                "predicted_char": "",
                "predicted_class_index": "None",
                "confidence": 0.0,
                "is_correct": False,
            },
            "quality": {
                "percent": 0.0,
                "score": 0.0,
            },
            "message": "No character detected. Please draw on the pad before grading."
        }
        
    # Run inference
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
    logits = session.run([output_name], {input_name: input_tensor})[0]
    
    probs = softmax(logits)[0]
    
    # Top predictions
    top_indices = np.argsort(probs)[::-1][:5]
    top_predictions = [
        {"char": chars[idx], "confidence": float(probs[idx])}
        for idx in top_indices
    ]
    
    top_idx = top_indices[0]
    pred_char = chars[top_idx]
    pred_conf = float(probs[top_idx])
    
    # Target character evaluation
    target = target_char.strip() if target_char else pred_char
    is_target_in_vocab = target in char_to_id
    
    if is_target_in_vocab:
        target_idx = char_to_id[target]
        target_conf = float(probs[target_idx])
        is_correct = (pred_char == target)
        rank = int(np.where(np.argsort(probs)[::-1] == target_idx)[0][0]) + 1
    else:
        target_conf = 0.0
        is_correct = (pred_char == target)
        rank = -1
        
    # Calculate Quality Percentage (0.0 to 100.0)
    # Combines confidence, classification rank, and stroke structure
    if is_correct:
        # High confidence match
        if pred_conf >= 0.85:
            base_quality = 85.0 + (pred_conf - 0.85) * (15.0 / 0.15) * 0.95
        elif pred_conf >= 0.50:
            base_quality = 75.0 + (pred_conf - 0.50) * (10.0 / 0.35)
        else:
            base_quality = 65.0 + (pred_conf - 0.20) * (10.0 / 0.30)
    else:
        if rank == 2:
            base_quality = max(55.0, 50.0 + target_conf * 30.0)
        elif rank == 3:
            base_quality = max(45.0, 40.0 + target_conf * 25.0)
        else:
            base_quality = max(10.0, target_conf * 40.0)
            
    # Small stroke density adjustment (penalize completely empty/single dot or huge solid blobs)
    if stroke_density < 0.01:
        base_quality *= 0.5
    elif stroke_density > 0.70:
        base_quality *= 0.7
        
    quality_percent = float(np.clip(base_quality, 0.0, 99.5))
    
    # Construct message
    if is_correct:
        if quality_percent >= 80.0:
            message = f"Excellent! Character '{target}' recognized clearly."
        elif quality_percent >= 60.0:
            message = f"Good attempt at '{target}'. Try practicing stroke balance."
        else:
            message = f"Recognized as '{target}', but try drawing with clearer, more distinct strokes."
    elif rank in [2, 3]:
        message = f"Looks close to '{target}', but recognized as '{pred_char}'. Check stroke order and shape."
    else:
        message = f"Character drawn appears to be '{pred_char}' rather than '{target}'. Try again!"

    result = {
        "identity": {
            "target": target,
            "predicted_char": pred_char,
            "predicted_class_index": pred_char,
            "confidence": pred_conf,
            "is_correct": is_correct,
            "rank": rank,
            "top_predictions": top_predictions
        },
        "quality": {
            "percent": round(quality_percent, 1),
            "score": round(quality_percent / 100.0, 3),
            "stroke_density": round(stroke_density, 3)
        },
        "message": message
    }
    
    return result

def main():
    parser = argparse.ArgumentParser(description="Japanese Character AI Grader")
    subparsers = parser.add_subparsers(dest='command')
    
    grade_parser = subparsers.add_parser('grade', help="Grade an image file")
    grade_parser.add_argument('--image', required=True, help="Path to input image")
    grade_parser.add_argument('--target', default='あ', help="Target Japanese character")
    
    test_parser = subparsers.add_parser('test', help="Test grader status")
    
    args = parser.parse_args()
    
    if args.command == 'grade':
        res = grade_image(args.image, target_char=args.target)
        print(json.dumps(res, ensure_ascii=False, indent=2))
    elif args.command == 'test':
        session, labels = get_model_and_labels()
        print(json.dumps({
            "status": "ready",
            "num_classes": labels["num_classes"],
            "classes_sample": labels["chars"][:10],
            "val_accuracy": labels.get("val_accuracy", 0.0)
        }, ensure_ascii=False, indent=2))
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
