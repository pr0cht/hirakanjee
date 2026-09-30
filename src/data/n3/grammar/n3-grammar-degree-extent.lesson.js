// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-degree-extent",
  "number": 7,
  "title": "JLPT N3 Grammar: Degree, Nominalized Qualities & Proportions (～さ, ～み, ～くらいなら, ～ば～ほど)",
  "shortTitle": "Degree & Proportions (~さ, ~み, ~ば~ほど)",
  "category": "Degree & Scale",
  "subtitle": "Measure objective vs emotional qualities (~さ vs ~み), express extreme preferences (~くらいなら), and describe proportional growth (~ば~ほど).",
  "formula": "いAdj-語幹 + さ/み • V-辞書形 + くらいなら • V-ば + V-辞書形 + ほど",
  "description": "Transform adjectives into objective scales with ～さ or emotional depth with ～み, reject distasteful options with ～くらいなら, and express proportional increases with ～ば～ほど.",
  "sections": [
    {
      "title": "1. ～さ (Objective Measurement) vs ～み (Emotional / Subjective State)",
      "content": "Nominalizing suffixes attached to adjective stems:\n\n• ～さ: Expresses measurable degree, scale, or objective fact: 高さ (height in meters), 深さ (depth), 重さ (weight), 正確さ (accuracy).\n• ～み: Expresses emotional flavor, feeling, physical texture, or state: 温かみ (warmth of character), 悲しみ (sorrow), 苦しみ (pain), 重み (gravity/weight of words).",
      "table": {
        "headers": [
          "Root Adjective",
          "with ～さ (Objective Scale)",
          "with ～み (Subjective/Emotional Depth)"
        ],
        "rows": [
          [
            "高い (High)",
            "高さ (height: 3,776m)",
            "高み (higher perspective/heights)"
          ],
          [
            "温かい (Warm)",
            "温かさ (temperature degree)",
            "温かみ (human warmth / kindness)"
          ],
          [
            "重い (Heavy)",
            "重さ (weight in kilograms)",
            "重み (gravitas / psychological weight)"
          ],
          [
            "深い (Deep)",
            "深さ (depth in meters)",
            "深み (depth of flavor/art/emotion)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "富士山の高さは3776メートルです。",
          "romaji": "Fujisan no takasa wa sanzen nanahyaku nanajuuroku meetoru desu.",
          "en": "The height of Mount Fuji is 3,776 meters."
        },
        {
          "jp": "彼の言葉には、長い人生経験に裏打ちされた重みがある。",
          "romaji": "Kare no kotoba ni wa, nagai jinsei keiken ni urauchisareta omomi ga aru.",
          "en": "His words possess a gravitas backed by long life experience."
        }
      ]
    },
    {
      "title": "2. ～ば～ほど (Proportional Increase) & ～くらいなら (Rather Than)",
      "content": "• ～ば～ほど: \"The more X, the more Y happens\": 勉強すればするほど、日本語が面白くなる (The more I study, the more interesting Japanese becomes).\n• ～くらいなら: Strongly rejects an intolerable condition (\"If it comes to X, I'd rather Y\"): 嘘をつくくらいなら、本当のことを言って怒られた方がいい (Rather than telling a lie, I'd rather tell the truth and get scolded).",
      "table": null,
      "examples": [
        {
          "jp": "本は読めば読むほど、新しい知識が得られる。",
          "romaji": "Hon wa yomeba yomu hodo, atarashii chishiki ga erareru.",
          "en": "The more books you read, the more new knowledge you gain."
        },
        {
          "jp": "彼に頭を下げて頼むくらいなら、自分で失敗した方がましだ。",
          "romaji": "Kare ni atama o sagete tanomu kurai nara, jibun de shippai shita hou ga mashi da.",
          "en": "Rather than bowing my head and begging him, I'd prefer to fail on my own."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the proportional construction:",
      "question": "外国語は練習＿＿＿＿＿、上手に話せるようになる。",
      "options": [
        "すればするほど",
        "するついでに",
        "する代わりに",
        "するばかりに"
      ],
      "correctAnswer": 0,
      "explanation": "練習すればするほど expresses \"the more you practice, the better you speak\".",
      "romaji": "Gaikokugo wa renshuu _____, jouzu ni hanaseru you ni naru.",
      "romajiOptions": [
        "sureba suru hodo",
        "suru tsuide ni",
        "suru kawari ni",
        "suru bakari ni"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the noun with emotional warmth:",
      "question": "木造の家は、どこか人の＿＿＿＿＿を感じさせる。",
      "options": [
        "温かみ",
        "温かさ",
        "温かい",
        "温かく"
      ],
      "correctAnswer": 0,
      "explanation": "温かみ expresses emotional and aesthetic warmth of atmosphere/person.",
      "romaji": "Mokuzou no ie wa, dokoka hito no _____ o kanjisaseru.",
      "romajiOptions": [
        "atatakami",
        "atatakasa",
        "atatakai",
        "atatakaku"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-degree-extent",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Degree & Proportions (~さ, ~み, ~ば~ほど)"
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
