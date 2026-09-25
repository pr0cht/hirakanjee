// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-tara-if-conditional",
  "number": 14,
  "title": "JLPT N4: ～たら (If / Hypothetical & Conditional Situations)",
  "shortTitle": "～たら (If / Conditional)",
  "category": "Conditionals",
  "subtitle": "Learn tara in conditional “if” usage — a key structure for expressing hypothetical or conditional situations in Japanese.",
  "formula": "Verb: Ta-form + ら | I-adj: ～かったら | Na-adj / Noun: ～だったら",
  "description": "〜たら is the most versatile and widespread conditional in Japanese (\"if...\"). Unlike 〜と (which cannot take requests, invitations, or advice), 〜たら freely allows the main clause to contain commands, invitations, wishes, or requests. It is frequently paired with the adverb もし (if) to introduce hypothetical conditions.",
  "sections": [
    {
      "title": "1. Formation Across All Word Classes",
      "content": "• Verb: 終わったら (if it ends) / 行かなかったら (if you don't go)\n• I-adj: 安かったら (if it is cheap) / 寒くなかったら (if it is not cold)\n• Na-adj: 暇だったら (if you are free)\n• Noun: あなただったら (if it were you) / 雨だったら (if it rains)\n\nHypothetical vs. Practical Advice:\n- （もし）私だったら、もう一度やってみると思います。 (If it were me, I think I would try it again.)\n- （もし）時間があったら、手伝ってください。 (If you have time, please help me.)",
      "examples": [
        {
          "jp": "もし、今晩、仕事が早く終わったら、飲みに行きませんか。",
          "romaji": "Moshi, konban, shigoto ga hayaku owattara, nomi ni ikimasen ka.",
          "en": "If work finishes early tonight, won't you go for a drink with me?"
        },
        {
          "jp": "こんな時、もしあなただったらどうしますか。",
          "romaji": "Konna toki, moshi anata dattara dou shimasu ka.",
          "en": "At a time like this, if it were you, what would you do?"
        },
        {
          "jp": "安かったら、新しいパソコンを買いたいです。",
          "romaji": "Yasukattara, atarashii pasokon o kaitai desu.",
          "en": "If it is cheap, I want to buy a new computer."
        },
        {
          "jp": "明日天気がよかったら、山に登りましょう。",
          "romaji": "Ashita tenki ga yokattara, yama ni noborimashou.",
          "en": "If the weather is good tomorrow, let's climb the mountain."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct form: \"At a time like this, if it were you, what would you do?\"",
      "question": "こんな時、もし＿＿＿どうしますか。",
      "options": [
        "あなたたら",
        "あなたら",
        "あなただったら",
        "あなただったたら"
      ],
      "correctAnswer": 2,
      "explanation": "Nouns take だったら for conditionals: あなただったら (if it were you).",
      "romaji": "Konna toki, moshi ___ dou shimasu ka.",
      "romajiOptions": [
        "anatatara",
        "anatara",
        "anata dattara",
        "anata dabbatara"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct conditional form: \"If work finishes early tonight, won't you go for a drink?\"",
      "question": "もし、今晩、仕事が早く＿＿＿飲みに行きませんか。",
      "options": [
        "終わったら",
        "終わったたら",
        "終わりたら",
        "終わりましたたら"
      ],
      "correctAnswer": 0,
      "explanation": "終わる (to end): Ta-form is 終わった + ら → 終わったら.",
      "romaji": "Moshi, konban, shigoto ga hayaku ___ nomi ni ikimasen ka.",
      "romajiOptions": [
        "owattara",
        "owattatara",
        "owaritara",
        "owarimashitatara"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n4-tara-if-conditional",
  "jlptLevel": "N4",
  "grammarPoints": [
    "～たら (If / Conditional)"
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
