import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineSound,
  AiOutlineCheckCircle,
  AiOutlineRight,
  AiOutlineReload,
} from 'react-icons/ai';
import DrawingCanvas from '../components/DrawingCanvas';
import { kanjiN5Data } from '../data/kanjiN5Data';
import { speakJapanese } from '../utils/audio';

const hiraganaChars = [
  { char: 'あ', romaji: 'a', strokes: 3 }, { char: 'い', romaji: 'i', strokes: 2 }, { char: 'う', romaji: 'u', strokes: 2 }, { char: 'え', romaji: 'e', strokes: 2 }, { char: 'お', romaji: 'o', strokes: 3 },
  { char: 'か', romaji: 'ka', strokes: 3 }, { char: 'き', romaji: 'ki', strokes: 4 }, { char: 'く', romaji: 'ku', strokes: 1 }, { char: 'け', romaji: 'ke', strokes: 3 }, { char: 'こ', romaji: 'ko', strokes: 2 },
  { char: 'さ', romaji: 'sa', strokes: 3 }, { char: 'し', romaji: 'shi', strokes: 1 }, { char: 'す', romaji: 'su', strokes: 2 }, { char: 'せ', romaji: 'se', strokes: 3 }, { char: 'そ', romaji: 'so', strokes: 1 },
  { char: 'た', romaji: 'ta', strokes: 4 }, { char: 'ち', romaji: 'chi', strokes: 2 }, { char: 'つ', romaji: 'tsu', strokes: 1 }, { char: 'て', romaji: 'te', strokes: 1 }, { char: 'と', romaji: 'to', strokes: 2 },
  { char: 'な', romaji: 'na', strokes: 4 }, { char: 'に', romaji: 'ni', strokes: 3 }, { char: 'ぬ', romaji: 'nu', strokes: 2 }, { char: 'ね', romaji: 'ne', strokes: 2 }, { char: 'の', romaji: 'no', strokes: 1 },
  { char: 'は', romaji: 'ha', strokes: 3 }, { char: 'ひ', romaji: 'hi', strokes: 1 }, { char: 'ふ', romaji: 'fu', strokes: 4 }, { char: 'へ', romaji: 'he', strokes: 1 }, { char: 'ほ', romaji: 'ho', strokes: 4 },
  { char: 'ま', romaji: 'ma', strokes: 3 }, { char: 'み', romaji: 'mi', strokes: 2 }, { char: 'む', romaji: 'mu', strokes: 3 }, { char: 'め', romaji: 'me', strokes: 2 }, { char: 'も', romaji: 'mo', strokes: 3 },
  { char: 'や', romaji: 'ya', strokes: 3 }, { char: 'ゆ', romaji: 'yu', strokes: 2 }, { char: 'よ', romaji: 'yo', strokes: 2 },
  { char: 'ら', romaji: 'ra', strokes: 2 }, { char: 'り', romaji: 'ri', strokes: 2 }, { char: 'る', romaji: 'ru', strokes: 1 }, { char: 'れ', romaji: 're', strokes: 2 }, { char: 'ろ', romaji: 'ro', strokes: 1 },
  { char: 'わ', romaji: 'wa', strokes: 2 }, { char: 'を', romaji: 'wo', strokes: 3 }, { char: 'ん', romaji: 'n', strokes: 1 },
];

