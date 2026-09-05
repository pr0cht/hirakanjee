// JLPT N5 Verbs Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Verbs Curriculum
// Contains 11 comprehensive lessons covering movement verbs (ikimasu/kimasu/kaerimasu),
// existence (arimasu/imasu), 40 masu verbs & verb groups, frequency adverbs,
// give/receive (agemasu/moraimasu/kuremasu), want to (~tai), proposals (~mashou),
// the Te-form, plain forms, relative clauses, and shitte imasu vs wakarimasu.

export const n5VerbsLessons = [
  {
    "id": "verb-movement",
    "number": 1,
    "section": "verbs",
    "title": "Movement Verbs: Ikimasu, Kimasu, Kaerimasu (Ni / E / De)",
    "shortTitle": "Go, Come, Return",
    "subtitle": "Learn direction, destination (に / へ), and transit means (で) with 行きます, 来ます, and 帰ります.",
    "rules": [
      {
        "title": "Core Movement Verbs",
        "formula": "行きます (いきます - Go) | 来ます (きます - Come) | 帰ります (かえります - Return/Go home)",
        "explanation": "Movement verbs describe traveling between locations: いきます moves away from the speaker, きます moves toward the speaker, and かえります moves back to one's home, base, or home country."
      },
      {
        "title": "Destination Particles: に vs へ",
        "formula": "[Place] に / へ + [Movement Verb]",
        "explanation": "Both に (ni = target/goal) and へ (pronounced \"e\" = direction) mark destinations: \"とうきょう に いきます\" or \"とうきょう へ いきます\" (I go to Tokyo). Note: For verbs of meeting/giving (あいます, あげます), ONLY に is valid: \"ともだち に あいます\" (NOT ともだち へ)."
      },
      {
        "title": "Means of Transit: で (By means of)",
        "formula": "[Vehicle / Method] で + [Movement Verb]",
        "explanation": "The particle で specifies the method of transit: でんしゃ で (by train), バス で (by bus), くるま で (by car), ひこうき で (by airplane), じてんしゃ で (by bicycle). Exception: On foot is あるいて (no で)."
      }
    ],
    "tables": [
      {
        "title": "Movement Conjugation Matrix",
        "headers": [
          "Verb",
          "Present Affirmative",
          "Present Negative",
          "Past Affirmative",
          "Past Negative"
        ],
        "rows": [
          [
            "行きます (go)",
            "いきます (ikimasu)",
            "いきません (ikimasen)",
            "いきました (ikimashita)",
            "いきませんでした (ikimasen deshita)"
          ],
          [
            "来ます (come)",
            "きます (kimasu)",
            "きません (kimasen)",
            "きました (kimashita)",
            "きませんでした (kimasen deshita)"
          ],
          [
            "帰ります (return)",
            "かえります (kaerimasu)",
            "かえりません (kaerimasen)",
            "かえりました (kaerimashita)",
            "かえりませんでした (kaerimasen deshita)"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "わたし は でんしゃ で かいしゃ に いきます。",
        "romaji": "watashi wa densha de kaisha ni ikimasu.",
        "en": "I go to the company by train."
      },
      {
        "ja": "なんじ に うち へ かえります か？",
        "romaji": "nanji ni uchi e kaerimasu ka?",
        "en": "What time will you return home?"
      },
      {
        "ja": "ともだち が にほん に きました。",
        "romaji": "tomodachi ga nihon ni kimashita.",
        "en": "My friend came to Japan."
      },
      {
        "ja": "えき から あるいて いきました。",
        "romaji": "eki kara aruite ikimashita.",
        "en": "I went on foot from the station."
      }
    ],
    "quiz": [
      {
        "id": "verb1-q1",
        "type": "word-bank",
        "prompt": "Assemble: \"I go to school by bicycle.\"",
        "targetEn": "I go to school by bicycle.",
        "chips": [
          "わたし は",
          "じてんしゃ で",
          "がっこう に",
          "いきます",
          "じてんしゃ に",
          "でんしゃ"
        ],
        "correctAnswerSentence": "わたし は じてんしゃ で がっこう に いきます",
        "explanation": "Vehicle uses で (じてんしゃ で) and destination uses に (がっこう に)."
      },
      {
        "id": "verb1-q2",
        "type": "fill-blank",
        "prompt": "Choose the correct transit particle: \"くるま [ ? ] とうきょう へ いきました。\"",
        "options": [
          "で",
          "に",
          "を",
          "へ"
        ],
        "correctAnswer": 0,
        "explanation": "くるま で indicates the means of transportation (by car).",
        "romaji": "kuruma [ ? ] toukyou e ikimashita.",
        "romajiOptions": [
          "de",
          "ni",
          "o",
          "e"
        ]
      },
      {
        "id": "verb1-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify where the speaker went.",
        "audioText": "きのう きょうと に いきました。",
        "options": [
          "Yesterday I went to Kyoto.",
          "Yesterday I came from Kyoto.",
          "Tomorrow I will go to Kyoto.",
          "Yesterday I went to Tokyo."
        ],
        "correctAnswer": 0,
        "explanation": "きのう = yesterday, きょうと に = to Kyoto, いきました = went.",
        "romaji": "kinou kyouto ni ikimashita."
      },
      {
        "id": "verb1-q4",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly uses a transit particle with \"on foot\"?",
        "options": [
          "あるいて で がっこう に いきます。",
          "あるいて がっこう に いきます。",
          "バス で えき に いきます。",
          "タクシー で かえりました。"
        ],
        "correctAnswer": 0,
        "explanation": "\"あるいて\" (on foot) is already a te-form adverbial expression and NEVER takes \"で\". Say \"あるいて いきます\", NOT \"あるいて で\".",
        "romajiOptions": [
          "aruite de gakkou ni ikimasu.",
          "aruite gakkou ni ikimasu.",
          "basu de eki ni ikimasu.",
          "takushii de kaerimashita."
        ]
      },
      {
        "id": "verb1-q5",
        "type": "multiple-choice",
        "question": "What is the irregular kanji reading of the particle \"へ\"?",
        "options": [
          "e",
          "he",
          "te",
          "de"
        ],
        "correctAnswer": 0,
        "explanation": "When written as a direction particle, へ is pronounced \"e\" (never \"he\").",
        "romajiOptions": [
          "e",
          "he",
          "te",
          "de"
        ]
      },
      {
        "id": "verb1-q6",
        "type": "word-bank",
        "prompt": "Assemble: \"Did Mr. Tanaka return home?\"",
        "targetEn": "Did Mr. Tanaka return home?",
        "chips": [
          "たなかさん は",
          "うち に",
          "かえりました",
          "か？",
          "きました",
          "いきます"
        ],
        "correctAnswerSentence": "たなかさん は うち に かえりました か？",
        "explanation": "Returning home uses the verb かえりました + か？."
      },
      {
        "id": "verb1-q7",
        "type": "fill-blank",
        "prompt": "Complete: \"I will meet my friend tomorrow.\" -> \"あした ともだち [ ? ] あいます。\"",
        "options": [
          "に",
          "へ",
          "で",
          "を"
        ],
        "correctAnswer": 0,
        "explanation": "The verb あいます (to meet) strictly pairs with に, never へ.",
        "romaji": "ashita tomodachi [ ? ] aimasu.",
        "romajiOptions": [
          "ni",
          "e",
          "de",
          "o"
        ]
      },
      {
        "id": "verb1-q8",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "ひこうき で にほん に きました。",
        "options": [
          "I came to Japan by airplane.",
          "I went to Japan by ship.",
          "I am going to Japan by plane.",
          "I will return from Japan."
        ],
        "correctAnswer": 0,
        "explanation": "ひこうき で (by plane), にほん に (to Japan), きました (came).",
        "romaji": "hikouki de nihon ni kimashita."
      },
      {
        "id": "verb1-q9",
        "type": "multiple-choice",
        "question": "Which sentence means \"I did not go to school on Sunday\"?",
        "options": [
          "にちようび は がっこう に いきませんでした。",
          "にちようび は がっこう に いきました。",
          "にちようび は がっこう に いきません。",
          "にちようび は がっこう に いきます。"
        ],
        "correctAnswer": 0,
        "explanation": "にちようび は (on Sunday), がっこう に (to school), いきませんでした (did not go - past negative).",
        "romajiOptions": [
          "nichiyoubi wa gakkou ni ikimasen deshita.",
          "nichiyoubi wa gakkou ni ikimashita.",
          "nichiyoubi wa gakkou ni ikimasen.",
          "nichiyoubi wa gakkou ni ikimasu."
        ]
      },
      {
        "id": "verb1-q10",
        "type": "fill-blank",
        "prompt": "Select the verb: \"What time will you [ ? ] home?\" (return)",
        "options": [
          "かえります",
          "いきます",
          "きます",
          "たべます"
        ],
        "correctAnswer": 0,
        "explanation": "かえります specifically means to return to one's home or base.",
        "romaji": "What time will you [ ? ] home?",
        "romajiOptions": [
          "kaerimasu",
          "ikimasu",
          "kimasu",
          "tabemasu"
        ]
      }
    ]
  },
  {
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
  },
  {
    "id": "verb-40-masu",
    "number": 3,
    "section": "verbs",
    "title": "40 Essential Masu Verbs & The 3 Verb Groups",
    "shortTitle": "40 Masu Verbs",
    "subtitle": "Master the polite masu stem, tense conjugations, and the 3 Japanese verb groups.",
    "rules": [
      {
        "title": "The 3 Japanese Verb Groups",
        "formula": "Group 1 (Godan / U) | Group 2 (Ichidan / Ru) | Group 3 (Irregular: する / くる)",
        "explanation": "Group 1 verbs end in consonant stems (かきます, のみます). Group 2 verbs end in vowel stems (たべます, みます). Group 3 verbs are irregular: します (do) and きます (come)."
      },
      {
        "title": "Polite Masu Conjugations",
        "formula": "Present (+): ~ます | Present (-): ~ません | Past (+): ~ました | Past (-): ~ませんでした",
        "explanation": "Every Japanese verb can be conjugated politely with the four standard masu endings: たべます (eat), たべません (do not eat), たべました (ate), たべませんでした (did not eat)."
      },
      {
        "title": "Direct Object Marker: を (Pronounced \"o\")",
        "formula": "[Noun] を + [Transitive Verb]",
        "explanation": "The particle を marks the direct object receiving the verb's action: \"ごはん を たべます\" (eat a meal), \"みず を のみます\" (drink water), \"ほん を よみます\" (read a book)."
      }
    ],
    "tables": [
      {
        "title": "Essential N5 Verbs by Group",
        "headers": [
          "Verb (Masu)",
          "Group",
          "Dictionary Base",
          "Meaning",
          "Object Collocation"
        ],
        "rows": [
          [
            "たべます (tabemasu)",
            "Group 2",
            "たべる",
            "eat",
            "パン を たべます"
          ],
          [
            "のみます (nomimasu)",
            "Group 1",
            "のむ",
            "drink",
            "おちゃ を のみます"
          ],
          [
            "みます (mimasu)",
            "Group 2",
            "みる",
            "watch / see",
            "テレビ を みます"
          ],
          [
            "ききます (kikimasu)",
            "Group 1",
            "きく",
            "listen / hear",
            "おんがく を ききます"
          ],
          [
            "よみます (yomimasu)",
            "Group 1",
            "よむ",
            "read",
            "しんぶん を よみます"
          ],
          [
            "かきます (kakimasu)",
            "Group 1",
            "かく",
            "write / draw",
            "てがみ を かきます"
          ],
          [
            "かいます (kaimasu)",
            "Group 1",
            "かう",
            "buy",
            "ほん を かいます"
          ],
          [
            "とります (torimasu)",
            "Group 1",
            "とる",
            "take (photos)",
            "しゃしん を とります"
          ],
          [
            "します (shimasu)",
            "Group 3",
            "する",
            "do",
            "スポーツ を します"
          ],
          [
            "べんきょうします",
            "Group 3",
            "べんきょうする",
            "study",
            "にほんご を べんきょうします"
          ],
          [
            "ねます (nemasu)",
            "Group 2",
            "ねる",
            "sleep / go to bed",
            "11じ に ねます"
          ],
          [
            "おきます (okimasu)",
            "Group 2",
            "おきる",
            "wake up",
            "7じ に おきます"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "まいあさ コーヒー を のみます。",
        "romaji": "maiasa koohii o nomimasu.",
        "en": "I drink coffee every morning."
      },
      {
        "ja": "きのう えいが を みました。",
        "romaji": "kinou eiga o mimashita.",
        "en": "I watched a movie yesterday."
      },
      {
        "ja": "としょかん で ほん を よみます。",
        "romaji": "toshokan de hon o yomimasu.",
        "en": "I read books in the library."
      },
      {
        "ja": "まいばん 10じ に ねます。",
        "romaji": "maiban juuji ni nemasu.",
        "en": "I go to sleep at 10 o'clock every night."
      }
    ],
    "quiz": [
      {
        "id": "verb3-q1",
        "type": "word-bank",
        "prompt": "Assemble: \"I drank black tea yesterday.\"",
        "targetEn": "I drank black tea yesterday.",
        "chips": [
          "きのう",
          "こうちゃ",
          "を",
          "のみました",
          "のみます",
          "に"
        ],
        "correctAnswerSentence": "きのう こうちゃ を のみました",
        "explanation": "Past affirmative of のみます is のみました."
      },
      {
        "id": "verb3-q2",
        "type": "fill-blank",
        "prompt": "Complete: \"I do not eat meat.\" -> \"わたし は おにく を [ ? ]。\"",
        "options": [
          "たべません",
          "たべます",
          "たべました",
          "のみません"
        ],
        "correctAnswer": 0,
        "explanation": "Present negative of たべます is たべません."
      },
      {
        "id": "verb3-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the action being performed.",
        "audioText": "てがみ を かきました。",
        "options": [
          "I wrote a letter.",
          "I read a letter.",
          "I sent a letter.",
          "I bought a letter."
        ],
        "correctAnswer": 0,
        "explanation": "かきました is the past tense of かきます (to write)."
      },
      {
        "id": "verb3-q4",
        "type": "error-hunt",
        "prompt": "Which sentence has an invalid past tense ending?",
        "options": [
          "きのう べんきょうしました でした。",
          "きのう べんきょうしました。",
          "きのう べんきょうしませんでした。",
          "あした べんきょうします。"
        ],
        "correctAnswer": 0,
        "explanation": "\"しました でした\" is double past tense and ungrammatical. The past tense of します is simply \"しました\".",
        "romajiOptions": [
          "kinou benkyou shimashita deshita.",
          "kinou benkyou shimashita.",
          "kinou benkyou shimasen deshita.",
          "ashita benkyou shimasu."
        ]
      },
      {
        "id": "verb3-q5",
        "type": "multiple-choice",
        "question": "Which of the following belongs to Group 3 (Irregular Verbs)?",
        "options": [
          "します (to do)",
          "たべます (to eat)",
          "のみます (to drink)",
          "かきます (to write)"
        ],
        "correctAnswer": 0,
        "explanation": "Group 3 consists strictly of します (suru) and きます (kuru)."
      },
      {
        "id": "verb3-q6",
        "type": "fill-blank",
        "prompt": "Select the object marker: \"おんがく [ ? ] ききます。\"",
        "options": [
          "を",
          "に",
          "で",
          "が"
        ],
        "correctAnswer": 0,
        "explanation": "Listening to music takes direct object を: おんがく を ききます."
      },
      {
        "id": "verb3-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"I took a picture in the park.\"",
        "targetEn": "I took a picture in the park.",
        "chips": [
          "こうえん で",
          "しゃしん を",
          "とりました",
          "とります",
          "に",
          "は"
        ],
        "correctAnswerSentence": "こうえん で しゃしん を とりました",
        "explanation": "Action location takes で, object takes を, past action takes とりました."
      },
      {
        "id": "verb3-q8",
        "type": "multiple-choice",
        "question": "What is the negative past form of かいます (to buy)?",
        "options": [
          "かいませんでした",
          "かいました",
          "かいません",
          "かうじゃありません"
        ],
        "correctAnswer": 0,
        "explanation": "Past negative is ~ませんでした: かい + ませんでした."
      },
      {
        "id": "verb3-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "まいあさ 7じ に おきます。",
        "options": [
          "I wake up at 7:00 every morning.",
          "I go to sleep at 7:00 every night.",
          "I eat breakfast at 7:00.",
          "I leave home at 7:00."
        ],
        "correctAnswer": 0,
        "explanation": "まいあさ = every morning, 7じ に = at 7 o'clock, おきます = wake up."
      },
      {
        "id": "verb3-q10",
        "type": "fill-blank",
        "prompt": "Choose the action verb: \"きのう あたらしい くるま を [ ? ]。\"",
        "options": [
          "かいました",
          "たべました",
          "のみました",
          "よみました"
        ],
        "correctAnswer": 0,
        "explanation": "くるま (car) is bought (かいました)."
      }
    ]
  },
  {
    "id": "verb-frequency",
    "number": 4,
    "section": "verbs",
    "title": "Japanese Frequency Adverbs: Often, Sometimes, Rarely, Never",
    "shortTitle": "Frequency Adverbs",
    "subtitle": "Learn how to describe habit frequency with いつも, よく, ときどき, あまり, and ぜんぜん.",
    "rules": [
      {
        "title": "Habitual Frequency Spectrum",
        "formula": "いつも (100%) > よく (80%) > ときどき (50%) > あまり (20%) > ぜんぜん (0%)",
        "explanation": "Frequency adverbs are placed before verbs (or before objects) to modify how often an action happens. They do not require any particle."
      },
      {
        "title": "Polarity Harmony Rule",
        "formula": "Affirmative: いつも, よく, ときどき | Negative (~ません): あまり, ぜんぜん",
        "explanation": "While いつも, よく, and ときどき take affirmative verbs, あまり (rarely/hardly) and ぜんぜん (never/not at all) MUST pair with negative verbs (e.g. \"あまり たべません\", \"ぜんぜん のみません\")."
      },
      {
        "title": "Routine Frequency with まい~ (Every~)",
        "formula": "まい + [Time Unit] (e.g., まいにち, まいあさ, まいばん, まいしゅう)",
        "explanation": "The prefix まい (毎) attaches to natural time units to express recurring habits (\"every day\", \"every night\"). Like frequency adverbs, time words with まい do not take the particle に."
      }
    ],
    "tables": [
      {
        "title": "Frequency Adverbs with Verbs",
        "headers": [
          "Adverb",
          "Romaji",
          "Frequency",
          "Verb Requirement",
          "Example"
        ],
        "rows": [
          [
            "いつも",
            "itsumo",
            "100% (Always)",
            "Affirmative (~ます)",
            "いつも あさごはん を たべます。"
          ],
          [
            "よく",
            "yoku",
            "80% (Often)",
            "Affirmative (~ます)",
            "よく としょかん に いきます。"
          ],
          [
            "ときどき",
            "tokidoki",
            "50% (Sometimes)",
            "Affirmative (~ます)",
            "ときどき えいが を みます。"
          ],
          [
            "あまり",
            "amari",
            "20% (Rarely / Hardly)",
            "NEGATIVE (~ません)",
            "あまり おさけ を のみません。"
          ],
          [
            "ぜんぜん",
            "zenzen",
            "0% (Never / Not at all)",
            "NEGATIVE (~ません)",
            "ぜんぜん たばこ を すいません。"
          ]
        ]
      },
      {
        "title": "Routine Time Expressions with まい~ (Every~)",
        "headers": [
          "Pattern",
          "Romaji",
          "English Meaning",
          "Example Sentence"
        ],
        "rows": [
          [
            "まいにち",
            "mainichi",
            "Every day",
            "まいにち にほんご を べんきょうします。"
          ],
          [
            "まいあさ",
            "maiasa",
            "Every morning",
            "まいあさ 7じ に おきます。"
          ],
          [
            "まいばん",
            "maiban",
            "Every night",
            "まいばん 11じ に ねます。"
          ],
          [
            "まいしゅう",
            "maishuu",
            "Every week",
            "まいしゅう にほんご の クラス が あります。"
          ],
          [
            "まいつき",
            "maitsuki",
            "Every month",
            "まいつき ほん を 3さつ よみます。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "わたし は よく にほんりょうり を たべます。",
        "romaji": "watashi wa yoku nihonryouri o tabemasu.",
        "en": "I often eat Japanese food."
      },
      {
        "ja": "やすみ の ひ は ときどき かいもの に いきます。",
        "romaji": "yasumi no hi wa tokidoki kaimono ni ikimasu.",
        "en": "On days off, I sometimes go shopping."
      },
      {
        "ja": "あまり テレビ を みません。",
        "romaji": "amari terebi o mimasen.",
        "en": "I rarely watch television."
      },
      {
        "ja": "かれ は ぜんぜん にほんご を はなしません。",
        "romaji": "kare wa zenzen nihongo o hanashimasen.",
        "en": "He does not speak Japanese at all."
      }
    ],
    "quiz": [
      {
        "id": "verb4-q1",
        "type": "fill-blank",
        "prompt": "Complete: \"I rarely drink alcohol.\" -> \"わたし は おさけ を [ ? ] のみません。\"",
        "options": [
          "あまり",
          "よく",
          "いつも",
          "ときどき"
        ],
        "correctAnswer": 0,
        "explanation": "あまり pairs with the negative verb のみません to mean \"rarely/hardly\"."
      },
      {
        "id": "verb4-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"Mr. Tanaka often goes to the library.\"",
        "targetEn": "Mr. Tanaka often goes to the library.",
        "chips": [
          "たなかさん は",
          "よく",
          "としょかん に",
          "いきます",
          "あまり",
          "ぜんぜん"
        ],
        "correctAnswerSentence": "たなかさん は よく としょかん に いきます",
        "explanation": "よく (often) placed before the destination and affirmative verb."
      },
      {
        "id": "verb4-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the habit.",
        "audioText": "ときどき カフェ で コーヒー を のみます。",
        "options": [
          "I sometimes drink coffee at a cafe.",
          "I always drink coffee at home.",
          "I never drink coffee at a cafe.",
          "I often drink tea at a cafe."
        ],
        "correctAnswer": 0,
        "explanation": "ときどき = sometimes, カフェ で = at a cafe."
      },
      {
        "id": "verb4-q4",
        "type": "error-hunt",
        "prompt": "Which sentence contains a frequency polarity mismatch?",
        "options": [
          "ぜんぜん えいが を みます。",
          "いつも えいが を みます。",
          "よく えいが を みます。",
          "ぜんぜん えいが を みません。"
        ],
        "correctAnswer": 0,
        "explanation": "\"ぜんぜん えいが を みます\" is incorrect because ぜんぜん must be paired with a negative verb (みません).",
        "romajiOptions": [
          "zenzen eiga o mimasu.",
          "itsumo eiga o mimasu.",
          "yoku eiga o mimasu.",
          "zenzen eiga o mimasen."
        ]
      },
      {
        "id": "verb4-q5",
        "type": "multiple-choice",
        "question": "Which adverb indicates 100% habitual consistency?",
        "options": [
          "いつも",
          "よく",
          "ときどき",
          "あまり"
        ],
        "correctAnswer": 0,
        "explanation": "いつも means \"always\" (100% frequency)."
      },
      {
        "id": "verb4-q6",
        "type": "fill-blank",
        "prompt": "Select the adverb for \"never\": \"かれ は [ ? ] にく を たべません。\"",
        "options": [
          "ぜんぜん",
          "よく",
          "いつも",
          "すこし"
        ],
        "correctAnswer": 0,
        "explanation": "ぜんぜん + たべません = never eats."
      },
      {
        "id": "verb4-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"I always wake up at 6:00.\"",
        "targetEn": "I always wake up at 6:00.",
        "chips": [
          "いつも",
          "6じ に",
          "おきます",
          "ねます",
          "よく"
        ],
        "correctAnswerSentence": "いつも 6じ に おきます",
        "explanation": "いつも (always) + 6じ に おきます (wake up at 6:00)."
      },
      {
        "id": "verb4-q8",
        "type": "multiple-choice",
        "question": "Which sentence correctly means \"I don't study very much\"?",
        "options": [
          "あまり べんきょうしません。",
          "あまり べんきょうします。",
          "よく べんきょうしません。",
          "いつも べんきょうしません。"
        ],
        "correctAnswer": 0,
        "explanation": "あまり べんきょうしません is the standard natural phrase for \"I don't study very much\"."
      },
      {
        "id": "verb4-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "よく テニス を します か？",
        "options": [
          "Do you often play tennis?",
          "Do you ever play tennis?",
          "Do you like tennis?",
          "Where do you play tennis?"
        ],
        "correctAnswer": 0,
        "explanation": "よく = often, テニス を します = play tennis."
      },
      {
        "id": "verb4-q10",
        "type": "fill-blank",
        "prompt": "Choose the frequency word for 50% (\"sometimes\"): \"しゅうまつ は [ ? ] りょうり を します。\"",
        "options": [
          "ときどき",
          "あまり",
          "ぜんぜん",
          "いつも"
        ],
        "correctAnswer": 0,
        "explanation": "ときどき expresses ~50% frequency (sometimes)."
      }
    ]
  },
  {
    "id": "verb-give-receive",
    "number": 5,
    "section": "verbs",
    "title": "Japanese Give/Receive: Agemasu, Moraimasu, Kuremasu",
    "shortTitle": "Give & Receive",
    "subtitle": "Master the directional perspective of giving (あげます), receiving (もらいます), and being given to (くれます).",
    "rules": [
      {
        "title": "The 3 Benefactive Verbs of Giving & Receiving",
        "formula": "あげます (Give to other) | もらいます (Receive from someone) | くれます (Someone gives to ME)",
        "explanation": "Japanese giving verbs are perspective-dependent: あげます is used when the speaker gives outward. もらいます is used when the speaker receives inward. くれます is used when someone gives inward directly to the speaker (or the speaker's in-group)."
      },
      {
        "title": "Particle Patterns for Giving & Receiving",
        "formula": "Giving: [Giver] は [Recipient] に [Object] を あげます / くれます | Receiving: [Recipient] は [Giver] に/から [Object] を もらいます",
        "explanation": "For あげます and くれます, the recipient receives に. For もらいます, the person you receive from can be marked by に or から (from)."
      },
      {
        "title": "Crucial Difference: あげます vs くれます",
        "formula": "Speaker -> Other = あげます | Other -> Speaker = くれます (Never あげます!)",
        "explanation": "You can NEVER say \"たなかさん は わたし に プレゼント を あげました\". When someone gives to YOU, you MUST use くれます: \"たなかさん は わたし に プレゼント を くれました\"."
      }
    ],
    "tables": [
      {
        "title": "Giving & Receiving Perspective Matrix",
        "headers": [
          "Verb",
          "Direction of Action",
          "Sentence Structure",
          "Example"
        ],
        "rows": [
          [
            "あげます",
            "Speaker -> Other",
            "[Speaker] は [Other] に [Thing] を あげます",
            "わたし は ともだち に ほん を あげました。"
          ],
          [
            "もらいます",
            "Other -> Speaker (Receive)",
            "[Speaker] は [Other] に/から [Thing] を もらいます",
            "わたし は はは に はな を もらいました。"
          ],
          [
            "くれます",
            "Other -> Speaker (Give to me)",
            "[Other] は [Speaker] に [Thing] を くれます",
            "ともだち が わたし に チョコ を くれました。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "わたし は たなかさん に プレゼント を あげました。",
        "romaji": "watashi wa tanaka-san ni purezento o agemashita.",
        "en": "I gave a present to Mr. Tanaka."
      },
      {
        "ja": "たんじょうび に ちち に とけい を もらいました。",
        "romaji": "tanjoubi ni chichi ni tokei o moraimashita.",
        "en": "I received a watch from my father on my birthday."
      },
      {
        "ja": "せんせい が わたし に じしょ を くれました。",
        "romaji": "sensei ga watashi ni jisho o kuremashita.",
        "en": "The teacher gave me a dictionary."
      },
      {
        "ja": "だれ に その かばん を もらいました か？",
        "romaji": "dare ni sono kaban o moraimashita ka?",
        "en": "From whom did you receive that bag?"
      }
    ],
    "quiz": [
      {
        "id": "verb5-q1",
        "type": "fill-blank",
        "prompt": "Complete: \"Mr. Tanaka gave ME a book.\" -> \"たなかさん は わたし に ほん を [ ? ]。\"",
        "options": [
          "くれました",
          "あげました",
          "もらいました",
          "かりました"
        ],
        "correctAnswer": 0,
        "explanation": "When someone gives to the speaker, くれます (くれました) is mandatory."
      },
      {
        "id": "verb5-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"I gave flowers to my mother.\"",
        "targetEn": "I gave flowers to my mother.",
        "chips": [
          "わたし は",
          "はは に",
          "はな を",
          "あげました",
          "くれました",
          "もらいました"
        ],
        "correctAnswerSentence": "わたし は はは に はな を あげました",
        "explanation": "Speaker giving to mother uses あげました."
      },
      {
        "id": "verb5-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify who received the present.",
        "audioText": "ともだち に プレゼント を あげました。",
        "options": [
          "I gave a present to my friend.",
          "My friend gave me a present.",
          "I received a present from my friend.",
          "My friend bought a present."
        ],
        "correctAnswer": 0,
        "explanation": "ともだち に (to my friend), あげました (gave)."
      },
      {
        "id": "verb5-q4",
        "type": "error-hunt",
        "prompt": "Which sentence violates the perspective rule of giving?",
        "options": [
          "たなかさん は わたし に とけい を あげました。",
          "たなかさん は わたし に とけい を くれました。",
          "わたし は たなかさん に とけい を あげました。",
          "わたし は たなかさん から とけい を もらいました。"
        ],
        "correctAnswer": 0,
        "explanation": "You cannot use あげました when someone gives to YOU. It must be くれました.",
        "romajiOptions": [
          "tanaka-san wa watashi ni tokei o agemashita.",
          "tanaka-san wa watashi ni tokei o kuremashita.",
          "watashi wa tanaka-san ni tokei o agemashita.",
          "watashi wa tanaka-san kara tokei o moraimashita."
        ]
      },
      {
        "id": "verb5-q5",
        "type": "multiple-choice",
        "question": "Which particle can replace \"に\" when receiving from someone with \"もらいます\"?",
        "options": [
          "から (from)",
          "で (by)",
          "へ (to)",
          "まで (until)"
        ],
        "correctAnswer": 0,
        "explanation": "With もらいます, the source can be marked by に or から (e.g. せんせい から もらいました)."
      },
      {
        "id": "verb5-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"I received a souvenir from my friend.\" -> \"ともだち [ ? ] おみやげ を もらいました。\"",
        "options": [
          "から",
          "へ",
          "で",
          "を"
        ],
        "correctAnswer": 0,
        "explanation": "ともだち から (from my friend) + もらいました."
      },
      {
        "id": "verb5-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"My friend gave me a souvenir.\"",
        "targetEn": "My friend gave me a souvenir.",
        "chips": [
          "ともだち が",
          "わたし に",
          "おみやげ を",
          "くれました",
          "あげました",
          "もらいました"
        ],
        "correctAnswerSentence": "ともだち が わたし に おみやげ を くれました",
        "explanation": "Giver is subject (ともだち が), recipient is わたし に, verb is くれました."
      },
      {
        "id": "verb5-q8",
        "type": "multiple-choice",
        "question": "What is the literal meaning of \"もらいます\"?",
        "options": [
          "To receive / get",
          "To give outward",
          "To lend",
          "To borrow"
        ],
        "correctAnswer": 0,
        "explanation": "もらいます means \"to receive\" or \"to get from someone\"."
      },
      {
        "id": "verb5-q9",
        "type": "audio-listening",
        "prompt": "Listen and identify what happened.",
        "audioText": "ちち に じてんしゃ を もらいました。",
        "options": [
          "I received a bicycle from my father.",
          "I gave a bicycle to my father.",
          "My father bought a bicycle.",
          "I repaired my father's bicycle."
        ],
        "correctAnswer": 0,
        "explanation": "ちち に (from father) + もらいました (received)."
      },
      {
        "id": "verb5-q10",
        "type": "fill-blank",
        "prompt": "Choose the verb: \"I gave water to the dog.\" -> \"いぬ に みず を [ ? ]。\"",
        "options": [
          "あげました",
          "くれました",
          "もらいました",
          "かりました"
        ],
        "correctAnswer": 0,
        "explanation": "Giving to an animal or plant uses あげました."
      }
    ]
  },
  {
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
  },
  {
    "id": "verb-mashou",
    "number": 7,
    "section": "verbs",
    "title": "Japanese \"Let's\": Mashou, Mashou ka - Let's Go, Shall We?",
    "shortTitle": "Let's (~ましょう)",
    "subtitle": "Learn enthusiastic proposals (~ましょう) and collaborative offers (~ましょうか).",
    "rules": [
      {
        "title": "Making Proposals: ~ましょう (Let's...)",
        "formula": "Verb Stem + ましょう",
        "explanation": "Replace ます with ましょう to suggest doing an action together enthusiastically: いきましょう (Let's go!), たべましょう (Let's eat!), はじめましょう (Let's begin!)."
      },
      {
        "title": "Asking & Offering: ~ましょうか (Shall we? / Shall I?)",
        "formula": "Verb Stem + ましょうか",
        "explanation": "Adding か creates a polite suggestion or offer: \"いっしょ に いきましょうか？\" (Shall we go together?). When offering assistance: \"てつだいましょうか？\" (Shall I help you?)."
      },
      {
        "title": "Contrast: ~ませんか vs ~ましょうか",
        "formula": "~ませんか: \"Won't you join?\" (Polite invite) | ~ましょうか: \"Shall we do it?\"",
        "explanation": "~ませんか is a respectful invitation checking if the listener is interested (\"おちゃ を のみませんか\"). ~ましょうか assumes mutual agreement or offers personal help."
      }
    ],
    "tables": [
      {
        "title": "Proposal & Suggestion Comparison",
        "headers": [
          "Pattern",
          "Tone / Nuance",
          "Function",
          "Example"
        ],
        "rows": [
          [
            "~ましょう",
            "Enthusiastic & Direct",
            "Let's do (action)!",
            "やすみましょう (Let's take a rest)."
          ],
          [
            "~ましょうか",
            "Collaborative / Offering",
            "Shall we? / Shall I help?",
            "まど を あけましょうか (Shall I open the window?)."
          ],
          [
            "~ませんか",
            "Gentle Invitation",
            "Won't you do...?",
            "えいが を みませんか (Won't you watch a movie?)."
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "すこし やすみましょう。",
        "romaji": "sukoshi yasumimashou.",
        "en": "Let's rest a little."
      },
      {
        "ja": "いっしょ に ひるごはん を たべましょうか？",
        "romaji": "issho ni hirugohan o tabemashou ka?",
        "en": "Shall we eat lunch together?"
      },
      {
        "ja": "にもつ を もちましょうか？",
        "romaji": "nimotsu o mochimashou ka?",
        "en": "Shall I carry your luggage?"
      },
      {
        "ja": "じかん です から、はじめましょう。",
        "romaji": "jikan desu kara, hajimemashou.",
        "en": "It is time, so let's begin."
      }
    ],
    "quiz": [
      {
        "id": "verb7-q1",
        "type": "word-bank",
        "prompt": "Assemble: \"Let's rest a little.\"",
        "targetEn": "Let's rest a little.",
        "chips": [
          "ちょっと",
          "やすみましょう",
          "たべましょう",
          "いきます"
        ],
        "correctAnswerSentence": "ちょっと やすみましょう",
        "explanation": "ちょっと (a bit) + やすみましょう (let's rest)."
      },
      {
        "id": "verb7-q2",
        "type": "fill-blank",
        "prompt": "Offer help: \"Shall I carry your baggage?\" -> \"にもつ を [ ? ]。\"",
        "options": [
          "もちましょうか",
          "もちます",
          "もたない",
          "もつ"
        ],
        "correctAnswer": 0,
        "explanation": "もちましょうか offers assistance: \"Shall I carry...?\""
      },
      {
        "id": "verb7-q3",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "いっしょ に かえりましょう。",
        "options": [
          "Let's go home together.",
          "Let's go to school together.",
          "Let's eat lunch together.",
          "Did you go home together?"
        ],
        "correctAnswer": 0,
        "explanation": "いっしょ に (together), かえりましょう (let's return/go home)."
      },
      {
        "id": "verb7-q4",
        "type": "error-hunt",
        "prompt": "Which sentence has an invalid proposal conjugation?",
        "options": [
          "たべるましょう。",
          "たべましょう。",
          "のみましょう。",
          "いきましょう。"
        ],
        "correctAnswer": 0,
        "explanation": "You must drop ます from たべます -> たべましょう. \"たべるましょう\" attaches to dictionary form and is incorrect.",
        "romajiOptions": [
          "taberumashou.",
          "tabemashou.",
          "nomimashou.",
          "ikimashou."
        ]
      },
      {
        "id": "verb7-q5",
        "type": "multiple-choice",
        "question": "What is the natural response to \"おちゃ を のみましょうか\" (Shall we drink tea)?",
        "options": [
          "ええ、そう しましょう。(Yes, let's do so.)",
          "いいえ、たべます。(No, eat.)",
          "はい、そうです。(Yes, it is.)",
          "ええ、いきません。(Yes, not go.)"
        ],
        "correctAnswer": 0,
        "explanation": "The natural agreement to ~ましょうか is \"ええ、そう しましょう\" (Yes, let's do that)."
      },
      {
        "id": "verb7-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"It's hot, so shall I open the window?\" -> \"まど を [ ? ]。\"",
        "options": [
          "あけましょうか",
          "しめましょうか",
          "あけます",
          "あけたい"
        ],
        "correctAnswer": 0,
        "explanation": "あけます (open) -> あけましょうか (shall I open?)."
      },
      {
        "id": "verb7-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"Let's take a picture together.\"",
        "targetEn": "Let's take a picture together.",
        "chips": [
          "いっしょ に",
          "しゃしん を",
          "とりましょう",
          "とります",
          "で"
        ],
        "correctAnswerSentence": "いっしょ に しゃしん を とりましょう",
        "explanation": "しゃしん を とりましょう (let's take a picture)."
      },
      {
        "id": "verb7-q8",
        "type": "multiple-choice",
        "question": "When offering personal help to someone, which pattern do you use?",
        "options": [
          "~ましょうか",
          "~たい です",
          "~てください",
          "~ましょう"
        ],
        "correctAnswer": 0,
        "explanation": "~ましょうか means \"Shall I...?\" when offering personal help."
      },
      {
        "id": "verb7-q9",
        "type": "audio-listening",
        "prompt": "Listen and identify the proposal.",
        "audioText": "タクシー で いきましょう。",
        "options": [
          "Let's go by taxi.",
          "Let's go by bus.",
          "Let's go by train.",
          "Shall we walk?"
        ],
        "correctAnswer": 0,
        "explanation": "タクシー で (by taxi), いきましょう (let's go)."
      },
      {
        "id": "verb7-q10",
        "type": "fill-blank",
        "prompt": "Select the verb: \"It is 9:00, so let's [ ? ] the lesson.\" (begin)",
        "options": [
          "はじめましょう",
          "おわりましょう",
          "のみましょう",
          "ねましょう"
        ],
        "correctAnswer": 0,
        "explanation": "はじめます (begin) -> はじめましょう (let's begin)."
      }
    ]
  },
  {
    "id": "verb-te-form",
    "number": 8,
    "section": "verbs",
    "title": "Te-Form: Please, May I, ~ing, And... + Listening Practice",
    "shortTitle": "The Te-Form (~て)",
    "subtitle": "Master the essential te-form conjugation rules and sentence structures (~てください, ~ています).",
    "rules": [
      {
        "title": "Group 1 (Godan) Te-Form Rules",
        "formula": "う, つ, る -> って | む, ぶ, ぬ -> んで | く -> いて | ぐ -> いで | す -> して | 行く -> 行って",
        "explanation": "Group 1 conjugations change based on final syllable: かう -> かって, まつ -> まって, とる -> とって. のむ -> のんで, あそぶ -> あそんで, しぬ -> しんで. かく -> かいて, およぐ -> およいで. はなす -> はなして. Irregular exception: いく -> いって."
      },
      {
        "title": "Group 2 & Group 3 Te-Form Rules",
        "formula": "Group 2: drop ~る -> ~て | Group 3: する -> して, くる -> きて",
        "explanation": "Group 2 verbs simply replace る with て: たべる -> たべて, みる -> みて, ねる -> ねて. Group 3 irregulars: する -> して, くる -> きて."
      },
      {
        "title": "Core Structures Built on the Te-Form",
        "formula": "~てください (Please do) | ~ています (Is currently doing) | ~てもいいですか (May I?)",
        "explanation": "1) ~てください makes polite requests: \"きいて ください\" (Please listen). 2) ~ています shows ongoing action or state: \"たべて います\" (is eating). 3) ~てもいいですか asks permission: \"はいっても いい です か\" (May I enter?)."
      }
    ],
    "tables": [
      {
        "title": "Te-Form Conjugation Rulebook",
        "headers": [
          "Group",
          "Verb Ending",
          "Rule",
          "Dictionary Example",
          "Te-Form"
        ],
        "rows": [
          [
            "Group 1",
            "う, つ, る",
            "replace with って",
            "かう, まつ, とる",
            "かって, まって, とって"
          ],
          [
            "Group 1",
            "む, ぶ, ぬ",
            "replace with んで",
            "のむ, あそぶ, しぬ",
            "のんで, あそんで, しんで"
          ],
          [
            "Group 1",
            "く",
            "replace with いて",
            "かく, きく",
            "かいて, きいて"
          ],
          [
            "Group 1",
            "ぐ",
            "replace with いで",
            "およぐ",
            "およいで"
          ],
          [
            "Group 1",
            "す",
            "replace with して",
            "はなす",
            "はなして"
          ],
          [
            "Group 1 (Exception)",
            "いく (行きます)",
            "becomes 行って",
            "いく",
            "いって (itte)"
          ],
          [
            "Group 2",
            "る (Ichidan)",
            "replace with て",
            "たべる, みる, ねる",
            "たべて, みて, ねて"
          ],
          [
            "Group 3",
            "する, くる",
            "irregular",
            "する, くる",
            "して, きて"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "ちょっと まって ください。",
        "romaji": "chotto matte kudasai.",
        "en": "Please wait a moment."
      },
      {
        "ja": "いま にほんご を べんきょうして います。",
        "romaji": "ima nihongo o benkyoushite imasu.",
        "en": "I am currently studying Japanese."
      },
      {
        "ja": "しゃしん を とっても いい です か？",
        "romaji": "shashin o tottemo ii desu ka?",
        "en": "May I take a photo?"
      },
      {
        "ja": "ここで たばこ を すっては いけません。",
        "romaji": "kokode tabako o sutte wa ikemasen.",
        "en": "You must not smoke here."
      }
    ],
    "quiz": [
      {
        "id": "verb8-q1",
        "type": "word-bank",
        "prompt": "Assemble: \"Please wait a moment.\"",
        "targetEn": "Please wait a moment.",
        "chips": [
          "ちょっと",
          "まって",
          "ください",
          "まちて",
          "まちます"
        ],
        "correctAnswerSentence": "ちょっと まって ください",
        "explanation": "まちます (まつ) ends with つ -> まって ください."
      },
      {
        "id": "verb8-q2",
        "type": "fill-blank",
        "prompt": "Convert to te-form: \"のむ (drink) -> [ ? ]\"",
        "options": [
          "のんで",
          "のって",
          "のみて",
          "のくて"
        ],
        "correctAnswer": 0,
        "explanation": "Verbs ending in む (のむ) become んで: のんで."
      },
      {
        "id": "verb8-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the current action.",
        "audioText": "いま ごはん を たべて います。",
        "options": [
          "I am currently eating a meal.",
          "I am currently making a meal.",
          "I will eat a meal soon.",
          "I finished my meal."
        ],
        "correctAnswer": 0,
        "explanation": "たべて います shows continuous present action: currently eating."
      },
      {
        "id": "verb8-q4",
        "type": "error-hunt",
        "prompt": "Which verb has an incorrect te-form conjugation?",
        "options": [
          "いく -> いきて",
          "いく -> いって",
          "かう -> かって",
          "かく -> かいて"
        ],
        "correctAnswer": 0,
        "explanation": "いく (行きます) is a famous exception! It becomes いって, NEVER \"いきて\".",
        "romajiOptions": [
          "iku -> ikite",
          "iku -> itte",
          "kau -> katte",
          "kaku -> kaite"
        ]
      },
      {
        "id": "verb8-q5",
        "type": "multiple-choice",
        "question": "What is the te-form of はなします (to speak)?",
        "options": [
          "はなして",
          "はなって",
          "はなんで",
          "はなして"
        ],
        "correctAnswer": 0,
        "explanation": "Verbs ending in す (はなす) become して: はなして."
      },
      {
        "id": "verb8-q6",
        "type": "fill-blank",
        "prompt": "Ask permission: \"May I sit here?\" -> \"ここ に すわって [ ? ] いい です か？\"",
        "options": [
          "も",
          "は",
          "で",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "~ても いい です か asks permission (\"May I...?\")"
      },
      {
        "id": "verb8-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"Please write in Japanese.\"",
        "targetEn": "Please write in Japanese.",
        "chips": [
          "にほんご で",
          "かいて",
          "ください",
          "かきて",
          "を"
        ],
        "correctAnswerSentence": "にほんご で かいて ください",
        "explanation": "かく ends in く -> かいて. かいて ください = please write."
      },
      {
        "id": "verb8-q8",
        "type": "multiple-choice",
        "question": "How do you express prohibition (\"You must not do...\")?",
        "options": [
          "~ては いけません",
          "~ても いい です",
          "~てください",
          "~ています"
        ],
        "correctAnswer": 0,
        "explanation": "~ては いけません expresses prohibition (must not do)."
      },
      {
        "id": "verb8-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "ドア を あけて ください。",
        "options": [
          "Please open the door.",
          "Please close the door.",
          "Please lock the door.",
          "Did you open the door?"
        ],
        "correctAnswer": 0,
        "explanation": "あけて ください = please open."
      },
      {
        "id": "verb8-q10",
        "type": "fill-blank",
        "prompt": "Complete: \"Tanaka-san is reading a book now.\" -> \"たなかさん は いま ほん を [ ? ]。\"",
        "options": [
          "よんで います",
          "よみて います",
          "よって います",
          "よみ います"
        ],
        "correctAnswer": 0,
        "explanation": "よむ ends in む -> よんで います (is reading)."
      }
    ]
  },
  {
    "id": "verb-plain-forms",
    "number": 9,
    "section": "verbs",
    "title": "Verb Plain Forms: Dictionary, Nai, Ta, Nakatta",
    "shortTitle": "Plain Forms",
    "subtitle": "Learn the 4 casual plain forms: dictionary form, negative (ない), past (た), and past negative (なかった).",
    "rules": [
      {
        "title": "The 4 Quadrants of Plain Forms",
        "formula": "Present (+): Dictionary | Present (-): ない | Past (+): た | Past (-): なかった",
        "explanation": "Casual speech, relative clauses, and advanced grammar patterns use plain forms rather than ます. The 4 base forms are: たべる (eats), たべない (does not eat), たべた (ate), たべなかった (did not eat)."
      },
      {
        "title": "Nai-Form (~ない) Conjugation",
        "formula": "Group 1: change ~u to ~a + ない (う becomes わ!) | Group 2: drop ~る + ない | する -> しない, くる -> こない",
        "explanation": "Group 1 shifts to the \"a\" row: かく -> かかない, のむ -> のまない. Crucial rule: Verbs ending in plain う become わない (かう -> かわない, not かあない). Group 3: する -> しない, くる -> こない."
      },
      {
        "title": "Ta-Form (~た) Follows Te-Form",
        "formula": "Exactly the same sound changes as the Te-form: て -> た, で -> だ",
        "explanation": "If you know the Te-form, you know the Ta-form! たべて -> たべた, のんで -> のんだ, かって -> かった, いって -> いった."
      }
    ],
    "tables": [
      {
        "title": "Plain Forms Master Chart",
        "headers": [
          "Verb",
          "Dictionary (~u)",
          "Negative (~ない)",
          "Past (~た)",
          "Past Negative (~なかった)"
        ],
        "rows": [
          [
            "かう (buy)",
            "かう",
            "かわない",
            "かった",
            "かわなかった"
          ],
          [
            "まつ (wait)",
            "まつ",
            "またない",
            "まった",
            "またなかった"
          ],
          [
            "のむ (drink)",
            "のむ",
            "のまない",
            "のんだ",
            "のまなかった"
          ],
          [
            "かく (write)",
            "かく",
            "かかない",
            "かいた",
            "かなかた"
          ],
          [
            "はなす (speak)",
            "はなす",
            "はなさない",
            "はなした",
            "はなさなかった"
          ],
          [
            "いく (go)",
            "いく",
            "いかない",
            "いった",
            "いかなかった"
          ],
          [
            "たべる (eat)",
            "たべる",
            "たべない",
            "たべた",
            "たべなかった"
          ],
          [
            "みる (see)",
            "みる",
            "みない",
            "みた",
            "みなかった"
          ],
          [
            "する (do)",
            "する",
            "しない",
            "した",
            "しなかった"
          ],
          [
            "くる (come)",
            "くる",
            "こない",
            "きた",
            "こなかった"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "あした ともだち と あう。",
        "romaji": "ashita tomodachi to au.",
        "en": "I will meet a friend tomorrow (casual)."
      },
      {
        "ja": "きのう なにも たべなかった。",
        "romaji": "kinou nanimo tabenakatta.",
        "en": "I didn't eat anything yesterday (casual)."
      },
      {
        "ja": "その えいが を もう みた？",
        "romaji": "sono eiga o mou mita?",
        "en": "Did you already see that movie? (casual)."
      },
      {
        "ja": "きょう は がっこう に いかない。",
        "romaji": "kyou wa gakkou ni ikanai.",
        "en": "I will not go to school today (casual)."
      }
    ],
    "quiz": [
      {
        "id": "verb9-q1",
        "type": "multiple-choice",
        "question": "What is the plain negative form of かう (to buy)?",
        "options": [
          "かわない",
          "かあない",
          "かかない",
          "かいない"
        ],
        "correctAnswer": 0,
        "explanation": "Group 1 verbs ending in う change to わ before ない: かわない."
      },
      {
        "id": "verb9-q2",
        "type": "fill-blank",
        "prompt": "Convert to plain past: \"のむ (drink) -> [ ? ]\"",
        "options": [
          "のんだ",
          "のた",
          "のった",
          "のみた"
        ],
        "correctAnswer": 0,
        "explanation": "Like のんで, the plain past form is のんだ."
      },
      {
        "id": "verb9-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"I didn't eat anything yesterday (casual).\"",
        "targetEn": "I didn't eat anything yesterday (casual).",
        "chips": [
          "きのう",
          "なにも",
          "たべなかった",
          "たべない",
          "でした"
        ],
        "correctAnswerSentence": "きのう なにも たべなかった",
        "explanation": "Past negative plain form of たべる is たべなかった."
      },
      {
        "id": "verb9-q4",
        "type": "error-hunt",
        "prompt": "Which verb conjugation has an incorrect negative form?",
        "options": [
          "くる -> きない",
          "くる -> こない",
          "する -> しない",
          "いく -> いかない"
        ],
        "correctAnswer": 0,
        "explanation": "くる is irregular; its negative form is こない, NEVER \"きない\".",
        "romajiOptions": [
          "kuru -> kinai",
          "kuru -> konai",
          "suru -> shinai",
          "iku -> ikanai"
        ]
      },
      {
        "id": "verb9-q5",
        "type": "multiple-choice",
        "question": "What is the plain past form of the irregular verb いく (to go)?",
        "options": [
          "いった",
          "いいた",
          "いきいた",
          "いくだ"
        ],
        "correctAnswer": 0,
        "explanation": "いく conjugates to いった in plain past."
      },
      {
        "id": "verb9-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"I don't know (casual).\" -> \"しら [ ? ]。\"",
        "options": [
          "ない",
          "ぬ",
          "ます",
          "た"
        ],
        "correctAnswer": 0,
        "explanation": "しる (Group 1) -> しらない (don't know)."
      },
      {
        "id": "verb9-q7",
        "type": "audio-listening",
        "prompt": "Listen to the casual statement and choose the meaning.",
        "audioText": "きのう たくさん べんきょうした。",
        "options": [
          "I studied a lot yesterday.",
          "I did not study yesterday.",
          "I will study tomorrow.",
          "I am studying now."
        ],
        "correctAnswer": 0,
        "explanation": "べんきょうした is casual plain past of べんきょうしました."
      },
      {
        "id": "verb9-q8",
        "type": "multiple-choice",
        "question": "What is the plain past negative form of まつ (to wait)?",
        "options": [
          "またなかった",
          "まちなかった",
          "まったなかった",
          "またなかった"
        ],
        "correctAnswer": 0,
        "explanation": "まつ -> negative またない -> past negative またなかった."
      },
      {
        "id": "verb9-q9",
        "type": "fill-blank",
        "prompt": "Choose the plain form: \"あした とうきょう へ [ ? ]。\" (will go - casual)",
        "options": [
          "いく",
          "いきます",
          "いった",
          "いかない"
        ],
        "correctAnswer": 0,
        "explanation": "Plain present future form is the dictionary form いく."
      },
      {
        "id": "verb9-q10",
        "type": "word-bank",
        "prompt": "Assemble: \"Did you already see that movie? (casual)\"",
        "targetEn": "Did you already see that movie? (casual)",
        "chips": [
          "その",
          "えいが",
          "もう",
          "みた？",
          "みない？",
          "を"
        ],
        "correctAnswerSentence": "その えいが もう みた？",
        "explanation": "みる plain past is みた？."
      }
    ]
  },
  {
    "id": "verb-noun-modification",
    "number": 10,
    "section": "verbs",
    "title": "Grammar: Modifying Nouns with Verb Clauses",
    "shortTitle": "Relative Clauses",
    "subtitle": "Learn how to form relative clauses in Japanese by placing plain verbs directly before nouns.",
    "rules": [
      {
        "title": "Relative Clauses Precede Nouns Directly",
        "formula": "[Plain Form Verb / Clause] + [Noun]",
        "explanation": "In English, relative clauses come after the noun (\"the book that I bought\"). In Japanese, relative clauses ALWAYS come BEFORE the noun: \"わたし が かった ほん\" (the book I bought). No relative pronouns like \"who\" or \"which\" exist!"
      },
      {
        "title": "Verbs MUST Be in Plain Form",
        "formula": "Never use ます in noun-modifying clauses!",
        "explanation": "You cannot say \"かいました ほん\". You must use the plain past: \"かった ほん\". For present actions: \"にほん で はたらく ひと\" (people who work in Japan)."
      },
      {
        "title": "Subject Inside the Clause Takes が",
        "formula": "[Subclause Subject] が [Verb] + [Noun]",
        "explanation": "The topic marker は is replaced by が for the subject inside the relative clause: \"はは が つくった りょうり\" (the meal my mother made)."
      }
    ],
    "tables": [
      {
        "title": "Noun Modification Examples",
        "headers": [
          "Clause Meaning",
          "Plain Form Clause",
          "Modified Noun",
          "Complete Phrase"
        ],
        "rows": [
          [
            "The book I bought yesterday",
            "きのう かった",
            "ほん",
            "きのう かった ほん"
          ],
          [
            "People who live in Tokyo",
            "とうきょう に すんでいる",
            "ひと",
            "とうきょう に すんでいる ひと"
          ],
          [
            "The cake mother made",
            "はは が つくった",
            "ケーキ",
            "はは が つくった ケーキ"
          ],
          [
            "Music that I listen to well",
            "よく きく",
            "おんがく",
            "よく きく おんがく"
          ],
          [
            "The store where I go tomorrow",
            "あした いく",
            "みせ",
            "あした いく みせ"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "これ は きのう かった ほん です。",
        "romaji": "kore wa kinou katta hon desu.",
        "en": "This is the book I bought yesterday."
      },
      {
        "ja": "あそこ で はなしている ひと は だれ です か？",
        "romaji": "asoko de hanashite iru hito wa dare desu ka?",
        "en": "Who is the person talking over there?"
      },
      {
        "ja": "はは が つくった りょうり は おいしい です。",
        "romaji": "haha ga tsukutta ryouri wa oishii desu.",
        "en": "The meal that my mother made is delicious."
      },
      {
        "ja": "あした いく ところ は しずかな まち です。",
        "romaji": "ashita iku tokoro wa shizukana machi desu.",
        "en": "The place I will go tomorrow is a quiet town."
      }
    ],
    "quiz": [
      {
        "id": "verb10-q1",
        "type": "fill-blank",
        "prompt": "Complete: \"The book I bought yesterday.\" -> \"きのう [ ? ] ほん。\"",
        "options": [
          "かった",
          "かいました",
          "かう",
          "かって"
        ],
        "correctAnswer": 0,
        "explanation": "Noun-modifying clauses must use the plain form: かった ほん."
      },
      {
        "id": "verb10-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"This is the cake my mother made.\"",
        "targetEn": "This is the cake my mother made.",
        "chips": [
          "これ は",
          "はは が",
          "つくった",
          "ケーキ",
          "です",
          "はは は",
          "つくりました"
        ],
        "correctAnswerSentence": "これ は はは が つくった ケーキ です",
        "explanation": "Subclause subject takes が (はは が), verb is plain past (つくった)."
      },
      {
        "id": "verb10-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the question being asked.",
        "audioText": "あそこ に いる ひと は だれ です か？",
        "options": [
          "Who is the person over there?",
          "Where is that person going?",
          "What is that person doing?",
          "Is that person a teacher?"
        ],
        "correctAnswer": 0,
        "explanation": "あそこ に いる ひと = person who is over there."
      },
      {
        "id": "verb10-q4",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly uses a polite ます verb inside a relative clause?",
        "options": [
          "きのう かいました ほん を よみます。",
          "きのう かった ほん を よみます。",
          "とうきょう に すんでいる ともだち に あいました。",
          "よく きく おんがく は J-POP です。"
        ],
        "correctAnswer": 0,
        "explanation": "Relative clauses MUST use plain form: \"かった ほん\", NEVER \"かいました ほん\".",
        "romajiOptions": [
          "kinou kaimashita hon o yomimasu.",
          "kinou katta hon o yomimasu.",
          "toukyou ni sunde iru tomodachi ni aimashita.",
          "yoku kiku ongaku wa J-POP desu."
        ]
      },
      {
        "id": "verb10-q5",
        "type": "multiple-choice",
        "question": "Which particle marks the subject inside a noun-modifying clause?",
        "options": [
          "が",
          "は",
          "を",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "The internal subject of a relative clause is marked by が."
      },
      {
        "id": "verb10-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"The person who is drinking coffee.\" -> \"コーヒー を [ ? ] ひと。\"",
        "options": [
          "のんでいる",
          "のみます",
          "のんで",
          "のむでした"
        ],
        "correctAnswer": 0,
        "explanation": "The ongoing action modifying ひと is plain continuous: のんでいる ひと."
      },
      {
        "id": "verb10-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"The place I will go tomorrow is Kyoto.\"",
        "targetEn": "The place I will go tomorrow is Kyoto.",
        "chips": [
          "あした",
          "いく",
          "ところ は",
          "きょうと",
          "です",
          "いきます"
        ],
        "correctAnswerSentence": "あした いく ところ は きょうと です",
        "explanation": "あした いく (go tomorrow) directly modifies ところ (place)."
      },
      {
        "id": "verb10-q8",
        "type": "multiple-choice",
        "question": "How do you say \"A song I don't know\"?",
        "options": [
          "しらない うた",
          "しりません うた",
          "しらないな うた",
          "しらなかった うた"
        ],
        "correctAnswer": 0,
        "explanation": "しらない (don't know - plain negative) + うた (song)."
      },
      {
        "id": "verb10-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "わたし が かいた え を みて ください。",
        "options": [
          "Please look at the picture that I drew.",
          "Please draw a picture with me.",
          "Did you draw this picture?",
          "I want to draw a picture."
        ],
        "correctAnswer": 0,
        "explanation": "わたし が かいた え = the picture that I drew."
      },
      {
        "id": "verb10-q10",
        "type": "fill-blank",
        "prompt": "Select the form: \"The food I ate in Tokyo.\" -> \"とうきょう で [ ? ] りょうり。\"",
        "options": [
          "たべた",
          "たべました",
          "たべて",
          "たべる"
        ],
        "correctAnswer": 0,
        "explanation": "Past action modifying りょうり takes plain past たべた."
      }
    ]
  },
  {
    "id": "verb-shitte-wakarimasu",
    "number": 11,
    "section": "verbs",
    "title": "Japanese \"I Know\" vs \"I Understand\": Shitte imasu, Wakarimasu",
    "shortTitle": "Shitte imasu vs Wakarimasu",
    "subtitle": "Learn the difference between having information (しっています) and comprehension (わかります).",
    "rules": [
      {
        "title": "Shitte imasu (Possessing Knowledge / Info)",
        "formula": "[Information / Person / Fact] を しっています",
        "explanation": "しっています (know) means you have acquired a piece of objective information or know a person/place: \"たなかさん の でんわばんごう を しっています\" (I know Mr. Tanaka's phone number)."
      },
      {
        "title": "Crucial Negative Exception: しりません (NOT しっていません!)",
        "formula": "Affirmative: しっています | Negative: しりません (Never しっていません!)",
        "explanation": "This is one of the most tested tricks in JLPT N5! While the affirmative is \"しっています\", the negative MUST be \"しりません\" (I do not know). Saying \"しっていません\" is grammatically incorrect."
      },
      {
        "title": "Wakarimasu (Comprehension & Understanding)",
        "formula": "[Subject / Language / Concept] が わかります",
        "explanation": "わかります means to understand, comprehend the meaning, or be proficient: \"にほんご が わかります\" (I understand Japanese). It takes the particle が, not を!"
      }
    ],
    "tables": [
      {
        "title": "Shitte imasu vs Wakarimasu Comparison",
        "headers": [
          "Feature",
          "しっています (shitte imasu)",
          "わかります (wakarimasu)"
        ],
        "rows": [
          [
            "Core Meaning",
            "Know / have information or acquaintance",
            "Understand / comprehend meaning / discern"
          ],
          [
            "Target Type",
            "Phone numbers, addresses, facts, people",
            "Languages, mathematics, instructions, reasons"
          ],
          [
            "Particle Used",
            "を (e.g. じゅうしょ を しっています)",
            "が (e.g. えいご が わかります)"
          ],
          [
            "Negative Form",
            "しりません (Never しっていません!)",
            "わかりません (Do not understand)"
          ],
          [
            "Question Example",
            "たなかさん を しっています か？",
            "いみ が わかります か？"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "たなかさん の メールアドレス を しっています か？",
        "romaji": "tanaka-san no meeruadoresu o shitte imasu ka?",
        "en": "Do you know Mr. Tanaka's email address?"
      },
      {
        "ja": "いいえ、しりません。",
        "romaji": "iie, shirimasen.",
        "en": "No, I do not know."
      },
      {
        "ja": "わたし は にほんご が すこし わかります。",
        "romaji": "watashi wa nihongo ga sukoshi wakarimasu.",
        "en": "I understand Japanese a little."
      },
      {
        "ja": "その ことば の いみ が わかりません。",
        "romaji": "sono kotoba no imi ga wakarimasen.",
        "en": "I do not understand the meaning of that word."
      }
    ],
    "quiz": [
      {
        "id": "verb11-q1",
        "type": "fill-blank",
        "prompt": "Complete: \"Do you know that person?\" -> \"あの ひと を [ ? ] か？\"",
        "options": [
          "しっています",
          "わかります",
          "しります",
          "しっていません"
        ],
        "correctAnswer": 0,
        "explanation": "Knowing a person is an information state: しっています か？"
      },
      {
        "id": "verb11-q2",
        "type": "multiple-choice",
        "question": "What is the correct negative form of \"しっています\" (I know)?",
        "options": [
          "しりません (shirimasen)",
          "しっていません (shitteimasen)",
          "わかりません (wakarimasen)",
          "しらないでした (shiranaideshita)"
        ],
        "correctAnswer": 0,
        "explanation": "The negative of しっています is strictly しりません. \"しっていません\" is invalid in standard Japanese."
      },
      {
        "id": "verb11-q3",
        "type": "fill-blank",
        "prompt": "Select the particle: \"わたし は えいご [ ? ] わかります。\"",
        "options": [
          "が",
          "を",
          "に",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "わかります (understand) takes the particle が to mark the subject of comprehension: えいご が わかります."
      },
      {
        "id": "verb11-q4",
        "type": "error-hunt",
        "prompt": "Which sentence has an invalid negative knowledge error?",
        "options": [
          "たなかさん の いえ を しっていません。",
          "たなかさん の いえ を しりません。",
          "にほんご の いみ が わかりません。",
          "その はなし を しっています。"
        ],
        "correctAnswer": 0,
        "explanation": "\"しっていません\" is a classic error. The negative must be \"しりません\".",
        "romajiOptions": [
          "tanaka-san no ie o shitteimasen.",
          "tanaka-san no ie o shirimasen.",
          "nihongo no imi ga wakarimasen.",
          "sono hanashi o shitte imasu."
        ]
      },
      {
        "id": "verb11-q5",
        "type": "word-bank",
        "prompt": "Assemble: \"I understand Japanese a little.\"",
        "targetEn": "I understand Japanese a little.",
        "chips": [
          "にほんご が",
          "すこし",
          "わかります",
          "を",
          "しっています"
        ],
        "correctAnswerSentence": "にほんご が すこし わかります",
        "explanation": "にほんご が + すこし (a little) + わかります."
      },
      {
        "id": "verb11-q6",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "この かんじ の いみ が わかりません。",
        "options": [
          "I do not understand the meaning of this kanji.",
          "I do not know how to write this kanji.",
          "I know this kanji.",
          "This kanji is easy."
        ],
        "correctAnswer": 0,
        "explanation": "かんじ の いみ が わかりません = do not understand the meaning of this kanji."
      },
      {
        "id": "verb11-q7",
        "type": "multiple-choice",
        "question": "Which sentence correctly expresses \"I know the answer\"?",
        "options": [
          "こたえ を しっています。",
          "こたえ が わかります。",
          "こたえ を わかります。",
          "こたえ に しっています。"
        ],
        "correctAnswer": 0,
        "explanation": "Knowing a factual answer uses こたえ を しっています."
      },
      {
        "id": "verb11-q8",
        "type": "fill-blank",
        "prompt": "Choose the verb: \"I don't [ ? ] the reason.\" (comprehend)",
        "options": [
          "わかりません",
          "しりません",
          "いいません",
          "ききません"
        ],
        "correctAnswer": 0,
        "explanation": "Comprehending a reason or concept uses わかります / わかりません."
      },
      {
        "id": "verb11-q9",
        "type": "word-bank",
        "prompt": "Assemble the answer: \"No, I do not know.\"",
        "targetEn": "No, I do not know.",
        "chips": [
          "いいえ、",
          "しりません。",
          "しっていません。",
          "わかりません。"
        ],
        "correctAnswerSentence": "いいえ、 しりません。",
        "explanation": "Natural response to \"Do you know?\": いいえ、 しりません。"
      },
      {
        "id": "verb11-q10",
        "type": "audio-listening",
        "prompt": "Listen and identify what the speaker understands.",
        "audioText": "せんせい の せつめい が よく わかりました。",
        "options": [
          "I understood the teacher's explanation well.",
          "I did not understand the teacher's explanation.",
          "The teacher gave a difficult explanation.",
          "I asked the teacher an explanation."
        ],
        "correctAnswer": 0,
        "explanation": "よく わかりました = understood well."
      }
    ]
  }
];
