import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  AiOutlineUndo,
  AiOutlineRedo,
  AiOutlineClear,
  AiOutlineCheck,
  AiOutlineSound,
} from 'react-icons/ai';
import { BsEraser, BsPencil, BsGrid3X3 } from 'react-icons/bs';
import { speakJapanese } from '../utils/audio';
import './DrawingCanvas.css';

export default function DrawingCanvas({
  targetChar,
  overlayChar = null,
  expectedStrokes = null,
  script = 'hiragana',
  onGradeComplete = null,
  autoRecordSRS = true,
}) {
  const canvasRef = useRef(null);
  const [strokes, setStrokes] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [penSize, setPenSize] = useState(14);
  const [isEraser, setIsEraser] = useState(false);
  const [gridMode, setGridMode] = useState('rice'); // 'rice' | 'cross' | 'none'
  const [isGrading, setIsGrading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Redraw all strokes onto the canvas
  const redrawCanvas = useCallback((strokeList, inProgressStroke = null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Fill pristine white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const drawList = inProgressStroke ? [...strokeList, inProgressStroke] : strokeList;

    for (const s of drawList) {
      if (!s.points || s.points.length === 0) continue;
      ctx.beginPath();
      ctx.lineWidth = s.isEraser ? s.width * 1.8 : s.width;
      ctx.strokeStyle = s.isEraser ? '#ffffff' : '#111827';

      if (s.points.length === 1) {
        ctx.arc(s.points[0].x, s.points[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.moveTo(s.points[0].x, s.points[0].y);
        for (let i = 1; i < s.points.length; i++) {
          ctx.lineTo(s.points[i].x, s.points[i].y);
        }
        ctx.stroke();
      }
    }
  }, []);

  // Initialize canvas size and crisp resolution
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 320;
    canvas.height = 320;
    redrawCanvas(strokes);
  }, []);

  // Keyboard shortcuts (Ctrl+Z, Ctrl+Y)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        handleUndo();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'Z'))) {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const getCanvasCoords = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    if (e.buttons !== 1) return;
    const pt = getCanvasCoords(e);
    const newStroke = {
      points: [pt],
      width: penSize,
      isEraser: isEraser,
    };
    setCurrentStroke(newStroke);
    setRedoList([]); // clear redo stack on new action
    redrawCanvas(strokes, newStroke);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!currentStroke) return;
    const pt = getCanvasCoords(e);
    const updated = {
      ...currentStroke,
      points: [...currentStroke.points, pt],
    };
    setCurrentStroke(updated);
    redrawCanvas(strokes, updated);
  };

  const stopDrawing = (e) => {
    if (!currentStroke) return;
    const finalStrokes = [...strokes, currentStroke];
    setStrokes(finalStrokes);
    setCurrentStroke(null);
    redrawCanvas(finalStrokes);
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const last = strokes[strokes.length - 1];
    const newStrokes = strokes.slice(0, -1);
    setStrokes(newStrokes);
    setRedoList((prev) => [last, ...prev]);
    redrawCanvas(newStrokes);
  };

  const handleRedo = () => {
    if (redoList.length === 0) return;
    const [first, ...rest] = redoList;
    const newStrokes = [...strokes, first];
    setStrokes(newStrokes);
    setRedoList(rest);
    redrawCanvas(newStrokes);
  };

  const handleClear = () => {
    setStrokes([]);
    setRedoList([]);
    setCurrentStroke(null);
    setFeedback(null);
    redrawCanvas([]);
  };

  const handleGrade = async () => {
    const canvas = canvasRef.current;
    if (!canvas || !window.ai || strokes.length === 0) return;

    setIsGrading(true);
    setFeedback(null);

    // Render clean image without guidelines or watermark
    redrawCanvas(strokes);
    const imageData = canvas.toDataURL('image/png');

    try {
      const result = await window.ai.gradeImage(imageData, targetChar, script);
      const score = result?.quality?.percent ?? 0;
      const isCorrect = result?.identity?.is_correct ?? (score >= 70);

      let srsInfo = null;
      if (autoRecordSRS && window.db?.recordReview) {
        try {
          srsInfo = await window.db.recordReview(script, targetChar, score);
        } catch (dbErr) {
          console.warn('Could not record SRS review:', dbErr);
        }
      }

      // Check stroke count discrepancy
      let strokeWarning = null;
      if (expectedStrokes && Math.abs(strokes.length - expectedStrokes) > 0) {
        strokeWarning = `Notice: Drawn in ${strokes.length} stroke${strokes.length > 1 ? 's' : ''}, but '${targetChar}' officially has ${expectedStrokes} stroke${expectedStrokes > 1 ? 's' : ''}. Check stroke order!`;
      }

      const fbData = {
        score,
        isCorrect,
        message: result?.message || (isCorrect ? 'Great stroke balance!' : 'Try to match stroke balance.'),
        predictedChar: result?.identity?.predicted_char,
        confidence: result?.identity?.confidence,
        strokeWarning,
        srsInfo,
      };

      setFeedback(fbData);

      if (onGradeComplete) {
        onGradeComplete(fbData);
      }
    } catch (err) {
      setFeedback({ error: err.message || 'AI recognition encountered an issue.' });
    } finally {
      setIsGrading(false);
    }
  };

  const cycleGrid = () => {
    if (gridMode === 'rice') setGridMode('cross');
    else if (gridMode === 'cross') setGridMode('none');
    else setGridMode('rice');
  };

  return (
    <div className="drawing-canvas-wrapper">
      <div className="canvas-toolbar">
        <div className="toolbar-group">
          <button
            className={`tool-btn ${!isEraser ? 'active' : ''}`}
            onClick={() => setIsEraser(false)}
            title="Pen tool"
          >
            <BsPencil size={13} />
          </button>
          <button
            className={`tool-btn ${isEraser ? 'active' : ''}`}
            onClick={() => setIsEraser(true)}
            title="Eraser tool"
          >
            <BsEraser size={13} />
          </button>

          <button
            className={`tool-btn ${penSize === 8 ? 'active' : ''}`}
            onClick={() => setPenSize(8)}
            title="Fine brush"
          >
            S
          </button>
          <button
            className={`tool-btn ${penSize === 14 ? 'active' : ''}`}
            onClick={() => setPenSize(14)}
            title="Medium brush"
          >
            M
          </button>
          <button
            className={`tool-btn ${penSize === 20 ? 'active' : ''}`}
            onClick={() => setPenSize(20)}
            title="Thick brush"
          >
            L
          </button>
        </div>

        <div className="toolbar-group">
          <button
            className="tool-btn"
            onClick={handleUndo}
            disabled={strokes.length === 0}
            title="Undo stroke (Ctrl+Z)"
          >
            <AiOutlineUndo size={14} />
          </button>
          <button
            className="tool-btn"
            onClick={handleRedo}
            disabled={redoList.length === 0}
            title="Redo stroke (Ctrl+Y)"
          >
            <AiOutlineRedo size={14} />
          </button>
          <button className="tool-btn" onClick={cycleGrid} title="Toggle Grid Guide">
            <BsGrid3X3 size={13} />
          </button>
          <button
            className="tool-btn"
            onClick={() => speakJapanese(targetChar)}
            title={`Pronounce ${targetChar}`}
          >
            <AiOutlineSound size={14} />
          </button>
        </div>

        {expectedStrokes && (
          <span
            className={`stroke-count-indicator ${
              strokes.length === 0
                ? ''
                : strokes.length === expectedStrokes
                ? 'match'
                : 'mismatch'
            }`}
            title="Strokes drawn vs target stroke count"
          >
            {strokes.length}/{expectedStrokes}
          </span>
        )}
      </div>

      <div className="canvas-container">
        {gridMode === 'rice' && (
          <div className="grid-overlay">
            <div className="grid-line-h" />
            <div className="grid-line-v" />
            <div className="grid-line-d1" />
            <div className="grid-line-d2" />
          </div>
        )}
        {gridMode === 'cross' && (
          <div className="grid-overlay">
            <div className="grid-line-h" />
            <div className="grid-line-v" />
          </div>
        )}

        {overlayChar && <div className="watermark-char">{overlayChar}</div>}

        <canvas
          ref={canvasRef}
          className="main-canvas"
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        />
      </div>

      <div className="canvas-actions">
        <button className="action-btn clear-btn" onClick={handleClear}>
          <AiOutlineClear size={16} />
          Clear
        </button>
        <button
          className="action-btn grade-btn"
          onClick={handleGrade}
          disabled={isGrading || strokes.length === 0}
        >
          <AiOutlineCheck size={16} />
          {isGrading ? 'Grading...' : 'Grade Writing'}
        </button>
      </div>

      {feedback && (
        <div
          className={`feedback-card ${
            feedback.error ? 'needs-work' : feedback.score >= 70 ? 'excellent' : 'needs-work'
          }`}
        >
          {feedback.error ? (
            <p className="feedback-msg" style={{ color: '#dc2626' }}>
              {feedback.error}
            </p>
          ) : (
            <>
              <div className="feedback-header">
                <span className={`feedback-score ${feedback.score < 70 ? 'low' : ''}`}>
                  {feedback.score.toFixed(1)}%
                </span>
                {feedback.srsInfo && (
                  <span className="feedback-srs">
                    SRS Stage {feedback.srsInfo.srsStage}/8
                  </span>
                )}
              </div>
              <p className="feedback-msg">{feedback.message}</p>
              {feedback.strokeWarning && (
                <div className="feedback-warning">{feedback.strokeWarning}</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
