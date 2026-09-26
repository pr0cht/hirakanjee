// JLPT N5 Comprehensive Level Exam (初級総合修了試験)
// Capstone certification exam covering all N5 grammar, verbs, adjectives, particles,
// vocabulary, kanji readings, and listening comprehension.
// Passing this exam (80%+) unlocks JLPT N4.

import { kanjiQuizBank } from './kanji/kanjiQuizBank.js';
import { listeningQuizBank } from './listening/listeningData.js';
import { lesson1LearningBank } from './learningQuizEngine.js';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 20 High-yield curated exam questions covering all N5 grammar, particles, verbs, and adjectives
export const curatedN5ExamQuestions = [
  {
    id: 'n5-exam-01',
    categoryLabel: '📐 TOPIC & SENTENCE FORMULA',
    type: 'multiple-choice',
    prompt: "Which sentence correctly follows the standard Japanese Topic-Comment formula for 'Mr. Tanaka is a teacher'?",
    question: "Which sentence correctly follows the standard Japanese Topic-Comment formula for 'Mr. Tanaka is a teacher'?",
    options: [
      "たなかさん は せんせい です。",
      "たなかさん が せんせい です か。",
      "せんせい は たなかさん でした。",
      "たなかさん です せんせい は。"
    ],
    correctAnswer: 0,
    explanation: "Topic (たなかさん) + Topic Marker (は) + Description (せんせい) + Copula (です)."
  },
  {
    id: 'n5-exam-02',
    categoryLabel: '💡 POLITE TENSES OF DESU',
    type: 'multiple-choice',
    prompt: "How do you say 'Yesterday was Sunday' in polite Japanese?",
    question: "How do you say 'Yesterday was Sunday' in polite Japanese?",
    options: [
      "きのう は にちようび でした。",
      "きのう は にちようび です。",
      "きのう は にちようび じゃありません。",
      "きのう は にちようび ではありませんでした。"
    ],
    correctAnswer: 0,
    explanation: "Past affirmative of です is でした: きのう (yesterday) は にちようび でした."
  },
  {
    id: 'n5-exam-03',
    categoryLabel: '🎯 PARTICLE WA VS GA',
    type: 'multiple-choice',
    prompt: "Fill in the blank for the focal answer: 「だれ が せんせい です か？」「やまださん [ ? ] せんせい です。」",
    question: "Fill in the blank for the focal answer: 「だれ が せんせい です か？」「やまださん [ ? ] せんせい です。」",
    options: ["が", "は", "を", "に"],
    correctAnswer: 0,
    explanation: "When answering an interrogative question that used 'が', repeat 'が' to mark the focal identifier: やまださん が せんせい です."
  },
  {
    id: 'n5-exam-04',
    categoryLabel: '🎯 PARTICLES DE VS NI',
    type: 'multiple-choice',
    prompt: "Choose the correct particles: 「としょかん [ ? ] ほん を よみます。」and「きょうしつ [ ? ] せんせい が います。」",
    question: "Choose the correct particles: 「としょかん [ ? ] ほん を よみます。」and「きょうしつ [ ? ] せんせい が います。」",
    options: [
      "で / に",
      "に / で",
      "で / を",
      "へ / で"
    ],
    correctAnswer: 0,
    explanation: "Use で for location of action (reading in library). Use に for location of existence with います/あります."
  },
  {
    id: 'n5-exam-05',
    categoryLabel: '🎯 TIME DEADLINE: MADE VS MADE NI',
    type: 'multiple-choice',
    prompt: "Choose the particle that expresses a deadline ('Submit the report by 5 o'clock'):",
    question: "Choose the particle that expresses a deadline ('Submit the report by 5 o'clock'):",
    options: [
      "5時 まで に レポート を だしてください。",
      "5時 まで レポート を だしてください。",
      "5時 から レポート を だしてください。",
      "5時 に レポート を よみます。"
    ],
    correctAnswer: 0,
    explanation: "まで に indicates a deadline by which a single action must be completed."
  },
  {
    id: 'n5-exam-06',
    categoryLabel: '✨ ADJECTIVE CONJUGATION',
    type: 'multiple-choice',
    prompt: "What is the past negative form of the i-adjective 'さむい' (cold)?",
    question: "What is the past negative form of the i-adjective 'さむい' (cold)?",
    options: [
      "さむくなかった です",
      "さむくない でした",
      "さむい じゃありませんでした",
      "さむかったです"
    ],
    correctAnswer: 0,
    explanation: "For i-adjectives, drop the final い and add くなかった です (さむい -> さむくなかった です)."
  },
  {
    id: 'n5-exam-07',
    categoryLabel: '✨ NA-ADJECTIVES',
    type: 'multiple-choice',
    prompt: "How do you connect the na-adjective 'しずか' to the noun 'まち' (town)?",
    question: "How do you connect the na-adjective 'しずか' to the noun 'まち' (town)?",
    options: [
      "しずかな まち",
      "しずかい まち",
      "しずか の まち",
      "しずか に まち"
    ],
    correctAnswer: 0,
    explanation: "Na-adjectives require 'な' when modifying a following noun: しずかな まち (a quiet town)."
  },
  {
    id: 'n5-exam-08',
    categoryLabel: '⚡ EXISTENCE: ARIMASU VS IMASU',
    type: 'multiple-choice',
    prompt: "Which pair correctly matches inanimate vs animate existence?",
    question: "Which pair correctly matches inanimate vs animate existence?",
    options: [
      "つくえ の うえ に ほん が あります。 / にわ に いぬ が います。",
      "つくえ の うえ に ほん が います。 / にわ に いぬ が あります。",
      "へや に ねこ が あります。 / はこ に ペン が います。",
      "きょうしつ に がくせい が あります。 / えき に バス が います。"
    ],
    correctAnswer: 0,
    explanation: "あります is used for inanimate objects (books, pens), while います is used for living creatures (dogs, people)."
  },
  {
    id: 'n5-exam-09',
    categoryLabel: '⚡ TE-FORM RULES',
    type: 'multiple-choice',
    prompt: "What is the te-form of the Group 1 verb 'のみます' (to drink)?",
    question: "What is the te-form of the Group 1 verb 'のみます' (to drink)?",
    options: [
      "のんで",
      "のみて",
      "のって",
      "のいだ"
    ],
    correctAnswer: 0,
    explanation: "Verbs ending in み (み・に・び) change to んで in te-form (のみます -> のんで)."
  },
  {
    id: 'n5-exam-10',
    categoryLabel: '⚡ GIVING & RECEIVING',
    type: 'multiple-choice',
    prompt: "When someone gives a gift to YOU, which verb must be used?",
    question: "When someone gives a gift to YOU, which verb must be used?",
    options: [
      "くれます (kuremasu)",
      "あげます (agemasu)",
      "もらいます (moraimasu)",
      "わたします (watashimasu)"
    ],
    correctAnswer: 0,
    explanation: "くれます is exclusively used when someone gives something towards the speaker (or the speaker's in-group)."
  },
  {
    id: 'n5-exam-11',
    categoryLabel: '💬 CALENDAR & DATES',
    type: 'multiple-choice',
    prompt: "What is the special native reading for 'April 1st' in Japanese?",
    question: "What is the special native reading for 'April 1st' in Japanese?",
    options: [
      "しがつ ついたち",
      "よんがつ いちにち",
      "しがつ ふつか",
      "よんがつ ついたち"
    ],
    correctAnswer: 0,
    explanation: "April is しがつ, and the 1st day of the month is the irregular ついたち: しがつ ついたち."
  },
  {
    id: 'n5-exam-12',
    categoryLabel: '💬 QUESTION WORDS',
    type: 'multiple-choice',
    prompt: "Which question word means 'whose'?",
    question: "Which question word means 'whose'?",
    options: [
      "だれ の (dare no)",
      "どこ の (doko no)",
      "いつ の (itsu no)",
      "なん の (nan no)"
    ],
    correctAnswer: 0,
    explanation: "だれ (who) + の (possessive) = だれ の (whose)."
  },
  {
    id: 'n5-exam-13',
    categoryLabel: '⚡ PLAIN FORM MODIFICATION',
    type: 'multiple-choice',
    prompt: "How do you say 'the person who is reading a book'?",
    question: "How do you say 'the person who is reading a book'?",
    options: [
      "ほん を よんでいる ひと",
      "ほん を よみます ひと",
      "ほん を よんで ひと",
      "ほん を よみ の ひと"
    ],
    correctAnswer: 0,
    explanation: "Relative clauses modifying a noun must use the plain form: ほん を よんでいる (reading a book) + ひと (person)."
  },
  {
    id: 'n5-exam-14',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Construct the sentence: 'Please eat this apple.'",
    chips: ["この", "りんご", "を", "たべて", "ください", "のみます"],
    correctOrder: ["この", "りんご", "を", "たべて", "ください"],
    explanation: "この (this) + りんご (apple) + を (object) + たべて ください (please eat)."
  },
  {
    id: 'n5-exam-15',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Construct the sentence: 'I go to the university by train.'",
    chips: ["でんしゃ", "で", "だいがく", "へ", "いきます", "に"],
    correctOrder: ["でんしゃ", "で", "だいがく", "へ", "いきます"],
    explanation: "でんしゃ で (by train) + だいがく へ (towards university) + いきます (go)."
  }
];

