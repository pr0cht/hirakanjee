// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-koto-ga-dekimasu",
  "number": 3,
  "title": "JLPT N4: ～ことができます (Ability & Possibility)",
  "shortTitle": "～ことができます",
  "category": "Potential & Ability",
  "subtitle": "Master the phrase ～ことができます (can do …) for JLPT N4: practice forms and usage in context.",
  "formula": "Verb [Dictionary Form] + ことができます / できません",
  "description": "Attaching ことができます to a dictionary-form verb nominalizes the action and expresses either personal ability (I know how to...) or external possibility (it is permitted/possible to...). It is grammatically equivalent to the potential form (可能形), but carries a more structured, explicit tone.",
  "sections": [
    {
      "title": "1. Expressing What You Can and Cannot Do",
      "content": "• Verb [辞書形] + ことができます = Can do / Able to do\n• Verb [辞書形] + ことができません = Cannot do / Unable to do\n• Verb [辞書形] + ことができました = Was able to do (past capability / achievement)",
      "examples": [
        {
          "jp": "日本語を話すことができます。",
          "romaji": "Nihongo o hanasu koto ga dekimasu.",
          "en": "I can speak Japanese."
        },
        {
          "jp": "漢字を読むことができません。",
          "romaji": "Kanji o yomu koto ga dekimasen.",
          "en": "I cannot read kanji."
        },
        {
          "jp": "明日は仕事があるので、行くことができません。",
          "romaji": "Ashita wa shigoto ga aru node, iku koto ga dekimasen.",
          "en": "Because I have work tomorrow, I cannot go."
        },
        {
          "jp": "ネットでチケットを予約することができました。",
          "romaji": "Netto de chiketto o yoyaku suru koto ga dekimashita.",
          "en": "I was able to reserve the ticket online."
        }
      ]
    },
    {
      "title": "2. Comparison with Potential Form (可能形)",
      "content": "• 話すことができます ＝ 話せます (Both mean \"can speak\")\n• 食べることができます ＝ 食べられます (Both mean \"can eat\")\nIn everyday casual and spoken conversations, the potential form is very common, while 〜ことができます is especially useful for compound verbs or formal announcements.",
      "examples": [
        {
          "jp": "ここではクレジットカードを使うことができます。",
          "romaji": "Koko de wa kurejitto kaado o tsukau koto ga dekimasu.",
          "en": "You can use credit cards here."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"I can drive a car.\"",
      "question": "わたしは 車を＿＿＿ことができます。",
      "options": [
        "運転する",
        "運転して",
        "運転した",
        "運転します"
      ],
      "correctAnswer": 0,
      "explanation": "Before ことができます, always use the dictionary form: 運転する.",
      "romaji": "Watashi wa kuruma o ___ koto ga dekimasu.",
      "romajiOptions": [
        "unten suru",
        "unten shite",
        "unten shita",
        "unten shimasu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the appropriate response: \"Can you come to tomorrow's party?\"",
      "question": "「あしたのパーティーに来られますか。」「すみません、あしたは＿＿＿。」",
      "options": [
        "行くことができません",
        "行かないことができます",
        "行くことがあり",
        "行きました"
      ],
      "correctAnswer": 0,
      "explanation": "Expressing inability to attend: 行くことができません (I cannot go).",
      "romaji": "\"Ashita no paatii ni koraremasu ka.\" \"Sumimasen, ashita wa ___.\"",
      "romajiOptions": [
        "iku koto ga dekimasen",
        "ikanai koto ga dekimasu",
        "iku koto ga ari",
        "ikimashita"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I can speak Japanese well.\"",
      "chips": [
        "日本語を",
        "上手に",
        "話すことが",
        "できます"
      ],
      "correctOrder": [
        "日本語を",
        "上手に",
        "話すことが",
        "できます"
      ],
      "explanation": "日本語を (Japanese) + 上手に (skillfully) + 話すことが (to speak) + できます (can)."
    }
  ]
};

export const lessonMeta = {
  "id": "n4-koto-ga-dekimasu",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～ことができます"
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
