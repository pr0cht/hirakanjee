// JLPT N4 Lesson Module
export const lesson = {
  "id": "adj-degree-words",
  "number": 2,
  "section": "adjectives",
  "title": "Japanese Degree Words: Very, A Little, Not Very, How Much",
  "shortTitle": "Degree Words",
  "subtitle": "Master totemo, sugoku, sukoshi, chotto, amari, zenzen, and donokurai.",
  "rules": [
    {
      "title": "Positive Degree Modifiers",
      "formula": "とても / すごく (Very) | すこし / ちょっと (A little / A bit)",
      "explanation": "Use とても or colloquial すごく to intensify positive states: \"とても あついです\" (It is very hot). Use すこし or casual ちょっと for mild degrees: \"ちょっと あついです\" (It is a bit hot)."
    },
    {
      "title": "Negative Polarity Harmony (Mandatory Negation)",
      "formula": "あまり + Negative (~ない) | ぜんぜん + Negative (~ない)",
      "explanation": "Both あまり (not very) and ぜんぜん (not at all) MUST pair with a negative adjective or verb ending! Saying \"あまり あついです\" is invalid grammar; you must say \"あまり あつくない です\" (not very hot) or \"ぜんぜん あつくない です\" (not at all hot)."
    },
    {
      "title": "Asking \"How Much / To What Extent?\"",
      "formula": "どのくらい / どのぐらい / どれくらい / どれぐらい",
      "explanation": "To inquire about extent, distance, time, or cost, use どのくらい (or conversational どのぐらい / どれくらい). For example: \"どのくらい あつい です か？\" (How hot is it?)."
    }
  ],
  "tables": [
    {
      "title": "Degree Spectrum from 100% to 0%",
      "headers": [
        "Word",
        "Romaji",
        "Meaning",
        "Sentence Requirement",
        "Example"
      ],
      "rows": [
        [
          "とても",
          "totemo",
          "very",
          "Affirmative",
          "とても おいしい です (Very delicious)"
        ],
        [
          "すごく",
          "sugoku",
          "super / immensely",
          "Affirmative",
          "すごく たかい です (Super expensive)"
        ],
        [
          "すこし",
          "sukoshi",
          "a little",
          "Affirmative",
          "すこし さむい です (A little cold)"
        ],
        [
          "ちょっと",
          "chotto",
          "a bit / somewhat",
          "Affirmative",
          "ちょっと むずかしい です (A bit hard)"
        ],
        [
          "あまり",
          "amari",
          "not very / rarely",
          "NEGATIVE (~ない)",
          "あまり たかくない です (Not very pricey)"
        ],
        [
          "ぜんぜん",
          "zenzen",
          "not at all / never",
          "NEGATIVE (~ない)",
          "ぜんぜん おいしくない です (Not tasty at all)"
        ],
        [
          "どのくらい",
          "donokurai",
          "how much / how long",
          "Question (? か)",
          "どのくらい かかります か (How long takes?)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "きょう は とても あつい です。",
      "romaji": "kyou wa totemo atsui desu.",
      "en": "Today is very hot."
    },
    {
      "ja": "この へや は あまり ひろくない です。",
      "romaji": "kono heya wa amari hirokunai desu.",
      "en": "This room is not very spacious."
    },
    {
      "ja": "にほんご の べんきょう は ぜんぜん つまらなくない です。",
      "romaji": "nihongo no benkyou wa zenzen tsumaranakunai desu.",
      "en": "Studying Japanese is not boring at all."
    },
    {
      "ja": "いえ から えき まで どのくらい です か？",
      "romaji": "ie kara eki made donokurai desu ka?",
      "en": "About how far is it from the house to the station?"
    }
  ],
  "quiz": [
    {
      "id": "adj2-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"This soup is not very hot.\" -> \"この スープ は あまり [ ? ] です。\"",
      "options": [
        "あつくない",
        "あつい",
        "あつかった",
        "あつくありませんでした"
      ],
      "correctAnswer": 0,
      "explanation": "あまり requires an affirmative negative ending: あつくない です.",
      "romaji": "kono suupu wa amari [ ? ] desu.",
      "romajiOptions": [
        "atsukunai",
        "atsui",
        "atsukatta",
        "atsuku arimasen deshita"
      ]
    },
    {
      "id": "adj2-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"That movie is not interesting at all.\"",
      "targetEn": "That movie is not interesting at all.",
      "chips": [
        "あの",
        "えいが",
        "は",
        "ぜんぜん",
        "おもしろくない",
        "です",
        "とても",
        "おもしろい"
      ],
      "correctAnswerSentence": "あの えいが は ぜんぜん おもしろくない です",
      "explanation": "ぜんぜん matches with the negative adjective form おもしろくない です."
    },
    {
      "id": "adj2-q3",
      "type": "audio-listening",
      "prompt": "Listen and determine how the speaker feels about the test.",
      "audioText": "この テスト は ちょっと むずかしい です。",
      "options": [
        "This test is a bit difficult.",
        "This test is very easy.",
        "This test is impossible.",
        "This test is not difficult at all."
      ],
      "correctAnswer": 0,
      "explanation": "ちょっと = a bit, むずかしい = difficult.",
      "romaji": "kono tesuto wa chotto muzukashii desu."
    },
    {
      "id": "adj2-q4",
      "type": "error-hunt",
      "prompt": "Which sentence has a polarity mismatch error?",
      "options": [
        "この かばん は あまり たかい です。",
        "きのう は とても さむかった です。",
        "かれ は すこし つかれました。",
        "ぜんぜん しずかじゃありません。"
      ],
      "correctAnswer": 0,
      "explanation": "\"あまり たかい です\" is grammatically incorrect because あまり requires a negative predicate (あまり たかくない です).",
      "romajiOptions": [
        "kono kaban wa amari takai desu.",
        "kinou wa totemo samukatta desu.",
        "kare wa sukoshi tsukaremashita.",
        "zenzen shizuka ja arimasen."
      ]
    },
    {
      "id": "adj2-q5",
      "type": "multiple-choice",
      "prompt": "Which degree word means \"super / immensely\" in casual Japanese?",
      "question": "Which degree word means \"super / immensely\" in casual Japanese?",
      "options": [
        "すごく",
        "すこし",
        "あまり",
        "ぜんぜん"
      ],
      "correctAnswer": 0,
      "explanation": "すごく is the casual adverb form used widely in conversation meaning \"super / really\".",
      "romajiOptions": [
        "sugoku",
        "sukoshi",
        "amari",
        "zenzen"
      ]
    },
    {
      "id": "adj2-q6",
      "type": "fill-blank",
      "prompt": "Ask extent: \"[ ? ] あつい です か？\" (How hot is it?)",
      "options": [
        "どのくらい",
        "だれ",
        "いつ",
        "なんじ"
      ],
      "correctAnswer": 0,
      "explanation": "どのくらい means \"how much / to what degree\".",
      "romaji": "[ ? ] atsui desu ka?",
      "romajiOptions": [
        "donokurai",
        "dare",
        "itsu",
        "nanji"
      ]
    },
    {
      "id": "adj2-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"Kyoto was very pretty.\"",
      "targetEn": "Kyoto was very pretty.",
      "chips": [
        "きょうと",
        "は",
        "とても",
        "きれい",
        "でした",
        "きれいな",
        "です"
      ],
      "correctAnswerSentence": "きょうと は とても きれい でした",
      "explanation": "In past predicate form, the な-adjective takes でした: きれい でした."
    },
    {
      "id": "adj2-q8",
      "type": "multiple-choice",
      "prompt": "What is the opposite degree of とても (very)?",
      "question": "What is the opposite degree of とても (very)?",
      "options": [
        "ぜんぜん ~ない (not at all)",
        "すごく (super)",
        "いつも (always)",
        "たくさん (a lot)"
      ],
      "correctAnswer": 0,
      "explanation": "ぜんぜん ~ない expresses 0% intensity (not at all), directly contrasting with とても (very)."
    },
    {
      "id": "adj2-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "この まち は ぜんぜん にぎやかじゃありません。",
      "options": [
        "This town is not lively at all.",
        "This town is very lively.",
        "This town is somewhat quiet.",
        "This town has many people."
      ],
      "correctAnswer": 0,
      "explanation": "ぜんぜん ... じゃありません = not at all, にぎやか = lively/bustling.",
      "romaji": "kono machi wa zenzen nigiyaka ja arimasen."
    },
    {
      "id": "adj2-q10",
      "type": "fill-blank",
      "prompt": "Choose the correct form: \"日本語 は [ ? ] むずかしくない です。\" (Japanese is not very hard.)",
      "options": [
        "あまり",
        "とても",
        "すこし",
        "ちょっと"
      ],
      "correctAnswer": 0,
      "explanation": "むずかしくない is negative, so only あまり fits among the choices to mean \"not very\".",
      "romaji": "nihongo wa [ ? ] muzukashikunai desu.",
      "romajiOptions": [
        "amari",
        "totemo",
        "sukoshi",
        "chotto"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "adj-degree-words",
  "jlptLevel": "N5",
  "category": "adjectives",
  "grammarPoints": [
    "Degree Words"
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
