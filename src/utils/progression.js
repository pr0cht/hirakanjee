/**
 * Hirakanjee Progression & Mastery Engine
 * Manages unlock states, prerequisite sequences, quiz completions,
 * skip tests, level exams, and Kanji character gating.
 */

export const N5_PREREQUISITE_IDS = [
  // 1. Core Requirements (12)
  'basic-structure',
  'japanese-pronouns',
  'temporal-words',
  'directions-vocabulary',
  'numbers-1-100000',
  'telling-time',
  'calendar-dates',
  'question-words',
  'frequency-words',
  'demonstratives-kore-sore-are',
  'contrast-but-words',
  'choice-or-words',
  // 2. Adjectives (4)
  'adj-list',
  'adj-degree-words',
  'adj-levels-antonyms',
  'adj-conjugations',
  // 3. Verbs (11)
  'verb-movement',
  'verb-arimasu-imasu',
  'verb-40-masu',
  'verb-frequency',
  'verb-give-receive',
  'verb-tai-form',
  'verb-mashou',
  'verb-te-form',
  'verb-plain-forms',
  'verb-noun-modification',
  'verb-shitte-wakarimasu',
  // 4. Particles (5)
  'part-wa-ga',
  'part-essential-15',
  'part-de-vs-ni',
  'part-ni-vs-to-aimasu',
  'part-made-vs-made-ni',
  // 5. Vocabulary (3)
  'vocab-802-core',
  'vocab-family',
  'vocab-seasons-weather',
  // 6. Kanji (1)
  'kanji-n5-mastery',
  // 7. Special Topics (6)
  'special-fractions',
  'special-quiz-symbols',
  'special-sou-omoimasu',
  'special-honorifics',
  'special-compliments',
  'special-sorry-late',
];

export const N4_PREREQUISITE_IDS = [
  // Grammar (17)
  'te-agemasu-moraimasu-kuremasu', 'n-desu', 'node-nde', 'noni', 'mou-mada',
  'have-to-obligation', 'hazu', 'appearance-forms', 'purpose-forms',
  'tara-conditional', 'ba-conditional', 'to-conditional', 'nara-conditional',
  'passive-ukemi', 'causative-shieki', 'keigo-polite', 'koso-particle',
  // Verbs (5)
  'potential-form', 'volitional-form', 'verb-plus-verb',
  'transitive-intransitive', 'verbs-346-plain-forms',
  // Adjectives (1)
  'adjectives-n4-120',
  // Kanji (4)
  'n4-kanji-quiz-100', 'n4-kanji-quiz-150-mobile',
  'n4-kanji-quiz-34-days-email', 'n4-kanji-videos-flashcards-youtube',
  // Listening (5)
  'n4-listening-01-10', 'n4-listening-11-20', 'n4-listening-21-30',
  'n4-listening-31-40', 'n4-listening-41-50',
  // Practice (14)
  'n4-indefinite-pronouns', 'n4-node-cause', 'n4-koto-ga-dekimasu',
  'n4-volitional-applications', 'n4-dake-shika-mo', 'n4-noni-contrast',
  'n4-mae-ni-sequence', 'n4-adjective-connective', 'n4-modifying-noun',
  'n4-ni-shimasu-decisions', 'n4-ka-dou-ka-uncertainty',
  'n4-to-omoimasu-opinions', 'n4-tara-when-sequence', 'n4-tara-if-conditional',
];

export const N5_LISTENING_IDS = ['listening-n5-mastery'];
export const N4_LISTENING_IDS = [
  'n4-listening-01-10',
  'n4-listening-11-20',
  'n4-listening-21-30',
  'n4-listening-31-40',
  'n4-listening-41-50',
];

