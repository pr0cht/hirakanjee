// JLPT N4 Lesson Module
export const lesson = {
  "id": "verb-te-form",
  "number": 8,
  "section": "verbs",
  "title": "Te-Form: Please, May I, ~ing, And... + Listening Practice",
  "shortTitle": "The Te-Form (~て)",
  "subtitle": "Master the essential te-form conjugation rules and sentence structures (~てください, ~ています).",
  "rules": [
    {
      "title": "Group 1 (Godan) Te-Form Rules",
      "formula": "う, つ, る -> って | む, ぶ, ぬ -> んで | く -> いて | ぐ -> いで | す -> して | 行く -> 行って",
      "explanation": "Group 1 conjugations change based on final syllable: かう -> かって, まつ -> まって, とる -> とって. のむ -> のんで, あそぶ -> あそんで, しぬ -> しんで. かく -> かいて, およぐ -> およいで. はなす -> はなして. Irregular exception: いく -> いって."
    },
    {
      "title": "Group 2 & Group 3 Te-Form Rules",
      "formula": "Group 2: drop ~る -> ~て | Group 3: する -> して, くる -> きて",
      "explanation": "Group 2 verbs simply replace る with て: たべる -> たべて, みる -> みて, ねる -> ねて. Group 3 irregulars: する -> して, くる -> きて."
    },
    {
      "title": "Core Structures Built on the Te-Form",
      "formula": "~てください (Please do) | ~ています (Is currently doing) | ~てもいいですか (May I?)",
      "explanation": "1) ~てください makes polite requests: \"きいて ください\" (Please listen). 2) ~ています shows ongoing action or state: \"たべて います\" (is eating). 3) ~てもいいですか asks permission: \"はいっても いい です か\" (May I enter?)."
    }
  ],
  "tables": [
    {
      "title": "Te-Form Conjugation Rulebook",
      "headers": [
        "Group",
        "Verb Ending",
        "Rule",
        "Dictionary Example",
        "Te-Form"
      ],
      "rows": [
        [
          "Group 1",
          "う, つ, る",
          "replace with って",
          "かう, まつ, とる",
          "かって, まって, とって"
        ],
        [
          "Group 1",
          "む, ぶ, ぬ",
          "replace with んで",
          "のむ, あそぶ, しぬ",
          "のんで, あそんで, しんで"
        ],
        [
          "Group 1",
          "く",
          "replace with いて",
          "かく, きく",
          "かいて, きいて"
        ],
        [
          "Group 1",
          "ぐ",
          "replace with いで",
          "およぐ",
          "およいで"
        ],
        [
          "Group 1",
          "す",
          "replace with して",
          "はなす",
          "はなして"
        ],
        [
          "Group 1 (Exception)",
          "いく (行きます)",
          "becomes 行って",
          "いく",
          "いって (itte)"
        ],
        [
          "Group 2",
          "る (Ichidan)",
          "replace with て",
          "たべる, みる, ねる",
          "たべて, みて, ねて"
        ],
        [
          "Group 3",
          "する, くる",
          "irregular",
          "する, くる",
          "して, きて"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "ちょっと まって ください。",
      "romaji": "chotto matte kudasai.",
      "en": "Please wait a moment."
    },
    {
      "ja": "いま にほんご を べんきょうして います。",
      "romaji": "ima nihongo o benkyoushite imasu.",
      "en": "I am currently studying Japanese."
    },
    {
      "ja": "しゃしん を とっても いい です か？",
      "romaji": "shashin o tottemo ii desu ka?",
      "en": "May I take a photo?"
    },
    {
      "ja": "ここで たばこ を すっては いけません。",
      "romaji": "kokode tabako o sutte wa ikemasen.",
      "en": "You must not smoke here."
    }
  ],
  "quiz": [
    {
      "id": "verb8-q1",
      "type": "word-bank",
      "prompt": "Assemble: \"Please wait a moment.\"",
      "targetEn": "Please wait a moment.",
      "chips": [
        "ちょっと",
        "まって",
        "ください",
        "まちて",
        "まちます"
      ],
      "correctAnswerSentence": "ちょっと まって ください",
      "explanation": "まちます (まつ) ends with つ -> まって ください."
    },
    {
      "id": "verb8-q2",
      "type": "fill-blank",
      "prompt": "Convert to te-form: \"のむ (drink) -> [ ? ]\"",
      "options": [
        "のんで",
        "のって",
        "のみて",
        "のくて"
      ],
      "correctAnswer": 0,
      "explanation": "Verbs ending in む (のむ) become んで: のんで."
    },
    {
      "id": "verb8-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the current action.",
      "audioText": "いま ごはん を たべて います。",
      "options": [
        "I am currently eating a meal.",
        "I am currently making a meal.",
        "I will eat a meal soon.",
        "I finished my meal."
      ],
      "correctAnswer": 0,
      "explanation": "たべて います shows continuous present action: currently eating."
    },
    {
      "id": "verb8-q4",
      "type": "error-hunt",
      "prompt": "Which verb has an incorrect te-form conjugation?",
      "options": [
        "いく -> いきて",
        "いく -> いって",
        "かう -> かって",
        "かく -> かいて"
      ],
      "correctAnswer": 0,
      "explanation": "いく (行きます) is a famous exception! It becomes いって, NEVER \"いきて\".",
      "romajiOptions": [
        "iku -> ikite",
        "iku -> itte",
        "kau -> katte",
        "kaku -> kaite"
      ]
    },
    {
      "id": "verb8-q5",
      "type": "multiple-choice",
      "prompt": "What is the te-form of はなします (to speak)?",
      "question": "What is the te-form of はなします (to speak)?",
      "options": [
        "はなして",
        "はなって",
        "はなんで",
        "はなして"
      ],
      "correctAnswer": 0,
      "explanation": "Verbs ending in す (はなす) become して: はなして."
    },
    {
      "id": "verb8-q6",
      "type": "fill-blank",
      "prompt": "Ask permission: \"May I sit here?\" -> \"ここ に すわって [ ? ] いい です か？\"",
      "options": [
        "も",
        "は",
        "で",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "~ても いい です か asks permission (\"May I...?\")"
    },
    {
      "id": "verb8-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"Please write in Japanese.\"",
      "targetEn": "Please write in Japanese.",
      "chips": [
        "にほんご で",
        "かいて",
        "ください",
        "かきて",
        "を"
      ],
      "correctAnswerSentence": "にほんご で かいて ください",
      "explanation": "かく ends in く -> かいて. かいて ください = please write."
    },
    {
      "id": "verb8-q8",
      "type": "multiple-choice",
      "prompt": "How do you express prohibition (\"You must not do...\")?",
      "question": "How do you express prohibition (\"You must not do...\")?",
      "options": [
        "~ては いけません",
        "~ても いい です",
        "~てください",
        "~ています"
      ],
      "correctAnswer": 0,
      "explanation": "~ては いけません expresses prohibition (must not do)."
    },
    {
      "id": "verb8-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "ドア を あけて ください。",
      "options": [
        "Please open the door.",
        "Please close the door.",
        "Please lock the door.",
        "Did you open the door?"
      ],
      "correctAnswer": 0,
      "explanation": "あけて ください = please open."
    },
    {
      "id": "verb8-q10",
      "type": "fill-blank",
      "prompt": "Complete: \"Tanaka-san is reading a book now.\" -> \"たなかさん は いま ほん を [ ? ]。\"",
      "options": [
        "よんで います",
        "よみて います",
        "よって います",
        "よみ います"
      ],
      "correctAnswer": 0,
      "explanation": "よむ ends in む -> よんで います (is reading)."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-te-form",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "The Te-Form (~て)"
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
