// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-tara-when-sequence",
  "number": 13,
  "title": "JLPT N4: ～たら (When / Action Sequences & Discoveries)",
  "shortTitle": "～たら (When / Sequential)",
  "category": "Time Sequences",
  "subtitle": "Master tara used to describe “when” something happens, for sequencing actions in past or future contexts.",
  "formula": "Verb [Ta-form] + ら",
  "description": "When used to describe time sequences, 〜たら expresses two essential patterns:\n1. Discovering an unexpected result in the past upon completing an action: [Action A] たら、[Result B happened].\n2. Future sequence after completion: \"Once A is done, then B will happen.\"",
  "sections": [
    {
      "title": "1. Two Key Sequences with ～たら",
      "content": "Pattern 1: Unexpected Discovery (Past Result)\n• 朝起きたら、11時でした。\n(When I woke up, it was already 11 o'clock!)\n• 朝起きてカーテンを開けたら、外は雪でした。\n(When I woke up and opened the curtains, outside was snow!)\n• この薬を飲んだら、風邪がよくなりました。\n(After taking this medicine, my cold improved.)\n\nPattern 2: Future Sequence (Once...)\n• この仕事が終わったら、帰りましょう。\n(Once this work finishes, let's go home.)\n• 駅に着いたら電話します。\n(When I arrive at the station, I will call you.)",
      "examples": [
        {
          "jp": "朝起きてカーテンを開けたら、外は雪でした。",
          "romaji": "Asa okite kaaten o aketara, soto wa yuki deshita.",
          "en": "When I woke up in the morning and opened the curtains, outside was snow."
        },
        {
          "jp": "12時になったら、お昼ご飯を食べに行きましょう。",
          "romaji": "Juu-ni-ji ni nattara, ohirugohan o tabe ni ikimashou.",
          "en": "When it becomes 12:00, let's go eat lunch."
        },
        {
          "jp": "駅に着いたら連絡してください。",
          "romaji": "Eki ni tsuitara renraku shite kudasai.",
          "en": "Please contact me when you arrive at the station."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"When I opened the curtains in the morning, outside was snow.\"",
      "question": "朝起きてカーテンを＿＿＿外は雪でした。",
      "options": [
        "開いたら",
        "開きましたら",
        "開きたら",
        "開けたら"
      ],
      "correctAnswer": 3,
      "explanation": "Transitive verb 開ける (to open): Ta-form is 開けた + ら → 開けたら.",
      "romaji": "Asa okite kaaten o ___ soto wa yuki deshita.",
      "romajiOptions": [
        "aitara",
        "akimashitara",
        "akitara",
        "aketara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"When it becomes 12:00, let's go eat lunch.\"",
      "question": "12時に＿＿＿お昼ご飯を食べに行きましょう。",
      "options": [
        "なったら",
        "なったたら",
        "なってたら",
        "なりたら"
      ],
      "correctAnswer": 0,
      "explanation": "なる (to become) has the Ta-form なった + ら → なったら.",
      "romaji": "Juu-ni-ji ni ___ ohirugohan o tabe ni ikimashou.",
      "romajiOptions": [
        "nattara",
        "nattatara",
        "nattetara",
        "naritara"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-tara-when-sequence",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～たら (When / Sequential)"
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
