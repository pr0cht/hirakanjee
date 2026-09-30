import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  AiOutlineLock,
  AiOutlineThunderbolt,
  AiOutlineArrowLeft,
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
import { allN3Lessons, n3Curriculum } from '../data/n3/n3Curriculum';
import { generateN3LevelExamQuestions } from '../data/n3/n3LevelExam';
import { kanjiN5Data } from '../data/kanjiN5Data';
import { getLearningQuizForLesson } from '../data/n5/learningQuizEngine';
import {
  getStoredProgression,
  isLessonUnlocked,
  isLessonCompleted,
  recordQuizCompletion,
  markLessonSkipped,
  markLevelExamPassed,
  getLessonChainProgress,
  recordChainCompletion,
} from '../utils/progression';
import { speakJapanese } from '../utils/audio';

// Extracted Sub-Components
import LessonHeader from '../components/lesson/LessonHeader';
import LessonHero from '../components/lesson/LessonHero';
import LessonSections from '../components/lesson/LessonSections';
import KanjiMasteryChecklist from '../components/lesson/KanjiMasteryChecklist';
import ListeningLab from '../components/lesson/ListeningLab';
import QuizSession from '../components/lesson/QuizSession';

import './N5LessonPage.css';

// Pre-computed static arrays and map for O(1) routing
const combinedLessons = [...allN5Lessons, ...allN4Lessons, ...allN3Lessons];
const combinedCurriculum = [...n5Curriculum, ...n4Curriculum, ...n3Curriculum];
const lessonLookupMap = new Map();
combinedLessons.forEach((l, index) => {
  lessonLookupMap.set(l.id, { lesson: l, index });
});

