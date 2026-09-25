// JLPT N4 Lesson Module
export const lesson = {
  "id": "verb-frequency",
  "number": 4,
  "section": "verbs",
  "title": "Japanese Frequency Adverbs: Often, Sometimes, Rarely, Never",
  "shortTitle": "Frequency Adverbs",
  "subtitle": "Learn how to describe habit frequency with いつも, よく, ときどき, あまり, and ぜんぜん.",
  "rules": [
    {
      "title": "Habitual Frequency Spectrum",
      "formula": "いつも (100%) > よく (80%) > ときどき (50%) > あまり (20%) > ぜんぜん (0%)",
      "explanation": "Frequency adverbs are placed before verbs (or before objects) to modify how often an action happens. They do not require any particle."
    },
    {
      "title": "Polarity Harmony Rule",
      "formula": "Affirmative: いつも, よく, ときどき | Negative (~ません): あまり, ぜんぜん",
      "explanation": "While いつも, よく, and ときどき take affirmative verbs, あまり (rarely/hardly) and ぜんぜん (never/not at all) MUST pair with negative verbs (e.g. \"あまり たべません\", \"ぜんぜん のみません\")."
    },
    {
      "title": "Routine Frequency with まい~ (Every~)",
      "formula": "まい + [Time Unit] (e.g., まいにち, まいあさ, まいばん, まいしゅう)",
      "explanation": "The prefix まい (毎) attaches to natural time units to express recurring habits (\"every day\", \"every night\"). Like frequency adverbs, time words with まい do not take the particle に."
    }
  ],
  "tables": [
    {
      "title": "Frequency Adverbs with Verbs",
      "headers": [
        "Adverb",
        "Romaji",
        "Frequency",
        "Verb Requirement",
        "Example"
      ],
      "rows": [
        [
          "いつも",
          "itsumo",
          "100% (Always)",
          "Affirmative (~ます)",
          "いつも あさごはん を たべます。"
        ],
        [
          "よく",
          "yoku",
          "80% (Often)",
          "Affirmative (~ます)",
          "よく としょかん に いきます。"
        ],
        [
          "ときどき",
          "tokidoki",
          "50% (Sometimes)",
          "Affirmative (~ます)",
          "ときどき えいが を みます。"
        ],
        [
          "あまり",
          "amari",
          "20% (Rarely / Hardly)",
          "NEGATIVE (~ません)",
          "あまり おさけ を のみません。"
        ],
        [
          "ぜんぜん",
          "zenzen",
          "0% (Never / Not at all)",
          "NEGATIVE (~ません)",
          "ぜんぜん たばこ を すいません。"
        ]
      ]
    },
    {
      "title": "Routine Time Expressions with まい~ (Every~)",
      "headers": [
        "Pattern",
        "Romaji",
        "English Meaning",
        "Example Sentence"
      ],
      "rows": [
        [
          "まいにち",
          "mainichi",
          "Every day",
          "まいにち にほんご を べんきょうします。"
        ],
        [
          "まいあさ",
          "maiasa",
          "Every morning",
          "まいあさ 7じ に おきます。"
        ],
        [
          "まいばん",
          "maiban",
          "Every night",
          "まいばん 11じ に ねます。"
        ],
        [
          "まいしゅう",
          "maishuu",
          "Every week",
          "まいしゅう にほんご の クラス が あります。"
        ],
        [
          "まいつき",
          "maitsuki",
          "Every month",
          "まいつき ほん を 3さつ よみます。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "わたし は よく にほんりょうり を たべます。",
      "romaji": "watashi wa yoku nihonryouri o tabemasu.",
      "en": "I often eat Japanese food."
    },
    {
      "ja": "やすみ の ひ は ときどき かいもの に いきます。",
      "romaji": "yasumi no hi wa tokidoki kaimono ni ikimasu.",
      "en": "On days off, I sometimes go shopping."
    },
    {
      "ja": "あまり テレビ を みません。",
      "romaji": "amari terebi o mimasen.",
      "en": "I rarely watch television."
    },
    {
      "ja": "かれ は ぜんぜん にほんご を はなしません。",
      "romaji": "kare wa zenzen nihongo o hanashimasen.",
      "en": "He does not speak Japanese at all."
    }
  ],
  "quiz": [
    {
      "id": "verb4-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"I rarely drink alcohol.\" -> \"わたし は おさけ を [ ? ] のみません。\"",
      "options": [
        "あまり",
        "よく",
        "いつも",
        "ときどき"
      ],
      "correctAnswer": 0,
      "explanation": "あまり pairs with the negative verb のみません to mean \"rarely/hardly\"."
    },
    {
      "id": "verb4-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"Mr. Tanaka often goes to the library.\"",
      "targetEn": "Mr. Tanaka often goes to the library.",
      "chips": [
        "たなかさん は",
        "よく",
        "としょかん に",
        "いきます",
        "あまり",
        "ぜんぜん"
      ],
      "correctAnswerSentence": "たなかさん は よく としょかん に いきます",
      "explanation": "よく (often) placed before the destination and affirmative verb."
    },
    {
      "id": "verb4-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the habit.",
      "audioText": "ときどき カフェ で コーヒー を のみます。",
      "options": [
        "I sometimes drink coffee at a cafe.",
        "I always drink coffee at home.",
        "I never drink coffee at a cafe.",
        "I often drink tea at a cafe."
      ],
      "correctAnswer": 0,
      "explanation": "ときどき = sometimes, カフェ で = at a cafe."
    },
    {
      "id": "verb4-q4",
      "type": "error-hunt",
      "prompt": "Which sentence contains a frequency polarity mismatch?",
      "options": [
        "ぜんぜん えいが を みます。",
        "いつも えいが を みます。",
        "よく えいが を みます。",
        "ぜんぜん えいが を みません。"
      ],
      "correctAnswer": 0,
      "explanation": "\"ぜんぜん えいが を みます\" is incorrect because ぜんぜん must be paired with a negative verb (みません).",
      "romajiOptions": [
        "zenzen eiga o mimasu.",
        "itsumo eiga o mimasu.",
        "yoku eiga o mimasu.",
        "zenzen eiga o mimasen."
      ]
    },
    {
      "id": "verb4-q5",
      "type": "multiple-choice",
      "prompt": "Which adverb indicates 100% habitual consistency?",
      "question": "Which adverb indicates 100% habitual consistency?",
      "options": [
        "いつも",
        "よく",
        "ときどき",
        "あまり"
      ],
      "correctAnswer": 0,
      "explanation": "いつも means \"always\" (100% frequency)."
    },
    {
      "id": "verb4-q6",
      "type": "fill-blank",
      "prompt": "Select the adverb for \"never\": \"かれ は [ ? ] にく を たべません。\"",
      "options": [
        "ぜんぜん",
        "よく",
        "いつも",
        "すこし"
      ],
      "correctAnswer": 0,
      "explanation": "ぜんぜん + たべません = never eats."
    },
    {
      "id": "verb4-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I always wake up at 6:00.\"",
      "targetEn": "I always wake up at 6:00.",
      "chips": [
        "いつも",
        "6じ に",
        "おきます",
        "ねます",
        "よく"
      ],
      "correctAnswerSentence": "いつも 6じ に おきます",
      "explanation": "いつも (always) + 6じ に おきます (wake up at 6:00)."
    },
    {
      "id": "verb4-q8",
      "type": "multiple-choice",
      "prompt": "Which sentence correctly means \"I don't study very much\"?",
      "question": "Which sentence correctly means \"I don't study very much\"?",
      "options": [
        "あまり べんきょうしません。",
        "あまり べんきょうします。",
        "よく べんきょうしません。",
        "いつも べんきょうしません。"
      ],
      "correctAnswer": 0,
      "explanation": "あまり べんきょうしません is the standard natural phrase for \"I don't study very much\"."
    },
    {
      "id": "verb4-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "よく テニス を します か？",
      "options": [
        "Do you often play tennis?",
        "Do you ever play tennis?",
        "Do you like tennis?",
        "Where do you play tennis?"
      ],
      "correctAnswer": 0,
      "explanation": "よく = often, テニス を します = play tennis."
    },
    {
      "id": "verb4-q10",
      "type": "fill-blank",
      "prompt": "Choose the frequency word for 50% (\"sometimes\"): \"しゅうまつ は [ ? ] りょうり を します。\"",
      "options": [
        "ときどき",
        "あまり",
        "ぜんぜん",
        "いつも"
      ],
      "correctAnswer": 0,
      "explanation": "ときどき expresses ~50% frequency (sometimes)."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-frequency",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Frequency Adverbs"
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
