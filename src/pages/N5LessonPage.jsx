import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
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
  AiOutlineSearch,
  AiOutlineFilter,
  AiOutlinePlayCircle,
  AiOutlineCustomerService,
  AiOutlineLock,
  AiOutlineThunderbolt,
} from 'react-icons/ai';
import {
  allN5Lessons,
  n5Curriculum,
  getRandomKanjiQuiz,
  getRandomListeningQuiz,
  listeningTracks,
  generateN5LevelExamQuestions,
} from '../data/n5/n5Curriculum';
import { allN4Lessons, n4Curriculum } from '../data/n4/n4Curriculum';
import { generateN4LevelExamQuestions } from '../data/n4/n4LevelExam';
import { kanjiN5Data } from '../data/kanjiN5Data';
import { getLearningQuizForLesson } from '../data/n5/learningQuizEngine';
import {
  getStoredProgression,
  isLessonUnlocked,
  isLessonCompleted,
  isLearningCompleted,
  isPracticeCompleted,
  recordQuizCompletion,
  markLessonSkipped,
  markLevelExamPassed,
} from '../utils/progression';
import { speakJapanese } from '../utils/audio';
import { sfx } from '../utils/sfx';
import ConfirmModal from '../components/ConfirmModal';
import './N5LessonPage.css';

