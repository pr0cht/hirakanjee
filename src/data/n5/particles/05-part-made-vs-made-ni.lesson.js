// JLPT N4 Lesson Module
export const lesson = {
  "id": "part-made-vs-made-ni",
  "number": 5,
  "section": "particles",
  "title": "Japanese \"Until\" vs \"By\": Made vs Made Ni Time Expressions",
  "shortTitle": "まで (Until) vs までに (By)",
  "subtitle": "Master the crucial difference between continuous action (まで) and strict deadlines (までに).",
  "rules": [
    {
      "title": "まで: Continuous Action \"Until\"",
      "formula": "[Time / Day] まで + [Continuous Verb]",
      "explanation": "まで means \"until\" or \"up to\". The action continues nonstop all the way through until that time arrives: \"5じ まで はたらきます\" (I work UNTIL 5:00). \"あした まで まちます\" (I will wait until tomorrow)."
    },
    {
      "title": "までに: Strict Deadline \"By / Before\"",
      "formula": "[Time / Day] までに + [Single-Event Verb]",
      "explanation": "までに means \"by\" (at or before). The action does not continue for hours; it is a single task completed BEFORE the deadline strikes: \"5じ までに レポート を だします\" (I will submit the report BY 5:00)."
    },
    {
      "title": "Verb Types Determine the Particle",
      "formula": "Continuous verbs (べんきょうする, はたらく, ねる, まつ) -> まで | Single completion verbs (だす, かえる, おわる, はらう) -> までに",
      "explanation": "Pairing までに with a continuous action like はたらきます is ungrammatical (\"5じ までに はたらきます\" makes no sense in Japanese)."
    }
  ],
  "tables": [
    {
      "title": "まで vs までに Comparison Chart",
      "headers": [
        "Expression",
        "English",
        "Type of Action",
        "Typical Verbs",
        "Example"
      ],
      "rows": [
        [
          "まで (made)",
          "Until (continuation)",
          "Continuous state or ongoing activity",
          "はたらく, まつ, べんきょうする, ねる",
          "5じ まで まちます (Wait until 5:00)."
        ],
        [
          "までに (made ni)",
          "By / Before (deadline)",
          "One-time completion / deadline event",
          "だす (submit), かえる (return), はらう (pay)",
          "きんようび までに だします (Submit by Friday)."
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "なんじ まで はたらきます か？",
      "romaji": "nanji made hatarakimasu ka?",
      "en": "Until what time do you work?"
    },
    {
      "ja": "あした までに レポート を だして ください。",
      "romaji": "ashita made ni repooto o dashite kudasai.",
      "en": "Please submit the report by tomorrow."
    },
    {
      "ja": "きんようび まで にほん に います。",
      "romaji": "kinyoubi made nihon ni imasu.",
      "en": "I will be in Japan until Friday."
    },
    {
      "ja": "6じ までに うち に かえらなければ なりません。",
      "romaji": "rokuji made ni uchi ni kaeranakereba narimasen.",
      "en": "I must return home by 6:00."
    }
  ],
  "quiz": [
    {
      "id": "part5-q1",
      "type": "fill-blank",
      "prompt": "Deadline marker: \"Please submit homework BY tomorrow.\" -> \"あした [ ? ] しゅくだい を だして ください。\"",
      "options": [
        "までに",
        "まで",
        "から",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "Submitting homework is a one-time deadline, requiring までに (by)."
    },
    {
      "id": "part5-q2",
      "type": "fill-blank",
      "prompt": "Continuous activity: \"I will study UNTIL 10:00.\" -> \"10じ [ ? ] べんきょうします。\"",
      "options": [
        "まで",
        "までに",
        "から",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "Studying continues up to 10:00, requiring まで (until)."
    },
    {
      "id": "part5-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"I must return home by 6:00.\"",
      "targetEn": "I must return home by 6:00.",
      "chips": [
        "6じ までに",
        "うち に",
        "かえります",
        "6じ まで",
        "を"
      ],
      "correctAnswerSentence": "6じ までに うち に かえります",
      "explanation": "Returning home is a one-time arrival event before a deadline: 6じ までに."
    },
    {
      "id": "part5-q4",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly uses a deadline particle with continuous work?",
      "options": [
        "まいにち 5じ までに はたらきます。",
        "まいにち 5じ まで はたらきます。",
        "あした までに でんわ を します。",
        "らいしゅう まで まちます。"
      ],
      "correctAnswer": 0,
      "explanation": "はたらきます is continuous work and cannot take the deadline particle までに. It must be \"5じ まで はたらきます\".",
      "romajiOptions": [
        "mainichi goji made ni hatarakimasu.",
        "mainichi goji made hatarakimasu.",
        "ashita made ni denwa o shimasu.",
        "raishuu made machimasu."
      ]
    },
    {
      "id": "part5-q5",
      "type": "multiple-choice",
      "prompt": "Which of the following verbs naturally pairs with \"までに\" (by)?",
      "question": "Which of the following verbs naturally pairs with \"までに\" (by)?",
      "options": [
        "だします (submit / hand in)",
        "ねます (sleep)",
        "べんきょうします (study)",
        "はたらきます (work)"
      ],
      "correctAnswer": 0,
      "explanation": "だします (submit) is a single event completed before a deadline."
    },
    {
      "id": "part5-q6",
      "type": "audio-listening",
      "prompt": "Listen and identify the deadline.",
      "audioText": "きんようび までに おかね を はらって ください。",
      "options": [
        "Please pay the money by Friday.",
        "Please pay the money until Friday.",
        "Please pay the money on Friday morning.",
        "I paid the money on Friday."
      ],
      "correctAnswer": 0,
      "explanation": "きんようび までに = by Friday."
    },
    {
      "id": "part5-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I will wait until 3:00.\"",
      "targetEn": "I will wait until 3:00.",
      "chips": [
        "3じ まで",
        "まちます",
        "3じ までに",
        "いきます"
      ],
      "correctAnswerSentence": "3じ まで まちます",
      "explanation": "まちます (waiting) is continuous until the point in time: 3じ まで."
    },
    {
      "id": "part5-q8",
      "type": "multiple-choice",
      "prompt": "What does \"5じ まで います\" mean?",
      "question": "What does \"5じ まで います\" mean?",
      "options": [
        "I will be here until 5:00.",
        "I will arrive by 5:00.",
        "I will leave after 5:00.",
        "I am here at 5:00."
      ],
      "correctAnswer": 0,
      "explanation": "います is continuous presence: staying until 5:00."
    },
    {
      "id": "part5-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "ぎんこう は なんじ まで です か？",
      "options": [
        "Until what time is the bank open?",
        "What time does the bank open?",
        "Where is the bank?",
        "Is the bank open today?"
      ],
      "correctAnswer": 0,
      "explanation": "なんじ まで = until what time."
    },
    {
      "id": "part5-q10",
      "type": "fill-blank",
      "prompt": "Complete: \"Please call me BY 8:00 tonight.\" -> \"こんばん 8じ [ ? ] でんわ を して ください。\"",
      "options": [
        "までに",
        "まで",
        "から",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "Calling is a single deadline action completed before 8:00: 8じ までに."
    }
  ]
};

export const lessonMeta = {
  "id": "part-made-vs-made-ni",
  "jlptLevel": "N5",
  "category": "particles",
  "grammarPoints": [
    "まで (Until) vs までに (By)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-particles"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
