// JLPT N4 Lesson Module
export const lesson = {
  "id": "koso-particle",
  "number": 17,
  "title": "JLPT N4: ～こそ (Emphatic Particle for Focus & Contrast)",
  "shortTitle": "～こそ (~koso)",
  "category": "Emphatic Particles",
  "subtitle": "Understand the emphatic particle ～こそ used for emphasis or contrast.",
  "formula": "Noun / Particle + こそ",
  "description": "Add strong, decisive emphasis to a noun or reason. Commonly heard in daily greetings such as こちらこそ (\"it is I who should say so / likewise!\").",
  "sections": [
    {
      "title": "1. Emphasizing Identity and Resolutions",
      "content": "• こちらこそ よろしく おねがいします。(It is I who should say so; nice to meet you too!)\n• こんどこそ がんばります。(This time for sure, I will do my best!)",
      "examples": [
        {
          "jp": "こちらこそ、ありがとうございました。",
          "romaji": "Kochira koso, arigatou gozaimashita.",
          "en": "It is I who should thank you (Likewise, thank you very much!)."
        },
        {
          "jp": "らいねんこそ にほんへ いきたいです。",
          "romaji": "Rainen koso Nihon e ikitai desu.",
          "en": "Next year for sure, I want to go to Japan."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Complete the greeting: \"The pleasure is mine / Likewise, nice to meet you\":",
      "question": "＿＿＿ よろしく おねがいします。",
      "options": [
        "こちらこそ",
        "こちらなら",
        "こちらのに",
        "こちらので"
      ],
      "correctAnswer": 0,
      "explanation": "こちらこそ is the standard polite Japanese response meaning \"It is I who...\".",
      "romaji": "___ yoroshiku onegai shimasu.",
      "romajiOptions": [
        "kochira koso",
        "kochira nara",
        "kochira no ni",
        "kochira node"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with the emphatic particle (\"this time for sure\"): ",
      "sentence": "今度___、絶対に頑張ります。",
      "blankWord": "こそ",
      "options": [
        "こそ",
        "さえ",
        "でも",
        "しか"
      ],
      "correctAnswer": 0,
      "explanation": "今度こそ、絶対に頑張ります: 'This time for sure, I will do my best!' (strong determination).",
      "romaji": "Kondo ___, zettai ni gambarimasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "What does the particle こそ primarily emphasize?",
      "question": "What is the primary grammatical function of the particle こそ?",
      "options": [
        "Quantity or numerical extent",
        "Degree of comparison",
        "The specific element being singled out with determination or contrast",
        "Negative understatement"
      ],
      "correctAnswer": 2,
      "explanation": "こそ singles out the preceding word with emphatic focus ('this very thing / none other than this').",
      "romaji": "What does the particle koso emphasize?",
      "romajiOptions": [
        "Quantity or numerical extent",
        "Degree of comparison",
        "The specific element being singled out with determination or contrast",
        "Negative understatement"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Analyze the meaning of こそ in: 「あなたこそが問題です」",
      "question": "In 「あなたこそが問題です」, what is the exact nuance of こそ?",
      "options": [
        "Only you (and no one else existed)",
        "Precisely / definitely you (emphatic focus on the exact individual)",
        "Nobody but you was invited",
        "Not you at all"
      ],
      "correctAnswer": 1,
      "explanation": "あなたこそ emphasizes 'it is precisely you / you above all others'.",
      "romaji": "In \"Anata koso ga mondai desu\", what is the nuance?",
      "romajiOptions": [
        "Only you (and no one else existed)",
        "Precisely / definitely you (emphatic focus on the exact individual)",
        "Nobody but you was invited",
        "Not you at all"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"This year for sure, I will pass JLPT N3!\"",
      "chips": [
        "今年こそ",
        "JLPT N3に",
        "合格します"
      ],
      "correctOrder": [
        "今年こそ",
        "JLPT N3に",
        "合格します"
      ],
      "explanation": "Structure: [Time noun + こそ (emphatic resolution)] [Target に] [Verb]."
    }
  ]
};

export const lessonMeta = {
  "id": "koso-particle",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～こそ (~koso)"
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
