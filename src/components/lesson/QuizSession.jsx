import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSound,
  AiOutlineTrophy,
  AiOutlineReload,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineBook,
  AiOutlineCheckCircle,
  AiOutlineThunderbolt,
  AiOutlineSetting,
} from 'react-icons/ai';
import { speakJapanese } from '../../utils/audio';
import { sfx } from '../../utils/sfx';
import ConfirmModal from '../ConfirmModal';

export default function QuizSession({
  currentLesson,
  questions = [],
  quizMode = 'practice', // 'learning' | 'practice' | 'skip' | 'chain'
  chainTitle = '',
  chainId = null,
  isUpperLevel = false,
  levelCode = 'N5',
  nextUnlockedLevel = 'N4',
  nextLesson = null,
  normalizedSections = [],
  shouldShowRomaji = false,
  localShowRomaji = false,
  toggleRomaji,
  onExit,
  onComplete,
  onRecordKanjiReview,
  onLearnAgain,
  onStartPractice,
  onStartLearning,
  onStartSkipExam,
  onReviewGuide,
  onNextLesson,
}) {
  const navigate = useNavigate();

  // Internal Question Queue & Progress States
  const [activeQueue, setActiveQueue] = useState(() => questions.map((_, i) => i));
  const [queueIdx, setQueueIdx] = useState(0);
  const [mistakeQueue, setMistakeQueue] = useState([]);
  const [firstPassMistakes, setFirstPassMistakes] = useState([]);
  const [isReviewPhase, setIsReviewPhase] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // User input states
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedChips, setSelectedChips] = useState([]);
  const [checkStatus, setCheckStatus] = useState('idle'); // 'idle' | 'correct' | 'incorrect'
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Modals
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showQuizSettingsModal, setShowQuizSettingsModal] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const isSkipMode = quizMode === 'skip';
  const isExam = Boolean(
    currentLesson?.isExam ||
    currentLesson?.id?.includes('exam') ||
    currentLesson?.id === 'n5-level-exam' ||
    currentLesson?.id === 'n4-level-exam' ||
    currentLesson?.id === 'n3-level-exam'
  );

  // Hide navigation sidebar when actively in a quiz
  useEffect(() => {
    if (!isFinished) {
      document.body.classList.add('in-quiz-mode');
    } else {
      document.body.classList.remove('in-quiz-mode');
    }
    return () => {
      document.body.classList.remove('in-quiz-mode');
    };
  }, [isFinished]);

  const currentQuestionIdx = activeQueue[queueIdx] !== undefined ? activeQueue[queueIdx] : 0;
  const currentQuestion = questions[currentQuestionIdx] || questions[0];

  // Auto-play audio once if question is audio-listening
  useEffect(() => {
    if (currentQuestion?.type === 'audio-listening' && checkStatus === 'idle') {
      const audioText = currentQuestion.audioText || currentQuestion.question || currentQuestion.prompt;
      if (!audioText) return;
      const timer = setTimeout(() => {
        speakJapanese(audioText);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIdx, checkStatus]);

  const handlePlayPromptAudio = (text) => {
    setAudioPlaying(true);
    speakJapanese(text);
    setTimeout(() => setAudioPlaying(false), 1200);
  };

  const handleAddChip = (chipIndex) => {
    if (checkStatus !== 'idle') return;
    if (selectedChips.includes(chipIndex)) return;
    const chipText = currentQuestion?.chips?.[chipIndex];
    if (chipText) {
      speakJapanese(chipText);
    }
    sfx.playTileClick();
    setSelectedChips((prev) => [...prev, chipIndex]);
  };

  const handleRemoveChip = (chipIndex) => {
    if (checkStatus !== 'idle') return;
    sfx.playTileClick();
    setSelectedChips((prev) => prev.filter((i) => i !== chipIndex));
  };

  const isInputProvided = () => {
    if (!currentQuestion) return false;
    if (currentQuestion.type === 'word-bank') {
      return selectedChips.length > 0;
    }
    return selectedOption !== null;
  };

  const handleCheck = () => {
    if (checkStatus !== 'idle') return;

    let isCorrect = false;

    if (currentQuestion.type === 'word-bank') {
      const userOrder = selectedChips.map((i) => currentQuestion.chips[i]);
      const correctJoined = currentQuestion.correctAnswerSentence
        ? currentQuestion.correctAnswerSentence.replace(/\s+/g, '')
        : currentQuestion.correctOrder
          ? currentQuestion.correctOrder.join('').replace(/\s+/g, '')
          : '';
      const userJoined = userOrder.join('').replace(/\s+/g, '');
      isCorrect = userJoined === correctJoined;
    } else {
      isCorrect = selectedOption === currentQuestion.correctAnswer;
    }

    if (isCorrect) {
      sfx.playCorrect();
      setCheckStatus('correct');
    } else {
      sfx.playIncorrect();
      setCheckStatus('incorrect');

      if (!isReviewPhase && !firstPassMistakes.includes(currentQuestionIdx)) {
        setFirstPassMistakes((prev) => [...prev, currentQuestionIdx]);
      }
      if (!mistakeQueue.includes(currentQuestionIdx)) {
        setMistakeQueue((prev) => [...prev, currentQuestionIdx]);
      }
    }

    if (currentQuestion?.kanjiChar && onRecordKanjiReview) {
      onRecordKanjiReview(currentQuestion.kanjiChar, isCorrect);
    }
  };

  const handleContinue = () => {
    if (queueIdx < activeQueue.length - 1) {
      setQueueIdx((prev) => prev + 1);
      setSelectedOption(null);
      setSelectedChips([]);
      setCheckStatus('idle');
    } else {
      // Reached the end of activeQueue
      if (mistakeQueue.length > 0) {
        setIsReviewPhase(true);
        setActiveQueue([...mistakeQueue]);
        setMistakeQueue([]);
        setQueueIdx(0);
        setSelectedOption(null);
        setSelectedChips([]);
        setCheckStatus('idle');
      } else {
        setIsFinished(true);
        sfx.playVictory();

        const initialTotal = questions.length || 10;
        const initialCorrect = initialTotal - firstPassMistakes.length;
        const totalScore = Math.max(0, Math.round((initialCorrect / initialTotal) * 100));

        if (onComplete) {
          onComplete({ totalScore, quizMode, initialTotal, firstPassMistakes, chainId });
        }
      }
    }
  };

  const handleSkipQuestion = () => {
    if (checkStatus !== 'idle') return;

    const updatedMistakes = !mistakeQueue.includes(currentQuestionIdx)
      ? [...mistakeQueue, currentQuestionIdx]
      : mistakeQueue;

    if (!isReviewPhase && !firstPassMistakes.includes(currentQuestionIdx)) {
      setFirstPassMistakes((prev) => [...prev, currentQuestionIdx]);
    }
    setMistakeQueue(updatedMistakes);

    sfx.playTileClick();

    if (queueIdx < activeQueue.length - 1) {
      setQueueIdx((prev) => prev + 1);
      setSelectedOption(null);
      setSelectedChips([]);
      setCheckStatus('idle');
    } else {
      setIsReviewPhase(true);
      setActiveQueue([...updatedMistakes]);
      setMistakeQueue([]);
      setQueueIdx(0);
      setSelectedOption(null);
      setSelectedChips([]);
      setCheckStatus('idle');
    }
  };

  const totalQuestionsToMaster = questions.length || 10;
  const masteredCount = isReviewPhase
    ? totalQuestionsToMaster - mistakeQueue.length - (checkStatus === 'correct' ? 1 : 0)
    : queueIdx;
  const progressPercent = Math.min(100, Math.round((masteredCount / totalQuestionsToMaster) * 100));

  // VICTORY SCREEN
  if (isFinished) {
    const initialTotal = questions.length || 1;
    const initialCorrect = initialTotal - firstPassMistakes.length;
    const initialAccuracyPercent = Math.max(0, Math.round((initialCorrect / initialTotal) * 100));
    const isSkipPassed = isSkipMode && initialAccuracyPercent >= 80;
    const isExamPassed = isExam && initialAccuracyPercent >= 80;

    return (
      <div className="practice-session-container">
        <div className="practice-victory-card">
          <div className="practice-trophy-icon">
            {isExamPassed ? (
              <AiOutlineTrophy size={52} />
            ) : isSkipMode && isSkipPassed ? (
              <AiOutlineThunderbolt size={50} />
            ) : (
              <AiOutlineTrophy size={48} />
            )}
          </div>
          <h2>
            {isSkipMode
              ? isSkipPassed ? '⚡ Lesson Skipped & Unlocked!' : 'Skip Test Incomplete'
              : isExam
                ? isExamPassed ? `🏆 JLPT ${levelCode} Certification Passed!` : `Exam Score: ${initialAccuracyPercent}%`
                : quizMode === 'chain'
                  ? `⚡ Chain Completed: ${chainTitle || 'Targeted Drill'}!`
                  : quizMode === 'learning'
                    ? 'Learning Quiz Complete!'
                    : 'Practice Complete!'}
          </h2>
          <p className="practice-victory-sub">
            {isSkipMode
              ? isSkipPassed
                ? `Outstanding! You scored ${initialAccuracyPercent}% and demonstrated mastery of ${currentLesson.shortTitle || currentLesson.title}. Progression has been unlocked!`
                : `You scored ${initialAccuracyPercent}%. An accuracy of 80% or higher is required to skip this lesson. Please study the lesson guide or try again.`
              : isExam
                ? isExamPassed
                  ? `Congratulations! You scored ${initialAccuracyPercent}% on the Comprehensive Level Exam. JLPT ${nextUnlockedLevel} is now officially unlocked on your dashboard!`
                  : `You scored ${initialAccuracyPercent}%. A passing grade of 80% (20/25) is required to unlock JLPT ${nextUnlockedLevel}. Review the curriculum topics and retake the exam when ready.`
                : quizMode === 'chain'
                  ? `Great work! You scored ${initialAccuracyPercent}% and cleared ${chainTitle || 'this drill'}!`
                  : quizMode === 'learning'
                    ? `You've walked through the formulas, pronunciation, meanings, and sentence patterns for ${currentLesson.shortTitle || currentLesson.title}!`
                    : currentLesson.id === 'kanji-n5-mastery'
                      ? 'Randomized N5 Kanji reading quiz completed and character statistics updated!'
                      : 'All questions and review items have been completed and mastered.'}
          </p>

          <div className="victory-stats-grid">
            <div className="v-stat-card">
              <span className="v-stat-label">Initial Accuracy</span>
              <span className="v-stat-val">{initialAccuracyPercent}%</span>
            </div>
            <div className="v-stat-card">
              <span className="v-stat-label">Questions Completed</span>
              <span className="v-stat-val">
                {initialTotal} / {initialTotal}
              </span>
            </div>
            <div className="v-stat-card">
              <span className="v-stat-label">Mistakes Reviewed</span>
              <span className="v-stat-val">
                {firstPassMistakes.length === 0
                  ? 'None (Perfect!)'
                  : `${firstPassMistakes.length} Reviewed`}
              </span>
            </div>
          </div>

          {isSkipMode ? (
            <div className="victory-actions learning-victory-actions">
              {isSkipPassed && nextLesson && (
                <button
                  className="practice-btn-primary"
                  onClick={() => onNextLesson ? onNextLesson(nextLesson) : navigate(`/learn/${levelCode.toLowerCase()}/${nextLesson.id}`)}
                >
                  <AiOutlineArrowRight size={16} /> Next Lesson
                </button>
              )}
              {isSkipPassed ? (
                <button className="practice-btn-secondary" onClick={onReviewGuide || onExit}>
                  <AiOutlineBook size={16} /> Review Lesson Guide
                </button>
              ) : (
                <button className="practice-btn-primary" onClick={onStartSkipExam}>
                  <AiOutlineReload size={16} /> Try Skip Test Again
                </button>
              )}
              <button className="practice-btn-secondary" onClick={() => navigate('/learn')}>
                <AiOutlineArrowLeft size={16} /> Return to Lessons
              </button>
            </div>
          ) : isExam ? (
            <div className="victory-actions learning-victory-actions">
              {isExamPassed ? (
                <button
                  className="practice-btn-primary"
                  onClick={() => navigate('/learn')}
                >
                  <AiOutlineTrophy size={16} /> Go to JLPT {nextUnlockedLevel}
                </button>
              ) : (
                <button className="practice-btn-primary" onClick={onStartPractice}>
                  <AiOutlineReload size={16} /> Retake Exam
                </button>
              )}
              <button className="practice-btn-secondary" onClick={() => navigate('/learn')}>
                <AiOutlineArrowLeft size={16} /> Return to Lessons
              </button>
            </div>
          ) : (
            <div className={`victory-actions ${quizMode === 'learning' ? 'learning-victory-actions' : ''}`}>
              {quizMode === 'learning' ? (
                <>
                  <button className="practice-btn-primary" onClick={onStartPractice}>
                    <AiOutlineArrowRight size={16} /> Start Practice Quiz
                  </button>
                  <button className="practice-btn-secondary" onClick={onStartLearning || onLearnAgain}>
                    <AiOutlineReload size={16} /> Learn Again
                  </button>
                  <button className="practice-btn-secondary" onClick={onReviewGuide || onExit}>
                    <AiOutlineArrowLeft size={16} /> Return
                  </button>
                </>
              ) : (
                <>
                  <button className="practice-btn-secondary" onClick={onStartPractice}>
                    <AiOutlineReload size={16} /> Practice Again
                  </button>
                  {!isUpperLevel && onStartLearning && (
                    <button className="practice-btn-secondary" onClick={onStartLearning}>
                      <AiOutlineBook size={16} /> Take Learning Quiz
                    </button>
                  )}
                  <button className="practice-btn-secondary" onClick={onReviewGuide || onExit}>
                    <AiOutlineBook size={16} /> Review Guide & Checklist
                  </button>
                  {nextLesson && (
                    <button
                      className="practice-btn-primary"
                      onClick={() => onNextLesson ? onNextLesson(nextLesson) : navigate(`/learn/${levelCode.toLowerCase()}/${nextLesson.id}`)}
                    >
                      Next Lesson <AiOutlineArrowRight size={16} />
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ACTIVE QUIZ INTERFACE
  return (
    <div className="practice-session-container">
      {/* Top Header Bar */}
      <div className="practice-top-bar">
        <button
          className="practice-exit-btn"
          onClick={() => setShowExitConfirm(true)}
          title="Exit practice session"
        >
          <AiOutlineClose size={20} />
        </button>

        <span className={`quiz-mode-pill ${quizMode}`}>
          {quizMode === 'learning'
            ? '📖 Guided Learning Quiz'
            : quizMode === 'chain'
              ? `⚡ ${chainTitle || 'Quiz Chain'}`
              : '🎯 Practice Session'}
        </span>

        <div className="practice-progress-track">
          <div
            className={`practice-progress-fill ${isReviewPhase ? 'review-fill' : ''}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="practice-top-meta">
          <button
            className="practice-settings-btn"
            onClick={() => setShowQuizSettingsModal(true)}
            title="Quiz Settings"
          >
            <AiOutlineSetting size={16} />
            <span>Settings</span>
          </button>

          <button
            className="practice-notes-btn"
            onClick={() => setShowNotesModal(true)}
            title="Peek at Lesson Notes & Formulas"
          >
            <AiOutlineBook size={16} />
            <span>Formulas & Notes</span>
          </button>

          {isReviewPhase ? (
            <span className="review-phase-badge">Review Mode</span>
          ) : (
            <span className="practice-stepper-count">
              {queueIdx + 1} / {totalQuestionsToMaster}
            </span>
          )}
        </div>
      </div>

      {/* Review Phase Notification Banner */}
      {isReviewPhase && (
        <div className="review-notice-banner">
          <span>Reviewing Mistakes: Let's master the questions you missed earlier!</span>
        </div>
      )}

      {/* Question Body */}
      {currentQuestion && (
        <div className="practice-question-container">
          <div className="practice-q-type-badge">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {currentQuestion.categoryLabel && (
                <span className="learning-stage-pill">{currentQuestion.categoryLabel}</span>
              )}
              <span className="q-type-name">
                {currentQuestion.type === 'word-bank' && 'SENTENCE BUILDER'}
                {currentQuestion.type === 'fill-blank' && 'FILL IN THE BLANK'}
                {currentQuestion.type === 'audio-listening' && 'LISTENING COMPREHENSION'}
                {currentQuestion.type === 'error-hunt' && 'SPOT THE GRAMMAR ERROR'}
                {currentQuestion.type === 'multiple-choice' &&
                  (currentQuestion.kanjiChar ? `KANJI READING (${currentQuestion.kanjiChar})` : 'MULTIPLE CHOICE')}
              </span>
            </div>
          </div>

          <div className="practice-prompt-row">
            <h2 className="practice-prompt-text">{currentQuestion.prompt || currentQuestion.question}</h2>
            {currentQuestion.audioText && currentQuestion.type !== 'audio-listening' && (
              <button
                type="button"
                className={`practice-audio-trigger ${audioPlaying ? 'active' : ''}`}
                onClick={() => handlePlayPromptAudio(currentQuestion.audioText)}
                title="Listen to sentence"
              >
                <AiOutlineSound size={22} />
              </button>
            )}
          </div>

          {/* 1. WORD BANK / SENTENCE BUILDER */}
          {currentQuestion.type === 'word-bank' && (
            <div className="word-builder-layout">
              <div className="sentence-construction-box">
                {selectedChips.length === 0 ? (
                  <span className="construction-placeholder">Tap the words below to build sentence</span>
                ) : (
                  <div className="construction-chips">
                    {selectedChips.map((chipIdx) => (
                      <button
                        key={chipIdx}
                        type="button"
                        className="placed-chip"
                        onClick={() => handleRemoveChip(chipIdx)}
                        disabled={checkStatus !== 'idle'}
                        title="Click to return to tray"
                      >
                        {currentQuestion.chips[chipIdx]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="builder-separator-line">
                <span>Word Bank</span>
              </div>

              <div className="chip-bank-tray">
                {currentQuestion.chips?.map((chipText, chipIdx) => {
                  const isUsed = selectedChips.includes(chipIdx);
                  return (
                    <button
                      key={chipIdx}
                      type="button"
                      className={`word-chip ${isUsed ? 'used' : ''}`}
                      onClick={() => handleAddChip(chipIdx)}
                      disabled={isUsed || checkStatus !== 'idle'}
                    >
                      {chipText}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. FILL IN THE BLANK */}
          {currentQuestion.type === 'fill-blank' && (
            <div className="fill-blank-layout">
              {currentQuestion.sentence && (
                <div className="sentence-card">
                  {(() => {
                    const parts = currentQuestion.sentence.split(/___|\[\s*\?\s*\]/g);
                    const currentAnswerText = selectedOption !== null ? currentQuestion.options[selectedOption] : null;
                    return (
                      <>
                        {parts[0]}
                        <span className={`blank-slot ${selectedOption !== null ? 'filled' : ''}`}>
                          {currentAnswerText || '___'}
                        </span>
                        {parts.slice(1).join('')}
                      </>
                    );
                  })()}
                </div>
              )}

              {shouldShowRomaji && currentQuestion.romaji && (
                <div className="romaji-subtext" style={{ marginBottom: '12px' }}>
                  {(() => {
                    let romText = currentQuestion.romaji;
                    if (!/___|\[\s*\?\s*\]/.test(romText) && currentQuestion.blankWord) {
                      const particleToRomaji = {
                        'は': 'wa', 'が': 'ga', 'を': 'o', 'に': 'ni', 'で': 'de',
                        'へ': 'e', 'と': 'to', 'の': 'no', 'から': 'kara', 'まで': 'made',
                        'か': 'ka', 'です': 'desu', 'でした': 'deshita', 'じゃありません': 'ja arimasen',
                        'じゃありませんでした': 'ja arimasen deshita'
                      };
                      const target = particleToRomaji[currentQuestion.blankWord] || currentQuestion.blankWord;
                      romText = romText.replace(new RegExp(`\\b${target}\\b`, 'i'), '___');
                    }

                    const parts = romText.split(/___|\[\s*\?\s*\]/g);
                    const selectedText = selectedOption !== null
                      ? (currentQuestion.romajiOptions?.[selectedOption] || currentQuestion.options?.[selectedOption] || '___')
                      : '___';

                    if (parts.length > 1) {
                      return (
                        <>
                          {parts[0]}
                          <span className={`blank-slot ${selectedOption !== null ? 'filled' : ''}`} style={{ display: 'inline', fontWeight: 700 }}>
                            {selectedText}
                          </span>
                          {parts.slice(1).join('')}
                        </>
                      );
                    }
                    return <span>{romText}</span>;
                  })()}
                </div>
              )}

              <div className="exercise-options-grid">
                {currentQuestion.options?.map((opt, optIdx) => {
                  let btnClass = 'exercise-option-btn';

                  if (checkStatus === 'idle') {
                    if (selectedOption === optIdx) btnClass += ' selected';
                  } else if (checkStatus === 'correct') {
                    if (selectedOption === optIdx) btnClass += ' correct-choice';
                  } else if (checkStatus === 'incorrect') {
                    if (selectedOption === optIdx) btnClass += ' incorrect-choice';
                    if (optIdx === currentQuestion.correctAnswer) btnClass += ' reveal-correct';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      className={btnClass}
                      onClick={() => {
                        if (checkStatus === 'idle') {
                          sfx.playTileClick();
                          setSelectedOption(optIdx);
                        }
                      }}
                      disabled={checkStatus !== 'idle'}
                    >
                      <span className="opt-marker">{String.fromCharCode(65 + optIdx)}</span>
                      <div className="opt-content">
                        {(() => {
                          let mainText = opt;
                          let inlineRomaji = null;
                          const parenMatch = typeof opt === 'string' ? opt.match(/^(.*?)\s*[\(（]([a-zA-Z\s,.'~?!\-–—/]+)[\)）]$/) : null;
                          if (parenMatch) {
                            mainText = parenMatch[1].trim();
                            inlineRomaji = parenMatch[2].trim();
                          }
                          const romajiText = inlineRomaji || (currentQuestion.romajiOptions?.[optIdx] !== opt ? currentQuestion.romajiOptions?.[optIdx] : null);

                          return (
                            <>
                              <span className="opt-label">{mainText}</span>
                              {shouldShowRomaji && romajiText && (
                                <span className="opt-romaji">{romajiText}</span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                      {checkStatus !== 'idle' && optIdx === currentQuestion.correctAnswer && (
                        <AiOutlineCheck className="opt-status-icon correct" size={18} />
                      )}
                      {checkStatus === 'incorrect' && selectedOption === optIdx && (
                        <AiOutlineClose className="opt-status-icon incorrect" size={18} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. AUDIO LISTENING COMPREHENSION */}
          {currentQuestion.type === 'audio-listening' && (
            <div className="audio-challenge-layout">
              <div className="audio-card-center">
                <button
                  type="button"
                  className={`big-audio-replay-btn ${audioPlaying ? 'active' : ''}`}
                  onClick={() => handlePlayPromptAudio(currentQuestion.audioText)}
                >
                  <div className="audio-block-icon">
                    <AiOutlineSound size={26} />
                  </div>
                  <div className="audio-block-text">
                    <span className="audio-primary-label">Tap to Listen</span>
                    <span className="audio-secondary-label">Play sentence audio</span>
                  </div>
                </button>
              </div>

              <div className="exercise-options-grid">
                {currentQuestion.options?.map((opt, optIdx) => {
                  let btnClass = 'exercise-option-btn';

                  if (checkStatus === 'idle') {
                    if (selectedOption === optIdx) btnClass += ' selected';
                  } else if (checkStatus === 'correct') {
                    if (selectedOption === optIdx) btnClass += ' correct-choice';
                  } else if (checkStatus === 'incorrect') {
                    if (selectedOption === optIdx) btnClass += ' incorrect-choice';
                    if (optIdx === currentQuestion.correctAnswer) btnClass += ' reveal-correct';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      className={btnClass}
                      onClick={() => {
                        if (checkStatus === 'idle') {
                          sfx.playTileClick();
                          setSelectedOption(optIdx);
                        }
                      }}
                      disabled={checkStatus !== 'idle'}
                    >
                      <span className="opt-marker">{String.fromCharCode(65 + optIdx)}</span>
                      <div className="opt-content">
                        <span className="opt-label">{opt}</span>
                      </div>
                      {checkStatus !== 'idle' && optIdx === currentQuestion.correctAnswer && (
                        <AiOutlineCheck className="opt-status-icon correct" size={18} />
                      )}
                      {checkStatus === 'incorrect' && selectedOption === optIdx && (
                        <AiOutlineClose className="opt-status-icon incorrect" size={18} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. ERROR HUNT & MULTIPLE CHOICE / KANJI READING */}
          {(currentQuestion.type === 'error-hunt' || currentQuestion.type === 'multiple-choice') && (
            <div className="choice-challenge-layout">
              {shouldShowRomaji &&
                !currentQuestion.kanjiChar &&
                currentQuestion.category !== 'formula' &&
                currentQuestion.category !== 'meaning' &&
                currentQuestion.category !== 'writing-pronunciation' &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('formula') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('structure') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('meaning') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('tense') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('pronunciation') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('expression') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('reading') &&
                !currentQuestion.prompt?.toLowerCase().includes('pronunciation') &&
                !currentQuestion.prompt?.toLowerCase().includes('romaji') &&
                !currentQuestion.prompt?.toLowerCase().includes('reading') &&
                !currentQuestion.prompt?.toLowerCase().includes('which japanese sentence means') &&
                !currentQuestion.question?.toLowerCase().includes('pronunciation') &&
                !currentQuestion.question?.toLowerCase().includes('romaji') &&
                !currentQuestion.question?.toLowerCase().includes('reading') &&
                !currentQuestion.question?.toLowerCase().includes('which japanese sentence means') &&
                currentQuestion.romaji && (
                  <div className="romaji-subtext" style={{ marginBottom: '16px' }}>
                    {currentQuestion.romaji}
                  </div>
              )}

              <div className="exercise-options-grid">
                {currentQuestion.options?.map((opt, optIdx) => {
                  let btnClass = 'exercise-option-btn';

                  if (checkStatus === 'idle') {
                    if (selectedOption === optIdx) btnClass += ' selected';
                  } else if (checkStatus === 'correct') {
                    if (selectedOption === optIdx) btnClass += ' correct-choice';
                  } else if (checkStatus === 'incorrect') {
                    if (selectedOption === optIdx) btnClass += ' incorrect-choice';
                    if (optIdx === currentQuestion.correctAnswer) btnClass += ' reveal-correct';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      className={btnClass}
                      onClick={() => {
                        if (checkStatus === 'idle') {
                          sfx.playTileClick();
                          setSelectedOption(optIdx);
                        }
                      }}
                      disabled={checkStatus !== 'idle'}
                    >
                      <span className="opt-marker">{String.fromCharCode(65 + optIdx)}</span>
                      <div className="opt-content">
                        {(() => {
                          let mainText = opt;
                          let inlineRomaji = null;
                          const parenMatch = typeof opt === 'string' ? opt.match(/^(.*?)\s*[\(（]([a-zA-Z\s,.'~?!\-–—/]+)[\)）]$/) : null;
                          if (parenMatch) {
                            mainText = parenMatch[1].trim();
                            inlineRomaji = parenMatch[2].trim();
                          }
                          const romajiText = inlineRomaji || (currentQuestion.romajiOptions?.[optIdx] !== opt ? currentQuestion.romajiOptions?.[optIdx] : null);

                          return (
                            <>
                              <span className="opt-label">{mainText}</span>
                              {shouldShowRomaji && romajiText && (
                                <span className="opt-romaji">{romajiText}</span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                      {checkStatus !== 'idle' && optIdx === currentQuestion.correctAnswer && (
                        <AiOutlineCheck className="opt-status-icon correct" size={18} />
                      )}
                      {checkStatus === 'incorrect' && selectedOption === optIdx && (
                        <AiOutlineClose className="opt-status-icon incorrect" size={18} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* BOTTOM ACTION DRAWER */}
      <div className={`exercise-bottom-bar ${checkStatus}`}>
        <div className="exercise-bottom-content">
          {checkStatus === 'idle' && (
            <div className="exercise-idle-feedback">
              <span className="exercise-idle-hint">Select or arrange your answer above</span>
              <div className="exercise-idle-actions">
                <button
                  type="button"
                  className="exercise-action-btn skip"
                  onClick={handleSkipQuestion}
                  title="Skip question (will be reviewed at the end of the session)"
                >
                  Skip
                </button>
                <button
                  type="button"
                  className="exercise-action-btn check"
                  onClick={handleCheck}
                  disabled={!isInputProvided()}
                >
                  Check Answer
                </button>
              </div>
            </div>
          )}

          {checkStatus === 'correct' && (
            <div className="exercise-feedback-container correct">
              <div className="feedback-details">
                <div className="feedback-title correct">
                  <AiOutlineCheckCircle size={24} />
                  <span>Correct!</span>
                </div>
                {currentQuestion?.explanation && (
                  <p className="feedback-explanation">{currentQuestion.explanation}</p>
                )}
              </div>
              <button
                type="button"
                className="exercise-action-btn continue-correct"
                onClick={handleContinue}
              >
                Continue <AiOutlineArrowRight size={16} />
              </button>
            </div>
          )}

          {checkStatus === 'incorrect' && (
            <div className="exercise-feedback-container incorrect">
              <div className="feedback-details">
                <div className="feedback-title incorrect">
                  <AiOutlineClose size={24} />
                  <span>Incorrect</span>
                </div>
                {currentQuestion?.explanation && (
                  <p className="feedback-explanation">{currentQuestion.explanation}</p>
                )}
              </div>
              <button
                type="button"
                className="exercise-action-btn continue-incorrect"
                onClick={handleContinue}
              >
                Got It <AiOutlineArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notes Slide-Over Modal */}
      {showNotesModal && (
        <div className="practice-modal-backdrop" onClick={() => setShowNotesModal(false)}>
          <div className="practice-notes-modal" onClick={(e) => e.stopPropagation()}>
            <div className="notes-modal-header">
              <h3>{currentLesson?.shortTitle || currentLesson?.title} - Notes</h3>
              <button className="modal-close-btn" onClick={() => setShowNotesModal(false)}>
                <AiOutlineClose size={18} />
              </button>
            </div>
            <div className="notes-modal-body">
              {normalizedSections.map((sec, sIdx) => (
                <div key={sIdx} className="notes-section">
                  <h4>{sec.title}</h4>
                  {sec.content && <p>{sec.content}</p>}
                  {sec.table && (
                    <table className="notes-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, i) => (
                            <th key={i}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Settings Modal */}
      {showQuizSettingsModal && (
        <div className="practice-modal-backdrop" onClick={() => setShowQuizSettingsModal(false)}>
          <div className="practice-settings-modal" onClick={(e) => e.stopPropagation()}>
            <div className="notes-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AiOutlineSetting size={20} />
                <h3>Quiz Settings</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowQuizSettingsModal(false)}>
                <AiOutlineClose size={18} />
              </button>
            </div>
            <div className="quiz-settings-body">
              <div className="quiz-setting-row">
                <div className="quiz-setting-info">
                  <span className="quiz-setting-title">Romaji Guide</span>
                  <span className="quiz-setting-desc">
                    Show pronunciation and reading guides for Japanese characters and sentences.
                  </span>
                </div>
                <button
                  type="button"
                  className={`quiz-toggle-switch ${localShowRomaji ? 'active' : ''}`}
                  onClick={toggleRomaji}
                  title={localShowRomaji ? 'Disable Romaji guide' : 'Enable Romaji guide'}
                >
                  <span className="toggle-switch-handle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practice Session Exit Confirmation Modal */}
      <ConfirmModal
        isOpen={showExitConfirm}
        title={`Exit ${quizMode === 'learning' ? 'Learning Quiz' : quizMode === 'skip' ? 'Skip Exam' : isExam ? 'Certification Exam' : 'Practice Session'}?`}
        message="Your progress for this attempt will be lost. Are you sure you want to return to the curriculum?"
        confirmText="Exit Session"
        cancelText="Keep Practicing"
        variant="warning"
        onConfirm={() => {
          setShowExitConfirm(false);
          if (onExit) onExit();
        }}
        onCancel={() => setShowExitConfirm(false)}
      />
    </div>
  );
}