export const N3_PREREQUISITE_IDS = [
  // 1. Essential Grammar (16)
  'n3-grammar-time-opportunity',
  'n3-grammar-cause-consequence',
  'n3-grammar-substitution-contrast',
  'n3-grammar-tendencies-impressions',
  'n3-grammar-limitation-emphasis',
  'n3-grammar-nominalization-rules',
  'n3-grammar-degree-extent',
  'n3-grammar-topic-reference',
  'n3-grammar-wake-family',
  'n3-grammar-obligation-imperative',
  'n3-grammar-expectation-belief',
  'n3-grammar-passive-causative',
  'n3-grammar-moment-and-state',
  'n3-grammar-change-and-habit',
  'n3-grammar-scope-and-inclusion',
  'n3-grammar-concession-and-despite',
  // 2. Kanji & YouTube Video Drills (5)
  'n3-kanji-quiz-vol1-youtube',
  'n3-kanji-quiz-vol2-youtube',
  'n3-kanji-quiz-vol3-youtube',
  'n3-kanji-quiz-vol4-youtube',
  'n3-kanji-150-speed-challenge-youtube',
  // 3. Grammar Skill Building Series (4)
  'n3-grammar-drills-set-a',
  'n3-grammar-drills-set-b',
  'n3-grammar-drills-set-c',
  'n3-grammar-drills-set-d',
  // 4. Study Plan & Roadmap (1)
  'n3-study-plan-timeline',
];

const STORAGE_KEY = 'hirakanjee_progression_v2';

/**
 * Loads progression data from localStorage.
 */
export function getStoredProgression() {
  if (typeof localStorage === 'undefined') {
    return { lessons: {}, exams: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Failed to parse stored progression:', e);
  }
  return {
    lessons: {},
    exams: {},
  };
}

/**
 * Saves progression data to localStorage and fires a local event.
 */
export function saveProgression(data) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('progressionUpdated', { detail: data }));
    }
  } catch (e) {
    console.warn('Failed to persist progression:', e);
  }
}

/**
 * Merges SQLite db lesson progress with progression store.
 */
export function syncDbLessonProgress(dbProgressMap) {
  if (!dbProgressMap || typeof dbProgressMap !== 'object') return getStoredProgression();
  const current = getStoredProgression();
  let changed = false;

  Object.entries(dbProgressMap).forEach(([lessonId, prog]) => {
    if (prog?.completed) {
      if (!current.lessons[lessonId]) {
        current.lessons[lessonId] = {
          completed: true,
          learningCompleted: true,
          practiceCompleted: true,
          quizScore: prog.quizScore || 100,
        };
        changed = true;
      } else if (!current.lessons[lessonId].completed) {
        current.lessons[lessonId].completed = true;
        current.lessons[lessonId].learningCompleted = true;
        current.lessons[lessonId].practiceCompleted = true;
        changed = true;
      }
    }
  });

  if (changed) {
    saveProgression(current);
  }
  return current;
}

/**
 * Checks if a specific lesson is completed (both quizzes done or skipped).
 */
export function isLessonCompleted(lessonId, progData = null) {
  const data = progData || getStoredProgression();
  const entry = data.lessons?.[lessonId];
  if (!entry) return false;
  return Boolean(entry.completed || entry.skipped);
}

/**
 * Checks if a lesson has completed its learning quiz.
 */
export function isLearningCompleted(lessonId, progData = null) {
  const data = progData || getStoredProgression();
  return Boolean(data.lessons?.[lessonId]?.learningCompleted || data.lessons?.[lessonId]?.skipped);
}

/**
 * Checks if a lesson has completed its practice quiz.
 */
export function isPracticeCompleted(lessonId, progData = null) {
  const data = progData || getStoredProgression();
  return Boolean(data.lessons?.[lessonId]?.practiceCompleted || data.lessons?.[lessonId]?.skipped);
}

function isTestingUnlockAllActive() {
  if (typeof localStorage === 'undefined') return false;
  try {
    const val = localStorage.getItem('hirakanjee_unlockAllLessons');
    return val === 'true' || JSON.parse(val) === true;
  } catch (e) {
    return false;
  }
}

/**
 * Checks if a JLPT level is unlocked.
 * N5 is always unlocked.
 * N4 requires passing the N5 Comprehensive Level Exam.
 * N3 requires passing the N4 Comprehensive Level Exam.
 */
export function isLevelUnlocked(level, progData = null) {
  if (isTestingUnlockAllActive()) return true;
  if (level === 'N5') return true;
  const data = progData || getStoredProgression();
  if (level === 'N4') {
    return Boolean(data.exams?.['N5']?.passed);
  }
  if (level === 'N3') {
    return Boolean(data.exams?.['N4']?.passed);
  }
  if (level === 'N2') {
    return Boolean(data.exams?.['N3']?.passed);
  }
  if (level === 'N1') {
    return Boolean(data.exams?.['N2']?.passed);
  }
  return false;
}

