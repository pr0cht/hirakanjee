// JLPT N5 Lesson Module
export const lesson = {
  "id": "special-fractions",
  "number": 1,
  "section": "special",
  "title": "Japanese Fractions & Portions: Hambun, 1/3, 2/3, 3/5",
  "shortTitle": "Fractions & Portions",
  "subtitle": "Learn how to express fractions, half (半分), decimals, and portions in Japanese.",
  "rules": [
    {
      "title": "The Fraction Formula: [Denominator] 分の [Numerator]",
      "formula": "[Denominator] ぶん の [Numerator] (e.g. 3分の1 = さんぶんのいち)",
      "explanation": "Japanese fraction order is the exact opposite of English: you state the denominator (the whole number of parts) first, followed by 分の (bun no = parts of), and then the numerator. For example, 1/3 is 3分の1 (さんぶんのいち = 1 part of 3)."
    },
    {
      "title": "Half: 半分 (はんぶん) vs 2分の1 (にぶんのいち)",
      "formula": "半分 (はんぶん) = Half / 50% | 2分の1 (にぶんのいち) = One half (mathematical fraction)",
      "explanation": "In daily life, \"half\" is almost always expressed with 半分 (はんぶん). You say \"ケーキを 半分 たべました\" (I ate half the cake) or \"これを 半分 ください\" (Please give me half of this). 2分の1 is used in mathematical or technical contexts."
    },
    {
      "title": "Decimals: 点 (てん)",
      "formula": "[Number] 点 (てん) [Decimal Digits] (e.g. 0.5 = れいてんご)",
      "explanation": "Decimal points are read as 点 (てん). Digits after the point are read individually: 0.5 is \"れいてんご\", 1.5 is \"いってんご\", and 3.14 is \"さんてんいちよん\"."
    },
    {
      "title": "Portions with Counters & Quantity",
      "formula": "[Total] の [Fraction] (e.g. クラス の 3分の2 = Two-thirds of the class)",
      "explanation": "To express a fraction of a specific group or item, link them with the particle の: \"ピザ の 4分の1\" (one quarter of the pizza), \"じかん の はんぶん\" (half of the time)."
    }
  ],
  "tables": [
    {
      "title": "Common Fractions in Japanese",
      "headers": [
        "Fraction",
        "Kanji / Japanese",
        "Hiragana Reading",
        "Romaji",
        "Meaning"
      ],
      "rows": [
        [
          "1/2",
          "半分",
          "はんぶん",
          "hanbun",
          "Half"
        ],
        [
          "1/2",
          "2分の1",
          "にぶんのいち",
          "nibun no ichi",
          "One half (math)"
        ],
        [
          "1/3",
          "3分の1",
          "さんぶんのいち",
          "sanbun no ichi",
          "One third"
        ],
        [
          "2/3",
          "3分の2",
          "さんぶんのに",
          "sanbun no ni",
          "Two thirds"
        ],
        [
          "1/4",
          "4分の1",
          "よんぶんのいち",
          "yonbun no ichi",
          "One quarter"
        ],
        [
          "3/4",
          "4分の3",
          "よんぶんのさん",
          "yonbun no san",
          "Three quarters"
        ],
        [
          "1/5",
          "5分の1",
          "ごぶんのいち",
          "gobun no ichi",
          "One fifth"
        ],
        [
          "3/5",
          "5分の3",
          "ごぶんのさん",
          "gobun no san",
          "Three fifths"
        ],
        [
          "0.5",
          "0.5",
          "れいてんご",
          "reitengo",
          "Zero point five"
        ],
        [
          "1.5",
          "1.5",
          "いってんご",
          "ittengo",
          "One point five"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "ケーキ を 半分 ください。",
      "romaji": "keeki o hanbun kudasai.",
      "en": "Please give me half of the cake."
    },
    {
      "ja": "しゅくだい の 3分の1 が おわりました。",
      "romaji": "shukudai no sanbun no ichi ga owarimashita.",
      "en": "One-third of my homework is finished."
    },
    {
      "ja": "りんご の 3分の2 が あかい です。",
      "romaji": "ringo no sanbun no ni ga akai desu.",
      "en": "Two-thirds of the apples are red."
    },
    {
      "ja": "ピザ を 4分の1 たべました。",
      "romaji": "piza o yonbun no ichi tabemashita.",
      "en": "I ate one-quarter of the pizza."
    }
  ],
  "quiz": [
    {
      "id": "frac-q1",
      "type": "fill-blank",
      "prompt": "Choose the correct reading for 1/3 (3分の1):",
      "options": [
        "さんぶんのいち",
        "いちぶんのさん",
        "さんぶんのさん",
        "よんぶんのいち"
      ],
      "correctAnswer": 0,
      "explanation": "1/3 is read denominator first: 3分の1 (さんぶんのいち)."
    },
    {
      "id": "frac-q2",
      "type": "multiple-choice",
      "prompt": "How do you say \"half\" in daily conversational Japanese?",
      "options": [
        "半分 (はんぶん)",
        "2分の1 (にぶんのいち)",
        "1分の2 (いちぶんのに)",
        "半日 (はんにち)"
      ],
      "correctAnswer": 0,
      "explanation": "半分 (はんぶん) is the natural everyday word for \"half\"."
    },
    {
      "id": "frac-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"Please give me half of the pizza.\"",
      "targetEn": "Please give me half of the pizza.",
      "chips": [
        "ピザ を",
        "半分",
        "ください",
        "3分の1"
      ],
      "correctAnswerSentence": "ピザ を 半分 ください",
      "explanation": "Use 半分 (hanbun) directly before ください."
    },
    {
      "id": "frac-q4",
      "type": "fill-blank",
      "prompt": "How is 2/3 written and read in Japanese?",
      "options": [
        "3分の2 (さんぶんのに)",
        "2分の3 (にぶんのさん)",
        "3分の1 (さんぶんのいち)",
        "2分の2 (にぶんのに)"
      ],
      "correctAnswer": 0,
      "explanation": "2/3 is [Denominator: 3] 分の [Numerator: 2] = 3分の2 (さんぶんのに)."
    },
    {
      "id": "frac-q5",
      "type": "audio-listening",
      "prompt": "Listen to the portion requested.",
      "audioText": "りんご を 半分 ください。",
      "options": [
        "Half of the apple",
        "One third of the apple",
        "Three apples",
        "Two apples"
      ],
      "correctAnswer": 0,
      "explanation": "The speaker said「りんご を 半分 ください」(Please give me half of the apple)."
    },
    {
      "id": "frac-q6",
      "type": "multiple-choice",
      "prompt": "What is 3/5 in Japanese?",
      "options": [
        "5分の3 (ごぶんのさん)",
        "3分の5 (さんぶんのご)",
        "5分の1 (ごぶんのいち)",
        "4分の3 (よんぶんのさん)"
      ],
      "correctAnswer": 0,
      "explanation": "3/5 has denominator 5 and numerator 3: 5分の3 (ごぶんのさん)."
    },
    {
      "id": "frac-q7",
      "type": "fill-blank",
      "prompt": "How do you read the decimal \"0.5\" in Japanese?",
      "options": [
        "れいてんご",
        "ぜろてんご",
        "いちてんご",
        "れいてんさん"
      ],
      "correctAnswer": 0,
      "explanation": "0.5 is standardly read as「れいてんご」(0 = れい, . = てん, 5 = ご)."
    },
    {
      "id": "frac-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"One-fourth of the class is absent.\"",
      "targetEn": "One-fourth of the class is absent.",
      "chips": [
        "クラス の",
        "4分の1 は",
        "やすみ です",
        "半分 は"
      ],
      "correctAnswerSentence": "クラス の 4分の1 は やすみ です",
      "explanation": "1/4 is 4分の1 (よんぶんのいち)."
    },
    {
      "id": "frac-q9",
      "type": "error-hunt",
      "prompt": "Spot the error in reading 1/4:",
      "options": [
        "4分の1 を「いちぶんのよん」と よみます。",
        "4分の1 を「よんぶんのいち」と よみます。",
        "半分 を「はんぶん」と よみます。",
        "3分の1 を「さんぶんのいち」と よみます。"
      ],
      "correctAnswer": 0,
      "explanation": "4分の1 is read denominator-first as「よんぶんのいち」, NOT「いちぶんのよん」."
    },
    {
      "id": "frac-q10",
      "type": "multiple-choice",
      "prompt": "Which fraction means \"three quarters\" (3/4)?",
      "options": [
        "4分の3 (よんぶんのさん)",
        "3分の4 (さんぶんのよん)",
        "4分の1 (よんぶんのいち)",
        "3分の2 (さんぶんのに)"
      ],
      "correctAnswer": 0,
      "explanation": "3/4 is 4分の3 (よんぶんのさん)."
    }
  ]
};

export const lessonMeta = {
  "id": "special-fractions",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Fractions & Portions"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-special"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
