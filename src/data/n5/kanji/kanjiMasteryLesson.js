// JLPT N5 Kanji Mastery Lesson
import { kanjiQuizBank } from './kanjiQuizBank.js';

export const kanjiN5MasteryLesson = {
  "id": "kanji-n5-mastery",
  "number": 1,
  "section": "kanji",
  "title": "JLPT N5 Kanji Mastery & Checklist",
  "shortTitle": "N5 Kanji (86 Characters)",
  "shortDescription": "Interactive N5 Kanji checklist and randomized reading quiz covering all 86 JLPT N5 characters.",
  "subtitle": "Master all 86 core JLPT N5 Kanji through randomized reading quizzes and an interactive checklist tracking individual character accuracy.",
  "rules": [
    {
      "title": "Onyomi vs Kunyomi Basics",
      "formula": "Onyomi (音読み): Chinese pronunciation | Kunyomi (訓読み): Native Japanese word",
      "explanation": "Kanji typically have two kinds of readings. Kunyomi is used when a Kanji stands alone or is paired with okurigana (hiragana stems), such as「水 (みず)」or「食べる (たべる)」. Onyomi is used when two or more Kanji combine into compounds (jukugo), such as「水曜日 (すいようび)」or「食堂 (しょくどう)」."
    },
    {
      "title": "Core Radicals (部首 - Bushu)",
      "formula": "Radical indicates the core semantic category or meaning group",
      "explanation": "Recognizing radicals speeds up memorization tremendously. For example: 亻 (nin-ben: person) in 休 and 何; 氵 (sanzui: water) in 泳 and 海; 木 (ki-hen: wood/tree) in 林 and 森; 門 (mon-gamae: gate) in 間 and 聞."
    },
    {
      "title": "Essential Stroke Order Principles",
      "formula": "1. Top to Bottom | 2. Left to Right | 3. Horizontal before Vertical | 4. Outside before Inside",
      "explanation": "Correct stroke order ensures balanced proportions and muscle memory when writing. Always draw top strokes before lower ones, left strokes before right, and horizontal lines before piercing vertical lines."
    },
    {
      "title": "Irregular Calendar & Counting Readings (Jukujikun)",
      "formula": "Special memorization needed for 1st-10th of the month and 20th",
      "explanation": "Certain high-frequency compounds have unique native readings not found in standard on/kun charts: 一日 (ついたち), 二日 (ふつか), 三日 (みっか), 四日 (よっか), 五日 (いつか), 六日 (むいか), 七日 (なのか), 八日 (ようか), 九日 (ここのか), 十日 (とおか), 二十日 (はつか), 一人 (ひとり), 二人 (ふたり)."
    }
  ],
  "tables": [
    {
      "title": "High-Frequency JLPT N5 Radicals",
      "headers": [
        "Radical",
        "Japanese Name",
        "Meaning Category",
        "N5 Examples"
      ],
      "rows": [
        [
          "亻",
          "にんべん (Person)",
          "Human actions & states",
          "休 (rest), 何 (what), 作 (make)"
        ],
        [
          "氵",
          "さんずい (Water)",
          "Liquid, nature, washing",
          "池 (pond), 海 (sea), 漢 (kan)"
        ],
        [
          "木",
          "きへん (Tree)",
          "Wood, nature, plants",
          "林 (grove), 森 (forest), 校 (school)"
        ],
        [
          "日",
          "ひへん (Sun/Day)",
          "Time, sunlight, days",
          "時 (time), 明 (bright), 早 (early)"
        ],
        [
          "言",
          "ごんべん (Word)",
          "Speech, language, telling",
          "語 (language), 話 (talk), 読 (read)"
        ],
        [
          "門",
          "もんがまえ (Gate)",
          "Enclosures, entrance",
          "間 (interval), 聞 (listen), 開 (open)"
        ]
      ]
    },
    {
      "title": "Irregular N5 Date & Counter Compounds (Special Readings)",
      "headers": [
        "Kanji",
        "Special Hiragana",
        "Romaji",
        "Meaning"
      ],
      "rows": [
        [
          "一日",
          "ついたち",
          "tsuitachi",
          "1st day of the month"
        ],
        [
          "二日",
          "ふつか",
          "futsuka",
          "2nd day of the month / 2 days"
        ],
        [
          "三日",
          "みっか",
          "mikka",
          "3rd day of the month / 3 days"
        ],
        [
          "四日",
          "よっか",
          "yokka",
          "4th day of the month / 4 days"
        ],
        [
          "五日",
          "いつか",
          "itsuka",
          "5th day of the month / 5 days"
        ],
        [
          "六日",
          "むいか",
          "muika",
          "6th day of the month / 6 days"
        ],
        [
          "七日",
          "なのか",
          "nanoka",
          "7th day of the month / 7 days"
        ],
        [
          "八日",
          "ようか",
          "youka",
          "8th day of the month / 8 days"
        ],
        [
          "九日",
          "ここのか",
          "kokonoka",
          "9th day of the month / 9 days"
        ],
        [
          "十日",
          "とおか",
          "tooka",
          "10th day of the month / 10 days"
        ],
        [
          "二十日",
          "はつか",
          "hatsuka",
          "20th day of the month / 20 days"
        ],
        [
          "一人",
          "ひとり",
          "hitori",
          "One person / alone"
        ],
        [
          "二人",
          "ふたり",
          "futari",
          "Two people / pair"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "日曜日 に ともだち と あいます。",
      "romaji": "nichiyoubi ni tomodachi to aimasu.",
      "en": "I will meet a friend on Sunday."
    },
    {
      "ja": "毎朝 しちじ に 電車 で 学校 へ 行きます。",
      "romaji": "maiasa shichiji ni densha de gakkou e ikimasu.",
      "en": "Every morning at 7:00, I go to school by train."
    },
    {
      "ja": "きょう は 雨 が ふって 寒いです。",
      "romaji": "kyou wa ame ga futte samui desu.",
      "en": "Today it is raining and cold."
    },
    {
      "ja": "つくえ の 上 に 新しい 本 が あります。",
      "romaji": "tsukue no ue ni atarashii hon ga arimasu.",
      "en": "There is a new book on top of the desk."
    }
  ],
  "quiz": [
    {
      "id": "kq-001",
      "part": 1,
      "kanjiChar": "日",
      "type": "multiple-choice",
      "prompt": "あしたは「日曜日」です。",
      "romaji": "ashita wa nichiyoubi desu.",
      "options": [
        "にちようび",
        "げつようび",
        "かようび",
        "すいようび"
      ],
      "correctAnswer": 0,
      "explanation": "「日曜日」は「にちようび」(Sunday) と読みます。「日」は「にち」と読みます。"
    },
    {
      "id": "kq-002",
      "part": 1,
      "kanjiChar": "一",
      "type": "multiple-choice",
      "prompt": "「一日」から やすみです。",
      "romaji": "tsuitachi kara yasumi desu.",
      "options": [
        "ついたち",
        "いちにち",
        "ひとひ",
        "いちひ"
      ],
      "correctAnswer": 0,
      "explanation": "月の1日は特別な読み方で「ついたち」(1st of the month) と読みます。"
    },
    {
      "id": "kq-003",
      "part": 1,
      "kanjiChar": "月",
      "type": "multiple-choice",
      "prompt": "「今月」は とても いそがしいです。",
      "romaji": "kongetsu wa totemo isogashii desu.",
      "options": [
        "こんげつ",
        "こんがつ",
        "いまつき",
        "きょうづき"
      ],
      "correctAnswer": 0,
      "explanation": "「今月」は「こんげつ」(this month) と読みます。「月」の音読みは「げつ」です。"
    },
    {
      "id": "kq-004",
      "part": 1,
      "kanjiChar": "火",
      "type": "multiple-choice",
      "prompt": "「火曜日」に テストが あります。",
      "romaji": "kayoubi ni tesuto ga arimasu.",
      "options": [
        "かようび",
        "すいようび",
        "きんようび",
        "もくようび"
      ],
      "correctAnswer": 0,
      "explanation": "「火曜日」は「かようび」(Tuesday) と読みます。「火」の音読みは「か」です。"
    },
    {
      "id": "kq-005",
      "part": 1,
      "kanjiChar": "水",
      "type": "multiple-choice",
      "prompt": "つめたい「水」を のみます。",
      "romaji": "tsumetai mizu o nomimasu.",
      "options": [
        "みず",
        "ゆ",
        "かわ",
        "あめ"
      ],
      "correctAnswer": 0,
      "explanation": "「水」は訓読みで「みず」(water) と読みます。"
    },
    {
      "id": "kq-006",
      "part": 1,
      "kanjiChar": "木",
      "type": "multiple-choice",
      "prompt": "こうえんに おおきな「木」が あります。",
      "romaji": "kouen ni ookina ki ga arimasu.",
      "options": [
        "き",
        "ほん",
        "もり",
        "はな"
      ],
      "correctAnswer": 0,
      "explanation": "「木」は訓読みで「き」(tree) と読みます。"
    },
    {
      "id": "kq-007",
      "part": 1,
      "kanjiChar": "金",
      "type": "multiple-choice",
      "prompt": "さいふに「お金」が ありません。",
      "romaji": "saifu ni okane ga arimasen.",
      "options": [
        "おかね",
        "おきん",
        "おかな",
        "おこめ"
      ],
      "correctAnswer": 0,
      "explanation": "「お金」は「おかね」(money) と読みます。「金」の訓読みは「かね」です。"
    },
    {
      "id": "kq-008",
      "part": 1,
      "kanjiChar": "土",
      "type": "multiple-choice",
      "prompt": "「土曜日」は ともだちと あそびます。",
      "romaji": "doyoubi wa tomodachi to asobimasu.",
      "options": [
        "どようび",
        "にちようび",
        "かようび",
        "げつようび"
      ],
      "correctAnswer": 0,
      "explanation": "「土曜日」は「どようび」(Saturday) と読みます。「土」の音読みは「ど」です。"
    },
    {
      "id": "kq-009",
      "part": 1,
      "kanjiChar": "年",
      "type": "multiple-choice",
      "prompt": "「去年」にほんへ きました。",
      "romaji": "kyonen nihon e kimashita.",
      "options": [
        "きょねん",
        "きょとし",
        "こねん",
        "さくねん"
      ],
      "correctAnswer": 0,
      "explanation": "「去年」は「きょねん」(last year) と読みます。「年」の音読みは「ねん」です。"
    },
    {
      "id": "kq-010",
      "part": 1,
      "kanjiChar": "時",
      "type": "multiple-choice",
      "prompt": "いま「何時」ですか。",
      "romaji": "ima nanji desu ka.",
      "options": [
        "なんじ",
        "なにじ",
        "なんとき",
        "いつじ"
      ],
      "correctAnswer": 0,
      "explanation": "「何時」は「なんじ」(what time) と読みます。「時」は「じ」と読みます。"
    }
  ]
};

/**
 * Returns a randomized 10-question quiz session across all 10 kanji quiz banks.
 * Picks 1 random question from each part to guarantee balanced coverage across
 * numbers, calendar, positions, nature, verbs, body, transport, adjectives, time, and daily life.
 */
export function getRandomKanjiQuiz(count = 10) {
  const parts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selected = [];

  for (const p of parts) {
    const questionsInPart = kanjiQuizBank.filter((q) => q.part === p);
    if (questionsInPart.length > 0) {
      const randIdx = Math.floor(Math.random() * questionsInPart.length);
      selected.push(questionsInPart[randIdx]);
    }
  }

  // If more questions needed, sample randomly from remainder
  if (selected.length < count) {
    const remaining = kanjiQuizBank.filter((q) => !selected.some((s) => s.id === q.id));
    const shuffledRem = [...remaining].sort(() => Math.random() - 0.5);
    selected.push(...shuffledRem.slice(0, count - selected.length));
  }

  // Shuffle the final selected 10 questions
  return selected.sort(() => Math.random() - 0.5).slice(0, count);
}
