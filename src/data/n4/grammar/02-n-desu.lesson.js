// JLPT N4 Lesson Module
export const lesson = {
  "id": "n-desu",
  "number": 2,
  "title": "JLPT N4: ～んです (Explanations & Background Information)",
  "shortTitle": "～んです (~n desu)",
  "category": "Explanations",
  "subtitle": "Understand how to explain reasons and give background information using ～んです.",
  "formula": "Plain form + んです (Na-adj/Noun: な + んです)",
  "description": "Use ～んです (or informal ～んだ) when explaining a cause, asking for clarification on an observed situation, or providing background context before a request.",
  "sections": [
    {
      "title": "1. Usage of ～んです",
      "content": "～んです connects the speaker’s statement directly to the situation at hand. It answers unasked \"why\" questions and softens requests.\n\nFormation:\n• Verb: いきます → いくんです / いかないんです\n• I-adj: あたまが いたい → いたいんです\n• Na-adj / Noun: びょうき → びょうきなんです",
      "examples": [
        {
          "jp": "どうしたんですか。あたまが いたいんです。",
          "romaji": "Doushitan desu ka. Atama ga itain desu.",
          "en": "What happened? - I have a headache (that explains my expression)."
        },
        {
          "jp": "バスが こなかったんです。",
          "romaji": "Basu ga konakattan desu.",
          "en": "It is because the bus did not come."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Which is the correct form for \"Because it is quiet (shizuka)\"?",
      "question": "しずか＿＿＿。",
      "options": [
        "んです",
        "なんです",
        "だんです",
        "いんです"
      ],
      "correctAnswer": 1,
      "explanation": "Na-adjectives attach to んです using な (しずかなんです).",
      "romaji": "Shizuka ___.",
      "romajiOptions": [
        "n desu",
        "na n desu",
        "da n desu",
        "in desu"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I have a headache (explanatory).\"",
      "chips": [
        "あたまが",
        "いたい",
        "んです"
      ],
      "correctOrder": [
        0,
        1,
        2
      ],
      "explanation": "いたい is an i-adjective, so it connects directly: いたいんです."
    }
  ]
};

export const lessonMeta = {
  "id": "n-desu",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～んです (~n desu)"
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
