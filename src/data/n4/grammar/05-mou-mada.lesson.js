// JLPT N4 Lesson Module
export const lesson = {
  "id": "mou-mada",
  "number": 5,
  "title": "JLPT N4: もう・まだ (\"Already\" and \"Not yet\")",
  "shortTitle": "もう・まだ (Mou / Mada)",
  "category": "Time & State Adverbs",
  "subtitle": "Practice using もう and まだ to express “already” and “not yet” in daily Japanese.",
  "formula": "もう + Past / まだ + ていません",
  "description": "Master time aspect pairs: もう (already) + affirmative verb expresses completion; まだ (not yet) + V-ていません expresses an action that has not occurred yet.",
  "sections": [
    {
      "title": "1. Completed vs. Incomplete Actions",
      "content": "• もう たべましたか。はい、もう たべました。(Did you already eat? Yes, I already ate.)\n• いいえ、まだ たべていません。(No, I haven’t eaten yet.) Note: Do NOT say まだ たべませんでした.",
      "examples": [
        {
          "jp": "もう ひるごはんを たべましたか。",
          "romaji": "Mou hirugohan o tabemashita ka.",
          "en": "Have you already eaten lunch?"
        },
        {
          "jp": "いいえ、まだ たべていません。",
          "romaji": "Iie, mada tabete imasen.",
          "en": "No, I have not eaten yet."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "How do you say \"I have not done my homework yet\"?",
      "question": "しゅくだいを ＿＿＿。",
      "options": [
        "まだ しませんでした",
        "まだ していません",
        "もう しませんでした",
        "もう していません"
      ],
      "correctAnswer": 1,
      "explanation": "\"Not yet done\" is always まだ + ていません in Japanese.",
      "romaji": "Shukudai o ___.",
      "romajiOptions": [
        "mada shimasen deshita",
        "mada shite imasen",
        "mou shimasen deshita",
        "mou shite imasen"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "mou-mada",
  "jlptLevel": "N4",
  "grammarPoints": [
    "もう・まだ (Mou / Mada)"
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
