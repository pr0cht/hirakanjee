// JLPT N4 Lesson Module
export const lesson = {
  "id": "temporal-words",
  "number": 3,
  "title": "JLPT N5: Japanese temporal words - yesterday, today, tomorrow, etc.",
  "shortTitle": "Temporal Words (Days, Weeks, Months)",
  "subtitle": "Express time frames across days, weeks, months, and years.",
  "description": "Master essential time adverbs: きのう, きょう, あした, おととい, あさって, along with weekly, monthly, and yearly cycles (今, 先, 来).",
  "sections": [
    {
      "title": "1. Daily Time Words",
      "content": "Master the 5-day cycle centered around \"today\":",
      "table": {
        "headers": [
          "Relative Day",
          "Japanese",
          "Romaji",
          "English"
        ],
        "rows": [
          [
            "Day Before Yesterday (-2)",
            "おととい",
            "ototoi",
            "The day before yesterday"
          ],
          [
            "Yesterday (-1)",
            "きのう",
            "kinou",
            "Yesterday"
          ],
          [
            "Today (0)",
            "きょう",
            "kyou",
            "Today"
          ],
          [
            "Tomorrow (+1)",
            "あした",
            "ashita",
            "Tomorrow"
          ],
          [
            "Day After Tomorrow (+2)",
            "あさって",
            "asatte",
            "The day after tomorrow"
          ]
        ]
      },
      "examples": [
        {
          "jp": "きょう は すいようび です。",
          "romaji": "Kyou wa suiyoubi desu.",
          "en": "Today is Wednesday."
        },
        {
          "jp": "きのう は あめ でした。",
          "romaji": "Kinou wa ame deshita.",
          "en": "Yesterday was rainy."
        },
        {
          "jp": "あした は やすみ です。",
          "romaji": "Ashita wa yasumi desu.",
          "en": "Tomorrow is a holiday."
        }
      ]
    },
    {
      "title": "2. Recurring Cycles: Week, Month, Year",
      "content": "Notice the pattern prefixes:\n  先 (せん, sen) = Last / Previous\n  今 (こん, kon) = This / Current\n  来 (らい, rai) = Next / Upcoming",
      "table": {
        "headers": [
          "Cycle",
          "Last (先)",
          "This (今)",
          "Next (来)"
        ],
        "rows": [
          [
            "Week (週 - しゅう)",
            "せんしゅう (senshuu)",
            "こんしゅう (konshuu)",
            "らいしゅう (raishuu)"
          ],
          [
            "Month (月 - げつ)",
            "せんげつ (sengetsu)",
            "こんげつ (kongetsu)",
            "らいげつ (raigetsu)"
          ],
          [
            "Year (年 - ねん)",
            "きょねん (kyonen)*",
            "ことし (kotoshi)*",
            "らいねん (rainen)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "こんしゅう は いそがしい です。",
          "romaji": "Konshuu wa isogashii desu.",
          "en": "This week is busy."
        },
        {
          "jp": "らいねん にほん へ いきます。",
          "romaji": "Rainen nihon e ikimasu.",
          "en": "Next year I will go to Japan."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l3-q1",
      "type": "multiple-choice",
      "prompt": "What is the Japanese word for 'the day before yesterday'?",
      "question": "What is the Japanese word for 'the day before yesterday'?",
      "options": [
        "おととい",
        "きのう",
        "あさって",
        "きょう"
      ],
      "correctAnswer": 0,
      "explanation": "'おととい' (ototoi) means the day before yesterday (-2 days).",
      "romajiOptions": [
        "ototoi",
        "kinou",
        "asatte",
        "kyou"
      ]
    },
    {
      "id": "l3-q2",
      "type": "word-bank",
      "prompt": "Build: 'Tomorrow is a holiday.'",
      "targetEn": "Tomorrow is a holiday.",
      "chips": [
        "あした",
        "は",
        "やすみ",
        "です",
        "きのう",
        "でした"
      ],
      "correctOrder": [
        "あした",
        "は",
        "やすみ",
        "です"
      ],
      "explanation": "'あした' (tomorrow) + 'は' + 'やすみ' (holiday/day off) + 'です'.",
      "romaji": "ashita wa yasumi desu"
    },
    {
      "id": "l3-q3",
      "type": "fill-blank",
      "prompt": "Choose the correct temporal word: \"___ was Friday.\"",
      "sentence": "___ は きんようび でした。",
      "blankWord": "きのう",
      "options": [
        "きのう",
        "きょう",
        "あした",
        "あさって"
      ],
      "correctAnswer": 0,
      "explanation": "'でした' indicates past tense; 'きのう' (yesterday) matches the past.",
      "romaji": "[ ? ] wa kinyoubi deshita."
    },
    {
      "id": "l3-q4",
      "type": "audio-listening",
      "prompt": "Listen and identify the translation.",
      "audioText": "こんしゅう は いそがしい です。",
      "options": [
        "This week is busy.",
        "Last week was busy.",
        "Next week will be busy.",
        "Today is busy."
      ],
      "correctAnswer": 0,
      "explanation": "'こんしゅう' means 'this week'.",
      "romaji": "konshuu wa isogashii desu."
    },
    {
      "id": "l3-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'The day after tomorrow is Sunday.'",
      "targetEn": "The day after tomorrow is Sunday.",
      "chips": [
        "あさって",
        "は",
        "にちようび",
        "です",
        "おととい",
        "せんしゅう"
      ],
      "correctOrder": [
        "あさって",
        "は",
        "にちようび",
        "です"
      ],
      "explanation": "'あさって' is the day after tomorrow.",
      "romaji": "asatte wa nichiyoubi desu"
    },
    {
      "id": "l3-q6",
      "type": "fill-blank",
      "prompt": "Ask what month next month is.",
      "sentence": "らいげつ は ___ がつ です か？",
      "blankWord": "なん",
      "options": [
        "なん",
        "なに",
        "いつ",
        "どこ"
      ],
      "correctAnswer": 0,
      "explanation": "Before counters like がつ (month), 'なん' is used ('なんがつ' = which month).",
      "romaji": "raigetsu wa [ ? ] gatsu desu ka?"
    },
    {
      "id": "l3-q7",
      "type": "error-hunt",
      "prompt": "Which sentence has a temporal and tense clash?",
      "options": [
        "きょう は もくようび です。",
        "あした は にちようび でした。",
        "せんしゅう は ひま でした。",
        "きょねん は にほん に いました。"
      ],
      "correctAnswer": 1,
      "explanation": "'あした' (tomorrow) cannot end with the past tense 'でした'. It must be 'です'.",
      "romajiOptions": [
        "kyou wa mokuyoubi desu.",
        "ashita wa nichiyoubi deshita.",
        "senshuu wa hima deshita.",
        "kyonen wa nihon ni imashita."
      ]
    },
    {
      "id": "l3-q8",
      "type": "multiple-choice",
      "prompt": "How do you say 'last year' in Japanese?",
      "question": "How do you say 'last year' in Japanese?",
      "options": [
        "きょねん",
        "ことし",
        "らいねん",
        "せんねん"
      ],
      "correctAnswer": 0,
      "explanation": "'きょねん' (去年) is the irregular reading for last year (not 'せんねん').",
      "romajiOptions": [
        "kyonen",
        "kotoshi",
        "rainen",
        "sennen"
      ]
    },
    {
      "id": "l3-q9",
      "type": "word-bank",
      "prompt": "Build: 'Last week was not a day off.'",
      "targetEn": "Last week was not a day off.",
      "chips": [
        "せんしゅう",
        "は",
        "やすみ",
        "じゃありません",
        "でした",
        "らいしゅう",
        "です"
      ],
      "correctOrder": [
        "せんしゅう",
        "は",
        "やすみ",
        "じゃありません",
        "でした"
      ],
      "explanation": "せんしゅう (last week) + は + やすみ (day off) + じゃありません でした (was not).",
      "romaji": "senshuu wa yasumi ja arimasen deshita"
    },
    {
      "id": "l3-q10",
      "type": "fill-blank",
      "prompt": "Complete the sentence for \"This year is 2026.\"",
      "sentence": "___ は 2026ねん です。",
      "blankWord": "ことし",
      "options": [
        "ことし",
        "きょねん",
        "らいねん",
        "おととし"
      ],
      "correctAnswer": 0,
      "explanation": "'ことし' (今年) means 'this year'.",
      "romaji": "[ ? ] wa 2026-nen desu."
    }
  ]
};

export const lessonMeta = {
  "id": "temporal-words",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Temporal Words (Days, Weeks, Months)"
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
