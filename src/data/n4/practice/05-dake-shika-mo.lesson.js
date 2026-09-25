// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-dake-shika-mo",
  "number": 5,
  "title": "JLPT N4: ～だけ／～しか／～も (Limitation & Inclusion Nuances)",
  "shortTitle": "～だけ／～しか／～も",
  "category": "Limitation & Inclusion",
  "subtitle": "Understand how to express limitation and inclusion with dake, shika, and mo, and practice distinguishing their subtle differences.",
  "formula": "Noun + だけ (Affirmative/Neutral) | Noun + しか + Negative (Scarcity) | Noun + も (Abundance)",
  "description": "These three particles govern how quantities and boundaries are perceived:\n• 〜だけ: Neutral limitation (\"only\"). Followed by affirmative verbs.\n• 〜しか: Emotional limitation highlighting scarcity (\"only / nothing but\"). Must ALWAYS be paired with a negative verb.\n• 〜も: Highlights surprising abundance or emphasis (\"as much as / as many as\").",
  "sections": [
    {
      "title": "1. The Nuance Triad Illustrated",
      "content": "Look at how the speaker's feeling completely changes with the particle:\n\n1. 1時間だけ勉強しました。\n→ I studied for only 1 hour. (Neutral, objective fact)\n\n2. 1時間しか勉強しませんでした。\n→ I only studied for 1 hour. (Subjective regret: \"that was too little, I wanted to study more\")\n\n3. 1時間も勉強しました！\n→ I studied for a whole hour! (Surprise or feeling that 1 hour was a lot)",
      "examples": [
        {
          "jp": "財布の中に500円しかありません。",
          "romaji": "Saifu no naka ni gohyaku-en shika arimasen.",
          "en": "I have only 500 yen in my wallet (and that is not enough)."
        },
        {
          "jp": "ひらがなだけ書くことができます。",
          "romaji": "Hiragana dake kaku koto ga dekimasu.",
          "en": "I can only write hiragana (neutral limitation)."
        },
        {
          "jp": "昨日は10時間も寝ました。",
          "romaji": "Kinou wa juu-jikan mo nemashita.",
          "en": "Yesterday I slept for as long as 10 hours!"
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct particle: \"Right now I only have 500 yen (not enough).\"",
      "question": "今、お金が500円＿＿＿ありません。",
      "options": [
        "だけ",
        "も",
        "まで",
        "しか"
      ],
      "correctAnswer": 3,
      "explanation": "Paired with negative ありません, use しか to express \"only / nothing but\".",
      "romaji": "Ima, okane ga gohyaku-en ___ arimasen.",
      "romajiOptions": [
        "dake",
        "mo",
        "made",
        "shika"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct verb pairing: \"Yesterday I only studied for about 30 minutes.\"",
      "question": "昨日は30分ぐらいしか＿＿＿。",
      "options": [
        "勉強しました",
        "勉強しませんでした",
        "勉強した",
        "勉強しよう"
      ],
      "correctAnswer": 1,
      "explanation": "〜しか must always be paired with a negative verb form: 勉強しませんでした.",
      "romaji": "Kinou wa sanjuppun gurai shika ___.",
      "romajiOptions": [
        "benkyou shimashita",
        "benkyou shimasen deshita",
        "benkyou shita",
        "benkyou shiyou"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-dake-shika-mo",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～だけ／～しか／～も"
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
