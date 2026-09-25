// JLPT N4 Lesson Module
export const lesson = {
  "id": "adj-levels-antonyms",
  "number": 3,
  "section": "adjectives",
  "title": "Adjective Antonym Pairs & Vocabulary Levels",
  "shortTitle": "Antonym Pairs",
  "subtitle": "Learn high-frequency opposites: expensive/cheap, new/old, hot/cold (weather vs touch).",
  "rules": [
    {
      "title": "Mastering Antonyms Accelerates Recall",
      "formula": "Word A <---> Opposite Word B",
      "explanation": "JLPT N5 tests your ability to substitute opposites in dialogue (e.g. \"Is it expensive?\" \"No, it is cheap\"). Learning pairs together doubles vocabulary retention."
    },
    {
      "title": "Crucial Distinction: Weather Cold vs Touch Cold",
      "formula": "Climate: さむい (Cold) | Physical Touch / Objects: つめたい (Cold)",
      "explanation": "Do NOT mix up さむい and つめたい! Use さむい for ambient weather, seasons, and room temperature (\"きょう は さむい\"). Use つめたい for cold objects, drinks, water, or physical touch (\"つめたい みず\" = cold water)."
    },
    {
      "title": "Crucial Distinction: Weather Hot vs Object Hot",
      "formula": "Weather: あつい (暑い) | Food / Object: あつい (熱い)",
      "explanation": "While both are pronounced あつい, in kanji 暑い is for weather/summer heat, and 熱い is for hot tea, food, or bath water."
    }
  ],
  "tables": [
    {
      "title": "Essential JLPT N5 Antonym Pairs",
      "headers": [
        "Adjective 1",
        "Meaning",
        "Antonym",
        "Meaning",
        "Type"
      ],
      "rows": [
        [
          "たかい (takai)",
          "expensive / high",
          "やすい (yasui)",
          "cheap / inexpensive",
          "い-adj"
        ],
        [
          "あたらしい (atarashii)",
          "new",
          "ふるい (furui)",
          "old (objects)",
          "い-adj"
        ],
        [
          "おおきい (ookii)",
          "big / large",
          "ちいさい (chiisai)",
          "small / tiny",
          "い-adj"
        ],
        [
          "あつい (atsui)",
          "hot (weather/food)",
          "さむい (samui)",
          "cold (weather)",
          "い-adj"
        ],
        [
          "あつい (atsui)",
          "hot (food/liquid)",
          "つめたい (tsumetai)",
          "cold to touch/drink",
          "い-adj"
        ],
        [
          "おもい (omoi)",
          "heavy",
          "かるい (karui)",
          "light (weight)",
          "い-adj"
        ],
        [
          "ちかい (chikai)",
          "near / close",
          "とおい (tooi)",
          "far / distant",
          "い-adj"
        ],
        [
          "あかるい (akarui)",
          "bright",
          "くらい (kurai)",
          "dark",
          "い-adj"
        ],
        [
          "むずかしい (muzukashii)",
          "difficult",
          "やさしい (yasashii)",
          "easy / simple",
          "い-adj"
        ],
        [
          "しずか[な] (shizuka)",
          "quiet",
          "にぎやか[な] (nigiyaka)",
          "lively / bustling",
          "な-adj"
        ],
        [
          "じょうず[な] (jouzu)",
          "skillful / good at",
          "へた[な] (heta)",
          "unskillful / poor at",
          "な-adj"
        ],
        [
          "すき[な] (suki)",
          "liked / fond of",
          "きらい[な] (kirai)",
          "disliked / hate",
          "な-adj"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "この かばん は おもい です が、その かばん は かるい です。",
      "romaji": "kono kaban wa omoi desu ga, sono kaban wa karui desu.",
      "en": "This bag is heavy, but that bag is light."
    },
    {
      "ja": "つめたい ジュース を のみました。",
      "romaji": "tsumetai juusu o nomimashita.",
      "en": "I drank cold juice."
    },
    {
      "ja": "ぎんこう は えき から ちかい です。",
      "romaji": "ginkou wa eki kara chikai desu.",
      "en": "The bank is near the station."
    },
    {
      "ja": "ひるま は にぎやか です が、よる は しずか です。",
      "romaji": "hiruma wa nigiyaka desu ga, yoru wa shizuka desu.",
      "en": "It is lively during daytime, but quiet at night."
    }
  ],
  "quiz": [
    {
      "id": "adj3-q1",
      "type": "multiple-choice",
      "prompt": "What is the antonym of あたらしい (new)?",
      "question": "What is the antonym of あたらしい (new)?",
      "options": [
        "ふるい",
        "やすい",
        "おもい",
        "くらい"
      ],
      "correctAnswer": 0,
      "explanation": "あたらしい (new) <---> ふるい (old).",
      "romajiOptions": [
        "furui",
        "yasui",
        "omoi",
        "kurai"
      ]
    },
    {
      "id": "adj3-q2",
      "type": "fill-blank",
      "prompt": "Choose the correct adjective: \"I want to drink [ ? ] water.\" (Cold to touch/drink)",
      "options": [
        "つめたい",
        "さむい",
        "ぬるい",
        "ふるい"
      ],
      "correctAnswer": 0,
      "explanation": "For cold drinks, food, or physical objects, use つめたい. さむい is only for weather.",
      "romaji": "I want to drink [ ? ] water.",
      "romajiOptions": [
        "tsumetai",
        "samui",
        "nurui",
        "furui"
      ]
    },
    {
      "id": "adj3-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"My station is near, but Mr. Tanaka's station is far.\"",
      "targetEn": "My station is near, but Mr. Tanaka's station is far.",
      "chips": [
        "わたし の えき は",
        "ちかい です が、",
        "たなかさん の は",
        "とおい です",
        "おもい",
        "やすい"
      ],
      "correctAnswerSentence": "わたし の えき は ちかい です が、 たなかさん の は とおい です",
      "explanation": "ちかい (near) pairs with とおい (far)."
    },
    {
      "id": "adj3-q4",
      "type": "audio-listening",
      "prompt": "Listen and identify the condition of the bag.",
      "audioText": "この にもつ は とても かるい です。",
      "options": [
        "This luggage is very light.",
        "This luggage is very heavy.",
        "This luggage is very expensive.",
        "This luggage is very large."
      ],
      "correctAnswer": 0,
      "explanation": "かるい means light in weight. おもい means heavy.",
      "romaji": "kono nimotsu wa totemo karui desu."
    },
    {
      "id": "adj3-q5",
      "type": "multiple-choice",
      "prompt": "What is the opposite of じょうず (skillful / good at)?",
      "question": "What is the opposite of じょうず (skillful / good at)?",
      "options": [
        "へた",
        "きらい",
        "ひま",
        "しずか"
      ],
      "correctAnswer": 0,
      "explanation": "じょうず (skillful) is the antonym of へた (unskillful / poor at).",
      "romajiOptions": [
        "heta",
        "kirai",
        "hima",
        "shizuka"
      ]
    },
    {
      "id": "adj3-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"へや を あかるく したい です から、でんき を [ ? ]。\"",
      "options": [
        "つけます",
        "けします",
        "あけます",
        "しめます"
      ],
      "correctAnswer": 0,
      "explanation": "あかるく したい (want to make bright), so you turn on the light (でんき を つけます).",
      "romaji": "heya o akaruku shitai desu kara, denki o [ ? ].",
      "romajiOptions": [
        "tsukemasu",
        "keshimasu",
        "akemasu",
        "shimemasu"
      ]
    },
    {
      "id": "adj3-q7",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a climate adjective for an object?",
      "options": [
        "さむい ビール を ください。",
        "きょう は とても さむい です。",
        "つめたい みず を のみました。",
        "ふゆ は さむい です ね。"
      ],
      "correctAnswer": 0,
      "explanation": "Beer is a cold beverage, so it must be \"つめたい ビール\", NOT \"さむい ビール\". さむい is reserved for climate/air temperature.",
      "romajiOptions": [
        "samui biiru o kudasai.",
        "kyou wa totemo samui desu.",
        "tsumetai mizu o nomimashita.",
        "fuyu wa samui desu ne."
      ]
    },
    {
      "id": "adj3-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"This book is easy, but that book is difficult.\"",
      "targetEn": "This book is easy, but that book is difficult.",
      "chips": [
        "この ほん は",
        "やさしい です が、",
        "あの ほん は",
        "むずかしい です",
        "たかい",
        "やすい"
      ],
      "correctAnswerSentence": "この ほん は やさしい です が、 あの ほん は むずかしい です",
      "explanation": "やさしい (easy) <---> むずかしい (difficult)."
    },
    {
      "id": "adj3-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify the town's atmosphere.",
      "audioText": "しぶや は いつも にぎやか です。",
      "options": [
        "Shibuya is always lively.",
        "Shibuya is always quiet.",
        "Shibuya is always dangerous.",
        "Shibuya is always boring."
      ],
      "correctAnswer": 0,
      "explanation": "にぎやか means lively / bustling.",
      "romaji": "shibuya wa itsumo nigiyaka desu."
    },
    {
      "id": "adj3-q10",
      "type": "multiple-choice",
      "prompt": "Which pair consists of exact antonyms?",
      "question": "Which pair consists of exact antonyms?",
      "options": [
        "たかい (expensive) <---> やすい (cheap)",
        "おおきい (big) <---> あたらしい (new)",
        "あつい (hot) <---> にぎやか (lively)",
        "きれい (pretty) <---> へた (unskillful)"
      ],
      "correctAnswer": 0,
      "explanation": "たかい and やすい are exact antonyms (expensive vs cheap)."
    }
  ]
};

export const lessonMeta = {
  "id": "adj-levels-antonyms",
  "jlptLevel": "N5",
  "category": "adjectives",
  "grammarPoints": [
    "Antonym Pairs"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-adjectives"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
