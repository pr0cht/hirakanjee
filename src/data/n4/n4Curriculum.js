// JLPT N4 Master Curriculum Index
import { lesson as g1 } from './grammar/01-te-agemasu.lesson.js';
import { lesson as g2 } from './grammar/02-n-desu.lesson.js';
import { lesson as g3 } from './grammar/03-node-nde.lesson.js';
import { lesson as g4 } from './grammar/04-noni.lesson.js';
import { lesson as g5 } from './grammar/05-mou-mada.lesson.js';
import { lesson as g6 } from './grammar/06-have-to.lesson.js';
import { lesson as g7 } from './grammar/07-hazu.lesson.js';
import { lesson as g8 } from './grammar/08-appearance-forms.lesson.js';
import { lesson as g9 } from './grammar/09-purpose-forms.lesson.js';
import { lesson as g10 } from './grammar/10-tara.lesson.js';
import { lesson as g11 } from './grammar/11-ba.lesson.js';
import { lesson as g12 } from './grammar/12-to.lesson.js';
import { lesson as g13 } from './grammar/13-nara.lesson.js';
import { lesson as g14 } from './grammar/14-passive.lesson.js';
import { lesson as g15 } from './grammar/15-causative.lesson.js';
import { lesson as g16 } from './grammar/16-keigo.lesson.js';
import { lesson as g17 } from './grammar/17-koso.lesson.js';
import { lesson as v1 } from './verbs/01-potential-form.lesson.js';
import { lesson as v2 } from './verbs/02-volitional-form.lesson.js';
import { lesson as v3 } from './verbs/03-verb-plus-verb.lesson.js';
import { lesson as v4 } from './verbs/04-transitive-intransitive.lesson.js';
import { lesson as v5 } from './verbs/05-verbs-346-plain-forms.lesson.js';
import { lesson as adj1 } from './adjectives/01-adjectives-n4-120.lesson.js';
import { lesson as k1 } from './kanji/01-n4-kanji-quiz-100.lesson.js';
import { lesson as k2 } from './kanji/02-n4-kanji-quiz-150-mobile.lesson.js';
import { lesson as k3 } from './kanji/03-n4-kanji-quiz-34-days-email.lesson.js';
import { lesson as k4 } from './kanji/04-n4-kanji-videos-flashcards-youtube.lesson.js';
import { lesson as l1 } from './listening/01-n4-listening-01-10.lesson.js';
import { lesson as l2 } from './listening/02-n4-listening-11-20.lesson.js';
import { lesson as l3 } from './listening/03-n4-listening-21-30.lesson.js';
import { lesson as l4 } from './listening/04-n4-listening-31-40.lesson.js';
import { lesson as l5 } from './listening/05-n4-listening-41-50.lesson.js';
import { lesson as p1 } from './practice/01-indefinite-pronouns.lesson.js';
import { lesson as p2 } from './practice/02-node-cause.lesson.js';
import { lesson as p3 } from './practice/03-koto-ga-dekimasu.lesson.js';
import { lesson as p4 } from './practice/04-volitional-applications.lesson.js';
import { lesson as p5 } from './practice/05-dake-shika-mo.lesson.js';
import { lesson as p6 } from './practice/06-noni-contrast.lesson.js';
import { lesson as p7 } from './practice/07-mae-ni-sequence.lesson.js';
import { lesson as p8 } from './practice/08-adjective-connective.lesson.js';
import { lesson as p9 } from './practice/09-modifying-noun.lesson.js';
import { lesson as p10 } from './practice/10-ni-shimasu-decisions.lesson.js';
import { lesson as p11 } from './practice/11-ka-dou-ka-uncertainty.lesson.js';
import { lesson as p12 } from './practice/12-to-omoimasu-opinions.lesson.js';
import { lesson as p13 } from './practice/13-tara-when-sequence.lesson.js';
import { lesson as p14 } from './practice/14-tara-if-conditional.lesson.js';

