// JLPT N5 Lesson Module
export const lesson = {
  "id": "demonstratives-kore-sore-are",
  "number": 10,
  "title": "JLPT N5: Japanese demonstratives: kore, sore, are, dore",
  "shortTitle": "Demonstratives (Ko-So-A-Do System)",
  "subtitle": "Master spatial demonstratives: kore/sore/are, kono/sono/ano, and koko/soko/asoko.",
  "description": "Master the logical Ko-So-A-Do matrix across pronouns (これ), noun modifiers (この), locations (ここ), and directions (こちら).",
  "sections": [
    {
      "title": "1. The Ko-So-A-Do Matrix",
      "content": "The 4 Distance Categories:\n  こ (Ko): Near the speaker (This / Here)\n  そ (So): Near the listener (That / There)\n  あ (A): Far from BOTH speaker and listener (That over there)\n  ど (Do): Question word (Which / Where)",
      "table": {
        "headers": [
          "Category",
          "Pronoun (Thing)",
          "Noun Modifier",
          "Location (Place)",
          "Direction (Polite)"
        ],
        "rows": [
          [
            "Ko (Near me)",
            "これ (this)",
            "この [Noun] (this)",
            "ここ (here)",
            "こちら (this way)"
          ],
          [
            "So (Near you)",
            "それ (that)",
            "その [Noun] (that)",
            "そこ (there)",
            "そちら (that way)"
          ],
          [
            "A (Far away)",
            "あれ (that over there)",
            "あの [Noun] (that)",
            "あそこ (over there)",
            "あちら (that way)"
          ],
          [
            "Do (Question)",
            "どれ (which one)",
            "どの [Noun] (which)",
            "どこ (where)",
            "どちら (which way)"
          ]
        ]
      }
    },
    {
      "title": "2. Critical Rule: これ vs この",
      "content": "これ stands alone as a noun.\nこの CANNOT stand alone — it MUST be immediately followed by a noun!\n  Correct: これ は ほん desu. (This is a book.)\n  Correct: この ほん は わたし の desu. (This book is mine.)\n  WRONG: これ ほん は... ❌"
    }
  ],
  "quiz": [
    {
      "id": "l10-q1",
      "type": "multiple-choice",
      "prompt": "What is the crucial grammatical rule distinguishing 'これ' from 'この'?",
      "question": "What is the crucial grammatical rule distinguishing 'これ' from 'この'?",
      "options": [
        "これ stands alone as a noun; この MUST be immediately followed by a noun.",
        "これ is for people; この is for objects.",
        "この is for things far away; これ is for things nearby.",
        "There is no difference."
      ],
      "correctAnswer": 0,
      "explanation": "この is an adjective-like determiner requiring a partner noun (e.g. この くるま).",
      "romajiOptions": [
        "kore stands alone as a noun; kono MUST be immediately followed by a noun.",
        "kore is for people; kono is for objects.",
        "kono is for things far away; kore is for things nearby.",
        "There is no difference."
      ]
    },
    {
      "id": "l10-q2",
      "type": "word-bank",
      "prompt": "Build: 'That book (near you) is mine.'",
      "targetEn": "That book is mine.",
      "chips": [
        "その",
        "ほん",
        "は",
        "わたし",
        "の",
        "です",
        "あの",
        "これ"
      ],
      "correctOrder": [
        "その",
        "ほん",
        "は",
        "わたし",
        "の",
        "です"
      ],
      "explanation": "'その ほん' (that book near listener) + は + わたし の (mine) + です.",
      "romaji": "sono hon wa watashi no desu"
    },
    {
      "id": "l10-q3",
      "type": "fill-blank",
      "prompt": "Ask what that object far from both of you is.",
      "sentence": "___ は なん です か？",
      "blankWord": "あれ",
      "options": [
        "あれ",
        "それ",
        "これ",
        "どれ"
      ],
      "correctAnswer": 0,
      "explanation": "'あれ' refers to an object far from both the speaker and listener.",
      "romaji": "[ ? ] wa nan desu ka?"
    },
    {
      "id": "l10-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English translation.",
      "audioText": "ここ は きょうしつ です。",
      "options": [
        "Here is the classroom.",
        "There is the classroom.",
        "Over there is the library.",
        "Where is the classroom?"
      ],
      "correctAnswer": 0,
      "explanation": "'ここ' means here.",
      "romaji": "koko wa kyoushitsu desu."
    },
    {
      "id": "l10-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'Which umbrella is yours?'",
      "targetEn": "Which umbrella is yours?",
      "chips": [
        "あなた",
        "の",
        "かさ",
        "は",
        "どれ",
        "です",
        "か",
        "どこ",
        "あれ"
      ],
      "correctOrder": [
        "あなた",
        "の",
        "かさ",
        "は",
        "どれ",
        "です",
        "か"
      ],
      "explanation": "'どれ' is the standalone question pronoun for 'which one'.",
      "romaji": "anata no kasa wa dore desu ka"
    },
    {
      "id": "l10-q6",
      "type": "fill-blank",
      "prompt": "What spatial location does あそこ represent?",
      "sentence": "あそこ = ___。",
      "blankWord": "Over there (far from both)",
      "options": [
        "Over there (far from both)",
        "Here (near speaker)",
        "There (near listener)",
        "Where"
      ],
      "correctAnswer": 0,
      "explanation": "あそこ represents a place distant from both speakers.",
      "romaji": "asoko = [ ? ]."
    },
    {
      "id": "l10-q7",
      "type": "error-hunt",
      "prompt": "Which sentence violates the demonstrative grammar rules?",
      "options": [
        "この ほん は おもしろい です。",
        "これ ほん は たなかさん の です。",
        "そこ に ねこ が います。",
        "どれ が あなた の くるま です か？"
      ],
      "correctAnswer": 1,
      "explanation": "'これ ほん' is invalid grammar; you must use 'この ほん'.",
      "romajiOptions": [
        "kono hon wa omoshiroi desu.",
        "kore hon wa tanaka-san no desu.",
        "soko ni neko ga imasu.",
        "dore ga anata no kuruma desu ka?"
      ]
    },
    {
      "id": "l10-q8",
      "type": "multiple-choice",
      "prompt": "What is the polite/formal directional version of 'ここ' (here)?",
      "question": "What is the polite/formal directional version of 'ここ' (here)?",
      "options": [
        "こちら",
        "そちら",
        "あちら",
        "どちら"
      ],
      "correctAnswer": 0,
      "explanation": "'こちら' (kochira) is the polite equivalent of ここ.",
      "romajiOptions": [
        "kochira",
        "sochira",
        "achira",
        "dochira"
      ]
    },
    {
      "id": "l10-q9",
      "type": "word-bank",
      "prompt": "Build: 'This is a delicious restaurant.'",
      "targetEn": "This is a delicious restaurant.",
      "chips": [
        "ここ",
        "は",
        "おいしい",
        "レストラン",
        "です",
        "これ",
        "そこ"
      ],
      "correctOrder": [
        "ここ",
        "は",
        "おいしい",
        "レストラン",
        "です"
      ],
      "explanation": "'ここ は おいしい レストラン です' refers to this location.",
      "romaji": "koko wa oishii resutoran desu"
    },
    {
      "id": "l10-q10",
      "type": "fill-blank",
      "prompt": "Which word connects directly to a noun to ask \"Which person?\"",
      "sentence": "___ ひと です か？",
      "blankWord": "どの",
      "options": [
        "どの",
        "どれ",
        "どこ",
        "これ"
      ],
      "correctAnswer": 0,
      "explanation": "'どの' must be used immediately before a noun ('どの ひと').",
      "romaji": "[ ? ] hito desu ka?"
    }
  ]
};

export const lessonMeta = {
  "id": "demonstratives-kore-sore-are",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Demonstratives (Ko-So-A-Do System)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-core"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
