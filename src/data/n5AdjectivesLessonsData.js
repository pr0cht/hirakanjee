// JLPT N5 Adjectives Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Adjectives Curriculum
// Contains 4 comprehensive lessons covering i-adjectives, na-adjectives, degree words,
// antonym pairs, and connective/adverbial conjugations (...ku, ...kute, ...ni, ...de).

export const n5AdjectivesLessons = [
  {
    "id": "adj-list",
    "number": 1,
    "section": "adjectives",
    "title": "JLPT N5 Adjectives List: i-Adjectives & na-Adjectives",
    "shortTitle": "i-Adj & na-Adj List",
    "subtitle": "Learn essential i-adjectives and na-adjectives, noun-modifying forms, and exceptions like きれい and いい.",
    "rules": [
      {
        "title": "Two Distinct Adjective Classes",
        "formula": "い-Adjective: ~い + Noun | な-Adjective: ~な + Noun",
        "explanation": "Japanese adjectives fall into two distinct grammatical categories. い-adjectives directly modify nouns with their ending (おおきい いえ = big house). な-adjectives act like nouns and require the particle な before modifying nouns (しずかな まち = quiet town)."
      },
      {
        "title": "Predicative vs Attributive",
        "formula": "Attributive: [Adj] + [Noun] | Predicative: [Noun] は [Adj] です",
        "explanation": "In attributive position, adjectives directly describe the noun: \"たかい くるま\" (expensive car). In predicative position, they form the predicate: \"この くるま は たかい です\" (This car is expensive)."
      },
      {
        "title": "Crucial False Friends Ending in \"i\"",
        "formula": "きれい(な), ゆうめい(な), きらい(な) -> な-Adjectives!",
        "explanation": "Even though きれい (beautiful/clean), ゆうめい (famous), and きらい (disliked) end with the phonetic \"i\" sound, they are strictly な-adjectives! Never say \"きれい ひと\", always say \"きれいな ひと\"."
      },
      {
        "title": "The Irregular Adjective: いい (Good)",
        "formula": "Dictionary: いい | Negative/Past Base: よい (よくない, よかった)",
        "explanation": "The common word for \"good\" is いい. However, all conjugations use the classical stem よい: negative is よくない (not good), past is よかった (was good), past negative is よくなかった (was not good)."
      }
    ],
    "tables": [
      {
        "title": "High-Frequency N5 い-Adjectives",
        "headers": [
          "Japanese",
          "Romaji",
          "Meaning",
          "Attributive Example"
        ],
        "rows": [
          [
            "おおきい",
            "ookii",
            "big / large",
            "おおきい いえ (big house)"
          ],
          [
            "ちいさい",
            "chiisai",
            "small / little",
            "ちいさい ねこ (small cat)"
          ],
          [
            "たかい",
            "takai",
            "expensive / tall",
            "たかい やま (tall mountain)"
          ],
          [
            "やすい",
            "yasui",
            "cheap / inexpensive",
            "やすい みせ (cheap store)"
          ],
          [
            "あたらしい",
            "atarashii",
            "new",
            "あたらしい くるま (new car)"
          ],
          [
            "ふるい",
            "furui",
            "old (non-human)",
            "ふるい ほん (old book)"
          ],
          [
            "おいしい",
            "oishii",
            "delicious / tasty",
            "おいしい りょうり (delicious meal)"
          ],
          [
            "あつい",
            "atsui",
            "hot (weather/food)",
            "あつい おちゃ (hot tea)"
          ],
          [
            "さむい",
            "samui",
            "cold (weather)",
            "さむい ふゆ (cold winter)"
          ],
          [
            "むずかしい",
            "muzukashii",
            "difficult",
            "むずかしい テスト (difficult test)"
          ],
          [
            "やさしい",
            "yasashii",
            "easy / gentle",
            "やさしい せんせい (kind teacher)"
          ],
          [
            "いい",
            "ii",
            "good",
            "いい てんき (good weather)"
          ]
        ]
      },
      {
        "title": "High-Frequency N5 な-Adjectives",
        "headers": [
          "Japanese",
          "Romaji",
          "Meaning",
          "Attributive (~な) Example"
        ],
        "rows": [
          [
            "しずか[な]",
            "shizuka [na]",
            "quiet / peaceful",
            "しずかな へや (quiet room)"
          ],
          [
            "べんり[な]",
            "benri [na]",
            "convenient",
            "べんりな ちかてつ (convenient subway)"
          ],
          [
            "ゆうめい[な]",
            "yuumei [na]",
            "famous",
            "ゆうめいな ひと (famous person)"
          ],
          [
            "きれい[な]",
            "kirei [na]",
            "clean / pretty",
            "きれいな はな (pretty flower)"
          ],
          [
            "げんき[な]",
            "genki [na]",
            "energetic / healthy",
            "げんきな こども (energetic child)"
          ],
          [
            "ひま[な]",
            "hima [na]",
            "free / not busy",
            "ひまな じかん (free time)"
          ],
          [
            "すき[な]",
            "suki [na]",
            "liked / favorite",
            "すきな たべもの (favorite food)"
          ],
          [
            "じょうず[な]",
            "jouzu [na]",
            "skillful / good at",
            "じょうずな え (skillful drawing)"
          ],
          [
            "へた[な]",
            "heta [na]",
            "unskillful / poor at",
            "へたな うた (poor singing)"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "この レストラン は とても おいしい です。",
        "romaji": "kono resutoran wa totemo oishii desu.",
        "en": "This restaurant is very delicious."
      },
      {
        "ja": "きょう は いい てんき です ね。",
        "romaji": "kyou wa ii tenki desu ne.",
        "en": "The weather is nice today, isn't it?"
      },
      {
        "ja": "たなかさん は きれいな まち に すんでいます。",
        "romaji": "tanaka-san wa kireina machi ni sunde imasu.",
        "en": "Mr. Tanaka lives in a clean and beautiful town."
      },
      {
        "ja": "ふじさん は ゆうめいな やま です。",
        "romaji": "fujisan wa yuumeina yama desu.",
        "en": "Mount Fuji is a famous mountain."
      }
    ],
    "quiz": [
      {
        "id": "adj1-q1",
        "type": "word-bank",
        "prompt": "Assemble the sentence: \"This is a quiet room.\"",
        "targetEn": "This is a quiet room.",
        "chips": [
          "これ",
          "は",
          "しずかな",
          "へや",
          "です",
          "しずか",
          "な"
        ],
        "correctAnswerSentence": "これ は しずかな へや です",
        "explanation": "Before the noun へや (room), the な-adjective しずか requires な (しずかな へや)."
      },
      {
        "id": "adj1-q2",
        "type": "fill-blank",
        "prompt": "Complete: \"Mount Fuji is a famous mountain.\" -> \"ふじさん は ゆうめい [ ? ] やま です。\"",
        "options": [
          "な",
          "い",
          "の",
          "だ"
        ],
        "correctAnswer": 0,
        "explanation": "Even though ゆうめい ends with an \"i\" sound, it is a な-adjective and requires な when modifying nouns.",
        "romaji": "fujisan wa yuumei [ ? ] yama desu.",
        "romajiOptions": [
          "na",
          "i",
          "no",
          "da"
        ]
      },
      {
        "id": "adj1-q3",
        "type": "audio-listening",
        "prompt": "Listen and identify the English translation.",
        "audioText": "この くるま は とても たかい です。",
        "options": [
          "This car is very expensive.",
          "This car is very cheap.",
          "This car is very new.",
          "This car is very fast."
        ],
        "correctAnswer": 0,
        "explanation": "たかい means expensive (or tall). とても means very.",
        "romaji": "kono kuruma wa totemo takai desu."
      },
      {
        "id": "adj1-q4",
        "type": "multiple-choice",
        "question": "Which of the following is an い-adjective?",
        "options": [
          "ふるい",
          "きれい",
          "ゆうめい",
          "しずか"
        ],
        "correctAnswer": 0,
        "explanation": "ふるい (old) is a true い-adjective. きれい and ゆうめい are な-adjectives despite ending in the \"i\" sound.",
        "romajiOptions": [
          "furui",
          "kirei",
          "yuumei",
          "shizuka"
        ]
      },
      {
        "id": "adj1-q5",
        "type": "multiple-choice",
        "question": "What is the opposite/antonym of たかい (expensive)?",
        "options": [
          "やすい (cheap)",
          "ひくい (low)",
          "ちいさい (small)",
          "ふるい (old)"
        ],
        "correctAnswer": 0,
        "explanation": "The opposite of たかい (expensive) is やすい (cheap/inexpensive).",
        "romajiOptions": [
          "yasui",
          "hikui",
          "chiisai",
          "furui"
        ]
      },
      {
        "id": "adj1-q6",
        "type": "word-bank",
        "prompt": "Assemble: \"I bought an expensive watch.\"",
        "targetEn": "I bought an expensive watch.",
        "chips": [
          "たかい",
          "とけい",
          "を",
          "かいました",
          "たかな",
          "は"
        ],
        "correctAnswerSentence": "たかい とけい を かいました",
        "explanation": "たかい directly modifies とけい without any particle: たかい とけい."
      },
      {
        "id": "adj1-q7",
        "type": "error-hunt",
        "prompt": "Which of the following 4 sentences contains a grammatical error?",
        "options": [
          "きれい ひと を みました。",
          "あたらしい くるま を かいました。",
          "しずかな へや で べんきょうします。",
          "きのう は さむかった です。"
        ],
        "correctAnswer": 0,
        "explanation": "きれい is a な-adjective, so modifying ひと requires な: \"きれいな ひと\". \"きれい ひと\" is ungrammatical.",
        "romajiOptions": [
          "kirei hito o mimashita.",
          "atarashii kuruma o kaimashita.",
          "shizukana heya de benkyoushimasu.",
          "kinou wa samukatta desu."
        ]
      },
      {
        "id": "adj1-q8",
        "type": "multiple-choice",
        "question": "What is the correct way to say \"My teacher is kind/gentle\"?",
        "options": [
          "わたし の せんせい は やさしい です。",
          "わたし の せんせい は やさしいな です。",
          "わたし の せんせい は やさし です。",
          "わたし の せんせい は やさしい だ です。"
        ],
        "correctAnswer": 0,
        "explanation": "In predicative position, an い-adjective ends with い followed by です: やさしい です.",
        "romajiOptions": [
          "watashi no sensei wa yasashii desu.",
          "watashi no sensei wa yasashiina desu.",
          "watashi no sensei wa yasashi desu.",
          "watashi no sensei wa yasashii da desu."
        ]
      },
      {
        "id": "adj1-q9",
        "type": "audio-listening",
        "prompt": "Listen to the audio and identify the object described.",
        "audioText": "あかい りんご を たべました。",
        "options": [
          "I ate a red apple.",
          "I bought a green apple.",
          "I ate a sweet banana.",
          "I like red apples."
        ],
        "correctAnswer": 0,
        "explanation": "あかい = red, りんご = apple, たべました = ate.",
        "romaji": "akai ringo o tabemashita."
      },
      {
        "id": "adj1-q10",
        "type": "fill-blank",
        "prompt": "Select the missing particle: \"とうきょう は べんり [ ? ] まち です。\"",
        "options": [
          "な",
          "に",
          "の",
          "い"
        ],
        "correctAnswer": 0,
        "explanation": "べんり is a な-adjective: べんりな まち (convenient town).",
        "romaji": "toukyou wa benri [ ? ] machi desu.",
        "romajiOptions": [
          "na",
          "ni",
          "no",
          "i"
        ]
      }
    ]
  },
  {
    "id": "adj-degree-words",
    "number": 2,
    "section": "adjectives",
    "title": "Japanese Degree Words: Very, A Little, Not Very, How Much",
    "shortTitle": "Degree Words",
    "subtitle": "Master totemo, sugoku, sukoshi, chotto, amari, zenzen, and donokurai.",
    "rules": [
      {
        "title": "Positive Degree Modifiers",
        "formula": "とても / すごく (Very) | すこし / ちょっと (A little / A bit)",
        "explanation": "Use とても or colloquial すごく to intensify positive states: \"とても あついです\" (It is very hot). Use すこし or casual ちょっと for mild degrees: \"ちょっと あついです\" (It is a bit hot)."
      },
      {
        "title": "Negative Polarity Harmony (Mandatory Negation)",
        "formula": "あまり + Negative (~ない) | ぜんぜん + Negative (~ない)",
        "explanation": "Both あまり (not very) and ぜんぜん (not at all) MUST pair with a negative adjective or verb ending! Saying \"あまり あついです\" is invalid grammar; you must say \"あまり あつくない です\" (not very hot) or \"ぜんぜん あつくない です\" (not at all hot)."
      },
      {
        "title": "Asking \"How Much / To What Extent?\"",
        "formula": "どのくらい / どのぐらい / どれくらい / どれぐらい",
        "explanation": "To inquire about extent, distance, time, or cost, use どのくらい (or conversational どのぐらい / どれくらい). For example: \"どのくらい あつい です か？\" (How hot is it?)."
      }
    ],
    "tables": [
      {
        "title": "Degree Spectrum from 100% to 0%",
        "headers": [
          "Word",
          "Romaji",
          "Meaning",
          "Sentence Requirement",
          "Example"
        ],
        "rows": [
          [
            "とても",
            "totemo",
            "very",
            "Affirmative",
            "とても おいしい です (Very delicious)"
          ],
          [
            "すごく",
            "sugoku",
            "super / immensely",
            "Affirmative",
            "すごく たかい です (Super expensive)"
          ],
          [
            "すこし",
            "sukoshi",
            "a little",
            "Affirmative",
            "すこし さむい です (A little cold)"
          ],
          [
            "ちょっと",
            "chotto",
            "a bit / somewhat",
            "Affirmative",
            "ちょっと むずかしい です (A bit hard)"
          ],
          [
            "あまり",
            "amari",
            "not very / rarely",
            "NEGATIVE (~ない)",
            "あまり たかくない です (Not very pricey)"
          ],
          [
            "ぜんぜん",
            "zenzen",
            "not at all / never",
            "NEGATIVE (~ない)",
            "ぜんぜん おいしくない です (Not tasty at all)"
          ],
          [
            "どのくらい",
            "donokurai",
            "how much / how long",
            "Question (? か)",
            "どのくらい かかります か (How long takes?)"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "きょう は とても あつい です。",
        "romaji": "kyou wa totemo atsui desu.",
        "en": "Today is very hot."
      },
      {
        "ja": "この へや は あまり ひろくない です。",
        "romaji": "kono heya wa amari hirokunai desu.",
        "en": "This room is not very spacious."
      },
      {
        "ja": "にほんご の べんきょう は ぜんぜん つまらなくない です。",
        "romaji": "nihongo no benkyou wa zenzen tsumaranakunai desu.",
        "en": "Studying Japanese is not boring at all."
      },
      {
        "ja": "いえ から えき まで どのくらい です か？",
        "romaji": "ie kara eki made donokurai desu ka?",
        "en": "About how far is it from the house to the station?"
      }
    ],
    "quiz": [
      {
        "id": "adj2-q1",
        "type": "fill-blank",
        "prompt": "Complete: \"This soup is not very hot.\" -> \"この スープ は あまり [ ? ] です。\"",
        "options": [
          "あつくない",
          "あつい",
          "あつかった",
          "あつくありませんでした"
        ],
        "correctAnswer": 0,
        "explanation": "あまり requires an affirmative negative ending: あつくない です.",
        "romaji": "kono suupu wa amari [ ? ] desu.",
        "romajiOptions": [
          "atsukunai",
          "atsui",
          "atsukatta",
          "atsuku arimasen deshita"
        ]
      },
      {
        "id": "adj2-q2",
        "type": "word-bank",
        "prompt": "Assemble: \"That movie is not interesting at all.\"",
        "targetEn": "That movie is not interesting at all.",
        "chips": [
          "あの",
          "えいが",
          "は",
          "ぜんぜん",
          "おもしろくない",
          "です",
          "とても",
          "おもしろい"
        ],
        "correctAnswerSentence": "あの えいが は ぜんぜん おもしろくない です",
        "explanation": "ぜんぜん matches with the negative adjective form おもしろくない です."
      },
      {
        "id": "adj2-q3",
        "type": "audio-listening",
        "prompt": "Listen and determine how the speaker feels about the test.",
        "audioText": "この テスト は ちょっと むずかしい です。",
        "options": [
          "This test is a bit difficult.",
          "This test is very easy.",
          "This test is impossible.",
          "This test is not difficult at all."
        ],
        "correctAnswer": 0,
        "explanation": "ちょっと = a bit, むずかしい = difficult.",
        "romaji": "kono tesuto wa chotto muzukashii desu."
      },
      {
        "id": "adj2-q4",
        "type": "error-hunt",
        "prompt": "Which sentence has a polarity mismatch error?",
        "options": [
          "この かばん は あまり たかい です。",
          "きのう は とても さむかった です。",
          "かれ は すこし つかれました。",
          "ぜんぜん しずかじゃありません。"
        ],
        "correctAnswer": 0,
        "explanation": "\"あまり たかい です\" is grammatically incorrect because あまり requires a negative predicate (あまり たかくない です).",
        "romajiOptions": [
          "kono kaban wa amari takai desu.",
          "kinou wa totemo samukatta desu.",
          "kare wa sukoshi tsukaremashita.",
          "zenzen shizuka ja arimasen."
        ]
      },
      {
        "id": "adj2-q5",
        "type": "multiple-choice",
        "question": "Which degree word means \"super / immensely\" in casual Japanese?",
        "options": [
          "すごく",
          "すこし",
          "あまり",
          "ぜんぜん"
        ],
        "correctAnswer": 0,
        "explanation": "すごく is the casual adverb form used widely in conversation meaning \"super / really\".",
        "romajiOptions": [
          "sugoku",
          "sukoshi",
          "amari",
          "zenzen"
        ]
      },
      {
        "id": "adj2-q6",
        "type": "fill-blank",
        "prompt": "Ask extent: \"[ ? ] あつい です か？\" (How hot is it?)",
        "options": [
          "どのくらい",
          "だれ",
          "いつ",
          "なんじ"
        ],
        "correctAnswer": 0,
        "explanation": "どのくらい means \"how much / to what degree\".",
        "romaji": "[ ? ] atsui desu ka?",
        "romajiOptions": [
          "donokurai",
          "dare",
          "itsu",
          "nanji"
        ]
      },
      {
        "id": "adj2-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"Kyoto was very pretty.\"",
        "targetEn": "Kyoto was very pretty.",
        "chips": [
          "きょうと",
          "は",
          "とても",
          "きれい",
          "でした",
          "きれいな",
          "です"
        ],
        "correctAnswerSentence": "きょうと は とても きれい でした",
        "explanation": "In past predicate form, the な-adjective takes でした: きれい でした."
      },
      {
        "id": "adj2-q8",
        "type": "multiple-choice",
        "question": "What is the opposite degree of とても (very)?",
        "options": [
          "ぜんぜん ~ない (not at all)",
          "すごく (super)",
          "いつも (always)",
          "たくさん (a lot)"
        ],
        "correctAnswer": 0,
        "explanation": "ぜんぜん ~ない expresses 0% intensity (not at all), directly contrasting with とても (very)."
      },
      {
        "id": "adj2-q9",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "この まち は ぜんぜん にぎやかじゃありません。",
        "options": [
          "This town is not lively at all.",
          "This town is very lively.",
          "This town is somewhat quiet.",
          "This town has many people."
        ],
        "correctAnswer": 0,
        "explanation": "ぜんぜん ... じゃありません = not at all, にぎやか = lively/bustling.",
        "romaji": "kono machi wa zenzen nigiyaka ja arimasen."
      },
      {
        "id": "adj2-q10",
        "type": "fill-blank",
        "prompt": "Choose the correct form: \"日本語 は [ ? ] むずかしくない です。\" (Japanese is not very hard.)",
        "options": [
          "あまり",
          "とても",
          "すこし",
          "ちょっと"
        ],
        "correctAnswer": 0,
        "explanation": "むずかしくない is negative, so only あまり fits among the choices to mean \"not very\".",
        "romaji": "nihongo wa [ ? ] muzukashikunai desu.",
        "romajiOptions": [
          "amari",
          "totemo",
          "sukoshi",
          "chotto"
        ]
      }
    ]
  },
  {
    "id": "adj-levels-antonyms",
    "number": 3,
    "section": "adjectives",
    "title": "Adjective Antonym Pairs & Vocabulary Levels",
    "shortTitle": "Antonym Pairs",
    "subtitle": "Learn high-frequency opposites: expensive/cheap, new/old, hot/cold (weather vs touch).",
    "rules": [
      {
        "title": "Mastering Antonyms Accelerates Recall",
        "formula": "Word A <---> Opposite Word B",
        "explanation": "JLPT N5 tests your ability to substitute opposites in dialogue (e.g. \"Is it expensive?\" \"No, it is cheap\"). Learning pairs together doubles vocabulary retention."
      },
      {
        "title": "Crucial Distinction: Weather Cold vs Touch Cold",
        "formula": "Climate: さむい (Cold) | Physical Touch / Objects: つめたい (Cold)",
        "explanation": "Do NOT mix up さむい and つめたい! Use さむい for ambient weather, seasons, and room temperature (\"きょう は さむい\"). Use つめたい for cold objects, drinks, water, or physical touch (\"つめたい みず\" = cold water)."
      },
      {
        "title": "Crucial Distinction: Weather Hot vs Object Hot",
        "formula": "Weather: あつい (暑い) | Food / Object: あつい (熱い)",
        "explanation": "While both are pronounced あつい, in kanji 暑い is for weather/summer heat, and 熱い is for hot tea, food, or bath water."
      }
    ],
    "tables": [
      {
        "title": "Essential JLPT N5 Antonym Pairs",
        "headers": [
          "Adjective 1",
          "Meaning",
          "Antonym",
          "Meaning",
          "Type"
        ],
        "rows": [
          [
            "たかい (takai)",
            "expensive / high",
            "やすい (yasui)",
            "cheap / inexpensive",
            "い-adj"
          ],
          [
            "あたらしい (atarashii)",
            "new",
            "ふるい (furui)",
            "old (objects)",
            "い-adj"
          ],
          [
            "おおきい (ookii)",
            "big / large",
            "ちいさい (chiisai)",
            "small / tiny",
            "い-adj"
          ],
          [
            "あつい (atsui)",
            "hot (weather/food)",
            "さむい (samui)",
            "cold (weather)",
            "い-adj"
          ],
          [
            "あつい (atsui)",
            "hot (food/liquid)",
            "つめたい (tsumetai)",
            "cold to touch/drink",
            "い-adj"
          ],
          [
            "おもい (omoi)",
            "heavy",
            "かるい (karui)",
            "light (weight)",
            "い-adj"
          ],
          [
            "ちかい (chikai)",
            "near / close",
            "とおい (tooi)",
            "far / distant",
            "い-adj"
          ],
          [
            "あかるい (akarui)",
            "bright",
            "くらい (kurai)",
            "dark",
            "い-adj"
          ],
          [
            "むずかしい (muzukashii)",
            "difficult",
            "やさしい (yasashii)",
            "easy / simple",
            "い-adj"
          ],
          [
            "しずか[な] (shizuka)",
            "quiet",
            "にぎやか[な] (nigiyaka)",
            "lively / bustling",
            "な-adj"
          ],
          [
            "じょうず[な] (jouzu)",
            "skillful / good at",
            "へた[な] (heta)",
            "unskillful / poor at",
            "な-adj"
          ],
          [
            "すき[な] (suki)",
            "liked / fond of",
            "きらい[な] (kirai)",
            "disliked / hate",
            "な-adj"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "この かばん は おもい です が、その かばん は かるい です。",
        "romaji": "kono kaban wa omoi desu ga, sono kaban wa karui desu.",
        "en": "This bag is heavy, but that bag is light."
      },
      {
        "ja": "つめたい ジュース を のみました。",
        "romaji": "tsumetai juusu o nomimashita.",
        "en": "I drank cold juice."
      },
      {
        "ja": "ぎんこう は えき から ちかい です。",
        "romaji": "ginkou wa eki kara chikai desu.",
        "en": "The bank is near the station."
      },
      {
        "ja": "ひるま は にぎやか です が、よる は しずか です。",
        "romaji": "hiruma wa nigiyaka desu ga, yoru wa shizuka desu.",
        "en": "It is lively during daytime, but quiet at night."
      }
    ],
    "quiz": [
      {
        "id": "adj3-q1",
        "type": "multiple-choice",
        "question": "What is the antonym of あたらしい (new)?",
        "options": [
          "ふるい",
          "やすい",
          "おもい",
          "くらい"
        ],
        "correctAnswer": 0,
        "explanation": "あたらしい (new) <---> ふるい (old).",
        "romajiOptions": [
          "furui",
          "yasui",
          "omoi",
          "kurai"
        ]
      },
      {
        "id": "adj3-q2",
        "type": "fill-blank",
        "prompt": "Choose the correct adjective: \"I want to drink [ ? ] water.\" (Cold to touch/drink)",
        "options": [
          "つめたい",
          "さむい",
          "ぬるい",
          "ふるい"
        ],
        "correctAnswer": 0,
        "explanation": "For cold drinks, food, or physical objects, use つめたい. さむい is only for weather.",
        "romaji": "I want to drink [ ? ] water.",
        "romajiOptions": [
          "tsumetai",
          "samui",
          "nurui",
          "furui"
        ]
      },
      {
        "id": "adj3-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"My station is near, but Mr. Tanaka's station is far.\"",
        "targetEn": "My station is near, but Mr. Tanaka's station is far.",
        "chips": [
          "わたし の えき は",
          "ちかい です が、",
          "たなかさん の は",
          "とおい です",
          "おもい",
          "やすい"
        ],
        "correctAnswerSentence": "わたし の えき は ちかい です が、 たなかさん の は とおい です",
        "explanation": "ちかい (near) pairs with とおい (far)."
      },
      {
        "id": "adj3-q4",
        "type": "audio-listening",
        "prompt": "Listen and identify the condition of the bag.",
        "audioText": "この にもつ は とても かるい です。",
        "options": [
          "This luggage is very light.",
          "This luggage is very heavy.",
          "This luggage is very expensive.",
          "This luggage is very large."
        ],
        "correctAnswer": 0,
        "explanation": "かるい means light in weight. おもい means heavy.",
        "romaji": "kono nimotsu wa totemo karui desu."
      },
      {
        "id": "adj3-q5",
        "type": "multiple-choice",
        "question": "What is the opposite of じょうず (skillful / good at)?",
        "options": [
          "へた",
          "きらい",
          "ひま",
          "しずか"
        ],
        "correctAnswer": 0,
        "explanation": "じょうず (skillful) is the antonym of へた (unskillful / poor at).",
        "romajiOptions": [
          "heta",
          "kirai",
          "hima",
          "shizuka"
        ]
      },
      {
        "id": "adj3-q6",
        "type": "fill-blank",
        "prompt": "Complete: \"へや を あかるく したい です から、でんき を [ ? ]。\"",
        "options": [
          "つけます",
          "けします",
          "あけます",
          "しめます"
        ],
        "correctAnswer": 0,
        "explanation": "あかるく したい (want to make bright), so you turn on the light (でんき を つけます).",
        "romaji": "heya o akaruku shitai desu kara, denki o [ ? ].",
        "romajiOptions": [
          "tsukemasu",
          "keshimasu",
          "akemasu",
          "shimemasu"
        ]
      },
      {
        "id": "adj3-q7",
        "type": "error-hunt",
        "prompt": "Which sentence incorrectly uses a climate adjective for an object?",
        "options": [
          "さむい ビール を ください。",
          "きょう は とても さむい です。",
          "つめたい みず を のみました。",
          "ふゆ は さむい です ね。"
        ],
        "correctAnswer": 0,
        "explanation": "Beer is a cold beverage, so it must be \"つめたい ビール\", NOT \"さむい ビール\". さむい is reserved for climate/air temperature.",
        "romajiOptions": [
          "samui biiru o kudasai.",
          "kyou wa totemo samui desu.",
          "tsumetai mizu o nomimashita.",
          "fuyu wa samui desu ne."
        ]
      },
      {
        "id": "adj3-q8",
        "type": "word-bank",
        "prompt": "Assemble: \"This book is easy, but that book is difficult.\"",
        "targetEn": "This book is easy, but that book is difficult.",
        "chips": [
          "この ほん は",
          "やさしい です が、",
          "あの ほん は",
          "むずかしい です",
          "たかい",
          "やすい"
        ],
        "correctAnswerSentence": "この ほん は やさしい です が、 あの ほん は むずかしい です",
        "explanation": "やさしい (easy) <---> むずかしい (difficult)."
      },
      {
        "id": "adj3-q9",
        "type": "audio-listening",
        "prompt": "Listen and identify the town's atmosphere.",
        "audioText": "しぶや は いつも にぎやか です。",
        "options": [
          "Shibuya is always lively.",
          "Shibuya is always quiet.",
          "Shibuya is always dangerous.",
          "Shibuya is always boring."
        ],
        "correctAnswer": 0,
        "explanation": "にぎやか means lively / bustling.",
        "romaji": "shibuya wa itsumo nigiyaka desu."
      },
      {
        "id": "adj3-q10",
        "type": "multiple-choice",
        "question": "Which pair consists of exact antonyms?",
        "options": [
          "たかい (expensive) <---> やすい (cheap)",
          "おおきい (big) <---> あたらしい (new)",
          "あつい (hot) <---> にぎやか (lively)",
          "きれい (pretty) <---> へた (unskillful)"
        ],
        "correctAnswer": 0,
        "explanation": "たかい and やすい are exact antonyms (expensive vs cheap)."
      }
    ]
  },
  {
    "id": "adj-conjugations",
    "number": 4,
    "section": "adjectives",
    "title": "Adjective Conjugations: ...ku, ...kute, ...ni, ...de Forms",
    "shortTitle": "Connective & Adverb Forms",
    "subtitle": "Learn to connect multiple qualities (~kute / ~de) and turn adjectives into adverbs (~ku / ~ni).",
    "rules": [
      {
        "title": "Connective Form (Linking Qualities: \"And\")",
        "formula": "い-Adj: drop ~い -> ~くて | な-Adj: drop ~な -> ~で | Noun: ~で",
        "explanation": "To combine two qualities without repeating sentences, use connective forms: はやい + やすい -> \"はやくて、やすい です\" (Fast and cheap). しずか[な] + べんり[な] -> \"しずかで、べんり です\" (Quiet and convenient). がくせい + げんき -> \"がくせいで、げんき です\"."
      },
      {
        "title": "Irregular Connective: いい -> よくて",
        "formula": "いい -> よくて (Never いくて!)",
        "explanation": "The adjective いい (good) must conjugate using its historical stem よい: connective is よくて (e.g. \"あたま が よくて、しんせつ です\" - Smart and kind)."
      },
      {
        "title": "Adverbial Form (Modifying Actions & Verbs)",
        "formula": "い-Adj: drop ~い -> ~く + Verb | な-Adj: drop ~な -> ~に + Verb",
        "explanation": "To describe HOW an action is done or a change of state with なります (become): はやい -> はやく あるきます (walk fast). あつい -> あつく なりました (became hot). じょうず[な] -> じょうずに なりました (became skillful). きれい[な] -> きれいに かきます (write neatly)."
      }
    ],
    "tables": [
      {
        "title": "Connective & Adverbial Conjugation Matrix",
        "headers": [
          "Dictionary Form",
          "Type",
          "Connective Form (And...)",
          "Adverbial Form (Action / Become)"
        ],
        "rows": [
          [
            "はやい (fast)",
            "い-adj",
            "はやくて (fast and...)",
            "はやく あるく (walk fast)"
          ],
          [
            "やすい (cheap)",
            "い-adj",
            "やすくて (cheap and...)",
            "やすく かう (buy cheaply)"
          ],
          [
            "おおきい (big)",
            "い-adj",
            "おおきくて (big and...)",
            "おおきく なる (become big)"
          ],
          [
            "あつい (hot)",
            "い-adj",
            "あつくて (hot and...)",
            "あつく なる (become hot)"
          ],
          [
            "いい (good)",
            "い-adj (irreg)",
            "よくて (good and...)",
            "よく なる (improve / become good)"
          ],
          [
            "しずか[な] (quiet)",
            "な-adj",
            "しずかで (quiet and...)",
            "しずかに する (be quiet)"
          ],
          [
            "べんり[な] (convenient)",
            "な-adj",
            "べんりで (convenient and...)",
            "べんりに なる (become convenient)"
          ],
          [
            "じょうず[な] (skillful)",
            "な-adj",
            "じょうずで (skillful and...)",
            "じょうずに なる (become skillful)"
          ],
          [
            "きれい[な] (clean/pretty)",
            "な-adj",
            "きれいで (pretty and...)",
            "きれいに そうじする (clean neatly)"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "この カメラ は かるくて、べんり です。",
        "romaji": "kono kamera wa karukute, benri desu.",
        "en": "This camera is light and convenient."
      },
      {
        "ja": "たなかさん の へや は ひろくて、あかるい です。",
        "romaji": "tanaka-san no heya wa hirokute, akarui desu.",
        "en": "Mr. Tanaka's room is spacious and bright."
      },
      {
        "ja": "にほんご が じょうずに なりました ね。",
        "romaji": "nihongo ga jouzuni narimashita ne.",
        "en": "Your Japanese has become skillful, hasn't it?"
      },
      {
        "ja": "あした は はやく おきます。",
        "romaji": "ashita wa hayaku okimasu.",
        "en": "I will wake up early tomorrow."
      }
    ],
    "quiz": [
      {
        "id": "adj4-q1",
        "type": "word-bank",
        "prompt": "Assemble: \"This restaurant is cheap and delicious.\"",
        "targetEn": "This restaurant is cheap and delicious.",
        "chips": [
          "この",
          "レストラン",
          "は",
          "やすくて、",
          "おいしい",
          "です",
          "やすいで",
          "おいしくて"
        ],
        "correctAnswerSentence": "この レストラン は やすくて、 おいしい です",
        "explanation": "やすいて drop い -> やすくて to connect with おいしい です."
      },
      {
        "id": "adj4-q2",
        "type": "fill-blank",
        "prompt": "Complete: \"Tanaka-san is kind and smart.\" -> \"たなかさん は しんせつ [ ? ] あたま が いい です。\"",
        "options": [
          "で",
          "くて",
          "な",
          "に"
        ],
        "correctAnswer": 0,
        "explanation": "しんせつ is a な-adjective; its connective form is しんせつで."
      },
      {
        "id": "adj4-q3",
        "type": "audio-listening",
        "prompt": "Listen and choose the English meaning.",
        "audioText": "もっと はやく はなして ください。",
        "options": [
          "Please speak more quickly.",
          "Please speak more slowly.",
          "Please speak more loudly.",
          "Please do not speak."
        ],
        "correctAnswer": 0,
        "explanation": "はやく is the adverb form of はやい (fast), modifying はなして (speak).",
        "romaji": "motto hayaku hanashite kudasai."
      },
      {
        "id": "adj4-q4",
        "type": "multiple-choice",
        "question": "What is the correct connective form of いい (good)?",
        "options": [
          "よくて",
          "いくて",
          "いいで",
          "いいて"
        ],
        "correctAnswer": 0,
        "explanation": "いい conjugates using stem よい: よくて (NOT いくて).",
        "romajiOptions": [
          "yokute",
          "ikute",
          "iide",
          "iite"
        ]
      },
      {
        "id": "adj4-q5",
        "type": "fill-blank",
        "prompt": "Turn into adverb: \"Please write neatly/prettily.\" -> \"[ ? ] かいて ください。\"",
        "options": [
          "きれいに",
          "きれいく",
          "きれいな",
          "きれいで"
        ],
        "correctAnswer": 0,
        "explanation": "きれい is a な-adjective; its adverbial form is きれいに.",
        "romaji": "[ ? ] kaite kudasai.",
        "romajiOptions": [
          "kireini",
          "kireiku",
          "kireina",
          "kireide"
        ]
      },
      {
        "id": "adj4-q6",
        "type": "word-bank",
        "prompt": "Assemble: \"The weather became cold.\"",
        "targetEn": "The weather became cold.",
        "chips": [
          "てんき",
          "が",
          "さむく",
          "なりました",
          "さむに",
          "さむい"
        ],
        "correctAnswerSentence": "てんき が さむく なりました",
        "explanation": "さむい drops い and adds く before なりました (became cold)."
      },
      {
        "id": "adj4-q7",
        "type": "error-hunt",
        "prompt": "Which sentence has an invalid connective conjugation error?",
        "options": [
          "この りょうり は おいしいで、たかい です。",
          "この りょうり は おいしくて、たかい です。",
          "へや は しずかで、ひろい です。",
          "かのじょ は わかくて、げんき です。"
        ],
        "correctAnswer": 0,
        "explanation": "おいしい is an い-adjective; connecting it requires \"おいしくて\", NOT \"おいしいで\".",
        "romajiOptions": [
          "kono ryouri wa oishiide, takai desu.",
          "kono ryouri wa oishikute, takai desu.",
          "heya wa shizukade, hiroi desu.",
          "kanojo wa wakakute, genki desu."
        ]
      },
      {
        "id": "adj4-q8",
        "type": "multiple-choice",
        "question": "How do you say \"Please be quiet\" in Japanese?",
        "options": [
          "しずかに して ください。",
          "しずかく して ください。",
          "しずかで して ください。",
          "しずかな して ください。"
        ],
        "correctAnswer": 0,
        "explanation": "しずかに して ください uses the adverb form of the な-adjective (しずかに + して).",
        "romajiOptions": [
          "shizukani shite kudasai.",
          "shizukaku shite kudasai.",
          "shizukade shite kudasai.",
          "shizukana shite kudasai."
        ]
      },
      {
        "id": "adj4-q9",
        "type": "audio-listening",
        "prompt": "Listen and identify what happened.",
        "audioText": "きのう は あたま が いたくて、ねました。",
        "options": [
          "Yesterday I had a headache and went to sleep.",
          "Yesterday I had a stomachache and ate.",
          "Yesterday I was fine and went out.",
          "Yesterday I had a fever and worked."
        ],
        "correctAnswer": 0,
        "explanation": "いたくて is connective of いたい (painful/hurting): had a headache and went to sleep.",
        "romaji": "kinou wa atama ga itakute, nemashita."
      },
      {
        "id": "adj4-q10",
        "type": "fill-blank",
        "prompt": "Complete: \"His English became good.\" -> \"かれ の えいご は [ ? ] なりました。\"",
        "options": [
          "じょうずに",
          "じょうずく",
          "じょうずで",
          "じょうずな"
        ],
        "correctAnswer": 0,
        "explanation": "じょうず is a な-adjective; before なる (become), it takes に: じょうずに なりました.",
        "romaji": "kare no eigo wa [ ? ] narimashita.",
        "romajiOptions": [
          "jouzuni",
          "jouzuku",
          "jouzude",
          "jouzuna"
        ]
      }
    ]
  }
];
