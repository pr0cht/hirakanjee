// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-modifying-noun",
  "number": 9,
  "title": "JLPT N4: Modifying the Noun (Noun-Modifying / Relative Clauses)",
  "shortTitle": "名詞修飾 (Modifying Nouns)",
  "category": "Relative Clauses",
  "subtitle": "Practice how verbs and adjectives modify nouns — one of the most common and important grammar patterns in Japanese.",
  "formula": "[Verb Plain Form] + Noun | [I-adj] + Noun | [Na-adj + な] + Noun",
  "description": "In Japanese, relative clauses directly precede the noun they describe without any relative pronouns (no \"who\", \"which\", or \"that\"). Verbs modifying a noun must always be in plain form. Crucially, do NOT insert の between a plain verb and a noun (Common error: 買ったのチョコレート ✕ → 買ったチョコレート ◯). Within the modifying clause, the subject marker が is used instead of は.",
  "sections": [
    {
      "title": "1. Structure of Relative Clauses",
      "content": "• Verb Past: ハワイで買ったチョコレート (chocolate that I bought in Hawaii)\n• Verb Present/Continuous: 私が住んでいるところ (the place where I live)\n• Verb Negative: 肉を食べない人 (a person who does not eat meat)\n• Na-adj: 親切な人 (a kind person)\n• I-adj: 新しい車 (a new car)\n\nCommon Mistake Alert:\n✕ これはハワイで買ったのチョコレートです。\n○ これはハワイで買ったチョコレートです。 (No の after verbs!)",
      "examples": [
        {
          "jp": "これは私がハワイで買ったチョコレートです。",
          "romaji": "Kore wa watashi ga Hawai de katta chokoreeto desu.",
          "en": "This is the chocolate that I bought in Hawaii."
        },
        {
          "jp": "私が住んでいるところはとても便利です。",
          "romaji": "Watashi ga sunde iru tokoro wa totemo benri desu.",
          "en": "The place where I live is very convenient."
        },
        {
          "jp": "これは友達にもらったプレゼントです。",
          "romaji": "Kore wa tomodachi ni moratta purezento desu.",
          "en": "This is the present that I received from a friend."
        },
        {
          "jp": "あそこで本を読んでいる人は田中さんです。",
          "romaji": "Asoko de hon o yonde iru hito wa Tanaka-san desu.",
          "en": "The person reading a book over there is Mr. Tanaka."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"The place where I live is very convenient.\"",
      "question": "私が＿＿＿ところはとても便利です。",
      "options": [
        "住んでいる",
        "住んでいるの",
        "住んでいますの",
        "住むの"
      ],
      "correctAnswer": 0,
      "explanation": "Directly modify the noun with plain verb form without の: 住んでいるところ.",
      "romaji": "Watashi ga ___ tokoro wa totemo benri desu.",
      "romajiOptions": [
        "sunde iru",
        "sunde iru no",
        "sunde imasu no",
        "sumu no"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"This is a present I received from a friend.\"",
      "question": "これは友達に＿＿＿プレゼントです。",
      "options": [
        "もらったの",
        "もらいましたの",
        "もらうの",
        "もらった"
      ],
      "correctAnswer": 3,
      "explanation": "Past completed action modifying noun uses plain past もらった: もらったプレゼント.",
      "romaji": "Kore wa tomodachi ni ___ purezento desu.",
      "romajiOptions": [
        "moratta no",
        "moraimashita no",
        "morau no",
        "moratta"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-modifying-noun",
  "jlptLevel": "N4",
  "grammarPoints": [
    "名詞修飾 (Modifying Nouns)"
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
