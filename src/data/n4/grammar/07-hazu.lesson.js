// JLPT N4 Lesson Module
export const lesson = {
  "id": "hazu",
  "number": 7,
  "title": "JLPT N4: ～はず (Expectation & Logical Assumption)",
  "shortTitle": "～はず (~hazu)",
  "category": "Expectation",
  "subtitle": "Study how to express expectation or assumption using ～はず.",
  "formula": "Plain form + はずです (Na-adj: なはず / Noun: のはず)",
  "description": "Express strong expectations based on reliable reasons, schedules, or logical knowledge (\"It is supposed to be... / It should be...\").",
  "sections": [
    {
      "title": "1. Logical Expectation with はず",
      "content": "Use はず when the speaker has good reason or objective evidence to believe something is true.",
      "examples": [
        {
          "jp": "かれは きょう くるはずです。",
          "romaji": "Kare wa kyou kuru hazu desu.",
          "en": "He should be coming today (e.g. he said he would)."
        },
        {
          "jp": "この もんだいは かんたんなはずです。",
          "romaji": "Kono mondai wa kantan na hazu desu.",
          "en": "This problem is supposed to be simple."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form for \"Tanaka-san should know\":",
      "question": "たなかさんは しって＿＿＿。",
      "options": [
        "いるはずです",
        "いるからです",
        "いるのにです",
        "いるばかりです"
      ],
      "correctAnswer": 0,
      "explanation": "Plain verb form + はずです expresses \"he should know\".",
      "romaji": "Tanaka-san wa shitte ___.",
      "romajiOptions": [
        "iru hazu desu",
        "iru kara desu",
        "iru noni desu",
        "iru bakari desu"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (logical expectation based on schedule):",
      "sentence": "電車は5時に来る___です。",
      "blankWord": "はず",
      "options": [
        "はず",
        "わけ",
        "こと",
        "もの"
      ],
      "correctAnswer": 0,
      "explanation": "電車は5時に来るはずです: 'The train is supposed/expected to arrive at 5.'",
      "romaji": "Densha wa go-ji ni kuru ___ desu."
    },
    {
      "type": "multiple-choice",
      "prompt": "Which expression is based on logical deduction from concrete facts rather than a guess?",
      "question": "Which expression is based on logical deduction from facts rather than a simple guess?",
      "options": [
        "でしょう",
        "はず",
        "かもしれない",
        "らしい"
      ],
      "correctAnswer": 1,
      "explanation": "～はず conveys expectation based on objective reasons, schedules, or known premises.",
      "romaji": "Which expression is based on logical deduction from facts?",
      "romajiOptions": [
        "deshou",
        "hazu",
        "kamoshirenai",
        "rashii"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"That movie should be interesting.\"",
      "chips": [
        "あの映画",
        "は",
        "面白い",
        "はず",
        "です"
      ],
      "correctOrder": [
        "あの映画",
        "は",
        "面白い",
        "はず",
        "です"
      ],
      "explanation": "Structure: [Topic は] [i-adjective] [はず] [です]."
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (he should have known, yet...):",
      "sentence": "彼は知っている___なのに、教えてくれなかった。",
      "blankWord": "はず",
      "options": [
        "はず",
        "とき",
        "こと",
        "つもり"
      ],
      "correctAnswer": 0,
      "explanation": "知っているはずなのに: 'Even though he should have known, he didn't tell me.'",
      "romaji": "Kare wa shitte iru ___ na noni, oshiete kurenakatta."
    }
  ]
};

export const lessonMeta = {
  "id": "hazu",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～はず (~hazu)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-core"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
