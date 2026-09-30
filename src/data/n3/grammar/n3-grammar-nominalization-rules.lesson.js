// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-nominalization-rules",
  "number": 6,
  "title": "JLPT N3 Grammar: Decisions, Advice & Scheduled Rules (ことだ, ことにする, ことになる, ことはない)",
  "shortTitle": "Decisions & Rules (~ことだ, ~ことになる)",
  "category": "Decisions & Advice",
  "subtitle": "Learn the critical differences between personal decisions, external schedules, strong advice, and lack of necessity.",
  "formula": "V-辞書形 + ことだ • V-辞書形 + ことにする • V-辞書形 + ことになる • V-辞書形 + ことはない",
  "description": "Master the four pillar \"こと\" grammar patterns: giving strong advice with ～ことだ, personal resolutions with ～ことにする, external circumstances with ～ことになる, and no need to worry with ～ことはない.",
  "sections": [
    {
      "title": "1. ～ことにする (Personal Decision) vs ～ことになる (External Arrangement)",
      "content": "A fundamental distinction tested repeatedly on the JLPT N3:\n\n• ～ことにする (ことにしている): Expresses a conscious personal choice or personal habit: 毎日運動することにした (I made a decision to exercise every day).\n• ～ことになる (ことになっている): Expresses an arrangement, schedule, or institutional rule decided externally: 来月転勤することになった (It has been arranged that I transfer next month).",
      "table": {
        "headers": [
          "Grammar Pattern",
          "Decider",
          "Nuance",
          "Example"
        ],
        "rows": [
          [
            "～ことにする",
            "Speaker (Internal)",
            "Personal decision/habit",
            "甘いものを控えることにした"
          ],
          [
            "～ことになる",
            "Company/Society/Fate (External)",
            "Arrangement/Rule/Schedule",
            "来週から出張することになった"
          ],
          [
            "～ことになっている",
            "Rule / Established Regulation",
            "Policy or social rule",
            "館内では禁煙ということになっている"
          ]
        ]
      },
      "examples": [
        {
          "jp": "健康のために、毎朝野菜ジュースを飲むことにしています。",
          "romaji": "Kenkou no tame ni, maiasa yasai juusu o nomu koto ni shite imasu.",
          "en": "For my health, I make it a personal rule to drink vegetable juice every morning."
        },
        {
          "jp": "来年の春、海外支社へ派遣されることになりました。",
          "romaji": "Rainen no haru, kaigai shisha e haken sareru koto ni narimashita.",
          "en": "It has been decided that I will be dispatched to an overseas branch next spring."
        }
      ]
    },
    {
      "title": "2. ～ことだ (Advice) & ～ことはない (No Need To)",
      "content": "• ～ことだ: Gives sincere personal advice (\"the best thing you should do is...\"): 上達したいなら、毎日練習することだ (If you want to improve, you should practice daily).\n• ～ことはない: Reassures someone that taking action is unnecessary (\"there is no need to...\"): 失敗をそんなに恐れることはない (There is no need to fear failure so much).",
      "table": null,
      "examples": [
        {
          "jp": "風邪を早く治したいなら、温かくしてよく寝ることだ。",
          "romaji": "Kaze o hayaku naoshitai nara, atatakaku shite yoku neru koto da.",
          "en": "If you want to recover from a cold quickly, the best thing to do is stay warm and sleep well."
        },
        {
          "jp": "些細なミスですから、あなたが責任を感じることはありませんよ。",
          "romaji": "Sasai na misu desu kara, anata ga sekinin o kanjiru koto wa arimasen yo.",
          "en": "It was a trivial mistake, so there is no need for you to feel responsible."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form for an external corporate transfer:",
      "question": "会社の辞令で、来月から大阪支店で働く＿＿＿＿＿。",
      "options": [
        "ことになった",
        "ことにした",
        "ことだ",
        "ことはない"
      ],
      "correctAnswer": 0,
      "explanation": "ことになった indicates an external decision or official arrangement from the company.",
      "romaji": "Kaisha no jirei de, raigetsu kara Oosaka shiten de hataraku _____.",
      "romajiOptions": [
        "koto ni natta",
        "koto ni shita",
        "koto da",
        "koto wa nai"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the appropriate reassurance:",
      "question": "結果はもう出たのだから、今さら後悔する＿＿＿＿＿。",
      "options": [
        "ことはない",
        "ことになった",
        "ことにした",
        "ことだ"
      ],
      "correctAnswer": 0,
      "explanation": "後悔することはない means \"there is no need to regret it at this point\".",
      "romaji": "Kekka wa mou deta no da kara, imasara koukai suru _____.",
      "romajiOptions": [
        "koto wa nai",
        "koto ni natta",
        "koto ni shita",
        "koto da"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-nominalization-rules",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Decisions & Rules (~ことだ, ~ことになる)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n3"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
