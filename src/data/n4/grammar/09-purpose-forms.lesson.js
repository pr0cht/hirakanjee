// JLPT N4 Lesson Module
export const lesson = {
  "id": "purpose-forms",
  "number": 9,
  "category": "Grammar",
  "shortTitle": "ために vs ように",
  "title": "Purpose & Goals: ために vs ように",
  "subtitle": "Distinguish ために (volitional purpose) from ように (state-change or ability goal) in JLPT N4.",
  "description": "Learn when to use ために for deliberate goal-directed actions vs ように for ability or state-change goals.",
  "formula": "Volitional verb + ために | Potential/Stative verb + ように",
  "sections": [
    {
      "title": "1. ために — Volitional Purpose",
      "content": "Use ために when the subject actively pursues a goal through deliberate action. The verb before ために must be a volitional (action) verb in dictionary form.\n\nStructure: [Action Verb dictionary form] + ために + [what you do]\nExample: 車を 買うために、お金を 貯めています。(I am saving money in order to buy a car.)",
      "table": {
        "headers": [
          "Form",
          "Use Case",
          "Example",
          "Translation"
        ],
        "rows": [
          [
            "Volitional V + ために",
            "Deliberate goal-directed action",
            "日本語を 勉強するために、本を 買いました。",
            "I bought a book in order to study Japanese."
          ],
          [
            "N + のために",
            "For the sake of a noun/person",
            "家族のために 働きます。",
            "I work for the sake of my family."
          ]
        ]
      },
      "examples": [
        {
          "jp": "健康のために 毎日 走っています。",
          "romaji": "Kenkou no tame ni mainichi hashitte imasu.",
          "en": "I run every day for the sake of health."
        },
        {
          "jp": "試験に 合格するために 毎日 勉強します。",
          "romaji": "Shiken ni goukaku suru tame ni mainichi benkyou shimasu.",
          "en": "I study every day in order to pass the exam."
        }
      ]
    },
    {
      "title": "2. ように — Ability or State-Change Goal",
      "content": "Use ように when the goal is to reach a state or acquire an ability. The verb before ように is typically a potential verb (できる), a negative verb, or a stative verb.\n\nStructure: [Potential/Negative/Stative Verb] + ように + [what you do]\nExample: 日本語が 話せるように 毎日 練習します。(I practice every day so that I can speak Japanese.)",
      "table": {
        "headers": [
          "Form",
          "Use Case",
          "Example",
          "Translation"
        ],
        "rows": [
          [
            "Potential V + ように",
            "Acquire an ability",
            "泳げるように 練習します。",
            "I practice so that I can swim."
          ],
          [
            "Neg V + ように",
            "Avoid a state",
            "遅刻しないように 早く 起きます。",
            "I wake up early so as not to be late."
          ]
        ]
      },
      "examples": [
        {
          "jp": "忘れないように メモを します。",
          "romaji": "Wasurenai you ni memo wo shimasu.",
          "en": "I take notes so as not to forget."
        },
        {
          "jp": "日本語が 上手に なるように 毎日 勉強します。",
          "romaji": "Nihongo ga jouzu ni naru you ni mainichi benkyou shimasu.",
          "en": "I study every day so that my Japanese improves."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct purpose form: \"I am saving money to buy a car (deliberate volitional goal).\"",
      "question": "車を 買う＿＿＿、お金を ためています。",
      "romaji": "Kuruma wo kau ___, okane wo tamete imasu.",
      "options": [
        "ために",
        "ように",
        "のに",
        "ので"
      ],
      "romajiOptions": [
        "tame ni",
        "you ni",
        "no ni",
        "node"
      ],
      "correctAnswer": 0,
      "explanation": "～ために is used for volitional purpose — the speaker deliberately saves money TO buy a car."
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"I practice every day so that I can speak Japanese (ability goal).\"",
      "question": "にほんごが 話せる＿＿＿、まいにち れんしゅうします。",
      "romaji": "Nihongo ga hanaseru ___, mainichi renshuu shimasu.",
      "options": [
        "ように",
        "ために",
        "のに",
        "ので"
      ],
      "romajiOptions": [
        "you ni",
        "tame ni",
        "no ni",
        "node"
      ],
      "correctAnswer": 0,
      "explanation": "Potential verb + ように expresses a goal for acquiring an ability."
    },
    {
      "type": "multiple-choice",
      "prompt": "Which particle follows a NEGATIVE verb to express an avoidance goal?",
      "question": "遅刻しない＿＿＿、早く 起きます。",
      "romaji": "Chikoku shinai ___, hayaku okimasu.",
      "options": [
        "ように",
        "ために",
        "から",
        "ので"
      ],
      "romajiOptions": [
        "you ni",
        "tame ni",
        "kara",
        "node"
      ],
      "correctAnswer": 0,
      "explanation": "Negative verb + ように expresses avoiding an undesirable state."
    }
  ]
};

export const lessonMeta = {
  "id": "purpose-forms",
  "jlptLevel": "N4",
  "grammarPoints": [
    "ために vs ように"
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
