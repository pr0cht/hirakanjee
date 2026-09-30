// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-expectation-belief",
  "number": 11,
  "title": "JLPT N3 Grammar: Expectations, Conjectures & Limitations (～はずだ, ～とは限らない, ～つもり)",
  "shortTitle": "Expectation & Limitations (~はずだ, ~とは限らない)",
  "category": "Conjecture & Belief",
  "subtitle": "Convey strong logical expectations (~はずだ), disclaim sweeping generalizations (~とは限らない), and describe personal convictions (~つもり).",
  "formula": "普通形 + はずだ • 普通形 + とは限らない • V-(た/ている) + つもり",
  "description": "Learn to voice firm deductions with ～はずだ, debunk assumptions with ～とは限らない, and explain actions done under the belief of ～つもり.",
  "sections": [
    {
      "title": "1. ～はずだ (Expectation) vs ～とは限らない (Not Necessarily)",
      "content": "• ～はずだ: \"Should be / Ought to be so\": Based on knowledge, schedules, or facts, there is strong objective reason to expect an outcome: 荷物は明日届くはずです (The package is expected to arrive tomorrow).\n• ～とは限らない: \"It doesn't necessarily mean that... / Not always true\": Frequently paired with 必ずしも (kanarazushimo): 高い店が必ずしも美味しいとは限らない (Expensive restaurants are not necessarily always delicious).",
      "table": null,
      "examples": [
        {
          "jp": "彼は毎日練習しているから、明日の試合で活躍するはずだ。",
          "romaji": "Kare wa mainichi renshuu shite iru kara, ashita no shiai de katsuyaku suru hazu da.",
          "en": "He practices every day, so he is expected to perform well in tomorrow's match."
        },
        {
          "jp": "有名大学を卒業したからといって、仕事ができるとは限らない。",
          "romaji": "Yuumei daigaku o sotsugyou shita kara to itte, shigoto ga dekiru towa kagiranai.",
          "en": "Just because someone graduated from a famous university, it doesn't necessarily mean they are good at work."
        }
      ]
    },
    {
      "title": "2. ～つもり (Intention vs In My Mind / Acting as if)",
      "content": "• Intention (with dictionary form): \"Plan / Intend to do\": 明日は家で休むつもりです (I intend to rest at home tomorrow).\n• Belief / Under the impression (with V-た / V-ている): \"Acting as if / Believed I had done so in my mind\": 鍵をかけた親切のつもりだったが、かえって迷惑をかけた (I intended it as a kindness, but instead caused trouble).",
      "table": null,
      "examples": [
        {
          "jp": "自分では若いつもりでも、体は以前のように動かない。",
          "romaji": "Jibun dewa wakai tsumori demo, karada wa izen no you ni ugokanai.",
          "en": "Even if I feel young in my mind, my body doesn't move like before."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the phrase rejecting an absolute generalization:",
      "question": "値段が高いものが、必ずしも品質がよい＿＿＿＿＿。",
      "options": [
        "とは限らない",
        "はずだ",
        "べきだ",
        "わけだ"
      ],
      "correctAnswer": 0,
      "explanation": "必ずしも～とは限らない is a standard set phrase meaning \"not necessarily always the case\".",
      "romaji": "Nedan ga takai mono ga, kanarazushimo hinshitsu ga yoi _____.",
      "romajiOptions": [
        "towa kagiranai",
        "hazu da",
        "beki da",
        "wake da"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the expected outcome form:",
      "question": "昨日速達で送ったから、書類は今日相手に届く＿＿＿＿＿。",
      "options": [
        "はずだ",
        "せいで",
        "おかげで",
        "反面"
      ],
      "correctAnswer": 0,
      "explanation": "届くはずだ expresses high confidence expectation based on express delivery.",
      "romaji": "Kinou sokutatsu de okotta kara, shorui wa kyou aite ni todoku _____.",
      "romajiOptions": [
        "hazu da",
        "sei de",
        "okage de",
        "hanmen"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-expectation-belief",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Expectation & Limitations (~はずだ, ~とは限らない)"
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
