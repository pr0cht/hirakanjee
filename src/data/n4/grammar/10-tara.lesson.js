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
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"when you arrive at the station\"): ",
      "sentence": "駅に着い___、電話してください。",
      "blankWord": "たら",
      "options": [
        "たら",
        "なら",
        "ても",
        "ので"
      ],
      "correctAnswer": 0,
      "explanation": "駅に着いたら、電話してください: 'When/after you arrive at the station, please call me.'",
      "romaji": "Eki ni tsui___, denwa shite kudasai."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the conditional for a one-time past discovery:",
      "question": "家に帰っ___、誰もいなかった。",
      "options": [
        "たら",
        "ば",
        "と",
        "なら"
      ],
      "correctAnswer": 0,
      "explanation": "帰ったら、誰もいなかった: ～たら is used for a one-time sequential discovery in the past ('When I got home, nobody was there').",
      "romaji": "Ie ni kaet___, dare mo inakatta.",
      "romajiOptions": [
        "tara",
        "ba",
        "to",
        "nara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Which conditional can express a one-time past unexpected discovery?",
      "question": "Which conditional can express a one-time past unexpected discovery?",
      "options": [
        "～ば",
        "～と",
        "～たら",
        "～なら"
      ],
      "correctAnswer": 2,
      "explanation": "～たら can be used with a past tense main clause to express discovering an unexpected fact upon completing an action.",
      "romaji": "Which conditional can express a one-time past unexpected discovery?",
      "romajiOptions": [
        "~ba",
        "~to",
        "~tara",
        "~nara"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"When your homework is done, you may play.\"",
      "chips": [
        "宿題が",
        "終わったら",
        "遊んで",
        "いいですよ"
      ],
      "correctOrder": [
        "宿題が",
        "終わったら",
        "遊んで",
        "いいですよ"
      ],
      "explanation": "Structure: [Condition ～たら] [Permission ～ていいですよ]."
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