const katakanaChars = [
  { char: 'ア', romaji: 'a', strokes: 2 }, { char: 'イ', romaji: 'i', strokes: 2 }, { char: 'ウ', romaji: 'u', strokes: 3 }, { char: 'エ', romaji: 'e', strokes: 3 }, { char: 'オ', romaji: 'o', strokes: 3 },
  { char: 'カ', romaji: 'ka', strokes: 2 }, { char: 'キ', romaji: 'ki', strokes: 3 }, { char: 'ク', romaji: 'ku', strokes: 2 }, { char: 'ケ', romaji: 'ke', strokes: 3 }, { char: 'コ', romaji: 'ko', strokes: 2 },
  { char: 'サ', romaji: 'sa', strokes: 3 }, { char: 'シ', romaji: 'shi', strokes: 3 }, { char: 'ス', romaji: 'su', strokes: 2 }, { char: 'セ', romaji: 'se', strokes: 2 }, { char: 'ソ', romaji: 'so', strokes: 2 },
  { char: 'タ', romaji: 'ta', strokes: 3 }, { char: 'チ', romaji: 'chi', strokes: 3 }, { char: 'ツ', romaji: 'tsu', strokes: 3 }, { char: 'テ', romaji: 'te', strokes: 3 }, { char: 'ト', romaji: 'to', strokes: 2 },
  { char: 'ナ', romaji: 'na', strokes: 2 }, { char: 'ニ', romaji: 'ni', strokes: 2 }, { char: 'ヌ', romaji: 'nu', strokes: 2 }, { char: 'ネ', romaji: 'ne', strokes: 4 }, { char: 'ノ', romaji: 'no', strokes: 1 },
  { char: 'ハ', romaji: 'ha', strokes: 2 }, { char: 'ヒ', romaji: 'hi', strokes: 2 }, { char: 'フ', romaji: 'fu', strokes: 1 }, { char: 'ヘ', romaji: 'he', strokes: 1 }, { char: 'ホ', romaji: 'ho', strokes: 4 },
  { char: 'マ', romaji: 'ma', strokes: 2 }, { char: 'ミ', romaji: 'mi', strokes: 3 }, { char: 'ム', romaji: 'mu', strokes: 2 }, { char: 'メ', romaji: 'me', strokes: 2 }, { char: 'モ', romaji: 'mo', strokes: 3 },
  { char: 'ヤ', romaji: 'ya', strokes: 2 }, { char: 'ユ', romaji: 'yu', strokes: 2 }, { char: 'ヨ', romaji: 'yo', strokes: 3 },
  { char: 'ラ', romaji: 'ra', strokes: 2 }, { char: 'リ', romaji: 'ri', strokes: 2 }, { char: 'ル', romaji: 'ru', strokes: 2 }, { char: 'レ', romaji: 're', strokes: 1 }, { char: 'ロ', romaji: 'ro', strokes: 3 },
  { char: 'ワ', romaji: 'wa', strokes: 2 }, { char: 'ヲ', romaji: 'wo', strokes: 3 }, { char: 'ン', romaji: 'n', strokes: 2 },
];

const kanjiChars = kanjiN5Data.map((k) => ({
  char: k.char,
  romaji: k.meaning,
  strokes: k.strokes,
  meaning: k.meaning,
  onyomi: k.onyomi,
  kunyomi: k.kunyomi,
}));

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const labelForScript = (script) => {
  if (script === 'katakana') return 'Katakana';
  if (script === 'kanji') return 'Kanji';
  return 'Hiragana';
};

/**
 * Builds a dedicated 6-step mastery progression that STICKS 100% to the target character.
 * Never switches to random other characters during this character's lesson.
 */
const buildCharacterLesson = (chars, targetChar, script) => {
  const target = chars.find((item) => item.char === targetChar) || chars[0];
  const others = chars.filter((item) => item.char !== target.char);
  const distractors = shuffle(others).slice(0, 3);
  const scriptName = labelForScript(script);

  return [
    {
      step: 1,
      type: 'trace-overlay',
      target: target.char,
      item: target,
      title: 'Step 1: Guided Tracing',
      prompt: `Trace '${target.char}' following the stroke outline`,
      showWatermark: true,
    },
    {
      step: 2,
      type: 'trace-no-overlay',
      target: target.char,
      item: target,
      title: 'Step 2: Proportions & Balance',
      prompt: `Draw '${target.char}' using the quadrant guide lines`,
      showWatermark: false,
    },
    {
      step: 3,
      type: 'choice',
      target: target.char,
      item: target,
      title: 'Step 3: Visual Recognition',
      prompt: `Which character is '${target.char}' (${target.romaji})?`,
      options: shuffle([target, ...distractors]),
    },
    {
      step: 4,
      type: 'audio-prompt',
      target: target.char,
      item: target,
      title: 'Step 4: Sound Recall',
      prompt: `Listen and write '${target.char}' for the sound '${target.romaji}'`,
      showWatermark: false,
      autoPlayAudio: true,
    },
    {
      step: 5,
      type: 'prompt',
      target: target.char,
      item: target,
      title: 'Step 5: Memory Recall',
      prompt: `Write the ${scriptName} for '${target.romaji}' from memory`,
      showWatermark: false,
    },
    {
      step: 6,
      type: 'mastery',
      target: target.char,
      item: target,
      title: 'Step 6: Final Mastery Challenge',
      prompt: `Mastery Challenge: Draw '${target.char}' cleanly for evaluation`,
      showWatermark: false,
    },
  ];
};

