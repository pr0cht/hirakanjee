// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-wake-family",
  "number": 9,
  "title": "JLPT N3 Grammar: The わけ & はず Family (わけだ, わけではない, わけにはいかない, わけがない)",
  "shortTitle": "The わけ & はず Family",
  "category": "Reason & Inevitability",
  "subtitle": "Master the subtle distinctions of natural reason (わけだ), partial negation (わけではない), moral duty (わけにはいかない), and impossibility (わけがない).",
  "formula": "普通形 + わけだ • 普通形 + わけではない • V-辞書形 + わけにはいかない • 普通形 + わけがない",
  "description": "Conquer one of the most heavily tested grammar families on the JLPT N3: logical deduction with わけだ, partial disclaimer with わけではない, ethical restraint with わけにはいかない, and outright impossibility with わけがない / はずがない.",
  "sections": [
    {
      "title": "1. ～わけだ (Natural Reason) vs ～わけではない (Partial Disclaimer)",
      "content": "• ～わけだ (というわけだ): \"It is natural that... / That explains why!\": A logical conclusion is reached after discovering the reason: 寒いわけだ、窓が開いている (No wonder it is cold; the window is open!).\n• ～わけではない (というわけではない): \"It does not mean that... / Not necessarily\": Partial denial that avoids extreme misunderstandings: お金があれば幸せというわけではない (Having money does not necessarily mean one is happy).",
      "table": null,
      "examples": [
        {
          "jp": "彼は日本に10年も住んでいる。だから日本語が上手なわけだ。",
          "romaji": "Kare wa Nihon ni juu-nen mo sunde iru. Dakara nihongo ga jouzu na wake da.",
          "en": "He has lived in Japan for 10 years. No wonder his Japanese is so proficient!"
        },
        {
          "jp": "料理が嫌いなわけではないが、忙しくて作る時間がない。",
          "romaji": "Ryouri ga kirai na wake dewa nai ga, isogashikute tsukuru jikan ga nai.",
          "en": "It's not that I dislike cooking, but I'm busy and lack the time to make it."
        }
      ]
    },
    {
      "title": "2. ～わけにはいかない (Social/Moral Inability) vs ～わけがない (Logical Impossibility)",
      "content": "• ～わけにはいかない: \"Cannot afford to do / Morally cannot\": Even though physically possible, social conscience, duty, or morals prevent doing it: 大事な会議だから休むわけにはいかない (It is an important meeting, so I cannot afford to be absent).\n• ～わけがない (＝はずがない): \"There is no way that / Impossible\": Strong logical conviction that something cannot be true: 彼がそんなひどいことを言うわけがない (There is no way he would say such an awful thing!).",
      "table": null,
      "examples": [
        {
          "jp": "お世話になった先輩の頼みだから、断るわけにはいかない。",
          "romaji": "Osewa ni natta senpai no tanomi dakara, kotowaru wake ni wa ikanai.",
          "en": "Since it's a request from a senior who took care of me, I cannot afford to refuse."
        },
        {
          "jp": "あんなに真面目な彼が、試験でカンニングをするわけがない。",
          "romaji": "Anna ni majime na kare ga, shiken de kanningu o suru wake ga nai.",
          "en": "There is no way someone as earnest as him would cheat on an exam."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the moral restriction form:",
      "question": "車を運転して帰るから、お酒を飲む＿＿＿＿＿。",
      "options": [
        "わけにはいかない",
        "わけがない",
        "わけではない",
        "わけだ"
      ],
      "correctAnswer": 0,
      "explanation": "飲むわけにはいかない expresses the moral and legal prohibition against drinking before driving.",
      "romaji": "Kuruma o unten shite kaeru kara, osake o nomu _____.",
      "romajiOptions": [
        "wake ni wa ikanai",
        "wake ga nai",
        "wake dewa nai",
        "wake da"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the pattern meaning logical impossibility:",
      "question": "1か月で漢字を全部＿＿＿＿＿わけがない。",
      "options": [
        "覚えられる",
        "覚える",
        "覚えた",
        "覚えない"
      ],
      "correctAnswer": 0,
      "explanation": "覚えられるわけがない means \"there is no way one can memorize all of them in one month\".",
      "romaji": "Ikkagetsu de kanji o zenbu _____ wake ga nai.",
      "romajiOptions": [
        "oboerareru",
        "oboeru",
        "oboeta",
        "oboenai"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-wake-family",
  "jlptLevel": "N3",
  "grammarPoints": [
    "The わけ & はず Family"
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
