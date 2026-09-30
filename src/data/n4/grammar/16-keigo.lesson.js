// JLPT N4 Lesson Module
export const lesson = {
  "id": "keigo-polite",
  "number": 16,
  "title": "JLPT N4: 敬語（けいご） (Honorific & Humble Speech)",
  "shortTitle": "敬語（けいご） Keigo",
  "category": "Honorific Speech",
  "subtitle": "Learn the basics of keigo (honorific and humble speech) for polite communication.",
  "formula": "Sonkeigo (Respectful) vs Kenjougo (Humble)",
  "description": "Understand the three pillars of Japanese Keigo: Teineigo (polite です/ます), Sonkeigo (elevating the listener/superior), and Kenjougo (lowering oneself/in-group to show modesty).",
  "sections": [
    {
      "title": "1. Essential Special Keigo Verbs",
      "content": "• いく/くる/いる → Respectful: いらっしゃる / Humble: まいる (go/come), おる (be).\n• たべる/のむ → Respectful: めしあがる / Humble: いただく.\n• いう → Respectful: おっしゃる / Humble: もうす / もうしあげる.\n• みる → Respectful: ごらんになる / Humble: はいけんする.",
      "examples": [
        {
          "jp": "せんせいは もう おかえりになりました。",
          "romaji": "Sensei wa mou okaeri ni narimashita.",
          "en": "The teacher has already returned home (Sonkeigo)."
        },
        {
          "jp": "わたしが ごあんないいたします。",
          "romaji": "Watashi ga go-annai itashimasu.",
          "en": "I will guide you (Kenjougo)."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Which verb is the respectful (Sonkeigo) form of たべる?",
      "question": "しゃちょうが ひるごはんを ＿＿＿。",
      "options": [
        "いただきます",
        "めしあがります",
        "たべさせます",
        "まいります"
      ],
      "correctAnswer": 1,
      "explanation": "めしあがる is the respectful form for eating used for superiors.",
      "romaji": "Shachou ga hirugohan o ___.",
      "romajiOptions": [
        "itadakimasu",
        "meshiagarimasu",
        "tabesasemasu",
        "mairimasu"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with the respectful (Sonkeigo) form of 言いました:",
      "sentence": "先生は何を___か？",
      "blankWord": "おっしゃいました",
      "options": [
        "おっしゃいました",
        "申しました",
        "言われました",
        "話されました"
      ],
      "correctAnswer": 0,
      "explanation": "おっしゃいました is the special Sonkeigo form of 言いました (used for a superior's words).",
      "romaji": "Sensei wa nani o ___ ka?"
    },
    {
      "type": "multiple-choice",
      "prompt": "Which is the humble (Kenjougo) form of 食べる / 飲む?",
      "question": "Which is the humble (Kenjougo) form of 食べる / 飲む?",
      "options": [
        "めしあがります",
        "いただきます",
        "おっしゃいます",
        "くださいます"
      ],
      "correctAnswer": 1,
      "explanation": "いただきます is humble (Kenjougo) for eating/drinking, whereas めしあがります is honorific (Sonkeigo).",
      "romaji": "Which is the humble form of taberu / nomu?",
      "romajiOptions": [
        "Meshiagarimasu",
        "Itadakimasu",
        "Osshaimasu",
        "Kudasaimasu"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Which is the special honorific (Sonkeigo) form of する?",
      "question": "Which is the special honorific (Sonkeigo) form of する?",
      "options": [
        "いたします",
        "なさいます",
        "申します",
        "参ります"
      ],
      "correctAnswer": 1,
      "explanation": "なさる (なさいます) is the Sonkeigo form of する. いたします is the humble (Kenjougo) form.",
      "romaji": "Which is the special honorific (Sonkeigo) form of suru?",
      "romajiOptions": [
        "Itashimasu",
        "Nasaimasu",
        "Moushimasu",
        "Mairimasu"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Complete the honorific verb (いらっしゃる):",
      "sentence": "先生がいらっ___ます。",
      "blankWord": "しゃい",
      "options": [
        "しゃい",
        "さい",
        "まい",
        "たし"
      ],
      "correctAnswer": 0,
      "explanation": "いらっしゃいます is the Sonkeigo form for いる, くる, and いく.",
      "romaji": "Sensei ga iras___masu."
    },
    {
      "type": "error-hunt",
      "prompt": "Which sentence misuses Keigo by using Sonkeigo on oneself?",
      "options": [
        "先生はいらっしゃいます",
        "私はいらっしゃいます",
        "社長がおっしゃいました",
        "お客様がいらっしゃいました"
      ],
      "correctAnswer": 1,
      "explanation": "「私はいらっしゃいます」 is incorrect. A speaker cannot apply honorific respectful verbs (Sonkeigo) to themselves; humble verbs (Kenjougo: 私はおります) must be used.",
      "romajiOptions": [
        "Sensei wa irasshaimasu",
        "Watashi wa irasshaimasu",
        "Shachou ga osshaimashita",
        "Okyaku-sama ga irasshaimashita"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "keigo-polite",
  "jlptLevel": "N4",
  "grammarPoints": [
    "敬語（けいご） Keigo"
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
