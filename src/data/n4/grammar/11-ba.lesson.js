// JLPT N4 Lesson Module
export const lesson = {
  "id": "ba-conditional",
  "number": 11,
  "title": "JLPT N4: ～ば (Conditional Form & Differences from ～たら)",
  "shortTitle": "～ば (~ba)",
  "category": "Conditionals",
  "subtitle": "Learn another conditional form ～ば and its differences from ～たら.",
  "formula": "Group 1: -u → -eba / Group 2: -ru → -reba / I-adj: -kereba",
  "description": "A formal conditional focusing on general conditions, cause-effect hypotheses, and proverbs (\"If X happens, Y naturally occurs\"). Cannot be used for past one-time events.",
  "sections": [
    {
      "title": "1. Conjugating the Ba-form",
      "content": "• かく → かけば\n• たべる → たべれば\n• する → すれば / くる → くれば\n• やすい → やすければ",
      "examples": [
        {
          "jp": "やすければ、かいます。",
          "romaji": "Yasukereba, kaimasu.",
          "en": "If it is cheap, I will buy it."
        },
        {
          "jp": "べんきょうすれば、ごうかくできます。",
          "romaji": "Benkyou sureba, goukaku dekimasu.",
          "en": "If you study, you can pass."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "What is the Ba-form of いく (to go)?",
      "question": "＿＿＿、わかります。",
      "options": [
        "いけば",
        "いったら",
        "いくば",
        "いきれば"
      ],
      "correctAnswer": 0,
      "explanation": "いく (Group 1) changes u to eba: いけば.",
      "romaji": "___, wakarimasu.",
      "romajiOptions": [
        "ikeba",
        "ittara",
        "ikuba",
        "ikireba"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "ba-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～ば (~ba)"
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