export default function N5LessonPage({ settings = {} }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get('mode');

  // Exit practice session confirmation modal
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Progression reactive state
  const [progressionVer, setProgressionVer] = useState(0);
  const progData = useMemo(() => getStoredProgression(), [progressionVer]);

  useEffect(() => {
    const handleProgUpdate = () => setProgressionVer((v) => v + 1);
    window.addEventListener('progressionUpdated', handleProgUpdate);
    return () => window.removeEventListener('progressionUpdated', handleProgUpdate);
  }, []);

  // Combine N5 and N4 lessons for universal lesson routing
  const combinedLessons = useMemo(() => [...allN5Lessons, ...allN4Lessons], []);
  const combinedCurriculum = useMemo(() => [...n5Curriculum, ...n4Curriculum], []);

  const lessonIndex = combinedLessons.findIndex((l) => l.id === lessonId);
  const currentLesson = lessonIndex !== -1 ? combinedLessons[lessonIndex] : combinedLessons[0];
  const isN4 = allN4Lessons.some((l) => l.id === currentLesson?.id);
  const levelPrefix = isN4 ? 'n4' : 'n5';

  const isUnlocked = isLessonUnlocked(currentLesson?.id, isN4 ? 'N4' : 'N5', progData);

  const prevLesson = lessonIndex > 0 ? combinedLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < combinedLessons.length - 1 ? combinedLessons[lessonIndex + 1] : null;

  // Current curriculum section
  const currentSection =
    combinedCurriculum.find((sec) => sec.lessons.some((l) => l.id === currentLesson?.id)) || combinedCurriculum[0];
  const sectionLessonNumber =
    currentLesson?.number || currentSection.lessons.findIndex((l) => l.id === currentLesson?.id) + 1;

  // Settings: check showRomaji preference; suppress for Listening Comprehension and Sentence Builder
  const isListeningOrBuilderLesson = Boolean(
    currentLesson?.id === 'listening-n5-mastery' ||
    currentLesson?.id?.includes('listening') ||
    currentLesson?.title?.toLowerCase().includes('listening') ||
    currentLesson?.shortTitle?.toLowerCase().includes('listening') ||
    currentLesson?.id?.includes('sentence') ||
    currentLesson?.title?.toLowerCase().includes('sentence') ||
    currentLesson?.shortTitle?.toLowerCase().includes('sentence')
  );

  const shouldShowRomaji = settings?.showRomaji !== false && !isListeningOrBuilderLesson;
  const showRomaji = shouldShowRomaji;

  // Database progress
  const [dbProgress, setDbProgress] = useState({});

  // Kanji Character Mastery stats map: { [char]: { mastery, totalReviews, correctReviews, ... } }
  const [kanjiMasteryMap, setKanjiMasteryMap] = useState({});

  // Practice session questions & state
  const [activeQuizQuestions, setActiveQuizQuestions] = useState([]);
  const [quizMode, setQuizMode] = useState('learning'); // 'learning' | 'practice' | 'skip'
  const [isPracticing, setIsPracticing] = useState(false);
  const [activeQueue, setActiveQueue] = useState([]); // array of question indices [0, 1, 2, ...]
  const [queueIdx, setQueueIdx] = useState(0);
  const [mistakeQueue, setMistakeQueue] = useState([]); // question indices needing review
  const [firstPassMistakes, setFirstPassMistakes] = useState([]); // indices missed during initial pass
  const [isReviewPhase, setIsReviewPhase] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Current question inputs
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedChips, setSelectedChips] = useState([]); // indices into question.chips
  const [checkStatus, setCheckStatus] = useState('idle'); // 'idle' | 'correct' | 'incorrect'
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Kanji Checklist UI states
  const [kanjiSearchQuery, setKanjiSearchQuery] = useState('');
  const [kanjiCategoryFilter, setKanjiCategoryFilter] = useState('All');
  const [kanjiStatusFilter, setKanjiStatusFilter] = useState('all'); // 'all' | 'learned' | 'in-progress' | 'unlearned'

  // Listening Lab UI states
  const [selectedListeningTrackId, setSelectedListeningTrackId] = useState('track-1');
  const activeListeningTrack = useMemo(() => {
    return (
      (listeningTracks || []).find((t) => t.id === selectedListeningTrackId) ||
      listeningTracks?.[0] ||
      null
    );
  }, [selectedListeningTrackId]);

  // Normalize sections across both schema formats (sections vs rules/tables/examples)
  const normalizedSections = useMemo(() => {
    if (currentLesson?.sections && currentLesson.sections.length > 0) {
      return currentLesson.sections;
    }

    const sections = [];
    if (currentLesson?.rules && currentLesson.rules.length > 0) {
      currentLesson.rules.forEach((rule) => {
        sections.push({
          title: rule.title,
          content: `${rule.formula ? `Structure Formula:\n${rule.formula}\n\n` : ''}${rule.explanation || ''}`,
          table: null,
          examples: [],
        });
      });
    }

    if (currentLesson?.tables && currentLesson.tables.length > 0) {
      currentLesson.tables.forEach((tbl) => {
        sections.push({
          title: tbl.title,
          content: '',
          table: { headers: tbl.headers, rows: tbl.rows },
          examples: [],
        });
      });
    }

    if (currentLesson?.examples && currentLesson.examples.length > 0) {
      sections.push({
        title: 'Example Sentences & Pronunciation',
        content: '',
        table: null,
        examples: currentLesson.examples.map((ex) => ({
          jp: ex.ja || ex.jp,
          romaji: ex.romaji,
          en: ex.en,
        })),
      });
    }

    return sections;
  }, [currentLesson]);

  // Fetch Kanji Character Mastery from SQLite or LocalStorage
  const fetchKanjiStats = async () => {
    try {
      if (window.db?.getScriptMastery) {
        const dbData = await window.db.getScriptMastery('kanji');
        if (dbData && typeof dbData === 'object') {
          setKanjiMasteryMap(dbData);
          try {
            localStorage.setItem('hirakanjee_kanji_mastery', JSON.stringify(dbData));
          } catch (e) { }
          return;
        }
      }
    } catch (e) {
      console.warn('Error fetching kanji stats from db:', e);
    }

    try {
      const local = JSON.parse(localStorage.getItem('hirakanjee_kanji_mastery') || '{}');
      setKanjiMasteryMap(local);
    } catch (e) { }
  };

  // Record individual Kanji Character Mastery into SQLite + LocalStorage
  const recordKanjiReview = async (char, isCorrect) => {
    const score = isCorrect ? 100 : 0;
    try {
      if (window.db?.recordReview) {
        await window.db.recordReview('kanji', char, score);
        await fetchKanjiStats();
        return;
      }
    } catch (e) {
      console.warn('DB recordReview error:', e);
    }

    try {
      const local = JSON.parse(localStorage.getItem('hirakanjee_kanji_mastery') || '{}');
      const cur = local[char] || { totalReviews: 0, correctReviews: 0, mastery: 0 };
      const total = (cur.totalReviews || 0) + 1;
      const correct = (cur.correctReviews || 0) + (isCorrect ? 1 : 0);
      const mastery = Math.round((correct / total) * 100);
      local[char] = {
        char,
        totalReviews: total,
        correctReviews: correct,
        mastery,
        lastPracticedAt: new Date().toISOString(),
      };
      localStorage.setItem('hirakanjee_kanji_mastery', JSON.stringify(local));
      setKanjiMasteryMap({ ...local });
    } catch (e) { }
  };

  // Fetch SQLite progress on mount
  useEffect(() => {
    if (window.db?.getLessonProgress) {
      window.db
        .getLessonProgress()
        .then((prog) => {
          if (prog) setDbProgress(prog);
        })
        .catch(() => { });
    }
    fetchKanjiStats();

    const handleGlobalReset = () => {
      fetchKanjiStats();
      if (window.db?.getLessonProgress) {
        window.db.getLessonProgress().then((prog) => setDbProgress(prog || {})).catch(() => {});
      } else {
        setDbProgress({});
      }
    };
    window.addEventListener('hirakanjee_global_reset', handleGlobalReset);
    return () => window.removeEventListener('hirakanjee_global_reset', handleGlobalReset);
  }, [currentLesson?.id]);

  // Start Skip Exam Session (Placement / Test-Out Quiz)
  const handleStartSkipExam = () => {
    let questionsToUse = [];
    if (currentLesson?.quiz && currentLesson.quiz.length > 0) {
      questionsToUse = [...currentLesson.quiz].sort(() => Math.random() - 0.5).slice(0, 8);
    } else {
      questionsToUse = getLearningQuizForLesson(currentLesson, 8);
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('skip');
    const queue = questionsToUse.map((_, i) => i);
    setActiveQueue(queue);
    setQueueIdx(0);
    setMistakeQueue([]);
    setFirstPassMistakes([]);
    setIsReviewPhase(false);
    setIsFinished(false);
    setSelectedOption(null);
    setSelectedChips([]);
    setCheckStatus('idle');
    setIsPracticing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset when lessonId or modeParam changes
  useEffect(() => {
    if (modeParam === 'skip') {
      handleStartSkipExam();
      return;
    }

    setQuizMode(isN4 ? 'practice' : 'learning');
    if (currentLesson?.id === 'n5-level-exam') {
      setActiveQuizQuestions(generateN5LevelExamQuestions(25));
    } else if (currentLesson?.id === 'n4-level-exam') {
      setActiveQuizQuestions(generateN4LevelExamQuestions(25));
    } else if (currentLesson?.id === 'kanji-n5-mastery') {
      setActiveQuizQuestions(getRandomKanjiQuiz(10));
    } else if (currentLesson?.id === 'listening-n5-mastery') {
      setActiveQuizQuestions(getRandomListeningQuiz(10));
    } else if (!isN4) {
      setActiveQuizQuestions(getLearningQuizForLesson(currentLesson, 15));
    } else {
      setActiveQuizQuestions(currentLesson?.quiz || []);
    }
    setIsPracticing(false);
    setActiveQueue([]);
    setQueueIdx(0);
    setMistakeQueue([]);
    setFirstPassMistakes([]);
    setIsReviewPhase(false);
    setIsFinished(false);
    setSelectedOption(null);
    setSelectedChips([]);
    setCheckStatus('idle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId, modeParam]);

  const initialQuestions = useMemo(() => {
    if (activeQuizQuestions && activeQuizQuestions.length > 0) return activeQuizQuestions;
    if (quizMode === 'learning' && !isN4) {
      return getLearningQuizForLesson(currentLesson, 15);
    }
    return currentLesson?.quiz || [];
  }, [activeQuizQuestions, quizMode, isN4, currentLesson]);

  const currentQuestionIdx = activeQueue[queueIdx] !== undefined ? activeQueue[queueIdx] : 0;
  const currentQuestion = initialQuestions[currentQuestionIdx] || initialQuestions[0];

  // Auto-play audio once if question is audio-listening
  useEffect(() => {
    if (isPracticing && currentQuestion?.type === 'audio-listening' && checkStatus === 'idle') {
      const audioText = currentQuestion.audioText || currentQuestion.question || currentQuestion.prompt;
      if (!audioText) return;
      const timer = setTimeout(() => {
        speakJapanese(audioText);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isPracticing, currentQuestionIdx, checkStatus]);

  // Start Learning Quiz Session (Guided Lesson Learning)
  const handleStartLearning = () => {
    let questionsToUse = [];
    if (currentLesson.id === 'kanji-n5-mastery') {
      questionsToUse = getRandomKanjiQuiz(10);
    } else if (currentLesson.id === 'listening-n5-mastery') {
      questionsToUse = getRandomListeningQuiz(10);
    } else {
      questionsToUse = getLearningQuizForLesson(currentLesson, 15);
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('learning');
    const queue = questionsToUse.map((_, i) => i);
    setActiveQueue(queue);
    setQueueIdx(0);
    setMistakeQueue([]);
    setFirstPassMistakes([]);
    setIsReviewPhase(false);
    setIsFinished(false);
    setSelectedOption(null);
    setSelectedChips([]);
    setCheckStatus('idle');
    setIsPracticing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Practice Session (Mastery Challenge)
  const handleStartPractice = () => {
    let questionsToUse = [];
    if (currentLesson?.id === 'n5-level-exam') {
      questionsToUse = generateN5LevelExamQuestions(25);
    } else if (currentLesson?.id === 'n4-level-exam') {
      questionsToUse = generateN4LevelExamQuestions(25);
    } else if (currentLesson.id === 'kanji-n5-mastery') {
      questionsToUse = getRandomKanjiQuiz(10);
    } else if (currentLesson.id === 'listening-n5-mastery') {
      questionsToUse = getRandomListeningQuiz(10);
    } else {
      questionsToUse = currentLesson?.quiz || [];
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('practice');
    const queue = questionsToUse.map((_, i) => i);
    setActiveQueue(queue);
    setQueueIdx(0);
    setMistakeQueue([]);
    setFirstPassMistakes([]);
    setIsReviewPhase(false);
    setIsFinished(false);
    setSelectedOption(null);
    setSelectedChips([]);
    setCheckStatus('idle');
    setIsPracticing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitPractice = () => {
    if (checkStatus !== 'idle' || queueIdx > 0 || isReviewPhase) {
      setShowExitConfirm(true);
      return;
    }
    setIsPracticing(false);
  };

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    setIsPracticing(false);
  };

  // Word Bank: Tap chip to add and pronounce audio out loud
  const handleAddChip = (chipIndex) => {
    if (checkStatus !== 'idle') return;
    if (selectedChips.includes(chipIndex)) return;
    const chipText = currentQuestion.chips[chipIndex];
    if (chipText) {
      speakJapanese(chipText);
    }
    sfx.playTileClick();
    setSelectedChips((prev) => [...prev, chipIndex]);
  };

  // Word Bank: Tap placed chip to return to tray (no audio speech, only tile feedback)
  const handleRemoveChip = (chipIndex) => {
    if (checkStatus !== 'idle') return;
    sfx.playTileClick();
    setSelectedChips((prev) => prev.filter((i) => i !== chipIndex));
  };

  // Check Answer
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

      // Record mistake for review queue
      if (!isReviewPhase && !firstPassMistakes.includes(currentQuestionIdx)) {
        setFirstPassMistakes((prev) => [...prev, currentQuestionIdx]);
      }
      if (!mistakeQueue.includes(currentQuestionIdx)) {
        setMistakeQueue((prev) => [...prev, currentQuestionIdx]);
      }
    }

    // Record individual Kanji Character review if applicable
    if (currentQuestion?.kanjiChar) {
      recordKanjiReview(currentQuestion.kanjiChar, isCorrect);
    }
  };

  // Continue to next question or review phase
  const handleContinue = () => {
    if (queueIdx < activeQueue.length - 1) {
      setQueueIdx((prev) => prev + 1);
      setSelectedOption(null);
      setSelectedChips([]);
      setCheckStatus('idle');
    } else {
      // Reached the end of activeQueue
      if (mistakeQueue.length > 0) {
        // Start review phase with questions missed
        setIsReviewPhase(true);
        setActiveQueue([...mistakeQueue]);
        setMistakeQueue([]);
        setQueueIdx(0);
        setSelectedOption(null);
        setSelectedChips([]);
        setCheckStatus('idle');
      } else {
        // Session complete!
        setIsFinished(true);
        sfx.playVictory();

        // Calculate score based on initial pass accuracy
        const initialCount = initialQuestions.length || 10;
        const initialCorrect = initialCount - firstPassMistakes.length;
        const totalScore = Math.max(0, Math.round((initialCorrect / initialCount) * 100));

        // Save progression states
        if (quizMode === 'skip') {
          if (totalScore >= 80) {
            markLessonSkipped(currentLesson.id, totalScore);
          }
        } else if (currentLesson?.isExam) {
          if (totalScore >= 80) {
            markLevelExamPassed(isN4 ? 'N4' : 'N5', totalScore);
          }
        } else {
          recordQuizCompletion(currentLesson.id, quizMode, totalScore, isN4);
        }

        // Save progress to SQLite
        if (window.db?.saveLessonProgress) {
          window.db
            .saveLessonProgress(currentLesson.id, true, totalScore)
            .then((updated) => {
              if (updated) setDbProgress(updated);
            })
            .catch((err) => console.warn('Failed to save lesson progress:', err));
        }
      }
    }
  };

  const handlePlayPromptAudio = (text) => {
    setAudioPlaying(true);
    speakJapanese(text);
    setTimeout(() => setAudioPlaying(false), 1200);
  };

  const isInputProvided = () => {
    if (!currentQuestion) return false;
    if (currentQuestion.type === 'word-bank') {
      return selectedChips.length > 0;
    }
    return selectedOption !== null;
  };

  // Progress Bar percentage
  const totalQuestionsToMaster = initialQuestions.length || 10;
  const masteredCount = isReviewPhase
    ? totalQuestionsToMaster - mistakeQueue.length - (checkStatus === 'correct' ? 1 : 0)
    : queueIdx;
  const progressPercent = Math.min(100, Math.round((masteredCount / totalQuestionsToMaster) * 100));

  const lessonRecord = dbProgress[currentLesson.id] || null;

  // Distinct categories for Kanji Checklist
  const kanjiCategories = useMemo(() => {
    const set = new Set();
    kanjiN5Data.forEach((k) => {
      if (k.category) set.add(k.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered Kanji list for the interactive checklist
  const filteredKanjiList = useMemo(() => {
    return kanjiN5Data.filter((k) => {
      // Category filter
      if (kanjiCategoryFilter !== 'All' && k.category !== kanjiCategoryFilter) {
        return false;
      }

      // Mastery stats
      const stats = kanjiMasteryMap[k.char] || {};
      const totalReviews = stats.totalReviews || stats.total_reviews || 0;
      const correctReviews = stats.correctReviews || stats.correct_reviews || 0;
      const accuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0;
      const isLearned = correctReviews > 0 && accuracy >= 70;

      // Status filter
      if (kanjiStatusFilter === 'learned' && !isLearned) return false;
      if (kanjiStatusFilter === 'in-progress' && (isLearned || totalReviews === 0)) return false;
      if (kanjiStatusFilter === 'unlearned' && totalReviews > 0) return false;

      // Text Search
      if (kanjiSearchQuery.trim()) {
        const q = kanjiSearchQuery.toLowerCase().trim();
        const matchChar = k.char.includes(q);
        const matchMeaning = k.meaning?.toLowerCase().includes(q);
        const matchOnyomi = k.onyomi?.toLowerCase().includes(q);
        const matchKunyomi = k.kunyomi?.toLowerCase().includes(q);
        const matchExample = k.examples?.some(
          (ex) => ex.word.includes(q) || ex.reading.includes(q) || ex.meaning?.toLowerCase().includes(q)
        );
        if (!matchChar && !matchMeaning && !matchOnyomi && !matchKunyomi && !matchExample) {
          return false;
        }
      }

      return true;
    });
  }, [kanjiCategoryFilter, kanjiStatusFilter, kanjiSearchQuery, kanjiMasteryMap]);

  // Overall Kanji Checklist Summary Metrics
  const kanjiSummaryStats = useMemo(() => {
    let learnedCount = 0;
    let totalReviewsSum = 0;
    let totalCorrectSum = 0;

    kanjiN5Data.forEach((k) => {
      const stats = kanjiMasteryMap[k.char] || {};
      const total = stats.totalReviews || stats.total_reviews || 0;
      const correct = stats.correctReviews || stats.correct_reviews || 0;
      const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
      if (correct > 0 && acc >= 70) {
        learnedCount++;
      }
      totalReviewsSum += total;
      totalCorrectSum += correct;
    });

    const totalKanji = kanjiN5Data.length;
    const overallAcc =
      totalReviewsSum > 0 ? Math.round((totalCorrectSum / totalReviewsSum) * 100) : 0;

    return {
      totalKanji,
      learnedCount,
      totalReviewsSum,
      totalCorrectSum,
      totalWrongSum: Math.max(0, totalReviewsSum - totalCorrectSum),
      overallAcc,
      learnedPercent: Math.round((learnedCount / totalKanji) * 100),
    };
  }, [kanjiMasteryMap]);

  // =========================================================
  // VIEW: PRACTICE SESSION
  // =========================================================
  if (isPracticing) {
    if (isFinished) {
      const initialTotal = initialQuestions.length;
      const initialCorrect = initialTotal - firstPassMistakes.length;
      const initialAccuracyPercent = Math.max(0, Math.round((initialCorrect / initialTotal) * 100));

      return (
        <div className="practice-session-container">
          <div className="practice-victory-card">
            <div className="practice-trophy-icon">
              {isExamPassed ? <AiOutlineTrophy size={52} /> : isSkipMode && isSkipPassed ? <AiOutlineThunderbolt size={50} /> : <AiOutlineTrophy size={48} />}
            </div>
            <h2>
              {isSkipMode
                ? isSkipPassed ? '⚡ Lesson Skipped & Unlocked!' : 'Skip Test Incomplete'
                : isExam
                  ? isExamPassed ? `🏆 JLPT ${isN4 ? 'N4' : 'N5'} Certification Passed!` : `Exam Score: ${initialAccuracyPercent}%`
                  : quizMode === 'learning' ? 'Learning Quiz Complete!' : 'Practice Complete!'}
            </h2>
            <p className="practice-victory-sub">
              {isSkipMode
                ? isSkipPassed
                  ? `Outstanding! You scored ${initialAccuracyPercent}% and demonstrated mastery of ${currentLesson.shortTitle || currentLesson.title}. Progression has been unlocked!`
                  : `You scored ${initialAccuracyPercent}%. An accuracy of 80% or higher is required to skip this lesson. Please study the lesson guide or try again.`
                : isExam
                  ? isExamPassed
                    ? `Congratulations! You scored ${initialAccuracyPercent}% on the Comprehensive Level Exam. JLPT ${isN4 ? 'N3' : 'N4'} is now officially unlocked on your dashboard!`
                    : `You scored ${initialAccuracyPercent}%. A passing grade of 80% (20/25) is required to unlock JLPT ${isN4 ? 'N3' : 'N4'}. Review the curriculum topics and retake the exam when ready.`
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
                    onClick={() => {
                      const nextIsN4 = allN4Lessons.some((l) => l.id === nextLesson.id);
                      navigate(`/learn/${nextIsN4 ? 'n4' : 'n5'}/${nextLesson.id}`);
                    }}
                  >
                    <AiOutlineArrowRight size={16} /> Next Lesson
                  </button>
                )}
                {isSkipPassed ? (
                  <button className="practice-btn-secondary" onClick={() => setIsPracticing(false)}>
                    <AiOutlineBook size={16} /> Review Lesson Guide
                  </button>
                ) : (
                  <button className="practice-btn-primary" onClick={handleStartSkipExam}>
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
                    <AiOutlineTrophy size={16} /> Go to JLPT {isN4 ? 'N3' : 'N4'}
                  </button>
                ) : (
                  <button className="practice-btn-primary" onClick={handleStartPractice}>
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
                    <button className="practice-btn-primary" onClick={handleStartPractice}>
                      <AiOutlineArrowRight size={16} /> Start Practice Quiz
                    </button>
                    <button className="practice-btn-secondary" onClick={handleStartLearning}>
                      <AiOutlineReload size={16} /> Learn Again
                    </button>
                    <button className="practice-btn-secondary" onClick={() => setIsPracticing(false)}>
                      <AiOutlineArrowLeft size={16} /> Return
                    </button>
                  </>
                ) : (
                  <>
                    <button className="practice-btn-secondary" onClick={handleStartPractice}>
                      <AiOutlineReload size={16} /> Practice Again
                    </button>
                    {!isN4 && (
                      <button className="practice-btn-secondary" onClick={handleStartLearning}>
                        <AiOutlineBook size={16} /> Take Learning Quiz
                      </button>
                    )}
                    <button className="practice-btn-secondary" onClick={() => setIsPracticing(false)}>
                      <AiOutlineBook size={16} /> Review Guide & Checklist
                    </button>
                    {nextLesson && (
                      <button
                        className="practice-btn-primary"
                        onClick={() => {
                          const nextIsN4 = allN4Lessons.some((l) => l.id === nextLesson.id);
                          navigate(`/learn/${nextIsN4 ? 'n4' : 'n5'}/${nextLesson.id}`);
                        }}
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

    return (
      <div className="practice-session-container">
        {/* Top Header Bar */}
        <div className="practice-top-bar">
          <button
            className="practice-exit-btn"
            onClick={handleExitPractice}
            title={quizMode === 'learning' ? 'Exit learning quiz' : 'Exit practice session'}
          >
            <AiOutlineClose size={20} />
          </button>

          <span className={`quiz-mode-pill ${quizMode}`}>
            {quizMode === 'learning' ? '📖 Guided Learning Quiz' : '🎯 Practice Session'}
          </span>

          <div className="practice-progress-track">
            <div
              className={`practice-progress-fill ${isReviewPhase ? 'review-fill' : ''}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="practice-top-meta">
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
                {currentQuestion.chips.map((chipText, chipIdx) => {
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
                    const parts = currentQuestion.romaji.split(/___|\[\s*\?\s*\]/g);
                    const selectedText = selectedOption !== null
                      ? (currentQuestion.romajiOptions?.[selectedOption] || currentQuestion.options?.[selectedOption] || '___')
                      : '___';
                    return (
                      <>
                        {parts[0]}
                        <span className={`blank-slot ${selectedOption !== null ? 'filled' : ''}`} style={{ display: 'inline', fontWeight: 700 }}>
                          {selectedText}
                        </span>
                        {parts.slice(1).join('')}
                      </>
                    );
                  })()}
                </div>
              )}

              <div className="exercise-options-grid">
                {currentQuestion.options.map((opt, optIdx) => {
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
                        {shouldShowRomaji &&
                          currentQuestion.romajiOptions?.[optIdx] &&
                          currentQuestion.romajiOptions[optIdx] !== opt && (
                            <span className="opt-romaji">{currentQuestion.romajiOptions[optIdx]}</span>
                          )}
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
                {currentQuestion.options.map((opt, optIdx) => {
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
                !currentQuestion.categoryLabel?.toLowerCase().includes('formula') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('structure') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('meaning') &&
                !currentQuestion.categoryLabel?.toLowerCase().includes('tense') &&
                currentQuestion.romaji && (
                  <div className="romaji-subtext" style={{ marginBottom: '16px' }}>
                    {currentQuestion.romaji}
                  </div>
              )}

              <div className="exercise-options-grid">
                {currentQuestion.options.map((opt, optIdx) => {
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
                        {shouldShowRomaji &&
                          currentQuestion.romajiOptions?.[optIdx] &&
                          currentQuestion.romajiOptions[optIdx] !== opt && (
                            <span className="opt-romaji">{currentQuestion.romajiOptions[optIdx]}</span>
                          )}
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

        {/* BOTTOM ACTION DRAWER */}
        <div className={`exercise-bottom-bar ${checkStatus}`}>
          <div className="exercise-bottom-content">
            {checkStatus === 'idle' && (
              <div className="exercise-idle-feedback">
                <span>Select or arrange your answer above</span>
                <button
                  type="button"
                  className="exercise-action-btn check"
                  onClick={handleCheck}
                  disabled={!isInputProvided()}
                >
                  Check Answer
                </button>
              </div>
            )}

            {checkStatus === 'correct' && (
              <div className="exercise-feedback-container correct">
                <div className="feedback-details">
                  <div className="feedback-title correct">
                    <AiOutlineCheckCircle size={24} />
                    <span>Correct!</span>
                  </div>
                  {currentQuestion.explanation && (
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
                  {currentQuestion.explanation && (
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
                <h3>{currentLesson.shortTitle} - Notes</h3>
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

        {/* Practice Session Exit Confirmation Modal */}
        <ConfirmModal
          isOpen={showExitConfirm}
          title={`Exit ${quizMode === 'learning' ? 'Learning Quiz' : quizMode === 'skip' ? 'Skip Exam' : currentLesson?.isExam ? 'Certification Exam' : 'Practice Session'}?`}
          message="Your progress for this attempt will be lost. Are you sure you want to return to the curriculum?"
          confirmText="Exit Session"
          cancelText="Keep Practicing"
          variant="warning"
          onConfirm={handleConfirmExit}
          onCancel={() => setShowExitConfirm(false)}
        />
      </div>
    );
  }

  // =========================================================
  // VIEW: LOCKED LESSON SCREEN (GATED PROGRESSION)
  // =========================================================
  if (!isUnlocked && !isPracticing && modeParam !== 'skip') {
    return (
      <div className="n5-lesson-page">
        <div className="lesson-nav-bar">
          <Link to="/learn" className="lesson-nav-back">
            <AiOutlineArrowLeft size={16} />
            <span>Back to Curriculum</span>
          </Link>
        </div>

        <div className="lesson-locked-container">
          <div className="lesson-locked-card">
            <div className="locked-shield-icon">
              <AiOutlineLock size={52} />
            </div>
            <h2>{currentLesson?.title || 'Lesson'} is Locked</h2>
            <p className="lesson-locked-sub">
              This lesson is currently locked in progression. Complete both the Learning Quiz and Practice Quiz for {prevLesson ? `"${prevLesson.shortTitle || prevLesson.title}"` : 'the previous lesson'}, or take the Skip Exam to test out of this lesson right now.
            </p>
            <div className="lesson-locked-actions">
              <button className="practice-btn-primary" onClick={handleStartSkipExam}>
                <AiOutlineThunderbolt size={16} /> Take Skip Exam (Test Out)
              </button>
              <button className="practice-btn-secondary" onClick={() => navigate('/learn')}>
                <AiOutlineArrowLeft size={16} /> Return to Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // VIEW: DEFAULT LESSON GUIDE & CHECKLIST
  // =========================================================
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
              onClick={() => {
                const prevIsN4 = allN4Lessons.some((l) => l.id === prevLesson.id);
                navigate(`/learn/${prevIsN4 ? 'n4' : 'n5'}/${prevLesson.id}`);
              }}
              className="lesson-nav-btn"
              title={prevLesson.shortTitle}
            >
              <AiOutlineArrowLeft size={14} /> Prev: Lesson {prevLesson.number}
            </button>
          ) : (
            <span className="lesson-nav-btn disabled">First Lesson</span>
          )}

          <span className="lesson-nav-indicator">
            {(currentSection.title || '').replace(/^\d+\.\s*/, '')}: Lesson {sectionLessonNumber} of {currentSection.lessons.length}
          </span>

          {nextLesson ? (
            <button
              onClick={() => {
                const nextIsN4 = allN4Lessons.some((l) => l.id === nextLesson.id);
                navigate(`/learn/${nextIsN4 ? 'n4' : 'n5'}/${nextLesson.id}`);
              }}
              className="lesson-nav-btn"
              title={nextLesson.shortTitle}
            >
              Next: Lesson {nextLesson.number} <AiOutlineArrowRight size={14} />
            </button>
          ) : (
            <span className="lesson-nav-btn disabled">End of Curriculum</span>
          )}
        </div>
      </div>

      {/* Lesson Header Banner Card with Direct Practice Launchpad */}
      <div className="lesson-header-card">
        <div className="lesson-header-top">
          <span className="lesson-badge-number">
            {currentLesson?.isExam
              ? `JLPT ${isN4 ? 'N4' : 'N5'} CAPSTONE EXAM`
              : isN4
                ? `${currentSection?.title || 'JLPT N4'} #${currentLesson?.number}`
                : currentLesson?.id === 'kanji-n5-mastery'
                  ? 'JLPT N5 Kanji'
                  : currentLesson?.id === 'listening-n5-mastery'
                    ? 'JLPT N5 Listening'
                    : `${(currentSection?.title || 'JLPT N5').replace(/^\d+\.\s*/, '')} #${currentLesson?.number}`}
          </span>
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
          <p>{currentLesson.description || currentLesson.summary}</p>
        </div>

        {/* Hero Practice / Learning Launch Banner */}
        <div className="hero-practice-banner">
          <div className="hero-practice-info">
            <h3>
              {currentLesson.isExam
                ? `JLPT ${isN4 ? 'N4' : 'N5'} Comprehensive Certification Exam`
                : currentLesson.id === 'kanji-n5-mastery'
                  ? 'Randomized Kanji Reading Practice'
                  : currentLesson.id === 'listening-n5-mastery'
                    ? 'Randomized JLPT N5 Listening Test'
                    : isN4
                      ? `${currentLesson.shortTitle} Practice`
                      : `${currentLesson.shortTitle || currentLesson.title} • Learning Quiz`}
            </h3>
            <p>
              {currentLesson.isExam
                ? `25 Comprehensive Questions across all ${isN4 ? 'N4' : 'N5'} topics • Passing score 80%+ unlocks JLPT ${isN4 ? 'N3' : 'N4'}`
                : currentLesson.id === 'kanji-n5-mastery'
                  ? '10 Randomized Questions across all kanji quiz banks • Updates character mastery & checklist'
                  : currentLesson.id === 'listening-n5-mastery'
                    ? '10 Randomized Questions across Level 1, Level 2, and 4 Core Te-form Audio Patterns'
                    : isN4
                      ? `${currentLesson?.quiz?.length || 3} Targeted Questions • Word Bank & Contextual Drills`
                      : '15 Guided Learning Questions • Structure formulas, pronunciation, meaning, and sentence patterns'}
            </p>
          </div>
          <button
            className="hero-start-practice-btn hero-start-learning-btn"
            onClick={isN4 || currentLesson?.isExam ? handleStartPractice : handleStartLearning}
          >
            {currentLesson.isExam
              ? 'Start Comprehensive Exam'
              : currentLesson.id === 'kanji-n5-mastery'
                ? 'Start Random Quiz'
                : currentLesson.id === 'listening-n5-mastery'
                  ? 'Start Listening Quiz'
                  : isN4
                    ? 'Start Practice'
                    : 'Start Learning'}{' '}
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE JLPT N5 KANJI CHECKLIST (RENDERED ON KANJI LESSON)
          ========================================================= */}
      {currentLesson.id === 'kanji-n5-mastery' && (
        <div className="kanji-mastery-checklist-section">
          <div className="checklist-hero-header">
            <div className="checklist-header-title">
              <h2>JLPT N5 Kanji Mastery Checklist ({kanjiSummaryStats.totalKanji} Characters)</h2>
              <p>
                Track your progress on all {kanjiSummaryStats.totalKanji} JLPT N5 Kanji. A character is marked as learned (
                <strong>✅ Learned</strong>) once you achieve at least 1 correct review and 70%+
                accuracy. Review statistics persist across study sessions.
              </p>
            </div>
          </div>

          {/* Checklist Summary Stats Bar */}
          <div className="kanji-checklist-stats-bar">
            <div className="k-stat-box highlight">
              <span className="k-stat-num">
                {kanjiSummaryStats.learnedCount} / {kanjiSummaryStats.totalKanji}
              </span>
              <span className="k-stat-sub">
                Learned Kanji ({kanjiSummaryStats.learnedPercent}%)
              </span>
              <div className="k-progress-bar-wrap">
                <div
                  className="k-progress-bar-fill"
                  style={{ width: `${kanjiSummaryStats.learnedPercent}%` }}
                />
              </div>
            </div>

            <div className="k-stat-box">
              <span className="k-stat-num">{kanjiSummaryStats.totalReviewsSum}</span>
              <span className="k-stat-sub">Total Quiz Attempts</span>
            </div>

            <div className="k-stat-box">
              <span className="k-stat-num">
                {kanjiSummaryStats.totalCorrectSum} / {kanjiSummaryStats.totalReviewsSum}
              </span>
              <span className="k-stat-sub">Correct vs Total</span>
            </div>

            <div className="k-stat-box">
              <span className="k-stat-num">{kanjiSummaryStats.overallAcc}%</span>
              <span className="k-stat-sub">Overall Accuracy</span>
            </div>
          </div>

          {/* Checklist Filters & Search Toolbar */}
          <div className="kanji-checklist-toolbar">
            <div className="kanji-search-box">
              <AiOutlineSearch size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search kanji, meaning, or reading (e.g. 日, sun, にち)..."
                value={kanjiSearchQuery}
                onChange={(e) => setKanjiSearchQuery(e.target.value)}
              />
              {kanjiSearchQuery && (
                <button className="clear-search-btn" onClick={() => setKanjiSearchQuery('')}>
                  <AiOutlineClose size={14} />
                </button>
              )}
            </div>

            <div className="kanji-filter-group">
              <div className="kanji-category-select-wrap">
                <AiOutlineFilter size={16} className="filter-icon" />
                <select
                  value={kanjiCategoryFilter}
                  onChange={(e) => setKanjiCategoryFilter(e.target.value)}
                  className="kanji-category-select"
                >
                  {kanjiCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="kanji-status-tabs">
                <button
                  type="button"
                  className={`status-tab ${kanjiStatusFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setKanjiStatusFilter('all')}
                >
                  All ({kanjiSummaryStats.totalKanji})
                </button>
                <button
                  type="button"
                  className={`status-tab ${kanjiStatusFilter === 'learned' ? 'active' : ''}`}
                  onClick={() => setKanjiStatusFilter('learned')}
                >
                  Learned ✅ ({kanjiSummaryStats.learnedCount})
                </button>
                <button
                  type="button"
                  className={`status-tab ${kanjiStatusFilter === 'in-progress' ? 'active' : ''}`}
                  onClick={() => setKanjiStatusFilter('in-progress')}
                >
                  In Progress 🔄
                </button>
                <button
                  type="button"
                  className={`status-tab ${kanjiStatusFilter === 'unlearned' ? 'active' : ''}`}
                  onClick={() => setKanjiStatusFilter('unlearned')}
                >
                  Unlearned ⚪
                </button>
              </div>
            </div>
          </div>

          {/* Kanji Cards Checklist Grid */}
          {filteredKanjiList.length === 0 ? (
            <div className="kanji-empty-state">
              <p>No Kanji match your current filter or search query.</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setKanjiSearchQuery('');
                  setKanjiCategoryFilter('All');
                  setKanjiStatusFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="kanji-checklist-grid">
              {filteredKanjiList.map((k) => {
                const stats = kanjiMasteryMap[k.char] || {};
                const total = stats.totalReviews || stats.total_reviews || 0;
                const correct = stats.correctReviews || stats.correct_reviews || 0;
                const wrong = Math.max(0, total - correct);
                const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
                const isLearned = correct > 0 && acc >= 70;

                return (
                  <div
                    key={k.char}
                    className={`kanji-card-item ${isLearned ? 'is-learned' : total > 0 ? 'is-in-progress' : ''}`}
                  >
                    <div className="kanji-card-header-row">
                      <span className="kanji-large-char">{k.char}</span>
                      {isLearned ? (
                        <span className="kanji-status-badge learned">
                          <AiOutlineCheck size={13} /> Learned
                        </span>
                      ) : total > 0 ? (
                        <span className="kanji-status-badge in-progress">In Progress</span>
                      ) : (
                        <span className="kanji-status-badge unlearned">Not Started</span>
                      )}
                    </div>

                    <div className="kanji-meaning-block">
                      <h4 className="k-meaning-text">{k.meaning}</h4>
                      <span className="k-strokes-meta">
                        {k.strokes} strokes • {k.category}
                      </span>
                    </div>

                    <div className="kanji-readings-box">
                      <div className="k-reading-line">
                        <span className="r-label">On:</span>
                        <span className="r-text">{k.onyomi || '—'}</span>
                      </div>
                      <div className="k-reading-line">
                        <span className="r-label">Kun:</span>
                        <span className="r-text">{k.kunyomi || '—'}</span>
                      </div>
                    </div>

                    {k.examples && k.examples.length > 0 && (
                      <div className="kanji-example-tag">
                        <span className="ex-word">{k.examples[0].word}</span>
                        <span className="ex-reading">({k.examples[0].reading})</span>
                      </div>
                    )}

                    {/* Tally / Accuracy Breakdown */}
                    <div className="kanji-card-footer-stats">
                      <div className="k-tally-counts">
                        <span className="tally-green">✓ {correct}</span>
                        <span className="tally-div">|</span>
                        <span className="tally-red">✗ {wrong}</span>
                      </div>
                      <span
                        className={`k-accuracy-pill ${acc >= 70 ? 'acc-high' : total > 0 ? 'acc-med' : 'acc-none'}`}
                      >
                        {total > 0 ? `${acc}%` : '0%'}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="kanji-card-actions-bar">
                      <button
                        type="button"
                        className="k-audio-btn"
                        onClick={() =>
                          speakJapanese(k.examples?.[0]?.word || k.kunyomi?.split(',')[0] || k.char)
                        }
                        title="Pronounce Kanji Word"
                      >
                        <AiOutlineSound size={16} />
                      </button>
                      <Link
                        to={`/learn/practice/kanji/${k.char}`}
                        className="k-draw-practice-link"
                        title="Practice writing on canvas"
                      >
                        Practice Canvas
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* =========================================================
          INTERACTIVE JLPT N5 LISTENING AUDIO LAB (RENDERED ON LISTENING LESSON)
          ========================================================= */}
      {currentLesson.id === 'listening-n5-mastery' && (
        <div className="listening-mastery-lab-section">
          <div className="checklist-hero-header">
            <div className="checklist-header-title">
              <h2>JLPT N5 Listening Dialogue Lab & Practice Tracks</h2>
              <p>
                Listen to authentic native Japanese conversations covering daily transit, shopping, meetings, and the 4 core Te-form patterns. Practice comprehension and shadowing with synchronized text.
              </p>
            </div>
          </div>

          {/* Track Selector Tabs */}
          <div className="listening-track-tabs-bar">
            {listeningTracks.map((tr) => {
              const isActive = selectedListeningTrackId === tr.id;
              return (
                <button
                  key={tr.id}
                  type="button"
                  className={`listening-track-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedListeningTrackId(tr.id)}
                >
                  <span className="track-btn-badge">{tr.level}</span>
                  <span className="track-btn-title">{tr.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Track Player Box */}
          {activeListeningTrack && (
            <div className="listening-active-track-box">
              <div className="track-box-header">
                <div>
                  <div className="track-level-tag">{activeListeningTrack.level}</div>
                  <h3 className="track-name">{activeListeningTrack.title}</h3>
                  <p className="track-desc">{activeListeningTrack.scenario}</p>
                </div>
                <button
                  type="button"
                  className="track-play-all-btn"
                  onClick={() => {
                    const full = activeListeningTrack.dialogue.map((d) => d.text).join(' ');
                    handlePlayPromptAudio(full);
                  }}
                >
                  <AiOutlinePlayCircle size={20} />
                  <span>Play Full Audio</span>
                </button>
              </div>

              <div className="dialogue-flow-list">
                {activeListeningTrack.dialogue.map((line, lIdx) => (
                  <div key={lIdx} className="dialogue-line-card">
                    <div className="dialogue-speaker-pill">{line.speaker}</div>
                    <div className="dialogue-text-block">
                      <div className="dialogue-jp">{line.text}</div>
                      {shouldShowRomaji && line.romaji && (
                        <div className="dialogue-romaji">{line.romaji}</div>
                      )}
                      <div className="dialogue-en">{line.en}</div>
                    </div>
                    <button
                      type="button"
                      className="dialogue-audio-btn"
                      onClick={() => handlePlayPromptAudio(line.text)}
                      title="Listen to this line"
                    >
                      <AiOutlineSound size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Detailed Lesson Material Guide */}
      <div className="lesson-guide-container">
        {normalizedSections.map((section, secIdx) => (
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
                              cIdx === 1 ? 'table-cell-jp' : cIdx === 0 ? 'table-cell-lead' : ''
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
                    return (
                      <div key={exIdx} className="example-card">
                        <button
                          type="button"
                          className="audio-play-btn"
                          onClick={() => handlePlayPromptAudio(ex.jp)}
                          title="Play Native Audio"
                        >
                          <AiOutlineSound size={20} />
                        </button>
                        <div className="example-details">
                          <div className="example-jp">{ex.jp}</div>
                          {shouldShowRomaji && <div className="example-romaji">{ex.romaji}</div>}
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

        {/* Bottom CTA */}
        <div className="lesson-cta-card">
          <div className="lesson-cta-text">
            <h3>
              {currentLesson.id === 'kanji-n5-mastery'
                ? 'Ready to test your Kanji readings?'
                : currentLesson.id === 'listening-n5-mastery'
                  ? 'Ready to test your listening comprehension?'
                  : 'Ready to test what you learned?'}
            </h3>
            <p>
              {currentLesson.id === 'kanji-n5-mastery'
                ? 'Start a 10-question randomized reading quiz sampled across MLC Parts 1–10!'
                : currentLesson.id === 'listening-n5-mastery'
                  ? 'Start a 10-question randomized listening test across Level 1, Level 2, and Te-form patterns!'
                  : 'Take the interactive practice session to test what you have learned and earn your mastery badge!'}
            </p>
          </div>
          <button className="btn-primary lesson-cta-btn" onClick={handleStartPractice}>
            {currentLesson.id === 'kanji-n5-mastery'
              ? 'Start Random Quiz'
              : currentLesson.id === 'listening-n5-mastery'
                ? 'Start Listening Quiz'
                : 'Start Practice Session'}{' '}
            <AiOutlineArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
