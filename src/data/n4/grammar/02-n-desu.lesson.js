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
        "あたまが",
        "いたい",
        "んです"
      ],
      "explanation": "いたい is an i-adjective, so it connects directly: いたいんです."
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with explanatory んです: \"Where are you going?\"",
      "sentence": "どこへ行く___か。",
      "blankWord": "んです",
      "options": [
        "んです",
        "ます",
        "でした",
        "だから"
      ],
      "correctAnswer": 0,
      "explanation": "In natural conversation, [Plain form + んですか] inquires about context or reasons.",
      "romaji": "Doko e iku ___ ka."
    },
    {
      "type": "multiple-choice",
      "prompt": "How do nouns connect to ～んです in present affirmative?",
      "question": "How do nouns connect to ～んです in the present affirmative?",
      "options": [
        "Noun + なんです",
        "Noun + だんです",
        "Noun + んです",
        "Noun + いんです"
      ],
      "correctAnswer": 0,
      "explanation": "Nouns (and na-adjectives) require な before んです in present affirmative (e.g. 学生なんです).",
      "romaji": "How do nouns connect to ~n desu?",
      "romajiOptions": [
        "Noun + na n desu",
        "Noun + da n desu",
        "Noun + n desu",
        "Noun + in desu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the most natural explanatory reply to: 「どうして遅れたのですか。」",
      "question": "「どうして遅れたのですか。」 「＿＿＿。」",
      "options": [
        "バスが来なかったんです",
        "バスが来ません",
        "バスが来るんです",
        "バスが来ないでした"
      ],
      "correctAnswer": 0,
      "explanation": "バスが来なかったんです uses past plain form + んです to provide the explanation for being late.",
      "romaji": "\"Doushite okureta no desu ka.\" \"___.\"",
      "romajiOptions": [
        "Basu ga konakatta n desu",
        "Basu ga kimasen",
        "Basu ga kuru n desu",
        "Basu ga konai deshita"
      ]
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
