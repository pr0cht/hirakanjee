// JLPT N3 Master Curriculum Index
import { lesson as g1 } from './grammar/n3-grammar-time-opportunity.lesson.js';
import { lesson as g2 } from './grammar/n3-grammar-cause-consequence.lesson.js';
import { lesson as g3 } from './grammar/n3-grammar-substitution-contrast.lesson.js';
import { lesson as g4 } from './grammar/n3-grammar-tendencies-impressions.lesson.js';
import { lesson as g5 } from './grammar/n3-grammar-limitation-emphasis.lesson.js';
import { lesson as g6 } from './grammar/n3-grammar-nominalization-rules.lesson.js';
import { lesson as g7 } from './grammar/n3-grammar-degree-extent.lesson.js';
import { lesson as g8 } from './grammar/n3-grammar-topic-reference.lesson.js';
import { lesson as g9 } from './grammar/n3-grammar-wake-family.lesson.js';
import { lesson as g10 } from './grammar/n3-grammar-obligation-imperative.lesson.js';
import { lesson as g11 } from './grammar/n3-grammar-expectation-belief.lesson.js';
import { lesson as g12 } from './grammar/n3-grammar-passive-causative.lesson.js';
import { lesson as g13 } from './grammar/n3-grammar-moment-and-state.lesson.js';
import { lesson as g14 } from './grammar/n3-grammar-change-and-habit.lesson.js';
import { lesson as g15 } from './grammar/n3-grammar-scope-and-inclusion.lesson.js';
import { lesson as g16 } from './grammar/n3-grammar-concession-and-despite.lesson.js';
import { lesson as v1 } from './kanji-videos/n3-kanji-quiz-vol1-youtube.lesson.js';
import { lesson as v2 } from './kanji-videos/n3-kanji-quiz-vol2-youtube.lesson.js';
import { lesson as v3 } from './kanji-videos/n3-kanji-quiz-vol3-youtube.lesson.js';
import { lesson as v4 } from './kanji-videos/n3-kanji-quiz-vol4-youtube.lesson.js';
import { lesson as v5 } from './kanji-videos/n3-kanji-150-speed-challenge-youtube.lesson.js';
import { lesson as d1 } from './drills/n3-grammar-drills-set-a.lesson.js';
import { lesson as d2 } from './drills/n3-grammar-drills-set-b.lesson.js';
import { lesson as d3 } from './drills/n3-grammar-drills-set-c.lesson.js';
import { lesson as d4 } from './drills/n3-grammar-drills-set-d.lesson.js';
import { lesson as strategy1 } from './strategy/n3-study-plan-timeline.lesson.js';
import { n3LevelExamLesson, generateN3LevelExamQuestions } from './n3LevelExam.js';

export const n3StudyComponents = {
  title: 'Core Study Components (What to Study for JLPT N3)',
  description: 'JLPT N3 bridges foundational Japanese into natural intermediate fluency. It requires mastering nuanced grammar forms, compound kanji readings, timed video drills, and faster contextual reading comprehension.',
  checklist: [
    {
      id: 'n3-grammar-nuances',
      title: '1. Intermediate Grammar & Nuances',
      badge: '40+ Core Patterns',
      desc: 'Master the core N3 grammar points: time & opportunity (~うちに, ついでに), the わけ family, cause & consequence (おかげで vs せいで), and complex passive/causative.',
      actionLabel: '16 Grammar Lessons',
    },
    {
      id: 'n3-kanji-videos',
      title: '2. YouTube Kanji Quizzes & Drills',
      badge: '5 Video Modules • 100 Quizzes',
      desc: 'Practice with curated YouTube video resources featuring sentence readings, compound Jukugo drills, homophone identification, and a 150-kanji rapid review marathon.',
      actionLabel: '5 Video Drills',
    },
    {
      id: 'n3-skill-drills',
      title: '3. Skill Building Grammar Quizzes',
      badge: '120 Question Series',
      desc: 'Test your grasp with targeted exam-style drill banks covering connectors, contrastive sequences, modal evidence, and business keigo speech.',
      actionLabel: '4 Drill Sets',
    },
    {
      id: 'n3-study-plan',
      title: '4. 9–12 Month Study Plan & Strategy',
      badge: 'Official Roadmap',
      desc: 'Follow a proven 9-12 month study plan timeline from N4 to N3, review recommended textbooks, and learn section-by-section time management for exam day.',
      actionLabel: 'Study Blueprint',
    },
  ],
};

export const n3GrammarLessons = [
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
];

export const n3KanjiVideoLessons = [
  v1,
  v2,
  v3,
  v4,
  v5,
];

export const n3DrillLessons = [
  d1,
  d2,
  d3,
  d4,
];

export const n3StrategyLessons = [
  strategy1,
];

export const allN3Lessons = [
  ...n3GrammarLessons,
  ...n3KanjiVideoLessons,
  ...n3DrillLessons,
  ...n3StrategyLessons,
  n3LevelExamLesson,
];

export const n3Curriculum = [
  {
    id: 'n3-grammar',
    number: 1,
    title: 'Essential Grammar Guide (JLPT N3)',
    subtitle: '16 comprehensive lessons covering core essential JLPT N3 grammar points with formulas, examples, and quizzes.',
    description: 'Learn intermediate grammar patterns: temporal conditions (~うちに), logical deductions (the わけ family), attribution (おかげで vs せいで), and intermediate passive/causative.',
    lessons: n3GrammarLessons,
  },
  {
    id: 'n3-kanji-videos',
    number: 2,
    title: 'Kanji Practice & YouTube Video Drills (JLPT N3)',
    subtitle: '5 video-integrated modules featuring curated YouTube video quizzes, sentence readings, and flashcard drills.',
    description: 'Watch video quizzes with timed countdowns, practice handwriting in the canvas, and master ~650 N3 kanji and compound jukugo readings.',
    lessons: n3KanjiVideoLessons,
  },
  {
    id: 'n3-drills',
    number: 3,
    title: 'Grammar Quizzes & Skill Building (JLPT N3)',
    subtitle: '4 intensive drill modules drawn from the 120-question N3 grammar skill building series.',
    description: 'Solidify your command over high-frequency sentence connectors, time sequences, hearsay evidence, and formal workplace keigo.',
    lessons: n3DrillLessons,
  },
  {
    id: 'n3-strategy',
    number: 4,
    title: 'Step-by-Step Study Plan & Exam Preparation (JLPT N3)',
    subtitle: 'Official 9–12 month preparation roadmap, textbook guide, and exam-day pacing strategies.',
    description: 'Understand the timeline from N4 to N3, access the downloadable study plan PDF, and master time allocation across vocabulary, reading, and listening.',
    lessons: n3StrategyLessons,
  },
];

export function getN3LessonById(lessonId) {
  if (lessonId === 'n3-level-exam') return n3LevelExamLesson;
  return allN3Lessons.find((l) => l.id === lessonId) || null;
}

export { n3LevelExamLesson, generateN3LevelExamQuestions };
export default n3Curriculum;