/**
 * Checks if a lesson is unlocked.
 * 
 * Rules:
 * 1. Listening lessons are always unlocked (optional independent tracks).
 * 2. Exam lessons:
 *    - n5-level-exam: always unlocked (can be challenged anytime or taken at end).
 *    - n4-level-exam: unlocked when N4 is unlocked.
 * 3. First lesson of a level:
 *    - N5 Lesson 1 (basic-structure): unlocked by default!
 *    - N4 Lesson 1 (te-form-kara): unlocked if N4 level is unlocked.
 * 4. Subsequent lessons in order:
 *    - Unlocked if the immediately preceding lesson in the prerequisite chain is completed.
 *    - Also unlocked if this lesson itself was already skipped or completed.
 */
export function isLessonUnlocked(lessonId, level = 'N5', progData = null) {
  if (isTestingUnlockAllActive()) return true;

  // 1. Listening lessons are always unlocked by default
  if (N5_LISTENING_IDS.includes(lessonId)) return true;
  if (N4_LISTENING_IDS.includes(lessonId)) {
    return isLevelUnlocked('N4', progData);
  }

  // 2. Comprehensive Level Exams
  if (lessonId === 'n5-level-exam') return true; // Can challenge to test out or at end
  if (lessonId === 'n4-level-exam') {
    return isLevelUnlocked('N4', progData);
  }
  if (lessonId === 'n3-level-exam') {
    return isLevelUnlocked('N3', progData);
  }

  const data = progData || getStoredProgression();

  // If already completed or skipped, definitely unlocked
  if (isLessonCompleted(lessonId, data)) return true;

  // Determine which level prerequisite chain applies
  const isN3 = level === 'N3' || N3_PREREQUISITE_IDS.includes(lessonId) || lessonId.startsWith('n3-');
  const isN4 = level === 'N4' || N4_PREREQUISITE_IDS.includes(lessonId) || lessonId.startsWith('n4-');

  if (isN3) {
    if (!isLevelUnlocked('N3', data)) return false;
    const idx = N3_PREREQUISITE_IDS.indexOf(lessonId);
    if (idx <= 0) return true; // First N3 lesson unlocked once N3 is unlocked
    const prevId = N3_PREREQUISITE_IDS[idx - 1];
    return isLessonCompleted(prevId, data);
  }

  if (isN4) {
    if (!isLevelUnlocked('N4', data)) return false;
    const idx = N4_PREREQUISITE_IDS.indexOf(lessonId);
    if (idx <= 0) return true; // First N4 lesson unlocked once N4 is unlocked
    const prevId = N4_PREREQUISITE_IDS[idx - 1];
    return isLessonCompleted(prevId, data);
  }

  // N5 sequence
  const idx = N5_PREREQUISITE_IDS.indexOf(lessonId);
  if (idx <= 0) return true; // Lesson 1 (basic-structure) is unlocked by default!
  const prevId = N5_PREREQUISITE_IDS[idx - 1];
  return isLessonCompleted(prevId, data);
}

/**
 * Checks if Kanji characters of a given level ('N5' or 'N4') are unlocked.
 * N5 Kanji unlock when the N5 Kanji lesson ('kanji-n5-mastery') is unlocked.
 * N4 Kanji unlock when the N4 Kanji lesson ('n4-kanji-quiz-100') is unlocked.
 */
export function isKanjiUnlocked(kanjiLevel = 'N5', progData = null) {
  if (isTestingUnlockAllActive()) return true;

  const data = progData || getStoredProgression();
  if (kanjiLevel === 'N5') {
    return isLessonUnlocked('kanji-n5-mastery', 'N5', data);
  }
  if (kanjiLevel === 'N4') {
    return isLevelUnlocked('N4', data) && isLessonUnlocked('n4-kanji-quiz-100', 'N4', data);
  }
  return false;
}

/**
 * Records completion of either 'learning' or 'practice' quiz for a lesson.
 * Unlocks the next lesson in order once both are completed (or for practice-only lessons).
 */
