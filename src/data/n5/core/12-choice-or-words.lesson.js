// JLPT N4 Lesson Module
export const lesson = {
  "id": "choice-or-words",
  "number": 12,
  "title": "JLPT N5: Choice: \"or\" words in Japanese - ka, matawa, soretomo",
  "shortTitle": "Choice Words (Ka, Matawa, Soretomo)",
  "subtitle": "Connecting alternatives, sentence-starting choices, and formal options.",
  "description": "Learn particle か (noun or noun), sentence-starter それとも (or is it...?), and formal/administrative または.",
  "sections": [
    {
      "title": "1. The 3 Japanese \"Or\" Forms",
      "table": {
        "headers": [
          "Form",
          "Usage",
          "Context / Position"
        ],
        "rows": [
          [
            "A か B",
            "Noun or Noun",
            "Within a single clause: \"A or B\""
          ],
          [
            "それとも (soretomo)",
            "Sentence start in questions",
            "Begins a 2nd alternative question: \"...? Or ...?\""
          ],
          [
            "または (matawa)",
            "Formal noun/clause choice",
            "Official forms, notices, documents: \"Option A or Option B\""
          ]
        ]
      },
      "examples": [
        {
          "jp": "コーヒー か おちゃ を のみます。",
          "romaji": "Koohii ka ocha o nomimasu.",
          "en": "I drink coffee or tea."
        },
        {
          "jp": "バス で いきます か？それとも、でんしゃ です か？",
          "romaji": "Basu de ikimasu ka. Soretomo, densha desu ka.",
          "en": "Will you go by bus? Or will you take the train?"
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l12-q1",
      "type": "multiple-choice",
      "prompt": "How do you connect two nouns with 'or' (e.g. 'Coffee or tea')?",
      "question": "How do you connect two nouns with 'or' (e.g. 'Coffee or tea')?",
      "options": [
        "コーヒー か おちゃ",
        "コーヒー と おちゃ",
        "コーヒー それとも おちゃ",
        "コーヒー でも おちゃ"
      ],
      "correctAnswer": 0,
      "explanation": "Particle 'か' between two nouns denotes 'or'. (と means 'and').",
      "romajiOptions": [
        "koohii ka ocha",
        "koohii to ocha",
        "koohii soretomo ocha",
        "koohii demo ocha"
      ]
    },
    {
      "id": "l12-q2",
      "type": "word-bank",
      "prompt": "Build: 'Will you go by bus or by train?'",
      "targetEn": "Will you go by bus or by train?",
      "chips": [
        "バス",
        "で",
        "いきます",
        "か",
        "でんしゃ",
        "で",
        "いきます",
        "か"
      ],
      "correctOrder": [
        "バス",
        "で",
        "いきます",
        "か",
        "でんしゃ",
        "で",
        "いきます",
        "か"
      ],
      "explanation": "Repeated か questions present mutually exclusive choices.",
      "romaji": "basu de ikimasu ka densha de ikimasu ka"
    },
    {
      "id": "l12-q3",
      "type": "fill-blank",
      "prompt": "Choose the sentence-starter for a follow-up alternative question.",
      "sentence": "あした は はれ です か？___、あめ です か？",
      "blankWord": "それとも",
      "options": [
        "それとも",
        "か",
        "または",
        "でも"
      ],
      "correctAnswer": 0,
      "explanation": "'それとも' (soretomo) begins the second question: 'Or is it...?'",
      "romaji": "ashita wa hare desu ka? [ ? ], ame desu ka?"
    },
    {
      "id": "l12-q4",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "これ か あれ を ください。",
      "options": [
        "Please give me this or that.",
        "Please give me this and that.",
        "Is this that?",
        "Which one do you want?"
      ],
      "correctAnswer": 0,
      "explanation": "'これ か あれ' = this or that.",
      "romaji": "kore ka are o kudasai."
    },
    {
      "id": "l12-q5",
      "type": "word-bank",
      "prompt": "Assemble: 'Is today Monday or Tuesday?'",
      "targetEn": "Is today Monday or Tuesday?",
      "chips": [
        "きょう",
        "は",
        "げつようび",
        "です",
        "か",
        "かようび",
        "です",
        "か"
      ],
      "correctOrder": [
        "きょう",
        "は",
        "げつようび",
        "です",
        "か",
        "かようび",
        "です",
        "か"
      ],
      "explanation": "Choice question format: A です か、B です か.",
      "romaji": "kyou wa getsuyoubi desu ka kayoubi desu ka"
    },
    {
      "id": "l12-q6",
      "type": "fill-blank",
      "prompt": "Which choice word is standard on official registration forms?",
      "sentence": "___ は けいやくしょ など で つかう ことば です。",
      "blankWord": "または",
      "options": [
        "または",
        "それとも",
        "でも",
        "けど"
      ],
      "correctAnswer": 0,
      "explanation": "'または' (又は) is the standard formal word for 'or'.",
      "romaji": "[ ? ] wa keiyakusho nado de tsukau kotoba desu."
    },
    {
      "id": "l12-q7",
      "type": "error-hunt",
      "prompt": "Which sentence misuses the choice word?",
      "options": [
        "にく か さかな を たべます。",
        "コーヒー に します か？それとも、こうちゃ に します か？",
        "あした それとも あさって いきます。",
        "でんわ または メール で れんらく してください。"
      ],
      "correctAnswer": 2,
      "explanation": "'それとも' cannot directly glue two standalone nouns in a sentence; use 'か' (あした か あさって).",
      "romajiOptions": [
        "niku ka sakana o tabemasu.",
        "koohii ni shimasu ka? soretomo, koucha ni shimasu ka?",
        "ashita soretomo asatte ikimasu.",
        "denwa matawa meeru de renraku shite kudasai."
      ]
    },
    {
      "id": "l12-q8",
      "type": "multiple-choice",
      "prompt": "Which choice word specifically starts a follow-up question?",
      "question": "Which choice word specifically starts a follow-up question?",
      "options": [
        "それとも",
        "または",
        "か",
        "そして"
      ],
      "correctAnswer": 0,
      "explanation": "'それとも' starts alternative questions.",
      "romajiOptions": [
        "soretomo",
        "matawa",
        "ka",
        "soshite"
      ]
    },
    {
      "id": "l12-q9",
      "type": "word-bank",
      "prompt": "Build: 'Apple or banana'",
      "targetEn": "Apple or banana",
      "chips": [
        "りんご",
        "か",
        "バナナ",
        "それとも",
        "または"
      ],
      "correctOrder": [
        "りんご",
        "か",
        "バナナ"
      ],
      "explanation": "'りんご か バナナ' uses particle か for 'or'.",
      "romaji": "ringo ka banana"
    },
    {
      "id": "l12-q10",
      "type": "fill-blank",
      "prompt": "Say: \"Please lend me a pen or a pencil.\"",
      "sentence": "ぺん ___ えんぴつ を かして ください。",
      "blankWord": "か",
      "options": [
        "か",
        "それとも",
        "けど",
        "が"
      ],
      "correctAnswer": 0,
      "explanation": "'か' links the nouns ぺん and えんぴつ.",
      "romaji": "pen [ ? ] enpitsu o kashite kudasai."
    }
  ]
};

export const lessonMeta = {
  "id": "choice-or-words",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Choice Words (Ka, Matawa, Soretomo)"
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
