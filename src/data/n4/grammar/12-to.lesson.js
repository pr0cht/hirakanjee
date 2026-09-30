// JLPT N4 Lesson Module
export const lesson = {
  "id": "to-conditional",
  "number": 12,
  "title": "JLPT N4: ～と (Natural & Habitual Results)",
  "shortTitle": "～と (~to)",
  "category": "Conditionals",
  "subtitle": "Understand how to describe natural or habitual results using ～と.",
  "formula": "Dictionary form + と",
  "description": "Expresses automatic, natural consequences, directions, and machine operations (\"Whenever X happens, Y inevitably follows\"). Cannot have requests or invitations in the second clause.",
  "sections": [
    {
      "title": "1. Inevitable Consequences with ～と",
      "content": "Used for:\n1. Machine operations: ボタンを おすと、きっぷが でます。(Press button → ticket comes out).\n2. Directions: まっすぐ いくと、みぎに あります。(Go straight → it is on the right).\n3. Natural laws: はるに なると、さくらが さきます。(When spring comes → cherry blossoms bloom).",
      "examples": [
        {
          "jp": "この ボタンを おすと、ドアが あきます。",
          "romaji": "Kono botan o osu to, doa ga akimasu.",
          "en": "When you press this button, the door opens."
        },
        {
          "jp": "はるに なると、あたたかくなります。",
          "romaji": "Haru ni naru to, atatakaku narimasu.",
          "en": "When spring comes, it becomes warm."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the connector: \"Turn right, and you will see the station.\"",
      "question": "みぎへ まがる＿＿＿、えきが あります。",
      "options": [
        "と",
        "たら",
        "なら",
        "ば"
      ],
      "correctAnswer": 0,
      "explanation": "Giving physical directions uses Dictionary form + と.",
      "romaji": "Migi e magaru ___, eki ga arimasu.",
      "romajiOptions": [
        "to",
        "tara",
        "nara",
        "ba"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (natural consequence):",
      "sentence": "春になる___、花が咲きます。",
      "blankWord": "と",
      "options": [
        "と",
        "ても",
        "のに",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "春になると、花が咲きます: Natural and inevitable outcome (When spring comes, flowers bloom).",
      "romaji": "Haru ni naru ___, hana ga sakimasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the best conditional for geographic directions:",
      "question": "右に曲がる___、郵便局があります。",
      "options": [
        "と",
        "ば",
        "たら",
        "なら"
      ],
      "correctAnswer": 0,
      "explanation": "Directions describing inevitable findings routinely use Dictionary form + と.",
      "romaji": "Migi ni magaru ___, yuubinkyoku ga arimasu.",
      "romajiOptions": [
        "to",
        "ba",
        "tara",
        "nara"
      ]
    },
    {
      "type": "error-hunt",
      "prompt": "Which sentence misuses the ～と conditional?",
      "options": [
        "雨が降ると、洪水になる",
        "もっと練習すると上手になってください",
        "ボタンを押すと画面が変わる",
        "春になると暖かくなる"
      ],
      "correctAnswer": 1,
      "explanation": "～と cannot be followed by a request, command, or invitation (～てください). Use ～たら instead.",
      "romajiOptions": [
        "Ame ga furu to, kouzui ni naru",
        "Motto renshuu suru to jouzu ni natte kudasai",
        "Botan o osu to gamen ga kawaru",
        "Haru ni naru to atatakaku naru"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"When you push this button, the door opens.\"",
      "chips": [
        "このボタンを",
        "押す",
        "と",
        "ドアが",
        "開きます"
      ],
      "correctOrder": [
        "このボタンを",
        "押す",
        "と",
        "ドアが",
        "開きます"
      ],
      "explanation": "Structure: [Action: Dictionary Form] と [Automatic Consequence]."
    }
  ]
};

export const lessonMeta = {
  "id": "to-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～と (~to)"
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
