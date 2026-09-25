// JLPT N4 Lesson Module
export const lesson = {
  "id": "keigo-polite",
  "number": 16,
  "title": "JLPT N4: 敬語（けいご） (Honorific & Humble Speech)",
  "shortTitle": "敬語（けいご） Keigo",
  "category": "Honorific Speech",
  "subtitle": "Learn the basics of keigo (honorific and humble speech) for polite communication.",
  "formula": "Sonkeigo (Respectful) vs Kenjougo (Humble)",
  "description": "Understand the three pillars of Japanese Keigo: Teineigo (polite です/ます), Sonkeigo (elevating the listener/superior), and Kenjougo (lowering oneself/in-group to show modesty).",
  "sections": [
    {
      "title": "1. Essential Special Keigo Verbs",
      "content": "• いく/くる/いる → Respectful: いらっしゃる / Humble: まいる (go/come), おる (be).\n• たべる/のむ → Respectful: めしあがる / Humble: いただく.\n• いう → Respectful: おっしゃる / Humble: もうす / もうしあげる.\n• みる → Respectful: ごらんになる / Humble: はいけんする.",
      "examples": [
        {
          "jp": "せんせいは もう おかえりになりました。",
          "romaji": "Sensei wa mou okaeri ni narimashita.",
          "en": "The teacher has already returned home (Sonkeigo)."
        },
        {
          "jp": "わたしが ごあんないいたします。",
          "romaji": "Watashi ga go-annai itashimasu.",
          "en": "I will guide you (Kenjougo)."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Which verb is the respectful (Sonkeigo) form of たべる?",
      "question": "しゃちょうが ひるごはんを ＿＿＿。",
      "options": [
        "いただきます",
        "めしあがります",
        "たべさせます",
        "まいります"
      ],
      "correctAnswer": 1,
      "explanation": "めしあがる is the respectful form for eating used for superiors.",
      "romaji": "Shachou ga hirugohan o ___.",
      "romajiOptions": [
        "itadakimasu",
        "meshiagarimasu",
        "tabesasemasu",
        "mairimasu"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "keigo-polite",
  "jlptLevel": "N4",
  "grammarPoints": [
    "敬語（けいご） Keigo"
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
