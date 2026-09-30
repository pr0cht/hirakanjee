// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-indefinite-pronouns",
  "number": 1,
  "title": "JLPT N4: 何か／どこか／だれか／いつか (Indefinite Pronouns)",
  "shortTitle": "何か／どこか／だれか／いつか",
  "category": "Indefinite Pronouns",
  "subtitle": "Practice the JLPT N4 grammar set for indefinite pronouns: something, somewhere, someone, sometime — includes example sentences and quiz items.",
  "formula": "Question Word + か (+ Particle)",
  "description": "Combining question words with the particle か creates indefinite pronouns: 何か (nanika - something/anything), どこか (dokoka - somewhere/anywhere), だれか (dareka - someone/anyone), and いつか (itsuka - sometime/someday). In questions and affirmative statements, particles like を and が are often omitted after 何か, while directional particles like に/へ can optionally follow どこか.",
  "sections": [
    {
      "title": "1. The 4 Essential Indefinite Pronouns",
      "content": "• 何か (なにか / nanika): something, anything\n• どこか (どこか / dokoka): somewhere, anywhere\n• だれか (だれか / dareka): someone, anyone\n• いつか (いつか / itsuka): sometime, someday\n\nParticles Note:\n- 何か(を) 飲みますか。 (Particle を is frequently dropped)\n- どこか(へ/に) 行きましたか。 (Particles に/へ are optional)\n- だれか(が) 手伝ってください。 (Someone please help)",
      "examples": [
        {
          "jp": "何か飲みますか。",
          "romaji": "Nanika nomimasu ka.",
          "en": "Would you like something to drink?"
        },
        {
          "jp": "週末はどこかに行きましたか。",
          "romaji": "Shuumatsu wa dokoka ni ikimashita ka.",
          "en": "Did you go somewhere over the weekend?"
        },
        {
          "jp": "だれか手伝ってください。",
          "romaji": "Dareka tetsudatte kudasai.",
          "en": "Someone please help me."
        },
        {
          "jp": "いつか富士山に登りたいです。",
          "romaji": "Itsuka Fujisan ni noboritai desu.",
          "en": "I want to climb Mount Fuji someday."
        }
      ]
    },
    {
      "title": "2. Indefinite vs. Negative (〜も)",
      "content": "Compare with the negative counterpart formed with も:\n• 何か (something) vs 何も〜ない (nothing)\n• どこか (somewhere) vs どこも〜ない (nowhere)\n• だれか (someone) vs だれも〜ない (no one)\n• いつか (sometime) vs いつも (always)",
      "examples": [
        {
          "jp": "かばんの中に何がありますか。― 何もありません。",
          "romaji": "Kaban no naka ni nani ga arimasu ka. - Nani mo arimasen.",
          "en": "What is inside the bag? - There is nothing."
        },
        {
          "jp": "昨日はどこにも行きませんでした。",
          "romaji": "Kinou wa doko ni mo ikimasen deshita.",
          "en": "Yesterday I did not go anywhere."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct word: \"Are you going somewhere tomorrow?\"",
      "question": "明日は＿＿＿に行きますか。",
      "options": [
        "いつか",
        "だれか",
        "どこか",
        "なにか"
      ],
      "correctAnswer": 2,
      "explanation": "どこか means \"somewhere\". With に行きますか, it asks if you are going somewhere.",
      "romaji": "Ashita wa ___ ni ikimasu ka.",
      "romajiOptions": [
        "itsuka",
        "dareka",
        "dokoka",
        "nanika"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct word: \"I would like to go to Japan someday.\"",
      "question": "私は＿＿＿日本に行きたいと思っています。",
      "options": [
        "どこか",
        "いつか",
        "なにか",
        "だれか"
      ],
      "correctAnswer": 1,
      "explanation": "いつか means \"sometime\" or \"someday\".",
      "romaji": "Watashi wa ___ Nihon ni ikitai to omotte imasu.",
      "romajiOptions": [
        "dokoka",
        "itsuka",
        "nanika",
        "dareka"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Someone please help me.\"",
      "chips": [
        "だれか",
        "しゅくだいを",
        "てつだって",
        "ください"
      ],
      "correctOrder": [
        "だれか",
        "しゅくだいを",
        "てつだって",
        "ください"
      ],
      "explanation": "だれか (someone) + 宿題を (homework) + 手伝って (help) + ください (please)."
    }
  ]
};

export const lessonMeta = {
  "id": "n4-indefinite-pronouns",
  "jlptLevel": "N4",
  "grammarPoints": [
    "何か／どこか／だれか／いつか"
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
