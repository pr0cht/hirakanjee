// JLPT N5 Vocabulary Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Vocabulary Curriculum
// Contains 3 comprehensive lessons covering 802 core vocabulary words,
// family words (humble vs respectful), and seasons/weather words.

export const n5VocabularyLessons = [
  {
    "id": "vocab-802-core",
    "number": 1,
    "section": "vocabulary",
    "title": "802 JLPT N5 Core Vocabulary Foundations",
    "shortTitle": "Core 802 Vocabulary",
    "subtitle": "Master essential everyday Japanese nouns, locations, transportation, and daily essentials.",
    "rules": [
      {
        "title": "The Backbone of JLPT N5 Vocabulary",
        "formula": "Categorical Clustering for High Retention",
        "explanation": "The JLPT N5 requires approximately 800 core vocabulary words. Grouping words by real-life contexts (home, food, transport, school, work) accelerates contextual recall and reading speed."
      },
      {
        "title": "Compound Nouns & Modifiers",
        "formula": "[Noun A] の [Noun B] (e.g. 日本の くるま)",
        "explanation": "In Japanese, nouns combine effortlessly using の: \"ほんとう の はなし\" (true story), \"にほんご の じしょ\" (Japanese dictionary), \"えき の まえ\" (in front of the station)."
      },
      {
        "title": "Katakana Loanwords (外来語)",
        "formula": "Foreign Loanword -> Japanese Phonetics in Katakana",
        "explanation": "Modern Japanese borrows many everyday terms from English and European languages. These words (e.g., コンビニ, カフェ, テニス, パン) are always written in Katakana and are tested on the JLPT N5."
      }
    ],
    "tables": [
      {
        "title": "Core N5 Daily Life Vocabulary",
        "headers": [
          "Japanese",
          "Romaji",
          "Meaning",
          "Collocation Example"
        ],
        "rows": [
          [
            "みず",
            "mizu",
            "water (cold/room temp)",
            "つめたい みず を のむ"
          ],
          [
            "おちゃ",
            "ocha",
            "tea (green tea)",
            "あつい おちゃ を いれる"
          ],
          [
            "ごはん",
            "gohan",
            "cooked rice / meal",
            "あさごはん を たべる"
          ],
          [
            "みせ",
            "mise",
            "shop / store",
            "あの みせ は やすい"
          ],
          [
            "くるま",
            "kuruma",
            "car / automobile",
            "くるま を うんてんする"
          ],
          [
            "じてんしゃ",
            "jitensha",
            "bicycle",
            "じてんしゃ で かよう"
          ],
          [
            "でんしゃ",
            "densha",
            "train",
            "でんしゃ に のる"
          ],
          [
            "えき",
            "eki",
            "train station",
            "えき で まちあわせる"
          ],
          [
            "ほん",
            "hon",
            "book",
            "としょかん の ほん"
          ],
          [
            "てがみ",
            "tegami",
            "letter",
            "てがみ を おくる"
          ],
          [
            "きっぷ",
            "kippu",
            "ticket (train/entry)",
            "きっぷ を かう"
          ],
          [
            "さいふ",
            "saifu",
            "wallet / purse",
            "さいふ を わすれる"
          ]
        ]
      },
      {
        "title": "Essential N5 Katakana Loanwords (外来語)",
        "headers": [
          "Katakana",
          "Romaji",
          "English Meaning",
          "Collocation Example"
        ],
        "rows": [
          [
            "コンビニ",
            "konbini",
            "convenience store",
            "コンビニ で おにぎり を かう"
          ],
          [
            "カフェ",
            "kafe",
            "cafe / coffee shop",
            "カフェ で コーヒー を のむ"
          ],
          [
            "テニス",
            "tenisu",
            "tennis",
            "ともだち と テニス を する"
          ],
          [
            "パン",
            "pan",
            "bread",
            "あさごはん に パン を たべる"
          ],
          [
            "コーヒー",
            "koohii",
            "coffee",
            "あたたかい コーヒー を のむ"
          ],
          [
            "ホテル",
            "hoteru",
            "hotel",
            "とうきょう の ホテル に とまる"
          ],
          [
            "レストラン",
            "resutoran",
            "restaurant",
            "レストラン で ばんごはん を たべる"
          ],
          [
            "バス",
            "basu",
            "bus",
            "バス で えき へ いく"
          ],
          [
            "タクシー",
            "takushii",
            "taxi",
            "タクシー に のる"
          ],
          [
            "デパート",
            "depaato",
            "department store",
            "デパート で かいもの を する"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "えき の ばいてん で きっぷ と しんぶん を かいました。",
        "romaji": "eki no baiten de kippu to shinbun o kaimashita.",
        "en": "I bought a ticket and a newspaper at the station kiosk."
      },
      {
        "ja": "さいふ を いえ に わすれました。",
        "romaji": "saifu o ie ni wasuremashita.",
        "en": "I forgot my wallet at home."
      },
      {
        "ja": "じてんしゃ で えき まで いきます。",
        "romaji": "jitensha de eki made ikimasu.",
        "en": "I go to the station by bicycle."
      }
    ],
    "quiz": [
      {
        "id": "vocab1-q1",
        "type": "multiple-choice",
        "prompt": "What is the Japanese word for \"bicycle\"?",

        "question": "What is the Japanese word for \"bicycle\"?",
        "options": [
          "じてんしゃ",
          "じどうしゃ",
          "でんしゃ",
          "ひこうき"
        ],
        "correctAnswer": 0,
        "explanation": "じてんしゃ (自転車) means bicycle. じどうしゃ is automobile, でんしゃ is electric train.",
        "romajiOptions": [
          "jitensha",
          "jidousha",
          "densha",
          "hikouki"
        ]
      },
      {
        "id": "vocab1-q2",
        "type": "fill-blank",
        "prompt": "Choose the word for \"wallet\": \"テーブル の うえ に [ ? ] が あります。\"",
        "options": [
          "さいふ",
          "きっぷ",
          "みず",
          "てがみ"
        ],
        "correctAnswer": 0,
        "explanation": "さいふ means wallet."
      },
      {
        "id": "vocab1-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the object purchased.",
        "audioText": "えき で きっぷ を かいました。",
        "options": [
          "A train ticket.",
          "A newspaper.",
          "A book.",
          "A drink."
        ],
        "correctAnswer": 0,
        "explanation": "きっぷ = ticket."
      },
      {
        "id": "vocab1-q4",
        "type": "word-bank",
        "prompt": "Assemble: \"I forgot my wallet at home.\"",
        "targetEn": "I forgot my wallet at home.",
        "chips": [
          "さいふ を",
          "いえ に",
          "わすれました",
          "みず を",
          "きっぷ"
        ],
        "correctAnswerSentence": "さいふ を いえ に わすれました",
        "explanation": "さいふ を (wallet) + いえ に (at home) + わすれました (forgot)."
      },
      {
        "id": "vocab1-q5",
        "type": "error-hunt",
        "prompt": "Which word is incorrectly translated in this sentence context?",
        "options": [
          "でんしゃ で はし を たべます。",
          "はし で ごはん を たべます。",
          "としょかん で ほん を よみます。",
          "みせ で パン を かいました。"
        ],
        "correctAnswer": 0,
        "explanation": "\"でんしゃ で はし を たべます\" (eating chopsticks by train) is nonsensical. The utensil for eating is はし で (with chopsticks).",
        "romajiOptions": [
          "densha de hashi o tabemasu.",
          "hashi de gohan o tabemasu.",
          "toshokan de hon o yomimasu.",
          "mise de pan o kaimashita."
        ]
      },
      {
        "id": "vocab1-q6",
        "type": "multiple-choice",
        "prompt": "What does \"あさごはん\" mean?",

        "question": "What does \"あさごはん\" mean?",
        "options": [
          "Breakfast",
          "Lunch",
          "Dinner",
          "Snack"
        ],
        "correctAnswer": 0,
        "explanation": "あさ (morning) + ごはん (meal) = breakfast."
      },
      {
        "id": "vocab1-q7",
        "type": "fill-blank",
        "prompt": "Complete: \"I will write a letter.\" -> \"ともだち に [ ? ] を かきます。\"",
        "options": [
          "てがみ",
          "きっぷ",
          "くるま",
          "みせ"
        ],
        "correctAnswer": 0,
        "explanation": "てがみ (手紙) means letter: てがみ を かきます."
      },
      {
        "id": "vocab1-q8",
        "type": "audio-listening",
        "prompt": "Listen and identify what is missing.",
        "audioText": "かさ が ありません。",
        "options": [
          "Umbrella",
          "Wallet",
          "Keys",
          "Bag"
        ],
        "correctAnswer": 0,
        "explanation": "かさ = umbrella."
      },
      {
        "id": "vocab1-q9",
        "type": "word-bank",
        "prompt": "Assemble: \"I drank cold water.\"",
        "targetEn": "I drank cold water.",
        "chips": [
          "つめたい",
          "みず を",
          "のみました",
          "たべました",
          "あつい"
        ],
        "correctAnswerSentence": "つめたい みず を のみました",
        "explanation": "つめたい みず (cold water) + のみました (drank)."
      },
      {
        "id": "vocab1-q10",
        "type": "multiple-choice",
        "prompt": "What is the word for \"ticket kiosk / shop\"?",

        "question": "What is the word for \"ticket kiosk / shop\"?",
        "options": [
          "みせ (shop) / ばいてん (kiosk)",
          "えき (station)",
          "としょかん (library)",
          "ぎんこう (bank)"
        ],
        "correctAnswer": 0,
        "explanation": "みせ is a general shop; ばいてん is a stand or kiosk."
      }
    ]
  },
  {
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
  },
  {
    "id": "vocab-seasons-weather",
    "number": 3,
    "section": "vocabulary",
    "title": "Seasons & Weather Vocabulary: Haru, Natsu, Aki, Fuyu",
    "shortTitle": "Seasons & Weather",
    "subtitle": "Master the 4 seasons, weather phenomena (rain, snow, sunny, cloudy), and seasonal expressions.",
    "rules": [
      {
        "title": "The Four Distinct Japanese Seasons (四季 Shiki)",
        "formula": "春 (はる - Spring) | 夏 (なつ - Summer) | 秋 (あき - Autumn) | 冬 (ふゆ - Winter)",
        "explanation": "Japan values the seasonal cycle deeply. N5 tests your mastery of the four seasons and their accompanying weather patterns."
      },
      {
        "title": "Natural Weather Verbs with が",
        "formula": "あめ が ふります (Rain falls) | ゆき が ふります (Snow falls) | かぜ が ふきます (Wind blows)",
        "explanation": "Weather phenomena are spontaneous events marked by が with special verbs: ふります (falls - for rain/snow) and ふきます (blows - for wind)."
      }
    ],
    "tables": [
      {
        "title": "Seasons & Weather Lexicon",
        "headers": [
          "Category",
          "Japanese",
          "Romaji",
          "Meaning",
          "Sample Phrase"
        ],
        "rows": [
          [
            "Season",
            "はる",
            "haru",
            "spring",
            "はる に さくら が さきます。"
          ],
          [
            "Season",
            "なつ",
            "natsu",
            "summer",
            "なつ は とても あつい です。"
          ],
          [
            "Season",
            "あき",
            "aki",
            "autumn / fall",
            "あき の もみじ は きれい です。"
          ],
          [
            "Season",
            "ふゆ",
            "fuyu",
            "winter",
            "ふゆ は ゆき が ふります。"
          ],
          [
            "Weather",
            "てんき",
            "tenki",
            "weather",
            "きょう は いい てんき です。"
          ],
          [
            "Weather",
            "あめ",
            "ame",
            "rain",
            "あめ が ふって います。"
          ],
          [
            "Weather",
            "ゆき",
            "yuki",
            "snow",
            "ゆき が たくさん ふりました。"
          ],
          [
            "Weather",
            "はれ",
            "hare",
            "clear / sunny",
            "あした は はれ です。"
          ],
          [
            "Weather",
            "くもり",
            "kumori",
            "cloudy",
            "きょう は くもり です。"
          ],
          [
            "Weather",
            "かぜ",
            "kaze",
            "wind",
            "つよい かぜ が ふきます。"
          ],
          [
            "Weather",
            "たいふう",
            "taifuu",
            "typhoon",
            "たいふう が きます。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "きょう は いい てんき です ね。",
        "romaji": "kyou wa ii tenki desu ne.",
        "en": "The weather is nice today, isn't it?"
      },
      {
        "ja": "ふゆ は ゆき が ふります から、とても さむい です。",
        "romaji": "fuyu wa yuki ga furimasu kara, totemo samui desu.",
        "en": "In winter it snows, so it is very cold."
      },
      {
        "ja": "きのう は いちにちじゅう あめ でした。",
        "romaji": "kinou wa ichinichijuu ame deshita.",
        "en": "Yesterday it was rainy all day long."
      }
    ],
    "quiz": [
      {
        "id": "vocab3-q1",
        "type": "multiple-choice",
        "prompt": "Which season is \"あき\" (aki)?",

        "question": "Which season is \"あき\" (aki)?",
        "options": [
          "Autumn / Fall",
          "Spring",
          "Summer",
          "Winter"
        ],
        "correctAnswer": 0,
        "explanation": "あき (秋) means autumn / fall. はる is spring, なつ is summer, ふゆ is winter."
      },
      {
        "id": "vocab3-q2",
        "type": "fill-blank",
        "prompt": "Natural phenomenon verb: \"あめ が [ ? ]。\"",
        "options": [
          "ふって います",
          "のんで います",
          "たべて います",
          "いって います"
        ],
        "correctAnswer": 0,
        "explanation": "Rain and snow \"fall\" using ふる -> ふって います (it is raining)."
      },
      {
        "id": "vocab3-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"Summer is very hot.\"",
        "targetEn": "Summer is very hot.",
        "chips": [
          "なつ は",
          "とても",
          "あつい です",
          "ふゆ は",
          "さむい です"
        ],
        "correctAnswerSentence": "なつ は とても あつい です",
        "explanation": "なつ (summer) + とても あつい です (very hot)."
      },
      {
        "id": "vocab3-q4",
        "type": "audio-listening",
        "prompt": "Listen and identify today's weather forecast.",
        "audioText": "あした は はれ です。",
        "options": [
          "Clear / Sunny",
          "Rainy",
          "Snowy",
          "Cloudy"
        ],
        "correctAnswer": 0,
        "explanation": "はれ (晴れ) means clear / sunny weather."
      },
      {
        "id": "vocab3-q5",
        "type": "error-hunt",
        "prompt": "Which sentence uses an incorrect weather verb?",
        "options": [
          "かぜ が ふります。",
          "かぜ が ふきます。",
          "ゆき が ふります。",
          "あめ が ふります。"
        ],
        "correctAnswer": 0,
        "explanation": "Wind blows (ふきます - 吹く), it does not fall (ふります - 降る). It must be \"かぜ が ふきます\".",
        "romajiOptions": [
          "kaze ga furimasu.",
          "kaze ga fukimasu.",
          "yuki ga furimasu.",
          "ame ga furimasu."
        ]
      },
      {
        "id": "vocab3-q6",
        "type": "multiple-choice",
        "prompt": "Which word means \"cloudy\"?",

        "question": "Which word means \"cloudy\"?",
        "options": [
          "くもり (kumori)",
          "はれ (hare)",
          "あめ (ame)",
          "ゆき (yuki)"
        ],
        "correctAnswer": 0,
        "explanation": "くもり means cloudy weather."
      },
      {
        "id": "vocab3-q7",
        "type": "fill-blank",
        "prompt": "Complete for spring: \"[ ? ] に さくら が さきます。\" (cherry blossoms bloom)",
        "options": [
          "はる",
          "なつ",
          "あき",
          "ふゆ"
        ],
        "correctAnswer": 0,
        "explanation": "さくら (cherry blossoms) bloom in spring (はる)."
      },
      {
        "id": "vocab3-q8",
        "type": "word-bank",
        "prompt": "Assemble: \"Yesterday it rained all day.\"",
        "targetEn": "Yesterday it rained all day.",
        "chips": [
          "きのう は",
          "あめ が",
          "ふりました",
          "ふります",
          "ゆき"
        ],
        "correctAnswerSentence": "きのう は あめ が ふりました",
        "explanation": "Past precipitation: あめ が ふりました."
      },
      {
        "id": "vocab3-q9",
        "type": "audio-listening",
        "prompt": "Listen and identify the season being described.",
        "audioText": "ふゆ は ゆき が たくさん ふります。",
        "options": [
          "Winter",
          "Summer",
          "Autumn",
          "Spring"
        ],
        "correctAnswer": 0,
        "explanation": "ふゆ (winter), ゆき が ふります (snow falls)."
      },
      {
        "id": "vocab3-q10",
        "type": "multiple-choice",
        "prompt": "What is the word for \"typhoon\"?",

        "question": "What is the word for \"typhoon\"?",
        "options": [
          "たいふう (taifuu)",
          "つなみ (tsunami)",
          "じしん (jishin)",
          "かみなり (kaminari)"
        ],
        "correctAnswer": 0,
        "explanation": "たいふう (台風) means typhoon."
      }
    ]
  }
];
