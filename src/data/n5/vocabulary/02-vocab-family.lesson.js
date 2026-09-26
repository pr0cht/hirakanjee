// JLPT N5 Lesson Module
export const lesson = {
  "id": "vocab-family",
  "number": 2,
  "section": "vocabulary",
  "title": "Japanese Family Words: In-Group vs Out-Group",
  "shortTitle": "Family Words",
  "subtitle": "Learn the humble terms for your own family and polite honorific terms for other people's families.",
  "rules": [
    {
      "title": "Uchi (In-Group) vs Soto (Out-Group)",
      "formula": "Own Family = Humble | Someone Else's Family = Respectful (~さん)",
      "explanation": "Japanese etiquette strictly separates how you refer to your own family versus someone else's family. When speaking about your own father to an outsider, use the humble \"ちち\". When referring to someone else's father, use respectful \"おとうさん\"."
    },
    {
      "title": "Never Use \"さん\" on Your Own Family!",
      "formula": "Talking to outsider: \"ちち は...\" (Never \"わたし の おとうさん は\"!)",
      "explanation": "A common foreigner mistake is saying \"わたし の おとうさん は...\" to a teacher or boss. In Japanese business and polite society, calling your own parents with \"さん\" sounds childish and impolite to the listener."
    }
  ],
  "tables": [
    {
      "title": "Family Members Dual Reference Chart",
      "headers": [
        "Member",
        "My Family (Humble)",
        "Someone Else's Family (Respectful)"
      ],
      "rows": [
        [
          "Father",
          "ちち (chichi)",
          "おとうさん (otousan)"
        ],
        [
          "Mother",
          "はは (haha)",
          "おかあさん (okaasan)"
        ],
        [
          "Older Brother",
          "あに (ani)",
          "おにいさん (oniisan)"
        ],
        [
          "Older Sister",
          "あね (ane)",
          "おねえさん (oneesan)"
        ],
        [
          "Younger Brother",
          "おとうと (otouto)",
          "おとうとさん (otoutosan)"
        ],
        [
          "Younger Sister",
          "いもうと (imouto)",
          "いもうとさん (imoutosan)"
        ],
        [
          "Husband",
          "おっと / しゅじん (otto / shujin)",
          "ごしゅじん (goshujin)"
        ],
        [
          "Wife",
          "つま / かない (tsuma / kanai)",
          "おくさん (okusan)"
        ],
        [
          "Son",
          "むすこ (musuko)",
          "むすこさん (musukosan)"
        ],
        [
          "Daughter",
          "むすめ (musume)",
          "むすめさん (musumesan)"
        ],
        [
          "Family (General)",
          "かぞく (kazoku)",
          "ごかぞく (gokazoku)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "ちち は かいしゃいん です。",
      "romaji": "chichi wa kaishain desu.",
      "en": "My father is a company employee (speaking humbly to an outsider)."
    },
    {
      "ja": "たなかさん の おかあさん は おげんき です か？",
      "romaji": "tanaka-san no okaasan wa ogenki desu ka?",
      "en": "Is Mr. Tanaka's mother doing well?"
    },
    {
      "ja": "わたし の かぞく は 4にん です。",
      "romaji": "watashi no kazoku wa yonin desu.",
      "en": "My family has 4 people."
    },
    {
      "ja": "ごしゅじん は どこ で はたらいて います か？",
      "romaji": "goshujin wa doko de hataraite imasu ka?",
      "en": "Where does your husband work? (respectful)."
    }
  ],
  "quiz": [
    {
      "id": "vocab2-q1",
      "type": "multiple-choice",
      "prompt": "When talking to your boss about your own mother, what word do you use?",
      "question": "When talking to your boss about your own mother, what word do you use?",
      "options": [
        "はは (haha)",
        "おかあさん (okaasan)",
        "ははさん (hahasan)",
        "ママ (mama)"
      ],
      "correctAnswer": 0,
      "explanation": "You must use the humble in-group term はは (haha) when speaking about your own mother to an outsider."
    },
    {
      "id": "vocab2-q2",
      "type": "fill-blank",
      "prompt": "Politely ask about someone's father: \"たなかさん の [ ? ] は せんせい です か？\"",
      "options": [
        "おとうさん",
        "ちち",
        "おとうと",
        "あに"
      ],
      "correctAnswer": 0,
      "explanation": "Referring to someone else's father respectfully requires おとうさん."
    },
    {
      "id": "vocab2-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"My older brother is a university student.\"",
      "targetEn": "My older brother is a university student.",
      "chips": [
        "あに は",
        "だいがくせい",
        "です",
        "おにいさん は",
        "あね は"
      ],
      "correctAnswerSentence": "あに は だいがくせい です",
      "explanation": "Humble term for one's own older brother is あに."
    },
    {
      "id": "vocab2-q4",
      "type": "error-hunt",
      "prompt": "Which sentence violates Japanese family etiquette when speaking to an outsider?",
      "options": [
        "わたし の おかあさん は いしゃ です。",
        "わたし の はは は いしゃ です。",
        "ちち は まいにち はたらきます。",
        "あに は とうきょう に すんでいます。"
      ],
      "correctAnswer": 0,
      "explanation": "Calling your own mother \"おかあさん\" when describing her occupation to an outsider is an etiquette violation; use \"はは\".",
      "romajiOptions": [
        "watashi no okaasan wa isha desu.",
        "watashi no haha wa isha desu.",
        "chichi wa mainichi hatarakimasu.",
        "ani wa toukyou ni sunde imasu."
      ]
    },
    {
      "id": "vocab2-q5",
      "type": "multiple-choice",
      "prompt": "What is the respectful word for someone else's wife?",
      "question": "What is the respectful word for someone else's wife?",
      "options": [
        "おくさん (okusan)",
        "つま (tsuma)",
        "かない (kanai)",
        "かのじょ (kanojo)"
      ],
      "correctAnswer": 0,
      "explanation": "おくさん is the polite honorific for someone else's wife."
    },
    {
      "id": "vocab2-q6",
      "type": "fill-blank",
      "prompt": "Complete for one's own younger sister: \"わたし の [ ? ] は 15さい です。\"",
      "options": [
        "いもうと",
        "いもうとさん",
        "おねえさん",
        "あね"
      ],
      "correctAnswer": 0,
      "explanation": "Humble term for one's own younger sister is いもうと."
    },
    {
      "id": "vocab2-q7",
      "type": "audio-listening",
      "prompt": "Listen and identify the family member being discussed.",
      "audioText": "おねえさん は ピアノ が じょうず です ね。",
      "options": [
        "Your older sister.",
        "My older sister.",
        "Your mother.",
        "Your younger sister."
      ],
      "correctAnswer": 0,
      "explanation": "おねえさん refers respectfully to the listener's older sister."
    },
    {
      "id": "vocab2-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"How many people are in your family?\"",
      "targetEn": "How many people are in your family?",
      "chips": [
        "ごかぞく は",
        "なんにん",
        "です か？",
        "かぞく は",
        "だれ"
      ],
      "correctAnswerSentence": "ごかぞく は なんにん です か？",
      "explanation": "Asking respectfully about someone else's family uses ごかぞく."
    },
    {
      "id": "vocab2-q9",
      "type": "multiple-choice",
      "prompt": "What is the humble term for \"my son\"?",
      "question": "What is the humble term for \"my son\"?",
      "options": [
        "むすこ (musuko)",
        "むすめ (musume)",
        "むすこさん (musukosan)",
        "こどもさん (kodomosan)"
      ],
      "correctAnswer": 0,
      "explanation": "むすこ is the humble term for one's own son (daughter is むすめ)."
    },
    {
      "id": "vocab2-q10",
      "type": "fill-blank",
      "prompt": "Complete for one's own husband: \"[ ? ] は いま いえ に いません。\"",
      "options": [
        "おっと",
        "ごしゅじん",
        "おにいさん",
        "おとうさん"
      ],
      "correctAnswer": 0,
      "explanation": "Humble term for one's own husband is おっと or しゅじん."
    }
  ]
};

export const lessonMeta = {
  "id": "vocab-family",
  "jlptLevel": "N5",
  "category": "vocabulary",
  "grammarPoints": [
    "Family Words"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-vocabulary"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
