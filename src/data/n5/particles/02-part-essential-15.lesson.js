// JLPT N5 Lesson Module
export const lesson = {
  "id": "part-essential-15",
  "number": 2,
  "section": "particles",
  "title": "The 15 Essential JLPT N5 Particles Guide",
  "shortTitle": "15 Essential Particles",
  "subtitle": "Comprehensive guide to は, が, を, に, で, へ, から, まで, の, と, や, か, も, よ, and ね.",
  "rules": [
    {
      "title": "Particles Glue Sentences Together (Joshi 助詞)",
      "formula": "[Noun] + [Particle]",
      "explanation": "Japanese grammar is built on post-positional particles placed immediately after nouns to indicate their grammatical role (topic, subject, object, time, place, tool, association, or sentence ender)."
    },
    {
      "title": "Listing Particles: と (Exhaustive) vs や (Non-Exhaustive)",
      "formula": "A と B (A and B, only those two) | A や B (A and B, among others)",
      "explanation": "Use と for a complete, exhaustive list: \"パン と たまご を かいました\" (I bought bread and eggs, nothing else). Use や to imply an open list of examples: \"パン や たまご を かいました\" (I bought bread, eggs, and so on)."
    },
    {
      "title": "Sentence-Ending Particles: よ (Info) vs ね (Agreement)",
      "formula": "[Sentence] + よ (I am telling you!) | [Sentence] + ね (Isn't it? / Right?)",
      "explanation": "よ shares new, assertive information the listener might not know: \"この えいが は おもしろい です よ!\" (This movie is great, you know!). ね seeks consensus, agreement, or confirmation: \"きょう は さむい です ね\" (It's cold today, isn't it?)."
    }
  ],
  "tables": [
    {
      "title": "Master Reference of the 15 Essential N5 Particles",
      "headers": [
        "Particle",
        "Pronunciation",
        "Primary Function",
        "Example Sentence"
      ],
      "rows": [
        [
          "は",
          "wa",
          "Topic marker / Contrast",
          "わたし は たなか です。"
        ],
        [
          "が",
          "ga",
          "Subject / Specific focus",
          "あめ が ふっています。"
        ],
        [
          "を",
          "o",
          "Direct object marker",
          "みず を のみます。"
        ],
        [
          "に",
          "ni",
          "Specific time / Goal / Target",
          "7じ に おきます。"
        ],
        [
          "で",
          "de",
          "Location of action / Means / Tool",
          "はし で たべます。"
        ],
        [
          "へ",
          "e",
          "Direction / Heading towards",
          "きょうと へ いきます。"
        ],
        [
          "から",
          "kara",
          "Starting point (from) / Reason",
          "9じ から はじまります。"
        ],
        [
          "まで",
          "made",
          "Ending point (until)",
          "5じ まで はたらきます。"
        ],
        [
          "の",
          "no",
          "Possessive / Modification",
          "わたし の ほん です。"
        ],
        [
          "と",
          "to",
          "Exhaustive \"and\" / \"with someone\"",
          "ともだち と いきます。"
        ],
        [
          "や",
          "ya",
          "Non-exhaustive \"and\" (and so on)",
          "りんご や みかん を かいました。"
        ],
        [
          "か",
          "ka",
          "Question marker / \"or\"",
          "これ は なん です か？"
        ],
        [
          "も",
          "mo",
          "\"also\" / \"too\"",
          "わたし も がくせい です。"
        ],
        [
          "よ",
          "yo",
          "Information assertion (\"you know\")",
          "あした は やすみ です よ。"
        ],
        [
          "ね",
          "ne",
          "Seeking confirmation (\"right?\")",
          "いい てんき です ね。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "あさ 7じ に おきて、パン と コーヒー を たべます。",
      "romaji": "asa shichiji ni okite, pan to koohii o tabemasu.",
      "en": "I wake up at 7:00 in the morning, and have bread and coffee."
    },
    {
      "ja": "9じ から 5じ まで かいしゃ で はたらきます。",
      "romaji": "kuji kara goji made kaisha de hatarakimasu.",
      "en": "I work at the company from 9:00 until 5:00."
    },
    {
      "ja": "これ は だれ の かさ です か？",
      "romaji": "kore wa dare no kasa desu ka?",
      "en": "Whose umbrella is this?"
    },
    {
      "ja": "あした は テスト です よ。がんばりましょう ね。",
      "romaji": "ashita wa tesuto desu yo. gambarimashou ne.",
      "en": "Tomorrow is the test, you know! Let's do our best, right?"
    }
  ],
  "quiz": [
    {
      "id": "part2-q1",
      "type": "fill-blank",
      "prompt": "Choose the particle for starting and ending time: \"9じ [ ? ] 5じ まで はたらきます。\"",
      "options": [
        "から",
        "まで",
        "に",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "から means \"from\": 9じ から (from 9:00)."
    },
    {
      "id": "part2-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"I went to Tokyo with my friend.\"",
      "targetEn": "I went to Tokyo with my friend.",
      "chips": [
        "ともだち と",
        "とうきょう に",
        "いきました",
        "ともだち で",
        "を"
      ],
      "correctAnswerSentence": "ともだち と とうきょう に いきました",
      "explanation": "ともだち と = with a friend; とうきょう に = to Tokyo."
    },
    {
      "id": "part2-q3",
      "type": "audio-listening",
      "prompt": "Listen and choose the items bought.",
      "audioText": "ほん や ペン を かいました。",
      "options": [
        "I bought books, pens, and other things.",
        "I bought only a book and a pen.",
        "I bought a book for my friend.",
        "I sold books and pens."
      ],
      "correctAnswer": 0,
      "explanation": "The particle や lists examples non-exhaustively (books, pens, and so on)."
    },
    {
      "id": "part2-q4",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a particle for specific time?",
      "options": [
        "あした に とうきょう に いきます。",
        "あした とうきょう に いきます。",
        "7じ に おきます。",
        "にちようび に あいましょう。"
      ],
      "correctAnswer": 0,
      "explanation": "Relative time words (きょう, あした, きのう, まいにち) NEVER take the particle に. Say \"あした いきます\", NOT \"あした に\".",
      "romajiOptions": [
        "ashita ni toukyou ni ikimasu.",
        "ashita toukyou ni ikimasu.",
        "shichiji ni okimasu.",
        "nichiyoubi ni aimashou."
      ]
    },
    {
      "id": "part2-q5",
      "type": "multiple-choice",
      "prompt": "Which sentence-ending particle means \"right?\" or \"isn't it?\", asking for agreement?",
      "question": "Which sentence-ending particle means \"right?\" or \"isn't it?\", asking for agreement?",
      "options": [
        "ね",
        "よ",
        "か",
        "わ"
      ],
      "correctAnswer": 0,
      "explanation": "ね is used to seek agreement or confirm shared feelings."
    },
    {
      "id": "part2-q6",
      "type": "fill-blank",
      "prompt": "Select possessive marker: \"これ は わたし [ ? ] パソコン です。\"",
      "options": [
        "の",
        "は",
        "が",
        "と"
      ],
      "correctAnswer": 0,
      "explanation": "の indicates possession: わたし の パソコン (my computer)."
    },
    {
      "id": "part2-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I am also a student.\"",
      "targetEn": "I am also a student.",
      "chips": [
        "わたし も",
        "がくせい",
        "です",
        "わたし は",
        "が"
      ],
      "correctAnswerSentence": "わたし も がくせい です",
      "explanation": "も replaces は to mean \"also / too\"."
    },
    {
      "id": "part2-q8",
      "type": "multiple-choice",
      "prompt": "What is the key difference between と and や?",
      "question": "What is the key difference between と and や?",
      "options": [
        "と is an exhaustive list (only those items); や is non-exhaustive (gives examples among others).",
        "と is for people; や is for objects.",
        "や is formal; と is informal.",
        "There is no difference."
      ],
      "correctAnswer": 0,
      "explanation": "と specifies a complete list, whereas や implies \"...and others\"."
    },
    {
      "id": "part2-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "この ケーキ は とても おいしい です よ。",
      "options": [
        "This cake is very delicious, you know!",
        "Is this cake delicious?",
        "This cake is delicious, isn't it?",
        "I want to eat this cake."
      ],
      "correctAnswer": 0,
      "explanation": "よ at the end asserts information: \"...you know!\"."
    },
    {
      "id": "part2-q10",
      "type": "fill-blank",
      "prompt": "Tool / Means marker: \"はし [ ? ] ごはん を たべます。\" (eat with chopsticks)",
      "options": [
        "で",
        "に",
        "を",
        "と"
      ],
      "correctAnswer": 0,
      "explanation": "で indicates tool or instrument: はし で (using chopsticks)."
    }
  ]
};

export const lessonMeta = {
  "id": "part-essential-15",
  "jlptLevel": "N5",
  "category": "particles",
  "grammarPoints": [
    "15 Essential Particles"
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
