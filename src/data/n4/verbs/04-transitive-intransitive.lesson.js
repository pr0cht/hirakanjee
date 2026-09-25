// JLPT N4 Lesson Module
export const lesson = {
  "id": "transitive-intransitive",
  "number": 4,
  "title": "JLPT N4: 自動詞と他動詞 (Transitive & Intransitive Verbs)",
  "shortTitle": "自動詞と他動詞 (v.i. & v.t.)",
  "category": "Verb Pairs",
  "subtitle": "Learn the difference between transitive and intransitive verbs — a key grammar point for JLPT N4.",
  "formula": "他動詞 (Transitive): [Agent] が [Object] を V-他 | 自動詞 (Intransitive): [Subject] が V-自",
  "description": "Transitive verbs (他動詞) describe deliberate actions directed onto an object marked with を. Intransitive verbs (自動詞) describe spontaneous changes or states marked with が. Distinguishing these pairs is critical for JLPT N4 reading and listening.",
  "sections": [
    {
      "title": "1. Transitive (他動詞) vs. Intransitive (自動詞)",
      "content": "• 他動詞 (Transitive Verbs): An intentional actor exerts action onto an object. Takes the particle を:\n  - ドアを 開けます (I open the door).\n  - 電気を 消しました (I turned off the light).\n\n• 自動詞 (Intransitive Verbs): The event happens spontaneously, naturally, or without mentioning an actor. Takes the particle が:\n  - ドアが 開きます (The door opens).\n  - 電気が 消えました (The light went out).",
      "table": null,
      "examples": [
        {
          "jp": "寒いので、窓を 閉めてください。",
          "romaji": "Samui node, mado o shimete kudasai.",
          "en": "Because it is cold, please close the window (Transitive)."
        },
        {
          "jp": "風で ドアが 閉まりました。",
          "romaji": "Kaze de doa ga shimarimashita.",
          "en": "The door closed due to the wind (Intransitive)."
        }
      ]
    },
    {
      "title": "2. 10 Essential N4 Transitive / Intransitive Verb Pairs Table",
      "content": "",
      "table": {
        "headers": [
          "Meaning",
          "他動詞 (Transitive, を)",
          "自動詞 (Intransitive, が)",
          "Kanji Pair",
          "Resulting State (~ている)"
        ],
        "rows": [
          [
            "Open",
            "開ける (akeru)",
            "開く (aku)",
            "開ける / 開く",
            "開いている (is open)"
          ],
          [
            "Close",
            "閉める (shimeru)",
            "閉まる (shimaru)",
            "閉める / 閉まる",
            "閉まっている (is closed)"
          ],
          [
            "Turn on",
            "つける (tsukeru)",
            "つく (tsuku)",
            "つける / つく",
            "ついている (is on)"
          ],
          [
            "Turn off",
            "消す (kesu)",
            "消える (kieru)",
            "消す / 消える",
            "消えている (is off)"
          ],
          [
            "Put in / Enter",
            "入れる (ireru)",
            "入る (hairu)",
            "入れる / 入る",
            "入っている (is inside)"
          ],
          [
            "Take out / Exit",
            "出す (dasu)",
            "出る (deru)",
            "出す / 出る",
            "出ている (is out)"
          ],
          [
            "Stop",
            "止める (tomeru)",
            "止まる (tomaru)",
            "止める / 止まる",
            "止まっている (is stopped)"
          ],
          [
            "Drop / Fall",
            "落とす (otosu)",
            "落ちる (ochiru)",
            "落とす / 落ちる",
            "落ちている (has fallen)"
          ],
          [
            "Break",
            "壊す (kowasu)",
            "壊れる (kowareru)",
            "壊す / 壊れる",
            "壊れている (is broken)"
          ],
          [
            "Start",
            "始める (hajimeru)",
            "始まる (hajimaru)",
            "始める / 始まる",
            "始まっている (has started)"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "3. Expressing Resulting States: 〜ている vs. 〜てある",
      "content": "When describing the continuous state of an object resulting from an action:\n\n• 自動詞 + 〜ている: Simply describes the existing state of an object without implying purpose:\n  - 窓が開いています (The window is open).\n  - 電気がついています (The light is on).\n\n• 他動詞 + 〜てある: Indicates that someone intentionally performed an action and left it that way for a reason:\n  - 窓が開けてあります (The window has been opened and left open on purpose, e.g. for fresh air).\n  - 壁に カレンダーが はってあります (A calendar has been put up on the wall).",
      "table": null,
      "examples": [
        {
          "jp": "電気が ついています。",
          "romaji": "Denki ga tsuite imasu.",
          "en": "The light is on (Intransitive state)."
        },
        {
          "jp": "エアコンが 壊れています。",
          "romaji": "Eakon ga kowarete imasu.",
          "en": "The air conditioner is broken."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct verb: \"The window opened due to the wind.\"",
      "question": "風で 窓が ＿＿＿。",
      "options": [
        "開きました",
        "開けました",
        "落としました",
        "壊しました"
      ],
      "correctAnswer": 0,
      "explanation": "The wind caused the window to open spontaneously (自動詞, marked with が), so use 開く → 開きました.",
      "romaji": "Kaze de mado ga ___.",
      "romajiOptions": [
        "akimashita",
        "akemashita",
        "otoshimashita",
        "kowashimashita"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct particle for deliberate transitive action (他動詞):",
      "question": "エアコン＿＿＿消してください。",
      "options": [
        "を",
        "が",
        "に",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "消す is a transitive verb (他動詞) requiring the direct object particle を.",
      "romaji": "Eakon ___ keshite kudasai.",
      "romajiOptions": [
        "o",
        "ga",
        "ni",
        "de"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"The light is on.\"",
      "chips": [
        "でんきが",
        "ついて",
        "います。"
      ],
      "correctOrder": [
        0,
        1,
        2
      ],
      "explanation": "電気が (the light) + ついて (te-form of つく) + います (is in that state)."
    }
  ]
};

export const lessonMeta = {
  "id": "transitive-intransitive",
  "jlptLevel": "N4",
  "grammarPoints": [
    "自動詞と他動詞 (v.i. & v.t.)"
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
