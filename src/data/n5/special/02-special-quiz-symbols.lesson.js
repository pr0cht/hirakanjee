// JLPT N5 Lesson Module
export const lesson = {
  "id": "special-quiz-symbols",
  "number": 2,
  "section": "special",
  "title": "Quiz Symbols: 〇 Maru, △ Sankaku, ✕ Batsu",
  "shortTitle": "Quiz Symbols (〇 △ ✕)",
  "subtitle": "Understand Japanese grading symbols, cultural meanings, and test conventions.",
  "rules": [
    {
      "title": "〇 (まる - Maru): Correct / Yes / Valid",
      "formula": "〇 = まる (Maru) = Correct / Pass / Good / True",
      "explanation": "In Japan, a circle (〇) means that an answer is 100% correct! On school tests and exams, correct answers receive large red circles. It is also used on forms to indicate 'Yes' or 'Valid'."
    },
    {
      "title": "✕ (ばつ - Batsu): Incorrect / No / Prohibited",
      "formula": "✕ = ばつ / ぺけ (Batsu) = Incorrect / Wrong / False / Not allowed",
      "explanation": "A cross (✕) signifies a mistake or an incorrect answer. You can make an X shape with your arms in front of your chest to casually signal 'No', 'Not allowed', or 'Cannot do'."
    },
    {
      "title": "△ (さんかく - Sankaku): Partially Correct / Neutral",
      "formula": "△ = さんかく (Sankaku) = Partially correct / Needs work / Undecided",
      "explanation": "A triangle (△) indicates partial credit, a minor mistake, or a neutral/undecided status. On tests, it means your idea was right but had a small spelling or particle error."
    },
    {
      "title": "The Western Checkmark (✓) Cultural Trap!",
      "formula": "Japan: ✓ = Check / Mistake to fix | Western: ✓ = Correct answer",
      "explanation": "Crucial cultural difference: In English and Western schools, a check mark (✓) means 'Correct'. In Japan, teachers often use a check mark to flag an ERROR or an item that needs review! If a Japanese teacher puts a check on your answer, it often means it is incorrect."
    }
  ],
  "tables": [
    {
      "title": "Japanese Evaluation Symbols Cheat Sheet",
      "headers": [
        "Symbol",
        "Japanese Name",
        "Romaji",
        "Meaning",
        "Context"
      ],
      "rows": [
        [
          "〇",
          "まる",
          "maru",
          "Correct / True / Good",
          "Grading tests, True/False quiz"
        ],
        [
          "◎",
          "にじゅうまる",
          "nijuumaru",
          "Excellent / Perfect",
          "Double circle, highest praise"
        ],
        [
          "💮",
          "はなまる",
          "hanamaru",
          "Outstanding / Bravo!",
          "Flower circle awarded for 100%"
        ],
        [
          "△",
          "さんかく",
          "sankaku",
          "Partially correct / So-so",
          "Partial points, minor mistake"
        ],
        [
          "✕",
          "ばつ",
          "batsu",
          "Incorrect / False / Wrong",
          "Marking mistakes, prohibition"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "テスト で まる を たくさん もらいました。",
      "romaji": "tesuto de maru o takusan moraimashita.",
      "en": "I received many circles (correct marks) on the test."
    },
    {
      "ja": "この こたえ は ばつ です。",
      "romaji": "kono kotae wa batsu desu.",
      "en": "This answer is incorrect (cross)."
    },
    {
      "ja": "かんじ が すこし まちがって いるので、さんかく です。",
      "romaji": "kanji ga sukoshi machigatte iru node, sankaku desu.",
      "en": "The kanji has a small mistake, so it's a triangle (partial credit)."
    },
    {
      "ja": "ぜんぶ ただしい ので、はなまる を あげます。",
      "romaji": "zenbu tadashii node, hanamaru o agemasu.",
      "en": "Everything is correct, so I give you a flower circle!"
    }
  ],
  "quiz": [
    {
      "id": "sym-q1",
      "type": "multiple-choice",
      "prompt": "In Japan, which symbol means an answer is CORRECT?",
      "options": [
        "〇 (まる - Maru)",
        "✕ (ばつ - Batsu)",
        "△ (さんかく - Sankaku)",
        "✓ (チェック - Checkmark)"
      ],
      "correctAnswer": 0,
      "explanation": "In Japan, a circle (〇 - まる) indicates a correct answer."
    },
    {
      "id": "sym-q2",
      "type": "fill-blank",
      "prompt": "The symbol ✕ is called [ ? ] and means incorrect.",
      "options": [
        "ばつ",
        "まる",
        "さんかく",
        "しかく"
      ],
      "correctAnswer": 0,
      "explanation": "✕ is called「ばつ」(batsu) and means incorrect or wrong."
    },
    {
      "id": "sym-q3",
      "type": "multiple-choice",
      "prompt": "What does the triangle symbol (△ - さんかく) usually represent on a test in Japan?",
      "options": [
        "Partially correct / Needs review",
        "100% Correct",
        "Completely wrong",
        "Bonus points"
      ],
      "correctAnswer": 0,
      "explanation": "△ (sankaku) represents partial credit or partially correct."
    },
    {
      "id": "sym-q4",
      "type": "word-bank",
      "prompt": "Assemble: \"The answer is correct (circle).\"",
      "targetEn": "The answer is correct (circle).",
      "chips": [
        "こたえ は",
        "まる です",
        "ばつ です",
        "さんかく です"
      ],
      "correctAnswerSentence": "こたえ は まる です",
      "explanation": "「こたえ は まる です」means \"The answer is correct\"."
    },
    {
      "id": "sym-q5",
      "type": "audio-listening",
      "prompt": "Listen to the teacher's grading result.",
      "audioText": "ぜんぶ まる です。よく できました！",
      "options": [
        "Everything is correct. Well done!",
        "Everything is wrong.",
        "You need to fix the triangles.",
        "Half is correct."
      ],
      "correctAnswer": 0,
      "explanation": "The teacher said「ぜんぶ まる です。よく できました！」(All circles/correct. Well done!)."
    },
    {
      "id": "sym-q6",
      "type": "multiple-choice",
      "prompt": "What is the cultural meaning of a check mark (✓) by a Japanese teacher on a test?",
      "options": [
        "It often marks a mistake or item to review",
        "It means 100% correct",
        "It is an award for neat handwriting",
        "It means bonus points"
      ],
      "correctAnswer": 0,
      "explanation": "In Japan, teachers often use ✓ to flag an error or something that needs review."
    },
    {
      "id": "sym-q7",
      "type": "fill-blank",
      "prompt": "The double circle symbol ◎ is called [ ? ] and indicates excellent.",
      "options": [
        "にじゅうまる",
        "まるまる",
        "だいにんき",
        "おおまる"
      ],
      "correctAnswer": 0,
      "explanation": "◎ is called「にじゅうまる」(nijuumaru = double circle)."
    },
    {
      "id": "sym-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"This question is wrong (batsu).\"",
      "targetEn": "This question is wrong (batsu).",
      "chips": [
        "この もんだい は",
        "ばつ です",
        "まる です",
        "テスト です"
      ],
      "correctAnswerSentence": "この もんだい は ばつ です",
      "explanation": "「この もんだい は ばつ です」means this question is incorrect."
    },
    {
      "id": "sym-q9",
      "type": "error-hunt",
      "prompt": "Spot the factually incorrect statement about Japanese symbols:",
      "options": [
        "にほん では「まる (〇)」は まちがい を いみします。",
        "にほん では「まる (〇)」は ただしい こたえ です。",
        "にほん では「ばつ (✕)」は まちがい です。",
        "にほん では「さんかく (△)」は はんぶん ただしい です。"
      ],
      "correctAnswer": 0,
      "explanation": "Statement A claims 〇 means a mistake, which is false! 〇 means correct."
    },
    {
      "id": "sym-q10",
      "type": "multiple-choice",
      "prompt": "What is a flower-shaped circle (💮) called in Japanese schools?",
      "options": [
        "はなまる (Hanamaru)",
        "さくらまる (Sakuramaru)",
        "はなばつ (Hanabatsu)",
        "ゆきまる (Yukimaru)"
      ],
      "correctAnswer": 0,
      "explanation": "💮 is called「はなまる」(hanamaru) and is awarded for outstanding work."
    }
  ]
};

export const lessonMeta = {
  "id": "special-quiz-symbols",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Quiz Symbols (〇 △ ✕)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-special"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
