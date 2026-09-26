// JLPT N5 Master Curriculum Index
import { lesson as c1 } from './core/01-basic-structure.lesson.js';
import { lesson as c2 } from './core/02-japanese-pronouns.lesson.js';
import { lesson as c3 } from './core/03-temporal-words.lesson.js';
import { lesson as c4 } from './core/04-directions-vocabulary.lesson.js';
import { lesson as c5 } from './core/05-numbers-1-100000.lesson.js';
import { lesson as c6 } from './core/06-telling-time.lesson.js';
import { lesson as c7 } from './core/07-calendar-dates.lesson.js';
import { lesson as c8 } from './core/08-question-words.lesson.js';
import { lesson as c9 } from './core/09-frequency-words.lesson.js';
import { lesson as c10 } from './core/10-demonstratives-kore-sore-are.lesson.js';
import { lesson as c11 } from './core/11-contrast-but-words.lesson.js';
import { lesson as c12 } from './core/12-choice-or-words.lesson.js';
import { lesson as v1 } from './verbs/01-verb-movement.lesson.js';
import { lesson as v2 } from './verbs/02-verb-arimasu-imasu.lesson.js';
import { lesson as v3 } from './verbs/03-verb-40-masu.lesson.js';
import { lesson as v4 } from './verbs/04-verb-frequency.lesson.js';
import { lesson as v5 } from './verbs/05-verb-give-receive.lesson.js';
import { lesson as v6 } from './verbs/06-verb-tai-form.lesson.js';
import { lesson as v7 } from './verbs/07-verb-mashou.lesson.js';
import { lesson as v8 } from './verbs/08-verb-te-form.lesson.js';
import { lesson as v9 } from './verbs/09-verb-plain-forms.lesson.js';
import { lesson as v10 } from './verbs/10-verb-noun-modification.lesson.js';
import { lesson as v11 } from './verbs/11-verb-shitte-wakarimasu.lesson.js';
import { lesson as a1 } from './adjectives/01-adj-list.lesson.js';
import { lesson as a2 } from './adjectives/02-adj-degree-words.lesson.js';
import { lesson as a3 } from './adjectives/03-adj-levels-antonyms.lesson.js';
import { lesson as a4 } from './adjectives/04-adj-conjugations.lesson.js';
import { lesson as p1 } from './particles/01-part-wa-ga.lesson.js';
import { lesson as p2 } from './particles/02-part-essential-15.lesson.js';
import { lesson as p3 } from './particles/03-part-de-vs-ni.lesson.js';
import { lesson as p4 } from './particles/04-part-ni-vs-to-aimasu.lesson.js';
import { lesson as p5 } from './particles/05-part-made-vs-made-ni.lesson.js';
import { lesson as voc1 } from './vocabulary/01-vocab-802-core.lesson.js';
import { lesson as voc2 } from './vocabulary/02-vocab-family.lesson.js';
import { lesson as voc3 } from './vocabulary/03-vocab-seasons-weather.lesson.js';
import { lesson as s1 } from './special/01-special-fractions.lesson.js';
import { lesson as s2 } from './special/02-special-quiz-symbols.lesson.js';
import { lesson as s3 } from './special/03-special-sou-omoimasu.lesson.js';
import { lesson as s4 } from './special/04-special-honorifics.lesson.js';
import { lesson as s5 } from './special/05-special-compliments.lesson.js';
import { lesson as s6 } from './special/06-special-sorry-late.lesson.js';
import { kanjiQuizBank } from './kanji/kanjiQuizBank.js';
import { kanjiN5MasteryLesson, getRandomKanjiQuiz } from './kanji/kanjiMasteryLesson.js';
import { listeningN5MasteryLesson, getRandomListeningQuiz, listeningTracks } from './listening/listeningData.js';
import { n5LevelExamLesson, generateN5LevelExamQuestions } from './n5LevelExam.js';

export const n5CoreLessons = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
];

export const n5VerbsLessons = [
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
];

export const n5AdjectivesLessons = [
  a1,
  a2,
  a3,
  a4,
];

export const n5ParticlesLessons = [
  p1,
  p2,
  p3,
  p4,
  p5,
];

export const n5VocabularyLessons = [
  voc1,
  voc2,
  voc3,
];

export const n5SpecialLessons = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
];

export const allN5Lessons = [
  ...n5CoreLessons,
  ...n5AdjectivesLessons,
  ...n5VerbsLessons,
  ...n5ParticlesLessons,
  ...n5VocabularyLessons,
  kanjiN5MasteryLesson,
  ...n5SpecialLessons,
  listeningN5MasteryLesson,
  n5LevelExamLesson,
];

