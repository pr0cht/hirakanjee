// JLPT N4 Lesson Module
export const lesson = {
  "id": "verb-plus-verb",
  "number": 3,
  "title": "JLPT N4: Verb + Verb (複合動詞 - Compound Verbs)",
  "shortTitle": "Verb + Verb (複合動詞)",
  "category": "Compound Verbs",
  "subtitle": "Understand compound verb patterns and how two verbs can connect naturally in JLPT N4 sentences.",
  "formula": "Verb (Masu-stem) + 2nd Auxiliary Verb (始める / 終わる / 続ける / 出す / 直す / 過ぎる)",
  "description": "Compound verbs combine a base action verb with an auxiliary verb to specify aspect (starting, finishing, continuing, re-doing, bursting out, or overdoing).",
  "sections": [
    {
      "title": "1. Aspect Auxiliaries: Starting, Finishing, and Continuing",
      "content": "Take the Masu-stem (pre-masu form) of the primary verb and attach an aspect auxiliary:\n\n• 〜始める (hajimeru): To begin doing an action (降り始める: begin raining; 習い始める: begin learning).\n• 〜終わる (owaru): To finish doing an action (読み終わる: finish reading; 書き終わる: finish writing).\n• 〜続ける (tsuzukeru): To keep/continue doing an action (歩き続ける: keep walking; 勉強し続ける: keep studying).",
      "table": null,
      "examples": [
        {
          "jp": "午後から 雨が 降り始めました。",
          "romaji": "Gogo kara ame ga furihajimemashita.",
          "en": "It began raining from the afternoon."
        },
        {
          "jp": "この 本を 読み終わったら、貸してあげます。",
          "romaji": "Kono hon o yomiowattara, kashite agemasu.",
          "en": "When I finish reading this book, I will lend it to you."
        },
        {
          "jp": "日本語の 勉強を ずっと 続けたいです。",
          "romaji": "Nihongo no benkyou o zutto tsuzuketai desu.",
          "en": "I want to keep continuing my Japanese studies."
        }
      ]
    },
    {
      "title": "2. Modifying Action: Redoing, Bursting, and Excess",
      "content": "• 〜出す (dasu): Suddenly start doing / burst into an action spontaneously (泣き出す: burst into tears; 走り出す: start dashing).\n• 〜直す (naosu): To redo or do an action over again to correct it (やり直す: redo; 書き直す: rewrite; 考え直す: reconsider).\n• 〜過ぎる (sugiru): To do too much / excessively (食べ過ぎる: overeat; 飲み過ぎる: drink too much; 働き過ぎる: overwork).",
      "table": null,
      "examples": [
        {
          "jp": "赤ちゃんが 急に 泣き出しました。",
          "romaji": "Akachan ga kyuu ni nakidashimashita.",
          "en": "The baby suddenly burst into tears."
        },
        {
          "jp": "間違えたので、最初から やり直しました。",
          "romaji": "Machigaeta node, saisho kara yarinaoshimashita.",
          "en": "Because I made a mistake, I redid it from the beginning."
        },
        {
          "jp": "昨日 お酒を 飲み過ぎて、頭が 痛いです。",
          "romaji": "Kinou osake o nomisugite, atama ga itai desu.",
          "en": "I drank too much alcohol yesterday and my head hurts."
        }
      ]
    },
    {
      "title": "3. Essential N4 Compound Verbs Table",
      "content": "",
      "table": {
        "headers": [
          "Auxiliary Verb",
          "Meaning / Aspect",
          "Example Compound",
          "Pronunciation",
          "English Translation"
        ],
        "rows": [
          [
            "〜始める (hajimeru)",
            "begin doing",
            "降り始める",
            "furihajimeru",
            "start raining"
          ],
          [
            "〜終わる (owaru)",
            "finish doing",
            "読み終わる",
            "yomiowaru",
            "finish reading"
          ],
          [
            "〜続ける (tsuzukeru)",
            "continue doing",
            "歩き続ける",
            "arukitsuzukeru",
            "keep walking"
          ],
          [
            "〜出す (dasu)",
            "suddenly start",
            "泣き出す",
            "nakidasu",
            "burst into tears"
          ],
          [
            "〜直す (naosu)",
            "redo / do again",
            "やり直す",
            "yarinaosu",
            "redo / start over"
          ],
          [
            "〜過ぎる (sugiru)",
            "do excessively",
            "食べ過ぎる",
            "tabesugiru",
            "eat too much"
          ]
        ]
      },
      "examples": []
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Complete the sentence with \"finish reading\":",
      "question": "この小説を 読み＿＿＿、図書館へ 返します。",
      "options": [
        "終わったら",
        "始めたら",
        "直したら",
        "出したら"
      ],
      "correctAnswer": 0,
      "explanation": "読み終わる means \"to finish reading\". Attached to 〜たら it becomes 読み終わったら.",
      "romaji": "Kono shousetsu o yomi ___, toshokan e kaeshimasu.",
      "romajiOptions": [
        "owattara",
        "hajimetara",
        "naoshitara",
        "dashitara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct compound verb for \"suddenly burst into tears\":",
      "question": "赤ちゃんが 急に 泣き＿＿＿。",
      "options": [
        "出しました",
        "直しました",
        "終わりました",
        "過ぎました"
      ],
      "correctAnswer": 0,
      "explanation": "〜出す indicates a sudden, spontaneous outburst of an action (泣き出す).",
      "romaji": "Aka-chan ga kyuu ni naki ___.",
      "romajiOptions": [
        "dashimashita",
        "naoshimashita",
        "owarimashita",
        "sugimashita"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"It began raining.\"",
      "chips": [
        "あめが",
        "ふり",
        "はじめました。"
      ],
      "correctOrder": [
        "あめが",
        "ふり",
        "はじめました。"
      ],
      "explanation": "雨が (rain) + 降り (stem of 降る) + 始めました (began)."
    }
  ]
};

export const lessonMeta = {
  "id": "verb-plus-verb",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Verb + Verb (複合動詞)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-verbs"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
