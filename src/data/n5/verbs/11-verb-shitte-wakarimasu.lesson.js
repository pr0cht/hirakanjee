// JLPT N4 Lesson Module
export const lesson = {
  "id": "verb-shitte-wakarimasu",
  "number": 11,
  "section": "verbs",
  "title": "Japanese \"I Know\" vs \"I Understand\": Shitte imasu, Wakarimasu",
  "shortTitle": "Shitte imasu vs Wakarimasu",
  "subtitle": "Learn the difference between having information (しっています) and comprehension (わかります).",
  "rules": [
    {
      "title": "Shitte imasu (Possessing Knowledge / Info)",
      "formula": "[Information / Person / Fact] を しっています",
      "explanation": "しっています (know) means you have acquired a piece of objective information or know a person/place: \"たなかさん の でんわばんごう を しっています\" (I know Mr. Tanaka's phone number)."
    },
    {
      "title": "Crucial Negative Exception: しりません (NOT しっていません!)",
      "formula": "Affirmative: しっています | Negative: しりません (Never しっていません!)",
      "explanation": "This is one of the most tested tricks in JLPT N5! While the affirmative is \"しっています\", the negative MUST be \"しりません\" (I do not know). Saying \"しっていません\" is grammatically incorrect."
    },
    {
      "title": "Wakarimasu (Comprehension & Understanding)",
      "formula": "[Subject / Language / Concept] が わかります",
      "explanation": "わかります means to understand, comprehend the meaning, or be proficient: \"にほんご が わかります\" (I understand Japanese). It takes the particle が, not を!"
    }
  ],
  "tables": [
    {
      "title": "Shitte imasu vs Wakarimasu Comparison",
      "headers": [
        "Feature",
        "しっています (shitte imasu)",
        "わかります (wakarimasu)"
      ],
      "rows": [
        [
          "Core Meaning",
          "Know / have information or acquaintance",
          "Understand / comprehend meaning / discern"
        ],
        [
          "Target Type",
          "Phone numbers, addresses, facts, people",
          "Languages, mathematics, instructions, reasons"
        ],
        [
          "Particle Used",
          "を (e.g. じゅうしょ を しっています)",
          "が (e.g. えいご が わかります)"
        ],
        [
          "Negative Form",
          "しりません (Never しっていません!)",
          "わかりません (Do not understand)"
        ],
        [
          "Question Example",
          "たなかさん を しっています か？",
          "いみ が わかります か？"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "たなかさん の メールアドレス を しっています か？",
      "romaji": "tanaka-san no meeruadoresu o shitte imasu ka?",
      "en": "Do you know Mr. Tanaka's email address?"
    },
    {
      "ja": "いいえ、しりません。",
      "romaji": "iie, shirimasen.",
      "en": "No, I do not know."
    },
    {
      "ja": "わたし は にほんご が すこし わかります。",
      "romaji": "watashi wa nihongo ga sukoshi wakarimasu.",
      "en": "I understand Japanese a little."
    },
    {
      "ja": "その ことば の いみ が わかりません。",
      "romaji": "sono kotoba no imi ga wakarimasen.",
      "en": "I do not understand the meaning of that word."
    }
  ],
  "quiz": [
    {
      "id": "verb11-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"Do you know that person?\" -> \"あの ひと を [ ? ] か？\"",
      "options": [
        "しっています",
        "わかります",
        "しります",
        "しっていません"
      ],
      "correctAnswer": 0,
      "explanation": "Knowing a person is an information state: しっています か？"
    },
    {
      "id": "verb11-q2",
      "type": "multiple-choice",
      "prompt": "What is the correct negative form of \"しっています\" (I know)?",
      "question": "What is the correct negative form of \"しっています\" (I know)?",
      "options": [
        "しりません (shirimasen)",
        "しっていません (shitteimasen)",
        "わかりません (wakarimasen)",
        "しらないでした (shiranaideshita)"
      ],
      "correctAnswer": 0,
      "explanation": "The negative of しっています is strictly しりません. \"しっていません\" is invalid in standard Japanese."
    },
    {
      "id": "verb11-q3",
      "type": "fill-blank",
      "prompt": "Select the particle: \"わたし は えいご [ ? ] わかります。\"",
      "options": [
        "が",
        "を",
        "に",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "わかります (understand) takes the particle が to mark the subject of comprehension: えいご が わかります."
    },
    {
      "id": "verb11-q4",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid negative knowledge error?",
      "options": [
        "たなかさん の いえ を しっていません。",
        "たなかさん の いえ を しりません。",
        "にほんご の いみ が わかりません。",
        "その はなし を しっています。"
      ],
      "correctAnswer": 0,
      "explanation": "\"しっていません\" is a classic error. The negative must be \"しりません\".",
      "romajiOptions": [
        "tanaka-san no ie o shitteimasen.",
        "tanaka-san no ie o shirimasen.",
        "nihongo no imi ga wakarimasen.",
        "sono hanashi o shitte imasu."
      ]
    },
    {
      "id": "verb11-q5",
      "type": "word-bank",
      "prompt": "Assemble: \"I understand Japanese a little.\"",
      "targetEn": "I understand Japanese a little.",
      "chips": [
        "にほんご が",
        "すこし",
        "わかります",
        "を",
        "しっています"
      ],
      "correctAnswerSentence": "にほんご が すこし わかります",
      "explanation": "にほんご が + すこし (a little) + わかります."
    },
    {
      "id": "verb11-q6",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "この かんじ の いみ が わかりません。",
      "options": [
        "I do not understand the meaning of this kanji.",
        "I do not know how to write this kanji.",
        "I know this kanji.",
        "This kanji is easy."
      ],
      "correctAnswer": 0,
      "explanation": "かんじ の いみ が わかりません = do not understand the meaning of this kanji."
    },
    {
      "id": "verb11-q7",
      "type": "multiple-choice",
      "prompt": "Which sentence correctly expresses \"I know the answer\"?",
      "question": "Which sentence correctly expresses \"I know the answer\"?",
      "options": [
        "こたえ を しっています。",
        "こたえ が わかります。",
        "こたえ を わかります。",
        "こたえ に しっています。"
      ],
      "correctAnswer": 0,
      "explanation": "Knowing a factual answer uses こたえ を しっています."
    },
    {
      "id": "verb11-q8",
      "type": "fill-blank",
      "prompt": "Complete: \"I don't understand the reason.\" -> \"りゆう が [ ? ]。\"",
      "sentence": "りゆう が [ ? ]。",
      "options": [
        "わかりません",
        "しりません",
        "いいません",
        "ききません"
      ],
      "correctAnswer": 0,
      "explanation": "Comprehending a reason or concept uses わかります / わかりません.",
      "romaji": "riyuu ga [ ? ].",
      "romajiOptions": [
        "wakarimasen",
        "shirimasen",
        "iimasen",
        "kikimasen"
      ]
    },
    {
      "id": "verb11-q9",
      "type": "word-bank",
      "prompt": "Assemble the answer: \"No, I do not know.\"",
      "targetEn": "No, I do not know.",
      "chips": [
        "いいえ、",
        "しりません。",
        "しっていません。",
        "わかりません。"
      ],
      "correctAnswerSentence": "いいえ、 しりません。",
      "explanation": "Natural response to \"Do you know?\": いいえ、 しりません。"
    },
    {
      "id": "verb11-q10",
      "type": "audio-listening",
      "prompt": "Listen and identify what the speaker understands.",
      "audioText": "せんせい の せつめい が よく わかりました。",
      "options": [
        "I understood the teacher's explanation well.",
        "I did not understand the teacher's explanation.",
        "The teacher gave a difficult explanation.",
        "I asked the teacher an explanation."
      ],
      "correctAnswer": 0,
      "explanation": "よく わかりました = understood well."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-shitte-wakarimasu",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Shitte imasu vs Wakarimasu"
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
