// JLPT N4 Lesson Module
export const lesson = {
  "id": "nara-conditional",
  "number": 13,
  "title": "JLPT N4: ～なら (Contextual Advice & Suggestions)",
  "shortTitle": "～なら (~nara)",
  "category": "Conditionals & Advice",
  "subtitle": "Learn how to use ～なら to offer advice or suggestions in Japanese.",
  "formula": "Noun / Plain form + なら",
  "description": "Use ～なら (\"If it is the case that...\") when responding to what the other person just said, or providing a targeted recommendation on a specific topic.",
  "sections": [
    {
      "title": "1. Giving Suggestions with なら",
      "content": "When someone mentions an idea (e.g. \"I want to eat sushi\"), you pick up their topic using なら: \"If it’s sushi you want, that shop is the best!\"",
      "examples": [
        {
          "jp": "にほんへ いくなら、きょうとが おすすめです。",
          "romaji": "Nihon e iku nara, Kyouto ga osusume desu.",
          "en": "If you are going to Japan, Kyoto is recommended."
        },
        {
          "jp": "カメラなら、あきはばらで かうと いいですよ。",
          "romaji": "Kamera nara, Akihabara de kau to ii desu yo.",
          "en": "If it’s cameras (you want), it’s good to buy them in Akihabara."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the contextual conditional: \"If it’s Japanese food...\"",
      "question": "にほんりょうり＿＿＿、すしが いちばんです。",
      "options": [
        "なら",
        "たら",
        "と",
        "ば"
      ],
      "correctAnswer": 0,
      "explanation": "Topic advice uses Noun + なら.",
      "romaji": "Nihon ryouri ___, sushi ga ichiban desu.",
      "romajiOptions": [
        "nara",
        "tara",
        "to",
        "ba"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "nara-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～なら (~nara)"
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
