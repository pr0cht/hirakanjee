// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-adjective-connective",
  "number": 8,
  "title": "JLPT N4: Adjective Connective Form (Connecting Adjectives: ～くて／～で)",
  "shortTitle": "形容詞の接続 (～くて／～で)",
  "category": "Adjective Forms",
  "subtitle": "Learn how to connect adjectives smoothly in sentences to make your Japanese sound more natural and fluent.",
  "formula": "い-adj: Drop [い] + くて | な-adj: Replace [な] with [で]",
  "description": "To link two or more adjectives together in a smooth, unified sentence without repeating です or creating disjointed sentences, convert the first adjective into its connective form (Te-form of adjectives).",
  "sections": [
    {
      "title": "1. Connective Rules for Adjectives",
      "content": "• い-adjectives: Drop [い] and add [くて]\n  - 安い → 安くて (cheap and...)\n  - 広い → 広くて (spacious and...)\n  - おいしい → おいしくて (delicious and...)\n  - いい (special!) → よくて (good and...)\n\n• な-adjectives: Replace [な/だ] with [で]\n  - 親切な → 親切で (kind and...)\n  - 元気な → 元気で (energetic and...)\n  - 静かな → 静かで (quiet and...)\n  - きれいな → きれいで (pretty/clean and...)",
      "examples": [
        {
          "jp": "この部屋は広くて、きれいです。",
          "romaji": "Kono heya wa hirokute, kirei desu.",
          "en": "This room is spacious and clean."
        },
        {
          "jp": "あのレストランは安くて、おいしいです。",
          "romaji": "Ano resutoran wa yasukute, oishii desu.",
          "en": "That restaurant is cheap and delicious."
        },
        {
          "jp": "彼はいつも元気で、おもしろい人です。",
          "romaji": "Kare wa itsumo genki de, omoshiroi hito desu.",
          "en": "He is always energetic and an interesting person."
        },
        {
          "jp": "この町は静かで、住みやすいです。",
          "romaji": "Kono machi wa shizuka de, sumiyasui desu.",
          "en": "This town is quiet and easy to live in."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct connective form: \"This room is spacious and clean.\"",
      "question": "この部屋は＿＿＿、きれいです。",
      "options": [
        "広い",
        "広いくて",
        "広いで",
        "広くて"
      ],
      "correctAnswer": 3,
      "explanation": "広い drops い and adds くて: 広くて.",
      "romaji": "Kono heya wa ___, kirei desu.",
      "romajiOptions": [
        "hiroi",
        "hiroikute",
        "hiroide",
        "hirokute"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct connective form: \"He is always energetic and an interesting person.\"",
      "question": "彼はいつも＿＿＿、おもしろい人です。",
      "options": [
        "元気で",
        "元気くて",
        "元気なで",
        "元気なくて"
      ],
      "correctAnswer": 0,
      "explanation": "元気 is a な-adjective; its connective form is 元気で.",
      "romaji": "Kare wa itsumo ___, omoshiroi hito desu.",
      "romajiOptions": [
        "genki de",
        "genkikute",
        "genki na de",
        "genki nakute"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-adjective-connective",
  "jlptLevel": "N4",
  "grammarPoints": [
    "形容詞の接続 (～くて／～で)"
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
