// JLPT N5 Lesson Module
export const lesson = {
  "id": "calendar-dates",
  "number": 7,
  "title": "JLPT N5: Calendar dates in Japanese",
  "shortTitle": "Calendar Dates (Days & Months)",
  "subtitle": "Days of the week, months of the year, and tricky irregular date numbers.",
  "description": "Learn the days of the week (～ようび), months (～がつ), and the famous irregular 1st to 10th, 14th, 20th, and 24th days of the month.",
  "sections": [
    {
      "title": "1. Days of the Week (～ようび)",
      "table": {
        "headers": [
          "Day",
          "Japanese",
          "Element Meaning"
        ],
        "rows": [
          [
            "Monday",
            "げつようび (getsuyoubi)",
            "Moon (月)"
          ],
          [
            "Tuesday",
            "かようび (kayoubi)",
            "Fire (火)"
          ],
          [
            "Wednesday",
            "すいようび (suiyoubi)",
            "Water (水)"
          ],
          [
            "Thursday",
            "もくようび (mokuyoubi)",
            "Wood / Tree (木)"
          ],
          [
            "Friday",
            "きんようび (kinyoubi)",
            "Gold / Metal (金)"
          ],
          [
            "Saturday",
            "どようび (doyoubi)",
            "Earth / Soil (土)"
          ],
          [
            "Sunday",
            "にちようび (nichiyoubi)",
            "Sun (日)"
          ]
        ]
      }
    },
    {
      "title": "2. Irregular Days of the Month (1st–10th, 14th, 20th, 24th)",
      "content": "Days 1 through 10 use unique native Japanese counters rather than Chinese numerals:\n  1st: ついたち (tsuitachi)    6th: むいか (muika)\n  2nd: ふつか (futsuka)        7th: なのか (nanoka)\n  3rd: みっか (mikka)          8th: ようか (youka)\n  4th: よっか (yokka)          9th: ここのか (kokonoka)\n  5th: いつか (itsuka)        10th: とおか (tooka)\nSpecial Irregulars:\n  14th: じゅうよっか (juuyokka)\n  20th: はつか (hatsuka)\n  24th: にじゅうよっか (nijuuyokka)\nRegular Days (11th onward):\n  From the 11th onward, use number + にち (e.g. 11th = じゅういちにち, 12th = じゅうににち, 13th = じゅうさんにち).",
      "examples": [
        {
          "jp": "きょう は ごがつ いつか です。",
          "romaji": "Kyou wa gogatsu itsuka desu.",
          "en": "Today is May 5th."
        },
        {
          "jp": "たんじょうび は はつか です。",
          "romaji": "Tanjoubi wa hatsuka desu.",
          "en": "My birthday is the 20th."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l7-q1",
      "type": "multiple-choice",
      "prompt": "How do you say the 1st day of the month in Japanese?",
      "question": "How do you say the 1st day of the month in Japanese?",
      "options": [
        "ついたち",
        "いちにち",
        "ふつか",
        "ひとつ"
      ],
      "correctAnswer": 0,
      "explanation": "The 1st day is 'ついたち' (tsuitachi).",
      "romajiOptions": [
        "tsuitachi",
        "ichinichi",
        "futsuka",
        "hitotsu"
      ]
    },
    {
      "id": "l7-q2",
      "type": "word-bank",
      "prompt": "Build: 'Today is May 5th.'",
      "targetEn": "Today is May 5th.",
      "chips": [
        "きょう",
        "は",
        "ごがつ",
        "いつか",
        "です",
        "よっか",
        "むいか"
      ],
      "correctOrder": [
        "きょう",
        "は",
        "ごがつ",
        "いつか",
        "です"
      ],
      "explanation": "ごがつ (May) + いつか (5th) + です.",
      "romaji": "kyou wa gogatsu itsuka desu"
    },
    {
      "id": "l7-q3",
      "type": "fill-blank",
      "prompt": "The 20th day of the month has a unique native name.",
      "sentence": "20にち は ___ と よびます。",
      "blankWord": "はつか",
      "options": [
        "はつか",
        "にじゅうにち",
        "にじゅっか",
        "はつひ"
      ],
      "correctAnswer": 0,
      "explanation": "The 20th is uniquely called 'はつか' (hatsuka).",
      "romaji": "20-nichi wa [ ? ] to yobimasu."
    },
    {
      "id": "l7-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English day.",
      "audioText": "あした は にちようび です。",
      "options": [
        "Tomorrow is Sunday.",
        "Tomorrow is Saturday.",
        "Today is Sunday.",
        "Yesterday was Sunday."
      ],
      "correctAnswer": 0,
      "explanation": "'にちようび' means Sunday.",
      "romaji": "ashita wa nichiyoubi desu."
    },
    {
      "id": "l7-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'The 14th day of the month'",
      "targetEn": "The 14th day of the month",
      "chips": [
        "じゅうよっか",
        "じゅうよんにち",
        "じゅうしちにち",
        "じゅういつか"
      ],
      "correctOrder": [
        "じゅうよっか"
      ],
      "explanation": "14th is 'じゅうよっか' (juuyokka).",
      "romaji": "juuyokka"
    },
    {
      "id": "l7-q6",
      "type": "fill-blank",
      "prompt": "Wednesday represents water (水).",
      "sentence": "すいようび は ___ようび です。",
      "blankWord": "すい",
      "options": [
        "すい",
        "か",
        "もく",
        "きん"
      ],
      "correctAnswer": 0,
      "explanation": "Wednesday is 'すいようび' (水曜日).",
      "romaji": "suiyoubi wa [ ? ]-youbi desu."
    },
    {
      "id": "l7-q7",
      "type": "error-hunt",
      "prompt": "Which calendar date reading is INCORRECT?",
      "options": [
        "1st -> ついたち",
        "4th -> よっか",
        "8th -> はちにち",
        "10th -> とおか"
      ],
      "correctAnswer": 2,
      "explanation": "The 8th day is 'ようか' (youka), NOT 'はちにち'.",
      "romajiOptions": [
        "1st -> tsuitachi",
        "4th -> yokka",
        "8th -> hachinichi",
        "10th -> tooka"
      ]
    },
    {
      "id": "l7-q8",
      "type": "multiple-choice",
      "prompt": "What day of the week is 'げつようび'?",
      "question": "What day of the week is 'げつようび'?",
      "options": [
        "Monday",
        "Tuesday",
        "Sunday",
        "Friday"
      ],
      "correctAnswer": 0,
      "explanation": "'げつようび' (月曜日) is Monday."
    },
    {
      "id": "l7-q9",
      "type": "word-bank",
      "prompt": "Build: 'My birthday is April 24th.'",
      "targetEn": "My birthday is April 24th.",
      "chips": [
        "たんじょうび",
        "は",
        "しがつ",
        "にじゅうよっか",
        "です",
        "よんにち",
        "ごがつ"
      ],
      "correctOrder": [
        "たんじょうび",
        "は",
        "しがつ",
        "にじゅうよっか",
        "です"
      ],
      "explanation": "たんじょうび (birthday) + は + しがつ (April) + にじゅうよっか (24th) + です.",
      "romaji": "tanjoubi wa shigatsu nijuuyokka desu"
    },
    {
      "id": "l7-q10",
      "type": "fill-blank",
      "prompt": "April (Month 4) is pronounced with し, not よん.",
      "sentence": "4がつ は ___がつ と よみます。",
      "blankWord": "し",
      "options": [
        "し",
        "よん",
        "よ",
        "ろく"
      ],
      "correctAnswer": 0,
      "explanation": "April is read as 'しがつ' (四月).",
      "romaji": "4-gatsu wa [ ? ]-gatsu to yomimasu."
    }
  ]
};

export const lessonMeta = {
  "id": "calendar-dates",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Calendar Dates (Days & Months)"
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
