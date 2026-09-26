// JLPT N5 Lesson Module
export const lesson = {
  "id": "adj-list",
  "number": 1,
  "section": "adjectives",
  "title": "JLPT N5 Adjectives List: i-Adjectives & na-Adjectives",
  "shortTitle": "i-Adj & na-Adj List",
  "subtitle": "Learn essential i-adjectives and na-adjectives, noun-modifying forms, and exceptions like きれい and いい.",
  "rules": [
    {
      "title": "Two Distinct Adjective Classes",
      "formula": "い-Adjective: ~い + Noun | な-Adjective: ~な + Noun",
      "explanation": "Japanese adjectives fall into two distinct grammatical categories. い-adjectives directly modify nouns with their ending (おおきい いえ = big house). な-adjectives act like nouns and require the particle な before modifying nouns (しずかな まち = quiet town)."
    },
    {
      "title": "Predicative vs Attributive",
      "formula": "Attributive: [Adj] + [Noun] | Predicative: [Noun] は [Adj] です",
      "explanation": "In attributive position, adjectives directly describe the noun: \"たかい くるま\" (expensive car). In predicative position, they form the predicate: \"この くるま は たかい です\" (This car is expensive)."
    },
    {
      "title": "Crucial False Friends Ending in \"i\"",
      "formula": "きれい(な), ゆうめい(な), きらい(な) -> な-Adjectives!",
      "explanation": "Even though きれい (beautiful/clean), ゆうめい (famous), and きらい (disliked) end with the phonetic \"i\" sound, they are strictly な-adjectives! Never say \"きれい ひと\", always say \"きれいな ひと\"."
    },
    {
      "title": "The Irregular Adjective: いい (Good)",
      "formula": "Dictionary: いい | Negative/Past Base: よい (よくない, よかった)",
      "explanation": "The common word for \"good\" is いい. However, all conjugations use the classical stem よい: negative is よくない (not good), past is よかった (was good), past negative is よくなかった (was not good)."
    }
  ],
  "tables": [
    {
      "title": "High-Frequency N5 い-Adjectives",
      "headers": [
        "Japanese",
        "Romaji",
        "Meaning",
        "Attributive Example"
      ],
      "rows": [
        [
          "おおきい",
          "ookii",
          "big / large",
          "おおきい いえ (big house)"
        ],
        [
          "ちいさい",
          "chiisai",
          "small / little",
          "ちいさい ねこ (small cat)"
        ],
        [
          "たかい",
          "takai",
          "expensive / tall",
          "たかい やま (tall mountain)"
        ],
        [
          "やすい",
          "yasui",
          "cheap / inexpensive",
          "やすい みせ (cheap store)"
        ],
        [
          "あたらしい",
          "atarashii",
          "new",
          "あたらしい くるま (new car)"
        ],
        [
          "ふるい",
          "furui",
          "old (non-human)",
          "ふるい ほん (old book)"
        ],
        [
          "おいしい",
          "oishii",
          "delicious / tasty",
          "おいしい りょうり (delicious meal)"
        ],
        [
          "あつい",
          "atsui",
          "hot (weather/food)",
          "あつい おちゃ (hot tea)"
        ],
        [
          "さむい",
          "samui",
          "cold (weather)",
          "さむい ふゆ (cold winter)"
        ],
        [
          "むずかしい",
          "muzukashii",
          "difficult",
          "むずかしい テスト (difficult test)"
        ],
        [
          "やさしい",
          "yasashii",
          "easy / gentle",
          "やさしい せんせい (kind teacher)"
        ],
        [
          "いい",
          "ii",
          "good",
          "いい てんき (good weather)"
        ]
      ]
    },
    {
      "title": "High-Frequency N5 な-Adjectives",
      "headers": [
        "Japanese",
        "Romaji",
        "Meaning",
        "Attributive (~な) Example"
      ],
      "rows": [
        [
          "しずか[な]",
          "shizuka [na]",
          "quiet / peaceful",
          "しずかな へや (quiet room)"
        ],
        [
          "べんり[な]",
          "benri [na]",
          "convenient",
          "べんりな ちかてつ (convenient subway)"
        ],
        [
          "ゆうめい[な]",
          "yuumei [na]",
          "famous",
          "ゆうめいな ひと (famous person)"
        ],
        [
          "きれい[な]",
          "kirei [na]",
          "clean / pretty",
          "きれいな はな (pretty flower)"
        ],
        [
          "げんき[な]",
          "genki [na]",
          "energetic / healthy",
          "げんきな こども (energetic child)"
        ],
        [
          "ひま[な]",
          "hima [na]",
          "free / not busy",
          "ひまな じかん (free time)"
        ],
        [
          "すき[な]",
          "suki [na]",
          "liked / favorite",
          "すきな たべもの (favorite food)"
        ],
        [
          "じょうず[な]",
          "jouzu [na]",
          "skillful / good at",
          "じょうずな え (skillful drawing)"
        ],
        [
          "へた[な]",
          "heta [na]",
          "unskillful / poor at",
          "へたな うた (poor singing)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "この レストラン は とても おいしい です。",
      "romaji": "kono resutoran wa totemo oishii desu.",
      "en": "This restaurant is very delicious."
    },
    {
      "ja": "きょう は いい てんき です ね。",
      "romaji": "kyou wa ii tenki desu ne.",
      "en": "The weather is nice today, isn't it?"
    },
    {
      "ja": "たなかさん は きれいな まち に すんでいます。",
      "romaji": "tanaka-san wa kireina machi ni sunde imasu.",
      "en": "Mr. Tanaka lives in a clean and beautiful town."
    },
    {
      "ja": "ふじさん は ゆうめいな やま です。",
      "romaji": "fujisan wa yuumeina yama desu.",
      "en": "Mount Fuji is a famous mountain."
    }
  ],
  "quiz": [
    {
      "id": "adj1-q1",
      "type": "word-bank",
      "prompt": "Assemble the sentence: \"This is a quiet room.\"",
      "targetEn": "This is a quiet room.",
      "chips": [
        "これ",
        "は",
        "しずかな",
        "へや",
        "です",
        "しずか",
        "な"
      ],
      "correctAnswerSentence": "これ は しずかな へや です",
      "explanation": "Before the noun へや (room), the な-adjective しずか requires な (しずかな へや)."
    },
    {
      "id": "adj1-q2",
      "type": "fill-blank",
      "prompt": "Complete: \"Mount Fuji is a famous mountain.\" -> \"ふじさん は ゆうめい [ ? ] やま です。\"",
      "options": [
        "な",
        "い",
        "の",
        "だ"
      ],
      "correctAnswer": 0,
      "explanation": "Even though ゆうめい ends with an \"i\" sound, it is a な-adjective and requires な when modifying nouns.",
      "romaji": "fujisan wa yuumei [ ? ] yama desu.",
      "romajiOptions": [
        "na",
        "i",
        "no",
        "da"
      ]
    },
    {
      "id": "adj1-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the English translation.",
      "audioText": "この くるま は とても たかい です。",
      "options": [
        "This car is very expensive.",
        "This car is very cheap.",
        "This car is very new.",
        "This car is very fast."
      ],
      "correctAnswer": 0,
      "explanation": "たかい means expensive (or tall). とても means very.",
      "romaji": "kono kuruma wa totemo takai desu."
    },
    {
      "id": "adj1-q4",
      "type": "multiple-choice",
      "prompt": "Which of the following is an い-adjective?",
      "question": "Which of the following is an い-adjective?",
      "options": [
        "ふるい",
        "きれい",
        "ゆうめい",
        "しずか"
      ],
      "correctAnswer": 0,
      "explanation": "ふるい (old) is a true い-adjective. きれい and ゆうめい are な-adjectives despite ending in the \"i\" sound.",
      "romajiOptions": [
        "furui",
        "kirei",
        "yuumei",
        "shizuka"
      ]
    },
    {
      "id": "adj1-q5",
      "type": "multiple-choice",
      "prompt": "What is the opposite/antonym of たかい (expensive)?",
      "question": "What is the opposite/antonym of たかい (expensive)?",
      "options": [
        "やすい (cheap)",
        "ひくい (low)",
        "ちいさい (small)",
        "ふるい (old)"
      ],
      "correctAnswer": 0,
      "explanation": "The opposite of たかい (expensive) is やすい (cheap/inexpensive).",
      "romajiOptions": [
        "yasui",
        "hikui",
        "chiisai",
        "furui"
      ]
    },
    {
      "id": "adj1-q6",
      "type": "word-bank",
      "prompt": "Assemble: \"I bought an expensive watch.\"",
      "targetEn": "I bought an expensive watch.",
      "chips": [
        "たかい",
        "とけい",
        "を",
        "かいました",
        "たかな",
        "は"
      ],
      "correctAnswerSentence": "たかい とけい を かいました",
      "explanation": "たかい directly modifies とけい without any particle: たかい とけい."
    },
    {
      "id": "adj1-q7",
      "type": "error-hunt",
      "prompt": "Which of the following 4 sentences contains a grammatical error?",
      "options": [
        "きれい ひと を みました。",
        "あたらしい くるま を かいました。",
        "しずかな へや で べんきょうします。",
        "きのう は さむかった です。"
      ],
      "correctAnswer": 0,
      "explanation": "きれい is a な-adjective, so modifying ひと requires な: \"きれいな ひと\". \"きれい ひと\" is ungrammatical.",
      "romajiOptions": [
        "kirei hito o mimashita.",
        "atarashii kuruma o kaimashita.",
        "shizukana heya de benkyoushimasu.",
        "kinou wa samukatta desu."
      ]
    },
    {
      "id": "adj1-q8",
      "type": "multiple-choice",
      "prompt": "What is the correct way to say \"My teacher is kind/gentle\"?",
      "question": "What is the correct way to say \"My teacher is kind/gentle\"?",
      "options": [
        "わたし の せんせい は やさしい です。",
        "わたし の せんせい は やさしいな です。",
        "わたし の せんせい は やさし です。",
        "わたし の せんせい は やさしい だ です。"
      ],
      "correctAnswer": 0,
      "explanation": "In predicative position, an い-adjective ends with い followed by です: やさしい です.",
      "romajiOptions": [
        "watashi no sensei wa yasashii desu.",
        "watashi no sensei wa yasashiina desu.",
        "watashi no sensei wa yasashi desu.",
        "watashi no sensei wa yasashii da desu."
      ]
    },
    {
      "id": "adj1-q9",
      "type": "audio-listening",
      "prompt": "Listen to the audio and identify the object described.",
      "audioText": "あかい りんご を たべました。",
      "options": [
        "I ate a red apple.",
        "I bought a green apple.",
        "I ate a sweet banana.",
        "I like red apples."
      ],
      "correctAnswer": 0,
      "explanation": "あかい = red, りんご = apple, たべました = ate.",
      "romaji": "akai ringo o tabemashita."
    },
    {
      "id": "adj1-q10",
      "type": "fill-blank",
      "prompt": "Select the missing particle: \"とうきょう は べんり [ ? ] まち です。\"",
      "options": [
        "な",
        "に",
        "の",
        "い"
      ],
      "correctAnswer": 0,
      "explanation": "べんり is a な-adjective: べんりな まち (convenient town).",
      "romaji": "toukyou wa benri [ ? ] machi desu.",
      "romajiOptions": [
        "na",
        "ni",
        "no",
        "i"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "adj-list",
  "jlptLevel": "N5",
  "category": "adjectives",
  "grammarPoints": [
    "i-Adj & na-Adj List"
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
