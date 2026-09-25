// JLPT N4 Lesson Module
export const lesson = {
  "id": "verb-movement",
  "number": 1,
  "section": "verbs",
  "title": "Movement Verbs: Ikimasu, Kimasu, Kaerimasu (Ni / E / De)",
  "shortTitle": "Go, Come, Return",
  "subtitle": "Learn direction, destination (に / へ), and transit means (で) with 行きます, 来ます, and 帰ります.",
  "rules": [
    {
      "title": "Core Movement Verbs",
      "formula": "行きます (いきます - Go) | 来ます (きます - Come) | 帰ります (かえります - Return/Go home)",
      "explanation": "Movement verbs describe traveling between locations: いきます moves away from the speaker, きます moves toward the speaker, and かえります moves back to one's home, base, or home country."
    },
    {
      "title": "Destination Particles: に vs へ",
      "formula": "[Place] に / へ + [Movement Verb]",
      "explanation": "Both に (ni = target/goal) and へ (pronounced \"e\" = direction) mark destinations: \"とうきょう に いきます\" or \"とうきょう へ いきます\" (I go to Tokyo). Note: For verbs of meeting/giving (あいます, あげます), ONLY に is valid: \"ともだち に あいます\" (NOT ともだち へ)."
    },
    {
      "title": "Means of Transit: で (By means of)",
      "formula": "[Vehicle / Method] で + [Movement Verb]",
      "explanation": "The particle で specifies the method of transit: でんしゃ で (by train), バス で (by bus), くるま で (by car), ひこうき で (by airplane), じてんしゃ で (by bicycle). Exception: On foot is あるいて (no で)."
    }
  ],
  "tables": [
    {
      "title": "Movement Conjugation Matrix",
      "headers": [
        "Verb",
        "Present Affirmative",
        "Present Negative",
        "Past Affirmative",
        "Past Negative"
      ],
      "rows": [
        [
          "行きます (go)",
          "いきます (ikimasu)",
          "いきません (ikimasen)",
          "いきました (ikimashita)",
          "いきませんでした (ikimasen deshita)"
        ],
        [
          "来ます (come)",
          "きます (kimasu)",
          "きません (kimasen)",
          "きました (kimashita)",
          "きませんでした (kimasen deshita)"
        ],
        [
          "帰ります (return)",
          "かえります (kaerimasu)",
          "かえりません (kaerimasen)",
          "かえりました (kaerimashita)",
          "かえりませんでした (kaerimasen deshita)"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "わたし は でんしゃ で かいしゃ に いきます。",
      "romaji": "watashi wa densha de kaisha ni ikimasu.",
      "en": "I go to the company by train."
    },
    {
      "ja": "なんじ に うち へ かえります か？",
      "romaji": "nanji ni uchi e kaerimasu ka?",
      "en": "What time will you return home?"
    },
    {
      "ja": "ともだち が にほん に きました。",
      "romaji": "tomodachi ga nihon ni kimashita.",
      "en": "My friend came to Japan."
    },
    {
      "ja": "えき から あるいて いきました。",
      "romaji": "eki kara aruite ikimashita.",
      "en": "I went on foot from the station."
    }
  ],
  "quiz": [
    {
      "id": "verb1-q1",
      "type": "word-bank",
      "prompt": "Assemble: \"I go to school by bicycle.\"",
      "targetEn": "I go to school by bicycle.",
      "chips": [
        "わたし は",
        "じてんしゃ で",
        "がっこう に",
        "いきます",
        "じてんしゃ に",
        "でんしゃ"
      ],
      "correctAnswerSentence": "わたし は じてんしゃ で がっこう に いきます",
      "explanation": "Vehicle uses で (じてんしゃ で) and destination uses に (がっこう に)."
    },
    {
      "id": "verb1-q2",
      "type": "fill-blank",
      "prompt": "Choose the correct transit particle: \"くるま [ ? ] とうきょう へ いきました。\"",
      "options": [
        "で",
        "に",
        "を",
        "へ"
      ],
      "correctAnswer": 0,
      "explanation": "くるま で indicates the means of transportation (by car).",
      "romaji": "kuruma [ ? ] toukyou e ikimashita.",
      "romajiOptions": [
        "de",
        "ni",
        "o",
        "e"
      ]
    },
    {
      "id": "verb1-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify where the speaker went.",
      "audioText": "きのう きょうと に いきました。",
      "options": [
        "Yesterday I went to Kyoto.",
        "Yesterday I came from Kyoto.",
        "Tomorrow I will go to Kyoto.",
        "Yesterday I went to Tokyo."
      ],
      "correctAnswer": 0,
      "explanation": "きのう = yesterday, きょうと に = to Kyoto, いきました = went.",
      "romaji": "kinou kyouto ni ikimashita."
    },
    {
      "id": "verb1-q4",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a transit particle with \"on foot\"?",
      "options": [
        "あるいて で がっこう に いきます。",
        "あるいて がっこう に いきます。",
        "バス で えき に いきます。",
        "タクシー で かえりました。"
      ],
      "correctAnswer": 0,
      "explanation": "\"あるいて\" (on foot) is already a te-form adverbial expression and NEVER takes \"で\". Say \"あるいて いきます\", NOT \"あるいて で\".",
      "romajiOptions": [
        "aruite de gakkou ni ikimasu.",
        "aruite gakkou ni ikimasu.",
        "basu de eki ni ikimasu.",
        "takushii de kaerimashita."
      ]
    },
    {
      "id": "verb1-q5",
      "type": "multiple-choice",
      "prompt": "What is the irregular kanji reading of the particle \"へ\"?",
      "question": "What is the irregular kanji reading of the particle \"へ\"?",
      "options": [
        "e",
        "he",
        "te",
        "de"
      ],
      "correctAnswer": 0,
      "explanation": "When written as a direction particle, へ is pronounced \"e\" (never \"he\").",
      "romajiOptions": [
        "e",
        "he",
        "te",
        "de"
      ]
    },
    {
      "id": "verb1-q6",
      "type": "word-bank",
      "prompt": "Assemble: \"Did Mr. Tanaka return home?\"",
      "targetEn": "Did Mr. Tanaka return home?",
      "chips": [
        "たなかさん は",
        "うち に",
        "かえりました",
        "か？",
        "きました",
        "いきます"
      ],
      "correctAnswerSentence": "たなかさん は うち に かえりました か？",
      "explanation": "Returning home uses the verb かえりました + か？."
    },
    {
      "id": "verb1-q7",
      "type": "fill-blank",
      "prompt": "Complete: \"I will meet my friend tomorrow.\" -> \"あした ともだち [ ? ] あいます。\"",
      "options": [
        "に",
        "へ",
        "で",
        "を"
      ],
      "correctAnswer": 0,
      "explanation": "The verb あいます (to meet) strictly pairs with に, never へ.",
      "romaji": "ashita tomodachi [ ? ] aimasu.",
      "romajiOptions": [
        "ni",
        "e",
        "de",
        "o"
      ]
    },
    {
      "id": "verb1-q8",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "ひこうき で にほん に きました。",
      "options": [
        "I came to Japan by airplane.",
        "I went to Japan by ship.",
        "I am going to Japan by plane.",
        "I will return from Japan."
      ],
      "correctAnswer": 0,
      "explanation": "ひこうき で (by plane), にほん に (to Japan), きました (came).",
      "romaji": "hikouki de nihon ni kimashita."
    },
    {
      "id": "verb1-q9",
      "type": "multiple-choice",
      "prompt": "Which sentence means \"I did not go to school on Sunday\"?",
      "question": "Which sentence means \"I did not go to school on Sunday\"?",
      "options": [
        "にちようび は がっこう に いきませんでした。",
        "にちようび は がっこう に いきました。",
        "にちようび は がっこう に いきません。",
        "にちようび は がっこう に いきます。"
      ],
      "correctAnswer": 0,
      "explanation": "にちようび は (on Sunday), がっこう に (to school), いきませんでした (did not go - past negative).",
      "romajiOptions": [
        "nichiyoubi wa gakkou ni ikimasen deshita.",
        "nichiyoubi wa gakkou ni ikimashita.",
        "nichiyoubi wa gakkou ni ikimasen.",
        "nichiyoubi wa gakkou ni ikimasu."
      ]
    },
    {
      "id": "verb1-q10",
      "type": "fill-blank",
      "prompt": "Complete: \"What time will you return home?\" -> \"なんじ に うち へ [ ? ] か？\"",
      "sentence": "なんじ に うち へ [ ? ] か？",
      "options": [
        "かえります",
        "いきます",
        "きます",
        "たべます"
      ],
      "correctAnswer": 0,
      "explanation": "かえります specifically means to return to one's home or base.",
      "romaji": "nanji ni uchi e [ ? ] ka?",
      "romajiOptions": [
        "kaerimasu",
        "ikimasu",
        "kimasu",
        "tabemasu"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "verb-movement",
  "jlptLevel": "N5",
  "category": "verbs",
  "grammarPoints": [
    "Go, Come, Return"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-verbs"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
