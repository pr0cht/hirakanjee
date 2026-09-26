// JLPT N5 Lesson Module
export const lesson = {
  "id": "special-compliments",
  "number": 5,
  "section": "special",
  "title": "Japanese Compliments & Modesty: Ii ne, Sugoi, Jouzu",
  "shortTitle": "Compliments & Modesty",
  "subtitle": "Learn praise words (いいね, すごい, 上手) and the cultural art of modest replies.",
  "rules": [
    {
      "title": "Casual Praise: いいね (That's good!) & すごい (Amazing!)",
      "formula": "いいね！ (ii ne) = Nice! / Great! | すごい！ (sugoi) = Amazing! / Impressive!",
      "explanation": "いいね reacts favorably to photos, ideas, or good news. すごい expresses genuine amazement when someone accomplishes something impressive. Politer forms include「いいですね」and「すごいですね」."
    },
    {
      "title": "Skill Praise: 上手 (じょうず) vs 下手 (へた)",
      "formula": "[Person] は [Skill] が 上手 です (Person is skillful at...)",
      "explanation": "上手 (じょうず) praises someone else's skill: \"にほんご が 上手 ですね\" (Your Japanese is so good!). Never use 上手 to describe YOURSELF! Use 下手 (へた) for poor skill."
    },
    {
      "title": "Describing Your Own Strengths: 得意 (とくい) vs 苦手 (にがて) [Enrichment: Beyond N5]",
      "formula": "わたし は [Activity] が 得意 です (I am strong at...) / 苦手 です (I struggle with...)",
      "explanation": "Since 上手 cannot be used for oneself, conversational Japanese uses 得意 (とくい) to state what you are naturally good at: \"りょうり が 得意 です\" (I'm good at cooking). Use 苦手 (にがて) for things you dislike or are weak at (both are N4 enrichment words)."
    },
    {
      "title": "The Modest Japanese Response: いいえ、まだまだ です",
      "formula": "Compliment: \"にほんご が じょうず ですね！\" -> Reply: \"いいえ、まだまだ です。\"",
      "explanation": "In Japanese culture, accepting compliments with \"Thank you, I know!\" sounds boastful. The standard polite, humble response is: \"いいえ、まだまだ です\" (No, I still have a long way to go!)."
    }
  ],
  "tables": [
    {
      "title": "Compliment & Skill Terms Comparison Matrix",
      "headers": [
        "Expression",
        "Reading",
        "Target",
        "Tone",
        "Example"
      ],
      "rows": [
        [
          "いいね",
          "ii ne",
          "Ideas / Situations",
          "Casual approval",
          "それ、いいね！ (That's nice!)"
        ],
        [
          "すごい",
          "sugoi",
          "People / Feats",
          "Amazement",
          "ひとりで つくったの？すごい！"
        ],
        [
          "上手",
          "じょうず",
          "Others only",
          "Skill praise",
          "にほんご が じょうず ですね。"
        ],
        [
          "下手",
          "へた",
          "General",
          "Poor skill",
          "うた が へた です。 (I sing poorly)"
        ],
        [
          "得意",
          "とくい",
          "Self or Others",
          "Strong point",
          "すうがく が とくい です。"
        ],
        [
          "苦手",
          "にがて",
          "Self or Others",
          "Weak point",
          "からいもの が にがて です。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "その シャツ、とても いいですね！",
      "romaji": "sono shatsu, totemo ii desu ne!",
      "en": "That shirt is very nice!"
    },
    {
      "ja": "かんじ を たくさん おぼえました ね。すごい！",
      "romaji": "kanji o takusan oboemashita ne. sugoi!",
      "en": "You memorized a lot of kanji. Amazing!"
    },
    {
      "ja": "A: にほんご が おじょうず ですね。 B: いいえ、まだまだ です。",
      "romaji": "A: nihongo ga ojouzu desu ne. B: iie, mada mada desu.",
      "en": "A: Your Japanese is very skillful! B: No, I still have a long way to go."
    },
    {
      "ja": "わたし は りょうり が 得意 です。",
      "romaji": "watashi wa ryouri ga tokui desu.",
      "en": "I am good at cooking (subjective comfort)."
    }
  ],
  "quiz": [
    {
      "id": "comp-q1",
      "type": "fill-blank",
      "prompt": "How should you respond modestly when told \"にほんご が 上手 ですね\"?",
      "options": [
        "いいえ、まだまだ です",
        "はい、じょうず です",
        "ありがとう、しっています",
        "そう です ね"
      ],
      "correctAnswer": 0,
      "explanation": "「いいえ、まだまだ です」(No, I still have a long way to go) is the polite, modest Japanese response."
    },
    {
      "id": "comp-q2",
      "type": "multiple-choice",
      "prompt": "Why is it incorrect to say \"わたし は え が 上手 です\"?",
      "options": [
        "上手 is used to praise others, not boast about oneself",
        "上手 is an adjective that cannot take が",
        "上手 only refers to sports",
        "え cannot be paired with 上手"
      ],
      "correctAnswer": 0,
      "explanation": "上手 (じょうず) is for praising others. For yourself, use 得意 (とくい)."
    },
    {
      "id": "comp-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"Your Japanese is very skillful!\"",
      "targetEn": "Your Japanese is very skillful!",
      "chips": [
        "にほんご が",
        "とても",
        "上手 です ね",
        "下手 です ね"
      ],
      "correctAnswerSentence": "にほんご が とても 上手 です ね",
      "explanation": "「にほんご が とても 上手 です ね」is the classic compliment."
    },
    {
      "id": "comp-q4",
      "type": "audio-listening",
      "prompt": "Listen to the compliment reaction.",
      "audioText": "わあ、すごい！ひとりで つくりました か？",
      "options": [
        "Wow, amazing! Did you make it alone?",
        "That's bad, don't do it alone.",
        "Please give me half.",
        "What time did you make it?"
      ],
      "correctAnswer": 0,
      "explanation": "The speaker said「わあ、すごい！ひとりで つくりました か？」(Wow, amazing! Did you make it alone?)."
    },
    {
      "id": "comp-q5",
      "type": "fill-blank",
      "prompt": "How do you say \"I am bad with spicy food\" using polite modesty?",
      "options": [
        "からいもの が 苦手 です",
        "からいもの が 下手 です",
        "からいもの が すき です",
        "からいもの が 上手 です"
      ],
      "correctAnswer": 0,
      "explanation": "Use 苦手 (にがて) to state that you struggle with or cannot handle something."
    },
    {
      "id": "comp-q6",
      "type": "multiple-choice",
      "prompt": "What word means casual approval like \"Nice! / Great idea!\" in Japanese?",
      "options": [
        "いいね (ii ne)",
        "だめ (dame)",
        "へた (heta)",
        "おそい (osoi)"
      ],
      "correctAnswer": 0,
      "explanation": "「いいね」(ii ne) is used for casual praise or \"That's nice!\""
    },
    {
      "id": "comp-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"No, I still have a long way to go.\"",
      "targetEn": "No, I still have a long way to go.",
      "chips": [
        "いいえ、",
        "まだまだ",
        "です",
        "上手 です"
      ],
      "correctAnswerSentence": "いいえ、 まだまだ です",
      "explanation": "「いいえ、まだまだ です」is the quintessential humble response."
    },
    {
      "id": "comp-q8",
      "type": "multiple-choice",
      "prompt": "Which term expresses your own personal strength or specialty?",
      "options": [
        "得意 (とくい)",
        "上手 (じょうず)",
        "下手 (へた)",
        "苦手 (にがて)"
      ],
      "correctAnswer": 0,
      "explanation": "得意 (とくい) is used to express things you are good at without sounding boastful."
    },
    {
      "id": "comp-q9",
      "type": "error-hunt",
      "prompt": "Spot the cultural / linguistic error in the compliment exchange:",
      "options": [
        "A:「ピアノ が じょうず ですね！」 B:「はい、わたし は じょうず です。」",
        "A:「ピアノ が じょうず ですね！」 B:「いいえ、まだまだ です。」",
        "A:「すごい ですね！」 B:「ありがとうございます。」",
        "A:「いい ですね！」 B:「はい、そう しましょう。」"
      ],
      "correctAnswer": 0,
      "explanation": "Reply A boasts「はい、わたし は じょうず です」which is unnatural and impolite in Japanese etiquette."
    },
    {
      "id": "comp-q10",
      "type": "fill-blank",
      "prompt": "The antonym of 上手 (じょうず) is [ ? ] (poor at/unskillful).",
      "options": [
        "下手 (へた)",
        "苦手 (にがて)",
        "わるい (warui)",
        "おそい (osoi)"
      ],
      "correctAnswer": 0,
      "explanation": "The direct antonym of 上手 is 下手 (へた)."
    }
  ]
};

export const lessonMeta = {
  "id": "special-compliments",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Compliments & Modesty"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-special"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
