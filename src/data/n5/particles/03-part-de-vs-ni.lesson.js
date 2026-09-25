// JLPT N4 Lesson Module
export const lesson = {
  "id": "part-de-vs-ni",
  "number": 3,
  "section": "particles",
  "title": "\"De\" vs \"Ni\" for Locations: Complete Usage Guide",
  "shortTitle": "で vs に (Locations)",
  "subtitle": "Learn when to use で (location of action) vs に (existence, arrival, and destination).",
  "rules": [
    {
      "title": "Action Location (で) vs Existence Location (に)",
      "formula": "[Place] で + [Dynamic Action Verb] | [Place] に + [Existence: あります / います]",
      "explanation": "If an active, dynamic event happens at the location (study, eat, buy, read), use で: \"としょかん で べんきょうします\" (study AT the library). If the location simply denotes where something exists or lives, use に: \"としょかん に ほん が あります\" (There are books IN the library)."
    },
    {
      "title": "Arrival & Destination: に",
      "formula": "[Place] に + つきます (arrive) / はいります (enter) / すみます (live)",
      "explanation": "Verbs of arrival, contact, and entering focus on the destination endpoint and strictly take に: \"えき に つきました\" (arrived AT the station), \"へや に はいります\" (enter the room), \"とうきょう に すんでいます\" (live in Tokyo)."
    }
  ],
  "tables": [
    {
      "title": "で vs に Location Contrast Table",
      "headers": [
        "Particle",
        "Core Function",
        "Typical Verbs",
        "Example Sentence"
      ],
      "rows": [
        [
          "で (de)",
          "Location where action takes place",
          "たべます, かいます, べんきょうします, よみます",
          "レストラン で たべます (eat at a restaurant)."
        ],
        [
          "に (ni)",
          "Location of existence / staying",
          "あります, います, とまります (stay)",
          "いえ に います (stay/be at home)."
        ],
        [
          "に (ni)",
          "Destination of entering / arriving",
          "つきます (arrive), はいります (enter)",
          "えき に つきました (arrived at station)."
        ],
        [
          "に (ni)",
          "Place of residence / living",
          "すみます (live)",
          "とうきょう に すんでいます (live in Tokyo)."
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "としょかん で ほん を よみます。",
      "romaji": "toshokan de hon o yomimasu.",
      "en": "I read books at the library (active action -> で)."
    },
    {
      "ja": "としょかん に たくさん ほん が あります。",
      "romaji": "toshokan ni takusan hon ga arimasu.",
      "en": "There are many books in the library (existence -> に)."
    },
    {
      "ja": "きのう レストラン で ともだち と ばんごはん を たべました。",
      "romaji": "kinou resutoran de tomodachi to bangohan o tabemashita.",
      "en": "Yesterday I ate dinner with my friend at a restaurant."
    },
    {
      "ja": "7じ に えき に つきました。",
      "romaji": "shichiji ni eki ni tsukimashita.",
      "en": "I arrived at the station at 7:00."
    }
  ],
  "quiz": [
    {
      "id": "part3-q1",
      "type": "fill-blank",
      "prompt": "Choose the particle: \"きょうしつ [ ? ] にほんご を べんきょうします。\"",
      "options": [
        "で",
        "に",
        "を",
        "へ"
      ],
      "correctAnswer": 0,
      "explanation": "べんきょうします is an active action; the location where it takes place uses で."
    },
    {
      "id": "part3-q2",
      "type": "fill-blank",
      "prompt": "Choose the particle: \"きょうしつ [ ? ] せんせい が います。\"",
      "options": [
        "に",
        "で",
        "を",
        "へ"
      ],
      "correctAnswer": 0,
      "explanation": "います is a verb of existence; location of existence strictly takes に."
    },
    {
      "id": "part3-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"I bought a notebook at the department store.\"",
      "targetEn": "I bought a notebook at the department store.",
      "chips": [
        "デパート で",
        "ノート を",
        "かいました",
        "デパート に",
        "ノート に"
      ],
      "correctAnswerSentence": "デパート で ノート を かいました",
      "explanation": "Buying is an action taking place at the department store: デパート で."
    },
    {
      "id": "part3-q4",
      "type": "error-hunt",
      "prompt": "Which sentence misuses the location particle for living/residence?",
      "options": [
        "とうきょう で すんでいます。",
        "とうきょう に すんでいます。",
        "とうきょう で はたらいて います。",
        "いえ に ねこ が います。"
      ],
      "correctAnswer": 0,
      "explanation": "すんでいます (living) denotes state/settlement and takes に, NEVER で. It must be \"とうきょう に すんでいます\".",
      "romajiOptions": [
        "toukyou de sunde imasu.",
        "toukyou ni sunde imasu.",
        "toukyou de hataraite imasu.",
        "ie ni neko ga imasu."
      ]
    },
    {
      "id": "part3-q5",
      "type": "multiple-choice",
      "prompt": "Which verb of arrival takes に for the destination?",
      "question": "Which verb of arrival takes に for the destination?",
      "options": [
        "つきます (arrive)",
        "はなします (speak)",
        "たべます (eat)",
        "のみます (drink)"
      ],
      "correctAnswer": 0,
      "explanation": "つきます (to arrive) focuses on the endpoint of arrival: えき に つきます."
    },
    {
      "id": "part3-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I enter the room.\" -> \"へや [ ? ] はいります。\"",
      "options": [
        "に",
        "で",
        "を",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "Entering into a location takes destination に: へや に はいります."
    },
    {
      "id": "part3-q7",
      "type": "audio-listening",
      "prompt": "Listen and identify where the speaker worked.",
      "audioText": "きのう いえ で しごと を しました。",
      "options": [
        "I worked at home yesterday.",
        "I stayed home yesterday.",
        "I left home yesterday.",
        "I arrived home yesterday."
      ],
      "correctAnswer": 0,
      "explanation": "いえ で (at home), しごと を しました (worked)."
    },
    {
      "id": "part3-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"There is a dog in the park.\"",
      "targetEn": "There is a dog in the park.",
      "chips": [
        "こうえん に",
        "いぬ が",
        "います",
        "こうえん で",
        "あります"
      ],
      "correctAnswerSentence": "こうえん に いぬ が います",
      "explanation": "Animate existence at a location: こうえん に ... が います."
    },
    {
      "id": "part3-q9",
      "type": "multiple-choice",
      "prompt": "Why does \"ホテル に とまります\" (stay at a hotel) take \"に\" rather than \"で\"?",
      "question": "Why does \"ホテル に とまります\" (stay at a hotel) take \"に\" rather than \"で\"?",
      "options": [
        "Because とまります denotes lodging/settling in a location, not an active dynamic event.",
        "Because ホテル is a foreign loanword.",
        "Because に is always used with hotels.",
        "Because で cannot follow places."
      ],
      "correctAnswer": 0,
      "explanation": "Lodging/settling in a spot (とまる) behaves like existence and takes に."
    },
    {
      "id": "part3-q10",
      "type": "fill-blank",
      "prompt": "Choose the particle: \"えき の まえ [ ? ] ぎんこう が あります。\"",
      "options": [
        "に",
        "で",
        "を",
        "へ"
      ],
      "correctAnswer": 0,
      "explanation": "Location of inanimate existence: えき の まえ に ぎんこう が あります."
    }
  ]
};

export const lessonMeta = {
  "id": "part-de-vs-ni",
  "jlptLevel": "N5",
  "category": "particles",
  "grammarPoints": [
    "で vs に (Locations)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-particles"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
