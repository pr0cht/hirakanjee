// JLPT N4 Lesson Module
export const lesson = {
  "id": "numbers-1-100000",
  "number": 5,
  "title": "JLPT N5: Japanese numbers 1 to 100,000",
  "shortTitle": "Numbers 1 to 100,000",
  "subtitle": "Master counting systems, rendaku sound mutations, and the 10,000 unit (万).",
  "description": "Learn base digits, tens, hundreds (百), thousands (千), and ten-thousands (万). Pay close attention to irregular rendaku sound shifts for 300, 600, 800, 3000, and 8000.",
  "sections": [
    {
      "title": "1. Hundreds (百 - ひゃく) & Irregular Readings",
      "content": "Numbers in the hundreds count with ひゃく (hyaku). Note the three irregular sound changes:\n  300: さんびゃく (sanbyaku) - b sound\n  600: ろっぴゃく (roppyaku) - pp sound\n  800: はっぴゃく (happyaku) - pp sound",
      "table": {
        "headers": [
          "Number",
          "Japanese",
          "Romaji",
          "Note"
        ],
        "rows": [
          [
            "100",
            "ひゃく",
            "hyaku",
            "Standard"
          ],
          [
            "200",
            "にひゃく",
            "nihyaku",
            "Standard"
          ],
          [
            "300",
            "さんびゃく",
            "sanbyaku",
            "IRREGULAR (b)"
          ],
          [
            "400",
            "よんひゃく",
            "yonhyaku",
            "Standard"
          ],
          [
            "500",
            "ごひゃく",
            "gohyaku",
            "Standard"
          ],
          [
            "600",
            "ろっぴゃく",
            "roppyaku",
            "IRREGULAR (pp)"
          ],
          [
            "700",
            "ななひゃく",
            "nanahyaku",
            "Standard"
          ],
          [
            "800",
            "はっぴゃく",
            "happyaku",
            "IRREGULAR (pp)"
          ],
          [
            "900",
            "きゅうひゃく",
            "kyuuhyaku",
            "Standard"
          ]
        ]
      }
    },
    {
      "title": "2. Thousands (千 - せん) & Ten-Thousands (万 - まん)",
      "content": "Thousands use せん (sen). Watch for two sound changes:\n  3,000: さんぜん (sanzen) - z sound\n  8,000: はっせん (hassen) - ss sound\n\nCrucial Concept - The 10,000 Unit (万 - まん):\n  Japanese groups large numbers by 4 zeros (10,000s), NOT 3 zeros!\n  10,000 = いちまん (1万)\n  50,000 = ごまん (5万)\n  100,000 = じゅうまん (10万)",
      "examples": [
        {
          "jp": "この ほん は せんごひゃく えん です。",
          "romaji": "Kono hon wa sengohyaku en desu.",
          "en": "This book is 1,500 yen."
        },
        {
          "jp": "カメラ は さんまん えん でした。",
          "romaji": "Kamera wa sanman en deshita.",
          "en": "The camera was 30,000 yen."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l5-q1",
      "type": "multiple-choice",
      "prompt": "How is 300 pronounced in Japanese with the irregular sound mutation?",
      "question": "How is 300 pronounced in Japanese with the irregular sound mutation?",
      "options": [
        "さんびゃく",
        "さんひゃく",
        "さっぴゃく",
        "さんぜん"
      ],
      "correctAnswer": 0,
      "explanation": "300 undergoes rendaku: 'さんびゃく' (sanbyaku).",
      "romajiOptions": [
        "sanbyaku",
        "sanhyaku",
        "sappyaku",
        "sanzen"
      ]
    },
    {
      "id": "l5-q2",
      "type": "word-bank",
      "prompt": "Build: 'This watch is 8,000 yen.'",
      "targetEn": "This watch is 8,000 yen.",
      "chips": [
        "この",
        "とけい",
        "は",
        "はっせん",
        "えん",
        "です",
        "ろっせん",
        "ひゃく"
      ],
      "correctOrder": [
        "この",
        "とけい",
        "は",
        "はっせん",
        "えん",
        "です"
      ],
      "explanation": "8,000 has the irregular reading 'はっせん' (hassen).",
      "romaji": "kono tokei wa hassen en desu"
    },
    {
      "id": "l5-q3",
      "type": "fill-blank",
      "prompt": "Choose the correct reading for 600.",
      "sentence": "600 は ___ と よみます。",
      "blankWord": "ろっぴゃく",
      "options": [
        "ろっぴゃく",
        "ろくひゃく",
        "ろくびゃく",
        "ろっひゃく"
      ],
      "correctAnswer": 0,
      "explanation": "600 is pronounced 'ろっぴゃく' (roppyaku).",
      "romaji": "600 wa [ ? ] to yomimasu."
    },
    {
      "id": "l5-q4",
      "type": "audio-listening",
      "prompt": "Listen and identify the price.",
      "audioText": "これ は にまん えん です。",
      "options": [
        "This is 20,000 yen.",
        "This is 2,000 yen.",
        "This is 200,000 yen.",
        "This is 200 yen."
      ],
      "correctAnswer": 0,
      "explanation": "'にまん' (2万) = 20,000 yen.",
      "romaji": "kore wa niman en desu."
    },
    {
      "id": "l5-q5",
      "type": "word-bank",
      "prompt": "Assemble: '45,000'",
      "targetEn": "45,000",
      "chips": [
        "よんまん",
        "ごせん",
        "ごまん",
        "よんせん"
      ],
      "correctOrder": [
        "よんまん",
        "ごせん"
      ],
      "explanation": "45,000 is 4万 (よんまん) + 5千 (ごせん).",
      "romaji": "yonman gosen"
    },
    {
      "id": "l5-q6",
      "type": "fill-blank",
      "prompt": "Choose the irregular reading for 3,000.",
      "sentence": "3,000 は ___ と よみます。",
      "blankWord": "さんぜん",
      "options": [
        "さんぜん",
        "さんせん",
        "さんびゃく",
        "さっせん"
      ],
      "correctAnswer": 0,
      "explanation": "3,000 shifts to 'さんぜん' (sanzen).",
      "romaji": "3,000 wa [ ? ] to yomimasu."
    },
    {
      "id": "l5-q7",
      "type": "error-hunt",
      "prompt": "Which number reading is INCORRECT?",
      "options": [
        "800 -> はっぴゃく",
        "600 -> ろっぴゃく",
        "8000 -> はちせん",
        "3000 -> さんぜん"
      ],
      "correctAnswer": 2,
      "explanation": "8,000 is read as 'はっせん' (hassen), NOT 'はちせん'.",
      "romajiOptions": [
        "800 -> happyaku",
        "600 -> roppyaku",
        "8000 -> hachisen",
        "3000 -> sanzen"
      ]
    },
    {
      "id": "l5-q8",
      "type": "multiple-choice",
      "prompt": "How do you say 50,000 in Japanese?",
      "question": "How do you say 50,000 in Japanese?",
      "options": [
        "ごまん",
        "ごじゅうせん",
        "ごひゃくまん",
        "いちまん"
      ],
      "correctAnswer": 0,
      "explanation": "Japanese counts in 10,000s (万): 50,000 is 5万 = 'ごまん'.",
      "romajiOptions": [
        "goman",
        "gojuusen",
        "gohyakuman",
        "ichiman"
      ]
    },
    {
      "id": "l5-q9",
      "type": "word-bank",
      "prompt": "Assemble: '100,000'",
      "targetEn": "100,000",
      "chips": [
        "じゅうまん",
        "ひゃくまん",
        "いちまん",
        "せんまん"
      ],
      "correctOrder": [
        "じゅうまん"
      ],
      "explanation": "100,000 is 10万 = 'じゅうまん'.",
      "romaji": "juuman"
    },
    {
      "id": "l5-q10",
      "type": "fill-blank",
      "prompt": "Choose the reading for 800.",
      "sentence": "800 は ___ と よみます。",
      "blankWord": "はっぴゃく",
      "options": [
        "はっぴゃく",
        "はちひゃく",
        "はちびゃく",
        "はっびゃく"
      ],
      "correctAnswer": 0,
      "explanation": "800 is 'はっぴゃく' (happyaku).",
      "romaji": "800 wa [ ? ] to yomimasu."
    }
  ]
};

export const lessonMeta = {
  "id": "numbers-1-100000",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Numbers 1 to 100,000"
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
