// JLPT N4 Comprehensive Level Exam (中級進級総合試験)
// Capstone certification exam covering all N4 grammar, conditionals, passive/causative,
// verbs, adjectives, kanji, and listening comprehension.
// Passing this exam (80%+) unlocks JLPT N3.

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const curatedN4ExamQuestions = [
  {
    id: 'n4-exam-01',
    categoryLabel: '🎯 CONDITIONAL: TARA VS BA',
    type: 'multiple-choice',
    prompt: "Which conditional form is best when a past event triggers an unexpected discovery: 'When I opened the window, it was snowing'?",
    question: "Which conditional form is best when a past event triggers an unexpected discovery: 'When I opened the window, it was snowing'?",
    options: [
      "まど を あけたら、ゆき が ふっていました。",
      "まど を あければ、ゆき が ふっていました。",
      "まど を あけると、ゆき が ふっていました。",
      "まど を あけるなら、ゆき が ふっていました。"
    ],
    correctAnswer: 0,
    explanation: "～たら is uniquely suited for past unexpected discoveries (when X happened, Y resulted)."
  },
  {
    id: 'n4-exam-02',
    categoryLabel: '⚡ PASSIVE VOICE (受身)',
    type: 'multiple-choice',
    prompt: "Choose the correct suffering passive sentence for: 'I had my foot stepped on by someone on the train.'",
    question: "Choose the correct suffering passive sentence for: 'I had my foot stepped on by someone on the train.'",
    options: [
      "でんしゃ の なか で だれか に あし を ふまれました。",
      "でんしゃ の なか で だれか が あし を ふみました。",
      "でんしゃ の なか で だれか に あし を ふませました。",
      "でんしゃ の なか で わたし が あし を ふまれました。"
    ],
    correctAnswer: 0,
    explanation: "Adversity passive: Victim (わたしは) + Agent に + Body Part を + Verb-passive (ふまれました)."
  },
  {
    id: 'n4-exam-03',
    categoryLabel: '⚡ CAUSATIVE (使役)',
    type: 'multiple-choice',
    prompt: "How do you say 'The mother made/let the child eat vegetables'?",
    question: "How do you say 'The mother made/let the child eat vegetables'?",
    options: [
      "はは は こども に やさい を たべさせました。",
      "はは は こども に やさい を たべられました。",
      "はは は こども を やさい を たべさせました。",
      "はは は こども に やさい を たべさせられました。"
    ],
    correctAnswer: 0,
    explanation: "Causative with transitive verb: Instigator は + Performer に + Object を + Causative Verb (たべさせました)."
  },
  {
    id: 'n4-exam-04',
    categoryLabel: '🤝 GIVING & RECEIVING (TE-FORM)',
    type: 'multiple-choice',
    prompt: "How do you say 'Mr. Yamada kindly taught me Japanese' (polite gratitude from speaker)?",
    question: "How do you say 'Mr. Yamada kindly taught me Japanese' (polite gratitude from speaker)?",
    options: [
      "やまださん が わたし に にほんご を おしえてくれました。",
      "やまださん が わたし に にほんご を おしえてあげました。",
      "わたし は やまださん に にほんご を おしえてくれました。",
      "やまださん は わたし に にほんご を おしえてもらいました。"
    ],
    correctAnswer: 0,
    explanation: "～てくれる expresses that someone did an action beneficial towards me (the speaker)."
  },
  {
    id: 'n4-exam-05',
    categoryLabel: '✨ HEARSAY VS APPEARANCE (SOU DESU)',
    type: 'multiple-choice',
    prompt: "Which sentence means 'It looks like it will rain' (visual appearance based on dark clouds)?",
    question: "Which sentence means 'It looks like it will rain' (visual appearance based on dark clouds)?",
    options: [
      "あめ が ふりそう です。",
      "あめ が ふるそう です。",
      "あめ が ふったそう です。",
      "あめ が ふるよう です。"
    ],
    correctAnswer: 0,
    explanation: "Verb-stem + そう です indicates visual conjecture ('looks like'): ふりそう です. (ふるそう です means 'I heard it will rain')."
  },
  {
    id: 'n4-exam-06',
    categoryLabel: '🎯 PURPOSE: TAME NI VS YOU NI',
    type: 'multiple-choice',
    prompt: "Choose the correct phrase for: 'I study every day in order to become a doctor (volitional goal)':",
    question: "Choose the correct phrase for: 'I study every day in order to become a doctor (volitional goal)':",
    options: [
      "いしゃ に なる ため に、まいにち べんきょうしています。",
      "いしゃ に なる よう に、まいにち べんきょうしています。",
      "いしゃ に なれば、まいにち べんきょうしています。",
      "いしゃ に なると、まいにち べんきょうしています。"
    ],
    correctAnswer: 0,
    explanation: "ため に is used with controllable actions and deliberate goals ('in order to become a doctor')."
  },
  {
    id: 'n4-exam-07',
    categoryLabel: '⚡ POTENTIAL FORM',
    type: 'multiple-choice',
    prompt: "What is the potential form of the verb 'よみます' (to read)?",
    question: "What is the potential form of the verb 'よみます' (to read)?",
    options: [
      "よめます (yomemasu)",
      "よみられます (yomiraremasu)",
      "よまれます (yomaremasu)",
      "よませます (yomasemasu)"
    ],
    correctAnswer: 0,
    explanation: "Group 1 verbs change the 'u' sound to 'e' sound + masu: よみます -> よめます (can read)."
  },
  {
    id: 'n4-exam-08',
    categoryLabel: '⚡ VOLITIONAL FORM',
    type: 'multiple-choice',
    prompt: "What is the plain volitional form ('Let's...') of the verb 'いく' (to go)?",
    question: "What is the plain volitional form ('Let's...') of the verb 'いく' (to go)?",
    options: [
      "いこう (ikou)",
      "いきましょう (ikimashou)",
      "いくだろう (ikudarou)",
      "いけば (ikeba)"
    ],
    correctAnswer: 0,
    explanation: "Group 1 plain volitional changes -u to -ou: いく -> いこう (let's go)."
  },
  {
    id: 'n4-exam-09',
    categoryLabel: '🔄 TRANSITIVE VS INTRANSITIVE',
    type: 'multiple-choice',
    prompt: "Which pair correctly demonstrates 'The door opens (intransitive)' vs 'I open the door (transitive)'?",
    question: "Which pair correctly demonstrates 'The door opens (intransitive)' vs 'I open the door (transitive)'?",
    options: [
      "ドア が あきます。 / ドア を あけます。",
      "ドア を あきます。 / ドア が あけます。",
      "ドア が あけます。 / ドア を あきます。",
      "ドア に あきます。 / ドア で あけます。"
    ],
    correctAnswer: 0,
    explanation: "あく (あきます) is intransitive (takes が). あける (あけます) is transitive (takes を)."
  },
  {
    id: 'n4-exam-10',
    categoryLabel: '🔗 COMPOUND VERBS',
    type: 'multiple-choice',
    prompt: "How do you say 'I started reading this novel'?",
    question: "How do you say 'I started reading this novel'?",
    options: [
      "この しょうせつ を よみはじめました。",
      "この しょうせつ を よみおわりました。",
      "この しょうせつ を よみつづけました。",
      "この しょうせつ を よみだしました。"
    ],
    correctAnswer: 0,
    explanation: "Verb-stem + はじめます expresses beginning an intentional action: よみはじめました."
  },
  {
    id: 'n4-exam-11',
    categoryLabel: '㊗️ N4 KANJI READING',
    type: 'multiple-choice',
    prompt: "What is the correct reading for the kanji in: 「会議 (かいぎ) を [準備] します」?",
    question: "What is the correct reading for the kanji in: 「会議 (かいぎ) を [準備] します」?",
    options: [
      "じゅんび (junbi)",
      "じゅんべ (junbe)",
      "ぜんび (zenbi)",
      "しゅんび (shunbi)"
    ],
    correctAnswer: 0,
    explanation: "「準備」is read「じゅんび」(preparation)."
  },
  {
    id: 'n4-exam-12',
    categoryLabel: '㊗️ N4 KANJI READING',
    type: 'multiple-choice',
    prompt: "What is the reading of「経験」in:「にほん で いい [経験] を しました」?",
    question: "What is the reading of「経験」in:「にほん で いい [経験] を しました」?",
    options: [
      "けいけん (keiken)",
      "けいかん (keikan)",
      "こうけん (kouken)",
      "けいきん (keikin)"
    ],
    correctAnswer: 0,
    explanation: "「経験」is read「けいけん」(experience)."
  },
  {
    id: 'n4-exam-13',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Construct the sentence: 'If it doesn't rain tomorrow, let's play tennis.'",
    chips: ["あした", "あめ", "が", "ふらなければ、", "テニス", "を", "しましょう", "ふれば"],
    correctOrder: ["あした", "あめ", "が", "ふらなければ、", "テニス", "を", "しましょう"],
    explanation: "あした (tomorrow) + あめ が ふらなければ (if it doesn't rain, ba-negative) + テニス を しましょう (let's play tennis)."
  },
  {
    id: 'n4-exam-14',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Construct the sentence: 'I study Japanese so that I can read manga.'",
    chips: ["マンガ", "が", "よめる", "よう", "に、", "にほんご", "を", "べんきょうしています"],
    correctOrder: ["マンガ", "が", "よめる", "よう", "に、", "にほんご", "を", "べんきょうしています"],
    explanation: "マンガ が よめる (can read manga - potential) + よう に (so that) + にほんご を べんきょうしています."
  },
  {
    id: 'n4-exam-15',
    categoryLabel: '💬 POLITE SPEECH (KEIGO BASICS)',
    type: 'multiple-choice',
    prompt: "Which verb is the humble (Kenjougo) form used by the speaker to say 'I will go'?",
    question: "Which verb is the humble (Kenjougo) form used by the speaker to say 'I will go'?",
    options: [
      "まいります (mairimasu)",
      "いらっしゃいます (irasshaimasu)",
      "おっしゃいます (osshaimasu)",
      "なさいます (nasaimasu)"
    ],
    correctAnswer: 0,
    explanation: "まいります (参ります) is the humble form of 行きます (to go) and 来ます (to come)."
  }
];

