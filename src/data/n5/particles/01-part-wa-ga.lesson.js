// JLPT N5 Lesson Module
export const lesson = {
  "id": "part-wa-ga",
  "number": 1,
  "section": "particles",
  "title": "は vs が: Topic vs Subject Mastery",
  "shortTitle": "は (Wa) vs が (Ga)",
  "subtitle": "Master the topic marker は and subject marker が, contrast, new information, and questions.",
  "rules": [
    {
      "title": "Topic (は) vs Subject (が)",
      "formula": "[Topic] は: \"As for...\" (Old info / Setting) | [Subject] が: \"Specifically...\" (New info / Focus)",
      "explanation": "は introduces what the sentence is about (the known topic). が introduces new, specific information or identifies the subject performing an action: \"だれ が きました か？\" -> \"たなかさん が きました\" (Mr. Tanaka is the one who came)."
    },
    {
      "title": "Contrastive は (Contrast Between Two Things)",
      "formula": "A は [Positive] が、B は [Negative]",
      "explanation": "When contrasting two items, use は for both: \"おちゃ は のみます が、コーヒー は のみません\" (I drink tea, but as for coffee, I don't drink it)."
    },
    {
      "title": "Question Words Cannot Take は",
      "formula": "Question words (だれ, なに, どこ) MUST take が (Never は!)",
      "explanation": "Because interrogative words represent unknown information, they can never be marked as a known topic with は. Always say: \"だれ が きました か\" (Who came?), \"なに が あります か\" (What is there?)."
    },
    {
      "title": "Answers to \"が\" Questions Use \"が\"",
      "formula": "Q: [Question Word] が ... か？ -> A: [Answer] が ... です",
      "explanation": "When answering an interrogative question that asked with が, repeat が for the focal answer: \"だれ が せんせい です か？\" -> \"やまださん が せんせい です\"."
    }
  ],
  "tables": [
    {
      "title": "は vs が Diagnostic Matrix",
      "headers": [
        "Context / Rule",
        "Particle",
        "Explanation",
        "Example"
      ],
      "rows": [
        [
          "Introducing Known Topic",
          "は (wa)",
          "Sets the frame (\"As for X...\")",
          "わたし は がくせい です。"
        ],
        [
          "Contrasting Two Items",
          "は (wa)",
          "Highlighting differences",
          "ひる は いそがしい です が、よる は ひま です。"
        ],
        [
          "Unknown Question Word",
          "が (ga)",
          "Interrogative subject focus",
          "だれ が きました か？"
        ],
        [
          "Direct Answer to Question",
          "が (ga)",
          "Focusing the identity",
          "たなかさん が きました。"
        ],
        [
          "Describing Phenomena / Senses",
          "が (ga)",
          "Immediate sensory observation",
          "あめ が ふっています。 (It is raining!)"
        ],
        [
          "Predicate Adjectives / Desires",
          "が (ga)",
          "Object of like/hate/skill/desire",
          "すし が すき です。 / みず が のみたい。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "わたし は にほんじん です。",
      "romaji": "watashi wa nihonjin desu.",
      "en": "I am Japanese (topic: I)."
    },
    {
      "ja": "だれ が ケーキ を たべました か？",
      "romaji": "dare ga keeki o tabemashita ka?",
      "en": "Who ate the cake?"
    },
    {
      "ja": "やまださん が たべました。",
      "romaji": "yamada-san ga tabemashita.",
      "en": "Mr. Yamada is the one who ate it."
    },
    {
      "ja": "あめ が ふって います。",
      "romaji": "ame ga futte imasu.",
      "en": "Rain is falling (immediate observation)."
    }
  ],
  "quiz": [
    {
      "id": "part1-q1",
      "type": "fill-blank",
      "prompt": "Choose the correct particle for an unknown subject: \"だれ [ ? ] きました か？\" (Who came?)",
      "options": [
        "が",
        "は",
        "を",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "Question words like だれ (who) can never be marked by は; they must take が."
    },
    {
      "id": "part1-q2",
      "type": "word-bank",
      "prompt": "Assemble: \"Mr. Tanaka is the one who came.\"",
      "targetEn": "Mr. Tanaka is the one who came.",
      "chips": [
        "たなかさん が",
        "きました",
        "たなかさん は",
        "きます"
      ],
      "correctAnswerSentence": "たなかさん が きました",
      "explanation": "Answering a \"Who came?\" question focuses on the specific subject using が."
    },
    {
      "id": "part1-q3",
      "type": "audio-listening",
      "prompt": "Listen and identify the contrast.",
      "audioText": "おちゃ は のみます が、コーヒー は のみません。",
      "options": [
        "I drink tea, but I do not drink coffee.",
        "I drink coffee, but I do not drink tea.",
        "I drink both tea and coffee.",
        "I drink neither tea nor coffee."
      ],
      "correctAnswer": 0,
      "explanation": "Contrastive は contrasts drinking tea (positive) with coffee (negative)."
    },
    {
      "id": "part1-q4",
      "type": "error-hunt",
      "prompt": "Which sentence incorrectly pairs a question word with は?",
      "options": [
        "だれ は せんせい です か？",
        "だれ が せんせい です か？",
        "たなかさん は せんせい です。",
        "わたし は がくせい です。"
      ],
      "correctAnswer": 0,
      "explanation": "Question words can never take は. \"だれ は せんせい です か\" is a major grammatical violation; it must be \"だれ が\".",
      "romajiOptions": [
        "dare wa sensei desu ka?",
        "dare ga sensei desu ka?",
        "tanaka-san wa sensei desu.",
        "watashi wa gakusei desu."
      ]
    },
    {
      "id": "part1-q5",
      "type": "multiple-choice",
      "prompt": "Which particle is used to mark an immediate natural observation (e.g. \"Look, it is raining!\")?",
      "question": "Which particle is used to mark an immediate natural observation (e.g. \"Look, it is raining!\")?",
      "options": [
        "が (e.g. あめ が ふって います)",
        "は (e.g. あめ は ふって います)",
        "を (e.g. あめ を ふって います)",
        "で (e.g. あめ で ふって います)"
      ],
      "correctAnswer": 0,
      "explanation": "Spontaneous natural phenomena and sensory observations mark the subject with が."
    },
    {
      "id": "part1-q6",
      "type": "fill-blank",
      "prompt": "Complete: \"I like dogs.\" -> \"わたし は いぬ [ ? ] すき です。\"",
      "options": [
        "が",
        "を",
        "は",
        "に"
      ],
      "correctAnswer": 0,
      "explanation": "The target of feelings, likes, and dislikes (すき, きらい) is marked by が."
    },
    {
      "id": "part1-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"What is inside the box?\"",
      "targetEn": "What is inside the box?",
      "chips": [
        "はこ の なか に",
        "なに が",
        "あります か？",
        "なに は",
        "います"
      ],
      "correctAnswerSentence": "はこ の なか に なに が あります か？",
      "explanation": "なに is an interrogative pronoun, requiring が + あります か？."
    },
    {
      "id": "part1-q8",
      "type": "multiple-choice",
      "prompt": "In \"わたし は すし が すき です\", what are the roles of は and が?",
      "question": "In \"わたし は すし が すき です\", what are the roles of は and が?",
      "options": [
        "は marks the topic (I), and が marks the object of preference (sushi).",
        "は marks the subject, and が marks the direct object.",
        "Both は and が mark subjects.",
        "が is optional and can be omitted."
      ],
      "correctAnswer": 0,
      "explanation": "わたし は sets the topic (\"As for me\"), and すし が indicates the specific thing that is liked."
    },
    {
      "id": "part1-q9",
      "type": "audio-listening",
      "prompt": "Listen and choose the English meaning.",
      "audioText": "ドア が あきました。",
      "options": [
        "The door opened.",
        "I opened the door.",
        "Please open the door.",
        "The door is closed."
      ],
      "correctAnswer": 0,
      "explanation": "ドア が あきました means \"The door opened.\" Note: 'あく' (to open by itself) uses が, while 'あける' (someone opens it) uses を."
    },
    {
      "id": "part1-q10",
      "type": "fill-blank",
      "prompt": "Choose the particle: \"ひるま [ ? ] あつい です が、よる は さむい です。\"",
      "options": [
        "は",
        "が",
        "を",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "Contrastive は balances ひるま は (daytime) with よる は (night)."
    }
  ]
};

export const lessonMeta = {
  "id": "part-wa-ga",
  "jlptLevel": "N5",
  "category": "particles",
  "grammarPoints": [
    "は (Wa) vs が (Ga)"
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
