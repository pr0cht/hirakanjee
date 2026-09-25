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
