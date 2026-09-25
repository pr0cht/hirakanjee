// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-volitional-applications",
  "number": 4,
  "title": "JLPT N4: Volitional Form (意向形: Conversational Will & Invitations)",
  "shortTitle": "意向形 (Volitional in Conversation)",
  "category": "Volitional & Will",
  "subtitle": "Learn how to express your will or intention in Japanese using the volitional form — a key grammar point for natural conversation at the N4 level.",
  "formula": "Group 1: -u → -ou | Group 2: -ru → -you | Group 3: しよう / こよう",
  "description": "The volitional form (意向形 ikoukei) is the plain-form equivalent of 〜ましょう (\"let's...\"). In natural daily conversations with friends and peers, it is used to propose activities enthusiastically (帰ろう！ \"Let's go home!\") or declare spontaneous personal resolutions. Combined with 〜と思っています, it conveys personal plans and intentions.",
  "sections": [
    {
      "title": "1. Formation by Verb Group",
      "content": "• Group 1 (-u verbs): Change the last -u sound to -ou\n  - 行く → 行こう (ikou)\n  - 飲む → 飲もう (nomou)\n  - 急ぐ → 急ごう (isogou)\n  - 話す → 話そう (hanasou)\n  - 帰る → 帰ろう (kaerou)\n\n• Group 2 (-ru verbs): Replace -ru with -you\n  - 食べる → 食べよう (tabeyou)\n  - 見る → 見よう (miyou)\n  - 覚える → 覚えよう (oboeyou)\n\n• Irregular Group 3:\n  - する → しよう (shiyou)\n  - 来る (くる) → 来よう (こよう / koyou)",
      "examples": [
        {
          "jp": "時間がないので、急ごう！",
          "romaji": "Jikan ga nai node, isogou!",
          "en": "We don't have time, so let's hurry!"
        },
        {
          "jp": "もう9時だよ。早く帰ろう！",
          "romaji": "Mou ku-ji da yo. Hayaku kaerou!",
          "en": "It's already 9:00. Let's head home!"
        },
        {
          "jp": "週末は新しいレストランに行こうと思っています。",
          "romaji": "Shuumatsu wa atarashii resutoran ni ikou to omotte imasu.",
          "en": "I am thinking of going to a new restaurant this weekend."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct volitional form: \"We don't have time, so let's hurry!\"",
      "question": "時間がないので、＿＿＿！",
      "options": [
        "急ぎよう",
        "急ごう",
        "急ぎう",
        "急ごよう"
      ],
      "correctAnswer": 1,
      "explanation": "急ぐ is Group 1: change -gu to -gou → 急ごう (isogou).",
      "romaji": "Jikan ga nai node, ___!",
      "romajiOptions": [
        "isogiyou",
        "isogou",
        "isogiu",
        "isogoyou"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct volitional form: \"It's already 9:00. Let's go home!\"",
      "question": "もう９時だよ。＿＿＿！",
      "options": [
        "帰れよう",
        "帰りよう",
        "帰ろう",
        "帰れう"
      ],
      "correctAnswer": 2,
      "explanation": "帰る is a Group 1 consonant verb: -ru changes to -rou → 帰ろう (kaerou).",
      "romaji": "Mou ku-ji da yo. ___!",
      "romajiOptions": [
        "kaereyou",
        "kaeriyou",
        "kaerou",
        "kaereu"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-volitional-applications",
  "jlptLevel": "N4",
  "grammarPoints": [
    "意向形 (Volitional in Conversation)"
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
