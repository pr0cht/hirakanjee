// JLPT N5 Special Practice Topics Curriculum & Quizzes
// Based on Meguro Language Center (MLC Japanese) N5 Special Curriculum
// Contains 6 comprehensive lessons: Fractions, Quiz Symbols, Sou Omoimasu,
// Honorifics & Friend Words, Compliments, and Sorry I'm Late.

export const n5SpecialLessons = [
  {
    "id": "special-fractions",
    "number": 1,
    "section": "special",
    "title": "Japanese Fractions & Portions: Hambun, 1/3, 2/3, 3/5",
    "shortTitle": "Fractions & Portions",
    "subtitle": "Learn how to express fractions, half (半分), decimals, and portions in Japanese.",
    "rules": [
      {
        "title": "The Fraction Formula: [Denominator] 分の [Numerator]",
        "formula": "[Denominator] ぶん の [Numerator] (e.g. 3分の1 = さんぶんのいち)",
        "explanation": "Japanese fraction order is the exact opposite of English: you state the denominator (the whole number of parts) first, followed by 分の (bun no = parts of), and then the numerator. For example, 1/3 is 3分の1 (さんぶんのいち = 1 part of 3)."
      },
      {
        "title": "Half: 半分 (はんぶん) vs 2分の1 (にぶんのいち)",
        "formula": "半分 (はんぶん) = Half / 50% | 2分の1 (にぶんのいち) = One half (mathematical fraction)",
        "explanation": "In daily life, \"half\" is almost always expressed with 半分 (はんぶん). You say \"ケーキを 半分 たべました\" (I ate half the cake) or \"これを 半分 ください\" (Please give me half of this). 2分の1 is used in mathematical or technical contexts."
      },
      {
        "title": "Decimals: 点 (てん)",
        "formula": "[Number] 点 (てん) [Decimal Digits] (e.g. 0.5 = れいてんご)",
        "explanation": "Decimal points are read as 点 (てん). Digits after the point are read individually: 0.5 is \"れいてんご\", 1.5 is \"いってんご\", and 3.14 is \"さんてんいちよん\"."
      },
      {
        "title": "Portions with Counters & Quantity",
        "formula": "[Total] の [Fraction] (e.g. クラス の 3分の2 = Two-thirds of the class)",
        "explanation": "To express a fraction of a specific group or item, link them with the particle の: \"ピザ の 4分の1\" (one quarter of the pizza), \"じかん の はんぶん\" (half of the time)."
      }
    ],
    "tables": [
      {
        "title": "Common Fractions in Japanese",
        "headers": [
          "Fraction",
          "Kanji / Japanese",
          "Hiragana Reading",
          "Romaji",
          "Meaning"
        ],
        "rows": [
          [
            "1/2",
            "半分",
            "はんぶん",
            "hanbun",
            "Half"
          ],
          [
            "1/2",
            "2分の1",
            "にぶんのいち",
            "nibun no ichi",
            "One half (math)"
          ],
          [
            "1/3",
            "3分の1",
            "さんぶんのいち",
            "sanbun no ichi",
            "One third"
          ],
          [
            "2/3",
            "3分の2",
            "さんぶんのに",
            "sanbun no ni",
            "Two thirds"
          ],
          [
            "1/4",
            "4分の1",
            "よんぶんのいち",
            "yonbun no ichi",
            "One quarter"
          ],
          [
            "3/4",
            "4分の3",
            "よんぶんのさん",
            "yonbun no san",
            "Three quarters"
          ],
          [
            "1/5",
            "5分の1",
            "ごぶんのいち",
            "gobun no ichi",
            "One fifth"
          ],
          [
            "3/5",
            "5分の3",
            "ごぶんのさん",
            "gobun no san",
            "Three fifths"
          ],
          [
            "0.5",
            "0.5",
            "れいてんご",
            "reitengo",
            "Zero point five"
          ],
          [
            "1.5",
            "1.5",
            "いってんご",
            "ittengo",
            "One point five"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "ケーキ を 半分 ください。",
        "romaji": "keeki o hanbun kudasai.",
        "en": "Please give me half of the cake."
      },
      {
        "ja": "しゅくだい の 3分の1 が おわりました。",
        "romaji": "shukudai no sanbun no ichi ga owarimashita.",
        "en": "One-third of my homework is finished."
      },
      {
        "ja": "りんご の 3分の2 が あかい です。",
        "romaji": "ringo no sanbun no ni ga akai desu.",
        "en": "Two-thirds of the apples are red."
      },
      {
        "ja": "ピザ を 4分の1 たべました。",
        "romaji": "piza o yonbun no ichi tabemashita.",
        "en": "I ate one-quarter of the pizza."
      }
    ],
    "quiz": [
      {
        "id": "frac-q1",
        "type": "fill-blank",
        "prompt": "Choose the correct reading for 1/3 (3分の1):",
        "options": [
          "さんぶんのいち",
          "いちぶんのさん",
          "さんぶんのさん",
          "よんぶんのいち"
        ],
        "correctAnswer": 0,
        "explanation": "1/3 is read denominator first: 3分の1 (さんぶんのいち)."
      },
      {
        "id": "frac-q2",
        "type": "multiple-choice",
        "prompt": "How do you say \"half\" in daily conversational Japanese?",
        "options": [
          "半分 (はんぶん)",
          "2分の1 (にぶんのいち)",
          "1分の2 (いちぶんのに)",
          "半日 (はんにち)"
        ],
        "correctAnswer": 0,
        "explanation": "半分 (はんぶん) is the natural everyday word for \"half\"."
      },
      {
        "id": "frac-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"Please give me half of the pizza.\"",
        "targetEn": "Please give me half of the pizza.",
        "chips": [
          "ピザ を",
          "半分",
          "ください",
          "3分の1"
        ],
        "correctAnswerSentence": "ピザ を 半分 ください",
        "explanation": "Use 半分 (hanbun) directly before ください."
      },
      {
        "id": "frac-q4",
        "type": "fill-blank",
        "prompt": "How is 2/3 written and read in Japanese?",
        "options": [
          "3分の2 (さんぶんのに)",
          "2分の3 (にぶんのさん)",
          "3分の1 (さんぶんのいち)",
          "2分の2 (にぶんのに)"
        ],
        "correctAnswer": 0,
        "explanation": "2/3 is [Denominator: 3] 分の [Numerator: 2] = 3分の2 (さんぶんのに)."
      },
      {
        "id": "frac-q5",
        "type": "audio-listening",
        "prompt": "Listen to the portion requested.",
        "audioText": "りんご を 半分 ください。",
        "options": [
          "Half of the apple",
          "One third of the apple",
          "Three apples",
          "Two apples"
        ],
        "correctAnswer": 0,
        "explanation": "The speaker said「りんご を 半分 ください」(Please give me half of the apple)."
      },
      {
        "id": "frac-q6",
        "type": "multiple-choice",
        "prompt": "What is 3/5 in Japanese?",
        "options": [
          "5分の3 (ごぶんのさん)",
          "3分の5 (さんぶんのご)",
          "5分の1 (ごぶんのいち)",
          "4分の3 (よんぶんのさん)"
        ],
        "correctAnswer": 0,
        "explanation": "3/5 has denominator 5 and numerator 3: 5分の3 (ごぶんのさん)."
      },
      {
        "id": "frac-q7",
        "type": "fill-blank",
        "prompt": "How do you read the decimal \"0.5\" in Japanese?",
        "options": [
          "れいてんご",
          "ぜろてんご",
          "いちてんご",
          "れいてんさん"
        ],
        "correctAnswer": 0,
        "explanation": "0.5 is standardly read as「れいてんご」(0 = れい, . = てん, 5 = ご)."
      },
      {
        "id": "frac-q8",
        "type": "word-bank",
        "prompt": "Assemble: \"One-fourth of the class is absent.\"",
        "targetEn": "One-fourth of the class is absent.",
        "chips": [
          "クラス の",
          "4分の1 は",
          "やすみ です",
          "半分 は"
        ],
        "correctAnswerSentence": "クラス の 4分の1 は やすみ です",
        "explanation": "1/4 is 4分の1 (よんぶんのいち)."
      },
      {
        "id": "frac-q9",
        "type": "error-hunt",
        "prompt": "Spot the error in reading 1/4:",
        "options": [
          "4分の1 を「いちぶんのよん」と よみます。",
          "4分の1 を「よんぶんのいち」と よみます。",
          "半分 を「はんぶん」と よみます。",
          "3分の1 を「さんぶんのいち」と よみます。"
        ],
        "correctAnswer": 0,
        "explanation": "4分の1 is read denominator-first as「よんぶんのいち」, NOT「いちぶんのよん」."
      },
      {
        "id": "frac-q10",
        "type": "multiple-choice",
        "prompt": "Which fraction means \"three quarters\" (3/4)?",
        "options": [
          "4分の3 (よんぶんのさん)",
          "3分の4 (さんぶんのよん)",
          "4分の1 (よんぶんのいち)",
          "3分の2 (さんぶんのに)"
        ],
        "correctAnswer": 0,
        "explanation": "3/4 is 4分の3 (よんぶんのさん)."
      }
    ]
  },
  {
    "id": "special-quiz-symbols",
    "number": 2,
    "section": "special",
    "title": "Quiz Symbols: 〇 Maru, △ Sankaku, ✕ Batsu",
    "shortTitle": "Quiz Symbols (〇 △ ✕)",
    "subtitle": "Understand Japanese grading symbols, cultural meanings, and test conventions.",
    "rules": [
      {
        "title": "〇 (まる - Maru): Correct / Yes / Valid",
        "formula": "〇 = まる (Maru) = Correct / Pass / Good / True",
        "explanation": "In Japan, a circle (〇) means that an answer is 100% correct! On school tests and exams, correct answers receive large red circles. It is also used on forms to indicate 'Yes' or 'Valid'."
      },
      {
        "title": "✕ (ばつ - Batsu): Incorrect / No / Prohibited",
        "formula": "✕ = ばつ / ぺけ (Batsu) = Incorrect / Wrong / False / Not allowed",
        "explanation": "A cross (✕) signifies a mistake or an incorrect answer. You can make an X shape with your arms in front of your chest to casually signal 'No', 'Not allowed', or 'Cannot do'."
      },
      {
        "title": "△ (さんかく - Sankaku): Partially Correct / Neutral",
        "formula": "△ = さんかく (Sankaku) = Partially correct / Needs work / Undecided",
        "explanation": "A triangle (△) indicates partial credit, a minor mistake, or a neutral/undecided status. On tests, it means your idea was right but had a small spelling or particle error."
      },
      {
        "title": "The Western Checkmark (✓) Cultural Trap!",
        "formula": "Japan: ✓ = Check / Mistake to fix | Western: ✓ = Correct answer",
        "explanation": "Crucial cultural difference: In English and Western schools, a check mark (✓) means 'Correct'. In Japan, teachers often use a check mark to flag an ERROR or an item that needs review! If a Japanese teacher puts a check on your answer, it often means it is incorrect."
      }
    ],
    "tables": [
      {
        "title": "Japanese Evaluation Symbols Cheat Sheet",
        "headers": [
          "Symbol",
          "Japanese Name",
          "Romaji",
          "Meaning",
          "Context"
        ],
        "rows": [
          [
            "〇",
            "まる",
            "maru",
            "Correct / True / Good",
            "Grading tests, True/False quiz"
          ],
          [
            "◎",
            "にじゅうまる",
            "nijuumaru",
            "Excellent / Perfect",
            "Double circle, highest praise"
          ],
          [
            "💮",
            "はなまる",
            "hanamaru",
            "Outstanding / Bravo!",
            "Flower circle awarded for 100%"
          ],
          [
            "△",
            "さんかく",
            "sankaku",
            "Partially correct / So-so",
            "Partial points, minor mistake"
          ],
          [
            "✕",
            "ばつ",
            "batsu",
            "Incorrect / False / Wrong",
            "Marking mistakes, prohibition"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "テスト で まる を たくさん もらいました。",
        "romaji": "tesuto de maru o takusan moraimashita.",
        "en": "I received many circles (correct marks) on the test."
      },
      {
        "ja": "この こたえ は ばつ です。",
        "romaji": "kono kotae wa batsu desu.",
        "en": "This answer is incorrect (cross)."
      },
      {
        "ja": "かんじ が すこし まちがって いるので、さんかく です。",
        "romaji": "kanji ga sukoshi machigatte iru node, sankaku desu.",
        "en": "The kanji has a small mistake, so it's a triangle (partial credit)."
      },
      {
        "ja": "ぜんぶ ただしい ので、はなまる を あげます。",
        "romaji": "zenbu tadashii node, hanamaru o agemasu.",
        "en": "Everything is correct, so I give you a flower circle!"
      }
    ],
    "quiz": [
      {
        "id": "sym-q1",
        "type": "multiple-choice",
        "prompt": "In Japan, which symbol means an answer is CORRECT?",
        "options": [
          "〇 (まる - Maru)",
          "✕ (ばつ - Batsu)",
          "△ (さんかく - Sankaku)",
          "✓ (チェック - Checkmark)"
        ],
        "correctAnswer": 0,
        "explanation": "In Japan, a circle (〇 - まる) indicates a correct answer."
      },
      {
        "id": "sym-q2",
        "type": "fill-blank",
        "prompt": "The symbol ✕ is called [ ? ] and means incorrect.",
        "options": [
          "ばつ",
          "まる",
          "さんかく",
          "しかく"
        ],
        "correctAnswer": 0,
        "explanation": "✕ is called「ばつ」(batsu) and means incorrect or wrong."
      },
      {
        "id": "sym-q3",
        "type": "multiple-choice",
        "prompt": "What does the triangle symbol (△ - さんかく) usually represent on a test in Japan?",
        "options": [
          "Partially correct / Needs review",
          "100% Correct",
          "Completely wrong",
          "Bonus points"
        ],
        "correctAnswer": 0,
        "explanation": "△ (sankaku) represents partial credit or partially correct."
      },
      {
        "id": "sym-q4",
        "type": "word-bank",
        "prompt": "Assemble: \"The answer is correct (circle).\"",
        "targetEn": "The answer is correct (circle).",
        "chips": [
          "こたえ は",
          "まる です",
          "ばつ です",
          "さんかく です"
        ],
        "correctAnswerSentence": "こたえ は まる です",
        "explanation": "「こたえ は まる です」means \"The answer is correct\"."
      },
      {
        "id": "sym-q5",
        "type": "audio-listening",
        "prompt": "Listen to the teacher's grading result.",
        "audioText": "ぜんぶ まる です。よく できました！",
        "options": [
          "Everything is correct. Well done!",
          "Everything is wrong.",
          "You need to fix the triangles.",
          "Half is correct."
        ],
        "correctAnswer": 0,
        "explanation": "The teacher said「ぜんぶ まる です。よく できました！」(All circles/correct. Well done!)."
      },
      {
        "id": "sym-q6",
        "type": "multiple-choice",
        "prompt": "What is the cultural meaning of a check mark (✓) by a Japanese teacher on a test?",
        "options": [
          "It often marks a mistake or item to review",
          "It means 100% correct",
          "It is an award for neat handwriting",
          "It means bonus points"
        ],
        "correctAnswer": 0,
        "explanation": "In Japan, teachers often use ✓ to flag an error or something that needs review."
      },
      {
        "id": "sym-q7",
        "type": "fill-blank",
        "prompt": "The double circle symbol ◎ is called [ ? ] and indicates excellent.",
        "options": [
          "にじゅうまる",
          "まるまる",
          "だいにんき",
          "おおまる"
        ],
        "correctAnswer": 0,
        "explanation": "◎ is called「にじゅうまる」(nijuumaru = double circle)."
      },
      {
        "id": "sym-q8",
        "type": "word-bank",
        "prompt": "Assemble: \"This question is wrong (batsu).\"",
        "targetEn": "This question is wrong (batsu).",
        "chips": [
          "この もんだい は",
          "ばつ です",
          "まる です",
          "テスト です"
        ],
        "correctAnswerSentence": "この もんだい は ばつ です",
        "explanation": "「この もんだい は ばつ です」means this question is incorrect."
      },
      {
        "id": "sym-q9",
        "type": "error-hunt",
        "prompt": "Spot the factually incorrect statement about Japanese symbols:",
        "options": [
          "にほん では「まる (〇)」は まちがい を いみします。",
          "にほん では「まる (〇)」は ただしい こたえ です。",
          "にほん では「ばつ (✕)」は まちがい です。",
          "にほん では「さんかく (△)」は はんぶん ただしい です。"
        ],
        "correctAnswer": 0,
        "explanation": "Statement A claims 〇 means a mistake, which is false! 〇 means correct."
      },
      {
        "id": "sym-q10",
        "type": "multiple-choice",
        "prompt": "What is a flower-shaped circle (💮) called in Japanese schools?",
        "options": [
          "はなまる (Hanamaru)",
          "さくらまる (Sakuramaru)",
          "はなばつ (Hanabatsu)",
          "ゆきまる (Yukimaru)"
        ],
        "correctAnswer": 0,
        "explanation": "💮 is called「はなまる」(hanamaru) and is awarded for outstanding work."
      }
    ]
  },
  {
    "id": "special-sou-omoimasu",
    "number": 3,
    "section": "special",
    "title": "I Think So in Japanese: そう思います",
    "shortTitle": "Expressing Opinions (~と思います)",
    "subtitle": "Express agreement, opinions, and thoughts with そう思います and [Plain Form] と思います.",
    "rules": [
      {
        "title": "Agreeing: そう 思います (I think so)",
        "formula": "A: [Statement] ですね。 -> B: はい、わたし も そう 思います。",
        "explanation": "Use「そう 思います」(そう おもいます) to agree with someone's opinion or view. Adding も (わたし も そう 思います) means \"I think so too\"."
      },
      {
        "title": "Disagreeing Politely: そう 思わない (I don't think so)",
        "formula": "いいえ、わたし は そう 思わない / そう 思いません。",
        "explanation": "To disagree politely, say「わたし は そう 思いません」(I don't think so). In casual speech with friends, use the plain negative:「そう 思わない」(sou omowanai)."
      },
      {
        "title": "Expressing Specific Thoughts: [Plain Form] と 思います",
        "formula": "[Sentence in Plain Form] + と 思います (I think that...)",
        "explanation": "Before the quotation particle と, the verb, adjective, or noun must be in the PLAIN form (dictionary form, nai-form, ta-form): \"あした あめ が ふる と 思います\" (I think it will rain tomorrow), \"この りょうり は おいしい と 思います\" (I think this food is delicious)."
      },
      {
        "title": "Asking Someone's Opinion: どう 思いますか",
        "formula": "[Topic] について どう 思いますか？ (What do you think about [Topic]?)",
        "explanation": "Use「どう 思いますか」(dou omoimasu ka) to ask what someone thinks: \"にほん の せいかつ は どう 思いますか？\" (What do you think of life in Japan?)."
      },
      {
        "title": "Plain Form Quick Reference Reminder",
        "formula": "ます-form vs Plain: きます = くる | きません = こない | きました = きた | きませんでした = こなかった",
        "explanation": "Japanese quotation clauses (～と思います) always convert polite ～ます endings into their plain short forms. For irregular verb きます: くる (will come), こない (will not come), きた (came). Always identify the plain equivalent before adding と思います!"
      }
    ],
    "tables": [
      {
        "title": "Plain Form Conjugations before と思います",
        "headers": [
          "Category",
          "Plain Form Example",
          "+ と思います",
          "English Meaning"
        ],
        "rows": [
          [
            "Verb (Affirmative)",
            "ふります -> ふる",
            "ふる と 思います",
            "I think it will rain"
          ],
          [
            "Verb (Negative)",
            "いきません -> いかない",
            "いかない と 思います",
            "I think I won't go"
          ],
          [
            "Verb (Past)",
            "かいました -> かった",
            "かった と 思います",
            "I think he bought it"
          ],
          [
            "i-Adjective",
            "おもしろい",
            "おもしろい と 思います",
            "I think it is interesting"
          ],
          [
            "na-Adjective",
            "べんり です -> べんり だ",
            "べんり だ と 思います",
            "I think it is convenient"
          ],
          [
            "Noun + Copula",
            "やすみ です -> やすみ だ",
            "やすみ だ と 思います",
            "I think it is a holiday"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "わたし も そう 思います。",
        "romaji": "watashi mo sou omoimasu.",
        "en": "I think so too."
      },
      {
        "ja": "にほんご は おもしろい と 思います。",
        "romaji": "nihongo wa omoshiroi to omoimasu.",
        "en": "I think Japanese is interesting."
      },
      {
        "ja": "あした は あめ が ふる と 思います。",
        "romaji": "ashita wa ame ga furu to omoimasu.",
        "en": "I think it will rain tomorrow."
      },
      {
        "ja": "たなかさん について どう 思いますか？",
        "romaji": "tanaka-san ni tsuite dou omoimasu ka?",
        "en": "What do you think about Mr. Tanaka?"
      }
    ],
    "quiz": [
      {
        "id": "omo-q1",
        "type": "fill-blank",
        "prompt": "Choose the correct phrase for \"I think so too\":",
        "options": [
          "わたし も そう 思います",
          "わたし は そう です",
          "わたし も これ です",
          "わたし は そう しました"
        ],
        "correctAnswer": 0,
        "explanation": "「わたし も そう 思います」(watashi mo sou omoimasu) means \"I think so too\"."
      },
      {
        "id": "omo-q2",
        "type": "fill-blank",
        "prompt": "Complete the sentence: \"あした あめ が [ ? ] と 思います。\" (I think it will rain tomorrow)",
        "options": [
          "ふる",
          "ふります",
          "ふって",
          "ふり"
        ],
        "correctAnswer": 0,
        "explanation": "Verbs before と思います must be in the plain (dictionary) form: ふる."
      },
      {
        "id": "omo-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"I think Japanese is fun.\"",
        "targetEn": "I think Japanese is fun.",
        "chips": [
          "にほんご は",
          "たのしい と",
          "思います",
          "たのしい です"
        ],
        "correctAnswerSentence": "にほんご は たのしい と 思います",
        "explanation": "i-adjectives keep い before と思います: たのしい と 思います."
      },
      {
        "id": "omo-q4",
        "type": "multiple-choice",
        "prompt": "How do you ask \"What do you think?\" in polite Japanese?",
        "options": [
          "どう 思いますか？",
          "なに 思いますか？",
          "どこ 思いますか？",
          "いつ 思いますか？"
        ],
        "correctAnswer": 0,
        "explanation": "「どう 思いますか？」(dou omoimasu ka) is the standard question for asking someone's opinion."
      },
      {
        "id": "omo-q5",
        "type": "audio-listening",
        "prompt": "Listen to the speaker's agreement.",
        "audioText": "はい、わたし も そう おもいます。",
        "options": [
          "Yes, I think so too.",
          "No, I don't think so.",
          "What do you think?",
          "I think it's delicious."
        ],
        "correctAnswer": 0,
        "explanation": "The speaker said「はい、わたし も そう おもいます」(Yes, I think so too)."
      },
      {
        "id": "omo-q6",
        "type": "fill-blank",
        "prompt": "For na-adjectives before と思います, add [ ? ]: \"この まち は べんり [ ? ] と 思います。\"",
        "options": [
          "だ",
          "な",
          "に",
          "で"
        ],
        "correctAnswer": 0,
        "explanation": "na-adjectives take だ before と思います in the plain present affirmative: べんり だ と 思います."
      },
      {
        "id": "omo-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"I don't think so.\"",
        "targetEn": "I don't think so.",
        "chips": [
          "わたし は",
          "そう",
          "思いません",
          "そう です"
        ],
        "correctAnswerSentence": "わたし は そう 思いません",
        "explanation": "「わたし は そう 思いません」means \"I don't think so\"."
      },
      {
        "id": "omo-q8",
        "type": "multiple-choice",
        "prompt": "Which particle quotes the thought before 思います?",
        "options": [
          "と (to)",
          "を (o)",
          "に (ni)",
          "が (ga)"
        ],
        "correctAnswer": 0,
        "explanation": "The quotation particle と links the thought clause to 思います."
      },
      {
        "id": "omo-q9",
        "type": "error-hunt",
        "prompt": "Spot the grammatical error before と思います:",
        "options": [
          "たなかさん は くる と 思います。",
          "たなかさん は きます と 思います。",
          "たなかさん は こない と 思います。",
          "たなかさん は きた と 思います。"
        ],
        "correctAnswer": 1,
        "explanation": "Sentence B incorrectly uses the polite きます instead of plain form くる before と思います."
      },
      {
        "id": "omo-q10",
        "type": "multiple-choice",
        "prompt": "How do you say \"I think he won't come tomorrow\"?",
        "options": [
          "あした こない と 思います",
          "あした くる と 思います",
          "あした きません と 思います",
          "あした こなかった と 思います"
        ],
        "correctAnswer": 0,
        "explanation": "Use the plain negative form こない before と思います."
      }
    ]
  },
  {
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
  },
  {
    "id": "special-compliments",
    "number": 5,
    "section": "special",
    "title": "Japanese Compliments & Modesty: Ii ne, Sugoi, Jouzu",
    "shortTitle": "Compliments & Modesty",
    "subtitle": "Learn praise words (いいね, すごい, 上手) and the cultural art of modest replies.",
    "rules": [
      {
        "title": "Casual Praise: いいね (That's good!) & すごい (Amazing!)",
        "formula": "いいね！ (ii ne) = Nice! / Great! | すごい！ (sugoi) = Amazing! / Impressive!",
        "explanation": "いいね reacts favorably to photos, ideas, or good news. すごい expresses genuine amazement when someone accomplishes something impressive. Politer forms include「いいですね」and「すごいですね」."
      },
      {
        "title": "Skill Praise: 上手 (じょうず) vs 下手 (へた)",
        "formula": "[Person] は [Skill] が 上手 です (Person is skillful at...)",
        "explanation": "上手 (じょうず) praises someone else's skill: \"にほんご が 上手 ですね\" (Your Japanese is so good!). Never use 上手 to describe YOURSELF! Use 下手 (へた) for poor skill."
      },
      {
        "title": "Describing Your Own Strengths: 得意 (とくい) vs 苦手 (にがて) [Enrichment: Beyond N5]",
        "formula": "わたし は [Activity] が 得意 です (I am strong at...) / 苦手 です (I struggle with...)",
        "explanation": "Since 上手 cannot be used for oneself, conversational Japanese uses 得意 (とくい) to state what you are naturally good at: \"りょうり が 得意 です\" (I'm good at cooking). Use 苦手 (にがて) for things you dislike or are weak at (both are N4 enrichment words)."
      },
      {
        "title": "The Modest Japanese Response: いいえ、まだまだ です",
        "formula": "Compliment: \"にほんご が じょうず ですね！\" -> Reply: \"いいえ、まだまだ です。\"",
        "explanation": "In Japanese culture, accepting compliments with \"Thank you, I know!\" sounds boastful. The standard polite, humble response is: \"いいえ、まだまだ です\" (No, I still have a long way to go!)."
      }
    ],
    "tables": [
      {
        "title": "Compliment & Skill Terms Comparison Matrix",
        "headers": [
          "Expression",
          "Reading",
          "Target",
          "Tone",
          "Example"
        ],
        "rows": [
          [
            "いいね",
            "ii ne",
            "Ideas / Situations",
            "Casual approval",
            "それ、いいね！ (That's nice!)"
          ],
          [
            "すごい",
            "sugoi",
            "People / Feats",
            "Amazement",
            "ひとりで つくったの？すごい！"
          ],
          [
            "上手",
            "じょうず",
            "Others only",
            "Skill praise",
            "にほんご が じょうず ですね。"
          ],
          [
            "下手",
            "へた",
            "General",
            "Poor skill",
            "うた が へた です。 (I sing poorly)"
          ],
          [
            "得意",
            "とくい",
            "Self or Others",
            "Strong point",
            "すうがく が とくい です。"
          ],
          [
            "苦手",
            "にがて",
            "Self or Others",
            "Weak point",
            "からいもの が にがて です。"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "その シャツ、とても いいですね！",
        "romaji": "sono shatsu, totemo ii desu ne!",
        "en": "That shirt is very nice!"
      },
      {
        "ja": "かんじ を たくさん おぼえました ね。すごい！",
        "romaji": "kanji o takusan oboemashita ne. sugoi!",
        "en": "You memorized a lot of kanji. Amazing!"
      },
      {
        "ja": "A: にほんご が おじょうず ですね。 B: いいえ、まだまだ です。",
        "romaji": "A: nihongo ga ojouzu desu ne. B: iie, mada mada desu.",
        "en": "A: Your Japanese is very skillful! B: No, I still have a long way to go."
      },
      {
        "ja": "わたし は りょうり が 得意 です。",
        "romaji": "watashi wa ryouri ga tokui desu.",
        "en": "I am good at cooking (subjective comfort)."
      }
    ],
    "quiz": [
      {
        "id": "comp-q1",
        "type": "fill-blank",
        "prompt": "How should you respond modestly when told \"にほんご が 上手 ですね\"?",
        "options": [
          "いいえ、まだまだ です",
          "はい、じょうず です",
          "ありがとう、しっています",
          "そう です ね"
        ],
        "correctAnswer": 0,
        "explanation": "「いいえ、まだまだ です」(No, I still have a long way to go) is the polite, modest Japanese response."
      },
      {
        "id": "comp-q2",
        "type": "multiple-choice",
        "prompt": "Why is it incorrect to say \"わたし は え が 上手 です\"?",
        "options": [
          "上手 is used to praise others, not boast about oneself",
          "上手 is an adjective that cannot take が",
          "上手 only refers to sports",
          "え cannot be paired with 上手"
        ],
        "correctAnswer": 0,
        "explanation": "上手 (じょうず) is for praising others. For yourself, use 得意 (とくい)."
      },
      {
        "id": "comp-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"Your Japanese is very skillful!\"",
        "targetEn": "Your Japanese is very skillful!",
        "chips": [
          "にほんご が",
          "とても",
          "上手 です ね",
          "下手 です ね"
        ],
        "correctAnswerSentence": "にほんご が とても 上手 です ね",
        "explanation": "「にほんご が とても 上手 です ね」is the classic compliment."
      },
      {
        "id": "comp-q4",
        "type": "audio-listening",
        "prompt": "Listen to the compliment reaction.",
        "audioText": "わあ、すごい！ひとりで つくりました か？",
        "options": [
          "Wow, amazing! Did you make it alone?",
          "That's bad, don't do it alone.",
          "Please give me half.",
          "What time did you make it?"
        ],
        "correctAnswer": 0,
        "explanation": "The speaker said「わあ、すごい！ひとりで つくりました か？」(Wow, amazing! Did you make it alone?)."
      },
      {
        "id": "comp-q5",
        "type": "fill-blank",
        "prompt": "How do you say \"I am bad with spicy food\" using polite modesty?",
        "options": [
          "からいもの が 苦手 です",
          "からいもの が 下手 です",
          "からいもの が すき です",
          "からいもの が 上手 です"
        ],
        "correctAnswer": 0,
        "explanation": "Use 苦手 (にがて) to state that you struggle with or cannot handle something."
      },
      {
        "id": "comp-q6",
        "type": "multiple-choice",
        "prompt": "What word means casual approval like \"Nice! / Great idea!\" in Japanese?",
        "options": [
          "いいね (ii ne)",
          "だめ (dame)",
          "へた (heta)",
          "おそい (osoi)"
        ],
        "correctAnswer": 0,
        "explanation": "「いいね」(ii ne) is used for casual praise or \"That's nice!\""
      },
      {
        "id": "comp-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"No, I still have a long way to go.\"",
        "targetEn": "No, I still have a long way to go.",
        "chips": [
          "いいえ、",
          "まだまだ",
          "です",
          "上手 です"
        ],
        "correctAnswerSentence": "いいえ、 まだまだ です",
        "explanation": "「いいえ、まだまだ です」is the quintessential humble response."
      },
      {
        "id": "comp-q8",
        "type": "multiple-choice",
        "prompt": "Which term expresses your own personal strength or specialty?",
        "options": [
          "得意 (とくい)",
          "上手 (じょうず)",
          "下手 (へた)",
          "苦手 (にがて)"
        ],
        "correctAnswer": 0,
        "explanation": "得意 (とくい) is used to express things you are good at without sounding boastful."
      },
      {
        "id": "comp-q9",
        "type": "error-hunt",
        "prompt": "Spot the cultural / linguistic error in the compliment exchange:",
        "options": [
          "A:「ピアノ が じょうず ですね！」 B:「はい、わたし は じょうず です。」",
          "A:「ピアノ が じょうず ですね！」 B:「いいえ、まだまだ です。」",
          "A:「すごい ですね！」 B:「ありがとうございます。」",
          "A:「いい ですね！」 B:「はい、そう しましょう。」"
        ],
        "correctAnswer": 0,
        "explanation": "Reply A boasts「はい、わたし は じょうず です」which is unnatural and impolite in Japanese etiquette."
      },
      {
        "id": "comp-q10",
        "type": "fill-blank",
        "prompt": "The antonym of 上手 (じょうず) is [ ? ] (poor at/unskillful).",
        "options": [
          "下手 (へた)",
          "苦手 (にがて)",
          "わるい (warui)",
          "おそい (osoi)"
        ],
        "correctAnswer": 0,
        "explanation": "The direct antonym of 上手 is 下手 (へた)."
      }
    ]
  },
  {
    "id": "special-sorry-late",
    "number": 6,
    "section": "special",
    "title": "Sorry I'm Late in Japanese: おそくなってすみません",
    "shortTitle": "Apologies & Delay Etiquette",
    "subtitle": "Master delay apologies, giving realistic excuses (trains, traffic), and apology etiquette.",
    "rules": [
      {
        "title": "The Core Apology: 遅くなって すみません",
        "formula": "おそくなって すみません (Sorry for being late / Sorry for my tardiness)",
        "explanation": "This comes from the i-adjective 遅い (おそい - late/slow). In the connective te-form, おそい becomes おそくなって (becoming late) followed by すみません (excuse me / I am sorry)."
      },
      {
        "title": "Alternative: 遅れて すみません",
        "formula": "おくれて すみません (from the verb 遅れます - おくれます)",
        "explanation": "You can also use the verb 遅れます (おくれます - to be delayed). Conjugated to te-form:「遅れて すみません」(おくれて すみません). Both are natural and polite."
      },
      {
        "title": "Giving Common Reasons for Delays",
        "formula": "[Reason / Cause] で / が + [Delay Verb]",
        "explanation": "In Japan, always state why you were delayed politely: \"でんしゃ が おくれました\" (The train was delayed), \"みち が こんで いました\" (The traffic was heavy), \"めざまし が なりませんでした\" (The alarm didn't go off)."
      },
      {
        "title": "すみません vs ごめんなさい",
        "formula": "すみません = Formal/Polite, Social situations | ごめんなさい = Personal/Casual, Close friends/Family",
        "explanation": "At work, school, or appointments, ALWAYS use すみません or しつれいしました. Reserve ごめんなさい for private apologies to family or close friends."
      }
    ],
    "tables": [
      {
        "title": "Common Delay Reasons & Phrases",
        "headers": [
          "Situation",
          "Japanese Phrase",
          "Hiragana",
          "English Meaning"
        ],
        "rows": [
          [
            "Apology",
            "遅くなってすみません",
            "おそくなってすみません",
            "Sorry I'm late"
          ],
          [
            "Apology (Verb)",
            "遅れてすみません",
            "おくれてすみません",
            "Sorry for the delay"
          ],
          [
            "Train delay",
            "電車が遅れました",
            "でんしゃがおくれました",
            "The train was delayed"
          ],
          [
            "Traffic congestion",
            "道がこんでいました",
            "みちがこんでいました",
            "The roads were congested"
          ],
          [
            "Alarm failed",
            "目覚ましが鳴りませんでした",
            "めざましがなりませんでした",
            "The alarm didn't ring"
          ],
          [
            "Lost way",
            "道に迷いました",
            "みちにまよいました",
            "I lost my way / got lost"
          ],
          [
            "Accident",
            "事故がありました",
            "じこがありました",
            "There was an accident"
          ]
        ]
      }
    ],
    "examples": [
      {
        "ja": "遅くなって すみません。電車 が 遅れました。",
        "romaji": "osoku natte sumimasen. densha ga okremashita.",
        "en": "Sorry I'm late. The train was delayed."
      },
      {
        "ja": "道 が こんで いて、遅れました。",
        "romaji": "michi ga konde ite, okremashita.",
        "en": "Traffic was congested, so I was delayed."
      },
      {
        "ja": "お待たせして すみません。",
        "romaji": "omataseshite sumimasen.",
        "en": "Sorry to have kept you waiting."
      },
      {
        "ja": "バス が なかなか 来ませんでした。",
        "romaji": "basu ga nakanaka kimasen deshita.",
        "en": "The bus just wouldn't come."
      }
    ],
    "quiz": [
      {
        "id": "late-q1",
        "type": "fill-blank",
        "prompt": "Choose the correct phrase for \"Sorry I am late\":",
        "options": [
          "遅くなって すみません",
          "はやく なって すみません",
          "やすんで すみません",
          "あさ に なって すみません"
        ],
        "correctAnswer": 0,
        "explanation": "「遅くなって すみません」(osoku natte sumimasen) is the standard polite phrase for \"Sorry I am late\"."
      },
      {
        "id": "late-q2",
        "type": "multiple-choice",
        "prompt": "How do you explain that \"The train was delayed\"?",
        "options": [
          "電車 が 遅れました (でんしゃ が おくれました)",
          "電車 が きました (でんしゃ が きました)",
          "電車 が とまりました (でんしゃ が とまりました)",
          "電車 が はしりました (でんしゃ が はしりました)"
        ],
        "correctAnswer": 0,
        "explanation": "「電車 が 遅れました」(densha ga okremashita) means \"The train was delayed\"."
      },
      {
        "id": "late-q3",
        "type": "word-bank",
        "prompt": "Assemble: \"Sorry I am late. Traffic was heavy.\"",
        "targetEn": "Sorry I am late. Traffic was heavy.",
        "chips": [
          "遅くなって すみません。",
          "道 が",
          "こんで いました",
          "電車 が"
        ],
        "correctAnswerSentence": "遅くなって すみません。 道 が こんで いました",
        "explanation": "Combine the delay apology with the traffic reason."
      },
      {
        "id": "late-q4",
        "type": "audio-listening",
        "prompt": "Listen to the explanation for being late.",
        "audioText": "おそくなって すみません。でんしゃ が おくれました。",
        "options": [
          "Sorry I'm late, the train was delayed.",
          "Sorry I'm late, I was sleeping.",
          "The train arrived early.",
          "Please wait for the bus."
        ],
        "correctAnswer": 0,
        "explanation": "The speaker said「おそくなって すみません。でんしゃ が おくれました」。"
      },
      {
        "id": "late-q5",
        "type": "fill-blank",
        "prompt": "The te-form of 遅い (おそい) in \"Sorry for becoming late\" is [ ? ]:",
        "options": [
          "遅くなって (おそくなって)",
          "遅くて (おそくて)",
          "遅い (おそい)",
          "遅く (おそく)"
        ],
        "correctAnswer": 0,
        "explanation": "With the verb なります (become), おそい becomes「おそくなって」."
      },
      {
        "id": "late-q6",
        "type": "multiple-choice",
        "prompt": "What is a polite expression for \"Sorry to have kept you waiting\"?",
        "options": [
          "お待たせして すみません (おまたせして すみません)",
          "まって ください (まって ください)",
          "まっています (まっています)",
          "まちません (まちません)"
        ],
        "correctAnswer": 0,
        "explanation": "「お待たせして すみません」(omataseshite sumimasen) means \"Sorry to have kept you waiting\"."
      },
      {
        "id": "late-q7",
        "type": "word-bank",
        "prompt": "Assemble: \"The alarm didn't ring.\"",
        "targetEn": "The alarm didn't ring.",
        "chips": [
          "目覚まし が",
          "鳴りませんでした",
          "鳴りました",
          "時計 が"
        ],
        "correctAnswerSentence": "目覚まし が 鳴りませんでした",
        "explanation": "「目覚まし が 鳴りませんでした」(mezamashi ga narimasen deshita) means the alarm didn't ring."
      },
      {
        "id": "late-q8",
        "type": "multiple-choice",
        "prompt": "Which apology is appropriate in a professional business or teacher setting?",
        "options": [
          "すみません / 失礼しました",
          "ごめん！",
          "ごめんね",
          "わるい わるい"
        ],
        "correctAnswer": 0,
        "explanation": "In professional settings, always use すみません or 失礼しました (shitsurei shimashita)."
      },
      {
        "id": "late-q9",
        "type": "error-hunt",
        "prompt": "Spot the error in the delay explanation sentence:",
        "options": [
          "道 に 迷って、遅れました。(みち に まよって、おくれました)",
          "遅くなって すみません。(おそくなって すみません)",
          "電車 が 遅れました ので、遅くなりました。",
          "早く なって すみません。遅れました。"
        ],
        "correctAnswer": 3,
        "explanation": "Sentence D says「早く なって すみません」(Sorry for becoming early), which contradicts being late!"
      },
      {
        "id": "late-q10",
        "type": "fill-blank",
        "prompt": "Complete: \"道 に [ ? ]、遅くなりました。\" (I lost my way and became late)",
        "options": [
          "迷って (まよって)",
          "いって (いって)",
          "みて (みて)",
          "のんで (のんで)"
        ],
        "correctAnswer": 0,
        "explanation": "「道 に 迷って」(michi ni mayotte) means getting lost or losing one's way."
      }
    ]
  }
];