export function generateN5LevelExamQuestions(count = 25) {
  const questions = [];

  // 1. Pick 14 core grammar & mechanics questions
  const shuffledCurated = shuffle(curatedN5ExamQuestions);
  questions.push(...shuffledCurated.slice(0, 14));

  // 2. Pick 5 Kanji questions from kanjiQuizBank
  const shuffledKanji = shuffle(kanjiQuizBank).slice(0, 5).map((kq) => ({
    ...kq,
    categoryLabel: `㊗️ KANJI READING (${kq.kanjiChar})`,
    explanation: kq.explanation || `「${kq.kanjiChar}」reading: ${kq.options[kq.correctAnswer]}`
  }));
  questions.push(...shuffledKanji);

  // 3. Pick 4 Listening audio questions from listeningQuizBank
  const shuffledListening = shuffle(listeningQuizBank).slice(0, 4).map((lq) => ({
    ...lq,
    categoryLabel: '🎧 AUDIO COMPREHENSION',
  }));
  questions.push(...shuffledListening);

  // 4. Pick 2 deep formula/pronunciation questions from lesson 1 bank
  const formulaPicks = shuffle(lesson1LearningBank.filter((q) => q.category === 'formula')).slice(0, 2);
  questions.push(...formulaPicks);

  return shuffle(questions).slice(0, count);
}

