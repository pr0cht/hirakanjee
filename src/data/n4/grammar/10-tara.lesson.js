// JLPT N4 Lesson Module
export const lesson = {
  "id": "tara-conditional",
  "number": 10,
  "title": "JLPT N4: ～たら (Conditional: \"If / When / After\")",
  "shortTitle": "～たら (~tara)",
  "category": "Conditionals",
  "subtitle": "Practice conditional sentences with ～たら (“if / when”) — a core JLPT N4 structure.",
  "formula": "Ta-form + ら (V-たら, A-かったら, Na/N-だったら)",
  "description": "The most common and versatile conditional in spoken Japanese. Expresses condition (\"if\") and temporal sequence (\"when / after X happens, then Y\").",
  "sections": [
    {
      "title": "1. Formation and Flexibility of ～たら",
      "content": "Take the plain past (Ta-form) and add ら.\n\n• いきます → いった → いったら (If/when I go)\n• あめです → あめだった → あめだったら (If it rains)",
      "examples": [
        {
          "jp": "あめが ふったら、うちに います。",
          "romaji": "Ame ga futtara, uchi ni imasu.",
          "en": "If it rains, I will stay home."
        },
        {
          "jp": "じかんが あったら、えいがを みましょう。",
          "romaji": "Jikan ga attara, eiga o mimashou.",
          "en": "If there is time, let’s watch a movie."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Form the conditional \"If you drink alcohol\":",
      "question": "おさけを ＿＿＿、くるまを うんてんしてはいけません。",
      "options": [
        "のんだら",
        "のめば",
        "のむと",
        "のむなら"
      ],
      "correctAnswer": 0,
      "explanation": "のんだら is the natural Ta-form conditional for an event condition.",
      "romaji": "Osake o ___, kuruma o unten shite wa ikemasen.",
      "romajiOptions": [
        "nondara",
        "nomeba",
        "nomu to",
        "nomu nara"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "tara-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～たら (~tara)"
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
