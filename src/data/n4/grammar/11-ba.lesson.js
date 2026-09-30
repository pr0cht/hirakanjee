// JLPT N4 Lesson Module
export const lesson = {
  "id": "ba-conditional",
  "number": 11,
  "title": "JLPT N4: ～ば (Conditional Form & Differences from ～たら)",
  "shortTitle": "～ば (~ba)",
  "category": "Conditionals",
  "subtitle": "Learn another conditional form ～ば and its differences from ～たら.",
  "formula": "Group 1: -u → -eba / Group 2: -ru → -reba / I-adj: -kereba",
  "description": "A formal conditional focusing on general conditions, cause-effect hypotheses, and proverbs (\"If X happens, Y naturally occurs\"). Cannot be used for past one-time events.",
  "sections": [
    {
      "title": "1. Conjugating the Ba-form",
      "content": "• かく → かけば\n• たべる → たべれば\n• する → すれば / くる → くれば\n• やすい → やすければ",
      "examples": [
        {
          "jp": "やすければ、かいます。",
          "romaji": "Yasukereba, kaimasu.",
          "en": "If it is cheap, I will buy it."
        },
        {
          "jp": "べんきょうすれば、ごうかくできます。",
          "romaji": "Benkyou sureba, goukaku dekimasu.",
          "en": "If you study, you can pass."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "What is the Ba-form of いく (to go)?",
      "question": "＿＿＿、わかります。",
      "options": [
        "いけば",
        "いったら",
        "いくば",
        "いきれば"
      ],
      "correctAnswer": 0,
      "explanation": "いく (Group 1) changes u to eba: いけば.",
      "romaji": "___, wakarimasu.",
      "romajiOptions": [
        "ikeba",
        "ittara",
        "ikuba",
        "ikireba"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with the i-adjective ば-form:",
      "sentence": "安け___、買います。",
      "blankWord": "れば",
      "options": [
        "れば",
        "たら",
        "なら",
        "と"
      ],
      "correctAnswer": 0,
      "explanation": "安い (drop い) + ければ: 安ければ (if it is cheap).",
      "romaji": "Yasuke___, kaimasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct conditional form for \"if you practice\":",
      "question": "もっと練習すれ___上手になる。",
      "options": [
        "ば",
        "たら",
        "と",
        "なら"
      ],
      "correctAnswer": 0,
      "explanation": "練習する → 練習すれば (Group 3 verb ば-form).",
      "romaji": "Motto renshuu sure___ jouzu ni naru.",
      "romajiOptions": [
        "ba",
        "tara",
        "to",
        "nara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "When the main clause has action verbs, ～ば CANNOT generally be used if the result clause contains:",
      "question": "～ば cannot be used if both clauses share the same volitional agent and the result is:",
      "options": [
        "The speaker's wish/volition/request",
        "A natural law",
        "A predictable outcome",
        "A general truth"
      ],
      "correctAnswer": 0,
      "explanation": "If the condition verb is volitional (e.g. going), ～ば cannot be followed by speaker requests/wishes (use ～たら instead).",
      "romaji": "~ba cannot be used if the result clause expresses speaker volition/wish when subjects are volitional.",
      "romajiOptions": [
        "The speaker's wish/volition/request",
        "A natural law",
        "A predictable outcome",
        "A general truth"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"If I have time, I want to go to Japan.\"",
      "chips": [
        "時間が",
        "あれば",
        "日本に",
        "行きたいです"
      ],
      "correctOrder": [
        "時間が",
        "あれば",
        "日本に",
        "行きたいです"
      ],
      "explanation": "ある is a non-volitional state verb, so [時間があれば] can be followed by [行きたいです]."
    }
  ]
};

export const lessonMeta = {
  "id": "ba-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～ば (~ba)"
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
