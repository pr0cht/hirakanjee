// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-concession-and-despite",
  "number": 26,
  "title": "JLPT N3 Grammar: Concession & Despite (~にもかかわらず, ~としても, ~さえ~ば)",
  "shortTitle": "Concession & Despite (~にもかかわらず, etc.)",
  "category": "Concession",
  "subtitle": "Master formal contrast despite contrary facts, hypothetical concessions, and minimum conditional thresholds.",
  "formula": "V/A/N(である) + にもかかわらず • 普 + としても • N + さえ + 条件(ば/たら)",
  "description": "Express advanced intermediate concession: ～にもかかわらず (despite contrary reality in formal/written Japanese), ～としても (even if / even assuming a hypothetical), and ～さえ～ば (if only X, then Y).",
  "sections": [
    {
      "title": "1. ～にもかかわらず (Despite / Regardless Of)",
      "content": "A formal, literary expression indicating that an action or situation occurs in spite of an adverse or contradictory circumstance.\n\nConnection: Plain Form / Noun / Na-adj (である) + にもかかわらず.",
      "table": null,
      "examples": [
        {
          "jp": "大雨にもかかわらず、サッカーの試合は予定通り行われた。",
          "romaji": "Ooame ni mo kakawarazu, sakkaa no shiai wa yotei doori okonawareta.",
          "en": "Despite the heavy rain, the soccer match was held as scheduled."
        },
        {
          "jp": "体調が悪いにもかかわらず、彼は休まずに出勤した。",
          "romaji": "Taichou ga warui ni mo kakawarazu, kare wa yasumazu ni shukkin shita.",
          "en": "Despite feeling unwell, he went to work without taking time off."
        }
      ]
    },
    {
      "title": "2. ～としても (Even If / Even Assuming That)",
      "content": "Introduces a hypothetical concession: 'Even granting that X might happen, it does not alter Y.' Often paired with たとえ (even if).\n\nConnection: Plain form + としても.",
      "table": null,
      "examples": [
        {
          "jp": "たとえ失敗したとしても、後悔はしません。",
          "romaji": "Tatoe shippai shita to shitemo, koukai wa shimasen.",
          "en": "Even assuming that I fail, I will have no regrets."
        },
        {
          "jp": "今から急いだとしても、終電には間に合わないだろう。",
          "romaji": "Ima kara isoida to shitemo, shuuden ni wa maniawanai darou.",
          "en": "Even if we hurry right now, we probably won't make the last train."
        }
      ]
    },
    {
      "title": "3. ～さえ～ば (If Only... / As Long As...)",
      "content": "Specifies that fulfilling one single minimal condition is sufficient for the whole result to hold.\n\nConnection: Noun + さえ + Verb-ば / い-adj-ければ / な-adj/Noun-なら(ば).",
      "table": {
        "headers": ["Grammar Pattern", "Reality vs Hypothesis", "Register / Nuance", "Core Meaning"],
        "rows": [
          ["～にもかかわらず", "Actual fact occurred", "Formal / Written / Speeches", "In spite of reality"],
          ["～としても", "Hypothetical supposition", "Standard / Reflective", "Even assuming X occurs"],
          ["～さえ～ば", "Single requirement sufficient", "Standard colloquial & written", "As long as X is met"]
        ]
      },
      "examples": [
        {
          "jp": "健康さえあれば、困難も乗り越えられます。",
          "romaji": "Kenkou sae areba, konnan mo norikoeraremasu.",
          "en": "As long as I have good health, I can overcome any hardship."
        },
        {
          "jp": "言葉さえ通じれば、旅は楽しくなります。",
          "romaji": "Kotoba sae tsuujireba, tabi wa tanoshiku narimasu.",
          "en": "If only communication works, traveling becomes enjoyable."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank with formal concession (\"despite there being many problems\"): ",
      "sentence": "多くの問題が___、彼は前向きだ。",
      "blankWord": "あるにもかかわらず",
      "options": [
        "あるにもかかわらず",
        "あっても",
        "あるのに",
        "あればこそ"
      ],
      "correctAnswer": 0,
      "explanation": "～にもかかわらず is the formal written pattern meaning 'in spite of / despite'.",
      "romaji": "Ooku no mondai ga ___, kare wa maemuki da."
    },
    {
      "type": "multiple-choice",
      "prompt": "Which expression of concession is the most formal and appropriate for news/speeches?",
      "question": "Which of these expressions meaning \"even though / despite\" is the most formal?",
      "options": [
        "～にもかかわらず",
        "～ても",
        "～けど",
        "～のに"
      ],
      "correctAnswer": 0,
      "explanation": "～にもかかわらず belongs to formal, written, and oratorical Japanese, whereas ～ても and ～のに are conversational or neutral.",
      "romaji": "Which expression is the most formal?",
      "romajiOptions": [
        "~ni mo kakawarazu",
        "~temo",
        "~kedo",
        "~noni"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (hypothetical concession: \"even assuming I fail\"): ",
      "sentence": "たとえ失敗した___、諦めずに続けます。",
      "blankWord": "としても",
      "options": [
        "としても",
        "のに",
        "からには",
        "以上は"
      ],
      "correctAnswer": 0,
      "explanation": "たとえ + [Verb-た] + としても denotes a hypothetical scenario: 'Even if / even assuming that...'.",
      "romaji": "Tatoe shippai shita ___, akiramezu ni tsuzukemasu."
    },
    {
      "type": "multiple-choice",
      "prompt": "Contrast としても vs のに:",
      "question": "Between としても and のに, which is used for a purely hypothetical condition rather than an established fact?",
      "options": [
        "としても (hypothetical concession)",
        "のに (factual contradiction with frustration)",
        "Both are strictly for established facts",
        "Neither"
      ],
      "correctAnswer": 0,
      "explanation": "～のに requires an actual, established fact in the first clause. ～としても treats the premise as a hypothetical possibility.",
      "romaji": "Which expresses hypothetical concession?",
      "romajiOptions": [
        "to shitemo (hypothetical)",
        "noni (factual)",
        "Both are factual",
        "Neither"
      ]
    },
    {
      "type": "fill-blank",
      "prompt": "Fill in the blank (\"if only I had money\"): ",
      "sentence": "お金___あれば、旅行に行けるのに。",
      "blankWord": "さえ",
      "options": [
        "さえ",
        "こそ",
        "など",
        "ばかり"
      ],
      "correctAnswer": 0,
      "explanation": "[Noun] + さえ + [Verb-ば] specifies the sole required condition: お金さえあれば (if only I had money).",
      "romaji": "Okane ___ areba, ryokou ni ikeru noni."
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"As long as I have time, I can study.\"",
      "chips": [
        "時間さえ",
        "あれば",
        "勉強できます"
      ],
      "correctOrder": [
        "時間さえ",
        "あれば",
        "勉強できます"
      ],
      "explanation": "Structure: [Noun + さえ] [Verb-ば] [Potential result]."
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-concession-and-despite",
  "jlptLevel": "N3",
  "grammarPoints": [
    "～にもかかわらず",
    "～としても",
    "～さえ～ば"
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
