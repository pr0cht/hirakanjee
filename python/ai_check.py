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

HIGH_SIMILARITY_PAIRS = {
    'ソ': ['ン'], 'ン': ['ソ'],
    'シ': ['ツ'], 'ツ': ['シ'],
    'ア': ['マ'], 'マ': ['ア'],
    'ウ': ['ラ'], 'ラ': ['ウ'],
}

def evaluate_structural_similarity(input_tensor, target_char):
    """
    Evaluates handwriting similarity against reference Japanese font skeleton for characters
    not present in the ETL9G 157-class CNN model (e.g. Katakana characters).
    Applies stricter thresholds for lookalike Katakana pairs (e.g. ソ/ン, シ/ツ).
    """
    from PIL import ImageDraw, ImageFont, ImageFilter
    user_img = Image.fromarray((input_tensor[0, 0] * 255).astype(np.uint8))
    
    font = None
    for font_name in ['meiryo.ttc', 'msgothic.ttc', 'YuGothM.ttc', 'msmincho.ttc', 'arial.ttf']:
        fp = os.path.join('C:/Windows/Fonts', font_name)
        if os.path.exists(fp):
            try:
                font = ImageFont.truetype(fp, 44)
                break
            except Exception:
                continue
                
    ref_img = Image.new('L', (64, 64), 0)
    draw = ImageDraw.Draw(ref_img)
    if font:
        draw.text((10, 6), target_char, fill=255, font=font)
    else:
        draw.text((10, 6), target_char, fill=255)
        
    ref_thick = ref_img.filter(ImageFilter.MaxFilter(3))
    
    arr_user = np.array(user_img, dtype=np.float32) / 255.0
    arr_ref = np.array(ref_thick, dtype=np.float32) / 255.0
    
    user_bin = arr_user > 0.2
    ref_bin = arr_ref > 0.2
    
    intersection = float(np.logical_and(user_bin, ref_bin).sum())
    union = float(np.logical_or(user_bin, ref_bin).sum())
    iou = float(intersection / (union + 1e-6))
    
    if iou >= 0.40:
        score = 80.0 + min(18.0, (iou - 0.40) * 55.0)
    elif iou >= 0.20:
        score = 65.0 + (iou - 0.20) * 75.0
    else:
        score = max(10.0, iou * 250.0)
        
    # Raise matching threshold for confusable lookalike Katakana pairs (GRAD-02)
    if target_char in HIGH_SIMILARITY_PAIRS:
        is_match = (score >= 72.0 and iou >= 0.30)
    else:
        is_match = (score >= 65.0)
        
    return is_match, score, min(0.98, max(0.40, iou * 1.6))

def grade_image(image_path, target_char=None, script=None):
    """
    Grades an input image against a target character or finds the best character match.
    Applies script masking so Hiragana drawings are evaluated within Hiragana, Kanji within Kanji, etc.
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
        
    target = target_char.strip() if target_char else None
    
    # Auto-infer script from target if not explicitly passed
    if not script and target:
        if '\u3040' <= target[0] <= '\u309f':
            script = 'hiragana'
        elif '\u30a0' <= target[0] <= '\u30ff':
            script = 'katakana'
        elif '\u4e00' <= target[0] <= '\u9fff':
            script = 'kanji'
            
    # Run CNN inference
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name
    logits = session.run([output_name], {input_name: input_tensor})[0]
    
    # Script-specific candidate masking:
    # Restrict candidate pool to the active script so Kanji never competes with Hiragana
    masked_logits = logits.copy()
    if script == 'hiragana':
        hira_mask = np.array([('\u3040' <= c <= '\u309f') for c in chars])
        masked_logits[0, ~hira_mask] = -1e9
    elif script == 'kanji':
        kanji_mask = np.array([('\u4e00' <= c <= '\u9fff') for c in chars])
        masked_logits[0, ~kanji_mask] = -1e9
        
    probs = softmax(masked_logits)[0]
    
    # Top predictions within active script
    top_indices = np.argsort(probs)[::-1][:5]
    top_predictions = [
        {"char": chars[idx], "confidence": float(probs[idx])}
        for idx in top_indices
    ]
    
    top_idx = top_indices[0]
    pred_char = chars[top_idx]
    pred_conf = float(probs[top_idx])
    
    # Target character evaluation
    if not target:
        target = pred_char
        
    is_target_in_vocab = target in char_to_id
    
    if is_target_in_vocab and script != 'katakana':
        target_idx = char_to_id[target]
        target_conf = float(probs[target_idx])
        is_correct = (pred_char == target)
        rank = int(np.where(np.argsort(probs)[::-1] == target_idx)[0][0]) + 1
        
        # Calculate Quality Percentage (0.0 to 100.0)
        if is_correct:
            if pred_conf >= 0.50:
                base_quality = 85.0 + min(13.0, (pred_conf - 0.50) * 26.0)
            elif pred_conf >= 0.25:
                base_quality = 76.0 + (pred_conf - 0.25) * 36.0
            else:
                base_quality = 68.0 + max(0.0, (pred_conf - 0.10) * 45.0)
        else:
            if rank == 2:
                base_quality = max(55.0, 50.0 + target_conf * 45.0)
            elif rank == 3:
                base_quality = max(42.0, 38.0 + target_conf * 35.0)
            else:
                base_quality = max(10.0, target_conf * 40.0)
    else:
        # Fallback for Katakana or out-of-vocab characters using structural skeleton template matching
        is_correct, base_quality, target_conf = evaluate_structural_similarity(input_tensor, target)
        rank = 1 if is_correct else 2
        pred_char = target if is_correct else pred_char
            
    # Complex Kanji density ceiling adjustment (prevent false blob penalty for high-stroke kanji)
    # Only characters in the explicit high-stroke set get the raised 0.80 ceiling;
    # all other kanji (and non-kanji scripts) use the standard 0.70 ceiling.
    COMPLEX_KANJI = set('語間聞話勉強読駅食飲校買曜書新電道帰漢朝高答黒勝寒暑遊')
    is_complex_kanji = (script == 'kanji') and bool(target and target in COMPLEX_KANJI)
    density_ceiling = 0.80 if is_complex_kanji else 0.70
    
    if stroke_density < 0.01:
        base_quality *= 0.5
    elif stroke_density > density_ceiling:
        base_quality *= 0.7
        
    quality_percent = float(np.clip(base_quality, 0.0, 99.5))
    
    # Construct tiered feedback message
    if is_correct:
        if quality_percent >= 90.0:
            message = f"Perfect! Beautiful stroke form for '{target}'."
        elif quality_percent >= 80.0:
            message = f"Excellent! Character '{target}' recognized clearly."
        elif quality_percent >= 65.0:
            message = f"Good work on '{target}'. Try refining stroke balance or spacing."
        else:
            message = f"Recognized as '{target}', but try drawing with clearer, more distinct strokes."
    elif rank in [2, 3] or (55.0 <= quality_percent < 65.0):
        message = f"Almost there! Looks close to '{target}'. Check the stroke proportions and shape."
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
    grade_parser.add_argument('--script', default=None, choices=['hiragana', 'katakana', 'kanji'], help="Japanese script context")
    
    test_parser = subparsers.add_parser('test', help="Test grader status")
    
    args = parser.parse_args()
    
    if args.command == 'grade':
        res = grade_image(args.image, target_char=args.target, script=args.script)
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
