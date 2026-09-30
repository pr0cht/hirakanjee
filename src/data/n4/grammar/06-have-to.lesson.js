// JLPT N4 Lesson Module
export const lesson = {
  "id": "have-to-obligation",
  "number": 6,
  "title": "JLPT N4: \"have to\" (なければなりません / ないといけません)",
  "shortTitle": "なければなりません (Have to)",
  "category": "Obligation",
  "subtitle": "Learn how to express obligation in Japanese (“have to / must”) — essential for JLPT N4 grammar.",
  "formula": "V-ない (remove い) + ければなりません / ければいけません",
  "description": "Express necessity, rules, and duties. Literally \"if you do not do it, it will not do.\"",
  "sections": [
    {
      "title": "1. Expressing Obligation",
      "content": "Take the Nai-form, drop い, and add ければなりません.\n\n• いきます → いかない → いかなければなりません (Must go)\n• たべます → たべない → たべなければなりません (Must eat)",
      "examples": [
        {
          "jp": "あした びょういんへ いかなければなりません。",
          "romaji": "Ashita byouin e ikanakereba narimasen.",
          "en": "I have to go to the hospital tomorrow."
        },
        {
          "jp": "くすりを のまなければいけません。",
          "romaji": "Kusuri o nomanakereba ikemasen.",
          "en": "I must take my medicine."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Convert \"べんきょうします\" to \"have to study\":",
      "question": "まいにち ＿＿＿。",
      "options": [
        "べんきょうしてはいけません",
        "べんきょうしなければなりません",
        "べんきょうしなくてもいいです",
        "べんきょうしましょう"
      ],
      "correctAnswer": 1,
      "explanation": "べんきょうしない → べんきょうしなければなりません.",
      "romaji": "Mainichi ___.",
      "romajiOptions": [
        "benkyou shite wa ikemasen",
        "benkyou shinakereba narimasen",
        "benkyou shinakutemo ii desu",
        "benkyou shimashou"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "How do you say \"You don't have to go\"?",
      "question": "Which sentence means \"You don't have to go\"?",
      "options": [
        "行かなくてもいいです",
        "行かなければなりません",
        "行ってはいけません",
        "行きたいです"
      ],
      "correctAnswer": 0,
      "explanation": "～なくてもいいです means 'do not have to' (absence of obligation).",
      "romaji": "Which sentence means \"You don't have to go\"?",
      "romajiOptions": [
        "Ikanakutemo ii desu",
        "Ikanakereba narimasen",
        "Itte wa ikemasen",
        "Ikitai desu"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with \"must take (drink)\":",
      "sentence": "毎日薬を___なりません。",
      "blankWord": "飲まなければ",
      "options": [
        "飲まなければ",
        "飲むと",
        "飲んでも",
        "飲んだら"
      ],
      "correctAnswer": 0,
      "explanation": "飲む → 飲まない → 飲まなければなりません (must take/drink medicine).",
      "romaji": "Mainichi kusuri o ___ narimasen."
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I must go to school every day.\"",
      "chips": [
        "毎日",
        "学校に",
        "行かなければ",
        "なりません"
      ],
      "correctOrder": [
        "毎日",
        "学校に",
        "行かなければ",
        "なりません"
      ],
      "explanation": "Structure: [Frequency] [Destination に] [V-nakereba narimasen]."
    },
    {
      "type": "error-hunt",
      "prompt": "Which sentence contains an INVALID grammatical form?",
      "options": [
        "食べてはいけません",
        "食べなければいけません",
        "食べるくていいです",
        "食べなくてもいいです"
      ],
      "correctAnswer": 2,
      "explanation": "\"食べるくていいです\" is malformed. The correct pattern for 'do not have to' is Verb-なくてもいいです (食べなくてもいいです).",
      "romajiOptions": [
        "Tabete wa ikemasen",
        "Tabenakereba ikemasen",
        "Taberukute ii desu",
        "Tabenakutemo ii desu"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "have-to-obligation",
  "jlptLevel": "N4",
  "grammarPoints": [
    "なければなりません (Have to)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-core"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
