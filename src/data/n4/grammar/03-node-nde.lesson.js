// JLPT N4 Lesson Module
export const lesson = {
  "id": "node-nde",
  "number": 3,
  "title": "JLPT N4: ～ので・～んで (Natural Reason & Cause)",
  "shortTitle": "～ので・～んで (~node)",
  "category": "Causes & Reasons",
  "subtitle": "Learn how to express reasons or causes naturally with ～ので and ～んで.",
  "formula": "Plain form + ので (Na-adj/Noun: な + ので)",
  "description": "Express causes or reasons with an objective, polite tone. Unlike ～から which sounds subjective or forceful, ～ので presents the cause as a natural fact, making it standard for polite requests and apologies.",
  "sections": [
    {
      "title": "1. Soft and Objective Reasons with ～ので",
      "content": "～ので expresses natural consequence: \"Because X is the case, naturally Y follows.\"\n\nIt is preferred when speaking to superiors, customers, or when apologizing for a delay.",
      "examples": [
        {
          "jp": "あめが ふっているので、かさを もっていきます。",
          "romaji": "Ame ga futte iru node, kasa o motte ikimasu.",
          "en": "Since it is raining, I will take an umbrella."
        },
        {
          "jp": "ようじが あるので、おさきに しつれいします。",
          "romaji": "Youji ga aru node, osaki ni shitsurei shimasu.",
          "en": "Because I have an errand, I will take my leave early."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Select the polite cause connector: \"Since I have a fever...\"",
      "question": "ねつが ある＿＿＿、きょうは やすみます。",
      "options": [
        "のに",
        "ので",
        "なら",
        "ても"
      ],
      "correctAnswer": 1,
      "explanation": "ので is the polite conjunction expressing cause/reason.",
      "romaji": "Netsu ga aru ___, kyou wa yasumimasu.",
      "romajiOptions": [
        "noni",
        "node",
        "nara",
        "temo"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with polite reason connector: \"Since the train is crowded...\"",
      "sentence": "電車が混んでいる___、バスで行きます。",
      "blankWord": "ので",
      "options": [
        "ので",
        "のに",
        "なら",
        "ても"
      ],
      "correctAnswer": 0,
      "explanation": "電車が混んでいるので: 'Since the train is crowded, I will go by bus.'",
      "romaji": "Densha ga konde iru ___ , basu de ikimasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "How do Na-adjectives connect to ～ので in the present affirmative?",
      "question": "How do Na-adjectives connect to ～ので in present affirmative?",
      "options": [
        "Na-adj + な + ので (e.g. 暇なので)",
        "Na-adj + だ + ので (e.g. 暇だので)",
        "Na-adj + ので (e.g. 暇ので)",
        "Na-adj + い + ので (e.g. 暇いので)"
      ],
      "correctAnswer": 0,
      "explanation": "Na-adjectives (and nouns) require な before ので in the present affirmative.",
      "romaji": "How do Na-adjectives connect to ~node?",
      "romajiOptions": [
        "Na-adj + na + node",
        "Na-adj + da + node",
        "Na-adj + node",
        "Na-adj + i + node"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Why is ～ので preferred over ～から when speaking politely or making apologies?",
      "question": "Why is ～ので preferred over ～から when speaking politely or making apologies?",
      "options": [
        "It frames the reason as an objective natural fact rather than a subjective assertion",
        "It is only used with past tense verbs",
        "It expresses frustration and regret",
        "It can only be used by superiors to subordinates"
      ],
      "correctAnswer": 0,
      "explanation": "～ので sounds milder and more objective than ～から, making it ideal for polite apologies and business interactions.",
      "romaji": "Why is ~node preferred over ~kara?",
      "romajiOptions": [
        "It frames the reason as an objective natural fact",
        "It is only used with past tense verbs",
        "It expresses frustration and regret",
        "It can only be used by superiors to subordinates"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"Since I have an errand, I will take my leave early.\"",
      "chips": [
        "用事がある",
        "ので",
        "お先に",
        "失礼します"
      ],
      "correctOrder": [
        "用事がある",
        "ので",
        "お先に",
        "失礼します"
      ],
      "explanation": "Structure: [Reason: Plain Form + ので] [お先に失礼します]."
    }
  ]
};

export const lessonMeta = {
  "id": "node-nde",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～ので・～んで (~node)"
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
