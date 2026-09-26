// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-give-receive",
  "number": 5,
  "section": "verbs",
  "title": "Japanese Give/Receive: Agemasu, Moraimasu, Kuremasu",
  "shortTitle": "Give & Receive",
  "subtitle": "Master the directional perspective of giving (あげます), receiving (もらいます), and being given to (くれます).",
  "rules": [
    {
      "title": "The 3 Benefactive Verbs of Giving & Receiving",
      "formula": "あげます (Give to other) | もらいます (Receive from someone) | くれます (Someone gives to ME)",
      "explanation": "Japanese giving verbs are perspective-dependent: あげます is used when the speaker gives outward. もらいます is used when the speaker receives inward. くれます is used when someone gives inward directly to the speaker (or the speaker's in-group)."
    },
    {
      "title": "Particle Patterns for Giving & Receiving",
      "formula": "Giving: [Giver] は [Recipient] に [Object] を あげます / くれます | Receiving: [Recipient] は [Giver] に/から [Object] を もらいます",
      "explanation": "For あげます and くれます, the recipient receives に. For もらいます, the person you receive from can be marked by に or から (from)."
    },
    {
      "title": "Crucial Difference: あげます vs くれます",
      "formula": "Speaker -> Other = あげます | Other -> Speaker = くれます (Never あげます!)",
      "explanation": "You can NEVER say \"たなかさん は わたし に プレゼント を あげました\". When someone gives to YOU, you MUST use くれます: \"たなかさん は わたし に プレゼント を くれました\"."
    }
  ],
  "tables": [
    {
      "title": "Giving & Receiving Perspective Matrix",
      "headers": [
        "Verb",
        "Direction of Action",
        "Sentence Structure",
        "Example"
      ],
      "rows": [
        [
          "あげます",
          "Speaker -> Other",
          "[Speaker] は [Other] に [Thing] を あげます",
          "わたし は ともだち に ほん を あげました。"
        ],
        [
          "もらいます",
          "Other -> Speaker (Receive)",
          "[Speaker] は [Other] に/から [Thing] を もらいます",
          "わたし は はは に はな を もらいました。"
        ],
        [
          "くれます",
          "Other -> Speaker (Give to me)",
          "[Other] は [Speaker] に [Thing] を くれます",
          "ともだち が わたし に チョコ を くれました。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "わたし は たなかさん に プレゼント を あげました。",
      "romaji": "watashi wa tanaka-san ni purezento o agemashita.",
      "en": "I gave a present to Mr. Tanaka."
    },
    {
      "ja": "たんじょうび に ちち に とけい を もらいました。",
      "romaji": "tanjoubi ni chichi ni tokei o moraimashita.",
      "en": "I received a watch from my father on my birthday."
    },
    {
      "ja": "せんせい が わたし に じしょ を くれました。",
      "romaji": "sensei ga watashi ni jisho o kuremashita.",
      "en": "The teacher gave me a dictionary."
    },
    {
      "ja": "だれ に その かばん を もらいました か？",
      "romaji": "dare ni sono kaban o moraimashita ka?",
      "en": "From whom did you receive that bag?"
    }
  ],
  "quiz": [
    {
      "id": "verb5-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"Mr. Tanaka gave ME a book.\" -> \"たなかさん は わたし に ほん を [ ? ]。\"",
      "options": [
        "くれました",
        "あげました",
        "もらいました",
        "かりました"
      ],
      "correctAnswer": 0,
      "explanation": "When someone gives to the speaker, くれます (くれました) is mandatory."
    },
    {
      "id": "verb5-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"I gave flowers to my mother.\"",
      "targetEn": "I gave flowers to my mother.",
      "chips": [
        "わたし は",
        "はは に",
        "はな を",
        "あげました",
        "くれました",
        "もらいました"
      ],
      "correctAnswerSentence": "わたし は はは に はな を あげました",
      "explanation": "Speaker giving to mother uses あげました."
    },
    {
      "id": "verb5-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify who received the present.",
      "audioText": "ともだち に プレゼント を あげました。",
      "options": [
        "I gave a present to my friend.",
        "My friend gave me a present.",
        "I received a present from my friend.",
        "My friend bought a present."
      ],
      "correctAnswer": 0,
      "explanation": "ともだち に (to my friend), あげました (gave)."
    },
    {
      "id": "verb5-q4",
      "type": "error-hunt",
      "prompt": "Which sentence violates the perspective rule of giving?",
      "options": [
        "たなかさん は わたし に とけい を あげました。",
        "たなかさん は わたし に とけい を くれました。",
        "わたし は たなかさん に とけい を あげました。",
        "わたし は たなかさん から とけい を もらいました。"
      ],
      "correctAnswer": 0,
      "explanation": "You cannot use あげました when someone gives to YOU. It must be くれました.",
      "romajiOptions": [
        "tanaka-san wa watashi ni tokei o agemashita.",
        "tanaka-san wa watashi ni tokei o kuremashita.",
        "watashi wa tanaka-san ni tokei o agemashita.",
        "watashi wa tanaka-san kara tokei o moraimashita."
      ]
    },
    {
      "id": "verb5-q5",
      "type": "multiple-choice",
      "prompt": "Which particle can replace \"に\" when receiving from someone with \"もらいます\"?",
      "question": "Which particle can replace \"に\" when receiving from someone with \"もらいます\"?",
      "options": [
        "から (from)",
        "で (by)",
        "へ (to)",
        "まで (until)"
      ],
      "correctAnswer": 0,
      "explanation": "With もらいます, the source can be marked by に or から (e.g. せんせい から もらいました)."
    },
    {
      "id": "verb5-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I received a souvenir from my friend.\" -> \"ともだち [ ? ] おみやげ を もらいました。\"",
      "options": [
        "から",
        "へ",
        "で",
        "を"
      ],
      "correctAnswer": 0,
      "explanation": "ともだち から (from my friend) + もらいました."
    },
    {
      "id": "verb5-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"My friend gave me a souvenir.\"",
      "targetEn": "My friend gave me a souvenir.",
      "chips": [
        "ともだち が",
        "わたし に",
        "おみやげ を",
        "くれました",
        "あげました",
        "もらいました"
      ],
      "correctAnswerSentence": "ともだち が わたし に おみやげ を くれました",
      "explanation": "Giver is subject (ともだち が), recipient is わたし に, verb is くれました."
    },
    {
      "id": "verb5-q8",
      "type": "multiple-choice",
      "prompt": "What is the literal meaning of \"もらいます\"?",
      "question": "What is the literal meaning of \"もらいます\"?",
      "options": [
        "To receive / get",
        "To give outward",
        "To lend",
        "To borrow"
      ],
      "correctAnswer": 0,
      "explanation": "もらいます means \"to receive\" or \"to get from someone\"."
    },
    {
      "id": "verb5-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify what happened.",
      "audioText": "ちち に じてんしゃ を もらいました。",
      "options": [
        "I received a bicycle from my father.",
        "I gave a bicycle to my father.",
        "My father bought a bicycle.",
        "I repaired my father's bicycle."
      ],
      "correctAnswer": 0,
      "explanation": "ちち に (from father) + もらいました (received)."
    },
    {
      "id": "verb5-q10",
      "type": "fill-blank",
      "prompt": "Choose the verb: \"I gave water to the dog.\" -> \"いぬ に みず を [ ? ]。\"",
      "options": [
        "あげました",
        "くれました",
        "もらいました",
        "かりました"
      ],
      "correctAnswer": 0,
      "explanation": "Giving to an animal or plant uses あげました."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-give-receive",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Give & Receive"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-verbs"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
