// JLPT N4 Lesson Module
export const lesson = {
  "id": "causative-shieki",
  "number": 15,
  "title": "JLPT N4: 使役（しえき）Causative Voice",
  "shortTitle": "使役（しえき）Causative",
  "category": "Verb Voice",
  "subtitle": "Study the causative form to express “make someone do / let someone do.”",
  "formula": "Group 1: -u → -aseru / Group 2: -ru → -saseru / させる・こさせる",
  "description": "Express making someone do an action (coercion) or allowing someone to do an action (permission). Pair with ～ていただく / ください to ask for permission (\"Please let me do...\").",
  "sections": [
    {
      "title": "1. Conjugating Causative Verbs",
      "content": "• Group 1: のむ → のませる (make/let drink).\n• Group 2: たべる → たべさせる (make/let eat).\n• Group 3: する → させる, くる → こさせる.",
      "examples": [
        {
          "jp": "おとうさんは こどもに やさいを たべさせました。",
          "romaji": "Otousan wa kodomo ni yasai o tabesasemashita.",
          "en": "The father made his child eat vegetables."
        },
        {
          "jp": "きょうは はやく かえらせてください。",
          "romaji": "Kyou wa hayaku kaerasete kudasai.",
          "en": "Please let me go home early today."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Which phrase means \"Please let me explain\"?",
      "question": "わたしに ＿＿＿。",
      "options": [
        "せつめいさせてください",
        "せつめいされてください",
        "せつめいしましょう",
        "せつめいしてください"
      ],
      "correctAnswer": 0,
      "explanation": "せつめいさせる (causative) + てください = \"Please let me explain\".",
      "romaji": "Watashi ni ___.",
      "romajiOptions": [
        "setsumei sasete kudasai",
        "setsumei sarete kudasai",
        "setsumei shimashou",
        "setsumei shite kudasai"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with causative \"made (them) write\":",
      "sentence": "先生は生徒に作文を___。",
      "blankWord": "書かせました",
      "options": [
        "書かせました",
        "書かれました",
        "書きました",
        "書いてもらいました"
      ],
      "correctAnswer": 0,
      "explanation": "書く → 書かせる → 書かせました (the teacher made the students write an essay).",
      "romaji": "Sensei wa seito ni sakubun o ___."
    },
    {
      "type": "multiple-choice",
      "prompt": "Analyze the core nuance of: 子供に野菜を食べさせる",
      "question": "What nuance does 「子供に野菜を食べさせる」 carry?",
      "options": [
        "Polite inquiry",
        "Permission or compulsion (making or letting them eat)",
        "Receiving a favor",
        "Refusing an offer"
      ],
      "correctAnswer": 1,
      "explanation": "The causative form (～せる/～させる) expresses either making someone do something (compulsion) or letting/permitting them to do it (permission).",
      "romaji": "Kodomo ni yasai o tabesaseru. What nuance does this carry?",
      "romajiOptions": [
        "Polite inquiry",
        "Permission or compulsion (making or letting them eat)",
        "Receiving a favor",
        "Refusing an offer"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"The mother made her child clean the room.\"",
      "chips": [
        "お母さんは",
        "子供に",
        "部屋を",
        "掃除させました"
      ],
      "correctOrder": [
        "お母さんは",
        "子供に",
        "部屋を",
        "掃除させました"
      ],
      "explanation": "Structure: [Causer は] [Causee に] [Object を] [V-causative]."
    },
    {
      "type": "multiple-choice",
      "prompt": "How does causative-passive (させられる) differ from causative (させる)?",
      "question": "How does causative-passive (させられる) differ from causative (させる)?",
      "options": [
        "The subject is the one who forces someone else in causative-passive",
        "The subject is the one who is forced/compelled to do the action",
        "Causative-passive is only used for inanimate objects",
        "There is no difference in meaning"
      ],
      "correctAnswer": 1,
      "explanation": "In causative-passive (～させられる), the grammatical subject is the person made or forced to do something against their will.",
      "romaji": "How does causative-passive differ from causative?",
      "romajiOptions": [
        "The subject is the one who forces someone else in causative-passive",
        "The subject is the one who is forced/compelled to do the action",
        "Causative-passive is only used for inanimate objects",
        "There is no difference in meaning"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "causative-shieki",
  "jlptLevel": "N4",
  "grammarPoints": [
    "使役（しえき）Causative"
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
