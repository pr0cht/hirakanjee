// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-limitation-emphasis",
  "number": 5,
  "title": "JLPT N3 Grammar: Limitation, Exclusivity & Strong Emphasis (～きり, ～しかない, ～さえ～ば, ～こそ)",
  "shortTitle": "Limitation & Emphasis (~きり, ~しかない, ~さえ~ば)",
  "category": "Limitation & Focus",
  "subtitle": "Express absolute limitations, having no alternative choice, minimum required conditions, and emphatic certainty.",
  "formula": "V-た + きり • V-辞書形 + しかない • N + さえ + V-ば • N + こそ",
  "description": "Master crucial restrictive and emphatic intermediate grammar: ～きり (only once/just), ～しかない (no alternative but), ～さえ～ば (if only / as long as), and ～こそ (precisely / definitely).",
  "sections": [
    {
      "title": "1. ～きり・～たきり (Just / Never Again Since)",
      "content": "Two essential nuances:\n1. With numbers / quantity: Means \"only\" (二人きりで話したい - I want to talk with just the two of us).\n2. With V-たきり: An action occurred once in the past, and the expected follow-up state never happened (今朝出かけたきり、まだ帰ってこない - Left this morning and hasn't returned since).",
      "table": null,
      "examples": [
        {
          "jp": "彼と話したのは、去年の夏に一度会ったきりです。",
          "romaji": "Kare to hanashita no wa, kyonen no natsu ni ichido atta kiri desu.",
          "en": "The last time I talked with him was just once when we met last summer."
        },
        {
          "jp": "今朝コップ一杯の牛乳を飲んだきりで、何も食べていない。",
          "romaji": "Kesa koppu ippai no gyuunyuu o nonda kiri de, nani mo tabete inai.",
          "en": "I drank only a single glass of milk this morning, and haven't eaten anything since."
        }
      ]
    },
    {
      "title": "2. ～しかない & ～さえ～ば",
      "content": "• ～しかない: Expresses having no alternative choice; you have no option but to do X: 電車が止まったから、歩くしかない (The train stopped, so there is no choice but to walk).\n• ～さえ～ば: Expresses that satisfying a single minimal condition is sufficient for the desired result: 体さえ健康なら、何でもできる (As long as one has health, one can do anything).",
      "table": null,
      "examples": [
        {
          "jp": "誰も手伝ってくれないなら、自分でやるしかない。",
          "romaji": "Dare mo tetsudatte kurenai nara, jibun de yaru shikanai.",
          "en": "If no one helps me, I have no choice but to do it myself."
        },
        {
          "jp": "パスポートとチケットさえあれば、旅行に行けます。",
          "romaji": "Pasupooto to chiketto sae areba, ryokou ni ikemasu.",
          "en": "As long as you have your passport and ticket, you can travel."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form for having no other option:",
      "question": "終電に乗り遅れたので、タクシーで帰る＿＿＿＿＿。",
      "options": [
        "しかない",
        "きりだ",
        "べきだ",
        "はずだ"
      ],
      "correctAnswer": 0,
      "explanation": "タクシーで帰るしかない means \"have no choice but to return by taxi\".",
      "romaji": "Shuuden ni noriokureta node, takushii de kaeru _____.",
      "romajiOptions": [
        "shikanai",
        "kiri da",
        "beki da",
        "hazu da"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the conditional requirement for \"if only\":",
      "question": "時間＿＿＿＿＿あれば、もっと日本語を勉強したい。",
      "options": [
        "さえ",
        "こそ",
        "ばかり",
        "だけ"
      ],
      "correctAnswer": 0,
      "explanation": "時間さえあれば forms the pattern ～さえ～ば (\"if only I had time\").",
      "romaji": "Jikan _____ areba, motto nihongo o benkyou shitai.",
      "romajiOptions": [
        "sae",
        "koso",
        "bakari",
        "dake"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-limitation-emphasis",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Limitation & Emphasis (~きり, ~しかない, ~さえ~ば)"
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
