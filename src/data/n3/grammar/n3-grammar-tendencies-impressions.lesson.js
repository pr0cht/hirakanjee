// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-tendencies-impressions",
  "number": 4,
  "title": "JLPT N3 Grammar: Tendencies, Symptoms & Impressions (～気味, ～がち, ～っぽい, ～らしい)",
  "shortTitle": "Tendencies & Impressions (~気味, ~がち, ~っぽい)",
  "category": "Nuance & Impressions",
  "subtitle": "Convey subtle symptoms (~気味), negative tendencies (~がち), surface impressions (~っぽい), and typical nature (~らしい).",
  "formula": "V-stem / N + 気味 (ぎみ) • V-stem / N + がち • N / Adj-stem + っぽい • N + らしい",
  "description": "Learn the critical differences between physical/mental symptoms with ～気味, chronic habits with ～がち, casual evaluations with ～っぽい, and authentic qualities with ～らしい.",
  "sections": [
    {
      "title": "1. ～気味 (ぎみ - Slight Tendency / Feeling)",
      "content": "Attached to nouns or verb stems to express that one slightly feels a negative physiological or mental state.\n\nCommon Pairs:\n• 風邪気味 (かぜぎみ): Feeling a slight cold coming on\n• 疲れ気味 (つかれぎみ): Feeling slightly tired / worn out\n• 太り気味 (ふとりぎみ): Tending slightly towards weight gain\n• 緊張気味 (きんちょうぎみ): A bit nervous",
      "table": null,
      "examples": [
        {
          "jp": "最近残業が多くて、少し疲れ気味です。",
          "romaji": "Saikin zangyou ga ookute, sukoshi tsukaregimi desu.",
          "en": "I have been doing lots of overtime lately, so I feel slightly fatigued."
        },
        {
          "jp": "今朝から風邪気味なので、今夜は早く寝ます。",
          "romaji": "Kesa kara kazegimi na node, konya wa hayaku nemasu.",
          "en": "I've felt a cold coming on since this morning, so I'll go to bed early tonight."
        }
      ]
    },
    {
      "title": "2. ～がち vs ～っぽい vs ～らしい",
      "content": "• ～がち: Tends to happen easily and frequently (almost always negative habit or occurrence): 留守がち (often absent), 忘れがち (prone to forgetting).\n• ～っぽい: Resembles, has the feel of, or looks like (casual impression): 安っぽい (looks cheap), 子供っぽい (childish), 怒りっぽい (short-tempered).\n• ～らしい: Exhibits the true, typical, or ideal nature of that category: 男らしい (manly/chivalrous), 日本人らしい (typically Japanese in manners).",
      "table": {
        "headers": [
          "Pattern",
          "Core Characteristic",
          "Common Examples"
        ],
        "rows": [
          [
            "～がち",
            "Frequent involuntary occurrence / habit",
            "遅刻しがち, 遠慮しがち, 曇りがち"
          ],
          [
            "～っぽい",
            "Surface resemblance / casual tone",
            "油っぽい, 白っぽい, 忘れっぽい"
          ],
          [
            "～らしい",
            "Typical, model quality of the noun",
            "プロらしい, 春らしい, 先生らしい"
          ]
        ]
      },
      "examples": [
        {
          "jp": "一人暮らしを始めると、野菜が不足しがちになる。",
          "romaji": "Hitorigurashi o hajimeru to, yasai ga fusoku shigachi ni naru.",
          "en": "When you start living alone, vegetables tend to become lacking in your diet."
        },
        {
          "jp": "そんな子供っぽい嘘をついてはいけません。",
          "romaji": "Sonna kodomoppoi uso o tsuite wa ikemasen.",
          "en": "You must not tell such a childish lie."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the appropriate nuance for physical symptom:",
      "question": "今日は朝から熱があって、少し＿＿＿＿＿です。",
      "options": [
        "風邪気味",
        "風邪がち",
        "風邪っぽい",
        "風邪らしい"
      ],
      "correctAnswer": 0,
      "explanation": "風邪気味 (kazegimi) is the standard natural phrase for feeling the onset of a cold.",
      "romaji": "Kyou wa asa kara netsu ga atte, sukoshi _____ desu.",
      "romajiOptions": [
        "kazegimi",
        "kaze gachi",
        "kazeppoi",
        "kazerashii"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the pattern meaning prone to negative habit:",
      "question": "冬は運動不足に＿＿＿＿＿なので、意識して歩くようにしています。",
      "options": [
        "なりがち",
        "なり気味",
        "なるらしい",
        "なりっぽい"
      ],
      "correctAnswer": 0,
      "explanation": "なりがち means \"tends to easily become (lacking exercise)\".",
      "romaji": "Fuyu wa undoubusoku ni _____ na node, ishiki shite aruku you ni shite imasu.",
      "romajiOptions": [
        "narigachi",
        "narigimi",
        "naru rashii",
        "narippoi"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-tendencies-impressions",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Tendencies & Impressions (~気味, ~がち, ~っぽい)"
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
