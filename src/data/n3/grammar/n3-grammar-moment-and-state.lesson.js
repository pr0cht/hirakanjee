// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-moment-and-state",
  "number": 23,
  "title": "JLPT N3 Grammar: Moment & Ongoing State (~ところ, ~ばかり, ~まま)",
  "shortTitle": "Moment & State (~ところ, ~ばかり, ~まま)",
  "category": "Temporal State",
  "subtitle": "Master temporal markers for precise moments, recent completions, and lingering unchanged states.",
  "formula": "V-(辞書形/ている/た) + ところ • V-た + ばかり • V-(た/ない)/N-の + まま",
  "description": "Express exact timing and persisting conditions: ～ところ (just about to / in the middle of / just finished), ～ばかり (just completed recently / constantly doing only that), and ～まま (leaving a condition unchanged).",
  "sections": [
    {
      "title": "1. ～ところ (Precise Moment in Time)",
      "content": "～ところ pinpoints an exact stage of an action depending on the preceding verb form:\n• Dictionary form + ところ: Just about to do (これから始めるところ).\n• ～ている + ところ: Right in the middle of doing (今やっているところ).\n• ～た + ところ: Just finished doing that very instant (今終わったところ).",
      "table": {
        "headers": ["Verb Form", "Pattern", "Meaning", "Example"],
        "rows": [
          ["Dictionary Form", "食べる + ところ", "Just about to eat", "これから食べるところです"],
          ["ている Form", "食べている + ところ", "In the middle of eating", "今食べているところです"],
          ["た Form", "食べた + ところ", "Just finished eating", "今ちょうど食べたところです"]
        ]
      },
      "examples": [
        {
          "jp": "今から出かけるところですから、後で電話します。",
          "romaji": "Ima kara dekakeru tokoro desu kara, ato de denwa shimasu.",
          "en": "I'm just about to head out, so I'll call you later."
        },
        {
          "jp": "ちょうど今、宿題が終わったところです。",
          "romaji": "Choudo ima, shukudai ga owatta tokoro desu.",
          "en": "I have just this moment finished my homework."
        }
      ]
    },
    {
      "title": "2. ～ばかり (Recent Completion & Exclusive Frequency)",
      "content": "Two primary N3 usages of ～ばかり:\n1. Verb-た + ばかり: Just did something (based on the speaker's subjective perception of recency, even if hours or weeks ago).\n2. Verb-て + ばかりいる: Doing nothing but, constantly doing (carries a critical or negative nuance).",
      "table": {
        "headers": ["Structure", "Nuance", "Example", "Translation"],
        "rows": [
          ["V-た + ばかり", "Subjectively recent", "日本に着いたばかりです", "I just arrived in Japan"],
          ["V-て + ばかりいる", "Critical frequency", "遊んでばかりいる", "Always doing nothing but playing"]
        ]
      },
      "examples": [
        {
          "jp": "先月この車を買ったばかりなのに、もう故障してしまった。",
          "romaji": "Sengetsu kono kuruma o katta bakari na noni, mou koshou shite shimatta.",
          "en": "Even though I only just bought this car last month, it already broke down."
        },
        {
          "jp": "弟は勉強しないでゲームをしてばかりいます。",
          "romaji": "Otouto wa benkyou shinaide geemu o shite bakari imasu.",
          "en": "My younger brother does nothing but play games without studying."
        }
      ]
    },
    {
      "title": "3. ～まま (Leaving a State Unchanged)",
      "content": "～まま indicates that an action was performed or a state was maintained while leaving another condition unchanged, often contrary to customary practice.\n\nConnections:\n• Verb-た + まま (did X and left it as-is): 靴を履いたまま上がる (enter with shoes still on).\n• Verb-ない + まま (without doing X): 何も言わないまま去った (left without saying anything).\n• Noun + の + まま (in its original form): 生のまま食べる (eat it raw).",
      "table": {
        "headers": ["Grammar Point", "Temporal Focus", "Subjectivity", "Core Idea"],
        "rows": [
          ["～ところ", "Immediate physical moment", "Objective timing", "Point on timeline"],
          ["～ばかり", "Recent past interval", "Subjective feeling of recency", "Feels like just now"],
          ["～まま", "Unchanged condition", "Condition persisting", "Left without alteration"]
        ]
      },
      "examples": [
        {
          "jp": "昨夜は電気をつけたまま寝てしまいました。",
          "romaji": "Sakuya wa denki o tsuketa mama nete shimaimashita.",
          "en": "Last night I fell asleep with the lights still on."
        },
        {
          "jp": "窓を開けたまま出かけないでください。",
          "romaji": "Mado o aketa mama dekakenaide kudasai.",
          "en": "Please do not go out leaving the windows open."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"right in the middle of eating\"): ",
      "sentence": "今、ご飯を___ところです。",
      "blankWord": "食べている",
      "options": [
        "食べている",
        "食べる",
        "食べた",
        "食べよう"
      ],
      "correctAnswer": 0,
      "explanation": "Verb-ている + ところ indicates being right in the middle of executing an action.",
      "romaji": "Ima, gohan o ___ tokoro desu."
    },
    {
      "type": "multiple-choice",
      "prompt": "How does 食べたばかり differ from 食べたところ?",
      "question": "How does 食べたばかり differ from 食べたところ regarding time?",
      "options": [
        "食べたばかり expresses subjective recency (can be hours or weeks ago), while 食べたところ refers to the immediate physical moment just completed",
        "食べたところ is only used for future events",
        "食べたばかり is only used for negative actions",
        "There is no difference in meaning or nuance"
      ],
      "correctAnswer": 0,
      "explanation": "～たところ strictly denotes the immediate moment of completion ('just this second'), while ～たばかり relies on the speaker's subjective perception of recency.",
      "romaji": "How does tabeta bakari differ from tabeta tokoro?",
      "romajiOptions": [
        "Subjective recency vs immediate physical moment",
        "Only used for future events",
        "Only used for negative actions",
        "No difference in nuance"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"just arrived this morning\"): ",
      "sentence": "今朝日本に着い___。",
      "blankWord": "たばかりです",
      "options": [
        "たばかりです",
        "ているところです",
        "るままです",
        "たままです"
      ],
      "correctAnswer": 0,
      "explanation": "着いたばかりです expresses having just arrived recently.",
      "romaji": "Kesa Nihon ni tsui___."
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"left the light on\"): ",
      "sentence": "電気を___まま、出かけてしまった。",
      "blankWord": "つけた",
      "options": [
        "つけた",
        "つける",
        "つけて",
        "つけない"
      ],
      "correctAnswer": 0,
      "explanation": "Verb-た + まま expresses leaving an active state unchanged: 電気をつけたまま (with the light left turned on).",
      "romaji": "Denki o ___ mama, dekakete shimatta."
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"just about to eat\"): ",
      "sentence": "これからご飯を___ところです。",
      "blankWord": "食べる",
      "options": [
        "食べる",
        "食べている",
        "食べた",
        "食べない"
      ],
      "correctAnswer": 0,
      "explanation": "Dictionary form + ところ expresses that an action is just about to start.",
      "romaji": "Kore kara gohan o ___ tokoro desu."
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I ended up falling asleep with the window open.\"",
      "chips": [
        "窓を",
        "開けた",
        "まま",
        "寝てしまった"
      ],
      "correctOrder": [
        "窓を",
        "開けた",
        "まま",
        "寝てしまった"
      ],
      "explanation": "Structure: [Object を] [V-た + まま (unchanged state)] [Main clause]."
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-moment-and-state",
  "jlptLevel": "N3",
  "grammarPoints": [
    "～ところ",
    "～ばかり",
    "～まま"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n3"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
