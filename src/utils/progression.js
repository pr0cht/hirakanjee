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
  // 1. Grammar Guide (17)
  'te-form-kara',
  'te-form-mo-ii-desu',
  'nakereba-narimasen',
  'sou-desu-looks-like',
  'tara-conditional',
  'ba-conditional',
  'to-conditional',
  'nara-conditional',
  'te-agemasu-moraimasu-kuremasu',
  'sou-desu-hearsay',
  'you-desu-seems-like',
  'rashii-apparently',
  'tame-ni-purpose-reason',
  'you-ni-in-order-to',
  'passive-ukemi',
  'causative-shieki',
  'causative-passive',
  // 2. Verbs (5)
  'potential-form',
  'volitional-form',
  'imperative-prohibitive',
  'compound-verbs',
  'transitive-intransitive-pairs',
  // 3. Adjectives (1)
  'n4-adjectives-review',
  // 4. Kanji (4)
  'n4-kanji-quiz-100',
  'n4-kanji-mobile',
  'n4-kanji-34day-email',
  'n4-kanji-videos',
  // 5. Essential Practice & Nuance (14)
  'n4-practice-particles-wa-ga',
  'n4-practice-particles-ni-de',
  'n4-practice-particles-to-ya-ka',
  'n4-practice-giving-receiving-nuances',
  'n4-practice-conditionals-comparison',
  'n4-practice-passive-adversity',
  'n4-practice-causative-permission',
  'n4-practice-appearance-comparison',
  'n4-practice-compound-verbs-mastery',
  'n4-practice-transitive-intransitive-drills',
  'n4-practice-reading-short-passages',
  'n4-practice-polite-vs-casual-speech',
  'n4-practice-essential-connectors',
  'n4-practice-common-mistakes-remedy',
];

export const N5_LISTENING_IDS = ['listening-n5-mastery'];
export const N4_LISTENING_IDS = [
  'n4-listening-01-10',
  'n4-listening-11-20',
  'n4-listening-21-30',
  'n4-listening-31-40',
  'n4-listening-41-50',
];

const STORAGE_KEY = 'hirakanjee_progression_v2';

/**
 * Loads progression data from localStorage.
 */
export function getStoredProgression() {
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('progressionUpdated', { detail: data }));
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

/**
 * Checks if a JLPT level is unlocked.
 * N5 is always unlocked.
 * N4 requires passing the N5 Comprehensive Level Exam.
 * N3 requires passing the N4 Comprehensive Level Exam.
 */
export function isLevelUnlocked(level, progData = null) {
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

  const data = progData || getStoredProgression();

  // If already completed or skipped, definitely unlocked
  if (isLessonCompleted(lessonId, data)) return true;

  // Determine which level prerequisite chain applies
  const isN4 = level === 'N4' || N4_PREREQUISITE_IDS.includes(lessonId);

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
export function recordQuizCompletion(lessonId, quizMode, score = 100, isN4 = false) {
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

  // For N5 lessons: require both learning and practice (unless it's kanji/listening which only has practice)
  const isSingleQuizLesson =
    isN4 ||
    lessonId === 'kanji-n5-mastery' ||
    lessonId === 'listening-n5-mastery' ||
    lessonId.startsWith('n4-');

  if (isSingleQuizLesson) {
    current.completed = Boolean(current.practiceCompleted || current.learningCompleted);
  } else {
    current.completed = Boolean(current.learningCompleted && current.practiceCompleted);
  }

  data.lessons[lessonId] = current;
  saveProgression(data);

  // Sync to window.db SQLite if available
  if (window.db?.saveLessonProgress && current.completed) {
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

  if (window.db?.saveLessonProgress) {
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  } catch (e) {
    console.warn('Failed to reset progression storage:', e);
  }
  window.dispatchEvent(new CustomEvent('progressionUpdated', { detail: initial }));
  return initial;
}

