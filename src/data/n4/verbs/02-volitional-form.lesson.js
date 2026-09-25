// JLPT N4 Lesson Module
export const lesson = {
  "id": "volitional-form",
  "number": 2,
  "title": "JLPT N4: Volitional Form (意向形 - いこうけい)",
  "shortTitle": "Volitional Form (意向形)",
  "category": "Verb Forms",
  "subtitle": "Practice the volitional form to express “let’s” or intentions in Japanese.",
  "formula": "Group 1: u → ou | Group 2: ru → you | Group 3: suru → shiyou, kuru → koyou",
  "description": "The volitional form is the plain/informal equivalent of 〜ましょう (\"Let’s...\"). Combined with と思います or と思っています, it expresses deliberate personal intentions (\"I plan to / I intend to\").",
  "sections": [
    {
      "title": "1. Casual 'Let’s' in Everyday Conversation",
      "content": "In casual conversation between friends, peers, and family, the volitional form replaces the polite 〜ましょう:\n\n• 行きましょう → 行こう (Let’s go!)\n• 食べましょう → 食べよう (Let’s eat!)\n• 始めましょう → 始めよう (Let’s begin!)\n\nIt is also used when talking to oneself (独り言) to announce a decision: さあ、寝よう (Well, time to go to sleep).",
      "table": null,
      "examples": [
        {
          "jp": "ちょっと 休もう。疲れたね。",
          "romaji": "Chotto yasumou. Tsukareta ne.",
          "en": "Let’s take a short break. We are tired, aren’t we?"
        },
        {
          "jp": "明日 早く 起きよう。",
          "romaji": "Ashita hayaku okiyou.",
          "en": "Let’s wake up early tomorrow / I will wake up early tomorrow."
        }
      ]
    },
    {
      "title": "2. Formation Rules by Verb Group",
      "content": "• Group 1 (Godan Verbs): Change the final -u sound to the corresponding long -ou sound:\n  - 書く (kaku) → 書こう (kakou)\n  - 飲む (nomu) → 飲もう (nomou)\n  - 話す (hanasu) → 話そう (hanasou)\n  - 待つ (matsu) → 待とう (matou)\n  - 買う (kau) → 買おう (kaou)\n\n• Group 2 (Ichidan Verbs): Drop -ru and attach -よう (-you):\n  - 食べる (taberu) → 食べよう (tabeyou)\n  - 見る (miru) → 見よう (miyou)\n  - 起きる (okiru) → 起きよう (okiyou)\n\n• Group 3 (Irregular Verbs):\n  - する (suru) → しよう (shiyou)\n  - くる (kuru) → こよう (koyou)",
      "table": {
        "headers": [
          "Verb Group",
          "Dictionary Form",
          "Volitional Plain",
          "Masu Equivalent",
          "English Meaning"
        ],
        "rows": [
          [
            "Group 1 (Godan)",
            "書く (kaku)",
            "書こう (kakou)",
            "書きましょう (kakimashou)",
            "let's write"
          ],
          [
            "Group 1 (Godan)",
            "飲む (nomu)",
            "飲もう (nomou)",
            "飲みましょう (nomimashou)",
            "let's drink"
          ],
          [
            "Group 1 (Godan)",
            "話す (hanasu)",
            "話そう (hanasou)",
            "話しましょう (hanashimashou)",
            "let's talk"
          ],
          [
            "Group 2 (Ichidan)",
            "食べる (taberu)",
            "食べよう (tabeyou)",
            "食べましょう (tabemashou)",
            "let's eat"
          ],
          [
            "Group 2 (Ichidan)",
            "見る (miru)",
            "見よう (miyou)",
            "見ましょう (mimashou)",
            "let's watch"
          ],
          [
            "Group 3 (Irregular)",
            "する (suru)",
            "しよう (shiyou)",
            "しましょう (shimashou)",
            "let's do"
          ],
          [
            "Group 3 (Irregular)",
            "来る (kuru)",
            "来よう (koyou)",
            "来ましょう (kimashou)",
            "let's come"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "3. Expressing Personal Intentions: 〜ようと思っています",
      "content": "Combine the volitional form with と思います or と思っています to express plans or intentions:\n\n• [Volitional] + と思います: Indicates a decision made on the spot (\"I think I will...\").\n• [Volitional] + と思っています: Indicates an ongoing intention decided beforehand (\"I have been planning to...\").\n\nUnlike 〜つもり, which can sound assertive or blunt, 〜と思っています is polite, gentle, and widely used in professional settings.",
      "table": null,
      "examples": [
        {
          "jp": "週末、京都へ 行こうと 思っています。",
          "romaji": "Shuumatsu, Kyouto e ikou to omotte imasu.",
          "en": "I am planning to go to Kyoto this weekend."
        },
        {
          "jp": "将来、自分の 会社を 作ろうと 思います。",
          "romaji": "Shourai, jibun no kaisha o tsukurou to omoimasu.",
          "en": "I intend to start my own company in the future."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "What is the volitional form of the verb 書く (かく)?",
      "question": "みんなで 手紙を ＿＿＿。",
      "options": [
        "書こう",
        "書こうる",
        "書けよう",
        "書くよう"
      ],
      "correctAnswer": 0,
      "explanation": "書く ends in -ku; in Group 1, change -ku to -kou (書こう).",
      "romaji": "Minna de tegami o ___.",
      "romajiOptions": [
        "kakou",
        "kakouru",
        "kakeyou",
        "kakuyou"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form for expressing planned intention (起きる):",
      "question": "あした 早く＿＿＿と 思っています。",
      "options": [
        "起きよう",
        "起きる",
        "起きた",
        "起きない"
      ],
      "correctAnswer": 0,
      "explanation": "The pattern for intention is [Volitional Form] + と思っています.",
      "romaji": "Ashita hayaku ___ to omotte imasu.",
      "romajiOptions": [
        "okiyou",
        "okiru",
        "okita",
        "okinai"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Let’s drink tea together.\"",
      "chips": [
        "いっしょに",
        "おちゃを",
        "のもう。"
      ],
      "correctOrder": [
        0,
        1,
        2
      ],
      "explanation": "Standard word order: いっしょに (together) おちゃを (tea) のもう (let’s drink)."
    }
  ]
};

export const lessonMeta = {
  "id": "volitional-form",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Volitional Form (意向形)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-verbs"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
