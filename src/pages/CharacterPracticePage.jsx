import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineSound,
  AiOutlineCheckCircle,
  AiOutlineRight,
  AiOutlineReload,
  AiOutlineDashboard,
  AiOutlineTrophy,
  AiOutlineClockCircle,
  AiOutlineCheck,
  AiOutlineLock,
} from 'react-icons/ai';
import DrawingCanvas from '../components/DrawingCanvas';
import { kanjiAllData } from '../data/kanjiAllData';
import { speakJapanese } from '../utils/audio';
import { sfx } from '../utils/sfx';
import { isKanjiUnlocked } from '../utils/progression';
import ConfirmModal from '../components/ConfirmModal';

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
  { char: 'ハ', romaji: 'ha', strokes: 2 }, { char: 'ヒ', romaji: 'hi', strokes: 2 }, { char: 'フ', romaji: 'fu', strokes: 1 }, { char: 'ヘ', romaji: 'he', strokes: 1 }, { char: 'ほ', romaji: 'ho', strokes: 4 },
  { char: 'マ', romaji: 'ma', strokes: 2 }, { char: 'ミ', romaji: 'mi', strokes: 3 }, { char: 'ム', romaji: 'mu', strokes: 2 }, { char: 'メ', romaji: 'me', strokes: 2 }, { char: 'モ', romaji: 'mo', strokes: 3 },
  { char: 'ヤ', romaji: 'ya', strokes: 2 }, { char: 'ユ', romaji: 'yu', strokes: 2 }, { char: 'ヨ', romaji: 'yo', strokes: 3 },
  { char: 'ラ', romaji: 'ra', strokes: 2 }, { char: 'リ', romaji: 'ri', strokes: 2 }, { char: 'る', romaji: 'ru', strokes: 2 }, { char: 'レ', romaji: 're', strokes: 1 }, { char: 'ロ', romaji: 'ro', strokes: 3 },
  { char: 'ワ', romaji: 'wa', strokes: 2 }, { char: 'ヲ', romaji: 'wo', strokes: 3 }, { char: 'ン', romaji: 'n', strokes: 2 },
];

