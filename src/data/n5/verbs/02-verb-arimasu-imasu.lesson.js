// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-arimasu-imasu",
  "number": 2,
  "section": "verbs",
  "title": "Existence: Arimasu (Things) vs Imasu (People/Animals)",
  "shortTitle": "Arimasu vs Imasu",
  "subtitle": "Master the fundamental distinction between non-living objects (あります) and living beings (います).",
  "rules": [
    {
      "title": "Inanimate vs Animate Existence",
      "formula": "Inanimate: [Things / Plants / Events] が あります | Animate: [People / Animals] が います",
      "explanation": "Japanese strictly divides verbs of existence: あります is for inanimate objects (books, cars, trees, events, time). います is for sentient living beings that move under their own will (people, dogs, cats, insects)."
    },
    {
      "title": "Stating What Exists Where",
      "formula": "[Place] に [Noun] が あります / います",
      "explanation": "Use に to mark the location of existence, and が to mark what exists: \"つくえ の うえ に ほん が あります\" (There is a book on the desk). \"にわ に ねこ が います\" (There is a cat in the garden)."
    },
    {
      "title": "Locating a Known Subject",
      "formula": "[Subject] は [Place] に あります / います",
      "explanation": "When asking or stating the location of a known topic: \"たなかさん は どこ に います か？\" (Where is Mr. Tanaka?). \"ぎんこう は えき の まえ に あります\" (The bank is in front of the station)."
    }
  ],
  "tables": [
    {
      "title": "Arimasu vs Imasu Categorization",
      "headers": [
        "Category",
        "Verb to Use",
        "Example Nouns",
        "Sample Sentence"
      ],
      "rows": [
        [
          "Inanimate Objects",
          "あります (arimasu)",
          "ほん, くるま, テレビ, ペン",
          "つくえ に ペン が あります。"
        ],
        [
          "Plants & Nature",
          "あります (arimasu)",
          "き (tree), はな (flower)",
          "こうえん に はな が あります。"
        ],
        [
          "Abstract / Events",
          "あります (arimasu)",
          "じかん (time), テスト, おかね",
          "きょう は じかん が あります。"
        ],
        [
          "People",
          "います (imasu)",
          "せんせい, がくせい, こども",
          "きょうしつ に せんせい が います。"
        ],
        [
          "Animals & Pets",
          "います (imasu)",
          "いぬ, ねこ, とり, さかな",
          "へや に ねこ が います。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "あそこ に ぎんこう が あります。",
      "romaji": "asoko ni ginkou ga arimasu.",
      "en": "There is a bank over there."
    },
    {
      "ja": "つくえ の した に ねこ が います。",
      "romaji": "tsukue no shita ni neko ga imasu.",
      "en": "There is a cat under the desk."
    },
    {
      "ja": "きょう は にほんご の クラス が あります。",
      "romaji": "kyou wa nihongo no kurasu ga arimasu.",
      "en": "There is a Japanese class today."
    },
    {
      "ja": "たなかさん は かいしゃ に います。",
      "romaji": "tanaka-san wa kaisha ni imasu.",
      "en": "Mr. Tanaka is at the company."
    }
  ],
  "quiz": [
    {
      "id": "verb2-q1",
      "type": "fill-blank",
      "prompt": "Choose the correct existence verb: \"こうえん に こども が [ ? ]。\"",
      "options": [
        "います",
        "あります",
        "します",
        "いきます"
      ],
      "correctAnswer": 0,
      "explanation": "こども (children) are living beings, so います is mandatory.",
      "romaji": "kouen ni kodomo ga [ ? ].",
      "romajiOptions": [
        "imasu",
        "arimasu",
        "shimasu",
        "ikimasu"
      ]
    },
    {
      "id": "verb2-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"There is a book on the desk.\"",
      "targetEn": "There is a book on the desk.",
      "chips": [
        "つくえ の",
        "うえ に",
        "ほん が",
        "あります",
        "います",
        "で"
      ],
      "correctAnswerSentence": "つくえ の うえ に ほん が あります",
      "explanation": "ほん (book) is an inanimate object, requiring あります."
    },
    {
      "id": "verb2-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify what exists in the room.",
      "audioText": "へや の なか に いぬ が います。",
      "options": [
        "There is a dog inside the room.",
        "There is a cat inside the room.",
        "There is a desk inside the room.",
        "There is nobody inside the room."
      ],
      "correctAnswer": 0,
      "explanation": "いぬ = dog, います = animate existence.",
      "romaji": "heya no naka ni inu ga imasu."
    },
    {
      "id": "verb2-q4",
      "type": "error-hunt",
      "prompt": "Which sentence contains an existence verb mismatch?",
      "options": [
        "あそこ に たなかさん が あります。",
        "つくえ の うえ に ほん が あります。",
        "いえ に ねこ が います。",
        "ロビー に がくせい が います。"
      ],
      "correctAnswer": 0,
      "explanation": "たなかさん is a person and cannot take あります. It must be \"たなかさん が います\".",
      "romajiOptions": [
        "asoko ni tanaka-san ga arimasu.",
        "tsukue no ue ni hon ga arimasu.",
        "ie ni neko ga imasu.",
        "robii ni gakusei ga imasu."
      ]
    },
    {
      "id": "verb2-q5",
      "type": "multiple-choice",
      "prompt": "Which verb is used for abstract nouns like \"じかん\" (time) or \"おかね\" (money)?",
      "question": "Which verb is used for abstract nouns like \"じかん\" (time) or \"おかね\" (money)?",
      "options": [
        "あります",
        "います",
        "します",
        "なります"
      ],
      "correctAnswer": 0,
      "explanation": "Time and money are inanimate abstractions, so they pair with あります (じかん が あります / おかね が あります).",
      "romajiOptions": [
        "arimasu",
        "imasu",
        "shimasu",
        "narimasu"
      ]
    },
    {
      "id": "verb2-q6",
      "type": "fill-blank",
      "prompt": "Ask location: \"トイレ は どこ [ ? ] あります か？\"",
      "options": [
        "に",
        "で",
        "を",
        "が"
      ],
      "correctAnswer": 0,
      "explanation": "Location of existence is marked by に: どこ に あります か？",
      "romaji": "toire wa doko [ ? ] arimasu ka?",
      "romajiOptions": [
        "ni",
        "de",
        "o",
        "ga"
      ]
    },
    {
      "id": "verb2-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I do not have money.\"",
      "targetEn": "I do not have money.",
      "chips": [
        "おかね",
        "が",
        "ありません",
        "いません",
        "は",
        "で"
      ],
      "correctAnswerSentence": "おかね が ありません",
      "explanation": "Negative existence of inanimate objects is ありません."
    },
    {
      "id": "verb2-q8",
      "type": "multiple-choice",
      "prompt": "How do you say \"There was a meeting yesterday\"?",
      "question": "How do you say \"There was a meeting yesterday\"?",
      "options": [
        "きのう かいぎ が ありました。",
        "きのう かいぎ が いました。",
        "きのう かいぎ が あります。",
        "きのう かいぎ が いませんでした。"
      ],
      "correctAnswer": 0,
      "explanation": "かいぎ (meeting) is an event/inanimate noun; its past existence is ありました.",
      "romajiOptions": [
        "kinou kaigi ga arimashita.",
        "kinou kaigi ga imashita.",
        "kinou kaigi ga arimasu.",
        "kinou kaigi ga imasen deshita."
      ]
    },
    {
      "id": "verb2-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify where the teacher is.",
      "audioText": "せんせい は きょうしつ に います。",
      "options": [
        "The teacher is in the classroom.",
        "The teacher is in the office.",
        "The teacher is at home.",
        "The teacher is in the library."
      ],
      "correctAnswer": 0,
      "explanation": "きょうしつ = classroom, います = is (animate).",
      "romaji": "sensei wa kyoushitsu ni imasu."
    },
    {
      "id": "verb2-q10",
      "type": "fill-blank",
      "prompt": "Choose the verb: \"いけ に さかな が [ ? ]。\"",
      "options": [
        "います",
        "あります",
        "たべます",
        "いきます"
      ],
      "correctAnswer": 0,
      "explanation": "さかな (fish) is an animal, so います is the correct existence verb.",
      "romaji": "ike ni sakana ga [ ? ].",
      "romajiOptions": [
        "imasu",
        "arimasu",
        "tabemasu",
        "ikimasu"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "verb-arimasu-imasu",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Arimasu vs Imasu"
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
