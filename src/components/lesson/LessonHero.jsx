import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
  AiOutlineLock,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
  AiOutlinePlayCircle,
} from 'react-icons/ai';

/**
 * LessonHero component.
 * Renders the lesson banner card, description, quiz chain progression panel (if available),
 * and primary action buttons.
 *
 * @param {Object} props
 * @param {Object} props.currentLesson
 * @param {boolean} [props.isCompleted]
 * @param {boolean} [props.isUnlocked]
 * @param {Array} [props.quizChains]
 * @param {Object} [props.chainProgress]
 * @param {Function} [props.onStartPractice]
 * @param {Function} [props.onStartSkipExam]
 * @param {Function} [props.onStartLearning]
 * @param {Function} [props.onStartChain]
 * @param {string} [props.levelCode]
 * @param {boolean} [props.isUpperLevel]
 * @param {string} [props.nextUnlockedLevel]
 * @param {Object} [props.lessonRecord]
 * @param {Object} [props.currentSection]
 */
export default function LessonHero({
  currentLesson,
  isCompleted,
  isUnlocked,
  quizChains = [],
  chainProgress = {},
  onStartPractice,
  onStartSkipExam,
  onStartLearning,
  onStartChain,
  levelCode = 'N5',
  isUpperLevel = false,
  nextUnlockedLevel = 'N4',
  lessonRecord = null,
  currentSection = null,
}) {
  const chains = quizChains.length > 0 ? quizChains : currentLesson?.quizChains || [];
  const completedChainsCount = chains.filter(
    (c) => chainProgress[c.id]?.completed
  ).length;

  return (
    <div className="lesson-header-card">
      <div className="lesson-header-top">
        <span className="lesson-badge-number">
          {currentLesson?.isExam
            ? `JLPT ${levelCode} CAPSTONE EXAM`
            : isUpperLevel
              ? `${currentSection?.title || `JLPT ${levelCode}`} #${currentLesson?.number}`
              : currentLesson?.id === 'kanji-n5-mastery'
                ? 'JLPT N5 Kanji'
                : currentLesson?.id === 'listening-n5-mastery'
                  ? 'JLPT N5 Listening'
                  : `${(currentSection?.title || 'JLPT N5').replace(/^\d+\.\s*/, '')} #${currentLesson?.number}`}
        </span>
        {lessonRecord?.completed && (
          <span className="lesson-status-pill completed">
            <AiOutlineCheckCircle size={14} />
            Completed • Best Score: {lessonRecord.quizScore || lessonRecord.masteryScore || 100}%
          </span>
        )}
      </div>

      <h1 className="lesson-title">{currentLesson.title}</h1>
      {currentLesson.subtitle && <p className="lesson-subtitle">{currentLesson.subtitle}</p>}

      {currentLesson.formula && (
        <div className="lesson-formula-badge">
          <span>Formula:</span>
          <strong>{currentLesson.formula}</strong>
        </div>
      )}

      <div className="lesson-summary-box">
        <p>{currentLesson.description || currentLesson.summary}</p>
      </div>

      {/* QUIZ CHAINS PROGRESSION PANEL (If defined for lesson) */}
      {chains.length > 0 && (
        <div className="quiz-chains-panel">
          <div className="quiz-chains-header">
            <div>
              <h3 className="quiz-chains-title">
                <span>🎯</span>
                <span>Mastery Quiz Chains</span>
              </h3>
              <p className="quiz-chains-subtitle">
                Complete targeted sub-skill chains sequentially to master this lesson.
              </p>
            </div>
            <span
              className={`quiz-chains-badge ${
                completedChainsCount === chains.length ? 'complete' : ''
              }`}
            >
              {completedChainsCount} / {chains.length} Chains Complete
            </span>
          </div>

          <div className="quiz-chains-grid">
            {chains.map((chain, cIdx) => {
              const prevChain = cIdx > 0 ? chains[cIdx - 1] : null;
              const isChainUnlocked =
                cIdx === 0 || Boolean(chainProgress[prevChain?.id]?.completed);
              const progressEntry = chainProgress[chain.id];
              const isChainComplete = Boolean(progressEntry?.completed);
              const score = progressEntry?.score;

              let cardClass = 'quiz-chain-card ';
              if (isChainComplete) cardClass += 'completed';
              else if (isChainUnlocked) cardClass += 'unlocked';
              else cardClass += 'locked';

              return (
                <div key={chain.id} className={cardClass}>
                  <div>
                    <div className="quiz-chain-top">
                      <span className="quiz-chain-icon">{chain.chainIcon || '📖'}</span>
                      {isChainComplete ? (
                        <span className="quiz-chain-tag complete">
                          ✅ {score}%
                        </span>
                      ) : !isChainUnlocked ? (
                        <span className="quiz-chain-tag locked-tag">
                          <AiOutlineLock size={12} /> Locked
                        </span>
                      ) : score !== undefined && score !== null ? (
                        <span className="quiz-chain-tag in-progress">
                          ⏳ {score}%
                        </span>
                      ) : (
                        <span className="quiz-chain-tag qs-count">
                          {chain.questions?.length || 4} Qs
                        </span>
                      )}
                    </div>
                    <h4 className="quiz-chain-name">{chain.chainTitle}</h4>
                    <p className="quiz-chain-desc">{chain.description}</p>
                  </div>

                  <div style={{ marginTop: '14px' }}>
                    <button
                      type="button"
                      disabled={!isChainUnlocked}
                      onClick={() => onStartChain && onStartChain(chain)}
                      className={`quiz-chain-btn ${
                        isChainComplete
                          ? 'btn-review'
                          : isChainUnlocked
                            ? 'btn-start'
                            : 'btn-locked'
                      }`}
                    >
                      {isChainComplete ? 'Review Chain' : isChainUnlocked ? 'Start Chain' : 'Locked'}
                      {isChainUnlocked && <AiOutlineArrowRight size={14} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Hero Practice / Learning Launch Banner */}
      <div className="hero-practice-banner">
        <div className="hero-practice-info">
          <h3>
            {currentLesson.isExam
              ? `JLPT ${levelCode} Comprehensive Certification Exam`
              : currentLesson.id === 'kanji-n5-mastery'
                ? 'Randomized Kanji Reading Practice'
                : currentLesson.id === 'listening-n5-mastery'
                  ? 'Randomized JLPT N5 Listening Test'
                  : isUpperLevel
                    ? `${currentLesson.shortTitle || currentLesson.title} Practice`
                    : `${currentLesson.shortTitle || currentLesson.title} • Learning Quiz`}
          </h3>
          <p>
            {currentLesson.isExam
              ? `25 Comprehensive Questions across all ${levelCode} topics • Passing score 80%+ unlocks JLPT ${nextUnlockedLevel}`
              : currentLesson.id === 'kanji-n5-mastery'
                ? '10 Randomized Questions across all kanji quiz banks • Updates character mastery & checklist'
                : currentLesson.id === 'listening-n5-mastery'
                  ? '10 Randomized Questions across Level 1, Level 2, and 4 Core Te-form Audio Patterns'
                  : isUpperLevel
                    ? `${currentLesson?.quiz?.length || 10} Targeted Questions • Quizzes & Drills`
                    : 'Comprehensive guided questions covering structure formulas, pronunciation, meaning, and sentences'}
          </p>
        </div>
        <div className="hero-practice-actions">
          {!isUpperLevel && !currentLesson?.isExam && onStartLearning && (
            <button
              className="hero-start-practice-btn hero-start-learning-btn"
              onClick={onStartLearning}
            >
              Start Learning <AiOutlineArrowRight size={18} />
            </button>
          )}
          <button
            className={
              !isUpperLevel && !currentLesson?.isExam && onStartLearning
                ? 'hero-secondary-practice-btn'
                : 'hero-start-practice-btn'
            }
            onClick={onStartPractice}
          >
            {currentLesson.isExam
              ? 'Start Comprehensive Exam'
              : currentLesson.id === 'kanji-n5-mastery'
                ? 'Start Random Quiz'
                : currentLesson.id === 'listening-n5-mastery'
                  ? 'Start Listening Quiz'
                  : isUpperLevel
                    ? 'Start Practice'
                    : 'Standard Practice'}{' '}
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
