// JLPT N4 Lesson Module
export const lesson = {
  "id": "potential-form",
  "number": 1,
  "title": "JLPT N4: Potential Form (可能形 - かのうけい)",
  "shortTitle": "Potential Form (可能形)",
  "category": "Verb Forms",
  "subtitle": "Learn how to express ability or possibility using the potential form.",
  "formula": "Group 1: u → eru | Group 2: ru → rareru (reru) | Group 3: suru → dekiru, kuru → korareru",
  "description": "The potential form expresses ability (\"can do\") or physical/social circumstances permitting an action (\"is possible to do\"). In standard Japanese, the direct object particle を shifts to が with potential verbs.",
  "sections": [
    {
      "title": "1. Formation Rules by Verb Group",
      "content": "• Group 1 (Godan Verbs): Change the final -u sound to the corresponding -eru sound:\n  - 行く (iku) → 行ける (ikeru: can go)\n  - 飲む (nomu) → 飲める (nomeru: can drink)\n  - 話す (hanasu) → 話せる (hanaseru: can speak)\n  - 買う (kau) → 買える (kaeru: can buy)\n  - 待つ (matsu) → 待てる (materu: can wait)\n  - 泳ぐ (oyogu) → 泳げる (oyogeru: can swim)\n\n• Group 2 (Ichidan Verbs): Drop -ru and add -られる (-rareru). In spoken Japanese, -れる (-reru / ら抜き言葉) is also common:\n  - 食べる (taberu) → 食べられる (taberareru: can eat)\n  - 見る (miru) → 見られる (mirareru: can see/watch)\n  - 起きる (okiru) → 起きられる (okirareru: can wake up)\n\n• Group 3 (Irregular Verbs):\n  - する (suru) → できる (dekiru: can do)\n  - くる (kuru) → こられる (korareru: can come)",
      "table": {
        "headers": [
          "Verb Group",
          "Dictionary Form",
          "Potential Plain",
          "Potential Polite (Masu)",
          "English Meaning"
        ],
        "rows": [
          [
            "Group 1 (Godan)",
            "行く (iku)",
            "行ける (ikeru)",
            "行けます (ikemasu)",
            "can go"
          ],
          [
            "Group 1 (Godan)",
            "飲む (nomu)",
            "飲める (nomeru)",
            "飲めます (nomemasu)",
            "can drink"
          ],
          [
            "Group 1 (Godan)",
            "話す (hanasu)",
            "話せる (hanaseru)",
            "話せます (hanasemasu)",
            "can speak"
          ],
          [
            "Group 2 (Ichidan)",
            "食べる (taberu)",
            "食べられる (taberareru)",
            "食べられます (taberaremasu)",
            "can eat"
          ],
          [
            "Group 2 (Ichidan)",
            "見る (miru)",
            "見られる (mirareru)",
            "見られます (miraremasu)",
            "can see/watch"
          ],
          [
            "Group 3 (Irregular)",
            "する (suru)",
            "できる (dekiru)",
            "できます (dekimasu)",
            "can do"
          ],
          [
            "Group 3 (Irregular)",
            "来る (kuru)",
            "来られる (korareru)",
            "来られます (koraremasu)",
            "can come"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "2. The Particle Shift: を → が",
      "content": "With potential verbs, the object of ability or possibility is usually marked with が instead of を:\n\n• 漢字を 書きます (I write kanji) → 漢字が 書けます (I can write kanji).\n• 日本語を 話します (I speak Japanese) → 日本語が 話せます (I can speak Japanese).\n\nNote: Particles indicating direction (へ), location (で), or recipient (に) remain unchanged:\n• 一人で 病院へ 行けますか。(Can you go to the hospital alone?)\n• この パソコンで 仕事が できます。(I can work with this computer.)",
      "table": null,
      "examples": [
        {
          "jp": "わたしは 日本語で 電話が できます。",
          "romaji": "Watashi wa Nihongo de denwa ga dekimasu.",
          "en": "I can make phone calls in Japanese."
        },
        {
          "jp": "刺身やすしが 食べられますか。",
          "romaji": "Sashimi ya sushi ga taberaremasu ka.",
          "en": "Can you eat sashimi and sushi?"
        },
        {
          "jp": "漢字が まだ あまり 読めません。",
          "romaji": "Kanji ga mada amari yomemasen.",
          "en": "I cannot read much kanji yet."
        }
      ]
    },
    {
      "title": "3. Direct Ability vs. Spontaneous Perception (見える vs 見られる / 聞こえる vs 聞ける)",
      "content": "Be careful to distinguish intentional ability from spontaneous natural perception:\n\n• 見える (mieru): Visible without effort (天気がいいので富士山が見えます - Mt. Fuji is visible because the weather is good).\n• 見られる (mirareru): One has the opportunity or ability to watch (日本でアニメが見られます - You can watch anime in Japan).\n\n• 聞こえる (kikoeru): Sounds naturally reach your ears (波の音が聞こえます - The sound of waves can be heard).\n• 聞ける (kikeru): Able/permitted to listen (スマホでラジオが聞けます - You can listen to the radio on a smartphone).",
      "table": null,
      "examples": [
        {
          "jp": "この 部屋から 海が 見えます。",
          "romaji": "Kono heya kara umi ga miemasu.",
          "en": "You can see the ocean from this room (spontaneous sight)."
        },
        {
          "jp": "となりの 部屋から ピアノの 音が 聞こえます。",
          "romaji": "Tonari no heya kara piano no oto ga kikoemasu.",
          "en": "I can hear piano music coming from next door."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "What is the potential form of the verb 泳ぐ (およぐ - to swim)?",
      "question": "かれは 1キロ ＿＿＿。",
      "options": [
        "泳げます",
        "泳がれます",
        "泳ぎます",
        "泳ぎれます"
      ],
      "correctAnswer": 0,
      "explanation": "泳ぐ is a Group 1 verb; the ending -gu changes to -geru (泳げる → 泳げます).",
      "romaji": "Kare wa ichi-kiro ___.",
      "romajiOptions": [
        "oyogemasu",
        "oyogaremasu",
        "oyogimasu",
        "oyogiremasu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct particle for the object with potential verbs:",
      "question": "田中さんは ピアノ＿＿＿ ひけます。",
      "options": [
        "が",
        "を",
        "に",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "In potential sentences, the target of ability is usually marked with が.",
      "romaji": "Tanaka-san wa piano ___ hikemasu.",
      "romajiOptions": [
        "ga",
        "o",
        "ni",
        "de"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I can speak a little Japanese.\"",
      "chips": [
        "わたしは",
        "にほんごが",
        "すこし",
        "はなせます。"
      ],
      "correctOrder": [
        "わたしは",
        "にほんごが",
        "すこし",
        "はなせます。"
      ],
      "explanation": "Standard order: [Subject] は [Language] が [Adverb] [Potential Verb]."
    }
  ]
};

export const lessonMeta = {
  "id": "potential-form",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Potential Form (可能形)"
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
