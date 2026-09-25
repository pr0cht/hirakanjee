// JLPT N4 Lesson Module
export const lesson = {
  "id": "noni",
  "number": 4,
  "title": "JLPT N4: ～のに (Contrastive: \"Even though / Despite\")",
  "shortTitle": "～のに (~noni)",
  "category": "Contrast",
  "subtitle": "Master the contrastive expression ～のに (“even though / despite”) used at JLPT N4 level.",
  "formula": "Plain form + のに (Na-adj/Noun: な + のに)",
  "description": "Use ～のに to link two clauses when the second clause contradicts expectations set by the first clause. It carries a nuance of surprise, disappointment, or frustration.",
  "sections": [
    {
      "title": "1. Unexpected Outcomes with ～のに",
      "content": "Unlike simple \"but\" (でも / が), ～のに emphasizes that the result is contrary to what one would logically expect.",
      "examples": [
        {
          "jp": "たくさん べんきょうしたのに、テストに おちてしまいました。",
          "romaji": "Takusan benkyou shita noni, tesuto ni ochite shimaimashita.",
          "en": "Even though I studied a lot, I ended up failing the test."
        },
        {
          "jp": "やくそくしたのに、かれは こなかった。",
          "romaji": "Yakusoku shita noni, kare wa konakatta.",
          "en": "Even though he promised, he did not come."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the connector: \"Even though it is Sunday, I work.\"",
      "question": "にちようびな＿＿＿、はたらきます。",
      "options": [
        "ので",
        "のに",
        "から",
        "たら"
      ],
      "correctAnswer": 1,
      "explanation": "Noun + な + のに expresses \"even though it is Sunday (contrary to expectation)\".",
      "romaji": "Nichiyoubi na ___, hatarakimasu.",
      "romajiOptions": [
        "node",
        "noni",
        "kara",
        "tara"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "noni",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～のに (~noni)"
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