export const n5Curriculum = [
  {
    id: 'core',
    number: 1,
    title: '1. Core Requirements',
    subtitle: '12 Essential JLPT N5 grammar rules, structures, and vocabulary.',
    description: 'Learn foundational topic-comment structures (~は~です), pronouns, time/calendar dates, directions, counters (1-100,000), question words, frequency, demonstratives (ko-so-a-do), and basic conjunctions.',
    lessons: n5CoreLessons,
  },
  {
    id: 'adjectives',
    number: 2,
    title: '2. Adjectives',
    subtitle: 'Learn essential i-adjectives and na-adjectives, degree words, antonyms, and conjugations.',
    description: 'Master 104+ i-adjectives and na-adjectives, key exceptions like きれい and いい, degree modifiers (とても, すこし, あまり, ぜんぜん), high-frequency antonym pairs, and connective/adverbial forms (...ku, ...kute, ...ni, ...de).',
    lessons: n5AdjectivesLessons,
  },
  {
    id: 'verbs',
    number: 3,
    title: '3. Verbs',
    subtitle: 'Essential movement, existence, 40 masu verbs, te-form, plain forms, and clause structures.',
    description: 'Master movement with ni/e/de, inanimate vs animate existence (arimasu/imasu), 40 essential masu verbs across 3 groups, frequency adverbs, giving/receiving (agemasu/moraimasu/kuremasu), desire (~tai), proposals (~mashou), the core te-form, plain forms, relative clauses, and shitte imasu vs wakarimasu.',
    lessons: n5VerbsLessons,
  },
  {
    id: 'particles',
    number: 4,
    title: '4. Particles',
    subtitle: 'Key particles (wa, ga, o, ni, de) explained with usage rules and interactive drills.',
    description: 'Understand nuances like "Tokyo ni ikimasu" vs "Tokyo de aimasu", は vs が topic/subject markers, tomodachi to vs ni aimasu, and time deadlines (made vs made ni).',
    lessons: n5ParticlesLessons,
  },
  {
    id: 'vocabulary',
    number: 5,
    title: '5. JLPT N5 Vocabulary',
    subtitle: 'Core N5 vocabulary, humble vs respectful family words, and seasons & weather.',
    description: 'Master core daily vocabulary from the JLPT N5 802-word core list, polite family distinctions (chichi/otousan, haha/okaasan), and seasonal weather expressions.',
    lessons: n5VocabularyLessons,
  },
  {
    id: 'kanji',
    number: 6,
    title: '6. Kanji for N5',
    subtitle: 'Master 86 core N5 Kanji with randomized reading quizzes and an interactive progress checklist.',
    description: 'Interactive checklist for every N5 Kanji with learned/in-progress/unlearned tracking and individual accuracy rates. Features randomized reading quizzes across all 10 kanji quiz banks.',
    lessons: [kanjiN5MasteryLesson],
  },
  {
    id: 'special',
    number: 7,
    title: '7. N5 Special Practice Topics',
    subtitle: 'Quick guides to Japanese math terms, fractions, honorifics, and adjective forms.',
    description: 'Master everyday Japanese numerical fractions (hambun, 1/3, 2/3, 3/5), quiz symbols (〇 Maru, △ Sankaku, ✕ Batsu), expressing opinions (そう思います), honorifics & friend words (san, chan, kun, tomodachi), compliments (ii ne, sugoi, jouzu), and delay apologies (おそくなってすみません).',
    lessons: n5SpecialLessons,
  },
  {
    id: 'listening',
    number: 8,
    title: '8. Listening Practice',
    subtitle: 'Audio resources for N5 conversations and pronunciation with real JLPT-style listening quizzes.',
    description: 'Comprehensive listening comprehension under a unified mastery block. Features authentic dialogue playback, question word focus, task comprehension, and deep practice with the 4 core Te-form listening patterns (~te kudasai, ~te imasu, ~te mo ii desu ka, ~te, ~te).',
    lessons: [listeningN5MasteryLesson],
  },
];

export function getLessonById(lessonId) {
  return allN5Lessons.find((l) => l.id === lessonId) || null;
}

export {
  kanjiQuizBank,
  kanjiN5MasteryLesson,
  getRandomKanjiQuiz,
  listeningN5MasteryLesson,
  getRandomListeningQuiz,
  listeningTracks,
  n5LevelExamLesson,
  generateN5LevelExamQuestions,
};

export default n5Curriculum;
