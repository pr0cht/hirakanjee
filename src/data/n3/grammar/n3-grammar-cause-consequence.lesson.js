// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-cause-consequence",
  "number": 2,
  "title": "JLPT N3 Grammar: Cause, Attribution & Consequence (おかげで, せいで, ～によって)",
  "shortTitle": "Cause & Blame (おかげ, せい, によって)",
  "category": "Cause & Effect",
  "subtitle": "Distinguish between grateful attribution (おかげで), blame/fault (せいで), and objective agent/means (によって).",
  "formula": "普通形 + おかげで (Grateful) • 普通形 + せいで (Blame) • N + によって (Means/Cause)",
  "description": "Express positive results with おかげで, negative blame with せいで, and formal objective agency, cause, or diversity with によって / による.",
  "sections": [
    {
      "title": "1. おかげで (Thanks to) vs せいで (Because of / Fault)",
      "content": "Both express cause and effect, but with opposite psychological stances:\n\n• おかげで (おかげだ): Used for positive, desirable outcomes. Expresses gratitude or appreciation: 先生のおかげで合格できました (Thanks to my teacher, I passed).\n• せいで (せいだ): Used for negative, undesirable outcomes. Expresses blame, frustration, or fault: 寝坊したせいで遅刻した (Because I oversleep, I was late).",
      "table": {
        "headers": [
          "Expression",
          "Outcome Type",
          "Typical Meaning",
          "Example"
        ],
        "rows": [
          [
            "～おかげで",
            "Positive / Fortunate",
            "Thanks to...",
            "薬のおかげで治った (Thanks to medicine, recovered)"
          ],
          [
            "～せいで",
            "Negative / Unfortunate",
            "Due to / At fault of...",
            "台風のせいで中止 (Cancelled due to typhoon)"
          ],
          [
            "～せいか",
            "Uncertain Negative",
            "Perhaps because of...",
            "寝不足のせいか頭が痛い (Head hurts, maybe lack of sleep)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "先生が熱心に教えてくださったおかげで、試験に合格しました。",
          "romaji": "Sensei ga nesshin ni oshiete kudasatta okage de, shiken ni goukaku shimashita.",
          "en": "Thanks to the teacher teaching passionately, I passed the exam."
        },
        {
          "jp": "バスが遅れたせいで、約束の時間に間に合わなかった。",
          "romaji": "Basu ga okureta sei de, yakusoku no jikan ni maniawanakatta.",
          "en": "Because the bus was late, I didn't make it in time for the appointment."
        }
      ]
    },
    {
      "title": "2. ～によって / ～による (Means, Cause, Agent, Diversity)",
      "content": "～によって is a vital formal intermediate pattern with 4 key meanings:\n1. Cause / Reason: 地震によって建物が倒壊した (Buildings collapsed due to the earthquake).\n2. Method / Means: インターネットによって世界中と繋がる (Connect globally through the internet).\n3. Depending on (Diversity): 国によって習慣が異なる (Customs differ depending on the country).\n4. Passive Agent: この本は夏目漱石によって書かれた (Written by Natsume Soseki).",
      "table": {
        "headers": [
          "Usage",
          "Structure",
          "Example Meaning"
        ],
        "rows": [
          [
            "Cause",
            "N + によって",
            "Due to the disaster / storm"
          ],
          [
            "Means",
            "N + によって",
            "By means of technology / hard work"
          ],
          [
            "Condition",
            "N + によって異なる",
            "Varies depending on person / culture"
          ],
          [
            "Passive Agent",
            "N + によって V-受身",
            "Invented / created / discovered by N"
          ]
        ]
      },
      "examples": [
        {
          "jp": "人によって考え方が違います。",
          "romaji": "Hito ni yotte kangaekata ga chigaimasu.",
          "en": "Ways of thinking differ depending on the person."
        },
        {
          "jp": "この絵は有名な画家によって描かれました。",
          "romaji": "Kono e wa yuumei na gaka ni yotte kakaremashita.",
          "en": "This painting was painted by a famous artist."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct word for a positive outcome:",
      "question": "皆さんが協力してくれた＿＿＿＿＿、イベントは大成功でした。",
      "options": [
        "おかげで",
        "せいで",
        "わりに",
        "反面"
      ],
      "correctAnswer": 0,
      "explanation": "For positive outcomes (大成功, great success), use おかげで (thanks to everyone's cooperation).",
      "romaji": "Minasan ga kyouryoku shite kureta _____, ibento wa daiseikou deshita.",
      "romajiOptions": [
        "okage de",
        "sei de",
        "wari ni",
        "hanmen"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct phrase expressing variation or dependence:",
      "question": "季節＿＿＿＿＿、咲く花の種類が変わります。",
      "options": [
        "によって",
        "のせいで",
        "のおかげで",
        "のわりに"
      ],
      "correctAnswer": 0,
      "explanation": "季節によって (depending on the season) expresses variation/dependency.",
      "romaji": "Kisetsu _____, saku hana no shurui ga kawarimasu.",
      "romajiOptions": [
        "ni yotte",
        "no sei de",
        "no okage de",
        "no wari ni"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the proper expression for an unfortunate fault:",
      "question": "目覚まし時計が鳴らなかった＿＿＿＿＿、会社に遅刻してしまった。",
      "options": [
        "せいで",
        "おかげで",
        "ついでに",
        "ために"
      ],
      "correctAnswer": 0,
      "explanation": "せいで is used because arriving late is a negative, undesirable consequence.",
      "romaji": "Mezamashidokei ga naranakatta _____, kaisha ni chikoku shite shimatta.",
      "romajiOptions": [
        "sei de",
        "okage de",
        "tsuide ni",
        "tame ni"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-cause-consequence",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Cause & Blame (おかげ, せい, によって)"
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
