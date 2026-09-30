// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-passive-causative",
  "number": 12,
  "title": "JLPT N3 Grammar: Intermediate Passive, Causative & Causative-Passive (受身, 使役, 使役受身)",
  "shortTitle": "Intermediate Passive & Causative",
  "category": "Voice & Transitivity",
  "subtitle": "Master complex indirect suffering passives, polite humble permission requests, and involuntary causative-passives.",
  "formula": "受身: V-(ら)れる • 使役: V-(さ)せる • 使役受身: V-(さ)せられる / される",
  "description": "Elevate your command of Japanese verbal voice to intermediate level: deciphering suffering passive (雨に降られた), respectful humble requests (～させていただきます), and involuntary coerced actions (待たされた).",
  "sections": [
    {
      "title": "1. 受身 (Passive) - Inanimate Subjects & Suffering Passive (迷惑の受身)",
      "content": "At N3, passive expands beyond direct actions to:\n1. Inanimate object subjects (formal/media reports): オリンピックは4年に1度開かれる (The Olympics are held once every four years).\n2. Suffering / Adversity Passive (迷惑の受身): The subject is distressed by another's action: 途中で雨に降られて服が濡れた (I was rained on along the way and my clothes got wet); 電車で隣の人に足を踏まれた (I had my foot stepped on by the person next to me).",
      "table": null,
      "examples": [
        {
          "jp": "出かける直前に友達に来られて、予定が狂ってしまった。",
          "romaji": "Dekakeru chokuzen ni tomodachi ni korarete, yotei ga kurutte shimatta.",
          "en": "Just before leaving, a friend dropped by on me, and my plans were disrupted."
        },
        {
          "jp": "この寺は100年以上前に建てられました。",
          "romaji": "Kono tera wa hyaku-nen ijou mae ni tateraremashita.",
          "en": "This temple was built more than 100 years ago."
        }
      ]
    },
    {
      "title": "2. 使役受身 (Causative-Passive: Coerced Action)",
      "content": "Expresses being forced to do an action against one's will, or experiencing an inevitable emotional reaction:\n\nConjugation:\n• Group 1: 書く → 書かせられる / 書かされる (Shortened form: -される)\n• Group 2: 食べる → 食べさせられる\n• Group 3: させられる, こさせられる",
      "table": {
        "headers": [
          "Verb Group",
          "Dictionary Form",
          "Causative Form",
          "Causative-Passive (Forced)"
        ],
        "rows": [
          [
            "Group 1 (五段)",
            "待つ (to wait)",
            "待たせる",
            "待たされる (forced to wait)"
          ],
          [
            "Group 1 (五段)",
            "歌う (to sing)",
            "歌わせる",
            "歌わされる (forced to sing)"
          ],
          [
            "Group 2 (一段)",
            "食べる (to eat)",
            "食べさせる",
            "食べさせられる (forced to eat)"
          ],
          [
            "Group 3 (不規則)",
            "する (to do)",
            "させる",
            "させられる (forced to do)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "カラオケで上司に無理やり歌を歌わされた。",
          "romaji": "Karaoke de joushi ni muriyari uta o utawasareta.",
          "en": "At karaoke, I was forced by my boss to sing a song against my will."
        },
        {
          "jp": "病院で2時間も待たされて、すっかり疲れてしまった。",
          "romaji": "Byouin de ni-jikan mo matasarete, sukkari tsukarete shimatta.",
          "en": "I was made to wait for two full hours at the hospital and got completely exhausted."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form for built in the past (passive):",
      "question": "これは100年以上前に＿＿＿＿＿美術館です。",
      "options": [
        "建てられた",
        "建ってられた",
        "建ちられた",
        "建ちられます"
      ],
      "correctAnswer": 0,
      "explanation": "建てる (Group 2) becomes 建てられた in the past passive form.",
      "romaji": "Kore wa hyaku-nen ijou mae ni _____ bijutsukan desu.",
      "romajiOptions": [
        "taterareta",
        "tatterareta",
        "tachirareta",
        "tachiraremosu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the causative-passive form meaning coerced to wait:",
      "question": "約束の場所で1時間も＿＿＿＿＿。",
      "options": [
        "待たされた",
        "待たせた",
        "待たれた",
        "待った"
      ],
      "correctAnswer": 0,
      "explanation": "待たされた is the causative-passive form expressing being made to wait.",
      "romaji": "Yakusoku no basho de ichi-jikan mo _____.",
      "romajiOptions": [
        "matasareta",
        "mataseta",
        "matareta",
        "matta"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-passive-causative",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Intermediate Passive & Causative"
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
