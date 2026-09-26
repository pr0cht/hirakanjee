// JLPT N5 Lesson Module
export const lesson = {
  "id": "adj-conjugations",
  "number": 4,
  "section": "adjectives",
  "title": "Adjective Conjugations: ...ku, ...kute, ...ni, ...de Forms",
  "shortTitle": "Connective & Adverb Forms",
  "subtitle": "Learn to connect multiple qualities (~kute / ~de) and turn adjectives into adverbs (~ku / ~ni).",
  "rules": [
    {
      "title": "Connective Form (Linking Qualities: \"And\")",
      "formula": "い-Adj: drop ~い -> ~くて | な-Adj: drop ~な -> ~で | Noun: ~で",
      "explanation": "To combine two qualities without repeating sentences, use connective forms: はやい + やすい -> \"はやくて、やすい です\" (Fast and cheap). しずか[な] + べんり[な] -> \"しずかで、べんり です\" (Quiet and convenient). がくせい + げんき -> \"がくせいで、げんき です\"."
    },
    {
      "title": "Irregular Connective: いい -> よくて",
      "formula": "いい -> よくて (Never いくて!)",
      "explanation": "The adjective いい (good) must conjugate using its historical stem よい: connective is よくて (e.g. \"あたま が よくて、しんせつ です\" - Smart and kind)."
    },
    {
      "title": "Adverbial Form (Modifying Actions & Verbs)",
      "formula": "い-Adj: drop ~い -> ~く + Verb | な-Adj: drop ~な -> ~に + Verb",
      "explanation": "To describe HOW an action is done or a change of state with なります (become): はやい -> はやく あるきます (walk fast). あつい -> あつく なりました (became hot). じょうず[な] -> じょうずに なりました (became skillful). きれい[な] -> きれいに かきます (write neatly)."
    }
  ],
  "tables": [
    {
      "title": "Connective & Adverbial Conjugation Matrix",
      "headers": [
        "Dictionary Form",
        "Type",
        "Connective Form (And...)",
        "Adverbial Form (Action / Become)"
      ],
      "rows": [
        [
          "はやい (fast)",
          "い-adj",
          "はやくて (fast and...)",
          "はやく あるく (walk fast)"
        ],
        [
          "やすい (cheap)",
          "い-adj",
          "やすくて (cheap and...)",
          "やすく かう (buy cheaply)"
        ],
        [
          "おおきい (big)",
          "い-adj",
          "おおきくて (big and...)",
          "おおきく なる (become big)"
        ],
        [
          "あつい (hot)",
          "い-adj",
          "あつくて (hot and...)",
          "あつく なる (become hot)"
        ],
        [
          "いい (good)",
          "い-adj (irreg)",
          "よくて (good and...)",
          "よく なる (improve / become good)"
        ],
        [
          "しずか[な] (quiet)",
          "な-adj",
          "しずかで (quiet and...)",
          "しずかに する (be quiet)"
        ],
        [
          "べんり[な] (convenient)",
          "な-adj",
          "べんりで (convenient and...)",
          "べんりに なる (become convenient)"
        ],
        [
          "じょうず[な] (skillful)",
          "な-adj",
          "じょうずで (skillful and...)",
          "じょうずに なる (become skillful)"
        ],
        [
          "きれい[な] (clean/pretty)",
          "な-adj",
          "きれいで (pretty and...)",
          "きれいに そうじする (clean neatly)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "この カメラ は かるくて、べんり です。",
      "romaji": "kono kamera wa karukute, benri desu.",
      "en": "This camera is light and convenient."
    },
    {
      "ja": "たなかさん の へや は ひろくて、あかるい です。",
      "romaji": "tanaka-san no heya wa hirokute, akarui desu.",
      "en": "Mr. Tanaka's room is spacious and bright."
    },
    {
      "ja": "にほんご が じょうずに なりました ね。",
      "romaji": "nihongo ga jouzuni narimashita ne.",
      "en": "Your Japanese has become skillful, hasn't it?"
    },
    {
      "ja": "あした は はやく おきます。",
      "romaji": "ashita wa hayaku okimasu.",
      "en": "I will wake up early tomorrow."
    }
  ],
  "quiz": [
    {
      "id": "adj4-q1",
      "type": "word-bank",
      "prompt": "Assemble: \"This restaurant is cheap and delicious.\"",
      "targetEn": "This restaurant is cheap and delicious.",
      "chips": [
        "この",
        "レストラン",
        "は",
        "やすくて、",
        "おいしい",
        "です",
        "やすいで",
        "おいしくて"
      ],
      "correctAnswerSentence": "この レストラン は やすくて、 おいしい です",
      "explanation": "やすいて drop い -> やすくて to connect with おいしい です."
    },
    {
      "id": "adj4-q2",
      "type": "fill-blank",
      "prompt": "Complete: \"Tanaka-san is kind and smart.\" -> \"たなかさん は しんせつ [ ? ] あたま が いい です。\"",
      "options": [
        "で",
        "くて",
        "な",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "しんせつ is a な-adjective; its connective form is しんせつで."
    },
    {
      "id": "adj4-q3",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "もっと はやく はなして ください。",
      "options": [
        "Please speak more quickly.",
        "Please speak more slowly.",
        "Please speak more loudly.",
        "Please do not speak."
      ],
      "correctAnswer": 0,
      "explanation": "はやく is the adverb form of はやい (fast), modifying はなして (speak).",
      "romaji": "motto hayaku hanashite kudasai."
    },
    {
      "id": "adj4-q4",
      "type": "multiple-choice",
      "prompt": "What is the correct connective form of いい (good)?",
      "question": "What is the correct connective form of いい (good)?",
      "options": [
        "よくて",
        "いくて",
        "いいで",
        "いいて"
      ],
      "correctAnswer": 0,
      "explanation": "いい conjugates using stem よい: よくて (NOT いくて).",
      "romajiOptions": [
        "yokute",
        "ikute",
        "iide",
        "iite"
      ]
    },
    {
      "id": "adj4-q5",
      "type": "fill-blank",
      "prompt": "Turn into adverb: \"Please write neatly/prettily.\" -> \"[ ? ] かいて ください。\"",
      "options": [
        "きれいに",
        "きれいく",
        "きれいな",
        "きれいで"
      ],
      "correctAnswer": 0,
      "explanation": "きれい is a な-adjective; its adverbial form is きれいに.",
      "romaji": "[ ? ] kaite kudasai.",
      "romajiOptions": [
        "kireini",
        "kireiku",
        "kireina",
        "kireide"
      ]
    },
    {
      "id": "adj4-q6",
      "type": "word-bank",
      "prompt": "Assemble: \"The weather became cold.\"",
      "targetEn": "The weather became cold.",
      "chips": [
        "てんき",
        "が",
        "さむく",
        "なりました",
        "さむに",
        "さむい"
      ],
      "correctAnswerSentence": "てんき が さむく なりました",
      "explanation": "さむい drops い and adds く before なりました (became cold)."
    },
    {
      "id": "adj4-q7",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid connective conjugation error?",
      "options": [
        "この りょうり は おいしいで、たかい です。",
        "この りょうり は おいしくて、たかい です。",
        "へや は しずかで、ひろい です。",
        "かのじょ は わかくて、げんき です。"
      ],
      "correctAnswer": 0,
      "explanation": "おいしい is an い-adjective; connecting it requires \"おいしくて\", NOT \"おいしいで\".",
      "romajiOptions": [
        "kono ryouri wa oishiide, takai desu.",
        "kono ryouri wa oishikute, takai desu.",
        "heya wa shizukade, hiroi desu.",
        "kanojo wa wakakute, genki desu."
      ]
    },
    {
      "id": "adj4-q8",
      "type": "multiple-choice",
      "prompt": "How do you say \"Please be quiet\" in Japanese?",
      "question": "How do you say \"Please be quiet\" in Japanese?",
      "options": [
        "しずかに して ください。",
        "しずかく して ください。",
        "しずかで して ください。",
        "しずかな して ください。"
      ],
      "correctAnswer": 0,
      "explanation": "しずかに して ください uses the adverb form of the な-adjective (しずかに + して).",
      "romajiOptions": [
        "shizukani shite kudasai.",
        "shizukaku shite kudasai.",
        "shizukade shite kudasai.",
        "shizukana shite kudasai."
      ]
    },
    {
      "id": "adj4-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify what happened.",
      "audioText": "きのう は あたま が いたくて、ねました。",
      "options": [
        "Yesterday I had a headache and went to sleep.",
        "Yesterday I had a stomachache and ate.",
        "Yesterday I was fine and went out.",
        "Yesterday I had a fever and worked."
      ],
      "correctAnswer": 0,
      "explanation": "いたくて is connective of いたい (painful/hurting): had a headache and went to sleep.",
      "romaji": "kinou wa atama ga itakute, nemashita."
    },
    {
      "id": "adj4-q10",
      "type": "fill-blank",
      "prompt": "Complete: \"His English became good.\" -> \"かれ の えいご は [ ? ] なりました。\"",
      "options": [
        "じょうずに",
        "じょうずく",
        "じょうずで",
        "じょうずな"
      ],
      "correctAnswer": 0,
      "explanation": "じょうず is a な-adjective; before なる (become), it takes に: じょうずに なりました.",
      "romaji": "kare no eigo wa [ ? ] narimashita.",
      "romajiOptions": [
        "jouzuni",
        "jouzuku",
        "jouzude",
        "jouzuna"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "adj-conjugations",
  "jlptLevel": "N5",
  "category": "adjectives",
  "grammarPoints": [
    "Connective & Adverb Forms"
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
