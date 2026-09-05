// JLPT N5 Core Requirements Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Core Curriculum
// Contains 12 comprehensive lessons covering basic grammar structures, pronouns,
// time/dates, directions, numbers, interrogatives, frequency, demonstratives, and conjunctions.

export const n5CoreLessons = [
  {
    "id": "basic-structure",
    "number": 1,
    "title": "JLPT N5: Basic structure ～は～desu. ... wa ... desu.",
    "shortTitle": "Basic Structure (~は~です)",
    "subtitle": "Master the core topic-comment sentence pattern and polite copula.",
    "description": "The foundation of Japanese grammar: defining topics with the particle は (wa) and expressing equivalence, descriptions, and polite states with です (desu).",
    "sections": [
      {
        "title": "1. Topic-Comment Pattern: [Topic] は [Description] desu.",
        "content": "In Japanese, sentences follow a Topic-Comment pattern. The particle は (written with the hiragana 'ha' but pronounced 'wa') flags what the sentence is about.\n        \nStructure Formula:\n  A は B desu. (As for A, it is B / A is B.)",
        "table": {
          "headers": [
            "Role",
            "Japanese",
            "Pronunciation",
            "Meaning"
          ],
          "rows": [
            [
              "Topic Marker",
              "は",
              "wa",
              "As for... / Speaking of..."
            ],
            [
              "Affirmative Copula",
              "です",
              "desu",
              "is / am / are"
            ],
            [
              "Question Marker",
              "か",
              "ka",
              "? (turns sentence into question)"
            ]
          ]
        },
        "examples": [
          {
            "jp": "わたし は がくせい です。",
            "romaji": "Watashi wa gakusei desu.",
            "en": "I am a student."
          },
          {
            "jp": "これ は にほんご の ほん です。",
            "romaji": "Kore wa nihongo no hon desu.",
            "en": "This is a Japanese language book."
          },
          {
            "jp": "たなかさん は せんせい です。",
            "romaji": "Tanaka-san wa sensei desu.",
            "en": "Mr. Tanaka is a teacher."
          }
        ]
      },
      {
        "title": "2. Four Polite Tenses of です (Desu)",
        "content": "The copula です inflects across present/future and past, affirmative and negative. Memorize these four primary conjugations:",
        "table": {
          "headers": [
            "Tense",
            "Form",
            "Romaji",
            "Meaning"
          ],
          "rows": [
            [
              "Present Affirmative",
              "～です",
              "~ desu",
              "is / am / are"
            ],
            [
              "Present Negative",
              "～じゃありません / ～ではありません",
              "~ ja arimasen / dewa arimasen",
              "is not / are not"
            ],
            [
              "Past Affirmative",
              "～でした",
              "~ deshita",
              "was / were"
            ],
            [
              "Past Negative",
              "～じゃありませんでした",
              "~ ja arimasen deshita",
              "was not / were not"
            ]
          ]
        },
        "examples": [
          {
            "jp": "わたし は いしゃ じゃありません。",
            "romaji": "Watashi wa isha ja arimasen.",
            "en": "I am not a doctor."
          },
          {
            "jp": "きのう は にちようび でした。",
            "romaji": "Kinou wa nichiyoubi deshita.",
            "en": "Yesterday was Sunday."
          },
          {
            "jp": "おととい は やすみ じゃありませんでした。",
            "romaji": "Ototoi wa yasumi ja arimasen deshita.",
            "en": "The day before yesterday was not a day off."
          }
        ]
      },
      {
        "title": "3. Asking Questions with か (Ka)",
        "content": "To make a question in Japanese, simply add the particle か (ka) to the end of the sentence with rising intonation. You do not change the word order!",
        "examples": [
          {
            "jp": "あなた は がくせい です か？",
            "romaji": "Anata wa gakusei desu ka.",
            "en": "Are you a student?"
          },
          {
            "jp": "はい、がくせい です。",
            "romaji": "Hai, gakusei desu.",
            "en": "Yes, I am a student."
          },
          {
            "jp": "いいえ、がくせい じゃありません。",
            "romaji": "Iie, gakusei ja arimasen.",
            "en": "No, I am not a student."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l1-q1",
        "type": "multiple-choice",
        "question": "How is the topic-marking particle 'は' pronounced when used after a topic?",
        "options": [
          "ha",
          "wa",
          "ba",
          "ya"
        ],
        "correctAnswer": 1,
        "explanation": "Although spelled with the hiragana character 'は' (ha), when acting as a grammatical topic marker it is always pronounced 'wa'."
      },
      {
        "id": "l1-q2",
        "type": "word-bank",
        "prompt": "Build the Japanese sentence: 'I am a student.'",
        "targetEn": "I am a student.",
        "chips": [
          "わたし",
          "は",
          "がくせい",
          "です",
          "せんせい",
          "じゃありません"
        ],
        "correctOrder": [
          "わたし",
          "は",
          "がくせい",
          "です"
        ],
        "explanation": "The topic わたし (I) is marked by は (wa), followed by がくせい (student) and polite copula です (desu).",
        "romaji": "watashi wa gakusei desu"
      },
      {
        "id": "l1-q3",
        "type": "fill-blank",
        "prompt": "Choose the missing particle to complete the sentence.",
        "sentence": "きのう ___ にちようび でした。",
        "blankWord": "は",
        "options": [
          "は",
          "が",
          "を",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "は (wa) marks 'きのう' (yesterday) as the topic of the sentence.",
        "romaji": "kinou [ ? ] nichiyoubi deshita."
      },
      {
        "id": "l1-q4",
        "type": "audio-listening",
        "prompt": "Listen to the audio and choose the correct English translation.",
        "audioText": "これ は にほんご の ほん です。",
        "options": [
          "This is a Japanese language book.",
          "That is an English language book.",
          "This is a Japanese teacher.",
          "Whose book is this?"
        ],
        "correctAnswer": 0,
        "explanation": "'これ' (this) + 'は' + 'にほんご の ほん' (Japanese book) + 'です' (is).",
        "romaji": "kore wa nihongo no hon desu."
      },
      {
        "id": "l1-q5",
        "type": "word-bank",
        "prompt": "Build the Japanese sentence: 'I was not a doctor.'",
        "targetEn": "I was not a doctor.",
        "chips": [
          "わたし",
          "は",
          "いしゃ",
          "じゃありません",
          "でした",
          "です",
          "せんせい"
        ],
        "correctOrder": [
          "わたし",
          "は",
          "いしゃ",
          "じゃありません",
          "でした"
        ],
        "explanation": "Past negative of です is formed by adding でした to じゃありません (じゃありませんでした = was not).",
        "romaji": "watashi wa isha ja arimasen deshita"
      },
      {
        "id": "l1-q6",
        "type": "fill-blank",
        "prompt": "Select the polite affirmative ending to form a question.",
        "sentence": "たなかさん は せんせい ___ か？",
        "blankWord": "です",
        "options": [
          "です",
          "でした",
          "で",
          "ます"
        ],
        "correctAnswer": 0,
        "explanation": "です + か asks the polite present question: 'Is Mr. Tanaka a teacher?'",
        "romaji": "tanaka-san wa sensei [ ? ] ka?"
      },
      {
        "id": "l1-q7",
        "type": "error-hunt",
        "prompt": "Which of the following 4 sentences contains a grammatical error?",
        "options": [
          "わたし は いしゃ です。",
          "きのう は やすみ でした。",
          "おととい は げつようび です。",
          "これ は ぺん じゃありません。"
        ],
        "correctAnswer": 2,
        "explanation": "'おととい' (the day before yesterday) refers to the past, so it must end with the past copula 'でした', not the present 'です'.",
        "romajiOptions": [
          "watashi wa isha desu.",
          "kinou wa yasumi deshita.",
          "ototoi wa getsuyoubi desu.",
          "kore wa pen ja arimasen."
        ]
      },
      {
        "id": "l1-q8",
        "type": "multiple-choice",
        "question": "What is the key difference between 'じゃありません' and 'ではありません'?",
        "options": [
          "ではありません is more formal and used in writing, while じゃありません is conversational.",
          "じゃありません is for past tense, ではありません is for present tense.",
          "ではありません is used only for questions.",
          "They mean completely different things."
        ],
        "correctAnswer": 0,
        "explanation": "Both mean 'is not', but ではありません is formal and written, whereas じゃありません is common in spoken Japanese.",
        "romajiOptions": [
          "dewa arimasen is more formal and used in writing, while ja arimasen is conversational.",
          "ja arimasen is for past tense, dewa arimasen is for present tense.",
          "dewa arimasen is used only for questions.",
          "They mean completely different things."
        ]
      },
      {
        "id": "l1-q9",
        "type": "word-bank",
        "prompt": "Assemble the question: 'Is this Mr. Tanaka's book?'",
        "targetEn": "Is this Mr. Tanaka's book?",
        "chips": [
          "これ",
          "は",
          "たなかさん",
          "の",
          "ほん",
          "です",
          "か",
          "それ"
        ],
        "correctOrder": [
          "これ",
          "は",
          "たなかさん",
          "の",
          "ほん",
          "です",
          "か"
        ],
        "explanation": "Possession is linked with の: たなかさん の ほん (Mr. Tanaka's book), ended with question particle か.",
        "romaji": "kore wa tanaka-san no hon desu ka"
      },
      {
        "id": "l1-q10",
        "type": "fill-blank",
        "prompt": "Choose the correct form to say: \"I am not a student.\"",
        "sentence": "わたし は がくせい ___。",
        "blankWord": "じゃありません",
        "options": [
          "じゃありません",
          "でした",
          "じゃありませんでした",
          "ありません"
        ],
        "correctAnswer": 0,
        "explanation": "'じゃありません' expresses the present negative state ('am not').",
        "romaji": "watashi wa gakusei ___。"
      }
    ]
  },
  {
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
        "romaji": "ashita toukyou [ ? ] ikimasu."
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
  },
  {
    "id": "temporal-words",
    "number": 3,
    "title": "JLPT N5: Japanese temporal words - yesterday, today, tomorrow, etc.",
    "shortTitle": "Temporal Words (Days, Weeks, Months)",
    "subtitle": "Express time frames across days, weeks, months, and years.",
    "description": "Master essential time adverbs: きのう, きょう, あした, おととい, あさって, along with weekly, monthly, and yearly cycles (今, 先, 来).",
    "sections": [
      {
        "title": "1. Daily Time Words",
        "content": "Master the 5-day cycle centered around \"today\":",
        "table": {
          "headers": [
            "Relative Day",
            "Japanese",
            "Romaji",
            "English"
          ],
          "rows": [
            [
              "Day Before Yesterday (-2)",
              "おととい",
              "ototoi",
              "The day before yesterday"
            ],
            [
              "Yesterday (-1)",
              "きのう",
              "kinou",
              "Yesterday"
            ],
            [
              "Today (0)",
              "きょう",
              "kyou",
              "Today"
            ],
            [
              "Tomorrow (+1)",
              "あした",
              "ashita",
              "Tomorrow"
            ],
            [
              "Day After Tomorrow (+2)",
              "あさって",
              "asatte",
              "The day after tomorrow"
            ]
          ]
        },
        "examples": [
          {
            "jp": "きょう は すいようび です。",
            "romaji": "Kyou wa suiyoubi desu.",
            "en": "Today is Wednesday."
          },
          {
            "jp": "きのう は あめ でした。",
            "romaji": "Kinou wa ame deshita.",
            "en": "Yesterday was rainy."
          },
          {
            "jp": "あした は やすみ です。",
            "romaji": "Ashita wa yasumi desu.",
            "en": "Tomorrow is a holiday."
          }
        ]
      },
      {
        "title": "2. Recurring Cycles: Week, Month, Year",
        "content": "Notice the pattern prefixes:\n  先 (せん, sen) = Last / Previous\n  今 (こん, kon) = This / Current\n  来 (らい, rai) = Next / Upcoming",
        "table": {
          "headers": [
            "Cycle",
            "Last (先)",
            "This (今)",
            "Next (来)"
          ],
          "rows": [
            [
              "Week (週 - しゅう)",
              "せんしゅう (senshuu)",
              "こんしゅう (konshuu)",
              "らいしゅう (raishuu)"
            ],
            [
              "Month (月 - げつ)",
              "せんげつ (sengetsu)",
              "こんげつ (kongetsu)",
              "らいげつ (raigetsu)"
            ],
            [
              "Year (年 - ねん)",
              "きょねん (kyonen)*",
              "ことし (kotoshi)*",
              "らいねん (rainen)"
            ]
          ]
        },
        "examples": [
          {
            "jp": "こんしゅう は いそがしい です。",
            "romaji": "Konshuu wa isogashii desu.",
            "en": "This week is busy."
          },
          {
            "jp": "らいねん にほん へ いきます。",
            "romaji": "Rainen nihon e ikimasu.",
            "en": "Next year I will go to Japan."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l3-q1",
        "type": "multiple-choice",
        "question": "What is the Japanese word for 'the day before yesterday'?",
        "options": [
          "おととい",
          "きのう",
          "あさって",
          "きょう"
        ],
        "correctAnswer": 0,
        "explanation": "'おととい' (ototoi) means the day before yesterday (-2 days).",
        "romajiOptions": [
          "ototoi",
          "kinou",
          "asatte",
          "kyou"
        ]
      },
      {
        "id": "l3-q2",
        "type": "word-bank",
        "prompt": "Build: 'Tomorrow is a holiday.'",
        "targetEn": "Tomorrow is a holiday.",
        "chips": [
          "あした",
          "は",
          "やすみ",
          "です",
          "きのう",
          "でした"
        ],
        "correctOrder": [
          "あした",
          "は",
          "やすみ",
          "です"
        ],
        "explanation": "'あした' (tomorrow) + 'は' + 'やすみ' (holiday/day off) + 'です'.",
        "romaji": "ashita wa yasumi desu"
      },
      {
        "id": "l3-q3",
        "type": "fill-blank",
        "prompt": "Choose the correct temporal word: \"___ was Friday.\"",
        "sentence": "___ は きんようび でした。",
        "blankWord": "きのう",
        "options": [
          "きのう",
          "きょう",
          "あした",
          "あさって"
        ],
        "correctAnswer": 0,
        "explanation": "'でした' indicates past tense; 'きのう' (yesterday) matches the past.",
        "romaji": "[ ? ] wa kinyoubi deshita."
      },
      {
        "id": "l3-q4",
        "type": "audio-listening",
        "prompt": "Listen and identify the translation.",
        "audioText": "こんしゅう は いそがしい です。",
        "options": [
          "This week is busy.",
          "Last week was busy.",
          "Next week will be busy.",
          "Today is busy."
        ],
        "correctAnswer": 0,
        "explanation": "'こんしゅう' means 'this week'.",
        "romaji": "konshuu wa isogashii desu."
      },
      {
        "id": "l3-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'The day after tomorrow is Sunday.'",
        "targetEn": "The day after tomorrow is Sunday.",
        "chips": [
          "あさって",
          "は",
          "にちようび",
          "です",
          "おととい",
          "せんしゅう"
        ],
        "correctOrder": [
          "あさって",
          "は",
          "にちようび",
          "です"
        ],
        "explanation": "'あさって' is the day after tomorrow.",
        "romaji": "asatte wa nichiyoubi desu"
      },
      {
        "id": "l3-q6",
        "type": "fill-blank",
        "prompt": "Ask what month next month is.",
        "sentence": "らいげつ は ___ がつ です か？",
        "blankWord": "なん",
        "options": [
          "なん",
          "なに",
          "いつ",
          "どこ"
        ],
        "correctAnswer": 0,
        "explanation": "Before counters like がつ (month), 'なん' is used ('なんがつ' = which month).",
        "romaji": "raigetsu wa [ ? ] gatsu desu ka?"
      },
      {
        "id": "l3-q7",
        "type": "error-hunt",
        "prompt": "Which sentence has a temporal and tense clash?",
        "options": [
          "きょう は もくようび です。",
          "あした は にちようび でした。",
          "せんしゅう は ひま でした。",
          "きょねん は にほん に いました。"
        ],
        "correctAnswer": 1,
        "explanation": "'あした' (tomorrow) cannot end with the past tense 'でした'. It must be 'です'.",
        "romajiOptions": [
          "kyou wa mokuyoubi desu.",
          "ashita wa nichiyoubi deshita.",
          "senshuu wa hima deshita.",
          "kyonen wa nihon ni imashita."
        ]
      },
      {
        "id": "l3-q8",
        "type": "multiple-choice",
        "question": "How do you say 'last year' in Japanese?",
        "options": [
          "きょねん",
          "ことし",
          "らいねん",
          "せんねん"
        ],
        "correctAnswer": 0,
        "explanation": "'きょねん' (去年) is the irregular reading for last year (not 'せんねん').",
        "romajiOptions": [
          "kyonen",
          "kotoshi",
          "rainen",
          "sennen"
        ]
      },
      {
        "id": "l3-q9",
        "type": "word-bank",
        "prompt": "Build: 'Last week was not a day off.'",
        "targetEn": "Last week was not a day off.",
        "chips": [
          "せんしゅう",
          "は",
          "やすみ",
          "じゃありません",
          "でした",
          "らいしゅう",
          "です"
        ],
        "correctOrder": [
          "せんしゅう",
          "は",
          "やすみ",
          "じゃありません",
          "でした"
        ],
        "explanation": "せんしゅう (last week) + は + やすみ (day off) + じゃありません でした (was not).",
        "romaji": "senshuu wa yasumi ja arimasen deshita"
      },
      {
        "id": "l3-q10",
        "type": "fill-blank",
        "prompt": "Complete the sentence for \"This year is 2026.\"",
        "sentence": "___ は 2026ねん です。",
        "blankWord": "ことし",
        "options": [
          "ことし",
          "きょねん",
          "らいねん",
          "おととし"
        ],
        "correctAnswer": 0,
        "explanation": "'ことし' (今年) means 'this year'.",
        "romaji": "[ ? ] wa 2026-nen desu."
      }
    ]
  },
  {
    "id": "directions-vocabulary",
    "number": 4,
    "title": "JLPT N5: Directions vocabulary - Japanese words for left, right, front, back, etc.",
    "shortTitle": "Directions Vocabulary (Left, Right, Positions)",
    "subtitle": "Spatial positioning, relative locations, and cardinal compass points.",
    "description": "Learn essential relative position terms: みぎ (right), ひだり (left), まえ (front), うしろ (back), なか (inside), そと (outside), うえ (above), した (below), and the 4 compass points.",
    "sections": [
      {
        "title": "1. Relative Spatial Positions",
        "content": "Connect the reference location to the position noun with の (no):\nStructure:\n  [Noun] の [Position] に [Subject] が あります/います。\n  (There is a [Subject] [Position] the [Noun].)",
        "table": {
          "headers": [
            "Position",
            "Japanese",
            "Romaji",
            "Opposite Pair"
          ],
          "rows": [
            [
              "Right",
              "みぎ",
              "migi",
              "ひだり (Left)"
            ],
            [
              "Left",
              "ひだり",
              "hidari",
              "みぎ (Right)"
            ],
            [
              "Front / Before",
              "まえ",
              "mae",
              "うしろ (Back / Behind)"
            ],
            [
              "Back / Behind",
              "うしろ",
              "ushiro",
              "まえ (Front)"
            ],
            [
              "Inside",
              "なか",
              "naka",
              "そと (Outside)"
            ],
            [
              "Outside",
              "そと",
              "soto",
              "なか (Inside)"
            ],
            [
              "Above / On",
              "うえ",
              "ue",
              "した (Below / Under)"
            ],
            [
              "Below / Under",
              "した",
              "shita",
              "うえ (Above)"
            ],
            [
              "Next to / Beside",
              "となり",
              "tonari",
              "ちかく (Nearby)"
            ]
          ]
        },
        "examples": [
          {
            "jp": "つくえ の うえ に ほん が あります。",
            "romaji": "Tsukue no ue ni hon ga arimasu.",
            "en": "There is a book on the desk."
          },
          {
            "jp": "ねこ は はこ の なか です。",
            "romaji": "Neko wa hako no naka desu.",
            "en": "The cat is inside the box."
          },
          {
            "jp": "えき は ぎんこう の まえ です。",
            "romaji": "Eki wa ginkou no mae desu.",
            "en": "The station is in front of the bank."
          }
        ]
      },
      {
        "title": "2. Cardinal Compass Directions",
        "content": "Master the four primary compass points:",
        "table": {
          "headers": [
            "Direction",
            "Japanese",
            "Romaji",
            "Kanji"
          ],
          "rows": [
            [
              "North",
              "きた",
              "kita",
              "北"
            ],
            [
              "South",
              "みなみ",
              "minami",
              "南"
            ],
            [
              "East",
              "ひがし",
              "higashi",
              "東"
            ],
            [
              "West",
              "にし",
              "nishi",
              "西"
            ]
          ]
        },
        "examples": [
          {
            "jp": "とうきょう は にほん の ひがし に あります。",
            "romaji": "Toukyou wa nihon no higashi ni arimasu.",
            "en": "Tokyo is in the east of Japan."
          },
          {
            "jp": "ほっかいどう は きた です。",
            "romaji": "Hokkaidou wa kita desu.",
            "en": "Hokkaido is north."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l4-q1",
        "type": "multiple-choice",
        "question": "What are the Japanese words for 'right' and 'left'?",
        "options": [
          "みぎ (right) and ひだり (left)",
          "ひだり (right) and みぎ (left)",
          "まえ (right) and うしろ (left)",
          "きた (right) and みなみ (left)"
        ],
        "correctAnswer": 0,
        "explanation": "'みぎ' is right and 'ひだり' is left.",
        "romajiOptions": [
          "migi (right) and hidari (left)",
          "hidari (right) and migi (left)",
          "mae (right) and ushiro (left)",
          "kita (right) and minami (left)"
        ]
      },
      {
        "id": "l4-q2",
        "type": "word-bank",
        "prompt": "Build: 'The book is inside the bag.'",
        "targetEn": "The book is inside the bag.",
        "chips": [
          "ほん",
          "は",
          "かばん",
          "の",
          "なか",
          "です",
          "そと",
          "うえ"
        ],
        "correctOrder": [
          "ほん",
          "は",
          "かばん",
          "の",
          "なか",
          "です"
        ],
        "explanation": "'かばん の なか' means inside the bag.",
        "romaji": "hon wa kaban no naka desu"
      },
      {
        "id": "l4-q3",
        "type": "fill-blank",
        "prompt": "Say: \"The station is in front of the bank.\"",
        "sentence": "えき は ぎんこう の ___ です。",
        "blankWord": "まえ",
        "options": [
          "まえ",
          "うしろ",
          "みぎ",
          "きた"
        ],
        "correctAnswer": 0,
        "explanation": "'まえ' means in front of.",
        "romaji": "eki wa ginkou no [ ? ] desu."
      },
      {
        "id": "l4-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the English translation.",
        "audioText": "ねこ は つくえ の した です。",
        "options": [
          "The cat is under the desk.",
          "The cat is on the desk.",
          "The dog is under the desk.",
          "The cat is behind the box."
        ],
        "correctAnswer": 0,
        "explanation": "'つくえ の した' means under the desk.",
        "romaji": "neko wa tsukue no shita desu."
      },
      {
        "id": "l4-q5",
        "type": "word-bank",
        "prompt": "Build: 'The convenience store is to the left of the hospital.'",
        "targetEn": "The convenience store is to the left of the hospital.",
        "chips": [
          "コンビニ",
          "は",
          "びょういん",
          "の",
          "ひだり",
          "です",
          "みぎ",
          "まえ"
        ],
        "correctOrder": [
          "コンビニ",
          "は",
          "びょういん",
          "の",
          "ひだり",
          "です"
        ],
        "explanation": "'びょういん の ひだり' means to the left of the hospital.",
        "romaji": "konbini wa byouin no hidari desu"
      },
      {
        "id": "l4-q6",
        "type": "fill-blank",
        "prompt": "Fill in: \"Hokkaido is in the north of Japan.\"",
        "sentence": "ほっかいどう は にほん の ___ に あります。",
        "blankWord": "きた",
        "options": [
          "きた",
          "みなみ",
          "ひがし",
          "にし"
        ],
        "correctAnswer": 0,
        "explanation": "'きた' (北) means North.",
        "romaji": "hokkaidou wa nihon no [ ? ] ni arimasu."
      },
      {
        "id": "l4-q7",
        "type": "error-hunt",
        "prompt": "Which sentence has broken prepositional particle syntax?",
        "options": [
          "くるま は いえ の まえ です。",
          "つくえ の うえ に ほん が あります。",
          "きのう は もくようび でした。",
          "ぎんこう の は まえ です。"
        ],
        "correctAnswer": 3,
        "explanation": "'ぎんこう の は まえ です' is incorrect because 'の' must connect to a noun (like 'ぎんこう の まえ は ...').",
        "romajiOptions": [
          "kuruma wa ie no mae desu.",
          "tsukue no ue ni hon ga arimasu.",
          "kinou wa mokuyoubi deshita.",
          "ginkou no wa mae desu."
        ]
      },
      {
        "id": "l4-q8",
        "type": "multiple-choice",
        "question": "Which compass direction is 'Higashi' (ひがし)?",
        "options": [
          "East",
          "West",
          "North",
          "South"
        ],
        "correctAnswer": 0,
        "explanation": "'ひがし' (東) is East."
      },
      {
        "id": "l4-q9",
        "type": "word-bank",
        "prompt": "Assemble phrase: 'Behind the school'",
        "targetEn": "Behind the school",
        "chips": [
          "がっこう",
          "の",
          "うしろ",
          "まえ",
          "なか"
        ],
        "correctOrder": [
          "がっこう",
          "の",
          "うしろ"
        ],
        "explanation": "'がっこう の うしろ' means behind the school.",
        "romaji": "gakkou no ushiro"
      },
      {
        "id": "l4-q10",
        "type": "fill-blank",
        "prompt": "Say: \"The dog is outside the house.\"",
        "sentence": "いぬ は いえ の ___ に います。",
        "blankWord": "そと",
        "options": [
          "そと",
          "うえ",
          "みなみ",
          "にし"
        ],
        "correctAnswer": 0,
        "explanation": "'そと' (外) means outside.",
        "romaji": "inu wa ie no [ ? ] ni imasu."
      }
    ]
  },
  {
    "id": "numbers-1-100000",
    "number": 5,
    "title": "JLPT N5: Japanese numbers 1 to 100,000",
    "shortTitle": "Numbers 1 to 100,000",
    "subtitle": "Master counting systems, rendaku sound mutations, and the 10,000 unit (万).",
    "description": "Learn base digits, tens, hundreds (百), thousands (千), and ten-thousands (万). Pay close attention to irregular rendaku sound shifts for 300, 600, 800, 3000, and 8000.",
    "sections": [
      {
        "title": "1. Hundreds (百 - ひゃく) & Irregular Readings",
        "content": "Numbers in the hundreds count with ひゃく (hyaku). Note the three irregular sound changes:\n  300: さんびゃく (sanbyaku) - b sound\n  600: ろっぴゃく (roppyaku) - pp sound\n  800: はっぴゃく (happyaku) - pp sound",
        "table": {
          "headers": [
            "Number",
            "Japanese",
            "Romaji",
            "Note"
          ],
          "rows": [
            [
              "100",
              "ひゃく",
              "hyaku",
              "Standard"
            ],
            [
              "200",
              "にひゃく",
              "nihyaku",
              "Standard"
            ],
            [
              "300",
              "さんびゃく",
              "sanbyaku",
              "IRREGULAR (b)"
            ],
            [
              "400",
              "よんひゃく",
              "yonhyaku",
              "Standard"
            ],
            [
              "500",
              "ごひゃく",
              "gohyaku",
              "Standard"
            ],
            [
              "600",
              "ろっぴゃく",
              "roppyaku",
              "IRREGULAR (pp)"
            ],
            [
              "700",
              "ななひゃく",
              "nanahyaku",
              "Standard"
            ],
            [
              "800",
              "はっぴゃく",
              "happyaku",
              "IRREGULAR (pp)"
            ],
            [
              "900",
              "きゅうひゃく",
              "kyuuhyaku",
              "Standard"
            ]
          ]
        }
      },
      {
        "title": "2. Thousands (千 - せん) & Ten-Thousands (万 - まん)",
        "content": "Thousands use せん (sen). Watch for two sound changes:\n  3,000: さんぜん (sanzen) - z sound\n  8,000: はっせん (hassen) - ss sound\n\nCrucial Concept - The 10,000 Unit (万 - まん):\n  Japanese groups large numbers by 4 zeros (10,000s), NOT 3 zeros!\n  10,000 = いちまん (1万)\n  50,000 = ごまん (5万)\n  100,000 = じゅうまん (10万)",
        "examples": [
          {
            "jp": "この ほん は せんごひゃく えん です。",
            "romaji": "Kono hon wa sengohyaku en desu.",
            "en": "This book is 1,500 yen."
          },
          {
            "jp": "カメラ は さんまん えん でした。",
            "romaji": "Kamera wa sanman en deshita.",
            "en": "The camera was 30,000 yen."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l5-q1",
        "type": "multiple-choice",
        "question": "How is 300 pronounced in Japanese with the irregular sound mutation?",
        "options": [
          "さんびゃく",
          "さんひゃく",
          "さっぴゃく",
          "さんぜん"
        ],
        "correctAnswer": 0,
        "explanation": "300 undergoes rendaku: 'さんびゃく' (sanbyaku).",
        "romajiOptions": [
          "sanbyaku",
          "sanhyaku",
          "sappyaku",
          "sanzen"
        ]
      },
      {
        "id": "l5-q2",
        "type": "word-bank",
        "prompt": "Build: 'This watch is 8,000 yen.'",
        "targetEn": "This watch is 8,000 yen.",
        "chips": [
          "この",
          "とけい",
          "は",
          "はっせん",
          "えん",
          "です",
          "ろっせん",
          "ひゃく"
        ],
        "correctOrder": [
          "この",
          "とけい",
          "は",
          "はっせん",
          "えん",
          "です"
        ],
        "explanation": "8,000 has the irregular reading 'はっせん' (hassen).",
        "romaji": "kono tokei wa hassen en desu"
      },
      {
        "id": "l5-q3",
        "type": "fill-blank",
        "prompt": "Choose the correct reading for 600.",
        "sentence": "600 は ___ と よみます。",
        "blankWord": "ろっぴゃく",
        "options": [
          "ろっぴゃく",
          "ろくひゃく",
          "ろくびゃく",
          "ろっひゃく"
        ],
        "correctAnswer": 0,
        "explanation": "600 is pronounced 'ろっぴゃく' (roppyaku).",
        "romaji": "600 is pronounced ___。"
      },
      {
        "id": "l5-q4",
        "type": "audio-listening",
        "prompt": "Listen and identify the price.",
        "audioText": "これ は にまん えん です。",
        "options": [
          "This is 20,000 yen.",
          "This is 2,000 yen.",
          "This is 200,000 yen.",
          "This is 200 yen."
        ],
        "correctAnswer": 0,
        "explanation": "'にまん' (2万) = 20,000 yen.",
        "romaji": "kore wa niman en desu."
      },
      {
        "id": "l5-q5",
        "type": "word-bank",
        "prompt": "Assemble: '45,000'",
        "targetEn": "45,000",
        "chips": [
          "よんまん",
          "ごせん",
          "ごまん",
          "よんせん"
        ],
        "correctOrder": [
          "よんまん",
          "ごせん"
        ],
        "explanation": "45,000 is 4万 (よんまん) + 5千 (ごせん).",
        "romaji": "yonman gosen"
      },
      {
        "id": "l5-q6",
        "type": "fill-blank",
        "prompt": "Choose the irregular reading for 3,000.",
        "sentence": "3,000 は ___ と よみます。",
        "blankWord": "さんぜん",
        "options": [
          "さんぜん",
          "さんせん",
          "さんびゃく",
          "さっせん"
        ],
        "correctAnswer": 0,
        "explanation": "3,000 shifts to 'さんぜん' (sanzen).",
        "romaji": "3,000 is pronounced ___。"
      },
      {
        "id": "l5-q7",
        "type": "error-hunt",
        "prompt": "Which number reading is INCORRECT?",
        "options": [
          "800 -> はっぴゃく",
          "600 -> ろっぴゃく",
          "8000 -> はちせん",
          "3000 -> さんぜん"
        ],
        "correctAnswer": 2,
        "explanation": "8,000 is read as 'はっせん' (hassen), NOT 'はちせん'.",
        "romajiOptions": [
          "800 -> happyaku",
          "600 -> roppyaku",
          "8000 -> hachisen",
          "3000 -> sanzen"
        ]
      },
      {
        "id": "l5-q8",
        "type": "multiple-choice",
        "question": "How do you say 50,000 in Japanese?",
        "options": [
          "ごまん",
          "ごじゅうせん",
          "ごひゃくまん",
          "いちまん"
        ],
        "correctAnswer": 0,
        "explanation": "Japanese counts in 10,000s (万): 50,000 is 5万 = 'ごまん'.",
        "romajiOptions": [
          "goman",
          "gojuusen",
          "gohyakuman",
          "ichiman"
        ]
      },
      {
        "id": "l5-q9",
        "type": "word-bank",
        "prompt": "Assemble: '100,000'",
        "targetEn": "100,000",
        "chips": [
          "じゅうまん",
          "ひゃくまん",
          "いちまん",
          "せんまん"
        ],
        "correctOrder": [
          "じゅうまん"
        ],
        "explanation": "100,000 is 10万 = 'じゅうまん'.",
        "romaji": "juuman"
      },
      {
        "id": "l5-q10",
        "type": "fill-blank",
        "prompt": "Choose the reading for 800.",
        "sentence": "800 は ___ と よみます。",
        "blankWord": "はっぴゃく",
        "options": [
          "はっぴゃく",
          "はちひゃく",
          "はちびゃく",
          "はっびゃく"
        ],
        "correctAnswer": 0,
        "explanation": "800 is 'はっぴゃく' (happyaku).",
        "romaji": "800 is pronounced ___。"
      }
    ]
  },
  {
    "id": "telling-time",
    "number": 6,
    "title": "JLPT N5: Telling time in Japanese - hours, minutes",
    "shortTitle": "Telling Time (Hours & Minutes)",
    "subtitle": "Ask and express exact clock times, half hours, and durations.",
    "description": "Learn hour markers (～じ), minute counters (～ふん/～ぷん), half-past (～はん), asking \"what time\" (なんじ), and duration (～じかん).",
    "sections": [
      {
        "title": "1. Hours (時 - じ) & Three Irregulars",
        "content": "Attach じ (ji) to numbers. Beware of three irregular readings:\n  4:00 -> よじ (yoji) - NEVER 'yonji' or 'shiji'!\n  7:00 -> しちじ (shichiji) - prefer shichiji over nanaji\n  9:00 -> くじ (kuji) - NEVER 'kyuuji'!",
        "table": {
          "headers": [
            "Hour",
            "Japanese",
            "Romaji",
            "Special Rule"
          ],
          "rows": [
            [
              "1:00",
              "いちじ",
              "ichiji",
              "Regular"
            ],
            [
              "4:00",
              "よじ",
              "yoji",
              "IRREGULAR (よ)"
            ],
            [
              "7:00",
              "しちじ",
              "shichiji",
              "IRREGULAR (しち)"
            ],
            [
              "9:00",
              "くじ",
              "kuji",
              "IRREGULAR (く)"
            ],
            [
              "12:00",
              "じゅうにじ",
              "juuniji",
              "Regular"
            ]
          ]
        }
      },
      {
        "title": "2. Minutes (分 - ふん / ぷん) & Half Past (半 - はん)",
        "content": "Minutes fluctuate between ふん (fun) and ぷん (pun). Half-past is expressed with はん (han).\nPoint in Time vs Duration:\n  さんじ (3:00) = Point in time\n  さんじかん (3 hours) = Duration",
        "examples": [
          {
            "jp": "いま なんじ です か？",
            "romaji": "Ima nanji desu ka.",
            "en": "What time is it right now?"
          },
          {
            "jp": "いま は にじ はん です。",
            "romaji": "Ima wa niji han desu.",
            "en": "It is 2:30 right now."
          },
          {
            "jp": "まいにち はちじかん ねます。",
            "romaji": "Mainichi hachijikan nemasu.",
            "en": "I sleep for 8 hours every day."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l6-q1",
        "type": "multiple-choice",
        "question": "How is 4:00 o'clock pronounced in Japanese?",
        "options": [
          "よじ",
          "よんじ",
          "しじ",
          "よんじかん"
        ],
        "correctAnswer": 0,
        "explanation": "4:00 is strictly 'よじ' (yoji). 'よんじ' and 'しじ' are incorrect.",
        "romajiOptions": [
          "yoji",
          "yonji",
          "shiji",
          "yonjikan"
        ]
      },
      {
        "id": "l6-q2",
        "type": "word-bank",
        "prompt": "Build: 'It is 2:30 right now.'",
        "targetEn": "It is 2:30 right now.",
        "chips": [
          "いま",
          "は",
          "にじ",
          "はん",
          "です",
          "よじ",
          "ぷん"
        ],
        "correctOrder": [
          "いま",
          "は",
          "にじ",
          "はん",
          "です"
        ],
        "explanation": "いま (now) + は + にじ (2:00) + はん (half past) + です.",
        "romaji": "ima wa niji han desu"
      },
      {
        "id": "l6-q3",
        "type": "fill-blank",
        "prompt": "Choose the standard pronunciation for 7:00 o'clock.",
        "sentence": "7:00 は ___ と よみます。",
        "blankWord": "しちじ",
        "options": [
          "しちじ",
          "ななじ",
          "しじ",
          "くじ"
        ],
        "correctAnswer": 0,
        "explanation": "7:00 is standardly pronounced 'しちじ' (shichiji).",
        "romaji": "7:00 o'clock is pronounced ___。"
      },
      {
        "id": "l6-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the matching time.",
        "audioText": "いま は くじ じゅっぷん です。",
        "options": [
          "9:10",
          "9:20",
          "4:10",
          "7:10"
        ],
        "correctAnswer": 0,
        "explanation": "'くじ' (9:00) + 'じゅっぷん' (10 minutes) = 9:10.",
        "romaji": "ima wa kuji juppun desu."
      },
      {
        "id": "l6-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'I studied for 3 hours.'",
        "targetEn": "I studied for 3 hours.",
        "chips": [
          "さんじかん",
          "べんきょう",
          "しました",
          "さんじ",
          "ふん"
        ],
        "correctOrder": [
          "さんじかん",
          "べんきょう",
          "しました"
        ],
        "explanation": "'さんじかん' denotes duration (3 hours).",
        "romaji": "sanjikan benkyou shimashita"
      },
      {
        "id": "l6-q6",
        "type": "fill-blank",
        "prompt": "Choose the correct reading for 9:00 o'clock.",
        "sentence": "9:00 は ___ と よみます。",
        "blankWord": "くじ",
        "options": [
          "くじ",
          "きゅうじ",
          "こじ",
          "しちじ"
        ],
        "correctAnswer": 0,
        "explanation": "9:00 is read as 'くじ' (kuji), NEVER 'きゅうじ'.",
        "romaji": "9:00 o'clock is pronounced ___。"
      },
      {
        "id": "l6-q7",
        "type": "error-hunt",
        "prompt": "Which hour pronunciation is INCORRECT?",
        "options": [
          "1:00 -> いちじ",
          "4:00 -> よんじ",
          "7:00 -> しちじ",
          "9:00 -> くじ"
        ],
        "correctAnswer": 1,
        "explanation": "4:00 must be 'よじ' (yoji), not 'よんじ'.",
        "romajiOptions": [
          "1:00 -> ichiji",
          "4:00 -> yonji",
          "7:00 -> shichiji",
          "9:00 -> kuji"
        ]
      },
      {
        "id": "l6-q8",
        "type": "multiple-choice",
        "question": "What is the difference between 'さんじ' and 'さんじかん'?",
        "options": [
          "さんじ is a point in time (3:00); さんじかん is a duration (3 hours).",
          "さんじ is formal; さんじかん is informal.",
          "さんじ means 3:00 AM; さんじかん means 3:00 PM.",
          "There is no difference."
        ],
        "correctAnswer": 0,
        "explanation": "Adding 間 (かん) turns clock time into elapsed duration.",
        "romajiOptions": [
          "sanji is a point in time (3:00); sanjikan is a duration (3 hours).",
          "sanji is formal; sanjikan is informal.",
          "sanji means 3:00 AM; sanjikan means 3:00 PM.",
          "There is no difference."
        ]
      },
      {
        "id": "l6-q9",
        "type": "word-bank",
        "prompt": "Build: 'It is 8:15.'",
        "targetEn": "It is 8:15.",
        "chips": [
          "はちじ",
          "じゅうごふん",
          "です",
          "はっせん",
          "じかん"
        ],
        "correctOrder": [
          "はちじ",
          "じゅうごふん",
          "です"
        ],
        "explanation": "8:00 (はちじ) + 15 min (じゅうごふん) + です.",
        "romaji": "hachiji juugofun desu"
      },
      {
        "id": "l6-q10",
        "type": "fill-blank",
        "prompt": "Select the word for \"half past\" (30 minutes).",
        "sentence": "30ぷん は さんじゅっぷん または ___ と よびます。",
        "blankWord": "はん",
        "options": [
          "はん",
          "まえ",
          "すぎ",
          "じかん"
        ],
        "correctAnswer": 0,
        "explanation": "'はん' (半) means half past.",
        "romaji": "30 minutes is called either sanjuppun or ___."
      }
    ]
  },
  {
    "id": "calendar-dates",
    "number": 7,
    "title": "JLPT N5: Calendar dates in Japanese",
    "shortTitle": "Calendar Dates (Days & Months)",
    "subtitle": "Days of the week, months of the year, and tricky irregular date numbers.",
    "description": "Learn the days of the week (～ようび), months (～がつ), and the famous irregular 1st to 10th, 14th, 20th, and 24th days of the month.",
    "sections": [
      {
        "title": "1. Days of the Week (～ようび)",
        "table": {
          "headers": [
            "Day",
            "Japanese",
            "Element Meaning"
          ],
          "rows": [
            [
              "Monday",
              "げつようび (getsuyoubi)",
              "Moon (月)"
            ],
            [
              "Tuesday",
              "かようび (kayoubi)",
              "Fire (火)"
            ],
            [
              "Wednesday",
              "すいようび (suiyoubi)",
              "Water (水)"
            ],
            [
              "Thursday",
              "もくようび (mokuyoubi)",
              "Wood / Tree (木)"
            ],
            [
              "Friday",
              "きんようび (kinyoubi)",
              "Gold / Metal (金)"
            ],
            [
              "Saturday",
              "どようび (doyoubi)",
              "Earth / Soil (土)"
            ],
            [
              "Sunday",
              "にちようび (nichiyoubi)",
              "Sun (日)"
            ]
          ]
        }
      },
      {
        "title": "2. Irregular Days of the Month (1st–10th, 14th, 20th, 24th)",
        "content": "Days 1 through 10 use unique native Japanese counters rather than Chinese numerals:\n  1st: ついたち (tsuitachi)    6th: むいか (muika)\n  2nd: ふつか (futsuka)        7th: なのか (nanoka)\n  3rd: みっか (mikka)          8th: ようか (youka)\n  4th: よっか (yokka)          9th: ここのか (kokonoka)\n  5th: いつか (itsuka)        10th: とおか (tooka)\nSpecial Irregulars:\n  14th: じゅうよっか (juuyokka)\n  20th: はつか (hatsuka)\n  24th: にじゅうよっか (nijuuyokka)\nRegular Days (11th onward):\n  From the 11th onward, use number + にち (e.g. 11th = じゅういちにち, 12th = じゅうににち, 13th = じゅうさんにち).",
        "examples": [
          {
            "jp": "きょう は ごがつ いつか です。",
            "romaji": "Kyou wa gogatsu itsuka desu.",
            "en": "Today is May 5th."
          },
          {
            "jp": "たんじょうび は はつか です。",
            "romaji": "Tanjoubi wa hatsuka desu.",
            "en": "My birthday is the 20th."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l7-q1",
        "type": "multiple-choice",
        "question": "How do you say the 1st day of the month in Japanese?",
        "options": [
          "ついたち",
          "いちにち",
          "ふつか",
          "ひとつ"
        ],
        "correctAnswer": 0,
        "explanation": "The 1st day is 'ついたち' (tsuitachi).",
        "romajiOptions": [
          "tsuitachi",
          "ichinichi",
          "futsuka",
          "hitotsu"
        ]
      },
      {
        "id": "l7-q2",
        "type": "word-bank",
        "prompt": "Build: 'Today is May 5th.'",
        "targetEn": "Today is May 5th.",
        "chips": [
          "きょう",
          "は",
          "ごがつ",
          "いつか",
          "です",
          "よっか",
          "むいか"
        ],
        "correctOrder": [
          "きょう",
          "は",
          "ごがつ",
          "いつか",
          "です"
        ],
        "explanation": "ごがつ (May) + いつか (5th) + です.",
        "romaji": "kyou wa gogatsu itsuka desu"
      },
      {
        "id": "l7-q3",
        "type": "fill-blank",
        "prompt": "The 20th day of the month has a unique native name.",
        "sentence": "20にち は ___ と よびます。",
        "blankWord": "はつか",
        "options": [
          "はつか",
          "にじゅうにち",
          "にじゅっか",
          "はつひ"
        ],
        "correctAnswer": 0,
        "explanation": "The 20th is uniquely called 'はつか' (hatsuka).",
        "romaji": "The 20th day of the month is called ___。"
      },
      {
        "id": "l7-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the English day.",
        "audioText": "あした は にちようび です。",
        "options": [
          "Tomorrow is Sunday.",
          "Tomorrow is Saturday.",
          "Today is Sunday.",
          "Yesterday was Sunday."
        ],
        "correctAnswer": 0,
        "explanation": "'にちようび' means Sunday.",
        "romaji": "ashita wa nichiyoubi desu."
      },
      {
        "id": "l7-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'The 14th day of the month'",
        "targetEn": "The 14th day of the month",
        "chips": [
          "じゅうよっか",
          "じゅうよんにち",
          "じゅうしちにち",
          "じゅういつか"
        ],
        "correctOrder": [
          "じゅうよっか"
        ],
        "explanation": "14th is 'じゅうよっか' (juuyokka).",
        "romaji": "juuyokka"
      },
      {
        "id": "l7-q6",
        "type": "fill-blank",
        "prompt": "Wednesday represents water (水).",
        "sentence": "すいようび は ___ようび です。",
        "blankWord": "すい",
        "options": [
          "すい",
          "か",
          "もく",
          "きん"
        ],
        "correctAnswer": 0,
        "explanation": "Wednesday is 'すいようび' (水曜日).",
        "romaji": "Wednesday is ___youbi."
      },
      {
        "id": "l7-q7",
        "type": "error-hunt",
        "prompt": "Which calendar date reading is INCORRECT?",
        "options": [
          "1st -> ついたち",
          "4th -> よっか",
          "8th -> はちにち",
          "10th -> とおか"
        ],
        "correctAnswer": 2,
        "explanation": "The 8th day is 'ようか' (youka), NOT 'はちにち'.",
        "romajiOptions": [
          "1st -> tsuitachi",
          "4th -> yokka",
          "8th -> hachinichi",
          "10th -> tooka"
        ]
      },
      {
        "id": "l7-q8",
        "type": "multiple-choice",
        "question": "What day of the week is 'げつようび'?",
        "options": [
          "Monday",
          "Tuesday",
          "Sunday",
          "Friday"
        ],
        "correctAnswer": 0,
        "explanation": "'げつようび' (月曜日) is Monday."
      },
      {
        "id": "l7-q9",
        "type": "word-bank",
        "prompt": "Build: 'My birthday is April 24th.'",
        "targetEn": "My birthday is April 24th.",
        "chips": [
          "たんじょうび",
          "は",
          "しがつ",
          "にじゅうよっか",
          "です",
          "よんにち",
          "ごがつ"
        ],
        "correctOrder": [
          "たんじょうび",
          "は",
          "しがつ",
          "にじゅうよっか",
          "です"
        ],
        "explanation": "たんじょうび (birthday) + は + しがつ (April) + にじゅうよっか (24th) + です.",
        "romaji": "tanjoubi wa shigatsu nijuuyokka desu"
      },
      {
        "id": "l7-q10",
        "type": "fill-blank",
        "prompt": "April (Month 4) is pronounced with し, not よん.",
        "sentence": "4がつ は ___がつ と よみます。",
        "blankWord": "し",
        "options": [
          "し",
          "よん",
          "よ",
          "ろく"
        ],
        "correctAnswer": 0,
        "explanation": "April is read as 'しがつ' (四月).",
        "romaji": "April is pronounced ___gatsu."
      }
    ]
  },
  {
    "id": "question-words",
    "number": 8,
    "title": "JLPT N5: Japanese question words - who, what, when, where, why, how",
    "shortTitle": "Question Words (Who, What, When, Where)",
    "subtitle": "Master interrogatives and indefinite pronouns (誰, 何, いつ, どこ).",
    "description": "Learn だれ (who), なに/なん (what), いつ (when), どこ (where), どうして (why), どう (how), and how adding か creates indefinite words (だれか = someone, なにか = something).",
    "sections": [
      {
        "title": "1. Primary Interrogatives",
        "table": {
          "headers": [
            "Meaning",
            "Japanese",
            "Romaji",
            "Example Question"
          ],
          "rows": [
            [
              "Who",
              "だれ",
              "dare",
              "あの ひと は だれ です ka?(Who is that?)"
            ],
            [
              "What",
              "なに / なん",
              "nani / nan",
              "これ は なん です ka?(What is this?)"
            ],
            [
              "When",
              "いつ",
              "itsu",
              "たんじょうび は いつ です ka?(When is your birthday?)"
            ],
            [
              "Where",
              "どこ",
              "doko",
              "トイレ は どこ です ka?(Where is the restroom?)"
            ],
            [
              "Why",
              "どうして / なぜ",
              "doushite / naze",
              "どうして です ka?(Why is that?)"
            ],
            [
              "How",
              "どう / いかが",
              "dou / ikaga",
              "にほんご は どう です ka?(How is Japanese?)"
            ],
            [
              "Which (of 3+)",
              "どれ / どの",
              "dore / dono",
              "どれ が すき です ka?(Which do you like?)"
            ]
          ]
        }
      },
      {
        "title": "2. Adding か for Indefinite Pronouns",
        "content": "Add か directly to a question word to create an indefinite term:\n  だれ (who) + か = だれか (someone / somebody)\n  なに (what) + か = なにか (something)\n  どこ (where) + か = どこか (somewhere)\n  いつ (when) + か = いつか (someday)",
        "examples": [
          {
            "jp": "だれか います か？",
            "romaji": "Dareka imasu ka.",
            "en": "Is someone there?"
          },
          {
            "jp": "なにか たべます。",
            "romaji": "Nanika tabemasu.",
            "en": "I will eat something."
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l8-q1",
        "type": "multiple-choice",
        "question": "What Japanese question word means 'Where'?",
        "options": [
          "どこ",
          "だれ",
          "いつ",
          "なに"
        ],
        "correctAnswer": 0,
        "explanation": "'どこ' (doko) means where.",
        "romajiOptions": [
          "doko",
          "dare",
          "itsu",
          "nani"
        ]
      },
      {
        "id": "l8-q2",
        "type": "word-bank",
        "prompt": "Build: 'Who is that person?'",
        "targetEn": "Who is that person?",
        "chips": [
          "あの",
          "ひと",
          "は",
          "だれ",
          "です",
          "か",
          "なに",
          "どこ"
        ],
        "correctOrder": [
          "あの",
          "ひと",
          "は",
          "だれ",
          "です",
          "か"
        ],
        "explanation": "'あの ひと' (that person) + 'は' + 'だれ' (who) + 'です か'.",
        "romaji": "ano hito wa dare desu ka"
      },
      {
        "id": "l8-q3",
        "type": "fill-blank",
        "prompt": "Say: \"What is this?\"",
        "sentence": "これ は ___ です か？",
        "blankWord": "なん",
        "options": [
          "なん",
          "だれ",
          "いつ",
          "どれ"
        ],
        "correctAnswer": 0,
        "explanation": "Before です, 'なに' becomes 'なん' ('なん です か').",
        "romaji": "kore wa [ ? ] desu ka?"
      },
      {
        "id": "l8-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the English question.",
        "audioText": "テスト は いつ です か？",
        "options": [
          "When is the test?",
          "Where is the test?",
          "What is the test?",
          "Who took the test?"
        ],
        "correctAnswer": 0,
        "explanation": "'いつ' means when.",
        "romaji": "tesuto wa itsu desu ka?"
      },
      {
        "id": "l8-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'Why didn't you come?'",
        "targetEn": "Why didn't you come?",
        "chips": [
          "どうして",
          "きませんでした",
          "か",
          "どこ",
          "だれ"
        ],
        "correctOrder": [
          "どうして",
          "きませんでした",
          "か"
        ],
        "explanation": "'どうして' (why) + 'きませんでした か' (did not come?).",
        "romaji": "doushite kimasen deshita ka"
      },
      {
        "id": "l8-q6",
        "type": "fill-blank",
        "prompt": "What does だれ + か mean?",
        "sentence": "だれ + か = ___。",
        "blankWord": "Someone / Somebody",
        "options": [
          "Someone / Somebody",
          "Everyone",
          "No one",
          "Who is it?"
        ],
        "correctAnswer": 0,
        "explanation": "Adding か to だれ forms 'someone / somebody'.",
        "romaji": "dare + ka = ___。"
      },
      {
        "id": "l8-q7",
        "type": "error-hunt",
        "prompt": "Which sentence has an unnatural question word particle usage?",
        "options": [
          "トイレ は どこ です か？",
          "だれ の かさ です か？",
          "いつ は いきます か？",
          "にほんご の べんきょう は どう です か？"
        ],
        "correctAnswer": 2,
        "explanation": "'いつ' functions directly as a time adverb and does not take 'は' as a topic marker in this context.",
        "romajiOptions": [
          "toire wa doko desu ka?",
          "dare no kasa desu ka?",
          "itsu wa ikimasu ka?",
          "nihongo no benkyou wa dou desu ka?"
        ]
      },
      {
        "id": "l8-q8",
        "type": "multiple-choice",
        "question": "How do you ask 'How / In what way' in Japanese?",
        "options": [
          "どう",
          "どれ",
          "どこ",
          "なぜ"
        ],
        "correctAnswer": 0,
        "explanation": "'どう' (or polite 'いかが') asks 'how'.",
        "romajiOptions": [
          "dou",
          "dore",
          "doko",
          "naze"
        ]
      },
      {
        "id": "l8-q9",
        "type": "word-bank",
        "prompt": "Build: 'Which one is your bag?'",
        "targetEn": "Which one is your bag?",
        "chips": [
          "あなた",
          "の",
          "かばん",
          "は",
          "どれ",
          "です",
          "か",
          "どこ"
        ],
        "correctOrder": [
          "あなた",
          "の",
          "かばん",
          "は",
          "どれ",
          "です",
          "か"
        ],
        "explanation": "'どれ' asks 'which one (of three or more)' standing as a standalone pronoun.",
        "romaji": "anata no kaban wa dore desu ka"
      },
      {
        "id": "l8-q10",
        "type": "fill-blank",
        "prompt": "What is the meaning of なにか?",
        "sentence": "なにか の いみ は ___ です。",
        "blankWord": "Something",
        "options": [
          "Something",
          "Nothing",
          "Everything",
          "Anything"
        ],
        "correctAnswer": 0,
        "explanation": "なに + か = 'something'.",
        "romaji": "nanika no imi wa [ ? ] desu."
      }
    ]
  },
  {
    "id": "frequency-words",
    "number": 9,
    "title": "JLPT N5: Frequency words - always, usually, often, sometimes, never",
    "shortTitle": "Frequency Words (Always, Often, Sometimes)",
    "subtitle": "Express routine frequencies and mandatory negative pairings.",
    "description": "Learn the frequency spectrum: いつも (always), よく (often), ときどき (sometimes), あまり (rarely/not much + negative), and ぜんぜん (never + negative).",
    "sections": [
      {
        "title": "1. The Frequency Spectrum & Polarity Rules",
        "content": "Crucial Rule:\n  あまり (not much) and ぜんぜん (not at all / never) MUST ALWAYS be paired with a NEGATIVE predicate!",
        "table": {
          "headers": [
            "Frequency",
            "Japanese",
            "Romaji",
            "Required Predicate"
          ],
          "rows": [
            [
              "100% Always",
              "いつも",
              "itsumo",
              "Affirmative"
            ],
            [
              "80% Often / Well",
              "よく",
              "yoku",
              "Affirmative"
            ],
            [
              "50% Sometimes",
              "ときどき",
              "tokidoki",
              "Affirmative"
            ],
            [
              "20% Not much / Rarely",
              "あまり",
              "amari",
              "NEGATIVE ONLY"
            ],
            [
              "0% Never / Not at all",
              "ぜんぜん",
              "zenzen",
              "NEGATIVE ONLY"
            ]
          ]
        },
        "examples": [
          {
            "jp": "わたし は いつも あさごはん を たべます。",
            "romaji": "Watashi wa itsumo asagohan o tabemasu.",
            "en": "I always eat breakfast."
          },
          {
            "jp": "あまり おさけ を のみません。",
            "romaji": "Amari osake o nomimasen.",
            "en": "I rarely drink alcohol."
          },
          {
            "jp": "ぜんぜん わかりません。",
            "romaji": "Zenzen wakarimasen.",
            "en": "I do not understand at all."
          }
        ]
      },
      {
        "title": "2. Periodic \"Every...\" (毎 - まい)",
        "content": "Prefix まい (mai) to express regular frequency intervals:\n  まいにち (every day), まいあさ (every morning), まいばん (every night), まいしゅう (every week), まいつき (every month), まいとし (every year)."
      }
    ],
    "quiz": [
      {
        "id": "l9-q1",
        "type": "multiple-choice",
        "question": "Which frequency word MUST be paired with a negative verb?",
        "options": [
          "ぜんぜん",
          "いつも",
          "よく",
          "ときどき"
        ],
        "correctAnswer": 0,
        "explanation": "'ぜんぜん' (not at all / never) requires a negative predicate (e.g. ぜんぜん たべません).",
        "romajiOptions": [
          "zenzen",
          "itsumo",
          "yoku",
          "tokidoki"
        ]
      },
      {
        "id": "l9-q2",
        "type": "word-bank",
        "prompt": "Build: 'I always eat breakfast.'",
        "targetEn": "I always eat breakfast.",
        "chips": [
          "わたし",
          "は",
          "いつも",
          "あさごはん",
          "を",
          "たべます",
          "ときどき",
          "ぜんぜん"
        ],
        "correctOrder": [
          "わたし",
          "は",
          "いつも",
          "あさごはん",
          "を",
          "たべます"
        ],
        "explanation": "'いつも' (always) sits before the object/verb.",
        "romaji": "watashi wa itsumo asagohan o tabemasu"
      },
      {
        "id": "l9-q3",
        "type": "fill-blank",
        "prompt": "Complete for \"I rarely/hardly drink alcohol.\"",
        "sentence": "わたし は おさけ を ___ のみません。",
        "blankWord": "あまり",
        "options": [
          "あまり",
          "いつも",
          "よく",
          "ときどき"
        ],
        "correctAnswer": 0,
        "explanation": "'あまり' + negative verb expresses 'rarely / not much'.",
        "romaji": "watashi wa osake o [ ? ] nomimasen."
      },
      {
        "id": "l9-q4",
        "type": "audio-listening",
        "prompt": "Listen and identify the habit.",
        "audioText": "まいあさ コーヒー を のみます。",
        "options": [
          "I drink coffee every morning.",
          "I drink coffee every night.",
          "I rarely drink coffee.",
          "I drink tea every morning."
        ],
        "correctAnswer": 0,
        "explanation": "'まいあさ' (every morning) + 'コーヒー を のみます'.",
        "romaji": "maiasa koohii o nomimasu."
      },
      {
        "id": "l9-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'I never watch television.'",
        "targetEn": "I never watch television.",
        "chips": [
          "テレビ",
          "を",
          "ぜんぜん",
          "みません",
          "よく",
          "みます"
        ],
        "correctOrder": [
          "テレビ",
          "を",
          "ぜんぜん",
          "みません"
        ],
        "explanation": "'ぜんぜん' + 'みません' = never watch.",
        "romaji": "terebi o zenzen mimasen"
      },
      {
        "id": "l9-q6",
        "type": "fill-blank",
        "prompt": "Say: \"Mr. Tanaka often goes to the library.\"",
        "sentence": "たなかさん は ___ としょかん へ いきます。",
        "blankWord": "よく",
        "options": [
          "よく",
          "ぜんぜん",
          "あまり",
          "いつもは"
        ],
        "correctAnswer": 0,
        "explanation": "'よく' means 'often / frequently'.",
        "romaji": "tanaka-san wa [ ? ] toshokan e ikimasu."
      },
      {
        "id": "l9-q7",
        "type": "error-hunt",
        "prompt": "Which sentence has a frequency and polarity mismatch error?",
        "options": [
          "いつも あさ 7じ に おきます。",
          "ぜんぜん にほんご を はなします。",
          "ときどき えいが を みます。",
          "あまり おにく を たべません。"
        ],
        "correctAnswer": 1,
        "explanation": "'ぜんぜん' cannot be paired with an affirmative verb ('はなします'). It must be 'はなしません'.",
        "romajiOptions": [
          "itsumo asa shichiji ni okimasu.",
          "zenzen nihongo o hanashimasu.",
          "tokidoki eiga o mimasu.",
          "amari oniku o tabemasen."
        ]
      },
      {
        "id": "l9-q8",
        "type": "multiple-choice",
        "question": "What does 'ときどき' mean?",
        "options": [
          "Sometimes",
          "Always",
          "Never",
          "Rarely"
        ],
        "correctAnswer": 0,
        "explanation": "'ときどき' (時々) means sometimes."
      },
      {
        "id": "l9-q9",
        "type": "word-bank",
        "prompt": "Build: 'I study Japanese every day.'",
        "targetEn": "I study Japanese every day.",
        "chips": [
          "まいにち",
          "にほんご",
          "を",
          "べんきょう",
          "します",
          "ぜんぜん",
          "あまり"
        ],
        "correctOrder": [
          "まいにち",
          "にほんご",
          "を",
          "べんきょう",
          "します"
        ],
        "explanation": "'まいにち' means every day.",
        "romaji": "mainichi nihongo o benkyou shimasu"
      },
      {
        "id": "l9-q10",
        "type": "fill-blank",
        "prompt": "What does まいつき mean?",
        "sentence": "まいつき は 「Every ___」 の いみ です。",
        "blankWord": "Month",
        "options": [
          "Month",
          "Week",
          "Year",
          "Day"
        ],
        "correctAnswer": 0,
        "explanation": "毎 (まい) + 月 (つき) = Every month.",
        "romaji": "maitsuki = Every ___。"
      }
    ]
  },
  {
    "id": "demonstratives-kore-sore-are",
    "number": 10,
    "title": "JLPT N5: Japanese demonstratives: kore, sore, are, dore",
    "shortTitle": "Demonstratives (Ko-So-A-Do System)",
    "subtitle": "Master spatial demonstratives: kore/sore/are, kono/sono/ano, and koko/soko/asoko.",
    "description": "Master the logical Ko-So-A-Do matrix across pronouns (これ), noun modifiers (この), locations (ここ), and directions (こちら).",
    "sections": [
      {
        "title": "1. The Ko-So-A-Do Matrix",
        "content": "The 4 Distance Categories:\n  こ (Ko): Near the speaker (This / Here)\n  そ (So): Near the listener (That / There)\n  あ (A): Far from BOTH speaker and listener (That over there)\n  ど (Do): Question word (Which / Where)",
        "table": {
          "headers": [
            "Category",
            "Pronoun (Thing)",
            "Noun Modifier",
            "Location (Place)",
            "Direction (Polite)"
          ],
          "rows": [
            [
              "Ko (Near me)",
              "これ (this)",
              "この [Noun] (this)",
              "ここ (here)",
              "こちら (this way)"
            ],
            [
              "So (Near you)",
              "それ (that)",
              "その [Noun] (that)",
              "そこ (there)",
              "そちら (that way)"
            ],
            [
              "A (Far away)",
              "あれ (that over there)",
              "あの [Noun] (that)",
              "あそこ (over there)",
              "あちら (that way)"
            ],
            [
              "Do (Question)",
              "どれ (which one)",
              "どの [Noun] (which)",
              "どこ (where)",
              "どちら (which way)"
            ]
          ]
        }
      },
      {
        "title": "2. Critical Rule: これ vs この",
        "content": "これ stands alone as a noun.\nこの CANNOT stand alone — it MUST be immediately followed by a noun!\n  Correct: これ は ほん desu. (This is a book.)\n  Correct: この ほん は わたし の desu. (This book is mine.)\n  WRONG: これ ほん は... ❌"
      }
    ],
    "quiz": [
      {
        "id": "l10-q1",
        "type": "multiple-choice",
        "question": "What is the crucial grammatical rule distinguishing 'これ' from 'この'?",
        "options": [
          "これ stands alone as a noun; この MUST be immediately followed by a noun.",
          "これ is for people; この is for objects.",
          "この is for things far away; これ is for things nearby.",
          "There is no difference."
        ],
        "correctAnswer": 0,
        "explanation": "この is an adjective-like determiner requiring a partner noun (e.g. この くるま).",
        "romajiOptions": [
          "kore stands alone as a noun; kono MUST be immediately followed by a noun.",
          "kore is for people; kono is for objects.",
          "kono is for things far away; kore is for things nearby.",
          "There is no difference."
        ]
      },
      {
        "id": "l10-q2",
        "type": "word-bank",
        "prompt": "Build: 'That book (near you) is mine.'",
        "targetEn": "That book is mine.",
        "chips": [
          "その",
          "ほん",
          "は",
          "わたし",
          "の",
          "です",
          "あの",
          "これ"
        ],
        "correctOrder": [
          "その",
          "ほん",
          "は",
          "わたし",
          "の",
          "です"
        ],
        "explanation": "'その ほん' (that book near listener) + は + わたし の (mine) + です.",
        "romaji": "sono hon wa watashi no desu"
      },
      {
        "id": "l10-q3",
        "type": "fill-blank",
        "prompt": "Ask what that object far from both of you is.",
        "sentence": "___ は なん です か？",
        "blankWord": "あれ",
        "options": [
          "あれ",
          "それ",
          "これ",
          "どれ"
        ],
        "correctAnswer": 0,
        "explanation": "'あれ' refers to an object far from both the speaker and listener.",
        "romaji": "[ ? ] wa nan desu ka?"
      },
      {
        "id": "l10-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the English translation.",
        "audioText": "ここ は きょうしつ です。",
        "options": [
          "Here is the classroom.",
          "There is the classroom.",
          "Over there is the library.",
          "Where is the classroom?"
        ],
        "correctAnswer": 0,
        "explanation": "'ここ' means here.",
        "romaji": "koko wa kyoushitsu desu."
      },
      {
        "id": "l10-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'Which umbrella is yours?'",
        "targetEn": "Which umbrella is yours?",
        "chips": [
          "あなた",
          "の",
          "かさ",
          "は",
          "どれ",
          "です",
          "か",
          "どこ",
          "あれ"
        ],
        "correctOrder": [
          "あなた",
          "の",
          "かさ",
          "は",
          "どれ",
          "です",
          "か"
        ],
        "explanation": "'どれ' is the standalone question pronoun for 'which one'.",
        "romaji": "anata no kasa wa dore desu ka"
      },
      {
        "id": "l10-q6",
        "type": "fill-blank",
        "prompt": "What spatial location does あそこ represent?",
        "sentence": "あそこ = ___。",
        "blankWord": "Over there (far from both)",
        "options": [
          "Over there (far from both)",
          "Here (near speaker)",
          "There (near listener)",
          "Where"
        ],
        "correctAnswer": 0,
        "explanation": "あそこ represents a place distant from both speakers.",
        "romaji": "asoko = ___。"
      },
      {
        "id": "l10-q7",
        "type": "error-hunt",
        "prompt": "Which sentence violates the demonstrative grammar rules?",
        "options": [
          "この ほん は おもしろい です。",
          "これ ほん は たなかさん の です。",
          "そこ に ねこ が います。",
          "どれ が あなた の くるま です か？"
        ],
        "correctAnswer": 1,
        "explanation": "'これ ほん' is invalid grammar; you must use 'この ほん'.",
        "romajiOptions": [
          "kono hon wa omoshiroi desu.",
          "kore hon wa tanaka-san no desu.",
          "soko ni neko ga imasu.",
          "dore ga anata no kuruma desu ka?"
        ]
      },
      {
        "id": "l10-q8",
        "type": "multiple-choice",
        "question": "What is the polite/formal directional version of 'ここ' (here)?",
        "options": [
          "こちら",
          "そちら",
          "あちら",
          "どちら"
        ],
        "correctAnswer": 0,
        "explanation": "'こちら' (kochira) is the polite equivalent of ここ.",
        "romajiOptions": [
          "kochira",
          "sochira",
          "achira",
          "dochira"
        ]
      },
      {
        "id": "l10-q9",
        "type": "word-bank",
        "prompt": "Build: 'This is a delicious restaurant.'",
        "targetEn": "This is a delicious restaurant.",
        "chips": [
          "ここ",
          "は",
          "おいしい",
          "レストラン",
          "です",
          "これ",
          "そこ"
        ],
        "correctOrder": [
          "ここ",
          "は",
          "おいしい",
          "レストラン",
          "です"
        ],
        "explanation": "'ここ は おいしい レストラン です' refers to this location.",
        "romaji": "koko wa oishii resutoran desu"
      },
      {
        "id": "l10-q10",
        "type": "fill-blank",
        "prompt": "Which word connects directly to a noun to ask \"Which person?\"",
        "sentence": "どの ひと です か？",
        "blankWord": "どの",
        "options": [
          "どの",
          "どれ",
          "どこ",
          "これ"
        ],
        "correctAnswer": 0,
        "explanation": "'どの' must be used immediately before a noun ('どの ひと').",
        "romaji": "Which person? = [ ? ] hito desu ka?"
      }
    ]
  },
  {
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
        "romaji": "takai desu ___, oishii desu."
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
        "romaji": "benkyou shimashita 。 shikashi tesuto wa muzukashikatta desu"
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
        "romaji": "[ ? ] wa formal or written contrast connector used at sentence start."
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
        "romaji": "Conjunction 'ga' connects two contrasting clauses in a [ ? ] sentence."
      }
    ]
  },
  {
    "id": "choice-or-words",
    "number": 12,
    "title": "JLPT N5: Choice: \"or\" words in Japanese - ka, matawa, soretomo",
    "shortTitle": "Choice Words (Ka, Matawa, Soretomo)",
    "subtitle": "Connecting alternatives, sentence-starting choices, and formal options.",
    "description": "Learn particle か (noun or noun), sentence-starter それとも (or is it...?), and formal/administrative または.",
    "sections": [
      {
        "title": "1. The 3 Japanese \"Or\" Forms",
        "table": {
          "headers": [
            "Form",
            "Usage",
            "Context / Position"
          ],
          "rows": [
            [
              "A か B",
              "Noun or Noun",
              "Within a single clause: \"A or B\""
            ],
            [
              "それとも (soretomo)",
              "Sentence start in questions",
              "Begins a 2nd alternative question: \"...? Or ...?\""
            ],
            [
              "または (matawa)",
              "Formal noun/clause choice",
              "Official forms, notices, documents: \"Option A or Option B\""
            ]
          ]
        },
        "examples": [
          {
            "jp": "コーヒー か おちゃ を のみます。",
            "romaji": "Koohii ka ocha o nomimasu.",
            "en": "I drink coffee or tea."
          },
          {
            "jp": "バス で いきます か？それとも、でんしゃ です か？",
            "romaji": "Basu de ikimasu ka. Soretomo, densha desu ka.",
            "en": "Will you go by bus? Or will you take the train?"
          }
        ]
      }
    ],
    "quiz": [
      {
        "id": "l12-q1",
        "type": "multiple-choice",
        "question": "How do you connect two nouns with 'or' (e.g. 'Coffee or tea')?",
        "options": [
          "コーヒー か おちゃ",
          "コーヒー と おちゃ",
          "コーヒー それとも おちゃ",
          "コーヒー でも おちゃ"
        ],
        "correctAnswer": 0,
        "explanation": "Particle 'か' between two nouns denotes 'or'. (と means 'and').",
        "romajiOptions": [
          "koohii ka ocha",
          "koohii to ocha",
          "koohii soretomo ocha",
          "koohii demo ocha"
        ]
      },
      {
        "id": "l12-q2",
        "type": "word-bank",
        "prompt": "Build: 'Will you go by bus or by train?'",
        "targetEn": "Will you go by bus or by train?",
        "chips": [
          "バス",
          "で",
          "いきます",
          "か",
          "でんしゃ",
          "で",
          "いきます",
          "か"
        ],
        "correctOrder": [
          "バス",
          "で",
          "いきます",
          "か",
          "でんしゃ",
          "で",
          "いきます",
          "か"
        ],
        "explanation": "Repeated か questions present mutually exclusive choices.",
        "romaji": "basu de ikimasu ka densha de ikimasu ka"
      },
      {
        "id": "l12-q3",
        "type": "fill-blank",
        "prompt": "Choose the sentence-starter for a follow-up alternative question.",
        "sentence": "あした は はれ です か？___、あめ です か？",
        "blankWord": "それとも",
        "options": [
          "それとも",
          "か",
          "または",
          "でも"
        ],
        "correctAnswer": 0,
        "explanation": "'それとも' (soretomo) begins the second question: 'Or is it...?'",
        "romaji": "ashita wa hare desu ka? ___, ame desu ka?"
      },
      {
        "id": "l12-q4",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "これ か あれ を ください。",
        "options": [
          "Please give me this or that.",
          "Please give me this and that.",
          "Is this that?",
          "Which one do you want?"
        ],
        "correctAnswer": 0,
        "explanation": "'これ か あれ' = this or that.",
        "romaji": "kore ka are o kudasai."
      },
      {
        "id": "l12-q5",
        "type": "word-bank",
        "prompt": "Assemble: 'Is today Monday or Tuesday?'",
        "targetEn": "Is today Monday or Tuesday?",
        "chips": [
          "きょう",
          "は",
          "げつようび",
          "です",
          "か",
          "かようび",
          "です",
          "か"
        ],
        "correctOrder": [
          "きょう",
          "は",
          "げつようび",
          "です",
          "か",
          "かようび",
          "です",
          "か"
        ],
        "explanation": "Choice question format: A です か、B です か.",
        "romaji": "kyou wa getsuyoubi desu ka kayoubi desu ka"
      },
      {
        "id": "l12-q6",
        "type": "fill-blank",
        "prompt": "Which choice word is standard on official registration forms?",
        "sentence": "___ は けいやくしょ など で つかう ことば です。",
        "blankWord": "または",
        "options": [
          "または",
          "それとも",
          "でも",
          "けど"
        ],
        "correctAnswer": 0,
        "explanation": "'または' (又は) is the standard formal word for 'or'.",
        "romaji": "[ ? ] is commonly found on official forms and contracts for 'or / alternatively'."
      },
      {
        "id": "l12-q7",
        "type": "error-hunt",
        "prompt": "Which sentence misuses the choice word?",
        "options": [
          "にく か さかな を たべます。",
          "コーヒー に します か？それとも、こうちゃ に します か？",
          "あした それとも あさって いきます。",
          "でんわ または メール で れんらく してください。"
        ],
        "correctAnswer": 2,
        "explanation": "'それとも' cannot directly glue two standalone nouns in a sentence; use 'か' (あした か あさって).",
        "romajiOptions": [
          "niku ka sakana o tabemasu.",
          "koohii ni shimasu ka? soretomo, koucha ni shimasu ka?",
          "ashita soretomo asatte ikimasu.",
          "denwa matawa meeru de renraku shite kudasai."
        ]
      },
      {
        "id": "l12-q8",
        "type": "multiple-choice",
        "question": "Which choice word specifically starts a follow-up question?",
        "options": [
          "それとも",
          "または",
          "か",
          "そして"
        ],
        "correctAnswer": 0,
        "explanation": "'それとも' starts alternative questions.",
        "romajiOptions": [
          "soretomo",
          "matawa",
          "ka",
          "soshite"
        ]
      },
      {
        "id": "l12-q9",
        "type": "word-bank",
        "prompt": "Build: 'Apple or banana'",
        "targetEn": "Apple or banana",
        "chips": [
          "りんご",
          "か",
          "バナナ",
          "それとも",
          "または"
        ],
        "correctOrder": [
          "りんご",
          "か",
          "バナナ"
        ],
        "explanation": "'りんご か バナナ' uses particle か for 'or'.",
        "romaji": "ringo ka banana"
      },
      {
        "id": "l12-q10",
        "type": "fill-blank",
        "prompt": "Say: \"Please lend me a pen or a pencil.\"",
        "sentence": "ぺん ___ えんぴつ を かして ください。",
        "blankWord": "か",
        "options": [
          "か",
          "それとも",
          "けど",
          "が"
        ],
        "correctAnswer": 0,
        "explanation": "'か' links the nouns ぺん and えんぴつ.",
        "romaji": "pen [ ? ] enpitsu o kashite kudasai."
      }
    ]
  }
];
