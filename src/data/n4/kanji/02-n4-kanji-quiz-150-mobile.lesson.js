// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-kanji-quiz-150-mobile",
  "number": 2,
  "title": "JLPT N4: Kanji Quiz 150 for Smartphone",
  "shortTitle": "Kanji Quiz 150 (Mobile)",
  "category": "Mobile Practice",
  "subtitle": "Practice JLPT N4 kanji on your smartphone anytime, anywhere.",
  "formula": "150 Rapid-Fire Questions • Mobile-Optimized 10-Question Micro Drills",
  "description": "Designed specifically for quick study on smartphones during daily commutes and breaks. Covers 150 essential N4 kanji in bite-sized, touch-friendly 10-question sets.",
  "sections": [
    {
      "title": "1. Mobile-First Spaced Repetition",
      "content": "The 150 Mobile Kanji Quiz is structured for rapid thumb-friendly review on smartphones.\n\nFeatures:\n• 15 sets of 10 rapid questions each.\n• Instant feedback to cement memory retention immediately after each response.\n• Optimized for train commutes, waiting rooms, and 5-minute morning sessions.",
      "table": null,
      "examples": [
        {
          "jp": "毎朝 電車で 通勤して います。",
          "romaji": "Maiasa densha de tsuukin shite imasu.",
          "en": "I commute by train every morning."
        },
        {
          "jp": "先生に 質問が あります。",
          "romaji": "Sensei ni shitsumon ga arimasu.",
          "en": "I have a question for the teacher."
        },
        {
          "jp": "明日の 予定を 教えて ください。",
          "romaji": "Ashita no yotei o oshiete kudasai.",
          "en": "Please tell me tomorrow’s schedule."
        }
      ]
    },
    {
      "title": "2. High-Frequency Commuter & Daily Life Kanji Themes",
      "content": "",
      "table": {
        "headers": [
          "Theme",
          "Core Kanji",
          "Example Compounds",
          "English Meaning"
        ],
        "rows": [
          [
            "Transport & Travel",
            "運, 転, 車, 止, 通, 道",
            "運転 (unten), 歩道 (hodou)",
            "driving, sidewalk"
          ],
          [
            "Work & School",
            "研, 究, 質, 問, 題, 宿",
            "研究 (kenkyuu), 質問 (shitsumon)",
            "research, question"
          ],
          [
            "Health & Body",
            "体, 頭, 痛, 薬, 院",
            "頭痛 (zutsuu), 病院 (byouin)",
            "headache, hospital"
          ],
          [
            "Time & Schedule",
            "曜, 週, 予, 定, 約, 束",
            "予定 (yotei), 約束 (yakusoku)",
            "schedule, promise/appointment"
          ],
          [
            "Society & Trade",
            "買, 売, 店, 員, 会, 社",
            "会社員 (kaishain), 売店 (baiten)",
            "company employee, kiosk"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "3. Smartphone Study Strategy",
      "content": "• Practice typing kanji using the Japanese flick keyboard (フリック入力) on your smartphone to reinforce active spelling memory.\n",
      "table": null,
      "examples": []
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct reading for the kanji compound 運転 (driving):",
      "question": "車を 運転（＿＿＿）できますか。",
      "options": [
        "うんてん",
        "うんどう",
        "はこんでん",
        "はこびてん"
      ],
      "correctAnswer": 0,
      "explanation": "運転 is read うんてん (unten), meaning \"driving or operating a vehicle\".",
      "romaji": "Kuruma o unten (___) dekimasu ka.",
      "romajiOptions": [
        "unten",
        "undou",
        "hakonden",
        "hakobiten"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct kanji for「しつもん」(question):",
      "question": "先生に ＿＿＿が あります。",
      "options": [
        "質問",
        "質聞",
        "失問",
        "実問"
      ],
      "correctAnswer": 0,
      "explanation": "質問 (しつもん) is composed of 質 (quality/substance) and 問 (ask/inquire).",
      "romaji": "Sensei ni ___ ga arimasu.",
      "romajiOptions": [
        "shitsumon",
        "shitsumon",
        "shitsumon",
        "jitsumon"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I commute by train every morning.\"",
      "chips": [
        "まいあさ",
        "でんしゃで",
        "つうきん",
        "して",
        "います。"
      ],
      "correctOrder": [
        "まいあさ",
        "でんしゃで",
        "つうきん",
        "して",
        "います。"
      ],
      "explanation": "毎朝 (every morning) + 電車で (by train) + 通勤 (commute) + しています (am doing)."
    }
  ]
};

export const lessonMeta = {
  "id": "n4-kanji-quiz-150-mobile",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Kanji Quiz 150 (Mobile)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-kanji"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
