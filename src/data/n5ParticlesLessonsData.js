// JLPT N5 Particles Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Particles Curriculum
// Contains 5 comprehensive lessons covering wa vs ga, 15 essential particles,
// de vs ni for locations, tomodachi ni vs to aimasu, and made vs made ni.

export const n5ParticlesLessons = [
  {
    "id": "part-wa-ga",
    "number": 1,
    "section": "particles",
    "title": "は vs が: Topic vs Subject Mastery",
    "shortTitle": "は (Wa) vs が (Ga)",
    "subtitle": "Master the topic marker は and subject marker が, contrast, new information, and questions.",
    "rules": [
      {
        "title": "Topic (は) vs Subject (が)",
        "formula": "[Topic] は: \"As for...\" (Old info / Setting) | [Subject] が: \"Specifically...\" (New info / Focus)",
        "explanation": "は introduces what the sentence is about (the known topic). が introduces new, specific information or identifies the subject performing an action: \"だれ が きました か？\" -> \"たなかさん が きました\" (Mr. Tanaka is the one who came)."
      },
      {
        "title": "Contrastive は (Contrast Between Two Things)",
        "formula": "A は [Positive] が、B は [Negative]",
        "explanation": "When contrasting two items, use は for both: \"おちゃ は のみます が、コーヒー は のみません\" (I drink tea, but as for coffee, I don't drink it)."
      },
      {
        "title": "Question Words Cannot Take は",
        "formula": "Question words (だれ, なに, どこ) MUST take が (Never は!)",
        "explanation": "Because interrogative words represent unknown information, they can never be marked as a known topic with は. Always say: \"だれ が きました か\" (Who came?), \"なに が あります か\" (What is there?)."
      },
      {
        "title": "Answers to \"が\" Questions Use \"が\"",
        "formula": "Q: [Question Word] が ... か？ -> A: [Answer] が ... です",
        "explanation": "When answering an interrogative question that asked with が, repeat が for the focal answer: \"だれ が せんせい です か？\" -> \"やまださん が せんせい です\"."
      }
    ],
    "tables": [
      {
        "title": "は vs が Diagnostic Matrix",
        "headers": [
          "Context / Rule",
          "Particle",
          "Explanation",
          "Example"
        ],
        "rows": [
          [
            "Introducing Known Topic",
            "は (wa)",
            "Sets the frame (\"As for X...\")",
            "わたし は がくせい です。"
          ],
          [
            "Contrasting Two Items",
            "は (wa)",
            "Highlighting differences",
            "ひる は いそがしい です が、よる は ひま です。"
          ],
          [
            "Unknown Question Word",
            "が (ga)",
            "Interrogative subject focus",
            "だれ が きました か？"
          ],
          [
            "Direct Answer to Question",
            "が (ga)",
            "Focusing the identity",
            "たなかさん が きました。"
          ],
          [
            "Describing Phenomena / Senses",
            "が (ga)",
            "Immediate sensory observation",
            "あめ が ふっています。 (It is raining!)"
          ],
          [
            "Predicate Adjectives / Desires",
            "が (ga)",
            "Object of like/hate/skill/desire",
            "すし が すき です。 / みず が のみたい。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "わたし は にほんじん です。",
        "romaji": "watashi wa nihonjin desu.",
        "en": "I am Japanese (topic: I)."
      },
      {
        "ja": "だれ が ケーキ を たべました か？",
        "romaji": "dare ga keeki o tabemashita ka?",
        "en": "Who ate the cake?"
      },
      {
        "ja": "やまださん が たべました。",
        "romaji": "yamada-san ga tabemashita.",
        "en": "Mr. Yamada is the one who ate it."
      },
      {
        "ja": "あめ が ふって います。",
        "romaji": "ame ga futte imasu.",
        "en": "Rain is falling (immediate observation)."
      }
    ],
    "quiz": [
      {
        "id": "part1-q1",
        "type": "fill-blank",
        "prompt": "Choose the correct particle for an unknown subject: \"だれ [ ? ] きました か？\" (Who came?)",
        "options": [
          "が",
          "は",
          "を",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "Question words like だれ (who) can never be marked by は; they must take が."
      },
      {
        "id": "part1-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"Mr. Tanaka is the one who came.\"",
        "targetEn": "Mr. Tanaka is the one who came.",
        "chips": [
          "たなかさん が",
          "きました",
          "たなかさん は",
          "きます"
        ],
        "correctAnswerSentence": "たなかさん が きました",
        "explanation": "Answering a \"Who came?\" question focuses on the specific subject using が."
      },
      {
        "id": "part1-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the contrast.",
        "audioText": "おちゃ は のみます が、コーヒー は のみません。",
        "options": [
          "I drink tea, but I do not drink coffee.",
          "I drink coffee, but I do not drink tea.",
          "I drink both tea and coffee.",
          "I drink neither tea nor coffee."
        ],
        "correctAnswer": 0,
        "explanation": "Contrastive は contrasts drinking tea (positive) with coffee (negative)."
      },
      {
        "id": "part1-q4",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly pairs a question word with は?",
        "options": [
          "だれ は せんせい です か？",
          "だれ が せんせい です か？",
          "たなかさん は せんせい です。",
          "わたし は がくせい です。"
        ],
        "correctAnswer": 0,
        "explanation": "Question words can never take は. \"だれ は せんせい です か\" is a major grammatical violation; it must be \"だれ が\".",
        "romajiOptions": [
          "dare wa sensei desu ka?",
          "dare ga sensei desu ka?",
          "tanaka-san wa sensei desu.",
          "watashi wa gakusei desu."
        ]
      },
      {
        "id": "part1-q5",
        "type": "multiple-choice",
        "prompt": "Which particle is used to mark an immediate natural observation (e.g. \"Look, it is raining!\")?",

        "question": "Which particle is used to mark an immediate natural observation (e.g. \"Look, it is raining!\")?",
        "options": [
          "が (e.g. あめ が ふって います)",
          "は (e.g. あめ は ふって います)",
          "を (e.g. あめ を ふって います)",
          "で (e.g. あめ で ふって います)"
        ],
        "correctAnswer": 0,
        "explanation": "Spontaneous natural phenomena and sensory observations mark the subject with が."
      },
      {
        "id": "part1-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"I like dogs.\" -> \"わたし は いぬ [ ? ] すき です。\"",
        "options": [
          "が",
          "を",
          "は",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "The target of feelings, likes, and dislikes (すき, きらい) is marked by が."
      },
      {
        "id": "part1-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"What is inside the box?\"",
        "targetEn": "What is inside the box?",
        "chips": [
          "はこ の なか に",
          "なに が",
          "あります か？",
          "なに は",
          "います"
        ],
        "correctAnswerSentence": "はこ の なか に なに が あります か？",
        "explanation": "なに is an interrogative pronoun, requiring が + あります か？."
      },
      {
        "id": "part1-q8",
        "type": "multiple-choice",
        "prompt": "In \"わたし は すし が すき です\", what are the roles of は and が?",

        "question": "In \"わたし は すし が すき です\", what are the roles of は and が?",
        "options": [
          "は marks the topic (I), and が marks the object of preference (sushi).",
          "は marks the subject, and が marks the direct object.",
          "Both は and が mark subjects.",
          "が is optional and can be omitted."
        ],
        "correctAnswer": 0,
        "explanation": "わたし は sets the topic (\"As for me\"), and すし が indicates the specific thing that is liked."
      },
      {
        "id": "part1-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "ドア が あきました。",
        "options": [
          "The door opened.",
          "I opened the door.",
          "Please open the door.",
          "The door is closed."
        ],
        "correctAnswer": 0,
        "explanation": "ドア が あきました means \"The door opened.\" Note: 'あく' (to open by itself) uses が, while 'あける' (someone opens it) uses を."
      },
      {
        "id": "part1-q10",
        "type": "fill-blank",
        "prompt": "Choose the particle: \"ひるま [ ? ] あつい です が、よる は さむい です。\"",
        "options": [
          "は",
          "が",
          "を",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "Contrastive は balances ひるま は (daytime) with よる は (night)."
      }
    ]
  },
  {
    "id": "part-essential-15",
    "number": 2,
    "section": "particles",
    "title": "The 15 Essential JLPT N5 Particles Guide",
    "shortTitle": "15 Essential Particles",
    "subtitle": "Comprehensive guide to は, が, を, に, で, へ, から, まで, の, と, や, か, も, よ, and ね.",
    "rules": [
      {
        "title": "Particles Glue Sentences Together (Joshi 助詞)",
        "formula": "[Noun] + [Particle]",
        "explanation": "Japanese grammar is built on post-positional particles placed immediately after nouns to indicate their grammatical role (topic, subject, object, time, place, tool, association, or sentence ender)."
      },
      {
        "title": "Listing Particles: と (Exhaustive) vs や (Non-Exhaustive)",
        "formula": "A と B (A and B, only those two) | A や B (A and B, among others)",
        "explanation": "Use と for a complete, exhaustive list: \"パン と たまご を かいました\" (I bought bread and eggs, nothing else). Use や to imply an open list of examples: \"パン や たまご を かいました\" (I bought bread, eggs, and so on)."
      },
      {
        "title": "Sentence-Ending Particles: よ (Info) vs ね (Agreement)",
        "formula": "[Sentence] + よ (I am telling you!) | [Sentence] + ね (Isn't it? / Right?)",
        "explanation": "よ shares new, assertive information the listener might not know: \"この えいが は おもしろい です よ!\" (This movie is great, you know!). ね seeks consensus, agreement, or confirmation: \"きょう は さむい です ね\" (It's cold today, isn't it?)."
      }
    ],
    "tables": [
      {
        "title": "Master Reference of the 15 Essential N5 Particles",
        "headers": [
          "Particle",
          "Pronunciation",
          "Primary Function",
          "Example Sentence"
        ],
        "rows": [
          [
            "は",
            "wa",
            "Topic marker / Contrast",
            "わたし は たなか です。"
          ],
          [
            "が",
            "ga",
            "Subject / Specific focus",
            "あめ が ふっています。"
          ],
          [
            "を",
            "o",
            "Direct object marker",
            "みず を のみます。"
          ],
          [
            "に",
            "ni",
            "Specific time / Goal / Target",
            "7じ に おきます。"
          ],
          [
            "で",
            "de",
            "Location of action / Means / Tool",
            "はし で たべます。"
          ],
          [
            "へ",
            "e",
            "Direction / Heading towards",
            "きょうと へ いきます。"
          ],
          [
            "から",
            "kara",
            "Starting point (from) / Reason",
            "9じ から はじまります。"
          ],
          [
            "まで",
            "made",
            "Ending point (until)",
            "5じ まで はたらきます。"
          ],
          [
            "の",
            "no",
            "Possessive / Modification",
            "わたし の ほん です。"
          ],
          [
            "と",
            "to",
            "Exhaustive \"and\" / \"with someone\"",
            "ともだち と いきます。"
          ],
          [
            "や",
            "ya",
            "Non-exhaustive \"and\" (and so on)",
            "りんご や みかん を かいました。"
          ],
          [
            "か",
            "ka",
            "Question marker / \"or\"",
            "これ は なん です か？"
          ],
          [
            "も",
            "mo",
            "\"also\" / \"too\"",
            "わたし も がくせい です。"
          ],
          [
            "よ",
            "yo",
            "Information assertion (\"you know\")",
            "あした は やすみ です よ。"
          ],
          [
            "ね",
            "ne",
            "Seeking confirmation (\"right?\")",
            "いい てんき です ね。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "あさ 7じ に おきて、パン と コーヒー を たべます。",
        "romaji": "asa shichiji ni okite, pan to koohii o tabemasu.",
        "en": "I wake up at 7:00 in the morning, and have bread and coffee."
      },
      {
        "ja": "9じ から 5じ まで かいしゃ で はたらきます。",
        "romaji": "kuji kara goji made kaisha de hatarakimasu.",
        "en": "I work at the company from 9:00 until 5:00."
      },
      {
        "ja": "これ は だれ の かさ です か？",
        "romaji": "kore wa dare no kasa desu ka?",
        "en": "Whose umbrella is this?"
      },
      {
        "ja": "あした は テスト です よ。がんばりましょう ね。",
        "romaji": "ashita wa tesuto desu yo. gambarimashou ne.",
        "en": "Tomorrow is the test, you know! Let's do our best, right?"
      }
    ],
    "quiz": [
      {
        "id": "part2-q1",
        "type": "fill-blank",
        "prompt": "Choose the particle for starting and ending time: \"9じ [ ? ] 5じ まで はたらきます。\"",
        "options": [
          "から",
          "まで",
          "に",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "から means \"from\": 9じ から (from 9:00)."
      },
      {
        "id": "part2-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"I went to Tokyo with my friend.\"",
        "targetEn": "I went to Tokyo with my friend.",
        "chips": [
          "ともだち と",
          "とうきょう に",
          "いきました",
          "ともだち で",
          "を"
        ],
        "correctAnswerSentence": "ともだち と とうきょう に いきました",
        "explanation": "ともだち と = with a friend; とうきょう に = to Tokyo."
      },
      {
        "id": "part2-q3",
        "type": "audio-listening",
        "prompt": "Listen and choose the items bought.",
        "audioText": "ほん や ペン を かいました。",
        "options": [
          "I bought books, pens, and other things.",
          "I bought only a book and a pen.",
          "I bought a book for my friend.",
          "I sold books and pens."
        ],
        "correctAnswer": 0,
        "explanation": "The particle や lists examples non-exhaustively (books, pens, and so on)."
      },
      {
        "id": "part2-q4",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly uses a particle for specific time?",
        "options": [
          "あした に とうきょう に いきます。",
          "あした とうきょう に いきます。",
          "7じ に おきます。",
          "にちようび に あいましょう。"
        ],
        "correctAnswer": 0,
        "explanation": "Relative time words (きょう, あした, きのう, まいにち) NEVER take the particle に. Say \"あした いきます\", NOT \"あした に\".",
        "romajiOptions": [
          "ashita ni toukyou ni ikimasu.",
          "ashita toukyou ni ikimasu.",
          "shichiji ni okimasu.",
          "nichiyoubi ni aimashou."
        ]
      },
      {
        "id": "part2-q5",
        "type": "multiple-choice",
        "prompt": "Which sentence-ending particle means \"right?\" or \"isn't it?\", asking for agreement?",

        "question": "Which sentence-ending particle means \"right?\" or \"isn't it?\", asking for agreement?",
        "options": [
          "ね",
          "よ",
          "か",
          "わ"
        ],
        "correctAnswer": 0,
        "explanation": "ね is used to seek agreement or confirm shared feelings."
      },
      {
        "id": "part2-q6",
        "type": "fill-blank",
        "prompt": "Select possessive marker: \"これ は わたし [ ? ] パソコン です。\"",
        "options": [
          "の",
          "は",
          "が",
          "と"
        ],
        "correctAnswer": 0,
        "explanation": "の indicates possession: わたし の パソコン (my computer)."
      },
      {
        "id": "part2-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"I am also a student.\"",
        "targetEn": "I am also a student.",
        "chips": [
          "わたし も",
          "がくせい",
          "です",
          "わたし は",
          "が"
        ],
        "correctAnswerSentence": "わたし も がくせい です",
        "explanation": "も replaces は to mean \"also / too\"."
      },
      {
        "id": "part2-q8",
        "type": "multiple-choice",
        "prompt": "What is the key difference between と and や?",

        "question": "What is the key difference between と and や?",
        "options": [
          "と is an exhaustive list (only those items); や is non-exhaustive (gives examples among others).",
          "と is for people; や is for objects.",
          "や is formal; と is informal.",
          "There is no difference."
        ],
        "correctAnswer": 0,
        "explanation": "と specifies a complete list, whereas や implies \"...and others\"."
      },
      {
        "id": "part2-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "この ケーキ は とても おいしい です よ。",
        "options": [
          "This cake is very delicious, you know!",
          "Is this cake delicious?",
          "This cake is delicious, isn't it?",
          "I want to eat this cake."
        ],
        "correctAnswer": 0,
        "explanation": "よ at the end asserts information: \"...you know!\"."
      },
      {
        "id": "part2-q10",
        "type": "fill-blank",
        "prompt": "Tool / Means marker: \"はし [ ? ] ごはん を たべます。\" (eat with chopsticks)",
        "options": [
          "で",
          "に",
          "を",
          "と"
        ],
        "correctAnswer": 0,
        "explanation": "で indicates tool or instrument: はし で (using chopsticks)."
      }
    ]
  },
  {
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
  },
  {
    "id": "part-ni-vs-to-aimasu",
    "number": 4,
    "section": "particles",
    "title": "Japanese \"Meet Friend\": Tomodachi ni aimasu vs Tomodachi to aimasu",
    "shortTitle": "に vs と あいます",
    "subtitle": "Understand the subtle nuance between one-directional encounter (に) vs mutual rendezvous (と).",
    "rules": [
      {
        "title": "Core Meeting Verb: 会います (あいます)",
        "formula": "[Person] に 会います vs [Person] と 会います",
        "explanation": "Both sentences translate to \"I meet my friend\", but Japanese speakers use に and と to express different dynamics of interaction."
      },
      {
        "title": "に 会います: Directional Focus / Purpose",
        "formula": "[Person] に あいます (Meeting someone as a goal / visit)",
        "explanation": "Use に when you go to meet someone, visit them, or have an appointment. The action is initiated from you towards them: \"せんせい に あいます\" (I will see/meet the teacher)."
      },
      {
        "title": "と 会います: Mutual Rendezvous / Togetherness",
        "formula": "[Person] と あいます (Both parties meet together)",
        "explanation": "Use と when both parties meet each other mutually by pre-arrangement as companions: \"ともだち と あいました\" (My friend and I met up)."
      },
      {
        "title": "Strict Prohibition: NEVER Use へ with あいます!",
        "formula": "ともだちに あいます (OK) | ともだちと あいます (OK) | ともだちへ あいます (INVALID!)",
        "explanation": "While へ can mark geographical directions with movement verbs (とうきょう へ いきます), it can NEVER be used for meeting people! Saying \"ともだち へ あいます\" is a common beginner error."
      }
    ],
    "tables": [
      {
        "title": "に あいます vs と あいます Comparison",
        "headers": [
          "Pattern",
          "Particle Meaning",
          "Nuance",
          "Typical Scenario"
        ],
        "rows": [
          [
            "ともだち に あいます",
            "に = target / goal",
            "One-way initiative; meeting someone",
            "Going to see someone, consultation, appointment."
          ],
          [
            "ともだち と あいます",
            "と = mutual \"with\"",
            "Mutual rendezvous; doing together",
            "Hanging out, meeting up at a designated spot."
          ],
          [
            "ともだち へ あいます",
            "へ = direction",
            "INVALID GRAMMAR",
            "Never used with people for interaction verbs!"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "あした しぶや で ともだち と あいます。",
        "romaji": "ashita shibuya de tomodachi to aimasu.",
        "en": "Tomorrow I will meet up with my friend in Shibuya (mutual rendezvous)."
      },
      {
        "ja": "びょういん で いしゃ に あいました。",
        "romaji": "byouin de isha ni aimashita.",
        "en": "I saw the doctor at the hospital (consultation / visit)."
      },
      {
        "ja": "えき の かいさつ で かれ と あいました。",
        "romaji": "eki no kaisatsu de kare to aimashita.",
        "en": "I met up with him at the station ticket gates."
      },
      {
        "ja": "きょう せんせい に あいます。",
        "romaji": "kyou sensei ni aimasu.",
        "en": "I will see/meet the teacher today."
      }
    ],
    "quiz": [
      {
        "id": "part4-q1",
        "type": "error-hunt",
        "prompt": "Which sentence has an invalid direction particle when meeting a person?",
        "options": [
          "ともだち へ あいました。",
          "ともだち に あいました。",
          "ともだち と あいました。",
          "きのう ともだち に あいました。"
        ],
        "correctAnswer": 0,
        "explanation": "へ can only mark physical directions/destinations, NEVER a person you meet. \"ともだち へ あいました\" is grammatically invalid.",
        "romajiOptions": [
          "tomodachi e aimashita.",
          "tomodachi ni aimashita.",
          "tomodachi to aimashita.",
          "kinou tomodachi ni aimashita."
        ]
      },
      {
        "id": "part4-q2",
        "type": "fill-blank",
        "prompt": "Complete for mutual rendezvous: \"あした ともだち [ ? ] あいます。\" (meet with)",
        "options": [
          "と",
          "へ",
          "を",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "と indicates mutual accompaniment / meeting up together."
      },
      {
        "id": "part4-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"I met the doctor at the hospital.\"",
        "targetEn": "I met the doctor at the hospital.",
        "chips": [
          "びょういん で",
          "いしゃ に",
          "あいました",
          "いしゃ へ",
          "と"
        ],
        "correctAnswerSentence": "びょういん で いしゃ に あいました",
        "explanation": "Location of action uses で, professional consultation/target uses に."
      },
      {
        "id": "part4-q4",
        "type": "multiple-choice",
        "prompt": "When visiting a superior or teacher for an appointment, which particle is most natural with あいます?",

        "question": "When visiting a superior or teacher for an appointment, which particle is most natural with あいます?",
        "options": [
          "に (e.g. せんせい に あいます)",
          "と",
          "へ",
          "を"
        ],
        "correctAnswer": 0,
        "explanation": "に denotes one-way initiative and respect when going to see a teacher, doctor, or boss."
      },
      {
        "id": "part4-q5",
        "type": "audio-listening",
        "prompt": "Listen and identify where the meeting will occur.",
        "audioText": "えき の まえ で たなかさん と あいます。",
        "options": [
          "In front of the station.",
          "Inside the station.",
          "At Mr. Tanaka's house.",
          "At a restaurant."
        ],
        "correctAnswer": 0,
        "explanation": "えき の まえ で = in front of the station."
      },
      {
        "id": "part4-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"I bumped into Tanaka-san yesterday.\" -> \"きのう たなかさん [ ? ] あいました。\"",
        "options": [
          "に",
          "へ",
          "を",
          "から"
        ],
        "correctAnswer": 0,
        "explanation": "Encountering someone uses に (たなかさん に あいました)."
      },
      {
        "id": "part4-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"Who will you meet tomorrow?\"",
        "targetEn": "Who will you meet tomorrow?",
        "chips": [
          "あした",
          "だれ に",
          "あいます か？",
          "だれ へ",
          "と"
        ],
        "correctAnswerSentence": "あした だれ に あいます か？",
        "explanation": "だれ に あいます か？ = who will you meet?"
      },
      {
        "id": "part4-q8",
        "type": "multiple-choice",
        "prompt": "Can you use \"を\" with \"あいます\" (e.g. \"ともだち を あいます\")?",

        "question": "Can you use \"を\" with \"あいます\" (e.g. \"ともだち を あいます\")?",
        "options": [
          "No, あいます is an intransitive verb and never takes を.",
          "Yes, を is standard.",
          "Only when meeting family.",
          "Only in written Japanese."
        ],
        "correctAnswer": 0,
        "explanation": "あいます is intransitive and requires に or と, never direct object を."
      },
      {
        "id": "part4-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "きょう は だれ にも あいませんでした。",
        "options": [
          "I did not meet anybody today.",
          "I met someone today.",
          "I met everyone today.",
          "Who did you meet today?"
        ],
        "correctAnswer": 0,
        "explanation": "だれ にも + negative = did not meet anyone at all."
      },
      {
        "id": "part4-q10",
        "type": "fill-blank",
        "prompt": "Select the particle: \"かのじょ [ ? ] しぶや で あいました。\" (met up together)",
        "options": [
          "と",
          "へ",
          "を",
          "から"
        ],
        "correctAnswer": 0,
        "explanation": "Meeting mutually as companions uses と."
      }
    ]
  },
  {
    "id": "part-made-vs-made-ni",
    "number": 5,
    "section": "particles",
    "title": "Japanese \"Until\" vs \"By\": Made vs Made Ni Time Expressions",
    "shortTitle": "まで (Until) vs までに (By)",
    "subtitle": "Master the crucial difference between continuous action (まで) and strict deadlines (までに).",
    "rules": [
      {
        "title": "まで: Continuous Action \"Until\"",
        "formula": "[Time / Day] まで + [Continuous Verb]",
        "explanation": "まで means \"until\" or \"up to\". The action continues nonstop all the way through until that time arrives: \"5じ まで はたらきます\" (I work UNTIL 5:00). \"あした まで まちます\" (I will wait until tomorrow)."
      },
      {
        "title": "までに: Strict Deadline \"By / Before\"",
        "formula": "[Time / Day] までに + [Single-Event Verb]",
        "explanation": "までに means \"by\" (at or before). The action does not continue for hours; it is a single task completed BEFORE the deadline strikes: \"5じ までに レポート を だします\" (I will submit the report BY 5:00)."
      },
      {
        "title": "Verb Types Determine the Particle",
        "formula": "Continuous verbs (べんきょうする, はたらく, ねる, まつ) -> まで | Single completion verbs (だす, かえる, おわる, はらう) -> までに",
        "explanation": "Pairing までに with a continuous action like はたらきます is ungrammatical (\"5じ までに はたらきます\" makes no sense in Japanese)."
      }
    ],
    "tables": [
      {
        "title": "まで vs までに Comparison Chart",
        "headers": [
          "Expression",
          "English",
          "Type of Action",
          "Typical Verbs",
          "Example"
        ],
        "rows": [
          [
            "まで (made)",
            "Until (continuation)",
            "Continuous state or ongoing activity",
            "はたらく, まつ, べんきょうする, ねる",
            "5じ まで まちます (Wait until 5:00)."
          ],
          [
            "までに (made ni)",
            "By / Before (deadline)",
            "One-time completion / deadline event",
            "だす (submit), かえる (return), はらう (pay)",
            "きんようび までに だします (Submit by Friday)."
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "なんじ まで はたらきます か？",
        "romaji": "nanji made hatarakimasu ka?",
        "en": "Until what time do you work?"
      },
      {
        "ja": "あした までに レポート を だして ください。",
        "romaji": "ashita made ni repooto o dashite kudasai.",
        "en": "Please submit the report by tomorrow."
      },
      {
        "ja": "きんようび まで にほん に います。",
        "romaji": "kinyoubi made nihon ni imasu.",
        "en": "I will be in Japan until Friday."
      },
      {
        "ja": "6じ までに うち に かえらなければ なりません。",
        "romaji": "rokuji made ni uchi ni kaeranakereba narimasen.",
        "en": "I must return home by 6:00."
      }
    ],
    "quiz": [
      {
        "id": "part5-q1",
        "type": "fill-blank",
        "prompt": "Deadline marker: \"Please submit homework BY tomorrow.\" -> \"あした [ ? ] しゅくだい を だして ください。\"",
        "options": [
          "までに",
          "まで",
          "から",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "Submitting homework is a one-time deadline, requiring までに (by)."
      },
      {
        "id": "part5-q2",
        "type": "fill-blank",
        "prompt": "Continuous activity: \"I will study UNTIL 10:00.\" -> \"10じ [ ? ] べんきょうします。\"",
        "options": [
          "まで",
          "までに",
          "から",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "Studying continues up to 10:00, requiring まで (until)."
      },
      {
        "id": "part5-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"I must return home by 6:00.\"",
        "targetEn": "I must return home by 6:00.",
        "chips": [
          "6じ までに",
          "うち に",
          "かえります",
          "6じ まで",
          "を"
        ],
        "correctAnswerSentence": "6じ までに うち に かえります",
        "explanation": "Returning home is a one-time arrival event before a deadline: 6じ までに."
      },
      {
        "id": "part5-q4",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly uses a deadline particle with continuous work?",
        "options": [
          "まいにち 5じ までに はたらきます。",
          "まいにち 5じ まで はたらきます。",
          "あした までに でんわ を します。",
          "らいしゅう まで まちます。"
        ],
        "correctAnswer": 0,
        "explanation": "はたらきます is continuous work and cannot take the deadline particle までに. It must be \"5じ まで はたらきます\".",
        "romajiOptions": [
          "mainichi goji made ni hatarakimasu.",
          "mainichi goji made hatarakimasu.",
          "ashita made ni denwa o shimasu.",
          "raishuu made machimasu."
        ]
      },
      {
        "id": "part5-q5",
        "type": "multiple-choice",
        "prompt": "Which of the following verbs naturally pairs with \"までに\" (by)?",

        "question": "Which of the following verbs naturally pairs with \"までに\" (by)?",
        "options": [
          "だします (submit / hand in)",
          "ねます (sleep)",
          "べんきょうします (study)",
          "はたらきます (work)"
        ],
        "correctAnswer": 0,
        "explanation": "だします (submit) is a single event completed before a deadline."
      },
      {
        "id": "part5-q6",
        "type": "audio-listening",
        "prompt": "Listen and identify the deadline.",
        "audioText": "きんようび までに おかね を はらって ください。",
        "options": [
          "Please pay the money by Friday.",
          "Please pay the money until Friday.",
          "Please pay the money on Friday morning.",
          "I paid the money on Friday."
        ],
        "correctAnswer": 0,
        "explanation": "きんようび までに = by Friday."
      },
      {
        "id": "part5-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"I will wait until 3:00.\"",
        "targetEn": "I will wait until 3:00.",
        "chips": [
          "3じ まで",
          "まちます",
          "3じ までに",
          "いきます"
        ],
        "correctAnswerSentence": "3じ まで まちます",
        "explanation": "まちます (waiting) is continuous until the point in time: 3じ まで."
      },
      {
        "id": "part5-q8",
        "type": "multiple-choice",
        "prompt": "What does \"5じ まで います\" mean?",

        "question": "What does \"5じ まで います\" mean?",
        "options": [
          "I will be here until 5:00.",
          "I will arrive by 5:00.",
          "I will leave after 5:00.",
          "I am here at 5:00."
        ],
        "correctAnswer": 0,
        "explanation": "います is continuous presence: staying until 5:00."
      },
      {
        "id": "part5-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "ぎんこう は なんじ まで です か？",
        "options": [
          "Until what time is the bank open?",
          "What time does the bank open?",
          "Where is the bank?",
          "Is the bank open today?"
        ],
        "correctAnswer": 0,
        "explanation": "なんじ まで = until what time."
      },
      {
        "id": "part5-q10",
        "type": "fill-blank",
        "prompt": "Complete: \"Please call me BY 8:00 tonight.\" -> \"こんばん 8じ [ ? ] でんわ を して ください。\"",
        "options": [
          "までに",
          "まで",
          "から",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "Calling is a single deadline action completed before 8:00: 8じ までに."
      }
    ]
  }
];
