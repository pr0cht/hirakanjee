// JLPT N4 Lesson Module
export const lesson = {
  "id": "te-agemasu-moraimasu-kuremasu",
  "number": 1,
  "title": "JLPT N4: ～てあげます／～てもらいます／～てくれます (Giving & Receiving Actions)",
  "shortTitle": "～てあげます／もらいます／くれます",
  "category": "Giving & Receiving",
  "subtitle": "Learn how to express giving and receiving actions in Japanese — a key JLPT N4 grammar pattern.",
  "formula": "[Giver] は [Receiver] に V-て あげます / もらいます / くれます",
  "description": "Express favors and polite actions done for someone or received from someone. ~te agemasu expresses doing a favor for someone; ~te moraimasu expresses having someone do a favor for you; ~te kuremasu expresses someone doing a favor for you or your in-group.",
  "sections": [
    {
      "title": "1. The Three Giving & Receiving Verbs with V-て",
      "content": "When combined with the Te-form of verbs, あげます, もらいます, and くれます describe doing favors rather than giving physical objects.\n\n• V-て あげます: I (or someone) do an action for someone as a favor.\n• V-て もらいます: I receive the benefit of an action from someone.\n• V-て くれます: Someone kindly does an action for me (or my family/in-group).",
      "examples": [
        {
          "jp": "わたしは ともだちに にほんごを おしえてあげました。",
          "romaji": "Watashi wa tomodachi ni nihongo o oshiete agemashita.",
          "en": "I taught Japanese to my friend (as a favor)."
        },
        {
          "jp": "たなかさんに えきまで くるまで おくってもらいました。",
          "romaji": "Tanaka-san ni eki made kuruma de okutte moraimashita.",
          "en": "I had Mr. Tanaka drive me to the station."
        },
        {
          "jp": "やまださんが わたしの しゅくだいを てつだってくれました。",
          "romaji": "Yamada-san ga watashi no shukudai o tetsudatte kuremashita.",
          "en": "Ms. Yamada kindly helped me with my homework."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct verb: \"Yamada-san kindly lent me an umbrella.\"",
      "question": "山田さんが わたしに かさを かして＿＿＿。",
      "options": [
        "あげました",
        "くれました",
        "もらいました",
        "やりました"
      ],
      "correctAnswer": 1,
      "explanation": "When someone does a favor for \"me\" (わたしに), use ～てくれました.",
      "romaji": "Yamada-san ga watashi ni kasa o kashite ___.",
      "romajiOptions": [
        "agemashita",
        "kuremashita",
        "moraimashita",
        "yarimashita"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I had a friend teach me Japanese.\"",
      "chips": [
        "わたしは",
        "ともだちに",
        "にほんごを",
        "おしえて",
        "もらいました"
      ],
      "correctOrder": [
        "わたしは",
        "ともだちに",
        "にほんごを",
        "おしえて",
        "もらいました"
      ],
      "explanation": "Structure: [Subject] は [Person] に [Object] を [V-te] もらいました."
    },
    {
      "type": "multiple-choice",
      "prompt": "Doing a favor for another: \"I lent my umbrella to Tanaka-san.\"",
      "question": "私は田中さんに傘を貸して___。",
      "options": [
        "あげました",
        "くれました",
        "もらいました",
        "やりました"
      ],
      "correctAnswer": 0,
      "explanation": "When the speaker does a favor for someone else, use [Person に V-てあげました].",
      "romaji": "Watashi wa Tanaka-san ni kasa o kashite ___.",
      "romajiOptions": [
        "agemashita",
        "kuremashita",
        "moraimashita",
        "yarimashita"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"Mother knit a sweater for me\"): ",
      "sentence": "母が私にセーターを編んで___。",
      "blankWord": "くれました",
      "options": [
        "くれました",
        "あげました",
        "もらいました",
        "やりました"
      ],
      "correctAnswer": 0,
      "explanation": "When an in-group person / family member does something for me, use ～てくれました.",
      "romaji": "Haha ga watashi ni seetaa o ande ___."
    },
    {
      "type": "error-hunt",
      "prompt": "Which sentence misuses giving and receiving verbs?",
      "options": [
        "友達が私にプレゼントをくれました",
        "私は妹に宿題を教えてあげました",
        "田中さんが私に教えてもらいました",
        "私は友達に写真を撮ってもらいました"
      ],
      "correctAnswer": 2,
      "explanation": "「田中さんが私に教えてもらいました」 has mismatched particles and viewpoint. To express Tanaka teaching me, say 「田中さんが私に教えてくれました」 or 「私は田中さんに教えてもらいました」.",
      "romajiOptions": [
        "Tomodachi ga watashi ni purezento o kuremashita",
        "Watashi wa imouto ni shukudai o oshiete agemashita",
        "Tanaka-san ga watashi ni oshiete moraimashita",
        "Watashi wa tomodachi ni shashin o totte moraimashita"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "te-agemasu-moraimasu-kuremasu",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～てあげます／もらいます／くれます"
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
