// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-node-cause",
  "number": 2,
  "title": "JLPT N4: ～ので (Cause & Situational Explanation)",
  "shortTitle": "～ので (~node)",
  "category": "Cause & Effect",
  "subtitle": "Learn how to express cause-and-effect in Japanese with ～ので, designed for JLPT N4 learners.",
  "formula": "Plain form + ので (Na-adj / Noun: な + ので)",
  "description": "〜ので expresses cause and reason based on objective situations. While 〜から states the speaker's subjective feelings or personal assertions, 〜ので presents the situation objectively and gently, making it ideal for polite excuses, business requests, and general explanations.",
  "sections": [
    {
      "title": "1. Formation of ～ので",
      "content": "• Verb: 行くので / 行かないので / 行ったので / 行かなかったので\n• I-adj: 忙しいので / 忙しくないので / 忙しかったので\n• Na-adj / Noun: 休みなので / 休みじゃないので / 休みだったので (Takes な before ので!)",
      "examples": [
        {
          "jp": "このアニメはおもしろいので人気があります。",
          "romaji": "Kono anime wa omoshiroi node ninki ga arimasu.",
          "en": "This anime is interesting, so it is popular."
        },
        {
          "jp": "会議は3時からなのでまだ時間があります。",
          "romaji": "Kaigi wa san-ji kara nano de mada jikan ga arimasu.",
          "en": "Because the meeting starts at 3:00, there is still time."
        },
        {
          "jp": "頭が痛いので、今日は早く帰ってもいいですか。",
          "romaji": "Atama ga itai node, kyou wa hayaku kaette mo ii desu ka.",
          "en": "Because I have a headache, may I go home early today?"
        }
      ]
    },
    {
      "title": "2. ～ので vs ～から Nuance",
      "content": "• 〜から (kara): Focuses on the speaker's own feelings, logic, or direct commands. (e.g. 暑いから窓を開けてください)\n• 〜ので (node): Focuses on an objective, natural state of affairs. Softens requests and apologies in polite society.",
      "examples": [
        {
          "jp": "バスが遅れたので、遅刻してしまいました。",
          "romaji": "Basu ga okureta node, chikoku shite shimaimashita.",
          "en": "Because the bus was delayed, I arrived late."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"Because this anime is interesting, it is popular.\"",
      "question": "このアニメは＿＿＿ので人気があります。",
      "options": [
        "おもしろいだ",
        "おもしろいだな",
        "おもしろいな",
        "おもしろい"
      ],
      "correctAnswer": 3,
      "explanation": "い-adjectives connect directly to ので in their plain dictionary form: おもしろいので.",
      "romaji": "Kono anime wa ___ node ninki ga arimasu.",
      "romajiOptions": [
        "omoshiroi da",
        "omoshiroi da na",
        "omoshiroi na",
        "omoshiroi"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct connection: \"Because the meeting is from 3:00...\"",
      "question": "会議は＿＿＿のでまだ時間があります。",
      "options": [
        "３時からだ",
        "３時からだな",
        "３時からな",
        "３時から"
      ],
      "correctAnswer": 2,
      "explanation": "When a particle or noun precedes ので, attach な: ３時からなので.",
      "romaji": "Kaigi wa ___ node mada jikan ga arimasu.",
      "romajiOptions": [
        "san-ji kara da",
        "san-ji kara da na",
        "san-ji kara na",
        "san-ji kara"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-node-cause",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～ので (~node)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-practice"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
