import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineSound,
  AiOutlineTrophy,
  AiOutlineReload,
  AiOutlineCheck,
} from 'react-icons/ai';
import { n5CoreLessons } from '../data/n5CoreLessonsData';
import { speakJapanese } from '../utils/audio';
import './N5LessonPage.css';

export default function N5LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lessonIndex = n5CoreLessons.findIndex((l) => l.id === lessonId);
  const currentLesson = lessonIndex !== -1 ? n5CoreLessons[lessonIndex] : n5CoreLessons[0];
  const prevLesson = lessonIndex > 0 ? n5CoreLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < n5CoreLessons.length - 1 ? n5CoreLessons[lessonIndex + 1] : null;

  const [activeTab, setActiveTab] = useState('lesson'); // 'lesson' | 'quiz'
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionIdx]: optionIdx }
  const [playingAudioIdx, setPlayingAudioIdx] = useState(null);
  const [dbProgress, setDbProgress] = useState({});
  const [hasSavedScore, setHasSavedScore] = useState(false);

  // Load progress for this lesson from database
  useEffect(() => {
    if (window.db?.getLessonProgress) {
      window.db.getLessonProgress().then((prog) => {
        if (prog) setDbProgress(prog);
      }).catch(() => {});
    }
  }, [currentLesson.id]);

  // Reset quiz state when switching lessons
  useEffect(() => {
    setSelectedAnswers({});
    setHasSavedScore(false);
    setActiveTab('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId]);

  const questions = currentLesson?.quiz || [];
  const answeredCount = Object.keys(selectedAnswers).length;
  const isQuizComplete = questions.length > 0 && answeredCount === questions.length;

  // Calculate score
  const correctCount = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const scorePercent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  // Auto-save progress when quiz completes
  useEffect(() => {
    if (isQuizComplete && !hasSavedScore && window.db?.saveLessonProgress) {
      window.db.saveLessonProgress(currentLesson.id, true, scorePercent)
        .then((updated) => {
          if (updated) setDbProgress(updated);
          setHasSavedScore(true);
        })
        .catch((err) => {
          console.warn('Failed to save lesson progress:', err);
        });
    }
  }, [isQuizComplete, hasSavedScore, currentLesson.id, scorePercent]);

  const handleSelectOption = (questionIdx, optionIdx) => {
    if (selectedAnswers[questionIdx] !== undefined) return; // Already answered
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIdx]: optionIdx,
    }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setHasSavedScore(false);
  };

  const handlePlayAudio = (text, idx) => {
    setPlayingAudioIdx(idx);
    speakJapanese(text);
    setTimeout(() => {
      setPlayingAudioIdx((curr) => (curr === idx ? null : curr));
    }, 1200);
  };

  const lessonRecord = dbProgress[currentLesson.id];

  return (
    <div className="n5-lesson-page">
      {/* Top Breadcrumbs & Progress Navigation */}
      <div className="lesson-nav-bar">
        <Link to="/learn" className="lesson-nav-back">
          <AiOutlineArrowLeft size={16} />
          <span>Back to Curriculum</span>
        </Link>
        <div className="lesson-nav-pagination">
          {prevLesson ? (
            <button
              onClick={() => navigate(`/learn/n5/${prevLesson.id}`)}
              className="lesson-nav-btn"
              title={prevLesson.shortTitle}
            >
              <AiOutlineArrowLeft size={14} /> Prev: Lesson {prevLesson.number}
            </button>
          ) : (
            <span className="lesson-nav-btn disabled">First Lesson</span>
          )}

          <span className="lesson-nav-indicator">
            Lesson {currentLesson.number} of {n5CoreLessons.length}
          </span>

          {nextLesson ? (
            <button
              onClick={() => navigate(`/learn/n5/${nextLesson.id}`)}
              className="lesson-nav-btn"
              title={nextLesson.shortTitle}
            >
              Next: Lesson {nextLesson.number} <AiOutlineArrowRight size={14} />
            </button>
          ) : (
            <span className="lesson-nav-btn disabled">End of Core</span>
          )}
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="lesson-header-card">
        <div className="lesson-header-top">
          <span className="lesson-badge-number">JLPT N5 Core #{currentLesson.number}</span>
          {lessonRecord?.completed && (
            <span className="lesson-status-pill completed">
              <AiOutlineCheckCircle size={14} />
              Completed • Best Score: {lessonRecord.quizScore}%
            </span>
          )}
        </div>
        <h1 className="lesson-title">{currentLesson.title}</h1>
        <p className="lesson-subtitle">{currentLesson.subtitle}</p>
        <div className="lesson-summary-box">
          <p>{currentLesson.description}</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="lesson-tabs">
        <button
          className={`lesson-tab ${activeTab === 'lesson' ? 'active' : ''}`}
          onClick={() => setActiveTab('lesson')}
        >
          <AiOutlineBook size={18} />
          <span>Lesson Guide</span>
        </button>
        <button
          className={`lesson-tab ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <AiOutlineTrophy size={18} />
          <span>Practice Quiz</span>
          <span className="tab-pill-badge">{questions.length} Qs</span>
        </button>
      </div>

      {/* TAB 1: LESSON GUIDE */}
      {activeTab === 'lesson' && (
        <div className="lesson-guide-container">
          {currentLesson.sections.map((section, secIdx) => (
            <div key={secIdx} className="lesson-section-card">
              <h2 className="section-title">{section.title}</h2>
              {section.content && (
                <div className="section-content-text">
                  {section.content.split('\n').map((line, lIdx) => {
                    const trimmed = line.trim();
                    if (!trimmed) return <div key={lIdx} style={{ height: '8px' }} />;
                    if (trimmed.startsWith('Structure Formula:') || trimmed.startsWith('Word Order:')) {
                      return (
                        <div key={lIdx} className="formula-callout">
                          <strong>{trimmed}</strong>
                        </div>
                      );
                    }
                    return <p key={lIdx}>{line}</p>;
                  })}
                </div>
              )}

              {/* Data Table */}
              {section.table && (
                <div className="lesson-table-wrapper">
                  <table className="lesson-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={
                                cIdx === 1
                                  ? 'table-cell-jp'
                                  : cIdx === 0
                                  ? 'table-cell-lead'
                                  : ''
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Audio Pronunciation Examples */}
              {section.examples && section.examples.length > 0 && (
                <div className="examples-container">
                  <h3 className="examples-header">Example Sentences & Pronunciation</h3>
                  <div className="examples-list">
                    {section.examples.map((ex, exIdx) => {
                      const globalExIdx = `${secIdx}-${exIdx}`;
                      const isPlaying = playingAudioIdx === globalExIdx;
                      return (
                        <div key={exIdx} className="example-card">
                          <button
                            type="button"
                            className={`audio-play-btn ${isPlaying ? 'playing' : ''}`}
                            onClick={() => handlePlayAudio(ex.jp, globalExIdx)}
                            title="Play Native Audio"
                          >
                            <AiOutlineSound size={20} />
                          </button>
                          <div className="example-details">
                            <div className="example-jp">{ex.jp}</div>
                            <div className="example-romaji">{ex.romaji}</div>
                            <div className="example-en">{ex.en}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Prompt to take Quiz */}
          <div className="lesson-cta-card">
            <div className="lesson-cta-text">
              <h3>Ready to test what you learned?</h3>
              <p>Take the {questions.length}-question interactive quiz to reinforce this grammar pattern and earn your completion badge!</p>
            </div>
            <button
              className="btn-primary lesson-cta-btn"
              onClick={() => {
                setActiveTab('quiz');
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
            >
              Start Practice Quiz <AiOutlineArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE PRACTICE QUIZ */}
      {activeTab === 'quiz' && (
        <div className="quiz-container">
          {/* Quiz Status Header */}
          <div className="quiz-header-bar">
            <div>
              <h2>Knowledge Check: {currentLesson.shortTitle}</h2>
              <p className="quiz-progress-text">
                Answered {answeredCount} of {questions.length} questions
              </p>
            </div>
            <button className="quiz-reset-btn" onClick={handleResetQuiz}>
              <AiOutlineReload size={15} />
              <span>Reset Quiz</span>
            </button>
          </div>

          {/* Score completion card if all answered */}
          {isQuizComplete && (
            <div className={`quiz-score-banner ${scorePercent >= 75 ? 'passed' : 'review-needed'}`}>
              <div className="score-icon-badge">
                <AiOutlineTrophy size={36} />
              </div>
              <div className="score-details">
                <h3>{scorePercent >= 75 ? 'Lesson Mastered!' : 'Quiz Completed'}</h3>
                <p>
                  You scored <strong>{scorePercent}%</strong> ({correctCount} out of {questions.length} correct).
                  {scorePercent >= 75
                    ? ' Great job! Your progress has been saved to your learning record.'
                    : ' Consider reviewing the lesson guide and retrying to achieve 100% mastery.'}
                </p>
              </div>
              <div className="score-actions">
                <button className="btn-secondary" onClick={handleResetQuiz}>
                  Retake Quiz
                </button>
                {nextLesson ? (
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/learn/n5/${nextLesson.id}`)}
                  >
                    Next Lesson <AiOutlineArrowRight size={16} />
                  </button>
                ) : (
                  <Link to="/learn" className="btn-primary">
                    Return to Curriculum
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Quiz Questions List */}
          <div className="quiz-questions-list">
            {questions.map((q, qIdx) => {
              const userAnswer = selectedAnswers[qIdx];
              const isAnswered = userAnswer !== undefined;
              const isCorrect = userAnswer === q.correctAnswer;

              return (
                <div
                  key={q.id || qIdx}
                  className={`quiz-question-card ${
                    isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''
                  }`}
                >
                  <div className="question-header">
                    <span className="question-num-tag">Question {qIdx + 1}</span>
                    {isAnswered && (
                      <span className={`answer-tag ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? (
                          <>
                            <AiOutlineCheck size={14} /> Correct
                          </>
                        ) : (
                          <>
                            <AiOutlineCloseCircle size={14} /> Incorrect
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <h3 className="question-prompt">{q.question}</h3>

                  <div className="quiz-options-grid">
                    {q.options.map((opt, optIdx) => {
                      let btnState = '';
                      if (isAnswered) {
                        if (optIdx === q.correctAnswer) {
                          btnState = 'correct-choice';
                        } else if (optIdx === userAnswer) {
                          btnState = 'incorrect-choice';
                        } else {
                          btnState = 'neutral-disabled';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          className={`quiz-option-btn ${btnState}`}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          disabled={isAnswered}
                        >
                          <span className="opt-letter">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="opt-text">{opt}</span>
                          {btnState === 'correct-choice' && (
                            <AiOutlineCheckCircle className="opt-status-icon correct" size={18} />
                          )}
                          {btnState === 'incorrect-choice' && (
                            <AiOutlineCloseCircle className="opt-status-icon incorrect" size={18} />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Explanation Callout */}
                  {isAnswered && q.explanation && (
                    <div className="question-explanation-box">
                      <strong>Grammar Explanation:</strong>
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
