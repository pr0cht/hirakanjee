// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-scope-and-inclusion",
  "number": 25,
  "title": "JLPT N3 Grammar: Scope, Inclusion & Stance (~だけでなく, ~をはじめ, ~にとって, ~に対して)",
  "shortTitle": "Scope, Inclusion & Stance (~だけでなく, ~をはじめ, etc.)",
  "category": "Scope & Stance",
  "subtitle": "Master range expansion, exemplary inclusion, perspective viewpoints, and contrastive targets.",
  "formula": "～だけでなく～も • N + をはじめ(として) • N + にとって • N + に対して",
  "description": "Express relational scope and perspective: ～だけでなく (not only X, but also Y), ～をはじめ (starting with X as a prime representative), ～にとって (from the standpoint of someone), and ～に対して (toward someone / in contrast to).",
  "sections": [
    {
      "title": "1. ～だけでなく～も (Not Only... But Also...)",
      "content": "Expands the scope of a statement from one primary element to another surprising or additive element.\n\nConnection: Noun / Verb (Plain) / Adjectives + だけでなく ～ も.",
      "table": null,
      "examples": [
        {
          "jp": "彼女は英語だけでなく、フランス語も流暢に話せます。",
          "romaji": "Kanojo wa Eigo dake de naku, Furansugo mo ryuuchou ni hanasemasu.",
          "en": "Not only can she speak English, but she also speaks French fluently."
        },
        {
          "jp": "このアニメは子供だけでなく、大人にも大人気です。",
          "romaji": "Kono anime wa kodomo dake de naku, otona ni mo daininki desu.",
          "en": "This anime is hugely popular not only with children, but also with adults."
        }
      ]
    },
    {
      "title": "2. ～をはじめ（として）(Starting with / Exemplary Representative)",
      "content": "Introduces a primary representative example followed by the broader group it belongs to.\n\nConnection: Noun + をはじめ / をはじめとして.",
      "table": null,
      "examples": [
        {
          "jp": "富士山をはじめ、日本には美しい山がたくさんあります。",
          "romaji": "Fujisan o hajime, Nihon ni wa utsukushii yama ga takusan arimasu.",
          "en": "Starting with Mt. Fuji, there are many beautiful mountains in Japan."
        },
        {
          "jp": "校長先生をはじめ、先生方に心から感謝いたします。",
          "romaji": "Kouchou-sensei o hajime, senseigata ni kokoro kara kansha itashimasu.",
          "en": "Starting with the principal, I extend my heartfelt thanks to all the teachers."
        }
      ]
    },
    {
      "title": "3. ～にとって (From the Standpoint Of / For Someone)",
      "content": "Marks the person or entity from whose perspective an evaluation, judgment, or feeling is made. The following clause typically expresses value judgments (大切, 難しい, 必要, 有利).\n\nConnection: Noun (person/group) + にとって.",
      "table": null,
      "examples": [
        {
          "jp": "留学生にとって、漢字を覚えることはとても大変です。",
          "romaji": "Ryuugakusei ni totte, kanji o oboeru koto wa totemo taihen desu.",
          "en": "For international students, memorizing kanji is very difficult."
        },
        {
          "jp": "家族は私にとって何よりもかけがえのない存在です。",
          "romaji": "Kazoku wa watashi ni totte nani yori mo kakegae no nai sonzai desu.",
          "en": "To me, my family is more irreplaceable than anything else."
        }
      ]
    },
    {
      "title": "4. ～に対して (Toward / In Sharp Contrast To)",
      "content": "Two major uses in N3:\n1. Direction of action/attitude toward a person or topic: 目上の人に対して丁寧な言葉を使う (use polite words toward superiors).\n2. Contrast between two opposing subjects: 兄が外向的なのに対して、弟は内向的だ (In contrast to the older brother being extroverted, the younger brother is introverted).",
      "table": {
        "headers": ["Pattern", "Function", "Key Particle Pairing", "Typical Focus"],
        "rows": [
          ["～だけでなく～も", "Addition / Expansion", "～だけでなく ～も", "Inclusive range"],
          ["～をはじめ", "Prime example", "～をはじめ(として)", "Representative item"],
          ["～にとって", "Evaluative stance", "～にとって [評価]", "Value from a standpoint"],
          ["～に対して", "Target / Contrast", "～に対して", "Action toward target / A vs B"]
        ]
      },
      "examples": [
        {
          "jp": "お客様に対して失礼な態度をとってはいけません。",
          "romaji": "Okyakusama ni taishite shitsurei na taido o totte wa ikemasen.",
          "en": "You must not take a rude attitude toward customers."
        },
        {
          "jp": "都市部の人口が増加しているのに対して、農村部は減少している。",
          "romaji": "Toshibu no jinkou ga zouka shite iru no ni taishite, nousonbu wa genshou shite iru.",
          "en": "In contrast to urban populations increasing, rural populations are decreasing."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the expression meaning \"not only English, but also French\":",
      "question": "彼女は英語___、フランス語も話せます。",
      "options": [
        "だけでなく",
        "をはじめ",
        "にとって",
        "に対して"
      ],
      "correctAnswer": 0,
      "explanation": "～だけでなく～も is the classic N3 inclusive grammar meaning 'not only X, but also Y'.",
      "romaji": "Kanojo wa Eigo ___, Furansugo mo hanasemasu.",
      "romajiOptions": [
        "dake de naku",
        "o hajime",
        "ni totte",
        "ni taishite"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with scope expansion (not only... but also):",
      "sentence": "この映画は子供だけでなく、大人___人気があります。",
      "blankWord": "にも",
      "options": [
        "にも",
        "のを",
        "へは",
        "より"
      ],
      "correctAnswer": 0,
      "explanation": "だけでなく pairs naturally with にも or も to denote inclusion.",
      "romaji": "Kono eiga wa kodomo dake de naku, otona ___ ninki ga arimasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "Which grammar introduces a prime representative example for a larger category?",
      "question": "「富士山___、日本には名所が多い。」 Which pattern fits best?",
      "options": [
        "をはじめ",
        "にとって",
        "に対して",
        "にかぎって"
      ],
      "correctAnswer": 0,
      "explanation": "～をはじめ introduces Mt. Fuji as the prime representative of Japanese famous sites.",
      "romaji": "Fujisan ___, Nihon ni wa meisho ga ooi.",
      "romajiOptions": [
        "o hajime",
        "ni totte",
        "ni taishite",
        "ni kagitte"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Starting with Mt. Fuji, there are many mountains.\"",
      "chips": [
        "富士山を",
        "はじめ、",
        "多くの山が",
        "あります"
      ],
      "correctOrder": [
        "富士山を",
        "はじめ、",
        "多くの山が",
        "あります"
      ],
      "explanation": "Structure: [Representative Noun をはじめ] [General Category Statement]."
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"from the perspective of international students\"): ",
      "sentence": "留学生___、日本語の敬語は難しい。",
      "blankWord": "にとって",
      "options": [
        "にとって",
        "に対して",
        "に関して",
        "において"
      ],
      "correctAnswer": 0,
      "explanation": "～にとって marks the viewpoint or evaluator for whom something is difficult or important.",
      "romaji": "Ryuugakusei ___, Nihongo no keigo wa muzukashii."
    },
    {
      "type": "multiple-choice",
      "prompt": "Contrast にとって vs に関して:",
      "question": "How does にとって differ from に関して?",
      "options": [
        "にとって indicates a subjective evaluation/standpoint ('for/to someone'), while に関して denotes the objective topic ('regarding/concerning')",
        "に関して is only used with adjectives",
        "にとって cannot follow a person noun",
        "They have identical meaning and usage"
      ],
      "correctAnswer": 0,
      "explanation": "～にとって expresses value judgments from someone's viewpoint ('for me, it is important'). ～に関して introduces an informational topic ('concerning the exam').",
      "romaji": "How does ni totte differ from ni kanshite?",
      "romajiOptions": [
        "Evaluative standpoint vs topic domain",
        "Only used with adjectives",
        "Cannot follow person nouns",
        "Identical meaning"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the particle phrase expressing polite attitude toward customers:",
      "question": "お客様___、丁寧な言葉を使いましょう。",
      "options": [
        "に対して",
        "にとって",
        "をはじめ",
        "だけでなく"
      ],
      "correctAnswer": 0,
      "explanation": "～に対して indicates the target of an action, stance, or attitude ('toward customers').",
      "romaji": "Okyakusama ___, teinei na kotoba o tsukaimashou.",
      "romajiOptions": [
        "ni taishite",
        "ni totte",
        "o hajime",
        "dake de naku"
      ]
    },
    {
      "type": "error-hunt",
      "prompt": "Which sentence misuses ～に対して where ～にとって is required?",
      "options": [
        "私に対して、健康は何よりも大切です",
        "先生に対して失礼なことを言ってしまった",
        "兄の活発さに対して、弟は物静かだ",
        "質問に対して丁寧に答えた"
      ],
      "correctAnswer": 0,
      "explanation": "「私に対して、健康は何よりも大切です」 is wrong. Personal value judgements require 「私にとって」 ('to me / from my perspective').",
      "romajiOptions": [
        "Watashi ni taishite, kenkou wa nani yori mo taisetsu desu",
        "Sensei ni taishite shitsurei na koto o itte shimatta",
        "Ani no kappatsusa ni taishite, otouto wa monoshizuka da",
        "Shitsumon ni taishite teinei ni kotaeta"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-scope-and-inclusion",
  "jlptLevel": "N3",
  "grammarPoints": [
    "～だけでなく～も",
    "～をはじめ",
    "～にとって",
    "～に対して"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n3"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
