// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-topic-reference",
  "number": 8,
  "title": "JLPT N3 Grammar: Topic, Basis & Standpoints (～に関して, ～について, ～にとって, ～において)",
  "shortTitle": "Topic & Reference (~に関して, ~にとって)",
  "category": "Topic & Reference",
  "subtitle": "Learn formal thematic references (~に関して), direct topics (~について), personal evaluation standpoints (~にとって), and formal settings (~において).",
  "formula": "N + に関して (Regarding) • N + について (About) • N + にとって (For/From perspective) • N + において (In/At)",
  "description": "Structure formal presentations and reports with ～に関して, express personal perspective with ～にとって, and denote formal places and domains with ～において.",
  "sections": [
    {
      "title": "1. ～に関して vs ～について",
      "content": "Both mean \"regarding / about\", but differ in scope and formality:\n\n• ～について: Standard polite expression for discussing a specific subject or topic directly: 日本の歴史について本を書いた (Wrote a book about Japanese history).\n• ～に関して (にかんする + N): More formal and broader in scope, covering related aspects, implications, and official matters: 環境問題に関する国際会議 (An international conference regarding environmental issues).",
      "table": null,
      "examples": [
        {
          "jp": "今回の事件に関して、警察が詳しい調査を行っています。",
          "romaji": "Konkai no jiken ni kanshite, keisatsu ga kuwashii chousa o okonatte imasu.",
          "en": "Regarding this recent incident, police are conducting a detailed investigation."
        },
        {
          "jp": "将来の進路について、両親とじっくり話し合いました。",
          "romaji": "Shourai no shinro ni tsuite, ryoushin to jikkuri hanashiaimashita.",
          "en": "I discussed my future career path thoroughly with my parents."
        }
      ]
    },
    {
      "title": "2. ～にとって (From the Standpoint Of) & ～において (In / At)",
      "content": "• ～にとって: \"For / From the viewpoint of [person/entity]\": Expresses a judgment, importance, or value from that entity's stance: 留学生にとって漢字は大きな壁だ (For international students, kanji is a major hurdle).\n• ～において: Formal equivalent of particle で for locations, fields, eras, or occasions: 現代社会において情報は不可欠だ (In modern society, information is indispensable).",
      "table": null,
      "examples": [
        {
          "jp": "私にとって、このアルバムはかけがえのない宝物です。",
          "romaji": "Watashi ni totte, kono arubamu wa kakegae no nai takaramono desu.",
          "en": "For me, this album is an irreplaceable treasure."
        },
        {
          "jp": "式典は市民会館大ホールにおいて行われます。",
          "romaji": "Shikiten wa shimin kaikan dai hooru ni oite okonawaremasu.",
          "en": "The ceremony will take place in the main hall of the civic center."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the standpoint expression:",
      "question": "子供＿＿＿＿＿、毎日の遊びは大切な勉強だ。",
      "options": [
        "にとって",
        "について",
        "によって",
        "において"
      ],
      "correctAnswer": 0,
      "explanation": "子供にとって means \"from the standpoint of a child / for a child\".",
      "romaji": "Kodomo _____, mainichi no asobi wa taisetsu na benkyou da.",
      "romajiOptions": [
        "ni totte",
        "ni tsuite",
        "ni yotte",
        "ni oite"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the formal phrase for \"regarding\":",
      "question": "新製品の開発＿＿＿＿＿、来週の会議で報告します。",
      "options": [
        "に関して",
        "についでに",
        "のせいで",
        "の代わりに"
      ],
      "correctAnswer": 0,
      "explanation": "新製品の開発に関して means \"regarding the development of new products\".",
      "romaji": "Shinseihin no kaihatsu _____, raishuu no kaigi de houkoku shimasu.",
      "romajiOptions": [
        "ni kanshite",
        "ni tsuide ni",
        "no sei de",
        "no kawari ni"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-topic-reference",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Topic & Reference (~に関して, ~にとって)"
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