export function generateN4LevelExamQuestions(count = 25) {
  const shuffled = shuffle(curatedN4ExamQuestions);
  return shuffled.slice(0, count);
}

export const n4LevelExamLesson = {
  id: 'n4-level-exam',
  number: 'FINAL',
  section: 'exam',
  title: 'JLPT N4 Comprehensive Level Exam',
  shortTitle: 'JLPT N4 Level Exam',
  subtitle: 'The capstone certification exam covering all N4 lessons. Score 80%+ to unlock JLPT N3.',
  shortDescription: '25 randomized questions covering conditionals, giving/receiving, passive/causative, potential, and reading.',
  isExam: true,
  passingScore: 80,
  rules: [
    {
      title: 'Exam Structure & Content Domains',
      formula: 'Conditionals (24%) • Passive/Causative (24%) • Verbs & Keigo (20%) • Kanji & Vocabulary (20%) • Reading (12%)',
      explanation: 'Evaluates complete competence across all JLPT N4 grammar structures, verb conjugations, and practical sentence patterns.'
    },
    {
      title: 'Passing Threshold & Progression',
      formula: 'Score 80% (20 / 25 questions) or higher to earn N4 certification and unlock JLPT N3.',
      explanation: 'Once passed, the JLPT N3 curriculum transition is unlocked on your dashboard. You may retake the exam anytime to improve your score.'
    }
  ],
  tables: [
    {
      title: 'JLPT N4 Exam Domains',
      headers: ['Domain', 'Topics Covered', 'Sample Questions'],
      rows: [
        ['Complex Grammar', '～たら, ～ば, ～なら, ～と, giving/receiving, purpose', '10 questions'],
        ['Voice & Mood', 'Passive (受身), Causative (使役), Causative-Passive', '6 questions'],
        ['Verb Inflexions', 'Potential, Volitional, Compound verbs, Transitive pairs', '5 questions'],
        ['Kanji & Keigo', 'Essential N4 kanji readings, sonkeigo/kenjougo basics', '4 questions']
      ]
    }
  ],
  quiz: generateN4LevelExamQuestions(25)
};
