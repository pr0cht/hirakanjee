// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-noni-contrast",
  "number": 6,
  "title": "JLPT N4: ～のに (Unexpected Contrast / Even Though)",
  "shortTitle": "～のに (~noni)",
  "category": "Contrasts & Paradoxes",
  "subtitle": "Master the usage of noni to express unexpected contrasts, an essential pattern for JLPT N4 learners.",
  "formula": "Plain form + のに (Na-adj / Noun: な + のに)",
  "description": "〜のに expresses unexpected contrast (\"in spite of\", \"even though\", \"despite\"). The result in the second clause goes against what naturally would be expected based on the first clause. Unlike the neutral connector 〜が/〜けれど, 〜のに often conveys the speaker's surprise, disbelief, frustration, or disappointment.",
  "sections": [
    {
      "title": "1. Formation of ～のに",
      "content": "• Verb: 勉強したのに / 勉強しなかったのに\n• I-adj: 忙しいのに / 寒かったのに\n• Na-adj / Noun: 休み「な」のに / 日曜日「な」のに (Requires な before のに!)\n\nNuance Tip:\n〜のに conveys emotional friction. (e.g. 薬を飲んだのに、治りません = Even though I took medicine, I haven't recovered.)",
      "examples": [
        {
          "jp": "勉強しなかったのに、テストは100点でした。",
          "romaji": "Benkyou shinakatta noni, tesuto wa hyaku-ten deshita.",
          "en": "Even though I didn't study, I got 100 points on the test!"
        },
        {
          "jp": "一生懸命勉強したのに、テストは50点でした。",
          "romaji": "Isshoukenmei benkyou shita noni, tesuto wa gojuu-ten deshita.",
          "en": "Even though I studied with all my might, my score was only 50 points."
        },
        {
          "jp": "明日は日曜日なのに、会社に行かなければなりません。",
          "romaji": "Ashita wa nichiyoubi na noni, kaisha ni ikanakereba narimasen.",
          "en": "Even though tomorrow is Sunday, I have to go to work."
        },
        {
          "jp": "春なのに、今日はとても寒いです。",
          "romaji": "Haru na noni, kyou wa totemo samui desu.",
          "en": "Even though it is spring, today is very cold."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct connection: \"Even though tomorrow is Sunday, I must go to the office.\"",
      "question": "明日は＿＿＿のに会社に行かなければなりません。",
      "options": [
        "日曜日",
        "日曜だ",
        "日曜日だな",
        "日曜日な"
      ],
      "correctAnswer": 3,
      "explanation": "Nouns and な-adjectives take な before のに: 日曜日なのに.",
      "romaji": "Ashita wa ___ noni kaisha ni ikanakereba narimasen.",
      "romajiOptions": [
        "nichiyoubi",
        "nichiyou da",
        "nichiyoubi da na",
        "nichiyoubi na"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"Even though it was nice weather in the morning, it's raining this afternoon.\"",
      "question": "午前中はいい＿＿＿のに午後は雨が降っています。",
      "options": [
        "天気",
        "天気だ",
        "天気だった",
        "天気な"
      ],
      "correctAnswer": 2,
      "explanation": "Past state for nouns before のに is だった: 午前中はいい天気だったのに.",
      "romaji": "Gozenchuu wa ii ___ noni gogo wa ame ga futte imasu.",
      "romajiOptions": [
        "tenki",
        "tenki da",
        "tenki datta",
        "tenki na"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-noni-contrast",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～のに (~noni)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-practice"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
