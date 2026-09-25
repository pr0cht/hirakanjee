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
