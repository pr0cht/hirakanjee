// JLPT N5 Lesson Module
export const lesson = {
  "id": "basic-structure",
  "number": 1,
  "title": "JLPT N5: Basic structure ～は～desu. ... wa ... desu.",
  "shortTitle": "Basic Structure (~は~です)",
  "subtitle": "Master the core topic-comment sentence pattern and polite copula.",
  "description": "The foundation of Japanese grammar: defining topics with the particle は (wa) and expressing equivalence, descriptions, and polite states with です (desu).",
  "sections": [
    {
      "title": "1. Topic-Comment Pattern: [Topic] は [Description] desu.",
      "content": "In Japanese, sentences follow a Topic-Comment pattern. The particle は (written with the hiragana 'ha' but pronounced 'wa') flags what the sentence is about.\n        \nStructure Formula:\n  A は B desu. (As for A, it is B / A is B.)",
      "table": {
        "headers": [
          "Role",
          "Japanese",
          "Pronunciation",
          "Meaning"
        ],
        "rows": [
          [
            "Topic Marker",
            "は",
            "wa",
            "As for... / Speaking of..."
          ],
          [
            "Affirmative Copula",
            "です",
            "desu",
            "is / am / are"
          ],
          [
            "Question Marker",
            "か",
            "ka",
            "? (turns sentence into question)"
          ]
        ]
      },
      "examples": [
        {
          "jp": "わたし は がくせい です。",
          "romaji": "Watashi wa gakusei desu.",
          "en": "I am a student."
        },
        {
          "jp": "これ は にほんご の ほん です。",
          "romaji": "Kore wa nihongo no hon desu.",
          "en": "This is a Japanese language book."
        },
        {
          "jp": "たなかさん は せんせい です。",
          "romaji": "Tanaka-san wa sensei desu.",
          "en": "Mr. Tanaka is a teacher."
        }
      ]
    },
    {
      "title": "2. Four Polite Tenses of です (Desu)",
      "content": "The copula です inflects across present/future and past, affirmative and negative. Memorize these four primary conjugations:",
      "table": {
        "headers": [
          "Tense",
          "Form",
          "Romaji",
          "Meaning"
        ],
        "rows": [
          [
            "Present Affirmative",
            "～です",
            "~ desu",
            "is / am / are"
          ],
          [
            "Present Negative",
            "～じゃありません / ～ではありません",
            "~ ja arimasen / dewa arimasen",
            "is not / are not"
          ],
          [
            "Past Affirmative",
            "～でした",
            "~ deshita",
            "was / were"
          ],
          [
            "Past Negative",
            "～じゃありませんでした",
            "~ ja arimasen deshita",
            "was not / were not"
          ]
        ]
      },
      "examples": [
        {
          "jp": "わたし は いしゃ じゃありません。",
          "romaji": "Watashi wa isha ja arimasen.",
          "en": "I am not a doctor."
        },
        {
          "jp": "きのう は にちようび でした。",
          "romaji": "Kinou wa nichiyoubi deshita.",
          "en": "Yesterday was Sunday."
        },
        {
          "jp": "おととい は やすみ じゃありませんでした。",
          "romaji": "Ototoi wa yasumi ja arimasen deshita.",
          "en": "The day before yesterday was not a day off."
        }
      ]
    },
    {
      "title": "3. Asking Questions with か (Ka)",
      "content": "To make a question in Japanese, simply add the particle か (ka) to the end of the sentence with rising intonation. You do not change the word order!",
      "examples": [
        {
          "jp": "あなた は がくせい です か？",
          "romaji": "Anata wa gakusei desu ka.",
          "en": "Are you a student?"
        },
        {
          "jp": "はい、がくせい です。",
          "romaji": "Hai, gakusei desu.",
          "en": "Yes, I am a student."
        },
        {
          "jp": "いいえ、がくせい じゃありません。",
          "romaji": "Iie, gakusei ja arimasen.",
          "en": "No, I am not a student."
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "l1-q1",
      "type": "multiple-choice",
      "prompt": "How is the topic-marking particle 'は' pronounced when used after a topic?",
      "question": "How is the topic-marking particle 'は' pronounced when used after a topic?",
      "options": [
        "ha",
        "wa",
        "ba",
        "ya"
      ],
      "correctAnswer": 1,
      "explanation": "Although spelled with the hiragana character 'は' (ha), when acting as a grammatical topic marker it is always pronounced 'wa'."
    },
    {
      "id": "l1-q2",
      "type": "word-bank",
      "prompt": "Build the Japanese sentence: 'I am a student.'",
      "targetEn": "I am a student.",
      "chips": [
        "わたし",
        "は",
        "がくせい",
        "です",
        "せんせい",
        "じゃありません"
      ],
      "correctOrder": [
        "わたし",
        "は",
        "がくせい",
        "です"
      ],
      "explanation": "The topic わたし (I) is marked by は (wa), followed by がくせい (student) and polite copula です (desu).",
      "romaji": "watashi wa gakusei desu"
    },
    {
      "id": "l1-q3",
      "type": "fill-blank",
      "prompt": "Choose the missing particle to complete the sentence.",
      "sentence": "きのう ___ にちようび でした。",
      "blankWord": "は",
      "options": [
        "は",
        "が",
        "を",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "は (wa) marks 'きのう' (yesterday) as the topic of the sentence.",
      "romaji": "kinou [ ? ] nichiyoubi deshita."
    },
    {
      "id": "l1-q4",
      "type": "audio-listening",
      "prompt": "Listen to the audio and choose the correct English translation.",
      "audioText": "これ は にほんご の ほん です。",
      "options": [
        "This is a Japanese language book.",
        "That is an English language book.",
        "This is a Japanese teacher.",
        "Whose book is this?"
      ],
      "correctAnswer": 0,
      "explanation": "'これ' (this) + 'は' + 'にほんご の ほん' (Japanese book) + 'です' (is).",
      "romaji": "kore wa nihongo no hon desu."
    },
    {
      "id": "l1-q5",
      "type": "word-bank",
      "prompt": "Build the Japanese sentence: 'I was not a doctor.'",
      "targetEn": "I was not a doctor.",
      "chips": [
        "わたし",
        "は",
        "いしゃ",
        "じゃありません",
        "でした",
        "です",
        "せんせい"
      ],
      "correctOrder": [
        "わたし",
        "は",
        "いしゃ",
        "じゃありません",
        "でした"
      ],
      "explanation": "Past negative of です is formed by adding でした to じゃありません (じゃありませんでした = was not).",
      "romaji": "watashi wa isha ja arimasen deshita"
    },
    {
      "id": "l1-q6",
      "type": "fill-blank",
      "prompt": "Select the polite affirmative ending to form a question.",
      "sentence": "たなかさん は せんせい ___ か？",
      "blankWord": "です",
      "options": [
        "です",
        "でした",
        "で",
        "ます"
      ],
      "correctAnswer": 0,
      "explanation": "です + か asks the polite present question: 'Is Mr. Tanaka a teacher?'",
      "romaji": "tanaka-san wa sensei [ ? ] ka?"
    },
    {
      "id": "l1-q7",
      "type": "error-hunt",
      "prompt": "Which of the following 4 sentences contains a grammatical error?",
      "options": [
        "わたし は いしゃ です。",
        "きのう は やすみ でした。",
        "おととい は げつようび です。",
        "これ は ぺん じゃありません。"
      ],
      "correctAnswer": 2,
      "explanation": "'おととい' (the day before yesterday) refers to the past, so it must end with the past copula 'でした', not the present 'です'.",
      "romajiOptions": [
        "watashi wa isha desu.",
        "kinou wa yasumi deshita.",
        "ototoi wa getsuyoubi desu.",
        "kore wa pen ja arimasen."
      ]
    },
    {
      "id": "l1-q8",
      "type": "multiple-choice",
      "prompt": "What is the key difference between 'じゃありません' and 'ではありません'?",
      "question": "What is the key difference between 'じゃありません' and 'ではありません'?",
      "options": [
        "ではありません is more formal and used in writing, while じゃありません is conversational.",
        "じゃありません is for past tense, ではありません is for present tense.",
        "ではありません is used only for questions.",
        "They mean completely different things."
      ],
      "correctAnswer": 0,
      "explanation": "Both mean 'is not', but ではありません is formal and written, whereas じゃありません is common in spoken Japanese.",
      "romajiOptions": [
        "dewa arimasen is more formal and used in writing, while ja arimasen is conversational.",
        "ja arimasen is for past tense, dewa arimasen is for present tense.",
        "dewa arimasen is used only for questions.",
        "They mean completely different things."
      ]
    },
    {
      "id": "l1-q9",
      "type": "word-bank",
      "prompt": "Assemble the question: 'Is this Mr. Tanaka's book?'",
      "targetEn": "Is this Mr. Tanaka's book?",
      "chips": [
        "これ",
        "は",
        "たなかさん",
        "の",
        "ほん",
        "です",
        "か",
        "それ"
      ],
      "correctOrder": [
        "これ",
        "は",
        "たなかさん",
        "の",
        "ほん",
        "です",
        "か"
      ],
      "explanation": "Possession is linked with の: たなかさん の ほん (Mr. Tanaka's book), ended with question particle か.",
      "romaji": "kore wa tanaka-san no hon desu ka"
    },
    {
      "id": "l1-q10",
      "type": "fill-blank",
      "prompt": "Choose the correct form to say: \"I am not a student.\"",
      "sentence": "わたし は がくせい ___。",
      "blankWord": "じゃありません",
      "options": [
        "じゃありません",
        "でした",
        "じゃありませんでした",
        "ありません"
      ],
      "correctAnswer": 0,
      "explanation": "'じゃありません' expresses the present negative state ('am not').",
      "romaji": "watashi wa gakusei [ ? ]."
    }
  ]
};

export const lessonMeta = {
  "id": "basic-structure",
  "jlptLevel": "N5",
  "category": "core",
  "grammarPoints": [
    "Basic Structure (~は~です)"
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
