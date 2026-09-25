// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-to-omoimasu-opinions",
  "number": 12,
  "title": "JLPT N4: ～と思います (Expressing Opinions & Thoughts)",
  "shortTitle": "～と思います (~to omoimasu)",
  "category": "Opinions & Thoughts",
  "subtitle": "Learn to express opinions and thoughts naturally in Japanese with to omoimasu, commonly used in conversations.",
  "formula": "Plain form + と 思います / と 思っています",
  "description": "〜と思います expresses personal opinions, conjectures, and ideas (\"I think that...\"). In Japanese society, stating personal perspectives with と思います softens direct statements, sounding humble, considerate, and culturally appropriate.",
  "sections": [
    {
      "title": "1. Connections to Plain Form",
      "content": "• Verb: できると思います (I think I can do it)\n• I-adj: おもしろいと思います (I think it is interesting)\n• Na-adj: きれい「だ」と思います (I think it is beautiful - Note: keep だ!)\n• Noun: 日曜日「だ」と思います (I think it is Sunday - Note: keep だ!)\n\nNuance Difference:\n- 〜と思います: Speaker's thought at this exact moment.\n- 〜と思っています: Ongoing plan, continuous thought, or third-person's opinion.",
      "examples": [
        {
          "jp": "これはおもしろいと思います。",
          "romaji": "Kore wa omoshiroi to omoimasu.",
          "en": "I think that this is interesting."
        },
        {
          "jp": "明日は寒いと思います。",
          "romaji": "Ashita wa samui to omoimasu.",
          "en": "I think that tomorrow will be cold."
        },
        {
          "jp": "彼女は親切な人だと思います。",
          "romaji": "Kanojo wa shinsetsu na hito da to omoimasu.",
          "en": "I think that she is a kind person."
        },
        {
          "jp": "会議は5時からだと思います。",
          "romaji": "Kaigi wa go-ji kara da to omoimasu.",
          "en": "I think the meeting starts from 5:00."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct plain form connection: \"I think this is interesting.\"",
      "question": "これは＿＿＿と思います。",
      "options": [
        "おもしろかっただ",
        "おもしろくないだ",
        "おもしろい",
        "おもしろいだ"
      ],
      "correctAnswer": 2,
      "explanation": "い-adjectives take と思います in plain form directly without だ: おもしろいと思います.",
      "romaji": "Kore wa ___ to omoimasu.",
      "romajiOptions": [
        "omoshirokatta da",
        "omoshirokunai da",
        "omoshiroi",
        "omoshiroi da"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"I think tomorrow will be cold.\"",
      "question": "明日は＿＿＿と思います。",
      "options": [
        "あついだ",
        "あつくないだ",
        "さむいだ",
        "さむい"
      ],
      "correctAnswer": 3,
      "explanation": "Plain form of 寒い is 寒い without だ: 寒いと思います.",
      "romaji": "Ashita wa ___ to omoimasu.",
      "romajiOptions": [
        "atsui da",
        "atsukunai da",
        "samui da",
        "samui"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-to-omoimasu-opinions",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～と思います (~to omoimasu)"
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
