// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-mashou",
  "number": 7,
  "section": "verbs",
  "title": "Japanese \"Let's\": Mashou, Mashou ka - Let's Go, Shall We?",
  "shortTitle": "Let's (~ましょう)",
  "subtitle": "Learn enthusiastic proposals (~ましょう) and collaborative offers (~ましょうか).",
  "rules": [
    {
      "title": "Making Proposals: ~ましょう (Let's...)",
      "formula": "Verb Stem + ましょう",
      "explanation": "Replace ます with ましょう to suggest doing an action together enthusiastically: いきましょう (Let's go!), たべましょう (Let's eat!), はじめましょう (Let's begin!)."
    },
    {
      "title": "Asking & Offering: ~ましょうか (Shall we? / Shall I?)",
      "formula": "Verb Stem + ましょうか",
      "explanation": "Adding か creates a polite suggestion or offer: \"いっしょ に いきましょうか？\" (Shall we go together?). When offering assistance: \"てつだいましょうか？\" (Shall I help you?)."
    },
    {
      "title": "Contrast: ~ませんか vs ~ましょうか",
      "formula": "~ませんか: \"Won't you join?\" (Polite invite) | ~ましょうか: \"Shall we do it?\"",
      "explanation": "~ませんか is a respectful invitation checking if the listener is interested (\"おちゃ を のみませんか\"). ~ましょうか assumes mutual agreement or offers personal help."
    }
  ],
  "tables": [
    {
      "title": "Proposal & Suggestion Comparison",
      "headers": [
        "Pattern",
        "Tone / Nuance",
        "Function",
        "Example"
      ],
      "rows": [
        [
          "~ましょう",
          "Enthusiastic & Direct",
          "Let's do (action)!",
          "やすみましょう (Let's take a rest)."
        ],
        [
          "~ましょうか",
          "Collaborative / Offering",
          "Shall we? / Shall I help?",
          "まど を あけましょうか (Shall I open the window?)."
        ],
        [
          "~ませんか",
          "Gentle Invitation",
          "Won't you do...?",
          "えいが を みませんか (Won't you watch a movie?)."
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "すこし やすみましょう。",
      "romaji": "sukoshi yasumimashou.",
      "en": "Let's rest a little."
    },
    {
      "ja": "いっしょ に ひるごはん を たべましょうか？",
      "romaji": "issho ni hirugohan o tabemashou ka?",
      "en": "Shall we eat lunch together?"
    },
    {
      "ja": "にもつ を もちましょうか？",
      "romaji": "nimotsu o mochimashou ka?",
      "en": "Shall I carry your luggage?"
    },
    {
      "ja": "じかん です から、はじめましょう。",
      "romaji": "jikan desu kara, hajimemashou.",
      "en": "It is time, so let's begin."
    }
  ],
  "quiz": [
    {
      "id": "verb7-q1",
      "type": "word-bank",
      "prompt": "Assemble: \"Let's rest a little.\"",
      "targetEn": "Let's rest a little.",
      "chips": [
        "ちょっと",
        "やすみましょう",
        "たべましょう",
        "いきます"
      ],
      "correctAnswerSentence": "ちょっと やすみましょう",
      "explanation": "ちょっと (a bit) + やすみましょう (let's rest)."
    },
    {
      "id": "verb7-q2",
      "type": "fill-blank",
      "prompt": "Offer help: \"Shall I carry your baggage?\" -> \"にもつ を [ ? ]。\"",
      "options": [
        "もちましょうか",
        "もちます",
        "もたない",
        "もつ"
      ],
      "correctAnswer": 0,
      "explanation": "もちましょうか offers assistance: \"Shall I carry...?\""
    },
    {
      "id": "verb7-q3",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "いっしょ に かえりましょう。",
      "options": [
        "Let's go home together.",
        "Let's go to school together.",
        "Let's eat lunch together.",
        "Did you go home together?"
      ],
      "correctAnswer": 0,
      "explanation": "いっしょ に (together), かえりましょう (let's return/go home)."
    },
    {
      "id": "verb7-q4",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid proposal conjugation?",
      "options": [
        "たべるましょう。",
        "たべましょう。",
        "のみましょう。",
        "いきましょう。"
      ],
      "correctAnswer": 0,
      "explanation": "You must drop ます from たべます -> たべましょう. \"たべるましょう\" attaches to dictionary form and is incorrect.",
      "romajiOptions": [
        "taberumashou.",
        "tabemashou.",
        "nomimashou.",
        "ikimashou."
      ]
    },
    {
      "id": "verb7-q5",
      "type": "multiple-choice",
      "prompt": "What is the natural response to \"おちゃ を のみましょうか\" (Shall we drink tea)?",
      "question": "What is the natural response to \"おちゃ を のみましょうか\" (Shall we drink tea)?",
      "options": [
        "ええ、そう しましょう。(Yes, let's do so.)",
        "いいえ、たべます。(No, eat.)",
        "はい、そうです。(Yes, it is.)",
        "ええ、いきません。(Yes, not go.)"
      ],
      "correctAnswer": 0,
      "explanation": "The natural agreement to ~ましょうか is \"ええ、そう しましょう\" (Yes, let's do that)."
    },
    {
      "id": "verb7-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"It's hot, so shall I open the window?\" -> \"まど を [ ? ]。\"",
      "options": [
        "あけましょうか",
        "しめましょうか",
        "あけます",
        "あけたい"
      ],
      "correctAnswer": 0,
      "explanation": "あけます (open) -> あけましょうか (shall I open?)."
    },
    {
      "id": "verb7-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"Let's take a picture together.\"",
      "targetEn": "Let's take a picture together.",
      "chips": [
        "いっしょ に",
        "しゃしん を",
        "とりましょう",
        "とります",
        "で"
      ],
      "correctAnswerSentence": "いっしょ に しゃしん を とりましょう",
      "explanation": "しゃしん を とりましょう (let's take a picture)."
    },
    {
      "id": "verb7-q8",
      "type": "multiple-choice",
      "prompt": "When offering personal help to someone, which pattern do you use?",
      "question": "When offering personal help to someone, which pattern do you use?",
      "options": [
        "~ましょうか",
        "~たい です",
        "~てください",
        "~ましょう"
      ],
      "correctAnswer": 0,
      "explanation": "~ましょうか means \"Shall I...?\" when offering personal help."
    },
    {
      "id": "verb7-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify the proposal.",
      "audioText": "タクシー で いきましょう。",
      "options": [
        "Let's go by taxi.",
        "Let's go by bus.",
        "Let's go by train.",
        "Shall we walk?"
      ],
      "correctAnswer": 0,
      "explanation": "タクシー で (by taxi), いきましょう (let's go)."
    },
    {
      "id": "verb7-q10",
      "type": "fill-blank",
      "prompt": "Select the verb: \"It is 9:00, so let's [ ? ] the lesson.\" (begin)",
      "options": [
        "はじめましょう",
        "おわりましょう",
        "のみましょう",
        "ねましょう"
      ],
      "correctAnswer": 0,
      "explanation": "はじめます (begin) -> はじめましょう (let's begin)."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-mashou",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Let's (~ましょう)"
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
