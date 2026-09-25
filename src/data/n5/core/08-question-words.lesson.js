// JLPT N4 Lesson Module
export const lesson = {
  "id": "question-words",
  "number": 8,
  "title": "JLPT N5: Japanese question words - who, what, when, where, why, how",
  "shortTitle": "Question Words (Who, What, When, Where)",
  "subtitle": "Master interrogatives and indefinite pronouns (誰, 何, いつ, どこ).",
  "description": "Learn だれ (who), なに/なん (what), いつ (when), どこ (where), どうして (why), どう (how), and how adding か creates indefinite words (だれか = someone, なにか = something).",
  "sections": [
    {
      "title": "1. Primary Interrogatives",
      "table": {
        "headers": [
          "Meaning",
          "Japanese",
          "Romaji",
          "Example Question"
        ],
        "rows": [
          [
            "Who",
            "だれ",
            "dare",
            "あの ひと は だれ です ka?(Who is that?)"
          ],
          [
            "What",
            "なに / なん",
            "nani / nan",
            "これ は なん です ka?(What is this?)"
          ],
          [
            "When",
            "いつ",
            "itsu",
            "たんじょうび は いつ です ka?(When is your birthday?)"
          ],
          [
            "Where",
            "どこ",
            "doko",
            "トイレ は どこ です ka?(Where is the restroom?)"
          ],
          [
            "Why",
            "どうして / なぜ",
            "doushite / naze",
            "どうして です ka?(Why is that?)"
          ],
          [
            "How",
            "どう / いかが",
            "dou / ikaga",
            "にほんご は どう です ka?(How is Japanese?)"
          ],
          [
            "Which (of 3+)",
            "どれ / どの",
            "dore / dono",
            "どれ が すき です ka?(Which do you like?)"
          ]
        ]
      }
    },
    {
      "title": "2. Adding か for Indefinite Pronouns",
      "content": "Add か directly to a question word to create an indefinite term:\n  だれ (who) + か = だれか (someone / somebody)\n  なに (what) + か = なにか (something)\n  どこ (where) + か = どこか (somewhere)\n  いつ (when) + か = いつか (someday)",
      "examples": [
        {
          "jp": "だれか います か？",
          "romaji": "Dareka imasu ka.",
          "en": "Is someone there?"
        },
        {
          "jp": "なにか たべます。",
          "romaji": "Nanika tabemasu.",
          "en": "I will eat something."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l8-q1",
      "type": "multiple-choice",
      "prompt": "What Japanese question word means 'Where'?",
      "question": "What Japanese question word means 'Where'?",
      "options": [
        "どこ",
        "だれ",
        "いつ",
        "なに"
      ],
      "correctAnswer": 0,
      "explanation": "'どこ' (doko) means where.",
      "romajiOptions": [
        "doko",
        "dare",
        "itsu",
        "nani"
      ]
    },
    {
      "id": "l8-q2",
      "type": "word-bank",
      "prompt": "Build: 'Who is that person?'",
      "targetEn": "Who is that person?",
      "chips": [
        "あの",
        "ひと",
        "は",
        "だれ",
        "です",
        "か",
        "なに",
        "どこ"
      ],
      "correctOrder": [
        "あの",
        "ひと",
        "は",
        "だれ",
        "です",
        "か"
      ],
      "explanation": "'あの ひと' (that person) + 'は' + 'だれ' (who) + 'です か'.",
      "romaji": "ano hito wa dare desu ka"
    },
    {
      "id": "l8-q3",
      "type": "fill-blank",
      "prompt": "Say: \"What is this?\"",
      "sentence": "これ は ___ です か？",
      "blankWord": "なん",
      "options": [
        "なん",
        "だれ",
        "いつ",
        "どれ"
      ],
      "correctAnswer": 0,
      "explanation": "Before です, 'なに' becomes 'なん' ('なん です か').",
      "romaji": "kore wa [ ? ] desu ka?"
    },
    {
      "id": "l8-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English question.",
      "audioText": "テスト は いつ です か？",
      "options": [
        "When is the test?",
        "Where is the test?",
        "What is the test?",
        "Who took the test?"
      ],
      "correctAnswer": 0,
      "explanation": "'いつ' means when.",
      "romaji": "tesuto wa itsu desu ka?"
    },
    {
      "id": "l8-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'Why didn't you come?'",
      "targetEn": "Why didn't you come?",
      "chips": [
        "どうして",
        "きませんでした",
        "か",
        "どこ",
        "だれ"
      ],
      "correctOrder": [
        "どうして",
        "きませんでした",
        "か"
      ],
      "explanation": "'どうして' (why) + 'きませんでした か' (did not come?).",
      "romaji": "doushite kimasen deshita ka"
    },
    {
      "id": "l8-q6",
      "type": "fill-blank",
      "prompt": "What does だれ + か mean?",
      "sentence": "だれ + か = ___。",
      "blankWord": "Someone / Somebody",
      "options": [
        "Someone / Somebody",
        "Everyone",
        "No one",
        "Who is it?"
      ],
      "correctAnswer": 0,
      "explanation": "Adding か to だれ forms 'someone / somebody'.",
      "romaji": "dare + ka = [ ? ]."
    },
    {
      "id": "l8-q7",
      "type": "error-hunt",
      "prompt": "Which sentence has an unnatural question word particle usage?",
      "options": [
        "トイレ は どこ です か？",
        "だれ の かさ です か？",
        "いつ は いきます か？",
        "にほんご の べんきょう は どう です か？"
      ],
      "correctAnswer": 2,
      "explanation": "'いつ' functions directly as a time adverb and does not take 'は' as a topic marker in this context.",
      "romajiOptions": [
        "toire wa doko desu ka?",
        "dare no kasa desu ka?",
        "itsu wa ikimasu ka?",
        "nihongo no benkyou wa dou desu ka?"
      ]
    },
    {
      "id": "l8-q8",
      "type": "multiple-choice",
      "prompt": "How do you ask 'How / In what way' in Japanese?",
      "question": "How do you ask 'How / In what way' in Japanese?",
      "options": [
        "どう",
        "どれ",
        "どこ",
        "なぜ"
      ],
      "correctAnswer": 0,
      "explanation": "'どう' (or polite 'いかが') asks 'how'.",
      "romajiOptions": [
        "dou",
        "dore",
        "doko",
        "naze"
      ]
    },
    {
      "id": "l8-q9",
      "type": "word-bank",
      "prompt": "Build: 'Which one is your bag?'",
      "targetEn": "Which one is your bag?",
      "chips": [
        "あなた",
        "の",
        "かばん",
        "は",
        "どれ",
        "です",
        "か",
        "どこ"
      ],
      "correctOrder": [
        "あなた",
        "の",
        "かばん",
        "は",
        "どれ",
        "です",
        "か"
      ],
      "explanation": "'どれ' asks 'which one (of three or more)' standing as a standalone pronoun.",
      "romaji": "anata no kaban wa dore desu ka"
    },
    {
      "id": "l8-q10",
      "type": "fill-blank",
      "prompt": "What is the meaning of なにか?",
      "sentence": "なにか の いみ は ___ です。",
      "blankWord": "Something",
      "options": [
        "Something",
        "Nothing",
        "Everything",
        "Anything"
      ],
      "correctAnswer": 0,
      "explanation": "なに + か = 'something'.",
      "romaji": "nanika no imi wa \"[ ? ]\" desu."
    }
  ]
};

export const lessonMeta = {
  "id": "question-words",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Question Words (Who, What, When, Where)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-core"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
