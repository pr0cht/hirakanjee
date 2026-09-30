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
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (contextual request before departure):",
      "sentence": "日本に行く___、お土産を買ってきて。",
      "blankWord": "なら",
      "options": [
        "なら",
        "たら",
        "と",
        "ば"
      ],
      "correctAnswer": 0,
      "explanation": "日本に行くなら、お土産を買ってきて: 'If you are going to Japan, bring back a souvenir.' (~なら applies prior to the trip).",
      "romaji": "Nihon ni iku ___, omiyage o katte kite."
    },
    {
      "type": "multiple-choice",
      "prompt": "When is ～なら uniquely preferred over other conditionals?",
      "question": "When is ～なら uniquely used compared to ～たら or ～ば?",
      "options": [
        "When the condition is always an invariable law of nature",
        "When the speaker is responding directly to information just provided by the interlocutor",
        "When the event in the main clause occurs chronologically after condition completion only",
        "When expressing an unexpected surprise in the past"
      ],
      "correctAnswer": 1,
      "explanation": "～なら takes the topic or circumstance raised by the conversational partner ('If that's what you mean/plan...') to give advice or evaluation.",
      "romaji": "When is ~nara uniquely used?",
      "romajiOptions": [
        "When the condition is always an invariable law of nature",
        "When the speaker is responding directly to information just provided by the interlocutor",
        "When the event in the main clause occurs chronologically after condition completion only",
        "When expressing an unexpected surprise in the past"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the natural response offering advice:",
      "question": "「来週パリに行くんですが…」「___、エッフェル塔に行くべきです」",
      "options": [
        "パリに行くなら",
        "行ったら",
        "行けば",
        "行くと"
      ],
      "correctAnswer": 0,
      "explanation": "Responding to someone's plans with recommendations takes [Destination + 行くなら].",
      "romaji": "\"Raishuu Pari ni iku n desu ga...\" \"___, Efferu-tou ni iku beki desu.\"",
      "romajiOptions": [
        "Pari ni iku nara",
        "Ittara",
        "Ikeba",
        "Iku to"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"If you are going to Paris, you should go to the Eiffel Tower.\"",
      "chips": [
        "パリに",
        "行くなら",
        "エッフェル塔に",
        "行くべきです"
      ],
      "correctOrder": [
        "パリに",
        "行くなら",
        "エッフェル塔に",
        "行くべきです"
      ],
      "explanation": "Structure: [Topic/Context なら] [Recommendation]."
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
