// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-tai-form",
  "number": 6,
  "section": "verbs",
  "title": "Japanese \"Want to\" Form: Tai / Takunai",
  "shortTitle": "Want to (~たい)",
  "subtitle": "Express personal desires with verb stems conjugated with ~たい and ~たくない.",
  "rules": [
    {
      "title": "Forming the ~たい (Want to) Form",
      "formula": "Verb Stem (Masu stem) + たい です",
      "explanation": "Take the polite ます form, drop ます, and attach たい です: たべます -> たべたい です (I want to eat). のみます -> のみたい です (I want to drink). いきます -> いきたい です (I want to go)."
    },
    {
      "title": "Conjugating Like an い-Adjective",
      "formula": "Present (-): ~たくない です | Past (+): ~たかった です | Past (-): ~たくなかった です",
      "explanation": "Once たい is attached, it conjugates exactly like an い-adjective: たべたくない です (don't want to eat), たべたかった です (wanted to eat), たべたくなかった です (didn't want to eat)."
    },
    {
      "title": "Particle Choice: を vs が",
      "formula": "[Object] を / が + [Verb Stem] たい です",
      "explanation": "With ~たい, the object marker を can be replaced by が, especially for intimate desires: \"みず を のみたい\" and \"みず が のみたい\" are both completely natural."
    }
  ],
  "tables": [
    {
      "title": "Desire (~たい) Conjugation Matrix",
      "headers": [
        "Verb Base",
        "Want to (~たい)",
        "Do NOT Want to (~たくない)",
        "Wanted to (~たかった)",
        "Did NOT Want to (~たくなかった)"
      ],
      "rows": [
        [
          "いきます (go)",
          "いきたい です",
          "いきたくない です",
          "いきたかった です",
          "いきたくなかった です"
        ],
        [
          "たべます (eat)",
          "たべたい です",
          "たべたくない です",
          "たべたかった です",
          "たべたくなかった です"
        ],
        [
          "のみます (drink)",
          "のみたい です",
          "のみたくない です",
          "のみたかった です",
          "のみたくなかった です"
        ],
        [
          "かいます (buy)",
          "かいたい です",
          "かいたくない です",
          "かいたかった です",
          "かいたくなかった です"
        ],
        [
          "します (do)",
          "したい です",
          "したくない です",
          "したかった です",
          "したくなかった です"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "にほん に いきたい です。",
      "romaji": "nihon ni ikitai desu.",
      "en": "I want to go to Japan."
    },
    {
      "ja": "つめたい みず が のみたい です。",
      "romaji": "tsumetai mizu ga nomitai desu.",
      "en": "I want to drink cold water."
    },
    {
      "ja": "きょう は なにも たべたくない です。",
      "romaji": "kyou wa nanimo tabetakunai desu.",
      "en": "I don't want to eat anything today."
    },
    {
      "ja": "きのう あの えいが が みたかった です。",
      "romaji": "kinou ano eiga ga mitakatta desu.",
      "en": "I wanted to watch that movie yesterday."
    }
  ],
  "quiz": [
    {
      "id": "verb6-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"I want to buy a new computer.\" -> \"あたらしい パソコン を [ ? ] です。\"",
      "options": [
        "かいたい",
        "かうたい",
        "かいました",
        "かいたくない"
      ],
      "correctAnswer": 0,
      "explanation": "かいます stem かい + たい = かいたい です."
    },
    {
      "id": "verb6-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"I want to go to Japan.\"",
      "targetEn": "I want to go to Japan.",
      "chips": [
        "にほん に",
        "いきたい",
        "です",
        "いきたくない",
        "いきます"
      ],
      "correctAnswerSentence": "にほん に いきたい です",
      "explanation": "Destination に + いきたい です."
    },
    {
      "id": "verb6-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the speaker's desire.",
      "audioText": "なにか つめたい もの を のみたい です。",
      "options": [
        "I want to drink something cold.",
        "I want to eat something hot.",
        "I do not want to drink anything.",
        "I drank cold water."
      ],
      "correctAnswer": 0,
      "explanation": "なにか つめたい もの = something cold, のみたい = want to drink."
    },
    {
      "id": "verb6-q4",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid ~たい stem conjugation?",
      "options": [
        "すし を たべるたい です。",
        "すし を たべたい です。",
        "すし を たべたくない です。",
        "すし を たべたかった です。"
      ],
      "correctAnswer": 0,
      "explanation": "~たい must attach to the MASU stem (たべ-), never the dictionary form (たべる-). It must be \"たべたい です\".",
      "romajiOptions": [
        "sushi o taberutai desu.",
        "sushi o tabetai desu.",
        "sushi o tabetakunai desu.",
        "sushi o tabetakatta desu."
      ]
    },
    {
      "id": "verb6-q5",
      "type": "multiple-choice",
      "prompt": "What is the past negative form of \"いきたい です\" (want to go)?",
      "question": "What is the past negative form of \"いきたい です\" (want to go)?",
      "options": [
        "いきたくなかった です",
        "いきたかった です",
        "いきたくない でした",
        "いきませんでした"
      ],
      "correctAnswer": 0,
      "explanation": "Negative past of い-adjectives is ~くなかった です: いきたくなかった です."
    },
    {
      "id": "verb6-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I do not want to do homework today.\" -> \"きょう は しゅくだい を [ ? ] です。\"",
      "options": [
        "したくない",
        "したい",
        "したかった",
        "するたい"
      ],
      "correctAnswer": 0,
      "explanation": "します stem し + たくない = したくない です."
    },
    {
      "id": "verb6-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"What do you want to eat?\"",
      "targetEn": "What do you want to eat?",
      "chips": [
        "なに を",
        "たべたい",
        "です か？",
        "たべます",
        "の"
      ],
      "correctAnswerSentence": "なに を たべたい です か？",
      "explanation": "なに を + たべたい です か？."
    },
    {
      "id": "verb6-q8",
      "type": "multiple-choice",
      "prompt": "Which particle can replace \"を\" when using the ~たい form?",
      "question": "Which particle can replace \"を\" when using the ~たい form?",
      "options": [
        "が",
        "に",
        "で",
        "へ"
      ],
      "correctAnswer": 0,
      "explanation": "With ~たい, both を and が can mark the object of desire (e.g. おちゃ が のみたい)."
    },
    {
      "id": "verb6-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "やすみ に どこ に いきたい です か？",
      "options": [
        "Where do you want to go on vacation?",
        "When do you want to go on vacation?",
        "Who do you want to go with?",
        "Why do you want to go on vacation?"
      ],
      "correctAnswer": 0,
      "explanation": "どこ に いきたい です か = where do you want to go?"
    },
    {
      "id": "verb6-q10",
      "type": "fill-blank",
      "prompt": "Select the form for \"wanted to see\": \"きのう えいが が [ ? ] です。\"",
      "options": [
        "みたかった",
        "みたい",
        "みたくない",
        "みなかった"
      ],
      "correctAnswer": 0,
      "explanation": "Past desire is ~たかった: みたかった です."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-tai-form",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Want to (~たい)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-verbs"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