export default function CharacterPracticePage() {
  const { script = 'hiragana', char } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [choiceFeedback, setChoiceFeedback] = useState(null);

  const scriptCharList = useMemo(() => {
    if (script === 'katakana') return katakanaChars;
    if (script === 'kanji') return kanjiChars;
    return hiraganaChars;
  }, [script]);

  const targetCharObj = useMemo(() => {
    const targetStr = decodeURIComponent(char || '');
    return scriptCharList.find((item) => item.char === targetStr) || scriptCharList[0];
  }, [scriptCharList, char]);

  const currentIndex = scriptCharList.findIndex((item) => item.char === targetCharObj.char);
  const nextCharObj =
    currentIndex >= 0 && currentIndex + 1 < scriptCharList.length
      ? scriptCharList[currentIndex + 1]
      : null;

  // Initialize lesson that strictly sticks to the selected character
  useEffect(() => {
    if (!scriptCharList.length || !targetCharObj) return;
    const lessonSteps = buildCharacterLesson(scriptCharList, targetCharObj.char, script);
    setQuestions(lessonSteps);
    setCurrentQuestion(lessonSteps[0]);
    setQuestionIndex(0);
    setCompleted(false);
    setSelectedOption(null);
    setChoiceFeedback(null);
  }, [targetCharObj.char, script]);

  // Audio prompt step auto-play
  useEffect(() => {
    if (currentQuestion?.autoPlayAudio) {
      speakJapanese(targetCharObj.kunyomi?.split(',')[0] || targetCharObj.char);
    }
  }, [currentQuestion, targetCharObj]);

  const nextQuestion = () => {
    const nextIdx = questionIndex + 1;
    if (nextIdx >= questions.length) {
      setCompleted(true);
      return;
    }
    setQuestionIndex(nextIdx);
    setCurrentQuestion(questions[nextIdx]);
    setSelectedOption(null);
    setChoiceFeedback(null);
  };

  const handleChoiceSelect = (opt) => {
    setSelectedOption(opt.char);
    if (opt.char === currentQuestion.target) {
      setChoiceFeedback({ isCorrect: true, text: `Correct! '${opt.char}' is '${opt.romaji}'.` });
      setTimeout(() => nextQuestion(), 750);
    } else {
      setChoiceFeedback({ isCorrect: false, text: `Not quite. That character is '${opt.char}'. Try again!` });
    }
  };

  const handleGradeComplete = (gradeData) => {
    if (gradeData.isCorrect) {
      setTimeout(() => nextQuestion(), 850);
    }
  };

  const progress = questions.length ? Math.round(((questionIndex + 1) / questions.length) * 100) : 0;

  if (!currentQuestion) return null;

  return (
    <div className="page-content practice-page">
      <div className="practice-header">
        <Link to={`/learn/${script}`} className="back-link" aria-label="Return to Table">
          <AiOutlineArrowLeft className="back-icon" />
          <span>Exit Lesson</span>
        </Link>
        <div className="practice-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span>
            {questionIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div className="practice-card">
        {/* Character Title & Pronunciation Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <h1 style={{ margin: 0, fontSize: '2.2rem' }}>
            {labelForScript(script)}: {targetCharObj.char}
          </h1>
          <button
            onClick={() =>
              speakJapanese(
                targetCharObj.kunyomi?.split(',')[0] ||
                  targetCharObj.char
              )
            }
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: 'none',
              cursor: 'pointer',
              color: '#3b82f6',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title={`Pronounce ${targetCharObj.char}`}
            aria-label={`Pronounce ${targetCharObj.char}`}
          >
            <AiOutlineSound size={22} />
          </button>
        </div>

        <p className="practice-target">
          Reading / Meaning: <strong>{targetCharObj.romaji}</strong>
          {targetCharObj.strokes && ` • ${targetCharObj.strokes} strokes`}
          {targetCharObj.onyomi && ` • 音: ${targetCharObj.onyomi}`}
        </p>

        <h2 style={{ fontSize: '1.15rem', color: 'var(--text-secondary, #374151)', margin: '0.6rem 0 1.2rem' }}>
          {currentQuestion.prompt}
        </h2>

        {completed ? (
          <div className="practice-complete" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <AiOutlineCheckCircle size={56} style={{ color: '#22c55e', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary, #111827)', margin: '0 0 0.5rem' }}>
              Lesson Complete for '{targetCharObj.char}'!
            </h3>
            <p style={{ color: 'var(--text-muted, #4b5563)', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: '1.5' }}>
              You successfully mastered all 6 practice stages for <strong>{targetCharObj.char}</strong> ({targetCharObj.romaji}). Your progress and SRS reviews have been updated.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  const lessonSteps = buildCharacterLesson(scriptCharList, targetCharObj.char, script);
                  setQuestions(lessonSteps);
                  setCurrentQuestion(lessonSteps[0]);
                  setQuestionIndex(0);
                  setCompleted(false);
                }}
                className="action-btn clear-btn"
                style={{ width: 'auto', padding: '10px 18px' }}
              >
                <AiOutlineReload size={15} />
                Practice '{targetCharObj.char}' Again
              </button>

              {nextCharObj && (
                <Link
                  to={`/learn/practice/${script}/${encodeURIComponent(nextCharObj.char)}`}
                  className="action-btn grade-btn"
                  style={{ width: 'auto', padding: '10px 22px', textDecoration: 'none' }}
                >
                  <span>Next: Study '{nextCharObj.char}' ({nextCharObj.romaji})</span>
                  <AiOutlineRight size={15} />
                </Link>
              )}

              <Link
                to={`/learn/${script}`}
                className="action-btn clear-btn"
                style={{ width: 'auto', padding: '10px 18px', textDecoration: 'none' }}
              >
                Back to {labelForScript(script)} Table
              </Link>
            </div>
          </div>
        ) : currentQuestion.type === 'choice' ? (
          <div style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}>
            <div className="choice-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.char}
                  className={`choice-option ${selectedOption === opt.char ? 'selected' : ''}`}
                  onClick={() => handleChoiceSelect(opt)}
                  style={{
                    padding: '1.2rem 0.5rem',
                    borderRadius: '10px',
                    border: '2px solid var(--border-color, #e5e7eb)',
                    background: selectedOption === opt.char ? 'var(--choice-active-bg, #eff6ff)' : 'var(--bg-card, white)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span className="choice-char" style={{ fontSize: '2.4rem', fontWeight: 'bold', color: 'var(--text-primary, #1f2937)' }}>{opt.char}</span>
                  <span className="choice-romaji" style={{ fontSize: '0.85rem', color: 'var(--text-muted, #6b7280)' }}>{opt.romaji}</span>
                </button>
              ))}
            </div>

            {choiceFeedback && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: choiceFeedback.isCorrect ? '#f0fdf4' : '#fef2f2',
                  color: choiceFeedback.isCorrect ? '#15803d' : '#b91c1c',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {choiceFeedback.text}
              </div>
            )}

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button
                onClick={nextQuestion}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted, #6b7280)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Skip Question
              </button>
            </div>
          </div>
        ) : (
          <div>
            <DrawingCanvas
              key={`${currentQuestion.target}-${questionIndex}`}
              targetChar={currentQuestion.target}
              overlayChar={currentQuestion.showWatermark ? currentQuestion.target : null}
              expectedStrokes={targetCharObj.strokes}
              script={script}
              onGradeComplete={handleGradeComplete}
              autoRecordSRS={true}
            />

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button
                onClick={nextQuestion}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Skip to next step
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
