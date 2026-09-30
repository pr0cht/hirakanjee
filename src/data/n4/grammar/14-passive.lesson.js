// JLPT N4 Lesson Module
export const lesson = {
  "id": "passive-ukemi",
  "number": 14,
  "title": "JLPT N4: 受身（うけみ） Passive Voice",
  "shortTitle": "受身（うけみ） Passive",
  "category": "Verb Voice",
  "subtitle": "Master the Japanese passive form to describe actions done to the subject.",
  "formula": "Group 1: -u → -areru / Group 2: -ru → -rareru / される・こられる",
  "description": "Use passive voice when the subject is acted upon by another person, or to express suffering/annoyance (meiwaku ukemi).",
  "sections": [
    {
      "title": "1. Conjugating Passive Verbs",
      "content": "• Group 1: ふむ → ふまれる (be stepped on), ほめる → ほめられる (be praised).\n• Pattern: [Victim/Receiver] は [Agent] に [Verb Passive].",
      "examples": [
        {
          "jp": "わたしは せんせいに ほめられました。",
          "romaji": "Watashi wa sensei ni homeraremashita.",
          "en": "I was praised by the teacher."
        },
        {
          "jp": "でんしゃで あしを ふまれました。",
          "romaji": "Densha de ashi o fumaremashita.",
          "en": "My foot was stepped on in the train."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the passive form: \"I was scolded by mother.\"",
      "question": "ははに ＿＿＿。",
      "options": [
        "しかりました",
        "しかられました",
        "しかせました",
        "しからせました"
      ],
      "correctAnswer": 1,
      "explanation": "しかる → しかられる (shikararemashita = was scolded).",
      "romaji": "Haha ni ___.",
      "romajiOptions": [
        "shikarimashita",
        "shikararemashita",
        "shikasemashita",
        "shikarasemashita"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with passive \"was written\":",
      "sentence": "この本は有名な作家に___。",
      "blankWord": "よって書かれました",
      "options": [
        "よって書かれました",
        "よって書きました",
        "書いてありました",
        "書かせました"
      ],
      "correctAnswer": 0,
      "explanation": "によって書かれました expresses 'was written by (a famous author)'.",
      "romaji": "Kono hon wa yuumei na sakka ni___."
    },
    {
      "type": "multiple-choice",
      "prompt": "Analyze the passive nuance in: 先生に叱られました。",
      "question": "先生に叱られました。What nuance does this passive structure carry?",
      "options": [
        "Direct neutral passive",
        "Adversarial / suffering passive (speaker is negatively affected)",
        "Agent-less spontaneous passive",
        "Honorific respect passive"
      ],
      "correctAnswer": 1,
      "explanation": "叱られる carries the nuance of annoyance/discomfort (adversarial passive/迷惑受身).",
      "romaji": "Sensei ni shikararemashita. What nuance does this carry?",
      "romajiOptions": [
        "Direct neutral passive",
        "Adversarial / suffering passive (speaker is negatively affected)",
        "Agent-less spontaneous passive",
        "Honorific respect passive"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the suffering passive sentence: \"(My) fish was eaten by the cat.\"",
      "chips": [
        "ねこに",
        "魚を",
        "食べ",
        "られました"
      ],
      "correctOrder": [
        "ねこに",
        "魚を",
        "食べ",
        "られました"
      ],
      "explanation": "Structure: [Agent に] [Victimized object を] [Verb passive]. The speaker is inconvenienced by the cat's action."
    },
    {
      "type": "multiple-choice",
      "prompt": "Who is negatively affected in: 雨に降られて、かばんが濡れた？",
      "question": "「雨に降られて、かばんが濡れた。」 Who experiences the inconvenience (suffering passive)?",
      "options": [
        "The rain",
        "The speaker",
        "The bag",
        "Nobody"
      ],
      "correctAnswer": 1,
      "explanation": "雨に降られる is the quintessential suffering passive (迷惑受身) where the speaker suffers the adversity of rain falling on them.",
      "romaji": "Ame ni furarete, kaban ga nureta. Who experiences the inconvenience?",
      "romajiOptions": [
        "The rain",
        "The speaker",
        "The bag",
        "Nobody"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "passive-ukemi",
  "jlptLevel": "N4",
  "grammarPoints": [
    "受身（うけみ） Passive"
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
