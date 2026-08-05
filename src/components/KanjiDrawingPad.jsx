import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

const KanjiDrawingPad = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isGrading, setIsGrading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [target, setTarget] = useState({ char: 'あ', romaji: 'a' });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.width = '300px';
    canvas.style.height = '300px';

    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 15;

    contextRef.current = context;
  }, []);

  // Basic hiragana set to randomize target when this page loads
  useEffect(() => {
    const basic = [
      { char: 'あ', romaji: 'a' },{ char: 'い', romaji: 'i' },{ char: 'う', romaji: 'u' },{ char: 'え', romaji: 'e' },{ char: 'お', romaji: 'o' },
      { char: 'か', romaji: 'ka' },{ char: 'き', romaji: 'ki' },{ char: 'く', romaji: 'ku' },{ char: 'け', romaji: 'ke' },{ char: 'こ', romaji: 'ko' },
      { char: 'さ', romaji: 'sa' },{ char: 'し', romaji: 'shi' },{ char: 'す', romaji: 'su' },{ char: 'せ', romaji: 'se' },{ char: 'そ', romaji: 'so' },
      { char: 'た', romaji: 'ta' },{ char: 'ち', romaji: 'chi' },{ char: 'つ', romaji: 'tsu' },{ char: 'て', romaji: 'te' },{ char: 'と', romaji: 'to' },
      { char: 'な', romaji: 'na' },{ char: 'に', romaji: 'ni' },{ char: 'ぬ', romaji: 'nu' },{ char: 'ね', romaji: 'ne' },{ char: 'の', romaji: 'no' },
      { char: 'は', romaji: 'ha' },{ char: 'ひ', romaji: 'hi' },{ char: 'ふ', romaji: 'fu' },{ char: 'へ', romaji: 'he' },{ char: 'ほ', romaji: 'ho' },
      { char: 'ま', romaji: 'ma' },{ char: 'み', romaji: 'mi' },{ char: 'む', romaji: 'mu' },{ char: 'め', romaji: 'me' },{ char: 'も', romaji: 'mo' },
      { char: 'や', romaji: 'ya' },{ char: 'ゆ', romaji: 'yu' },{ char: 'よ', romaji: 'yo' },
      { char: 'ら', romaji: 'ra' },{ char: 'り', romaji: 'ri' },{ char: 'る', romaji: 'ru' },{ char: 'れ', romaji: 're' },{ char: 'ろ', romaji: 'ro' },
      { char: 'わ', romaji: 'wa' },{ char: 'を', romaji: 'wo' },{ char: 'ん', romaji: 'n' },
    ];
    const pick = basic[Math.floor(Math.random() * basic.length)];
    setTarget(pick);
  }, []);

  const getPoint = (nativeEvent) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      offsetX: nativeEvent.clientX - rect.left,
      offsetY: nativeEvent.clientY - rect.top,
    };
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = getPoint(nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getPoint(nativeEvent);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const submitToAI = async () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL('image/png');
    setIsGrading(true);
    setFeedback(null);

    try {
      const result = await window.ai.gradeImage(imageData, target.char);
      setFeedback(result);
    } catch (error) {
      setFeedback({ error: error.message || 'The grader could not run.' });
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Write: {target.char} ({target.romaji})</h3>
      <div style={{ marginTop: 6 }}>
        <button
          title="Pick new character"
          onClick={() => {
            // randomize to a new target (with romaji mapping)
            const basic = [
              { char: 'あ', romaji: 'a' },{ char: 'い', romaji: 'i' },{ char: 'う', romaji: 'u' },{ char: 'え', romaji: 'e' },{ char: 'お', romaji: 'o' },
              { char: 'か', romaji: 'ka' },{ char: 'き', romaji: 'ki' },{ char: 'く', romaji: 'ku' },{ char: 'け', romaji: 'ke' },{ char: 'こ', romaji: 'ko' },
              { char: 'さ', romaji: 'sa' },{ char: 'し', romaji: 'shi' },{ char: 'す', romaji: 'su' },{ char: 'せ', romaji: 'se' },{ char: 'そ', romaji: 'so' },
              { char: 'た', romaji: 'ta' },{ char: 'ち', romaji: 'chi' },{ char: 'つ', romaji: 'tsu' },{ char: 'て', romaji: 'te' },{ char: 'と', romaji: 'to' },
              { char: 'な', romaji: 'na' },{ char: 'に', romaji: 'ni' },{ char: 'ぬ', romaji: 'nu' },{ char: 'ね', romaji: 'ne' },{ char: 'の', romaji: 'no' },
              { char: 'は', romaji: 'ha' },{ char: 'ひ', romaji: 'hi' },{ char: 'ふ', romaji: 'fu' },{ char: 'へ', romaji: 'he' },{ char: 'ほ', romaji: 'ho' },
              { char: 'ま', romaji: 'ma' },{ char: 'み', romaji: 'mi' },{ char: 'む', romaji: 'mu' },{ char: 'め', romaji: 'me' },{ char: 'も', romaji: 'mo' },
              { char: 'や', romaji: 'ya' },{ char: 'ゆ', romaji: 'yu' },{ char: 'よ', romaji: 'yo' },
              { char: 'ら', romaji: 'ra' },{ char: 'り', romaji: 'ri' },{ char: 'る', romaji: 'ru' },{ char: 'れ', romaji: 're' },{ char: 'ろ', romaji: 'ro' },
              { char: 'わ', romaji: 'wa' },{ char: 'を', romaji: 'wo' },{ char: 'ん', romaji: 'n' },
            ];
            const pick = basic[Math.floor(Math.random() * basic.length)];
            setTarget(pick);
          }}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 6 }}
        >
          <AiOutlineReload size={20} />
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onPointerDown={startDrawing}
        onPointerMove={draw}
        onPointerUp={stopDrawing}
        onPointerLeave={stopDrawing}
        style={{
          border: '2px solid #333',
          cursor: 'crosshair',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          background: 'white',
        }}
      />
      <div style={{ marginTop: '1rem', gap: '10px', display: 'flex' }}>
        <button onClick={clearCanvas}>消去 (Clear)</button>
        <button onClick={submitToAI} disabled={isGrading}>
          {isGrading ? '判定中...' : '判定 (Grade)'}
        </button>
      </div>
      {feedback && (
        <div style={{ marginTop: '1rem', width: '300px', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '8px', background: '#fbfbfb' }}>
          {feedback.error ? (
            <p style={{ margin: 0, color: '#b91c1c' }}>{feedback.error}</p>
          ) : (
            <>
              <p style={{ margin: '0 0 0.25rem' }}><strong>Prediction:</strong> {feedback.identity?.predicted_class_index ?? 'unknown'}</p>
              <p style={{ margin: '0 0 0.25rem' }}><strong>Confidence:</strong> {(feedback.identity?.confidence * 100 || 0).toFixed(1)}%</p>
              <p style={{ margin: '0 0 0.25rem' }}><strong>Quality:</strong> {feedback.quality?.percent?.toFixed(1) || '0.0'}%</p>
              <p style={{ margin: 0 }}>{feedback.message}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default KanjiDrawingPad;
