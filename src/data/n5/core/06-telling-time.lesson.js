// JLPT N5 Lesson Module
export const lesson = {
  "id": "telling-time",
  "number": 6,
  "title": "JLPT N5: Telling time in Japanese - hours, minutes",
  "shortTitle": "Telling Time (Hours & Minutes)",
  "subtitle": "Ask and express exact clock times, half hours, and durations.",
  "description": "Learn hour markers (～じ), minute counters (～ふん/～ぷん), half-past (～はん), asking \"what time\" (なんじ), and duration (～じかん).",
  "sections": [
    {
      "title": "1. Hours (時 - じ) & Three Irregulars",
      "content": "Attach じ (ji) to numbers. Beware of three irregular readings:\n  4:00 -> よじ (yoji) - NEVER 'yonji' or 'shiji'!\n  7:00 -> しちじ (shichiji) - prefer shichiji over nanaji\n  9:00 -> くじ (kuji) - NEVER 'kyuuji'!",
      "table": {
        "headers": [
          "Hour",
          "Japanese",
          "Romaji",
          "Special Rule"
        ],
        "rows": [
          [
            "1:00",
            "いちじ",
            "ichiji",
            "Regular"
          ],
          [
            "4:00",
            "よじ",
            "yoji",
            "IRREGULAR (よ)"
          ],
          [
            "7:00",
            "しちじ",
            "shichiji",
            "IRREGULAR (しち)"
          ],
          [
            "9:00",
            "くじ",
            "kuji",
            "IRREGULAR (く)"
          ],
          [
            "12:00",
            "じゅうにじ",
            "juuniji",
            "Regular"
          ]
        ]
      }
    },
    {
      "title": "2. Minutes (分 - ふん / ぷん) & Half Past (半 - はん)",
      "content": "Minutes fluctuate between ふん (fun) and ぷん (pun). Half-past is expressed with はん (han).\nPoint in Time vs Duration:\n  さんじ (3:00) = Point in time\n  さんじかん (3 hours) = Duration",
      "examples": [
        {
          "jp": "いま なんじ です か？",
          "romaji": "Ima nanji desu ka.",
          "en": "What time is it right now?"
        },
        {
          "jp": "いま は にじ はん です。",
          "romaji": "Ima wa niji han desu.",
          "en": "It is 2:30 right now."
        },
        {
          "jp": "まいにち はちじかん ねます。",
          "romaji": "Mainichi hachijikan nemasu.",
          "en": "I sleep for 8 hours every day."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l6-q1",
      "type": "multiple-choice",
      "prompt": "How is 4:00 o'clock pronounced in Japanese?",
      "question": "How is 4:00 o'clock pronounced in Japanese?",
      "options": [
        "よじ",
        "よんじ",
        "しじ",
        "よんじかん"
      ],
      "correctAnswer": 0,
      "explanation": "4:00 is strictly 'よじ' (yoji). 'よんじ' and 'しじ' are incorrect.",
      "romajiOptions": [
        "yoji",
        "yonji",
        "shiji",
        "yonjikan"
      ]
    },
    {
      "id": "l6-q2",
      "type": "word-bank",
      "prompt": "Build: 'It is 2:30 right now.'",
      "targetEn": "It is 2:30 right now.",
      "chips": [
        "いま",
        "は",
        "にじ",
        "はん",
        "です",
        "よじ",
        "ぷん"
      ],
      "correctOrder": [
        "いま",
        "は",
        "にじ",
        "はん",
        "です"
      ],
      "explanation": "いま (now) + は + にじ (2:00) + はん (half past) + です.",
      "romaji": "ima wa niji han desu"
    },
    {
      "id": "l6-q3",
      "type": "fill-blank",
      "prompt": "Choose the standard pronunciation for 7:00 o'clock.",
      "sentence": "7:00 は ___ と よみます。",
      "blankWord": "しちじ",
      "options": [
        "しちじ",
        "ななじ",
        "しじ",
        "くじ"
      ],
      "correctAnswer": 0,
      "explanation": "7:00 is standardly pronounced 'しちじ' (shichiji).",
      "romaji": "7:00 wa [ ? ] to yomimasu."
    },
    {
      "id": "l6-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the matching time.",
      "audioText": "いま は くじ じゅっぷん です。",
      "options": [
        "9:10",
        "9:20",
        "4:10",
        "7:10"
      ],
      "correctAnswer": 0,
      "explanation": "'くじ' (9:00) + 'じゅっぷん' (10 minutes) = 9:10.",
      "romaji": "ima wa kuji juppun desu."
    },
    {
      "id": "l6-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'I studied for 3 hours.'",
      "targetEn": "I studied for 3 hours.",
      "chips": [
        "さんじかん",
        "べんきょう",
        "しました",
        "さんじ",
        "ふん"
      ],
      "correctOrder": [
        "さんじかん",
        "べんきょう",
        "しました"
      ],
      "explanation": "'さんじかん' denotes duration (3 hours).",
      "romaji": "sanjikan benkyou shimashita"
    },
    {
      "id": "l6-q6",
      "type": "fill-blank",
      "prompt": "Choose the correct reading for 9:00 o'clock.",
      "sentence": "9:00 は ___ と よみます。",
      "blankWord": "くじ",
      "options": [
        "くじ",
        "きゅうじ",
        "こじ",
        "しちじ"
      ],
      "correctAnswer": 0,
      "explanation": "9:00 is read as 'くじ' (kuji), NEVER 'きゅうじ'.",
      "romaji": "9:00 wa [ ? ] to yomimasu."
    },
    {
      "id": "l6-q7",
      "type": "error-hunt",
      "prompt": "Which hour pronunciation is INCORRECT?",
      "options": [
        "1:00 -> いちじ",
        "4:00 -> よんじ",
        "7:00 -> しちじ",
        "9:00 -> くじ"
      ],
      "correctAnswer": 1,
      "explanation": "4:00 must be 'よじ' (yoji), not 'よんじ'.",
      "romajiOptions": [
        "1:00 -> ichiji",
        "4:00 -> yonji",
        "7:00 -> shichiji",
        "9:00 -> kuji"
      ]
    },
    {
      "id": "l6-q8",
      "type": "multiple-choice",
      "prompt": "What is the difference between 'さんじ' and 'さんじかん'?",
      "question": "What is the difference between 'さんじ' and 'さんじかん'?",
      "options": [
        "さんじ is a point in time (3:00); さんじかん is a duration (3 hours).",
        "さんじ is formal; さんじかん is informal.",
        "さんじ means 3:00 AM; さんじかん means 3:00 PM.",
        "There is no difference."
      ],
      "correctAnswer": 0,
      "explanation": "Adding 間 (かん) turns clock time into elapsed duration.",
      "romajiOptions": [
        "sanji is a point in time (3:00); sanjikan is a duration (3 hours).",
        "sanji is formal; sanjikan is informal.",
        "sanji means 3:00 AM; sanjikan means 3:00 PM.",
        "There is no difference."
      ]
    },
    {
      "id": "l6-q9",
      "type": "word-bank",
      "prompt": "Build: 'It is 8:15.'",
      "targetEn": "It is 8:15.",
      "chips": [
        "はちじ",
        "じゅうごふん",
        "です",
        "はっせん",
        "じかん"
      ],
      "correctOrder": [
        "はちじ",
        "じゅうごふん",
        "です"
      ],
      "explanation": "8:00 (はちじ) + 15 min (じゅうごふん) + です.",
      "romaji": "hachiji juugofun desu"
    },
    {
      "id": "l6-q10",
      "type": "fill-blank",
      "prompt": "Select the word for \"half past\" (30 minutes).",
      "sentence": "30ぷん は さんじゅっぷん または ___ と よびます。",
      "blankWord": "はん",
      "options": [
        "はん",
        "まえ",
        "すぎ",
        "じかん"
      ],
      "correctAnswer": 0,
      "explanation": "'はん' (半) means half past.",
      "romaji": "30-pun wa sanjuppun matawa [ ? ] to yobimasu."
    }
  ]
};

export const lessonMeta = {
  "id": "telling-time",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Telling Time (Hours & Minutes)"
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
