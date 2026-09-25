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
