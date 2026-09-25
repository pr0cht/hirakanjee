// JLPT N4 Lesson Module
export const lesson = {
  "id": "directions-vocabulary",
  "number": 4,
  "title": "JLPT N5: Directions vocabulary - Japanese words for left, right, front, back, etc.",
  "shortTitle": "Directions Vocabulary (Left, Right, Positions)",
  "subtitle": "Spatial positioning, relative locations, and cardinal compass points.",
  "description": "Learn essential relative position terms: みぎ (right), ひだり (left), まえ (front), うしろ (back), なか (inside), そと (outside), うえ (above), した (below), and the 4 compass points.",
  "sections": [
    {
      "title": "1. Relative Spatial Positions",
      "content": "Connect the reference location to the position noun with の (no):\nStructure:\n  [Noun] の [Position] に [Subject] が あります/います。\n  (There is a [Subject] [Position] the [Noun].)",
      "table": {
        "headers": [
          "Position",
          "Japanese",
          "Romaji",
          "Opposite Pair"
        ],
        "rows": [
          [
            "Right",
            "みぎ",
            "migi",
            "ひだり (Left)"
          ],
          [
            "Left",
            "ひだり",
            "hidari",
            "みぎ (Right)"
          ],
          [
            "Front / Before",
            "まえ",
            "mae",
            "うしろ (Back / Behind)"
          ],
          [
            "Back / Behind",
            "うしろ",
            "ushiro",
            "まえ (Front)"
          ],
          [
            "Inside",
            "なか",
            "naka",
            "そと (Outside)"
          ],
          [
            "Outside",
            "そと",
            "soto",
            "なか (Inside)"
          ],
          [
            "Above / On",
            "うえ",
            "ue",
            "した (Below / Under)"
          ],
          [
            "Below / Under",
            "した",
            "shita",
            "うえ (Above)"
          ],
          [
            "Next to / Beside",
            "となり",
            "tonari",
            "ちかく (Nearby)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "つくえ の うえ に ほん が あります。",
          "romaji": "Tsukue no ue ni hon ga arimasu.",
          "en": "There is a book on the desk."
        },
        {
          "jp": "ねこ は はこ の なか です。",
          "romaji": "Neko wa hako no naka desu.",
          "en": "The cat is inside the box."
        },
        {
          "jp": "えき は ぎんこう の まえ です。",
          "romaji": "Eki wa ginkou no mae desu.",
          "en": "The station is in front of the bank."
        }
      ]
    },
    {
      "title": "2. Cardinal Compass Directions",
      "content": "Master the four primary compass points:",
      "table": {
        "headers": [
          "Direction",
          "Japanese",
          "Romaji",
          "Kanji"
        ],
        "rows": [
          [
            "North",
            "きた",
            "kita",
            "北"
          ],
          [
            "South",
            "みなみ",
            "minami",
            "南"
          ],
          [
            "East",
            "ひがし",
            "higashi",
            "東"
          ],
          [
            "West",
            "にし",
            "nishi",
            "西"
          ]
        ]
      },
      "examples": [
        {
          "jp": "とうきょう は にほん の ひがし に あります。",
          "romaji": "Toukyou wa nihon no higashi ni arimasu.",
          "en": "Tokyo is in the east of Japan."
        },
        {
          "jp": "ほっかいどう は きた です。",
          "romaji": "Hokkaidou wa kita desu.",
          "en": "Hokkaido is north."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l4-q1",
      "type": "multiple-choice",
      "prompt": "What are the Japanese words for 'right' and 'left'?",
      "question": "What are the Japanese words for 'right' and 'left'?",
      "options": [
        "みぎ (right) and ひだり (left)",
        "ひだり (right) and みぎ (left)",
        "まえ (right) and うしろ (left)",
        "きた (right) and みなみ (left)"
      ],
      "correctAnswer": 0,
      "explanation": "'みぎ' is right and 'ひだり' is left.",
      "romajiOptions": [
        "migi (right) and hidari (left)",
        "hidari (right) and migi (left)",
        "mae (right) and ushiro (left)",
        "kita (right) and minami (left)"
      ]
    },
    {
      "id": "l4-q2",
      "type": "word-bank",
      "prompt": "Build: 'The book is inside the bag.'",
      "targetEn": "The book is inside the bag.",
      "chips": [
        "ほん",
        "は",
        "かばん",
        "の",
        "なか",
        "です",
        "そと",
        "うえ"
      ],
      "correctOrder": [
        "ほん",
        "は",
        "かばん",
        "の",
        "なか",
        "です"
      ],
      "explanation": "'かばん の なか' means inside the bag.",
      "romaji": "hon wa kaban no naka desu"
    },
    {
      "id": "l4-q3",
      "type": "fill-blank",
      "prompt": "Say: \"The station is in front of the bank.\"",
      "sentence": "えき は ぎんこう の ___ です。",
      "blankWord": "まえ",
      "options": [
        "まえ",
        "うしろ",
        "みぎ",
        "きた"
      ],
      "correctAnswer": 0,
      "explanation": "'まえ' means in front of.",
      "romaji": "eki wa ginkou no [ ? ] desu."
    },
    {
      "id": "l4-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English translation.",
      "audioText": "ねこ は つくえ の した です。",
      "options": [
        "The cat is under the desk.",
        "The cat is on the desk.",
        "The dog is under the desk.",
        "The cat is behind the box."
      ],
      "correctAnswer": 0,
      "explanation": "'つくえ の した' means under the desk.",
      "romaji": "neko wa tsukue no shita desu."
    },
    {
      "id": "l4-q5",
      "type": "word-bank",
      "prompt": "Build: 'The convenience store is to the left of the hospital.'",
      "targetEn": "The convenience store is to the left of the hospital.",
      "chips": [
        "コンビニ",
        "は",
        "びょういん",
        "の",
        "ひだり",
        "です",
        "みぎ",
        "まえ"
      ],
      "correctOrder": [
        "コンビニ",
        "は",
        "びょういん",
        "の",
        "ひだり",
        "です"
      ],
      "explanation": "'びょういん の ひだり' means to the left of the hospital.",
      "romaji": "konbini wa byouin no hidari desu"
    },
    {
      "id": "l4-q6",
      "type": "fill-blank",
      "prompt": "Fill in: \"Hokkaido is in the north of Japan.\"",
      "sentence": "ほっかいどう は にほん の ___ に あります。",
      "blankWord": "きた",
      "options": [
        "きた",
        "みなみ",
        "ひがし",
        "にし"
      ],
      "correctAnswer": 0,
      "explanation": "'きた' (北) means North.",
      "romaji": "hokkaidou wa nihon no [ ? ] ni arimasu."
    },
    {
      "id": "l4-q7",
      "type": "error-hunt",
      "prompt": "Which sentence has broken prepositional particle syntax?",
      "options": [
        "くるま は いえ の まえ です。",
        "つくえ の うえ に ほん が あります。",
        "きのう は もくようび でした。",
        "ぎんこう の は まえ です。"
      ],
      "correctAnswer": 3,
      "explanation": "'ぎんこう の は まえ です' is incorrect because 'の' must connect to a noun (like 'ぎんこう の まえ は ...').",
      "romajiOptions": [
        "kuruma wa ie no mae desu.",
        "tsukue no ue ni hon ga arimasu.",
        "kinou wa mokuyoubi deshita.",
        "ginkou no wa mae desu."
      ]
    },
    {
      "id": "l4-q8",
      "type": "multiple-choice",
      "prompt": "Which compass direction is 'Higashi' (ひがし)?",
      "question": "Which compass direction is 'Higashi' (ひがし)?",
      "options": [
        "East",
        "West",
        "North",
        "South"
      ],
      "correctAnswer": 0,
      "explanation": "'ひがし' (東) is East."
    },
    {
      "id": "l4-q9",
      "type": "word-bank",
      "prompt": "Assemble phrase: 'Behind the school'",
      "targetEn": "Behind the school",
      "chips": [
        "がっこう",
        "の",
        "うしろ",
        "まえ",
        "なか"
      ],
      "correctOrder": [
        "がっこう",
        "の",
        "うしろ"
      ],
      "explanation": "'がっこう の うしろ' means behind the school.",
      "romaji": "gakkou no ushiro"
    },
    {
      "id": "l4-q10",
      "type": "fill-blank",
      "prompt": "Say: \"The dog is outside the house.\"",
      "sentence": "いぬ は いえ の ___ に います。",
      "blankWord": "そと",
      "options": [
        "そと",
        "うえ",
        "みなみ",
        "にし"
      ],
      "correctAnswer": 0,
      "explanation": "'そと' (外) means outside.",
      "romaji": "inu wa ie no [ ? ] ni imasu."
    }
  ]
};

export const lessonMeta = {
  "id": "directions-vocabulary",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Directions Vocabulary (Left, Right, Positions)"
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