export function recordQuizCompletion(lessonId, quizMode, score = 100, isUpperLevel = false) {
  const data = getStoredProgression();
  const current = data.lessons[lessonId] || {
    learningCompleted: false,
    practiceCompleted: false,
    completed: false,
    quizScore: 0,
  };

  if (quizMode === 'learning') {
    current.learningCompleted = true;
    current.learningScore = score;
  } else if (quizMode === 'practice') {
    current.practiceCompleted = true;
    current.practiceScore = score;
  }

  current.quizScore = Math.max(current.quizScore || 0, score);
  current.lastStudiedAt = new Date().toISOString();

  // A lesson is only unlocked to the next lesson once the Practice Quiz is completed!
  current.completed = Boolean(current.practiceCompleted);

  data.lessons[lessonId] = current;
  saveProgression(data);

  // Sync to window.db SQLite if available
  if (typeof window !== 'undefined' && window.db?.saveLessonProgress && current.completed) {
    window.db
      .saveLessonProgress(lessonId, true, current.quizScore)
      .catch((err) => console.warn('SQLite progress save error:', err));
  }

  return current;
}

/**
 * Marks a lesson as passed via Skip Exam (test-out).
 * Immediately unlocks this lesson and the next in line.
 */
export function markLessonSkipped(lessonId, score = 100) {
  const data = getStoredProgression();
  const entry = data.lessons[lessonId] || {};
  entry.skipped = true;
  entry.completed = true;
  entry.learningCompleted = true;
  entry.practiceCompleted = true;
  entry.quizScore = Math.max(entry.quizScore || 0, score);
  entry.skippedAt = new Date().toISOString();
  data.lessons[lessonId] = entry;
  saveProgression(data);

  if (typeof window !== 'undefined' && window.db?.saveLessonProgress) {
    window.db
      .saveLessonProgress(lessonId, true, entry.quizScore)
      .catch((err) => console.warn('SQLite progress save error:', err));
  }

  return entry;
}

/**
 * Marks a JLPT level certification exam as passed.
 * Unlocks the next JLPT level (e.g. N5 passed -> N4 unlocked).
 */
export function markLevelExamPassed(level, score = 100) {
  const data = getStoredProgression();
  if (!data.exams) data.exams = {};
  data.exams[level] = {
    passed: true,
    score,
    passedAt: new Date().toISOString(),
  };
  saveProgression(data);
  return data.exams[level];
}

/**
 * Resets all progression data back to initial default state:
 * - Empty lessons (all locked except Lesson 1 & listening)
 * - Empty exams (all levels locked except N5)
 * Persists to localStorage and fires 'progressionUpdated'.
 */
export function resetProgression() {
  const initial = {
    lessons: {},
    exams: {},
  };
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    } catch (e) {
      console.warn('Failed to reset progression storage:', e);
    }
  }
  if (typeof window !== 'undefined' && window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('progressionUpdated', { detail: initial }));
  }
  return initial;
}

/**
 * Records completion of an individual quiz chain within a lesson.
 * Updates lesson completion and mastery score accordingly.
 */
export function recordChainCompletion(lessonId, chainId, score, passMark = 70) {
  const data = getStoredProgression();
  if (!data.lessons) data.lessons = {};
  if (!data.lessons[lessonId]) data.lessons[lessonId] = {};
  if (!data.lessons[lessonId].chains) data.lessons[lessonId].chains = {};
  const prev = data.lessons[lessonId].chains[chainId] || { attempts: 0 };
  data.lessons[lessonId].chains[chainId] = {
    completed: score >= passMark,
    score,
    attempts: (prev.attempts || 0) + 1,
    completedAt: new Date().toISOString()
  };
  const chains = data.lessons[lessonId].chains;
  const completedScores = Object.values(chains).filter(c => c.completed).map(c => c.score);
  data.lessons[lessonId].masteryScore = completedScores.length
    ? Math.round(completedScores.reduce((a, b) => a + b, 0) / completedScores.length) : null;
  data.lessons[lessonId].firstChainCompleted = Object.values(chains).some(c => c.completed);
  data.lessons[lessonId].completed = Object.values(chains).length > 0
    && Object.values(chains).every(c => c.completed);
  saveProgression(data);
  return data;
}

/**
 * Retrieves the quiz chains progress dictionary for a given lesson.
 */
export function getLessonChainProgress(lessonId, progData) {
  const data = progData || getStoredProgression();
  return data.lessons?.[lessonId]?.chains || {};
}


