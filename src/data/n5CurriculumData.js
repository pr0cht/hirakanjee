import { n5CoreLessons } from './n5CoreLessonsData.js';
import { n5AdjectivesLessons } from './n5AdjectivesLessonsData.js';
import { n5VerbsLessons } from './n5VerbsLessonsData.js';
import { n5ParticlesLessons } from './n5ParticlesLessonsData.js';
import { n5VocabularyLessons } from './n5VocabularyLessonsData.js';
import { kanjiN5MasteryLesson, getRandomKanjiQuiz } from './n5KanjiQuizBankData.js';
import { n5SpecialLessons } from './n5SpecialLessonsData.js';
import { listeningN5MasteryLesson, getRandomListeningQuiz, listeningTracks } from './n5ListeningData.js';

// Standardized list of all 43 JLPT N5 lessons in sequence across all 8 curriculum sections
export const allN5Lessons = [
  ...n5CoreLessons,
  ...n5AdjectivesLessons,
  ...n5VerbsLessons,
  ...n5ParticlesLessons,
  ...n5VocabularyLessons,
  kanjiN5MasteryLesson,
  ...n5SpecialLessons,
  listeningN5MasteryLesson,
];

// Organized by curriculum sections matching MLC Japanese (Meguro Language Center)
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
    subtitle: '802 Essential N5 core words, humble vs respectful family words, and seasons & weather.',
    description: 'Master core daily vocabulary from the MLC Japanese 802 words list, polite family distinctions (chichi/otousan, haha/okaasan), and seasonal weather expressions.',
    lessons: n5VocabularyLessons,
  },
  {
    id: 'kanji',
    number: 6,
    title: '6. Kanji for N5',
    subtitle: 'Master 86 core N5 Kanji with randomized reading quizzes and an interactive progress checklist.',
    description: 'Interactive checklist for every N5 Kanji indicating whether you have learned it (check mark) and individual right/wrong accuracy rates. Features randomized quizzes across MLC Parts 1–10.',
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
  n5CoreLessons,
  n5AdjectivesLessons,
  n5VerbsLessons,
  n5ParticlesLessons,
  n5VocabularyLessons,
  kanjiN5MasteryLesson,
  getRandomKanjiQuiz,
  n5SpecialLessons,
  listeningN5MasteryLesson,
  getRandomListeningQuiz,
  listeningTracks,
};
