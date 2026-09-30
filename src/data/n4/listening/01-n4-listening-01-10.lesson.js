// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-listening-01-10",
  "number": 1,
  "title": "JLPT N4: Listening Practice No.01-10 (Travel, Advice & Casual Dialogues)",
  "shortTitle": "Listening Practice No.01-10",
  "category": "Listening Practice",
  "subtitle": "Improve comprehension with short listening drills: travel advice, casual invitations, and natural spoken speed.",
  "formula": "10 Audio Dialogues • Fill-in-the-Blank Comprehension • Full Scripts",
  "description": "Train your ears with 10 practical dialogues covering travel experience (~たことがある), giving advice (~たほうがいい), casual invitations (~にいかない？), and safety advice (~ないほうがいい).",
  "sections": [
    {
      "title": "1. Featured Audio Tracks & Dialogue Topics (01–10)",
      "content": "These graded listening drills feature native speakers in everyday conversational dilemmas.\n\nTracks Summary:\n• No. 01: 行ったことがありますか (Have you been? Travel experience & advice)\n• No. 02: 最近、どう？ (How have things been? Casual invitation to catch up)\n• No. 03: 地震 (Earthquake: Safety instructions & urgent advice)\n• No. 04: レストランの予約 (Restaurant reservation & numbers)\n• No. 05: 宅配便 (Courier delivery & schedule confirmation)\n• No. 06: 駅の案内 (Station announcements & transfer directions)\n• No. 07: 病院 (At the clinic: symptoms & medicine instructions)\n• No. 08: 週末の予定 (Weekend plans & weather conditions)\n• No. 09: 買い物 (Shopping & asking prices / sizes)\n• No. 10: 電話の取り次ぎ (Phone calls & leaving messages)",
      "table": {
        "headers": [
          "Track",
          "Dialogue Title",
          "Core Grammar / Function",
          "Key Phrase"
        ],
        "rows": [
          [
            "No. 01",
            "行ったことがありますか",
            "Experience & Advice (~たほうがいい)",
            "電車で行ったほうがいいですよ"
          ],
          [
            "No. 02",
            "最近、どう？",
            "Casual Invitations (~にいかない？)",
            "こんど飲みにいかない？"
          ],
          [
            "No. 03",
            "地震",
            "Negative Advice (~ないほうがいい)",
            "出ないほうがいいですよ。危ないですから"
          ],
          [
            "No. 04",
            "レストランの予約",
            "Dates, time & headcount",
            "7時に4名で予約したいんですが"
          ],
          [
            "No. 05",
            "宅配便",
            "Re-delivery scheduling (~てもらえますか)",
            "明日届けてもらえますか"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "2. Conversational Cues & Spoken Contractions",
      "content": "Natural Japanese includes fillers and casual phrasing tested in JLPT N4:\n\n• こんど 飲みに いかない？ (Won’t you go drinking with me next time? - Casual invitation omitting particle は/を).\n• 道が 混んでいるし、駐車場が 少ないし、電車で 行ったほうが いいですよ (Listing multiple reasons with 〜し、〜し before giving advice with 〜たほうがいい).\n• 出ないほうが いいですよ。危ないですから (Warning not to take an action with 〜ないほうがいい followed by reason から).",
      "table": null,
      "examples": [
        {
          "jp": "日光に行ったことがありますか。",
          "romaji": "Nikkou ni itta koto ga arimasu ka.",
          "en": "Have you ever been to Nikko?"
        },
        {
          "jp": "道が混んでいるし、電車で行ったほうがいいですよ。",
          "romaji": "Michi ga konde iru shi, densha de itta hou ga ii desu yo.",
          "en": "The roads are crowded, so you should go by train."
        },
        {
          "jp": "今度、飲みにいかない？いつ暇？",
          "romaji": "Kondo, nomi ni ikanai? Itsu hima?",
          "en": "Shall we go for a drink sometime? When are you free?"
        },
        {
          "jp": "出ないほうがいいですよ。危ないですから。",
          "romaji": "Denai hou ga ii desu yo. Abunai desu kara.",
          "en": "You should not go outside. Because it is dangerous."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "In Dialogue 01, what advice did the speaker give regarding traveling to Nikko?",
      "question": "かねださんは どんな アドバイスを しましたか。",
      "options": [
        "電車で行ったほうがいい",
        "車で行ったほうがいい",
        "バスで行ったほうがいい",
        "行かないほうがいい"
      ],
      "correctAnswer": 0,
      "explanation": "The speaker explained that roads are crowded and parking is scarce, so taking the train is better (電車で行ったほうがいいですよ).",
      "romaji": "Kaneda-san wa donna adobaisu o shimashita ka.",
      "romajiOptions": [
        "densha de itta hou ga ii",
        "kuruma de itta hou ga ii",
        "basu de itta hou ga ii",
        "ikanai hou ga ii"
      ]
    },
    {
      "type": "audio-listening",
      "prompt": "Listen and choose the correct advice:",
      "audioText": "道が混んでいるし、駐車場が少ないし、電車で行ったほうがいいですよ。",
      "options": [
        "Go by train",
        "Go by bus",
        "Go by car",
        "Go on foot"
      ],
      "correctAnswer": 0,
      "explanation": "電車で行ったほうがいいですよ means 'You should go by train' (~たほうがいい for advice)."
    },
    {
      "type": "fill-blank",
      "prompt": "Complete the advice sentence:",
      "sentence": "電車で行っ_____いいですよ。",
      "blankWord": "たほうが",
      "options": [
        "たほうが",
        "てもいい",
        "なければ",
        "ないほうが"
      ],
      "correctAnswer": 0,
      "explanation": "～たほうがいい expresses that doing something is the better choice/advice."
    }
  ]
};

export const lessonMeta = {
  "id": "n4-listening-01-10",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Listening Practice No.01-10"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-listening"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
