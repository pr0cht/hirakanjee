// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-mae-ni-sequence",
  "number": 7,
  "title": "JLPT N4: ～まえに (Before Doing & Action Sequencing)",
  "shortTitle": "～まえに (~mae ni)",
  "category": "Action Sequencing",
  "subtitle": "Study how to connect actions in sequence using mae ni (“before doing”), a basic yet frequently used grammar structure.",
  "formula": "Verb [Dictionary Form] + 前に | Noun + の + 前に",
  "description": "〜まえに indicates that an action or event takes place before another action. GOLDEN GRAMMAR RULE: The verb preceding 前に must ALWAYS be in dictionary form (non-past plain form), even if the main sentence describes an action that happened in the past! (e.g. 映画を見る前に食事をしました, NOT 見た前に).",
  "sections": [
    {
      "title": "1. Rules and Formations",
      "content": "• [Verb Dictionary Form] + 前に (まえに)\n  - 寝る前に (before sleeping)\n  - 出かける前に (before heading out)\n  - 食べる前に (before eating)\n\n• [Noun] + の + 前に\n  - 会議の前に (before the meeting)\n  - 旅行の前に (before the trip)\n  - 食事の前に (before the meal)\n\nWatch out for common mistakes:\n✕ 映画を見た前に食事をしました\n○ 映画を見る前に食事をしました (Always use dictionary form!)",
      "examples": [
        {
          "jp": "美容院に行く前にネットで予約をしました。",
          "romaji": "Biyouin ni iku mae ni netto de yoyaku o shimashita.",
          "en": "Before going to the hair salon, I made a reservation online."
        },
        {
          "jp": "日本に来る前に1年間日本語を勉強しました。",
          "romaji": "Nihon ni kuru mae ni ichi-nenkan nihongo o benkyou shimashita.",
          "en": "Before coming to Japan, I studied Japanese for one year."
        },
        {
          "jp": "映画を見る前に食事をしましょう。",
          "romaji": "Eiga o miru mae ni shokuji o shimashou.",
          "en": "Let's have a meal before watching the movie."
        },
        {
          "jp": "寝る前にいつも歯をみがきます。",
          "romaji": "Neru mae ni itsumo ha o migakimasu.",
          "en": "I always brush my teeth before going to sleep."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"Before going to the hair salon, I made an online reservation.\"",
      "question": "美容院に＿＿＿前にネットで予約をしました。",
      "options": [
        "行く",
        "行った",
        "行くの",
        "行ったの"
      ],
      "correctAnswer": 0,
      "explanation": "Before 前に, the verb is strictly dictionary form: 行く前に.",
      "romaji": "Biyouin ni ___ mae ni netto de yoyaku o shimashita.",
      "romajiOptions": [
        "iku",
        "itta",
        "iku no",
        "itta no"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"Before coming to Japan, I studied Japanese for one year.\"",
      "question": "日本に＿＿＿前に1年間日本語を勉強しました。",
      "options": [
        "来た",
        "来る",
        "来たの",
        "来るの"
      ],
      "correctAnswer": 1,
      "explanation": "Always use dictionary form before 前に: 来る (kuru) 前に.",
      "romaji": "Nihon ni ___ mae ni ichi-nenkan nihongo o benkyou shimashita.",
      "romajiOptions": [
        "kita",
        "kuru",
        "kita no",
        "kuru no"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-mae-ni-sequence",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～まえに (~mae ni)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-practice"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
