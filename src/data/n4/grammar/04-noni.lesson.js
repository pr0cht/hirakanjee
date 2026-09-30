// JLPT N4 Lesson Module
export const lesson = {
  "id": "noni",
  "number": 4,
  "title": "JLPT N4: ～のに (Contrastive: \"Even though / Despite\")",
  "shortTitle": "～のに (~noni)",
  "category": "Contrast",
  "subtitle": "Master the contrastive expression ～のに (“even though / despite”) used at JLPT N4 level.",
  "formula": "Plain form + のに (Na-adj/Noun: な + のに)",
  "description": "Use ～のに to link two clauses when the second clause contradicts expectations set by the first clause. It carries a nuance of surprise, disappointment, or frustration.",
  "sections": [
    {
      "title": "1. Unexpected Outcomes with ～のに",
      "content": "Unlike simple \"but\" (でも / が), ～のに emphasizes that the result is contrary to what one would logically expect.",
      "examples": [
        {
          "jp": "たくさん べんきょうしたのに、テストに おちてしまいました。",
          "romaji": "Takusan benkyou shita noni, tesuto ni ochite shimaimashita.",
          "en": "Even though I studied a lot, I ended up failing the test."
        },
        {
          "jp": "やくそくしたのに、かれは こなかった。",
          "romaji": "Yakusoku shita noni, kare wa konakatta.",
          "en": "Even though he promised, he did not come."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the connector: \"Even though it is Sunday, I work.\"",
      "question": "にちようびな＿＿＿、はたらきます。",
      "options": [
        "ので",
        "のに",
        "から",
        "たら"
      ],
      "correctAnswer": 1,
      "explanation": "Noun + な + のに expresses \"even though it is Sunday (contrary to expectation)\".",
      "romaji": "Nichiyoubi na ___, hatarakimasu.",
      "romajiOptions": [
        "node",
        "noni",
        "kara",
        "tara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct connector:",
      "question": "彼は病気な___、学校に来た。",
      "options": [
        "のに",
        "ので",
        "から",
        "けど"
      ],
      "correctAnswer": 0,
      "explanation": "のに expresses contradiction and disappointment/surprise: 'Even though he was sick, he came to school.'",
      "romaji": "Kare wa byouki na ___, gakkou ni kita.",
      "romajiOptions": [
        "noni",
        "node",
        "kara",
        "kedo"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank:",
      "sentence": "一時間も待った___、彼は来なかった。",
      "blankWord": "のに",
      "options": [
        "のに",
        "ので",
        "から",
        "なら"
      ],
      "correctAnswer": 0,
      "explanation": "一時間も待ったのに、彼は来なかった: 'Even though I waited for an hour, he didn't come.'",
      "romaji": "Ichijikan mo matta ___, kare wa konakatta."
    },
    {
      "type": "multiple-choice",
      "prompt": "Which sentence expresses DISAPPOINTMENT at an unexpected result?",
      "question": "Which sentence expresses disappointment at an unexpected result?",
      "options": [
        "彼は来ないので、先に帰ります。",
        "たくさん練習したのに、失敗した。",
        "寒いから、コートを着ます。",
        "時間があれば、行きます。"
      ],
      "correctAnswer": 1,
      "explanation": "たくさん練習したのに、失敗した uses ～のに to express frustration/disappointment at failing despite practicing a lot.",
      "romaji": "Which sentence expresses disappointment at an unexpected result?",
      "romajiOptions": [
        "Kare wa konai node, saki ni kaerimasu.",
        "Takusan renshuu shita noni, shippai shita.",
        "Samui kara, kooto o kimasu.",
        "Jikan ga areba, ikimasu."
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Even though I practiced, I couldn't get good.\"",
      "chips": [
        "練習した",
        "のに",
        "うまく",
        "なれなかった"
      ],
      "correctOrder": [
        "練習した",
        "のに",
        "うまく",
        "なれなかった"
      ],
      "explanation": "Structure: [Verb Plain Past] のに [Result expressing unmet expectation]."
    }
  ]
};

export const lessonMeta = {
  "id": "noni",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～のに (~noni)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-core"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
