// JLPT N5 Lesson Module
export const lesson = {
  "id": "special-sorry-late",
  "number": 6,
  "section": "special",
  "title": "Sorry I'm Late in Japanese: おそくなってすみません",
  "shortTitle": "Apologies & Delay Etiquette",
  "subtitle": "Master delay apologies, giving realistic excuses (trains, traffic), and apology etiquette.",
  "rules": [
    {
      "title": "The Core Apology: 遅くなって すみません",
      "formula": "おそくなって すみません (Sorry for being late / Sorry for my tardiness)",
      "explanation": "This comes from the i-adjective 遅い (おそい - late/slow). In the connective te-form, おそい becomes おそくなって (becoming late) followed by すみません (excuse me / I am sorry)."
    },
    {
      "title": "Alternative: 遅れて すみません",
      "formula": "おくれて すみません (from the verb 遅れます - おくれます)",
      "explanation": "You can also use the verb 遅れます (おくれます - to be delayed). Conjugated to te-form:「遅れて すみません」(おくれて すみません). Both are natural and polite."
    },
    {
      "title": "Giving Common Reasons for Delays",
      "formula": "[Reason / Cause] で / が + [Delay Verb]",
      "explanation": "In Japan, always state why you were delayed politely: \"でんしゃ が おくれました\" (The train was delayed), \"みち が こんで いました\" (The traffic was heavy), \"めざまし が なりませんでした\" (The alarm didn't go off)."
    },
    {
      "title": "すみません vs ごめんなさい",
      "formula": "すみません = Formal/Polite, Social situations | ごめんなさい = Personal/Casual, Close friends/Family",
      "explanation": "At work, school, or appointments, ALWAYS use すみません or しつれいしました. Reserve ごめんなさい for private apologies to family or close friends."
    }
  ],
  "tables": [
    {
      "title": "Common Delay Reasons & Phrases",
      "headers": [
        "Situation",
        "Japanese Phrase",
        "Hiragana",
        "English Meaning"
      ],
      "rows": [
        [
          "Apology",
          "遅くなってすみません",
          "おそくなってすみません",
          "Sorry I'm late"
        ],
        [
          "Apology (Verb)",
          "遅れてすみません",
          "おくれてすみません",
          "Sorry for the delay"
        ],
        [
          "Train delay",
          "電車が遅れました",
          "でんしゃがおくれました",
          "The train was delayed"
        ],
        [
          "Traffic congestion",
          "道がこんでいました",
          "みちがこんでいました",
          "The roads were congested"
        ],
        [
          "Alarm failed",
          "目覚ましが鳴りませんでした",
          "めざましがなりませんでした",
          "The alarm didn't ring"
        ],
        [
          "Lost way",
          "道に迷いました",
          "みちにまよいました",
          "I lost my way / got lost"
        ],
        [
          "Accident",
          "事故がありました",
          "じこがありました",
          "There was an accident"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "遅くなって すみません。電車 が 遅れました。",
      "romaji": "osoku natte sumimasen. densha ga okremashita.",
      "en": "Sorry I'm late. The train was delayed."
    },
    {
      "ja": "道 が こんで いて、遅れました。",
      "romaji": "michi ga konde ite, okremashita.",
      "en": "Traffic was congested, so I was delayed."
    },
    {
      "ja": "お待たせして すみません。",
      "romaji": "omataseshite sumimasen.",
      "en": "Sorry to have kept you waiting."
    },
    {
      "ja": "バス が なかなか 来ませんでした。",
      "romaji": "basu ga nakanaka kimasen deshita.",
      "en": "The bus just wouldn't come."
    }
  ],
  "quiz": [
    {
      "id": "late-q1",
      "type": "fill-blank",
      "prompt": "Choose the correct phrase for \"Sorry I am late\":",
      "options": [
        "遅くなって すみません",
        "はやく なって すみません",
        "やすんで すみません",
        "あさ に なって すみません"
      ],
      "correctAnswer": 0,
      "explanation": "「遅くなって すみません」(osoku natte sumimasen) is the standard polite phrase for \"Sorry I am late\"."
    },
    {
      "id": "late-q2",
      "type": "multiple-choice",
      "prompt": "How do you explain that \"The train was delayed\"?",
      "options": [
        "電車 が 遅れました (でんしゃ が おくれました)",
        "電車 が きました (でんしゃ が きました)",
        "電車 が とまりました (でんしゃ が とまりました)",
        "電車 が はしりました (でんしゃ が はしりました)"
      ],
      "correctAnswer": 0,
      "explanation": "「電車 が 遅れました」(densha ga okremashita) means \"The train was delayed\"."
    },
    {
      "id": "late-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"Sorry I am late. Traffic was heavy.\"",
      "targetEn": "Sorry I am late. Traffic was heavy.",
      "chips": [
        "遅くなって すみません。",
        "道 が",
        "こんで いました",
        "電車 が"
      ],
      "correctAnswerSentence": "遅くなって すみません。 道 が こんで いました",
      "explanation": "Combine the delay apology with the traffic reason."
    },
    {
      "id": "late-q4",
      "type": "audio-listening",
      "prompt": "Listen to the explanation for being late.",
      "audioText": "おそくなって すみません。でんしゃ が おくれました。",
      "options": [
        "Sorry I'm late, the train was delayed.",
        "Sorry I'm late, I was sleeping.",
        "The train arrived early.",
        "Please wait for the bus."
      ],
      "correctAnswer": 0,
      "explanation": "The speaker said「おそくなって すみません。でんしゃ が おくれました」。"
    },
    {
      "id": "late-q5",
      "type": "fill-blank",
      "prompt": "The te-form of 遅い (おそい) in \"Sorry for becoming late\" is [ ? ]:",
      "options": [
        "遅くなって (おそくなって)",
        "遅くて (おそくて)",
        "遅い (おそい)",
        "遅く (おそく)"
      ],
      "correctAnswer": 0,
      "explanation": "With the verb なります (become), おそい becomes「おそくなって」."
    },
    {
      "id": "late-q6",
      "type": "multiple-choice",
      "prompt": "What is a polite expression for \"Sorry to have kept you waiting\"?",
      "options": [
        "お待たせして すみません (おまたせして すみません)",
        "まって ください (まって ください)",
        "まっています (まっています)",
        "まちません (まちません)"
      ],
      "correctAnswer": 0,
      "explanation": "「お待たせして すみません」(omataseshite sumimasen) means \"Sorry to have kept you waiting\"."
    },
    {
      "id": "late-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"The alarm didn't ring.\"",
      "targetEn": "The alarm didn't ring.",
      "chips": [
        "目覚まし が",
        "鳴りませんでした",
        "鳴りました",
        "時計 が"
      ],
      "correctAnswerSentence": "目覚まし が 鳴りませんでした",
      "explanation": "「目覚まし が 鳴りませんでした」(mezamashi ga narimasen deshita) means the alarm didn't ring."
    },
    {
      "id": "late-q8",
      "type": "multiple-choice",
      "prompt": "Which apology is appropriate in a professional business or teacher setting?",
      "options": [
        "すみません / 失礼しました",
        "ごめん！",
        "ごめんね",
        "わるい わるい"
      ],
      "correctAnswer": 0,
      "explanation": "In professional settings, always use すみません or 失礼しました (shitsurei shimashita)."
    },
    {
      "id": "late-q9",
      "type": "error-hunt",
      "prompt": "Spot the error in the delay explanation sentence:",
      "options": [
        "道 に 迷って、遅れました。(みち に まよって、おくれました)",
        "遅くなって すみません。(おそくなって すみません)",
        "電車 が 遅れました ので、遅くなりました。",
        "早く なって すみません。遅れました。"
      ],
      "correctAnswer": 3,
      "explanation": "Sentence D says「早く なって すみません」(Sorry for becoming early), which contradicts being late!"
    },
    {
      "id": "late-q10",
      "type": "fill-blank",
      "prompt": "Complete: \"道 に [ ? ]、遅くなりました。\" (I lost my way and became late)",
      "options": [
        "迷って (まよって)",
        "いって (いって)",
        "みて (みて)",
        "のんで (のんで)"
      ],
      "correctAnswer": 0,
      "explanation": "「道 に 迷って」(michi ni mayotte) means getting lost or losing one's way."
    }
  ]
};

export const lessonMeta = {
  "id": "special-sorry-late",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Apologies & Delay Etiquette"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-special"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
