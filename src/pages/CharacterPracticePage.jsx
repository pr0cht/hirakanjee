import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const hiraganaChars = [
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

const katakanaChars = [
  { char: 'ア', romaji: 'a' },{ char: 'イ', romaji: 'i' },{ char: 'ウ', romaji: 'u' },{ char: 'エ', romaji: 'e' },{ char: 'オ', romaji: 'o' },
  { char: 'カ', romaji: 'ka' },{ char: 'キ', romaji: 'ki' },{ char: 'ク', romaji: 'ku' },{ char: 'ケ', romaji: 'ke' },{ char: 'コ', romaji: 'ko' },
  { char: 'サ', romaji: 'sa' },{ char: 'シ', romaji: 'shi' },{ char: 'ス', romaji: 'su' },{ char: 'セ', romaji: 'se' },{ char: 'ソ', romaji: 'so' },
  { char: 'タ', romaji: 'ta' },{ char: 'チ', romaji: 'chi' },{ char: 'ツ', romaji: 'tsu' },{ char: 'テ', romaji: 'te' },{ char: 'ト', romaji: 'to' },
  { char: 'ナ', romaji: 'na' },{ char: 'ニ', romaji: 'ni' },{ char: 'ヌ', romaji: 'nu' },{ char: 'ネ', romaji: 'ne' },{ char: 'ノ', romaji: 'no' },
  { char: 'ハ', romaji: 'ha' },{ char: 'ヒ', romaji: 'hi' },{ char: 'フ', romaji: 'fu' },{ char: 'ヘ', romaji: 'he' },{ char: 'ホ', romaji: 'ho' },
  { char: 'マ', romaji: 'ma' },{ char: 'ミ', romaji: 'mi' },{ char: 'ム', romaji: 'mu' },{ char: 'メ', romaji: 'me' },{ char: 'モ', romaji: 'mo' },
  { char: 'ヤ', romaji: 'ya' },{ char: 'ユ', romaji: 'yu' },{ char: 'ヨ', romaji: 'yo' },
  { char: 'ラ', romaji: 'ra' },{ char: 'リ', romaji: 'ri' },{ char: 'ル', romaji: 'ru' },{ char: 'レ', romaji: 're' },{ char: 'ロ', romaji: 'ro' },
  { char: 'ワ', romaji: 'wa' },{ char: 'ヲ', romaji: 'wo' },{ char: 'ン', romaji: 'n' },
];

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const CharacterPracticePage = () => {
  const { script, char } = useParams();
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isGrading, setIsGrading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [scriptChars, setScriptChars] = useState([]);
  const [scriptLabel, setScriptLabel] = useState('');

  const allChars = useMemo(() => (script === 'katakana' ? katakanaChars : hiraganaChars), [script]);

  useEffect(() => {
    const label = script === 'katakana' ? 'Katakana' : 'Hiragana';
    setScriptLabel(label);
    const chars = script === 'katakana' ? katakanaChars : hiraganaChars;
    setScriptChars(chars);
  }, [script]);

  useEffect(() => {
    if (!scriptChars.length) return;
    const target = scriptChars.find((item) => item.char === decodeURIComponent(char || '')) || scriptChars[0];
    const others = scriptChars.filter((item) => item.char !== target.char);
    const shuffled = shuffle(others);
    const qList = [
      { type: 'trace-overlay', target: target.char, prompt: `Trace ${target.char} with guide` },
      { type: 'trace-no-overlay', target: target.char, prompt: `Trace ${target.char} without guide` },
      { type: 'prompt', target: target.char, prompt: `Write the ${labelForScript(script)} of '${target.romaji}'` },
      { type: 'choice', target: target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${target.romaji}'?`, options: buildOptions(target, shuffled.slice(0, 3)) },
      { type: 'trace-overlay', target: shuffled[3]?.char || target.char, prompt: `Trace ${shuffled[3]?.char || target.char} with guide` },
      { type: 'prompt', target: shuffled[4]?.char || target.char, prompt: `Write the ${labelForScript(script)} of '${(shuffled[4] || target).romaji}'` },
      { type: 'choice', target: shuffled[5]?.char || target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${(shuffled[5] || target).romaji}'?`, options: buildOptions(shuffled[5] || target, shuffled.slice(6, 9)) },
      { type: 'trace-no-overlay', target: shuffled[6]?.char || target.char, prompt: `Trace ${shuffled[6]?.char || target.char} without guide` },
      { type: 'prompt', target: shuffled[7]?.char || target.char, prompt: `Write the ${labelForScript(script)} of '${(shuffled[7] || target).romaji}'` },
      { type: 'choice', target: shuffled[8]?.char || target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${(shuffled[8] || target).romaji}'?`, options: buildOptions(shuffled[8] || target, shuffled.slice(9, 12)) },
    ];
    setCurrentQuestion(qList[0]);
    setQuestionIndex(0);
    setAttempts(0);
    setFeedback(null);
    setSelectedOption(null);
    setCompleted(false);
  }, [char, scriptChars, script]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.width = '300px';
    canvas.style.height = '300px';

    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = 'round';
    context.lineWidth = 15;
    context.strokeStyle = '#111';
    contextRef.current = context;

    if (currentQuestion?.type === 'trace-overlay') {
      context.globalAlpha = 0.16;
      context.font = '170px Noto Sans JP, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(currentQuestion.target, 150, 150);
      context.globalAlpha = 1;
    }
  }, [currentQuestion]);

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
    if (!canvas) return;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (currentQuestion?.type === 'trace-overlay') {
      context.globalAlpha = 0.16;
      context.font = '170px Noto Sans JP, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(currentQuestion.target, 150, 150);
      context.globalAlpha = 1;
    }
  };

  const gradeCurrent = async () => {
    const canvas = canvasRef.current;
    if (!canvas || !window.ai) return;
    const imageData = canvas.toDataURL('image/png');
    setIsGrading(true);
    setFeedback(null);
    try {
      const result = await window.ai.gradeImage(imageData, currentQuestion.target);
      const percent = result?.quality?.percent ?? 0;
      if (percent >= 75) {
        setFeedback({ message: `Great! Quality ${percent.toFixed(1)}%.` });
        setTimeout(() => nextQuestion(), 600);
      } else {
        setAttempts((prev) => prev + 1);
        setFeedback({ message: `Needs more practice. Try again. Quality: ${percent.toFixed(1)}%.` });
      }
    } catch (error) {
      setFeedback({ message: error.message || 'The grader could not run.' });
    } finally {
      setIsGrading(false);
    }
  };

  const nextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= 10) {
      setCompleted(true);
      setFeedback({ message: 'Practice complete! Great work.' });
      return;
    }
    const qList = buildQuestions(scriptChars, decodeURIComponent(char || ''), script);
    setCurrentQuestion(qList[nextIndex]);
    setQuestionIndex(nextIndex);
    setAttempts(0);
    setFeedback(null);
    setSelectedOption(null);
  };

  const chooseOption = (option) => {
    setSelectedOption(option.char);
    if (option.char === currentQuestion.target) {
      setFeedback({ message: 'Correct!' });
      setTimeout(() => nextQuestion(), 600);
    } else {
      setFeedback({ message: 'Not quite. Try another option.' });
    }
  };

  const currentChars = useMemo(() => (script === 'katakana' ? katakanaChars : hiraganaChars), [script]);

  const targetChar = currentChars.find((item) => item.char === decodeURIComponent(char || '')) || currentChars[0];
  const progress = Math.min(100, ((questionIndex + 1) / 10) * 100);

  if (!currentQuestion) return null;

  return (
    <div className="page-content practice-page">
      <div className="practice-header">
        <Link to="/learn" className="back-link" aria-label="Stop Practice">
          <AiOutlineArrowLeft className="back-icon" />
          <span>Stop Practice</span>
        </Link>
        <div className="practice-progress">
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
          <span>{questionIndex + 1}/10</span>
        </div>
      </div>

      <div className="practice-card">
        <h1>{scriptLabel} Practice</h1>
        <p className="practice-target">Target: {targetChar.char} ({targetChar.romaji})</p>
        <h2>{currentQuestion.prompt}</h2>

        {currentQuestion.type === 'choice' ? (
          <div className="choice-grid">
            {currentQuestion.options.map((option) => (
              <button key={option.char} className="choice-option" onClick={() => chooseOption(option)}>
                <span className="choice-char">{option.char}</span>
                <span className="choice-romaji">{option.romaji}</span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <canvas
              ref={canvasRef}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerLeave={stopDrawing}
              className="practice-canvas"
            />
            <div className="practice-actions">
              <button onClick={clearCanvas}>Clear</button>
              <button onClick={gradeCurrent} disabled={isGrading}>{isGrading ? 'Grading…' : 'Grade'}</button>
              <button onClick={nextQuestion}>Skip</button>
            </div>
          </>
        )}

        {feedback && <div className="practice-feedback">{feedback.message}</div>}

        {completed && (
          <div className="practice-complete">
            <h3>Practice complete!</h3>
            <Link to="/learn" className="btn-primary">Back to Learn</Link>
          </div>
        )}
      </div>
    </div>
  );
};

function labelForScript(script) {
  return script === 'katakana' ? 'katakana' : 'hiragana';
}

function buildOptions(target, distractors) {
  const options = [target, ...distractors.slice(0, 3)];
  return shuffle(options).map((item) => ({ char: item.char, romaji: item.romaji }));
}

function buildQuestions(scriptChars, targetChar, script) {
  const target = scriptChars.find((item) => item.char === targetChar) || scriptChars[0];
  const others = scriptChars.filter((item) => item.char !== target.char);
  const shuffled = shuffle(others);
  return [
    { type: 'trace-overlay', target: target.char, prompt: `Trace ${target.char} with guide` },
    { type: 'trace-no-overlay', target: target.char, prompt: `Trace ${target.char} without guide` },
    { type: 'prompt', target: target.char, prompt: `Write the ${labelForScript(script)} of '${target.romaji}'` },
    { type: 'choice', target: target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${target.romaji}'?`, options: buildOptions(target, shuffled.slice(0, 3)) },
    { type: 'trace-overlay', target: shuffled[0]?.char || target.char, prompt: `Trace ${shuffled[0]?.char || target.char} with guide` },
    { type: 'prompt', target: shuffled[1]?.char || target.char, prompt: `Write the ${labelForScript(script)} of '${(shuffled[1] || target).romaji}'` },
    { type: 'choice', target: shuffled[2]?.char || target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${(shuffled[2] || target).romaji}'?`, options: buildOptions(shuffled[2] || target, shuffled.slice(3, 6)) },
    { type: 'trace-no-overlay', target: shuffled[3]?.char || target.char, prompt: `Trace ${shuffled[3]?.char || target.char} without guide` },
    { type: 'prompt', target: shuffled[4]?.char || target.char, prompt: `Write the ${labelForScript(script)} of '${(shuffled[4] || target).romaji}'` },
    { type: 'choice', target: shuffled[5]?.char || target.char, prompt: `Which one is the correct ${labelForScript(script)} for '${(shuffled[5] || target).romaji}'?`, options: buildOptions(shuffled[5] || target, shuffled.slice(6, 9)) },
  ];
}

export default CharacterPracticePage;
