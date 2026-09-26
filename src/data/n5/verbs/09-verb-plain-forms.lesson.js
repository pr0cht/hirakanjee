// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-plain-forms",
  "number": 9,
  "section": "verbs",
  "title": "Verb Plain Forms: Dictionary, Nai, Ta, Nakatta",
  "shortTitle": "Plain Forms",
  "subtitle": "Learn the 4 casual plain forms: dictionary form, negative (ない), past (た), and past negative (なかった).",
  "rules": [
    {
      "title": "The 4 Quadrants of Plain Forms",
      "formula": "Present (+): Dictionary | Present (-): ない | Past (+): た | Past (-): なかった",
      "explanation": "Casual speech, relative clauses, and advanced grammar patterns use plain forms rather than ます. The 4 base forms are: たべる (eats), たべない (does not eat), たべた (ate), たべなかった (did not eat)."
    },
    {
      "title": "Nai-Form (~ない) Conjugation",
      "formula": "Group 1: change ~u to ~a + ない (う becomes わ!) | Group 2: drop ~る + ない | する -> しない, くる -> こない",
      "explanation": "Group 1 shifts to the \"a\" row: かく -> かかない, のむ -> のまない. Crucial rule: Verbs ending in plain う become わない (かう -> かわない, not かあない). Group 3: する -> しない, くる -> こない."
    },
    {
      "title": "Ta-Form (~た) Follows Te-Form",
      "formula": "Exactly the same sound changes as the Te-form: て -> た, で -> だ",
      "explanation": "If you know the Te-form, you know the Ta-form! たべて -> たべた, のんで -> のんだ, かって -> かった, いって -> いった."
    }
  ],
  "tables": [
    {
      "title": "Plain Forms Master Chart",
      "headers": [
        "Verb",
        "Dictionary (~u)",
        "Negative (~ない)",
        "Past (~た)",
        "Past Negative (~なかった)"
      ],
      "rows": [
        [
          "かう (buy)",
          "かう",
          "かわない",
          "かった",
          "かわなかった"
        ],
        [
          "まつ (wait)",
          "まつ",
          "またない",
          "まった",
          "またなかった"
        ],
        [
          "のむ (drink)",
          "のむ",
          "のまない",
          "のんだ",
          "のまなかった"
        ],
        [
          "かく (write)",
          "かく",
          "かかない",
          "かいた",
          "かなかた"
        ],
        [
          "はなす (speak)",
          "はなす",
          "はなさない",
          "はなした",
          "はなさなかった"
        ],
        [
          "いく (go)",
          "いく",
          "いかない",
          "いった",
          "いかなかった"
        ],
        [
          "たべる (eat)",
          "たべる",
          "たべない",
          "たべた",
          "たべなかった"
        ],
        [
          "みる (see)",
          "みる",
          "みない",
          "みた",
          "みなかった"
        ],
        [
          "する (do)",
          "する",
          "しない",
          "した",
          "しなかった"
        ],
        [
          "くる (come)",
          "くる",
          "こない",
          "きた",
          "こなかった"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "あした ともだち と あう。",
      "romaji": "ashita tomodachi to au.",
      "en": "I will meet a friend tomorrow (casual)."
    },
    {
      "ja": "きのう なにも たべなかった。",
      "romaji": "kinou nanimo tabenakatta.",
      "en": "I didn't eat anything yesterday (casual)."
    },
    {
      "ja": "その えいが を もう みた？",
      "romaji": "sono eiga o mou mita?",
      "en": "Did you already see that movie? (casual)."
    },
    {
      "ja": "きょう は がっこう に いかない。",
      "romaji": "kyou wa gakkou ni ikanai.",
      "en": "I will not go to school today (casual)."
    }
  ],
  "quiz": [
    {
      "id": "verb9-q1",
      "type": "multiple-choice",
      "prompt": "What is the plain negative form of かう (to buy)?",
      "question": "What is the plain negative form of かう (to buy)?",
      "options": [
        "かわない",
        "かあない",
        "かかない",
        "かいない"
      ],
      "correctAnswer": 0,
      "explanation": "Group 1 verbs ending in う change to わ before ない: かわない."
    },
    {
      "id": "verb9-q2",
      "type": "fill-blank",
      "prompt": "Convert to plain past: \"のむ (drink) -> [ ? ]\"",
      "options": [
        "のんだ",
        "のた",
        "のった",
        "のみた"
      ],
      "correctAnswer": 0,
      "explanation": "Like のんで, the plain past form is のんだ."
    },
    {
      "id": "verb9-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"I didn't eat anything yesterday (casual).\"",
      "targetEn": "I didn't eat anything yesterday (casual).",
      "chips": [
        "きのう",
        "なにも",
        "たべなかった",
        "たべない",
        "でした"
      ],
      "correctAnswerSentence": "きのう なにも たべなかった",
      "explanation": "Past negative plain form of たべる is たべなかった."
    },
    {
      "id": "verb9-q4",
      "type": "error-hunt",
      "prompt": "Which verb conjugation has an incorrect negative form?",
      "options": [
        "くる -> きない",
        "くる -> こない",
        "する -> しない",
        "いく -> いかない"
      ],
      "correctAnswer": 0,
      "explanation": "くる is irregular; its negative form is こない, NEVER \"きない\".",
      "romajiOptions": [
        "kuru -> kinai",
        "kuru -> konai",
        "suru -> shinai",
        "iku -> ikanai"
      ]
    },
    {
      "id": "verb9-q5",
      "type": "multiple-choice",
      "prompt": "What is the plain past form of the irregular verb いく (to go)?",
      "question": "What is the plain past form of the irregular verb いく (to go)?",
      "options": [
        "いった",
        "いいた",
        "いきいた",
        "いくだ"
      ],
      "correctAnswer": 0,
      "explanation": "いく conjugates to いった in plain past."
    },
    {
      "id": "verb9-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I don't know (casual).\" -> \"しら [ ? ]。\"",
      "options": [
        "ない",
        "ぬ",
        "ます",
        "た"
      ],
      "correctAnswer": 0,
      "explanation": "しる (Group 1) -> しらない (don't know)."
    },
    {
      "id": "verb9-q7",
      "type": "audio-listening",
      "prompt": "Listen to the casual statement and choose the meaning.",
      "audioText": "きのう たくさん べんきょうした。",
      "options": [
        "I studied a lot yesterday.",
        "I did not study yesterday.",
        "I will study tomorrow.",
        "I am studying now."
      ],
      "correctAnswer": 0,
      "explanation": "べんきょうした is casual plain past of べんきょうしました."
    },
    {
      "id": "verb9-q8",
      "type": "multiple-choice",
      "prompt": "What is the plain past negative form of まつ (to wait)?",
      "question": "What is the plain past negative form of まつ (to wait)?",
      "options": [
        "またなかった",
        "まちなかった",
        "まったなかった",
        "またなかった"
      ],
      "correctAnswer": 0,
      "explanation": "まつ -> negative またない -> past negative またなかった."
    },
    {
      "id": "verb9-q9",
      "type": "fill-blank",
      "prompt": "Choose the plain form: \"あした とうきょう へ [ ? ]。\" (will go - casual)",
      "options": [
        "いく",
        "いきます",
        "いった",
        "いかない"
      ],
      "correctAnswer": 0,
      "explanation": "Plain present future form is the dictionary form いく."
    },
    {
      "id": "verb9-q10",
      "type": "word-bank",
      "prompt": "Assemble: \"Did you already see that movie? (casual)\"",
      "targetEn": "Did you already see that movie? (casual)",
      "chips": [
        "その",
        "えいが",
        "もう",
        "みた？",
        "みない？",
        "を"
      ],
      "correctAnswerSentence": "その えいが もう みた？",
      "explanation": "みる plain past is みた？."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-plain-forms",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Plain Forms"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-verbs"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
