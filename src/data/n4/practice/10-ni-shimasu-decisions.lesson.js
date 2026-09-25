// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-ni-shimasu-decisions",
  "number": 10,
  "title": "JLPT N4: ～にします (Expressing Decisions & Choices)",
  "shortTitle": "～にします (~ni shimasu)",
  "category": "Decisions & Choices",
  "subtitle": "Learn how to express decisions or choices politely using ni shimasu — perfect for daily life and business settings.",
  "formula": "Noun / [Particle + Noun] + に します / に しましょう",
  "description": "〜にします expresses choosing or settling on an option from a set of alternatives. It is essential when placing orders at restaurants, scheduling meetings, choosing travel destinations, or making business agreements.",
  "sections": [
    {
      "title": "1. Daily Use Cases for ～にします",
      "content": "• Ordering food / drinks:\n  - Q: 飲み物は何にしますか。 (What will you have to drink?)\n  - A: オレンジジュースにします。 (I'll have orange juice.)\n\n• Scheduling and appointments:\n  - Q: 会議は何時からにしましょうか。 (What time shall we start the meeting?)\n  - A: 10時からにしましょう。 (Let's make it from 10:00.)",
      "examples": [
        {
          "jp": "飲み物は何にしますか。― オレンジジュースにします。",
          "romaji": "Nomimono wa nani ni shimasu ka. - Orenji juusu ni shimasu.",
          "en": "What will you have to drink? - I'll decide on orange juice."
        },
        {
          "jp": "会議は何時からにしましょうか。― 10時からにしましょう。",
          "romaji": "Kaigi wa nan-ji kara ni shimashou ka. - Juu-ji kara ni shimashou.",
          "en": "What time shall we make the meeting? - Let's make it from 10:00."
        },
        {
          "jp": "今日の昼ご飯はラーメンにします。",
          "romaji": "Kyou no hirugohan wa raamen ni shimasu.",
          "en": "I'll decide on ramen for today's lunch."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form when ordering at a restaurant: \"I will have coffee.\"",
      "question": "レストランで注文するとき：「コーヒーを＿＿＿。」",
      "options": [
        "します",
        "にします",
        "になります",
        "でします"
      ],
      "correctAnswer": 1,
      "explanation": "Noun + にします expresses choosing an option: コーヒーにします.",
      "romaji": "Resutoran de chuumon suru toki: \"Koohii o ___.\"",
      "romajiOptions": [
        "shimasu",
        "ni shimasu",
        "ni narimasu",
        "de shimasu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct particle combo: \"Let's make the meeting from 3:00.\"",
      "question": "「会議は何時にしましょうか。」「３時＿＿＿にしましょう。」",
      "options": [
        "から",
        "からに",
        "にから",
        "でに"
      ],
      "correctAnswer": 1,
      "explanation": "Time starting point + にしましょう: ３時からにしましょう.",
      "romaji": "\"Kaigi wa nan-ji ni shimashou ka.\" \"San-ji ___ ni shimashou.\"",
      "romajiOptions": [
        "kara",
        "kara ni",
        "ni kara",
        "de ni"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-ni-shimasu-decisions",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～にします (~ni shimasu)"
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
