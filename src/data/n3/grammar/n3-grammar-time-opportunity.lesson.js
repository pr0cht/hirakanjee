// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-time-opportunity",
  "number": 1,
  "title": "JLPT N3 Grammar: Time, Succession & Opportunity (～うちに, ～あいだ, ついでに)",
  "shortTitle": "Time & Opportunity (~うちに, ついでに)",
  "category": "Time & Opportunity",
  "subtitle": "Master expressing action while a state persists, before an opportunity slips away, and combining errands efficiently.",
  "formula": "V-(辞書形/ない形/ている) + うちに • N + のうちに • ついでに + V",
  "description": "Learn three essential N3 temporal patterns: ～うちに (while / before a state changes), ～あいだに (while / during an interval), and ついでに (while doing A, taking the opportunity to do B on the way).",
  "sections": [
    {
      "title": "1. ～うちに (While / Before it changes)",
      "content": "～うちに indicates that an action should take place while a temporary condition holds, or that something changed naturally during that period.\n\nTwo Core Usages:\n1. Before state changes / while you still can: スープが温かいうちに飲んでください (Drink while it is still warm / before it cools).\n2. While doing X, Y happened without noticing: テレビを見ているうちに寝てしまった (While watching TV, I fell asleep).",
      "table": {
        "headers": [
          "Form",
          "Connection",
          "Example",
          "Meaning"
        ],
        "rows": [
          [
            "Verb (ている)",
            "見ている + うちに",
            "見ているうちに",
            "While watching"
          ],
          [
            "Verb (ない形)",
            "冷めない + うちに",
            "冷めないうちに",
            "Before it cools"
          ],
          [
            "い-Adjective",
            "温かい + うちに",
            "温かいうちに",
            "While it is warm"
          ],
          [
            "Noun",
            "今の + うちに",
            "今のうちに",
            "While we still can (now)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "スープが温かいうちに、どうぞ飲んでくださいね。",
          "romaji": "Suupu ga atatakai uchi ni, douzo nonde kudasai ne.",
          "en": "Please drink the soup while it is still warm."
        },
        {
          "jp": "忘れないうちに自分にメールをしておきます。",
          "romaji": "Wasurenai uchi ni jibun ni meeru o shite okimasu.",
          "en": "I will email myself before I forget."
        },
        {
          "jp": "彼はテレビを見ているうちに寝てしまいました。",
          "romaji": "Kare wa terebi o mite iru uchi ni nete shimaimashita.",
          "en": "While watching TV, he accidentally fell asleep."
        }
      ]
    },
    {
      "title": "2. ついでに (Taking the Opportunity / While at it)",
      "content": "ついでに indicates that while performing a primary action, one utilizes the opportunity, location, or time to perform a secondary action.\n\nKey Concept:\n• The primary action is the main reason for movement or activity.\n• The secondary action is conveniently added on the way.",
      "table": {
        "headers": [
          "Pattern",
          "Example",
          "Nuance"
        ],
        "rows": [
          [
            "V-辞書形 + ついでに",
            "出かけるついでに",
            "While going out, convenient addition"
          ],
          [
            "V-た + ついでに",
            "立ち寄ったついでに",
            "While having stopped by"
          ],
          [
            "N + のついでに",
            "買い物のついでに",
            "While doing shopping"
          ]
        ]
      },
      "examples": [
        {
          "jp": "買い物のついでに、郵便局へ寄って切手を買ってきた。",
          "romaji": "Kaimono no tsuide ni, yuubinkyoku e yotte kitte o katte kita.",
          "en": "While out shopping, I stopped by the post office and bought stamps."
        },
        {
          "jp": "散歩のついでに、ゴミを出してきてくれる？",
          "romaji": "Sanpo no tsuide ni, gomi o dashite kite kureru?",
          "en": "While you are out for a walk, could you take out the trash?"
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form to complete the sentence:",
      "question": "雨が＿＿＿＿＿うちに、急いで帰りましょう。",
      "options": [
        "降らない",
        "降る",
        "降った",
        "降らなかった"
      ],
      "correctAnswer": 0,
      "explanation": "降らないうちに means \"before it starts raining\" (while it is not raining yet).",
      "romaji": "Ame ga _____ uchi ni, isoide kaerimashou.",
      "romajiOptions": [
        "furanai",
        "furu",
        "futta",
        "furanakatta"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the natural connector:",
      "question": "友人の娘は少し＿＿＿＿＿うちに、すっかり大人になっていた。",
      "options": [
        "見ない",
        "見ないの",
        "見なかった",
        "見る"
      ],
      "correctAnswer": 0,
      "explanation": "少し見ないうちに means \"during the short time I had not seen her\".",
      "romaji": "Yuujin no musume wa sukoshi _____ uchi ni, sukkari otona ni natte ita.",
      "romajiOptions": [
        "minai",
        "minai no",
        "minakatta",
        "miru"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the appropriate grammar point for taking advantage of an errand:",
      "question": "コンビニへ行く＿＿＿＿＿、お茶を買ってきてくれませんか。",
      "options": [
        "ついでに",
        "うちに",
        "かわりに",
        "せいで"
      ],
      "correctAnswer": 0,
      "explanation": "ついでに indicates taking the opportunity of going to the convenience store to buy tea.",
      "romaji": "Konbini e iku _____, ocha o katte kite kuremasen ka.",
      "romajiOptions": [
        "tsuide ni",
        "uchi ni",
        "kawari ni",
        "sei de"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Please drink while it is warm.\"",
      "chips": [
        "温かい",
        "うちに、",
        "どうぞ",
        "飲んでください。"
      ],
      "correctOrder": [
        "温かい",
        "うちに、",
        "どうぞ",
        "飲んでください。"
      ],
      "explanation": "温かいうちに (while it is warm) どうぞ飲んでください (please drink)."
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-time-opportunity",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Time & Opportunity (~うちに, ついでに)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n3"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
