// JLPT N5 Lesson Module
export const lesson = {
  "id": "contrast-but-words",
  "number": 11,
  "title": "JLPT N5: Contrast: \"but\" words in Japanese - demo, kedo, ga, shikashi",
  "shortTitle": "Contrast Words (Demo, Kedo, Ga, Shikashi)",
  "subtitle": "Master the four words for \"but\" and their formality levels.",
  "description": "Differentiate conversational でも (demo), clause-linking ～けど (kedo), formal ～が (ga), and essay connector しかし (shikashi).",
  "sections": [
    {
      "title": "1. The 4 Japanese \"But\" Words",
      "table": {
        "headers": [
          "Word",
          "Position",
          "Formality",
          "Function"
        ],
        "rows": [
          [
            "でも (demo)",
            "Sentence start only",
            "Conversational",
            "Starts a new sentence: \"..., but...\""
          ],
          [
            "～けど (kedo)",
            "Connects two clauses",
            "Casual spoken",
            "Soft connector: Clause A けど, Clause B"
          ],
          [
            "～が (ga)",
            "Connects two clauses",
            "Polite / Standard",
            "Polite connector: Clause A が, Clause B"
          ],
          [
            "しかし (shikashi)",
            "Sentence start only",
            "Formal / Literary",
            "Written / Serious transition: \"However...\""
          ]
        ]
      },
      "examples": [
        {
          "jp": "にほんご は むずかしい です。でも、おもしろい です。",
          "romaji": "Nihongo wa muzukashii desu. Demo, omoshiroi desu.",
          "en": "Japanese is difficult. But, it is interesting."
        },
        {
          "jp": "たかい です が、おいしい です。",
          "romaji": "Takai desu ga, oishii desu.",
          "en": "It is expensive, but it is delicious."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l11-q1",
      "type": "multiple-choice",
      "prompt": "Which 'but' word is used at the START of a new sentence in everyday spoken Japanese?",
      "question": "Which 'but' word is used at the START of a new sentence in everyday spoken Japanese?",
      "options": [
        "でも",
        "けど",
        "が",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "'でも' (demo) is used at the beginning of a new sentence.",
      "romajiOptions": [
        "demo",
        "kedo",
        "ga",
        "kara"
      ]
    },
    {
      "id": "l11-q2",
      "type": "word-bank",
      "prompt": "Build: 'Japanese is difficult, but it is interesting.'",
      "targetEn": "Japanese is difficult, but it is interesting.",
      "chips": [
        "にほんご",
        "は",
        "むずかしい",
        "です",
        "が",
        "おもしろい",
        "です",
        "でも"
      ],
      "correctOrder": [
        "にほんご",
        "は",
        "むずかしい",
        "です",
        "が",
        "おもしろい",
        "です"
      ],
      "explanation": "'が' connects the two contrasting clauses within a single sentence.",
      "romaji": "nihongo wa muzukashii desu ga omoshiroi desu"
    },
    {
      "id": "l11-q3",
      "type": "fill-blank",
      "prompt": "Choose the casual spoken clause connector for \"It's expensive, but delicious.\"",
      "sentence": "たかい です ___、おいしい です。",
      "blankWord": "けど",
      "options": [
        "けど",
        "でも",
        "しかし",
        "または"
      ],
      "correctAnswer": 0,
      "explanation": "'けど' connects two clauses mid-sentence colloquially.",
      "romaji": "takai desu [ ? ], oishii desu."
    },
    {
      "id": "l11-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English translation.",
      "audioText": "いきたい です が、じかん が ありません。",
      "options": [
        "I want to go, but I do not have time.",
        "I went, but it was not fun.",
        "I have time, so I want to go.",
        "Where do you want to go?"
      ],
      "correctAnswer": 0,
      "explanation": "'いきたい です が' (I want to go, but) + 'じかん が ありません' (have no time).",
      "romaji": "ikitai desu ga, jikan ga arimasen."
    },
    {
      "id": "l11-q5",
      "type": "word-bank",
      "prompt": "Build: 'I studied. However, the test was difficult.'",
      "targetEn": "I studied. However, the test was difficult.",
      "chips": [
        "べんきょう",
        "しました",
        "。",
        "しかし",
        "テスト",
        "は",
        "むずかしかった",
        "です"
      ],
      "correctOrder": [
        "べんきょう",
        "しました",
        "。",
        "しかし",
        "テスト",
        "は",
        "むずかしかった",
        "です"
      ],
      "explanation": "'しかし' begins a formal contrasting sentence.",
      "romaji": "benkyou shimashita. shikashi tesuto wa muzukashikatta desu."
    },
    {
      "id": "l11-q6",
      "type": "fill-blank",
      "prompt": "Which connector is a formal, written counterpart to demo?",
      "sentence": "___ は ぶんとう で つかう せつぞくし です。",
      "blankWord": "しかし",
      "options": [
        "しかし",
        "けど",
        "でもね",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "'しかし' (shikashi) is used in speeches, formal writing, and essays.",
      "romaji": "[ ? ] wa buntou de tsukau setsuzokushi desu."
    },
    {
      "id": "l11-q7",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a contrast word mid-sentence?",
      "options": [
        "あめ です が、いきます。",
        "たかい です。でも、かいます。",
        "やすみ です でも、いそがしい です。",
        "すき だ けど、たべません。"
      ],
      "correctAnswer": 2,
      "explanation": "'でも' cannot be jammed mid-sentence as a particle connector; use 'が' or 'けど'.",
      "romajiOptions": [
        "ame desu ga, ikimasu.",
        "takai desu. demo, kaimasu.",
        "yasumi desu demo, isogashii desu.",
        "suki da kedo, tabemasen."
      ]
    },
    {
      "id": "l11-q8",
      "type": "multiple-choice",
      "prompt": "When softening a statement or hesitating politely, speakers often trail off with:",
      "question": "When softening a statement or hesitating politely, speakers often trail off with:",
      "options": [
        "～けど or ～が",
        "～でも",
        "～しかし",
        "～または"
      ],
      "correctAnswer": 0,
      "explanation": "Ending a sentence with けど or が softens the statement politely.",
      "romajiOptions": [
        "~kedo or ~ga",
        "~demo",
        "~shikashi",
        "~matawa"
      ]
    },
    {
      "id": "l11-q9",
      "type": "word-bank",
      "prompt": "Build: 'It is cheap, but not good.'",
      "targetEn": "It is cheap, but not good.",
      "chips": [
        "やすい",
        "です",
        "が",
        "よくない",
        "です",
        "でも",
        "とても"
      ],
      "correctOrder": [
        "やすい",
        "です",
        "が",
        "よくない",
        "です"
      ],
      "explanation": "やすい です (cheap) + が (but) + よくない です (not good).",
      "romaji": "yasui desu ga yokunai desu"
    },
    {
      "id": "l11-q10",
      "type": "fill-blank",
      "prompt": "Conjunction が links clauses within:",
      "sentence": "せつぞくし 「が」 は ひとつの ぶん で ___ を つなぎます。",
      "blankWord": "Single compound",
      "options": [
        "Single compound",
        "Past tense only",
        "Question only",
        "Imperative only"
      ],
      "correctAnswer": 0,
      "explanation": "が acts as a conjunction joining two clauses into a single compound sentence.",
      "romaji": "setsuzokushi 'ga' wa hitotsu no bun de [ ? ] o tsunagimasu."
    }
  ]
};

export const lessonMeta = {
  "id": "contrast-but-words",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Contrast Words (Demo, Kedo, Ga, Shikashi)"
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
