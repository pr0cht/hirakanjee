// JLPT N5 Lesson Module
export const lesson = {
  "id": "verb-40-masu",
  "number": 3,
  "section": "verbs",
  "title": "40 Essential Masu Verbs & The 3 Verb Groups",
  "shortTitle": "40 Masu Verbs",
  "subtitle": "Master the polite masu stem, tense conjugations, and the 3 Japanese verb groups.",
  "rules": [
    {
      "title": "The 3 Japanese Verb Groups",
      "formula": "Group 1 (Godan / U) | Group 2 (Ichidan / Ru) | Group 3 (Irregular: する / くる)",
      "explanation": "Group 1 verbs end in consonant stems (かきます, のみます). Group 2 verbs end in vowel stems (たべます, みます). Group 3 verbs are irregular: します (do) and きます (come)."
    },
    {
      "title": "Polite Masu Conjugations",
      "formula": "Present (+): ~ます | Present (-): ~ません | Past (+): ~ました | Past (-): ~ませんでした",
      "explanation": "Every Japanese verb can be conjugated politely with the four standard masu endings: たべます (eat), たべません (do not eat), たべました (ate), たべませんでした (did not eat)."
    },
    {
      "title": "Direct Object Marker: を (Pronounced \"o\")",
      "formula": "[Noun] を + [Transitive Verb]",
      "explanation": "The particle を marks the direct object receiving the verb's action: \"ごはん を たべます\" (eat a meal), \"みず を のみます\" (drink water), \"ほん を よみます\" (read a book)."
    }
  ],
  "tables": [
    {
      "title": "Essential N5 Verbs by Group",
      "headers": [
        "Verb (Masu)",
        "Group",
        "Dictionary Base",
        "Meaning",
        "Object Collocation"
      ],
      "rows": [
        [
          "たべます (tabemasu)",
          "Group 2",
          "たべる",
          "eat",
          "パン を たべます"
        ],
        [
          "のみます (nomimasu)",
          "Group 1",
          "のむ",
          "drink",
          "おちゃ を のみます"
        ],
        [
          "みます (mimasu)",
          "Group 2",
          "みる",
          "watch / see",
          "テレビ を みます"
        ],
        [
          "ききます (kikimasu)",
          "Group 1",
          "きく",
          "listen / hear",
          "おんがく を ききます"
        ],
        [
          "よみます (yomimasu)",
          "Group 1",
          "よむ",
          "read",
          "しんぶん を よみます"
        ],
        [
          "かきます (kakimasu)",
          "Group 1",
          "かく",
          "write / draw",
          "てがみ を かきます"
        ],
        [
          "かいます (kaimasu)",
          "Group 1",
          "かう",
          "buy",
          "ほん を かいます"
        ],
        [
          "とります (torimasu)",
          "Group 1",
          "とる",
          "take (photos)",
          "しゃしん を とります"
        ],
        [
          "します (shimasu)",
          "Group 3",
          "する",
          "do",
          "スポーツ を します"
        ],
        [
          "べんきょうします",
          "Group 3",
          "べんきょうする",
          "study",
          "にほんご を べんきょうします"
        ],
        [
          "ねます (nemasu)",
          "Group 2",
          "ねる",
          "sleep / go to bed",
          "11じ に ねます"
        ],
        [
          "おきます (okimasu)",
          "Group 2",
          "おきる",
          "wake up",
          "7じ に おきます"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "まいあさ コーヒー を のみます。",
      "romaji": "maiasa koohii o nomimasu.",
      "en": "I drink coffee every morning."
    },
    {
      "ja": "きのう えいが を みました。",
      "romaji": "kinou eiga o mimashita.",
      "en": "I watched a movie yesterday."
    },
    {
      "ja": "としょかん で ほん を よみます。",
      "romaji": "toshokan de hon o yomimasu.",
      "en": "I read books in the library."
    },
    {
      "ja": "まいばん 10じ に ねます。",
      "romaji": "maiban juuji ni nemasu.",
      "en": "I go to sleep at 10 o'clock every night."
    }
  ],
  "quiz": [
    {
      "id": "verb3-q1",
      "type": "word-bank",
      "prompt": "Assemble: \"I drank black tea yesterday.\"",
      "targetEn": "I drank black tea yesterday.",
      "chips": [
        "きのう",
        "こうちゃ",
        "を",
        "のみました",
        "のみます",
        "に"
      ],
      "correctAnswerSentence": "きのう こうちゃ を のみました",
      "explanation": "Past affirmative of のみます is のみました."
    },
    {
      "id": "verb3-q2",
      "type": "fill-blank",
      "prompt": "Complete: \"I do not eat meat.\" -> \"わたし は おにく を [ ? ]。\"",
      "options": [
        "たべません",
        "たべます",
        "たべました",
        "のみません"
      ],
      "correctAnswer": 0,
      "explanation": "Present negative of たべます is たべません."
    },
    {
      "id": "verb3-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the action being performed.",
      "audioText": "てがみ を かきました。",
      "options": [
        "I wrote a letter.",
        "I read a letter.",
        "I sent a letter.",
        "I bought a letter."
      ],
      "correctAnswer": 0,
      "explanation": "かきました is the past tense of かきます (to write)."
    },
    {
      "id": "verb3-q4",
      "type": "error-hunt",
      "prompt": "Which sentence has an invalid past tense ending?",
      "options": [
        "きのう べんきょうしました でした。",
        "きのう べんきょうしました。",
        "きのう べんきょうしませんでした。",
        "あした べんきょうします。"
      ],
      "correctAnswer": 0,
      "explanation": "\"しました でした\" is double past tense and ungrammatical. The past tense of します is simply \"しました\".",
      "romajiOptions": [
        "kinou benkyou shimashita deshita.",
        "kinou benkyou shimashita.",
        "kinou benkyou shimasen deshita.",
        "ashita benkyou shimasu."
      ]
    },
    {
      "id": "verb3-q5",
      "type": "multiple-choice",
      "prompt": "Which of the following belongs to Group 3 (Irregular Verbs)?",
      "question": "Which of the following belongs to Group 3 (Irregular Verbs)?",
      "options": [
        "します (to do)",
        "たべます (to eat)",
        "のみます (to drink)",
        "かきます (to write)"
      ],
      "correctAnswer": 0,
      "explanation": "Group 3 consists strictly of します (suru) and きます (kuru)."
    },
    {
      "id": "verb3-q6",
      "type": "fill-blank",
      "prompt": "Select the object marker: \"おんがく [ ? ] ききます。\"",
      "options": [
        "を",
        "に",
        "で",
        "が"
      ],
      "correctAnswer": 0,
      "explanation": "Listening to music takes direct object を: おんがく を ききます."
    },
    {
      "id": "verb3-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I took a picture in the park.\"",
      "targetEn": "I took a picture in the park.",
      "chips": [
        "こうえん で",
        "しゃしん を",
        "とりました",
        "とります",
        "に",
        "は"
      ],
      "correctAnswerSentence": "こうえん で しゃしん を とりました",
      "explanation": "Action location takes で, object takes を, past action takes とりました."
    },
    {
      "id": "verb3-q8",
      "type": "multiple-choice",
      "prompt": "What is the negative past form of かいます (to buy)?",
      "question": "What is the negative past form of かいます (to buy)?",
      "options": [
        "かいませんでした",
        "かいました",
        "かいません",
        "かうじゃありません"
      ],
      "correctAnswer": 0,
      "explanation": "Past negative is ~ませんでした: かい + ませんでした."
    },
    {
      "id": "verb3-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "まいあさ 7じ に おきます。",
      "options": [
        "I wake up at 7:00 every morning.",
        "I go to sleep at 7:00 every night.",
        "I eat breakfast at 7:00.",
        "I leave home at 7:00."
      ],
      "correctAnswer": 0,
      "explanation": "まいあさ = every morning, 7じ に = at 7 o'clock, おきます = wake up."
    },
    {
      "id": "verb3-q10",
      "type": "fill-blank",
      "prompt": "Choose the action verb: \"きのう あたらしい くるま を [ ? ]。\"",
      "options": [
        "かいました",
        "たべました",
        "のみました",
        "よみました"
      ],
      "correctAnswer": 0,
      "explanation": "くるま (car) is bought (かいました)."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-40-masu",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "40 Masu Verbs"
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