export const n5LevelExamLesson = {
  id: 'n5-level-exam',
  number: 'FINAL',
  section: 'exam',
  title: 'JLPT N5 Comprehensive Level Exam',
  shortTitle: 'JLPT N5 Level Exam',
  subtitle: 'The ultimate capstone certification exam covering all N5 lessons. Score 80%+ to unlock JLPT N4.',
  shortDescription: '25 randomized questions covering grammar, particles, verbs, adjectives, kanji, and listening.',
  isExam: true,
  passingScore: 80,
  rules: [
    {
      title: 'Exam Structure & Content Domains',
      formula: 'Grammar (56%) • Kanji Readings (20%) • Listening Comprehension (16%) • Formulas (8%)',
      explanation: 'This 25-question examination evaluates complete competence across the official JLPT N5 curriculum. Questions are sampled comprehensively across all 8 modules.'
    },
    {
      title: 'Passing Threshold & Progression',
      formula: 'Score 80% (20 / 25 questions) or higher to earn N5 certification and unlock JLPT N4.',
      explanation: 'Once passed, the JLPT N4 curriculum is permanently unlocked on your dashboard. You may retake the exam anytime to improve your score.'
    }
  ],
  tables: [
    {
      title: 'JLPT N5 Exam Domains',
      headers: ['Domain', 'Topics Covered', 'Sample Questions'],
      rows: [
        ['Grammar & Particles', 'は/が, に/で, まで/までに, と/や, Topic-comment', '14 questions'],
        ['Kanji Readings', '86 N5 characters, On/Kun readings, calendar compounds', '5 questions'],
        ['Listening Comprehension', 'Authentic dialogues, directions, time, Te-form', '4 questions'],
        ['Sentence Construction', 'Word order, relative clauses, particle placement', '2 questions']
      ]
    }
  ],
  quiz: generateN5LevelExamQuestions(25)
};
