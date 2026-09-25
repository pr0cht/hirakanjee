// JLPT N4 Lesson Module
export const lesson = {
  "id": "passive-ukemi",
  "number": 14,
  "title": "JLPT N4: 受身（うけみ） Passive Voice",
  "shortTitle": "受身（うけみ） Passive",
  "category": "Verb Voice",
  "subtitle": "Master the Japanese passive form to describe actions done to the subject.",
  "formula": "Group 1: -u → -areru / Group 2: -ru → -rareru / される・こられる",
  "description": "Use passive voice when the subject is acted upon by another person, or to express suffering/annoyance (meiwaku ukemi).",
  "sections": [
    {
      "title": "1. Conjugating Passive Verbs",
      "content": "• Group 1: ふむ → ふまれる (be stepped on), ほめる → ほめられる (be praised).\n• Pattern: [Victim/Receiver] は [Agent] に [Verb Passive].",
      "examples": [
        {
          "jp": "わたしは せんせいに ほめられました。",
          "romaji": "Watashi wa sensei ni homeraremashita.",
          "en": "I was praised by the teacher."
        },
        {
          "jp": "でんしゃで あしを ふまれました。",
          "romaji": "Densha de ashi o fumaremashita.",
          "en": "My foot was stepped on in the train."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the passive form: \"I was scolded by mother.\"",
      "question": "ははに ＿＿＿。",
      "options": [
        "しかりました",
        "しかられました",
        "しかせました",
        "しからせました"
      ],
      "correctAnswer": 1,
      "explanation": "しかる → しかられる (shikararemashita = was scolded).",
      "romaji": "Haha ni ___.",
      "romajiOptions": [
        "shikarimashita",
        "shikararemashita",
        "shikasemashita",
        "shikarasemashita"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "passive-ukemi",
  "jlptLevel": "N4",
  "grammarPoints": [
    "受身（うけみ） Passive"
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