const kanjiChars = kanjiAllData.map((k) => ({
  char: k.char,
  romaji: k.meaning,
  strokes: k.strokes,
  meaning: k.meaning,
  onyomi: k.onyomi,
  kunyomi: k.kunyomi,
  level: k.level || 'N5',
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
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isFromDashboard = searchParams.get('from') === 'dashboard' || location.state?.from === 'dashboard';

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [choiceFeedback, setChoiceFeedback] = useState(null);

  // Scores and evaluation stats
  const [stepScores, setStepScores] = useState({});
  const [finalFeedback, setFinalFeedback] = useState(null);
  const [latestSrsInfo, setLatestSrsInfo] = useState(null);
  const [redirectCountdown, setRedirectCountdown] = useState(4);
  const [isRedirectPaused, setIsRedirectPaused] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const handleExitClick = (e) => {
    if (questionIndex > 0 && !completed) {
      e.preventDefault();
      setShowExitConfirm(true);
      return;
    }
  };

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    navigate(isFromDashboard ? '/dashboard' : `/learn/${script}`);
  };

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
    setStepScores({});
    setFinalFeedback(null);
    setLatestSrsInfo(null);
    setRedirectCountdown(4);
    setIsRedirectPaused(false);
  }, [targetCharObj.char, script]);

  // Audio prompt step auto-play
  useEffect(() => {
    if (currentQuestion?.autoPlayAudio) {
      speakJapanese(targetCharObj.kunyomi?.split(',')[0] || targetCharObj.char);
    }
  }, [currentQuestion, targetCharObj]);

  // Auto-redirect to dashboard when completed if review originated from dashboard
  useEffect(() => {
    if (!completed || !isFromDashboard || isRedirectPaused) return;

    if (redirectCountdown <= 0) {
      navigate('/dashboard');
      return;
    }

    const timer = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/dashboard');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [completed, isFromDashboard, isRedirectPaused, redirectCountdown, navigate]);

  // Calculate final score metrics
  const scoreVals = Object.values(stepScores);
  const calculatedAvg = scoreVals.length > 0
    ? Math.round(scoreVals.reduce((acc, curr) => acc + curr, 0) / scoreVals.length)
    : 95;
  const finalScore = finalFeedback?.score
    ? Math.round(finalFeedback.score * 0.6 + calculatedAvg * 0.4)
    : calculatedAvg;

  // Record character mastery on lesson completion
  useEffect(() => {
    if (!completed || !targetCharObj?.char || !script) return;
    const char = targetCharObj.char;
    const reviewScore = Math.max(finalScore || 85, 75);

    if (window.db?.recordReview) {
      window.db.recordReview(script, char, reviewScore).catch((e) => {
        console.warn('Error recording review to SQLite:', e);
      });
    }

    try {
      const storageKey = `hirakanjee_${script}_mastery`;
      const current = JSON.parse(localStorage.getItem(storageKey) || '{}');
      current[char] = {
        mastery: reviewScore,
        srsStage: Math.max(current[char]?.srsStage || 1, 1),
        totalReviews: (current[char]?.totalReviews || 0) + 1,
        correctReviews: (current[char]?.correctReviews || 0) + 1,
        learned: true,
        lastPracticedAt: new Date().toISOString(),
      };
      localStorage.setItem(storageKey, JSON.stringify(current));
    } catch (e) {
      console.warn('Error saving mastery cache to localStorage:', e);
    }
  }, [completed, targetCharObj, script, finalScore]);

  const nextQuestion = () => {
    const nextIdx = questionIndex + 1;
    if (nextIdx >= questions.length) {
      try {
        if (typeof sfx?.playVictory === 'function') {
          sfx.playVictory();
        } else if (typeof sfx?.playLevelUp === 'function') {
          sfx.playLevelUp();
        }
      } catch (err) {
        console.warn('Audio feedback error on lesson completion:', err);
      }
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
      try { sfx?.playCorrect?.(); } catch (e) {}
      setChoiceFeedback({ isCorrect: true, text: `Correct! '${opt.char}' is '${opt.romaji}'.` });
      const choiceScore = choiceFeedback ? 75 : 100;
      setStepScores((prev) => ({ ...prev, [questionIndex]: choiceScore }));
      setTimeout(() => nextQuestion(), 750);
    } else {
      try { sfx?.playIncorrect?.(); } catch (e) {}
      setChoiceFeedback({ isCorrect: false, text: `Not quite. That character is '${opt.char}'. Try again!` });
    }
  };

  const handleGradeComplete = (gradeData) => {
    const scoreVal = typeof gradeData.score === 'number' ? gradeData.score : (gradeData.isCorrect ? 100 : 65);
    setStepScores((prev) => ({ ...prev, [questionIndex]: scoreVal }));
    setFinalFeedback(gradeData);
    if (gradeData.srsInfo) {
      setLatestSrsInfo(gradeData.srsInfo);
    }

    if (gradeData.isCorrect || gradeData.score >= 70) {
      try { sfx?.playCorrect?.(); } catch (e) {}
      setTimeout(() => nextQuestion(), 850);
    } else {
      try { sfx?.playIncorrect?.(); } catch (e) {}
    }
  };

  const handleSkip = () => {
    setStepScores((prev) => {
      if (prev[questionIndex] === undefined) {
        return { ...prev, [questionIndex]: 70 };
      }
      return prev;
    });
    nextQuestion();
  };

  const handleRestart = () => {
    const lessonSteps = buildCharacterLesson(scriptCharList, targetCharObj.char, script);
    setQuestions(lessonSteps);
    setCurrentQuestion(lessonSteps[0]);
    setQuestionIndex(0);
    setCompleted(false);
    setSelectedOption(null);
    setChoiceFeedback(null);
    setStepScores({});
    setFinalFeedback(null);
    setLatestSrsInfo(null);
    setRedirectCountdown(4);
    setIsRedirectPaused(false);
  };

  const progress = questions.length ? Math.round(((questionIndex + 1) / questions.length) * 100) : 0;

  const getPerformanceGrade = (score) => {
    if (score >= 95) return { grade: 'A+', label: 'Mastery Certified', rating: '⭐⭐⭐' };
    if (score >= 88) return { grade: 'A', label: 'Excellent Form', rating: '⭐⭐⭐' };
    if (score >= 80) return { grade: 'B+', label: 'Great Execution', rating: '⭐⭐' };
    if (score >= 70) return { grade: 'B', label: 'Solid Grasp', rating: '⭐' };
    return { grade: 'Pass', label: 'Practice Recommended', rating: '' };
  };
  const perf = getPerformanceGrade(finalScore);

  const srsStageNumber = latestSrsInfo?.srsStage || 2;
  const getSrsStageData = (stg) => {
    if (stg <= 3) return { name: 'Apprentice', cls: 'stage-apprentice', desc: 'Stages 1–3 • Review in 4h to 1d' };
    if (stg <= 5) return { name: 'Guru', cls: 'stage-guru', desc: 'Stages 4–5 • Review in 3d to 1w' };
    if (stg <= 7) return { name: 'Master', cls: 'stage-master', desc: 'Stages 6–7 • Review in 2w to 1mo' };
    return { name: 'Burned', cls: 'stage-burned', desc: 'Stage 8 • Mastered permanently' };
  };
  const srsData = getSrsStageData(srsStageNumber);

  const isCharLocked = script === 'kanji' && !isKanjiUnlocked(targetCharObj?.level || 'N5');

  if (isCharLocked) {
    return (
      <div className="page-content practice-page">
        <div className="practice-header">
          <Link
            to={isFromDashboard ? '/dashboard' : `/learn/${script}`}
            className="back-link"
          >
            <AiOutlineArrowLeft className="back-icon" />
            <span>{isFromDashboard ? 'Exit to Dashboard' : 'Back to Kanji'}</span>
          </Link>
        </div>

        <div className="practice-card" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
            <AiOutlineLock size={56} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '12px' }}>
            Kanji '{targetCharObj?.char}' is Locked ({targetCharObj?.level || 'N5'})
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 28px', lineHeight: '1.6' }}>
            This {targetCharObj?.level || 'N5'} Kanji character becomes available when you unlock the {targetCharObj?.level || 'N5'} Kanji lesson in your curriculum.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link to="/learn/kanji" className="btn-primary" style={{ textDecoration: 'none', padding: '10px 22px', borderRadius: '8px' }}>
              Return to Kanji List
            </Link>
            <Link to="/learn" className="btn-secondary" style={{ textDecoration: 'none', padding: '10px 22px', borderRadius: '8px' }}>
              View Curriculum
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="page-content practice-page">
      <div className="practice-header">
        <Link
          to={isFromDashboard ? '/dashboard' : `/learn/${script}`}
          className="back-link"
          onClick={handleExitClick}
          aria-label={isFromDashboard ? 'Return to Dashboard' : 'Return to Table'}
        >
          <AiOutlineArrowLeft className="back-icon" />
          <span>{isFromDashboard ? 'Exit to Dashboard' : 'Exit Lesson'}</span>
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
        {completed ? (
          <div className="lesson-results-container">
            {/* Dashboard Auto-Return Banner */}
            {isFromDashboard && (
              <div className="review-dashboard-banner">
                <div className="banner-text">
                  <div className="banner-icon-box">
                    <AiOutlineDashboard size={22} />
                  </div>
                  <div>
                    <h4>Review Completed from Dashboard!</h4>
                    <p>
                      {isRedirectPaused
                        ? 'Auto-redirect paused. Review your score below.'
                        : `Returning to Dashboard in ${redirectCountdown}s...`}
                    </p>
                  </div>
                </div>
                <div className="banner-actions">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="btn-return-instant"
                  >
                    Return to Dashboard Now ➔
                  </button>
                  <button
                    onClick={() => setIsRedirectPaused((p) => !p)}
                    className="btn-timer-toggle"
                  >
                    {isRedirectPaused ? 'Resume Timer' : 'Pause Timer'}
                  </button>
                </div>
              </div>
            )}

            {/* Results Header */}
            <div className="results-top-header">
              <div className="results-badge-pill">
                <AiOutlineCheckCircle size={18} />
                <span>Lesson Complete</span>
              </div>
              <h1 className="results-title">
                {labelForScript(script)}: {targetCharObj.char} <span className="results-romaji">({targetCharObj.romaji})</span>
              </h1>
              <p className="results-subtitle">
                You successfully completed all 6 mastery stages for <strong>{targetCharObj.char}</strong>.
              </p>
            </div>

            {/* Big Score Hero Card */}
            <div className="results-score-hero">
              <div className="score-ring-container">
                <div className="score-big-number">{finalScore}%</div>
                <div className="score-tier-tag">
                  {perf.rating && <span className="score-stars">{perf.rating}</span>}
                  <span className="score-grade">{perf.grade}</span>
                  <span className="score-label">{perf.label}</span>
                </div>
              </div>
            </div>

            {/* 3 Summary Metrics */}
            <div className="results-summary-grid">
              <div className="results-summary-box">
                <span className="summary-box-label">Evaluation Score</span>
                <span className="summary-box-val">{finalScore}%</span>
                <span className="summary-box-sub">
                  {finalFeedback?.score ? `${finalFeedback.score.toFixed(1)}% final handwriting test` : 'High accuracy performance'}
                </span>
              </div>

              <div className="results-summary-box">
                <span className="summary-box-label">SRS Stage</span>
                <span className={`summary-box-val ${srsData.cls}`}>
                  {srsData.name} ({srsStageNumber}/8)
                </span>
                <span className="summary-box-sub">{srsData.desc}</span>
              </div>

              <div className="results-summary-box">
                <span className="summary-box-label">Curriculum Mastered</span>
                <span className="summary-box-val">6 / 6 Stages</span>
                <span className="summary-box-sub">All practice steps verified</span>
              </div>
            </div>

            {/* Stage Breakdown List */}
            <div className="results-stages-breakdown">
              <h3>Lesson Stage Performance</h3>
              <div className="stages-breakdown-list">
                {questions.map((q, idx) => {
                  const stepSc = stepScores[idx] !== undefined ? Math.round(stepScores[idx]) : 100;
                  return (
                    <div key={q.step} className="breakdown-step-row">
                      <div className="step-left">
                        <span className="step-num">Step {q.step}</span>
                        <span className="step-name">{q.title.replace(/^Step \d+:\s*/, '')}</span>
                      </div>
                      <div className="step-right">
                        <AiOutlineCheck size={14} className="check-icon" />
                        <span className="step-score-badge">{stepSc}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="results-bottom-actions">
              {isFromDashboard ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="action-btn grade-btn action-primary"
                >
                  <AiOutlineDashboard size={18} />
                  <span>Return to Dashboard Now</span>
                </button>
              ) : nextCharObj ? (
                <Link
                  to={`/learn/practice/${script}/${encodeURIComponent(nextCharObj.char)}`}
                  className="action-btn grade-btn action-primary"
                >
                  <span>Next: Study '{nextCharObj.char}' ({nextCharObj.romaji})</span>
                  <AiOutlineRight size={16} />
                </Link>
              ) : null}

              <button
                onClick={handleRestart}
                className="action-btn clear-btn"
              >
                <AiOutlineReload size={16} />
                <span>Practice '{targetCharObj.char}' Again</span>
              </button>

              {!isFromDashboard && (
                <Link
                  to={`/learn/${script}`}
                  className="action-btn clear-btn"
                >
                  Back to {labelForScript(script)} Table
                </Link>
              )}

              {isFromDashboard && nextCharObj && (
                <Link
                  to={`/learn/practice/${script}/${encodeURIComponent(nextCharObj.char)}?from=dashboard`}
                  state={{ from: 'dashboard' }}
                  className="action-btn clear-btn"
                >
                  <span>Study '{nextCharObj.char}'</span>
                  <AiOutlineRight size={14} />
                </Link>
              )}
            </div>
          </div>
        ) : (
          <>
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
                  background: 'rgba(234, 88, 12, 0.12)',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ea580c',
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

            {currentQuestion.type === 'choice' ? (
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
                    onClick={handleSkip}
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
                    onClick={handleSkip}
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
          </>
        )}
      </div>

      {/* Exit Practice Confirmation Modal */}
      <ConfirmModal
        isOpen={showExitConfirm}
        title="Exit Character Practice?"
        message={`You are on step ${questionIndex + 1} of ${questions.length}. Your progress for this practice session will be lost.`}
        confirmText="Exit Practice"
        cancelText="Keep Practicing"
        variant="warning"
        onConfirm={handleConfirmExit}
        onCancel={() => setShowExitConfirm(false)}
      />
    </div>
  );
}