export const n4StudyComponents = {
  "title": "Core Study Components (What to Study for JLPT N4)",
  "description": "JLPT N4 requires stronger grammar control, more vocabulary and kanji, and steady listening practice. Use the sections below as your step-by-step study checklist.",
  "checklist": [
    {
      "id": "grammar-control",
      "title": "1. Grammar Control & Nuance",
      "badge": "Core Priority",
      "desc": "Master 16 foundational N4 grammar patterns: conditionals (~たら, ~ば, ~と, ~なら), giving/receiving (~てあげる/~てもらう/~てくれる), passive, causative, explanations (~んです), and keigo.",
      "actionLabel": "16 Lessons Below"
    },
    {
      "id": "kanji-vocab",
      "title": "2. Kanji & Vocabulary Repertoire",
      "badge": "~300 Kanji • ~1,500 Words",
      "desc": "Expand from N5 basics to 300 essential Kanji with compound readings (Jukugo) and 1,500 vocabulary words for daily routines, workplaces, transportation, and health.",
      "actionLabel": "Study List"
    },
    {
      "id": "conversational-listening",
      "title": "3. Conversational Listening",
      "badge": "Audio Dialogues",
      "desc": "Train your ears to follow natural-cadence Japanese dialogues: instructions, requests, task completions, and casual spoken contractions (e.g. ～ちゃう, ～とく).",
      "actionLabel": "Listening Practice"
    },
    {
      "id": "reading-comprehension",
      "title": "4. Reading & Practical Text",
      "badge": "Short Passages",
      "desc": "Read everyday notices, bulletins, schedules, simple emails, and short opinion passages with confidence in grammatical connectors and time relationships.",
      "actionLabel": "Reading Drills"
    }
  ]
};

export const n4GrammarLessons = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
];

export const n4VerbLessons = [
  v1,
  v2,
  v3,
  v4,
  v5,
];

export const n4AdjectiveLessons = [
  adj1,
];

export const n4KanjiLessons = [
  k1,
  k2,
  k3,
  k4,
];

export const n4ListeningLessons = [
  l1,
  l2,
  l3,
  l4,
  l5,
];

export const n4PracticeLessons = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
];

export const allN4Lessons = [
  ...n4GrammarLessons,
  ...n4VerbLessons,
  ...n4AdjectiveLessons,
  ...n4KanjiLessons,
  ...n4ListeningLessons,
  ...n4PracticeLessons,
];

export const n4Curriculum = [
  {
    id: 'n4-grammar',
    number: 1,
    title: 'Grammar Guide (JLPT N4)',
    subtitle: '17 essential JLPT N4 grammar patterns with clear explanations and interactive practice.',
    description: 'Learn the most important JLPT N4 grammar patterns with simple explanations and targeted practice links. Focus on conditionals, giving/receiving, explanations, appearance, purpose, and passive/causative forms.',
    lessons: n4GrammarLessons,
  },
  {
    id: 'n4-verbs',
    number: 2,
    title: 'Verb Forms & Key Differences (JLPT N4)',
    subtitle: 'Potential, volitional, compound verbs, transitive vs intransitive pairs, and 346 verbs plain forms.',
    description: 'Review essential N4 verb forms such as potential and volitional, plus compound verbs and transitive vs intransitive pairs. These patterns appear often in reading, listening, and conversation.',
    lessons: n4VerbLessons,
  },
  {
    id: 'n4-adjectives',
    number: 3,
    title: 'Adjectives (JLPT N4)',
    subtitle: 'Over 120 essential i-adjectives and na-adjectives with kanji examples, conjugations, and translations.',
    description: 'Expand your descriptive power with N4-level i-adjectives and na-adjectives. Practice common adjective patterns and review kanji spellings used at this level.',
    lessons: n4AdjectiveLessons,
  },
  {
    id: 'n4-kanji',
    number: 4,
    title: 'Kanji for JLPT N4',
    subtitle: 'N4 kanji quizzes, mobile practice, 34-day daily email lessons, and YouTube flashcard videos.',
    description: 'Build kanji recognition and writing confidence with N4 kanji quizzes, flashcards, and email practice. Study in small sets and review frequently.',
    lessons: n4KanjiLessons,
  },
  {
    id: 'n4-listening',
    number: 5,
    title: 'Listening Practice (JLPT N4)',
    subtitle: '50 short natural-speed listening drills across 5 progressive modules.',
    description: 'Improve comprehension with short listening drills designed for the JLPT N4 level. Practice regularly to build speed, accuracy, and real-life understanding.',
    lessons: n4ListeningLessons,
  },
  {
    id: 'n4-practice',
    number: 6,
    title: 'Essential Practice Topics & Nuance Mastery (JLPT N4)',
    subtitle: '14 Core applied grammar drills, sentence connectors, and vital conversational nuances.',
    description: 'Strengthen high-frequency patterns, connect grammar points naturally, and master vital nuance distinctions. These targeted practice topics bridge foundational grammar into fluent conversational understanding.',
    lessons: n4PracticeLessons,
  },
];

export function getN4LessonById(lessonId) {
  // Support aliases for Quick Jump routes
  if (lessonId === 'tara') return allN4Lessons.find((l) => l.id === 'tara-conditional') || null;
  if (lessonId === 'passive') return allN4Lessons.find((l) => l.id === 'passive-ukemi') || null;
  if (lessonId === 'n4-listening-module-1') return allN4Lessons.find((l) => l.id === 'n4-listening-01-10') || null;
  return allN4Lessons.find((l) => l.id === lessonId) || null;
}

export default n4Curriculum;
