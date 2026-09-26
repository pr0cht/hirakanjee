// JLPT N5 Lesson Module
export const lesson = {
  "id": "japanese-pronouns",
  "number": 2,
  "title": "JLPT N5: Japanese pronouns - I, you, she, he, we, they",
  "shortTitle": "Japanese Pronouns (I, You, She, He)",
  "subtitle": "Learn personal pronouns, plural forms, and cultural rules on pronoun omission.",
  "description": "Understand わたし, あなた, かれ, かのじょ, plural suffixes (～たち, ～ら), and why Japanese speakers naturally omit pronouns when context is clear.",
  "sections": [
    {
      "title": "1. Singular Personal Pronouns",
      "content": "Japanese pronouns change depending on formality and gender. In standard polite Japanese, わたし is universal for \"I\".\n        \nImportant Cultural Rule:\n  Avoid using 'あなた' (you) directly with teachers, superiors, or colleagues. Instead, address them by their family name + さん (e.g., たなかさん).",
      "table": {
        "headers": [
          "Pronoun",
          "Japanese",
          "Romaji",
          "Usage / Formality"
        ],
        "rows": [
          [
            "I / Me (Neutral / Polite)",
            "わたし",
            "watashi",
            "Standard polite for everyone"
          ],
          [
            "I / Me (Informal Male)",
            "ぼく / おれ",
            "boku / ore",
            "Boku (casual), Ore (blunt)"
          ],
          [
            "You (Singular)",
            "あなた",
            "anata",
            "Use sparingly; prefer [Name]+さん"
          ],
          [
            "He / Him (or Boyfriend)",
            "かれ",
            "kare",
            "Third person male"
          ],
          [
            "She / Her (or Girlfriend)",
            "かのじょ",
            "kanojo",
            "Third person female"
          ]
        ]
      },
      "examples": [
        {
          "jp": "わたし は エンジニア です。",
          "romaji": "Watashi wa enjinia desu.",
          "en": "I am an engineer."
        },
        {
          "jp": "かれ は にほんじん です。",
          "romaji": "Kare wa nihonjin desu.",
          "en": "He is Japanese."
        },
        {
          "jp": "かのじょ は せんせい です。",
          "romaji": "Kanojo wa sensei desu.",
          "en": "She is a teacher."
        }
      ]
    },
    {
      "title": "2. Plural Pronouns (Adding ～たち and ～ら)",
      "content": "To make pronouns plural in Japanese, suffix ～たち (tachi) or ～ら (ra):",
      "table": {
        "headers": [
          "Plural Pronoun",
          "Japanese",
          "Romaji",
          "Meaning"
        ],
        "rows": [
          [
            "We / Us",
            "わたしたち",
            "watashitachi",
            "We (neutral polite)"
          ],
          [
            "You all",
            "あなたたち",
            "anatatachi",
            "You (plural)"
          ],
          [
            "They / Them (Male / Mixed)",
            "かれら",
            "karera",
            "They (neutral / formal)"
          ],
          [
            "They / Them (Female)",
            "かのじょたち",
            "kanojotachi",
            "They (all female group)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "わたしたち は がくせい です。",
          "romaji": "Watashitachi wa gakusei desu.",
          "en": "We are students."
        },
        {
          "jp": "かれら は アメリカじん です。",
          "romaji": "Karera wa amerikajin desu.",
          "en": "They are Americans."
        }
      ]
    },
    {
      "title": "3. Natural Pronoun Omission",
      "content": "In natural Japanese conversation, pronouns are omitted whenever context makes the subject obvious. Repeating わたし or あなた constantly sounds unnatural and repetitive!",
      "examples": [
        {
          "jp": "がくせい です か？",
          "romaji": "Gakusei desu ka.",
          "en": "(Are you) a student?"
        },
        {
          "jp": "はい、がくせい です。",
          "romaji": "Hai, gakusei desu.",
          "en": "Yes, (I am) a student."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l2-q1",
      "type": "multiple-choice",
      "prompt": "Why is 'あなた' (you) frequently avoided when speaking to a teacher or boss?",
      "question": "Why is 'あなた' (you) frequently avoided when speaking to a teacher or boss?",
      "options": [
        "It is considered overly direct; using their name + さん (or title like 先生) is polite.",
        "It can only be used when speaking to children.",
        "It is grammatically incorrect in questions.",
        "It means \"he\" instead of \"you\"."
      ],
      "correctAnswer": 0,
      "explanation": "In polite Japanese, addressing someone by their name + さん or title (先生) is much more respectful than saying あなた."
    },
    {
      "id": "l2-q2",
      "type": "word-bank",
      "prompt": "Build the sentence: 'We are Japanese.'",
      "targetEn": "We are Japanese.",
      "chips": [
        "わたしたち",
        "は",
        "にほんじん",
        "です",
        "かれら",
        "の"
      ],
      "correctOrder": [
        "わたしたち",
        "は",
        "にほんじん",
        "です"
      ],
      "explanation": "'わたしたち' (we) + 'は' + 'にほんじん' (Japanese person) + 'です'.",
      "romaji": "watashitachi wa nihonjin desu"
    },
    {
      "id": "l2-q3",
      "type": "fill-blank",
      "prompt": "Fill in the blank for \"He is Mr. Tanaka's friend.\"",
      "sentence": "___ は たなかさん の ともだち です。",
      "blankWord": "かれ",
      "options": [
        "かれ",
        "かのじょ",
        "わたし",
        "あなたたち"
      ],
      "correctAnswer": 0,
      "explanation": "'かれ' means 'he / him'.",
      "romaji": "[ ? ] wa tanaka-san no tomodachi desu."
    },
    {
      "id": "l2-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the matching English translation.",
      "audioText": "かのじょ は にほんご の せんせい です。",
      "options": [
        "She is a Japanese language teacher.",
        "He is a Japanese language student.",
        "They are Japanese language teachers.",
        "Are you a Japanese teacher?"
      ],
      "correctAnswer": 0,
      "explanation": "'かのじょ' (she) + 'は' + 'にほんご の せんせい' (Japanese teacher) + 'です'.",
      "romaji": "kanojo wa nihongo no sensei desu."
    },
    {
      "id": "l2-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'They (male/mixed) are students.'",
      "targetEn": "They are students.",
      "chips": [
        "かれら",
        "は",
        "がくせい",
        "です",
        "かのじょたち",
        "せんせい"
      ],
      "correctOrder": [
        "かれら",
        "は",
        "がくせい",
        "です"
      ],
      "explanation": "'かれら' refers to 'they' for males or mixed groups.",
      "romaji": "karera wa gakusei desu"
    },
    {
      "id": "l2-q6",
      "type": "fill-blank",
      "prompt": "Choose the question particle for the naturally omitted pronoun sentence \"(Are you) going to Tokyo tomorrow?\"",
      "sentence": "あした とうきょう へ いきます ___。",
      "blankWord": "か",
      "options": [
        "か",
        "は",
        "の",
        "よ"
      ],
      "correctAnswer": 0,
      "explanation": "Adding か turns the statement into a polite question without needing to say あなた.",
      "romaji": "ashita toukyou e ikimasu [ ? ]."
    },
    {
      "id": "l2-q7",
      "type": "error-hunt",
      "prompt": "Which sentence violates Japanese etiquette/grammar?",
      "options": [
        "たなかさん は せんせい です。",
        "わたしさん は がくせい です。",
        "かのじょたち は いしゃ です。",
        "かれ は ともだち です。"
      ],
      "correctAnswer": 1,
      "explanation": "You should NEVER attach the honorific 'さん' to yourself ('わたしさん' is an error).",
      "romajiOptions": [
        "tanaka-san wa sensei desu.",
        "watashi-san wa gakusei desu.",
        "kanojotachi wa isha desu.",
        "kare wa tomodachi desu."
      ]
    },
    {
      "id": "l2-q8",
      "type": "multiple-choice",
      "prompt": "Which pronoun specifically refers to 'They (all-female group)'?",
      "question": "Which pronoun specifically refers to 'They (all-female group)'?",
      "options": [
        "かのじょたち",
        "かれら",
        "わたしたち",
        "あなたたち"
      ],
      "correctAnswer": 0,
      "explanation": "'かのじょ' (she) + 'たち' (plural) = 'かのじょたち' (they, female).",
      "romajiOptions": [
        "kanojotachi",
        "karera",
        "watashitachi",
        "anatatachi"
      ]
    },
    {
      "id": "l2-q9",
      "type": "word-bank",
      "prompt": "Build the question: 'Is she Mr. Yamada's student?'",
      "targetEn": "Is she Mr. Yamada's student?",
      "chips": [
        "かのじょ",
        "は",
        "やまださん",
        "の",
        "がくせい",
        "です",
        "か",
        "かれ"
      ],
      "correctOrder": [
        "かのじょ",
        "は",
        "やまださん",
        "の",
        "がくせい",
        "です",
        "か"
      ],
      "explanation": "'かのじょ は やまださん の がくせい です か' correctly translates the question.",
      "romaji": "kanojo wa yamada-san no gakusei desu ka"
    },
    {
      "id": "l2-q10",
      "type": "fill-blank",
      "prompt": "Select the universal polite first-person pronoun for \"I\".",
      "sentence": "___ は にほんじん です。",
      "blankWord": "わたし",
      "options": [
        "わたし",
        "ぼく",
        "かれ",
        "あなた"
      ],
      "correctAnswer": 0,
      "explanation": "'わたし' is the standard polite pronoun for 'I'.",
      "romaji": "[ ? ] wa nihonjin desu."
    }
  ]
};

export const lessonMeta = {
  "id": "japanese-pronouns",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Japanese Pronouns (I, You, She, He)"
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
