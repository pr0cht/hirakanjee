// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-ka-dou-ka-uncertainty",
  "number": 11,
  "title": "JLPT N4: ～かどうかわかりません (Indirect Questions: \"Whether or Not\")",
  "shortTitle": "～かどうかわかりません",
  "category": "Indirect Questions",
  "subtitle": "Understand how to express uncertainty or indirect statements with ka dou ka wakarimasen (“I don’t know whether…”).",
  "formula": "Plain form + かどうか わかりません / 知りません / 聞きます",
  "description": "〜かどうか embeds a yes/no question into a main sentence to express \"whether or not...\". It connects directly to the plain form of verbs, i-adjectives, na-adjectives (no だ), and nouns (no だ). When a question word like だれ or どこ is present, use plain form + か instead of かどうか.",
  "sections": [
    {
      "title": "1. Usage and Formation",
      "content": "• Verb: 来るかどうかわかりません (I don't know whether he will come or not)\n• Potential: 行けるかどうか (whether I can go or not)\n• I-adj: 天気がいいかどうか (whether the weather is good or not)\n• Na-adj / Noun: 暇かどうか / 本当かどうか (whether one is free / true)\n\nCommon verbs paired with 〜かどうか:\n- わかりません (I don't know)\n- 調べます (I will investigate / check)\n- 聞いてみます (I will ask)",
      "examples": [
        {
          "jp": "これでいいかどうかチェックしてください。",
          "romaji": "Kore de ii ka dou ka chekku shite kudasai.",
          "en": "Please check whether this is all right or not."
        },
        {
          "jp": "明日は行けるかどうかわかりません。",
          "romaji": "Ashita wa ikeru ka dou ka wakarimasen.",
          "en": "I don't know whether I will be able to go tomorrow."
        },
        {
          "jp": "来週、出張があるかどうかわかりません。",
          "romaji": "Raishuu, shucchou ga aru ka dou ka wakarimasen.",
          "en": "I don't know whether I have a business trip next week."
        },
        {
          "jp": "彼が来るかどうか知っていますか。",
          "romaji": "Kare ga kuru ka dou ka shitte imasu ka.",
          "en": "Do you know whether he is coming or not?"
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct structure: \"Please check whether this is good or not.\"",
      "question": "これで＿＿＿チェックしてください。",
      "options": [
        "いいだかどうか",
        "いいですかどうか",
        "いいかどうか",
        "いいどうか"
      ],
      "correctAnswer": 2,
      "explanation": "Attach かどうか directly to plain form: いいかどうか.",
      "romaji": "Kore de ___ chekku shite kudasai.",
      "romajiOptions": [
        "ii da ka dou ka",
        "ii desu ka dou ka",
        "ii ka dou ka",
        "ii dou ka"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct potential embedding: \"I don't know whether I can go tomorrow.\"",
      "question": "明日は＿＿＿わかりません。",
      "options": [
        "行けるかどうか",
        "行けるどうか",
        "行けますかどうか",
        "行けますどうか"
      ],
      "correctAnswer": 0,
      "explanation": "Use plain potential form 行ける + かどうか: 行けるかどうか.",
      "romaji": "Ashita wa ___ wakarimasen.",
      "romajiOptions": [
        "ikeru ka dou ka",
        "ikeru dou ka",
        "ikemasu ka dou ka",
        "ikemasu dou ka"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-ka-dou-ka-uncertainty",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～かどうかわかりません"
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
