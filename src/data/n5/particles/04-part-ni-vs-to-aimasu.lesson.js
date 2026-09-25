// JLPT N4 Lesson Module
export const lesson = {
  "id": "part-ni-vs-to-aimasu",
  "number": 4,
  "section": "particles",
  "title": "Japanese \"Meet Friend\": Tomodachi ni aimasu vs Tomodachi to aimasu",
  "shortTitle": "に vs と あいます",
  "subtitle": "Understand the subtle nuance between one-directional encounter (に) vs mutual rendezvous (と).",
  "rules": [
    {
      "title": "Core Meeting Verb: 会います (あいます)",
      "formula": "[Person] に 会います vs [Person] と 会います",
      "explanation": "Both sentences translate to \"I meet my friend\", but Japanese speakers use に and と to express different dynamics of interaction."
    },
    {
      "title": "に 会います: Directional Focus / Purpose",
      "formula": "[Person] に あいます (Meeting someone as a goal / visit)",
      "explanation": "Use に when you go to meet someone, visit them, or have an appointment. The action is initiated from you towards them: \"せんせい に あいます\" (I will see/meet the teacher)."
    },
    {
      "title": "と 会います: Mutual Rendezvous / Togetherness",
      "formula": "[Person] と あいます (Both parties meet together)",
      "explanation": "Use と when both parties meet each other mutually by pre-arrangement as companions: \"ともだち と あいました\" (My friend and I met up)."
    },
    {
      "title": "Strict Prohibition: NEVER Use へ with あいます!",
      "formula": "ともだちに あいます (OK) | ともだちと あいます (OK) | ともだちへ あいます (INVALID!)",
      "explanation": "While へ can mark geographical directions with movement verbs (とうきょう へ いきます), it can NEVER be used for meeting people! Saying \"ともだち へ あいます\" is a common beginner error."
    }
  ],
  "tables": [
    {
      "title": "に あいます vs と あいます Comparison",
      "headers": [
        "Pattern",
        "Particle Meaning",
        "Nuance",
        "Typical Scenario"
      ],
      "rows": [
        [
          "ともだち に あいます",
          "に = target / goal",
          "One-way initiative; meeting someone",
          "Going to see someone, consultation, appointment."
        ],
        [
          "ともだち と あいます",
          "と = mutual \"with\"",
          "Mutual rendezvous; doing together",
          "Hanging out, meeting up at a designated spot."
        ],
        [
          "ともだち へ あいます",
          "へ = direction",
          "INVALID GRAMMAR",
          "Never used with people for interaction verbs!"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "あした しぶや で ともだち と あいます。",
      "romaji": "ashita shibuya de tomodachi to aimasu.",
      "en": "Tomorrow I will meet up with my friend in Shibuya (mutual rendezvous)."
    },
    {
      "ja": "びょういん で いしゃ に あいました。",
      "romaji": "byouin de isha ni aimashita.",
      "en": "I saw the doctor at the hospital (consultation / visit)."
    },
    {
      "ja": "えき の かいさつ で かれ と あいました。",
      "romaji": "eki no kaisatsu de kare to aimashita.",
      "en": "I met up with him at the station ticket gates."
    },
    {
      "ja": "きょう せんせい に あいます。",
      "romaji": "kyou sensei ni aimasu.",
      "en": "I will see/meet the teacher today."
    }
  ],
  "quiz": [
    {
      "id": "part4-q1",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid direction particle when meeting a person?",
      "options": [
        "ともだち へ あいました。",
        "ともだち に あいました。",
        "ともだち と あいました。",
        "きのう ともだち に あいました。"
      ],
      "correctAnswer": 0,
      "explanation": "へ can only mark physical directions/destinations, NEVER a person you meet. \"ともだち へ あいました\" is grammatically invalid.",
      "romajiOptions": [
        "tomodachi e aimashita.",
        "tomodachi ni aimashita.",
        "tomodachi to aimashita.",
        "kinou tomodachi ni aimashita."
      ]
    },
    {
      "id": "part4-q2",
      "type": "fill-blank",
      "prompt": "Complete for mutual rendezvous: \"あした ともだち [ ? ] あいます。\" (meet with)",
      "options": [
        "と",
        "へ",
        "を",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "と indicates mutual accompaniment / meeting up together."
    },
    {
      "id": "part4-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"I met the doctor at the hospital.\"",
      "targetEn": "I met the doctor at the hospital.",
      "chips": [
        "びょういん で",
        "いしゃ に",
        "あいました",
        "いしゃ へ",
        "と"
      ],
      "correctAnswerSentence": "びょういん で いしゃ に あいました",
      "explanation": "Location of action uses で, professional consultation/target uses に."
    },
    {
      "id": "part4-q4",
      "type": "multiple-choice",
      "prompt": "When visiting a superior or teacher for an appointment, which particle is most natural with あいます?",
      "question": "When visiting a superior or teacher for an appointment, which particle is most natural with あいます?",
      "options": [
        "に (e.g. せんせい に あいます)",
        "と",
        "へ",
        "を"
      ],
      "correctAnswer": 0,
      "explanation": "に denotes one-way initiative and respect when going to see a teacher, doctor, or boss."
    },
    {
      "id": "part4-q5",
      "type": "audio-listening",
      "prompt": "Listen and identify where the meeting will occur.",
      "audioText": "えき の まえ で たなかさん と あいます。",
      "options": [
        "In front of the station.",
        "Inside the station.",
        "At Mr. Tanaka's house.",
        "At a restaurant."
      ],
      "correctAnswer": 0,
      "explanation": "えき の まえ で = in front of the station."
    },
    {
      "id": "part4-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I bumped into Tanaka-san yesterday.\" -> \"きのう たなかさん [ ? ] あいました。\"",
      "options": [
        "に",
        "へ",
        "を",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "Encountering someone uses に (たなかさん に あいました)."
    },
    {
      "id": "part4-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"Who will you meet tomorrow?\"",
      "targetEn": "Who will you meet tomorrow?",
      "chips": [
        "あした",
        "だれ に",
        "あいます か？",
        "だれ へ",
        "と"
      ],
      "correctAnswerSentence": "あした だれ に あいます か？",
      "explanation": "だれ に あいます か？ = who will you meet?"
    },
    {
      "id": "part4-q8",
      "type": "multiple-choice",
      "prompt": "Can you use \"を\" with \"あいます\" (e.g. \"ともだち を あいます\")?",
      "question": "Can you use \"を\" with \"あいます\" (e.g. \"ともだち を あいます\")?",
      "options": [
        "No, あいます is an intransitive verb and never takes を.",
        "Yes, を is standard.",
        "Only when meeting family.",
        "Only in written Japanese."
      ],
      "correctAnswer": 0,
      "explanation": "あいます is intransitive and requires に or と, never direct object を."
    },
    {
      "id": "part4-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "きょう は だれ にも あいませんでした。",
      "options": [
        "I did not meet anybody today.",
        "I met someone today.",
        "I met everyone today.",
        "Who did you meet today?"
      ],
      "correctAnswer": 0,
      "explanation": "だれ にも + negative = did not meet anyone at all."
    },
    {
      "id": "part4-q10",
      "type": "fill-blank",
      "prompt": "Select the particle: \"かのじょ [ ? ] しぶや で あいました。\" (met up together)",
      "options": [
        "と",
        "へ",
        "を",
        "から"
      ],
      "correctAnswer": 0,
      "explanation": "Meeting mutually as companions uses と."
    }
  ]
};

export const lessonMeta = {
  "id": "part-ni-vs-to-aimasu",
  "jlptLevel": "N5",
  "category": "particles",
  "grammarPoints": [
    "に vs と あいます"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-particles"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
