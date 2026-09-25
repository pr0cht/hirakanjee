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
