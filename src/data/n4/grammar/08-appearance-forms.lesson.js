// JLPT N4 Lesson Module
export const lesson = {
  "id": "appearance-forms",
  "number": 8,
  "category": "Grammar",
  "shortTitle": "そう・よう・みたい・らしい",
  "title": "Appearance & Conjecture: そう・よう・みたい・らしい",
  "subtitle": "Master the four ways to say \"looks like / seems like / apparently\" in Japanese.",
  "description": "Learn to distinguish the four appearance/conjecture expressions: ～そう (visual impression), ～よう/みたい (resemblance/inference), and ～らしい (hearsay evidence).",
  "formula": "V-stem/Adj-stem + そう | Plain form + よう/みたい/らしい",
  "sections": [
    {
      "title": "1. Comparison of Conjectural & Purpose Forms",
      "content": "• ～そう: Immediate visual impression (おいしそう = looks delicious).\n• ～よう / ～みたい: Logical/sensory deduction (あめのようだ = seems like rain).\n• ～ために: Purpose with volitional control (To buy a car, I save money).\n• ～ように: Purpose with state/ability change (So that I can pass, I study).",
      "examples": [
        {
          "jp": "この りんごは おいしそうです。",
          "romaji": "Kono ringo wa oishisou desu.",
          "en": "This apple looks delicious."
        },
        {
          "jp": "にほんごが はなせるように、まいにち れんしゅうします。",
          "romaji": "Nihongo ga hanaseru you ni, mainichi renshuu shimasu.",
          "en": "So that I can speak Japanese, I practice every day."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form expressing immediate visual impression: \"That cake looks delicious.\"",
      "question": "あのケーキは おいし＿＿＿。",
      "romaji": "Ano keeki wa oishi___.",
      "options": [
        "そうです",
        "ようです",
        "らしいです",
        "みたいです"
      ],
      "romajiOptions": [
        "sou desu",
        "you desu",
        "rashii desu",
        "mitai desu"
      ],
      "correctAnswer": 0,
      "explanation": "～そう expresses a direct visual impression based on appearance before tasting."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the hearsay evidence form: \"Apparently, it will rain tomorrow.\"",
      "question": "あした あめが ふる＿＿＿。",
      "romaji": "Ashita ame ga furu___.",
      "options": [
        "らしいです",
        "そうです",
        "ようです",
        "みたいです"
      ],
      "romajiOptions": [
        "rashii desu",
        "sou desu",
        "you desu",
        "mitai desu"
      ],
      "correctAnswer": 0,
      "explanation": "～らしい expresses information the speaker heard or inferred from indirect evidence."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the resemblance form: \"This town seems like Tokyo.\"",
      "question": "この まちは とうきょう＿＿＿。",
      "romaji": "Kono machi wa Toukyou___.",
      "options": [
        "みたいです",
        "そうです",
        "らしいです",
        "ようです"
      ],
      "romajiOptions": [
        "mitai desu",
        "sou desu",
        "rashii desu",
        "you desu"
      ],
      "correctAnswer": 0,
      "explanation": "～みたい expresses resemblance or similarity in a casual register."
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the form for \"So that I can remember (potential form)\":",
      "question": "おぼえられる＿＿＿、メモを とります。",
      "romaji": "Oboerareru ___, memo o torimasu.",
      "options": [
        "ために",
        "ように",
        "そうに",
        "らしいに"
      ],
      "romajiOptions": [
        "tame ni",
        "you ni",
        "sou ni",
        "rashii ni"
      ],
      "correctAnswer": 1,
      "explanation": "Potential verb (おぼえられる) expressing ability takes ように for purpose."
    }
  ]
};

export const lessonMeta = {
  "id": "appearance-forms",
  "jlptLevel": "N4",
  "grammarPoints": [
    "そう・よう・みたい・らしい"
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
