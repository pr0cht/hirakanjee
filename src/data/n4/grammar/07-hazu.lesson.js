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
