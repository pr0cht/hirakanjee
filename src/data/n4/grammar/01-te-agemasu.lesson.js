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
        0,
        1,
        2,
        3,
        4
      ],
      "explanation": "Structure: [Subject] は [Person] に [Object] を [V-te] もらいました."
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
