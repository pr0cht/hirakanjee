// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-substitution-contrast",
  "number": 3,
  "title": "JLPT N3 Grammar: Substitution, Exchange & Contrast (～代わりに, ～に対して, ～反面)",
  "shortTitle": "Substitution & Contrast (代わりに, に対して, 反面)",
  "category": "Contrast & Substitution",
  "subtitle": "Express substituting one action for another, contrasting two distinct entities, and recognizing dual opposing qualities.",
  "formula": "V-辞書形 + 代わりに • N + の代わりに • N + に対して • 普通形 + 反面",
  "description": "Learn to articulate replacements with ～代わりに, sharp comparisons with ～に対して, and dual simultaneous pros/cons with ～反面.",
  "sections": [
    {
      "title": "1. ～代わりに (In Place of / In Exchange / On the Other Hand)",
      "content": "～代わりに (かわりに) has three practical applications:\n1. Replacement: 病気の部長の代わりに私が出席した (In place of the sick manager, I attended).\n2. In exchange: 日本語を教える代わりに、英語を教えてもらう (In exchange for teaching Japanese, I am taught English).\n3. Balancing contrast: この部屋は狭い代わりに、家賃がとても安い (This room is cramped, but on the other hand, the rent is very cheap).",
      "table": null,
      "examples": [
        {
          "jp": "今日は車を運転する代わりに、電車で行くことにした。",
          "romaji": "Kyou wa kuruma o unten suru kawari ni, densha de iku koto ni shita.",
          "en": "Instead of driving a car today, I decided to go by train."
        },
        {
          "jp": "日曜日に出勤する代わりに、月曜日に休みを取ります。",
          "romaji": "Nichiyoubi ni shutkin suru kawari ni, getsuyoubi ni yasumi o torimasu.",
          "en": "In exchange for working on Sunday, I take Monday off."
        }
      ]
    },
    {
      "title": "2. ～に対して (In Contrast To / Towards)",
      "content": "• Sharp Contrast: 兄は積極的なのに対して、弟は控えめだ (While older brother is proactive, younger brother is reserved).\n• Target of Action / Attitude: お客様に対して丁寧な言葉遣いをする (Use polite speech towards customers).",
      "table": null,
      "examples": [
        {
          "jp": "都市部に人口が集中しているのに対して、地方では過疎化が進んでいる。",
          "romaji": "Toshibu ni jinkou ga shuuchuu shite iru no ni taishite, chihou dewa kasoka ga susunde iru.",
          "en": "Whereas population is concentrated in urban areas, depopulation is progressing in rural areas."
        },
        {
          "jp": "先生の質問に対して、堂々と答えた。",
          "romaji": "Sensei no shitsumon ni taishite, doudou to kotaeta.",
          "en": "He answered confidently in response to the teacher's question."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct replacement expression:",
      "question": "社長の＿＿＿＿＿、副社長が会議に出席しました。",
      "options": [
        "代わりに",
        "せいで",
        "おかげで",
        "ついでに"
      ],
      "correctAnswer": 0,
      "explanation": "社長の代わりに means \"in place of / representing the president\".",
      "romaji": "Shachou no _____, fukushachou ga kaigi ni shusseki shimashita.",
      "romajiOptions": [
        "kawari ni",
        "sei de",
        "okage de",
        "tsuide ni"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the grammatical comparison:",
      "question": "父は厳格なの＿＿＿＿＿、母はとても優しい。",
      "options": [
        "に対して",
        "によって",
        "について",
        "にとって"
      ],
      "correctAnswer": 0,
      "explanation": "に対して provides a direct contrast between the strict father and gentle mother.",
      "romaji": "Chichi wa genkaku na no _____, haha wa totemo yasashii.",
      "romajiOptions": [
        "ni taishite",
        "ni yotte",
        "ni tsuite",
        "ni totte"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-substitution-contrast",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Substitution & Contrast (代わりに, に対して, 反面)"
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