export default function N5LessonPage({ settings = {} }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get('mode');

  // Progression reactive state
  const [progressionVer, setProgressionVer] = useState(0);
  const progData = useMemo(() => getStoredProgression(), [progressionVer]);

  useEffect(() => {
    const handleProgUpdate = () => setProgressionVer((v) => v + 1);
    window.addEventListener('progressionUpdated', handleProgUpdate);
    return () => window.removeEventListener('progressionUpdated', handleProgUpdate);
  }, []);

  const lookup = lessonLookupMap.get(lessonId) || { lesson: combinedLessons[0], index: 0 };
  const currentLesson = lookup.lesson;
  const lessonIndex = lookup.index;
  const isN3 = currentLesson?.id?.startsWith('n3-') || allN3Lessons.some((l) => l.id === currentLesson?.id);
  const isN4 = currentLesson?.id?.startsWith('n4-') || allN4Lessons.some((l) => l.id === currentLesson?.id);
  const levelCode = isN3 ? 'N3' : isN4 ? 'N4' : 'N5';
  const levelPrefix = isN3 ? 'n3' : isN4 ? 'n4' : 'n5';
  const nextUnlockedLevel = isN3 ? 'N2' : isN4 ? 'N3' : 'N4';
  const isUpperLevel = isN3 || isN4;
  const isKanjiMasteryLesson = currentLesson?.id === 'kanji-n5-mastery';

  const isExam = Boolean(
    currentLesson?.isExam ||
    currentLesson?.id?.includes('exam') ||
    currentLesson?.id === 'n5-level-exam' ||
    currentLesson?.id === 'n4-level-exam' ||
    currentLesson?.id === 'n3-level-exam'
  );

  const isUnlocked = isLessonUnlocked(currentLesson?.id, levelCode, progData);
  const isCompleted = isLessonCompleted(currentLesson?.id, levelCode, progData);

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

  // Local reactive romaji preference synchronized with localStorage and global settings
  const [localShowRomaji, setLocalShowRomaji] = useState(() => {
    try {
      const saved = localStorage.getItem('hirakanjee_showRomaji');
      if (saved !== null) return JSON.parse(saved);
    } catch (e) {}
    return settings?.showRomaji !== false;
  });

  useEffect(() => {
    if (settings?.showRomaji !== undefined) {
      setLocalShowRomaji(settings.showRomaji);
    }
  }, [settings?.showRomaji]);

  useEffect(() => {
    const handleRemoteSettingUpdate = (e) => {
      if (e?.detail?.key === 'showRomaji') {
        setLocalShowRomaji(e.detail.value);
      }
    };
    window.addEventListener('hirakanjee_setting_updated', handleRemoteSettingUpdate);
    return () => window.removeEventListener('hirakanjee_setting_updated', handleRemoteSettingUpdate);
  }, []);

  const toggleRomaji = () => {
    const nextVal = !localShowRomaji;
    setLocalShowRomaji(nextVal);
    try {
      localStorage.setItem('hirakanjee_showRomaji', JSON.stringify(nextVal));
    } catch (e) {}
    if (window.db?.saveSetting) {
      window.db.saveSetting('showRomaji', nextVal).catch(() => {});
    }
    window.dispatchEvent(
      new CustomEvent('hirakanjee_setting_updated', {
        detail: { key: 'showRomaji', value: nextVal },
      })
    );
  };

  const shouldShowRomaji = localShowRomaji && !isListeningOrBuilderLesson;

  // Database progress
  const [dbProgress, setDbProgress] = useState({});

  // Kanji Character Mastery stats map
  const [kanjiMasteryMap, setKanjiMasteryMap] = useState({});

  // Practice session questions & state
  const [activeQuizQuestions, setActiveQuizQuestions] = useState([]);
  const [quizMode, setQuizMode] = useState('learning'); // 'learning' | 'practice' | 'skip' | 'chain'
  const [activeChainId, setActiveChainId] = useState(null);
  const [activeChainTitle, setActiveChainTitle] = useState('');
  const [isPracticing, setIsPracticing] = useState(false);

  // Kanji Checklist UI states
  const [kanjiSearchQuery, setKanjiSearchQuery] = useState('');
  const [kanjiCategoryFilter, setKanjiCategoryFilter] = useState('All');
  const [kanjiStatusFilter, setKanjiStatusFilter] = useState('all');

  // Listening Lab UI states
  const [selectedListeningTrackId, setSelectedListeningTrackId] = useState('track-1');

  // Normalize sections across both schema formats
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
      currentLesson.tables.forEach((t) => {
        sections.push({
          title: t.title,
          content: '',
          table: {
            headers: t.headers,
            rows: t.rows,
          },
          examples: [],
        });
      });
    }

    if (currentLesson?.examples && currentLesson.examples.length > 0) {
      sections.push({
        title: 'Key Examples',
        content: '',
        table: null,
        examples: currentLesson.examples.map((ex) => ({
          jp: ex.jp || ex.japanese,
          romaji: ex.romaji,
          en: ex.en,
        })),
      });
    }

    return sections;
  }, [currentLesson]);

  // Fetch Kanji Character Mastery from SQLite or LocalStorage
  const fetchKanjiStats = useCallback(async () => {
    try {
      if (window.db?.getScriptMastery) {
        const dbData = await window.db.getScriptMastery('kanji');
        if (dbData && typeof dbData === 'object') {
          setKanjiMasteryMap(dbData);
          try {
            localStorage.setItem('hirakanjee_kanji_mastery', JSON.stringify(dbData));
          } catch (e) {}
          return;
        }
      }
    } catch (e) {
      console.warn('Error fetching kanji stats from db:', e);
    }

    try {
      const local = JSON.parse(localStorage.getItem('hirakanjee_kanji_mastery') || '{}');
      setKanjiMasteryMap(local);
    } catch (e) {}
  }, []);

  // Record individual Kanji Character Mastery
  const recordKanjiReview = useCallback(async (char, isCorrect) => {
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
    } catch (e) {}
  }, [fetchKanjiStats]);

  // Fetch SQLite progress on mount
  useEffect(() => {
    if (window.db?.getLessonProgress) {
      window.db
        .getLessonProgress()
        .then((prog) => {
          if (prog) setDbProgress(prog);
        })
        .catch(() => {});
    }
    if (isKanjiMasteryLesson) {
      fetchKanjiStats();
    }

    const handleGlobalReset = () => {
      if (isKanjiMasteryLesson) fetchKanjiStats();
      if (window.db?.getLessonProgress) {
        window.db.getLessonProgress().then((prog) => setDbProgress(prog || {})).catch(() => {});
      } else {
        setDbProgress({});
      }
    };
    window.addEventListener('hirakanjee_global_reset', handleGlobalReset);
    return () => window.removeEventListener('hirakanjee_global_reset', handleGlobalReset);
  }, [currentLesson?.id, isKanjiMasteryLesson, fetchKanjiStats]);

  const scrollToPageTop = useCallback(() => {
    window.scrollTo(0, 0);
    const appMain = document.querySelector('.app-main');
    if (appMain) {
      appMain.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      appMain.scrollTop = 0;
    }
  }, []);

  // Start Skip Exam Session
  const handleStartSkipExam = useCallback(() => {
    let questionsToUse = [];
    if (currentLesson?.quiz && currentLesson.quiz.length > 0) {
      questionsToUse = [...currentLesson.quiz].sort(() => Math.random() - 0.5).slice(0, 8);
    } else {
      questionsToUse = getLearningQuizForLesson(currentLesson, 8);
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('skip');
    setActiveChainId(null);
    setActiveChainTitle('');
    setIsPracticing(true);
    scrollToPageTop();
  }, [currentLesson, scrollToPageTop]);

  // Start Learning Quiz Session
  const handleStartLearning = useCallback(() => {
    let questionsToUse = [];
    if (currentLesson.id === 'kanji-n5-mastery') {
      questionsToUse = getRandomKanjiQuiz(10);
    } else if (currentLesson.id === 'listening-n5-mastery') {
      questionsToUse = getRandomListeningQuiz(10);
    } else {
      questionsToUse = getLearningQuizForLesson(currentLesson);
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('learning');
    setActiveChainId(null);
    setActiveChainTitle('');
    setIsPracticing(true);
    scrollToPageTop();
  }, [currentLesson, scrollToPageTop]);

  // Start Practice Session
  const handleStartPractice = useCallback(() => {
    let questionsToUse = [];
    if (currentLesson?.id === 'n5-level-exam') {
      questionsToUse = generateN5LevelExamQuestions(25);
    } else if (currentLesson?.id === 'n4-level-exam') {
      questionsToUse = generateN4LevelExamQuestions(25);
    } else if (currentLesson?.id === 'n3-level-exam') {
      questionsToUse = generateN3LevelExamQuestions(25);
    } else if (currentLesson.id === 'kanji-n5-mastery') {
      questionsToUse = getRandomKanjiQuiz(10);
    } else if (currentLesson.id === 'listening-n5-mastery') {
      questionsToUse = getRandomListeningQuiz(10);
    } else {
      questionsToUse = currentLesson?.quiz || [];
    }
    setActiveQuizQuestions(questionsToUse);
    setQuizMode('practice');
    setActiveChainId(null);
    setActiveChainTitle('');
    setIsPracticing(true);
    scrollToPageTop();
  }, [currentLesson, scrollToPageTop]);

  // Start Quiz Chain Session
  const handleStartChain = useCallback((chain) => {
    const allQuiz = currentLesson?.quiz || [];
    let chainQuestions = [];
    if (chain.questionIndices && chain.questionIndices.length > 0) {
      chainQuestions = chain.questionIndices
        .map((idx) => allQuiz[idx])
        .filter(Boolean);
    }
    if (chainQuestions.length === 0) {
      chainQuestions = allQuiz.slice(0, 3);
    }
    setActiveQuizQuestions(chainQuestions);
    setQuizMode('chain');
    setActiveChainId(chain.id);
    setActiveChainTitle(chain.title);
    setIsPracticing(true);
    scrollToPageTop();
  }, [currentLesson, scrollToPageTop]);

  // Handle quiz/chain completion callback from QuizSession
  const handleQuizComplete = useCallback(({ totalScore, quizMode, chainId }) => {
    if (quizMode === 'skip') {
      if (totalScore >= 80) {
        markLessonSkipped(currentLesson.id, totalScore);
      }
    } else if (currentLesson?.isExam) {
      if (totalScore >= 80) {
        markLevelExamPassed(levelCode, totalScore);
      }
    } else if (quizMode === 'chain' && chainId) {
      recordChainCompletion(currentLesson.id, chainId, totalScore);
    } else {
      recordQuizCompletion(currentLesson.id, quizMode, totalScore, isUpperLevel);
    }

    if (window.db?.saveLessonProgress) {
      window.db
        .saveLessonProgress(currentLesson.id, true, totalScore)
        .then((updated) => {
          if (updated) setDbProgress(updated);
        })
        .catch((err) => console.warn('Failed to save lesson progress:', err));
    }
  }, [currentLesson?.id, currentLesson?.isExam, levelCode, isUpperLevel]);

  // Reset when lessonId or modeParam changes
  useEffect(() => {
    scrollToPageTop();
    if (modeParam === 'skip') {
      handleStartSkipExam();
      return;
    }

    setQuizMode(isUpperLevel ? 'practice' : 'learning');
    setIsPracticing(false);
    setActiveQuizQuestions([]);
    setActiveChainId(null);
    setActiveChainTitle('');
  }, [lessonId, modeParam, isUpperLevel, scrollToPageTop, handleStartSkipExam]);

  // Distinct categories for Kanji Checklist
  const kanjiCategories = useMemo(() => {
    if (!isKanjiMasteryLesson) return ['All'];
    const set = new Set();
    kanjiN5Data.forEach((k) => {
      if (k.category) set.add(k.category);
    });
    return ['All', ...Array.from(set)];
  }, [isKanjiMasteryLesson]);

  // Filtered Kanji list for the interactive checklist
  const filteredKanjiList = useMemo(() => {
    if (!isKanjiMasteryLesson) return [];
    return kanjiN5Data.filter((k) => {
      if (kanjiCategoryFilter !== 'All' && k.category !== kanjiCategoryFilter) {
        return false;
      }
      const stats = kanjiMasteryMap[k.char] || {};
      const totalReviews = stats.totalReviews || stats.total_reviews || 0;
      const correctReviews = stats.correctReviews || stats.correct_reviews || 0;
      const accuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0;
      const isLearned = correctReviews > 0 && accuracy >= 70;

      if (kanjiStatusFilter === 'learned' && !isLearned) return false;
      if (kanjiStatusFilter === 'in-progress' && (isLearned || totalReviews === 0)) return false;
      if (kanjiStatusFilter === 'unlearned' && totalReviews > 0) return false;

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
  }, [isKanjiMasteryLesson, kanjiCategoryFilter, kanjiStatusFilter, kanjiSearchQuery, kanjiMasteryMap]);

  // Overall Kanji Checklist Summary Metrics
  const kanjiSummaryStats = useMemo(() => {
    if (!isKanjiMasteryLesson) {
      return { totalKanji: 0, learnedCount: 0, totalReviewsSum: 0, totalCorrectSum: 0, totalWrongSum: 0, overallAcc: 0, learnedPercent: 0 };
    }
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
  }, [isKanjiMasteryLesson, kanjiMasteryMap]);

  // Chain progress map for the current lesson
  const chainProgress = useMemo(() => {
    return getLessonChainProgress(currentLesson?.id);
  }, [currentLesson?.id, progressionVer]);

  const lessonRecord = dbProgress[currentLesson.id] || null;

  // =========================================================
  // VIEW: ACTIVE QUIZ OR PRACTICE SESSION
  // =========================================================
  if (isPracticing) {
    return (
      <QuizSession
        currentLesson={currentLesson}
        questions={activeQuizQuestions}
        quizMode={quizMode}
        chainTitle={activeChainTitle}
        chainId={activeChainId}
        isUpperLevel={isUpperLevel}
        levelCode={levelCode}
        nextUnlockedLevel={nextUnlockedLevel}
        nextLesson={nextLesson}
        normalizedSections={normalizedSections}
        shouldShowRomaji={shouldShowRomaji}
        localShowRomaji={localShowRomaji}
        toggleRomaji={toggleRomaji}
        onExit={() => {
          setIsPracticing(false);
          scrollToPageTop();
        }}
        onComplete={handleQuizComplete}
        onRecordKanjiReview={recordKanjiReview}
        onLearnAgain={handleStartLearning}
        onStartPractice={handleStartPractice}
        onStartLearning={handleStartLearning}
        onStartSkipExam={handleStartSkipExam}
        onReviewGuide={() => {
          setIsPracticing(false);
          scrollToPageTop();
        }}
        onNextLesson={(next) => {
          const nextLevel = allN3Lessons.some((l) => l.id === next.id)
            ? 'n3'
            : allN4Lessons.some((l) => l.id === next.id)
              ? 'n4'
              : 'n5';
          navigate(`/learn/${nextLevel}/${next.id}`);
        }}
      />
    );
  }

  // =========================================================
  // VIEW: LOCKED LESSON SCREEN (GATED PROGRESSION)
  // =========================================================
  if (!isUnlocked && !isPracticing && modeParam !== 'skip') {
    return (
      <div className="n5-lesson-page">
        <LessonHeader
          currentLesson={currentLesson}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          currentSection={currentSection}
          sectionLessonNumber={sectionLessonNumber}
          shouldShowRomaji={shouldShowRomaji}
          onToggleRomaji={toggleRomaji}
        />

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
  // VIEW: DEFAULT LESSON GUIDE, LAB & CHECKLIST
  // =========================================================
  return (
    <div className="n5-lesson-page">
      <LessonHeader
        currentLesson={currentLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        currentSection={currentSection}
        sectionLessonNumber={sectionLessonNumber}
        shouldShowRomaji={shouldShowRomaji}
        onToggleRomaji={toggleRomaji}
      />

      <LessonHero
        currentLesson={currentLesson}
        isCompleted={isCompleted}
        isUnlocked={isUnlocked}
        quizChains={currentLesson?.quizChains || []}
        chainProgress={chainProgress}
        onStartPractice={handleStartPractice}
        onStartSkipExam={handleStartSkipExam}
        onStartLearning={handleStartLearning}
        onStartChain={handleStartChain}
        levelCode={levelCode}
        isUpperLevel={isUpperLevel}
        nextUnlockedLevel={nextUnlockedLevel}
        lessonRecord={lessonRecord}
        currentSection={currentSection}
      />

      {isKanjiMasteryLesson && (
        <KanjiMasteryChecklist
          kanjiSummaryStats={kanjiSummaryStats}
          kanjiSearchQuery={kanjiSearchQuery}
          setKanjiSearchQuery={setKanjiSearchQuery}
          kanjiCategoryFilter={kanjiCategoryFilter}
          setKanjiCategoryFilter={setKanjiCategoryFilter}
          kanjiCategories={kanjiCategories}
          kanjiStatusFilter={kanjiStatusFilter}
          setKanjiStatusFilter={setKanjiStatusFilter}
          filteredKanjiList={filteredKanjiList}
          kanjiMasteryMap={kanjiMasteryMap}
          onPronounce={speakJapanese}
        />
      )}

      {currentLesson.id === 'listening-n5-mastery' && (
        <ListeningLab
          tracks={listeningTracks}
          selectedTrackId={selectedListeningTrackId}
          onSelectTrack={setSelectedListeningTrackId}
          shouldShowRomaji={shouldShowRomaji}
          onPlayAudio={speakJapanese}
        />
      )}

      <LessonSections
        normalizedSections={normalizedSections}
        shouldShowRomaji={shouldShowRomaji}
        currentLesson={currentLesson}
        onPlayAudio={speakJapanese}
        onStartPractice={handleStartPractice}
      />
    </div>
  );
}
