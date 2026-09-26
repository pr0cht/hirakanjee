// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-noun-modification",
  "number": 10,
  "section": "verbs",
  "title": "Grammar: Modifying Nouns with Verb Clauses",
  "shortTitle": "Relative Clauses",
  "subtitle": "Learn how to form relative clauses in Japanese by placing plain verbs directly before nouns.",
  "rules": [
    {
      "title": "Relative Clauses Precede Nouns Directly",
      "formula": "[Plain Form Verb / Clause] + [Noun]",
      "explanation": "In English, relative clauses come after the noun (\"the book that I bought\"). In Japanese, relative clauses ALWAYS come BEFORE the noun: \"わたし が かった ほん\" (the book I bought). No relative pronouns like \"who\" or \"which\" exist!"
    },
    {
      "title": "Verbs MUST Be in Plain Form",
      "formula": "Never use ます in noun-modifying clauses!",
      "explanation": "You cannot say \"かいました ほん\". You must use the plain past: \"かった ほん\". For present actions: \"にほん で はたらく ひと\" (people who work in Japan)."
    },
    {
      "title": "Subject Inside the Clause Takes が",
      "formula": "[Subclause Subject] が [Verb] + [Noun]",
      "explanation": "The topic marker は is replaced by が for the subject inside the relative clause: \"はは が つくった りょうり\" (the meal my mother made)."
    }
  ],
  "tables": [
    {
      "title": "Noun Modification Examples",
      "headers": [
        "Clause Meaning",
        "Plain Form Clause",
        "Modified Noun",
        "Complete Phrase"
      ],
      "rows": [
        [
          "The book I bought yesterday",
          "きのう かった",
          "ほん",
          "きのう かった ほん"
        ],
        [
          "People who live in Tokyo",
          "とうきょう に すんでいる",
          "ひと",
          "とうきょう に すんでいる ひと"
        ],
        [
          "The cake mother made",
          "はは が つくった",
          "ケーキ",
          "はは が つくった ケーキ"
        ],
        [
          "Music that I listen to well",
          "よく きく",
          "おんがく",
          "よく きく おんがく"
        ],
        [
          "The store where I go tomorrow",
          "あした いく",
          "みせ",
          "あした いく みせ"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "これ は きのう かった ほん です。",
      "romaji": "kore wa kinou katta hon desu.",
      "en": "This is the book I bought yesterday."
    },
    {
      "ja": "あそこ で はなしている ひと は だれ です か？",
      "romaji": "asoko de hanashite iru hito wa dare desu ka?",
      "en": "Who is the person talking over there?"
    },
    {
      "ja": "はは が つくった りょうり は おいしい です。",
      "romaji": "haha ga tsukutta ryouri wa oishii desu.",
      "en": "The meal that my mother made is delicious."
    },
    {
      "ja": "あした いく ところ は しずかな まち です。",
      "romaji": "ashita iku tokoro wa shizukana machi desu.",
      "en": "The place I will go tomorrow is a quiet town."
    }
  ],
  "quiz": [
    {
      "id": "verb10-q1",
      "type": "fill-blank",
      "prompt": "Complete: \"The book I bought yesterday.\" -> \"きのう [ ? ] ほん。\"",
      "options": [
        "かった",
        "かいました",
        "かう",
        "かって"
      ],
      "correctAnswer": 0,
      "explanation": "Noun-modifying clauses must use the plain form: かった ほん."
    },
    {
      "id": "verb10-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"This is the cake my mother made.\"",
      "targetEn": "This is the cake my mother made.",
      "chips": [
        "これ は",
        "はは が",
        "つくった",
        "ケーキ",
        "です",
        "はは は",
        "つくりました"
      ],
      "correctAnswerSentence": "これ は はは が つくった ケーキ です",
      "explanation": "Subclause subject takes が (はは が), verb is plain past (つくった)."
    },
    {
      "id": "verb10-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the question being asked.",
      "audioText": "あそこ に いる ひと は だれ です か？",
      "options": [
        "Who is the person over there?",
        "Where is that person going?",
        "What is that person doing?",
        "Is that person a teacher?"
      ],
      "correctAnswer": 0,
      "explanation": "あそこ に いる ひと = person who is over there."
    },
    {
      "id": "verb10-q4",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a polite ます verb inside a relative clause?",
      "options": [
        "きのう かいました ほん を よみます。",
        "きのう かった ほん を よみます。",
        "とうきょう に すんでいる ともだち に あいました。",
        "よく きく おんがく は J-POP です。"
      ],
      "correctAnswer": 0,
      "explanation": "Relative clauses MUST use plain form: \"かった ほん\", NEVER \"かいました ほん\".",
      "romajiOptions": [
        "kinou kaimashita hon o yomimasu.",
        "kinou katta hon o yomimasu.",
        "toukyou ni sunde iru tomodachi ni aimashita.",
        "yoku kiku ongaku wa J-POP desu."
      ]
    },
    {
      "id": "verb10-q5",
      "type": "multiple-choice",
      "prompt": "Which particle marks the subject inside a noun-modifying clause?",
      "question": "Which particle marks the subject inside a noun-modifying clause?",
      "options": [
        "が",
        "は",
        "を",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "The internal subject of a relative clause is marked by が."
    },
    {
      "id": "verb10-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"The person who is drinking coffee.\" -> \"コーヒー を [ ? ] ひと。\"",
      "options": [
        "のんでいる",
        "のみます",
        "のんで",
        "のむでした"
      ],
      "correctAnswer": 0,
      "explanation": "The ongoing action modifying ひと is plain continuous: のんでいる ひと."
    },
    {
      "id": "verb10-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"The place I will go tomorrow is Kyoto.\"",
      "targetEn": "The place I will go tomorrow is Kyoto.",
      "chips": [
        "あした",
        "いく",
        "ところ は",
        "きょうと",
        "です",
        "いきます"
      ],
      "correctAnswerSentence": "あした いく ところ は きょうと です",
      "explanation": "あした いく (go tomorrow) directly modifies ところ (place)."
    },
    {
      "id": "verb10-q8",
      "type": "multiple-choice",
      "prompt": "How do you say \"A song I don't know\"?",
      "question": "How do you say \"A song I don't know\"?",
      "options": [
        "しらない うた",
        "しりません うた",
        "しらないな うた",
        "しらなかった うた"
      ],
      "correctAnswer": 0,
      "explanation": "しらない (don't know - plain negative) + うた (song)."
    },
    {
      "id": "verb10-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "わたし が かいた え を みて ください。",
      "options": [
        "Please look at the picture that I drew.",
        "Please draw a picture with me.",
        "Did you draw this picture?",
        "I want to draw a picture."
      ],
      "correctAnswer": 0,
      "explanation": "わたし が かいた え = the picture that I drew."
    },
    {
      "id": "verb10-q10",
      "type": "fill-blank",
      "prompt": "Select the form: \"The food I ate in Tokyo.\" -> \"とうきょう で [ ? ] りょうり。\"",
      "options": [
        "たべた",
        "たべました",
        "たべて",
        "たべる"
      ],
      "correctAnswer": 0,
      "explanation": "Past action modifying りょうり takes plain past たべた."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-noun-modification",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Relative Clauses"
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
