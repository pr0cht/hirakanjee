import json
import onnxruntime as ort

session = ort.InferenceSession('python/kanji_ETL9G.onnx', providers=['CPUExecutionProvider'])
print(json.dumps({
    'inputs': [{'name': i.name, 'shape': list(i.shape), 'type': i.type} for i in session.get_inputs()],
    'outputs': [{'name': o.name, 'shape': list(o.shape), 'type': o.type} for o in session.get_outputs()]
}))
