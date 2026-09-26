// JLPT N5 Lesson Module
export const lesson = {
  "id": "frequency-words",
  "number": 9,
  "title": "JLPT N5: Frequency words - always, usually, often, sometimes, never",
  "shortTitle": "Frequency Words (Always, Often, Sometimes)",
  "subtitle": "Express routine frequencies and mandatory negative pairings.",
  "description": "Learn the frequency spectrum: いつも (always), よく (often), ときどき (sometimes), あまり (rarely/not much + negative), and ぜんぜん (never + negative).",
  "sections": [
    {
      "title": "1. The Frequency Spectrum & Polarity Rules",
      "content": "Crucial Rule:\n  あまり (not much) and ぜんぜん (not at all / never) MUST ALWAYS be paired with a NEGATIVE predicate!",
      "table": {
        "headers": [
          "Frequency",
          "Japanese",
          "Romaji",
          "Required Predicate"
        ],
        "rows": [
          [
            "100% Always",
            "いつも",
            "itsumo",
            "Affirmative"
          ],
          [
            "80% Often / Well",
            "よく",
            "yoku",
            "Affirmative"
          ],
          [
            "50% Sometimes",
            "ときどき",
            "tokidoki",
            "Affirmative"
          ],
          [
            "20% Not much / Rarely",
            "あまり",
            "amari",
            "NEGATIVE ONLY"
          ],
          [
            "0% Never / Not at all",
            "ぜんぜん",
            "zenzen",
            "NEGATIVE ONLY"
          ]
        ]
      },
      "examples": [
        {
          "jp": "わたし は いつも あさごはん を たべます。",
          "romaji": "Watashi wa itsumo asagohan o tabemasu.",
          "en": "I always eat breakfast."
        },
        {
          "jp": "あまり おさけ を のみません。",
          "romaji": "Amari osake o nomimasen.",
          "en": "I rarely drink alcohol."
        },
        {
          "jp": "ぜんぜん わかりません。",
          "romaji": "Zenzen wakarimasen.",
          "en": "I do not understand at all."
        }
      ]
    },
    {
      "title": "2. Periodic \"Every...\" (毎 - まい)",
      "content": "Prefix まい (mai) to express regular frequency intervals:\n  まいにち (every day), まいあさ (every morning), まいばん (every night), まいしゅう (every week), まいつき (every month), まいとし (every year)."
    }
  ],
  "quiz": [
    {
      "id": "l9-q1",
      "type": "multiple-choice",
      "prompt": "Which frequency word MUST be paired with a negative verb?",
      "question": "Which frequency word MUST be paired with a negative verb?",
      "options": [
        "ぜんぜん",
        "いつも",
        "よく",
        "ときどき"
      ],
      "correctAnswer": 0,
      "explanation": "'ぜんぜん' (not at all / never) requires a negative predicate (e.g. ぜんぜん たべません).",
      "romajiOptions": [
        "zenzen",
        "itsumo",
        "yoku",
        "tokidoki"
      ]
    },
    {
      "id": "l9-q2",
      "type": "word-bank",
      "prompt": "Build: 'I always eat breakfast.'",
      "targetEn": "I always eat breakfast.",
      "chips": [
        "わたし",
        "は",
        "いつも",
        "あさごはん",
        "を",
        "たべます",
        "ときどき",
        "ぜんぜん"
      ],
      "correctOrder": [
        "わたし",
        "は",
        "いつも",
        "あさごはん",
        "を",
        "たべます"
      ],
      "explanation": "'いつも' (always) sits before the object/verb.",
      "romaji": "watashi wa itsumo asagohan o tabemasu"
    },
    {
      "id": "l9-q3",
      "type": "fill-blank",
      "prompt": "Complete for \"I rarely/hardly drink alcohol.\"",
      "sentence": "わたし は おさけ を ___ のみません。",
      "blankWord": "あまり",
      "options": [
        "あまり",
        "いつも",
        "よく",
        "ときどき"
      ],
      "correctAnswer": 0,
      "explanation": "'あまり' + negative verb expresses 'rarely / not much'.",
      "romaji": "watashi wa osake o [ ? ] nomimasen."
    },
    {
      "id": "l9-q4",
      "type": "audio-listening",
      "prompt": "Listen and identify the habit.",
      "audioText": "まいあさ コーヒー を のみます。",
      "options": [
        "I drink coffee every morning.",
        "I drink coffee every night.",
        "I rarely drink coffee.",
        "I drink tea every morning."
      ],
      "correctAnswer": 0,
      "explanation": "'まいあさ' (every morning) + 'コーヒー を のみます'.",
      "romaji": "maiasa koohii o nomimasu."
    },
    {
      "id": "l9-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'I never watch television.'",
      "targetEn": "I never watch television.",
      "chips": [
        "テレビ",
        "を",
        "ぜんぜん",
        "みません",
        "よく",
        "みます"
      ],
      "correctOrder": [
        "テレビ",
        "を",
        "ぜんぜん",
        "みません"
      ],
      "explanation": "'ぜんぜん' + 'みません' = never watch.",
      "romaji": "terebi o zenzen mimasen"
    },
    {
      "id": "l9-q6",
      "type": "fill-blank",
      "prompt": "Say: \"Mr. Tanaka often goes to the library.\"",
      "sentence": "たなかさん は ___ としょかん へ いきます。",
      "blankWord": "よく",
      "options": [
        "よく",
        "ぜんぜん",
        "あまり",
        "いつもは"
      ],
      "correctAnswer": 0,
      "explanation": "'よく' means 'often / frequently'.",
      "romaji": "tanaka-san wa [ ? ] toshokan e ikimasu."
    },
    {
      "id": "l9-q7",
      "type": "error-hunt",
      "prompt": "Which sentence has a frequency and polarity mismatch error?",
      "options": [
        "いつも あさ 7じ に おきます。",
        "ぜんぜん にほんご を はなします。",
        "ときどき えいが を みます。",
        "あまり おにく を たべません。"
      ],
      "correctAnswer": 1,
      "explanation": "'ぜんぜん' cannot be paired with an affirmative verb ('はなします'). It must be 'はなしません'.",
      "romajiOptions": [
        "itsumo asa shichiji ni okimasu.",
        "zenzen nihongo o hanashimasu.",
        "tokidoki eiga o mimasu.",
        "amari oniku o tabemasen."
      ]
    },
    {
      "id": "l9-q8",
      "type": "multiple-choice",
      "prompt": "What does 'ときどき' mean?",
      "question": "What does 'ときどき' mean?",
      "options": [
        "Sometimes",
        "Always",
        "Never",
        "Rarely"
      ],
      "correctAnswer": 0,
      "explanation": "'ときどき' (時々) means sometimes."
    },
    {
      "id": "l9-q9",
      "type": "word-bank",
      "prompt": "Build: 'I study Japanese every day.'",
      "targetEn": "I study Japanese every day.",
      "chips": [
        "まいにち",
        "にほんご",
        "を",
        "べんきょう",
        "します",
        "ぜんぜん",
        "あまり"
      ],
      "correctOrder": [
        "まいにち",
        "にほんご",
        "を",
        "べんきょう",
        "します"
      ],
      "explanation": "'まいにち' means every day.",
      "romaji": "mainichi nihongo o benkyou shimasu"
    },
    {
      "id": "l9-q10",
      "type": "fill-blank",
      "prompt": "What does まいつき mean?",
      "sentence": "まいつき は 「Every ___」 の いみ です。",
      "blankWord": "Month",
      "options": [
        "Month",
        "Week",
        "Year",
        "Day"
      ],
      "correctAnswer": 0,
      "explanation": "毎 (まい) + 月 (つき) = Every month.",
      "romaji": "maitsuki wa \"Every [ ? ]\" no imi desu."
    }
  ]
};

export const lessonMeta = {
  "id": "frequency-words",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Frequency Words (Always, Often, Sometimes)"
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
