// JLPT N4 Lesson Module
export const lesson = {
  "id": "special-honorifics",
  "number": 4,
  "section": "special",
  "title": "Japanese Honorifics & Friend Words: Tomodachi, ...san, ...chan, ...kun",
  "shortTitle": "Honorifics & Friend Words",
  "subtitle": "Master name suffixes (~san, ~chan, ~kun, ~sensei) and terms for friendships.",
  "rules": [
    {
      "title": "～さん (-san): The Default Polite Suffix",
      "formula": "[Last Name / First Name] + さん (e.g. たなかさん, さくらさん)",
      "explanation": "～さん is the standard polite honorific used for adults, acquaintances, coworkers, and strangers. It is gender-neutral and equivalent to Mr., Ms., or Mrs., but much more common."
    },
    {
      "title": "～ちゃん (-chan) & ～くん (-kun)",
      "formula": "～ちゃん: Affectionate, children, female friends | ～くん: Boys, male peers, junior coworkers",
      "explanation": "～ちゃん adds warmth and cuteness, used for toddlers, close female friends, or pets. ～くん is used for schoolboys, male friends, or by seniors addressing junior male colleagues at work."
    },
    {
      "title": "Professional Titles: ～先生 (せんせい) & ～様 (さま)",
      "formula": "先生 (Sensei) = Teacher, Doctor, Author | 様 (Sama) = High honor, Customers (お客様)",
      "explanation": "Do NOT attach ～さん to teachers or doctors; use 先生 (せんせい) directly as a title: \"やまだ先生\" (Teacher Yamada). 様 (さま) is used for esteemed deities, royalty, or valued store customers (おきゃくさま)."
    },
    {
      "title": "THE GOLDEN RULE: NEVER Use Honorifics on Yourself!",
      "formula": "Say: \"わたし は スミス です\" | NEVER say: \"わたし は スミスさん です\" ✕",
      "explanation": "Japanese honorific suffixes exist to elevate the OTHER person. Using ～さん, ～ちゃん, or ～くん on yourself sounds pompous and is a major linguistic faux pas!"
    }
  ],
  "tables": [
    {
      "title": "Friendship Words (Core N5: 友だち | Cultural Enrichment: 先輩, 後輩, 親友)",
      "headers": [
        "Term",
        "Hiragana",
        "Romaji",
        "Meaning",
        "Nuance"
      ],
      "rows": [
        [
          "友だち [Core N5]",
          "ともだち",
          "tomodachi",
          "Friend",
          "Standard everyday N5 friend word"
        ],
        [
          "親友 [Beyond N5]",
          "しんゆう",
          "shinyuu",
          "Best friend",
          "Deep, close, trusted friend (N3 enrichment)"
        ],
        [
          "知り合い [Beyond N5]",
          "しりあい",
          "shiriai",
          "Acquaintance",
          "Person you know, but not close (N4 enrichment)"
        ],
        [
          "同僚 [Beyond N5]",
          "どうりょう",
          "douryou",
          "Coworker / Colleague",
          "Work peer (N3 enrichment)"
        ],
        [
          "先輩 [Beyond N5]",
          "せんぱい",
          "senpai",
          "Senior member",
          "Older/senior school or club mentor (N4 enrichment)"
        ],
        [
          "後輩 [Beyond N5]",
          "こうはい",
          "kouhai",
          "Junior member",
          "Younger/junior mentee (N4 enrichment)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "やまださん は とても しんせつ です。",
      "romaji": "yamada-san wa totemo shinsetsu desu.",
      "en": "Mr. Yamada is very kind."
    },
    {
      "ja": "かのじょ は わたし の 親友 です。",
      "romaji": "kanojo wa watashi no shinyuu desu.",
      "en": "She is my best friend."
    },
    {
      "ja": "さとう先生、しつもん が あります。",
      "romaji": "satou-sensei, shitsumon ga arimasu.",
      "en": "Teacher Sato, I have a question."
    },
    {
      "ja": "はじめまして、ジョン です。よろしく おねがいします。",
      "romaji": "hajimemashite, jon desu. yoroshiku onegaishimasu.",
      "en": "Nice to meet you, I am John (no -san on oneself)."
    }
  ],
  "quiz": [
    {
      "id": "hon-q1",
      "type": "multiple-choice",
      "prompt": "When introducing yourself, which is the correct Japanese etiquette?",
      "options": [
        "わたし は たなか です。(No -san)",
        "わたし は たなかさん です。",
        "わたし は たなかさま です。",
        "わたし は たなかちゃん です。"
      ],
      "correctAnswer": 0,
      "explanation": "Never use honorific suffixes like -san, -chan, or -sama on your own name!"
    },
    {
      "id": "hon-q2",
      "type": "fill-blank",
      "prompt": "What title should you attach when addressing your doctor or teacher?",
      "options": [
        "先生 (せんせい)",
        "さん (san)",
        "くん (kun)",
        "ちゃん (chan)"
      ],
      "correctAnswer": 0,
      "explanation": "Teachers and medical doctors are addressed with 先生 (せんせい)."
    },
    {
      "id": "hon-q3",
      "type": "multiple-choice",
      "prompt": "What word means \"best friend\" in Japanese?",
      "options": [
        "親友 (しんゆう)",
        "友だち (ともだち)",
        "知り合い (しりあい)",
        "同僚 (どうりょう)"
      ],
      "correctAnswer": 0,
      "explanation": "親友 (しんゆう) specifically means \"best friend\"."
    },
    {
      "id": "hon-q4",
      "type": "word-bank",
      "prompt": "Assemble: \"Mr. Tanaka is a coworker.\"",
      "targetEn": "Mr. Tanaka is a coworker.",
      "chips": [
        "たなかさん は",
        "同僚 です",
        "親友 です",
        "知り合い です"
      ],
      "correctAnswerSentence": "たなかさん は 同僚 です",
      "explanation": "同僚 (どうりょう) means coworker or colleague."
    },
    {
      "id": "hon-q5",
      "type": "audio-listening",
      "prompt": "Listen to the introduction.",
      "audioText": "はじめまして、マイク です。どうぞ よろしく。",
      "options": [
        "Nice to meet you, I am Mike.",
        "Mr. Mike is my friend.",
        "Where is Mike?",
        "Mike is a teacher."
      ],
      "correctAnswer": 0,
      "explanation": "The speaker introduced himself politely without -san:「はじめまして、マイク です」。"
    },
    {
      "id": "hon-q6",
      "type": "multiple-choice",
      "prompt": "Which suffix is most appropriate for a small child or close female friend?",
      "options": [
        "～ちゃん (-chan)",
        "～様 (-sama)",
        "～先生 (-sensei)",
        "～氏 (-shi)"
      ],
      "correctAnswer": 0,
      "explanation": "～ちゃん is affectionate and diminutive, ideal for children and close friends."
    },
    {
      "id": "hon-q7",
      "type": "fill-blank",
      "prompt": "What is a person you know, but are not close friends with, called?",
      "options": [
        "知り合い (しりあい)",
        "親友 (しんゆう)",
        "かぞく (kazoku)",
        "きょうだい (kyoudai)"
      ],
      "correctAnswer": 0,
      "explanation": "An acquaintance is called 知り合い (しりあい)."
    },
    {
      "id": "hon-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"Yamada-sensei is very kind.\"",
      "targetEn": "Yamada-sensei is very kind.",
      "chips": [
        "やまだ先生 は",
        "とても",
        "親切 です",
        "友だち です"
      ],
      "correctAnswerSentence": "やまだ先生 は とても 親切 です",
      "explanation": "Address teachers with 先生: やまだ先生."
    },
    {
      "id": "hon-q9",
      "type": "error-hunt",
      "prompt": "Spot the cultural etiquette error in self-introductions:",
      "options": [
        "はじめまして、スミスさん と もうします。",
        "はじめまして、スミス と もうします。",
        "はじめまして、スミス です。",
        "たなかさん、はじめまして。"
      ],
      "correctAnswer": 0,
      "explanation": "Calling oneself「スミスさん」violates the rule of not applying honorifics to oneself."
    },
    {
      "id": "hon-q10",
      "type": "multiple-choice",
      "prompt": "What suffix is commonly used for schoolboys or male peers?",
      "options": [
        "～くん (-kun)",
        "～さま (-sama)",
        "～せんせい (-sensei)",
        "～ちゃん (-chan)"
      ],
      "correctAnswer": 0,
      "explanation": "～くん (-kun) is the standard suffix for boys and male peers."
    }
  ]
};

export const lessonMeta = {
  "id": "special-honorifics",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Honorifics & Friend Words"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-special"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
