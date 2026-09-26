// JLPT N5 Lesson Module
export const lesson = {
  "id": "special-sou-omoimasu",
  "number": 3,
  "section": "special",
  "title": "I Think So in Japanese: そう思います",
  "shortTitle": "Expressing Opinions (~と思います)",
  "subtitle": "Express agreement, opinions, and thoughts with そう思います and [Plain Form] と思います.",
  "rules": [
    {
      "title": "Agreeing: そう 思います (I think so)",
      "formula": "A: [Statement] ですね。 -> B: はい、わたし も そう 思います。",
      "explanation": "Use「そう 思います」(そう おもいます) to agree with someone's opinion or view. Adding も (わたし も そう 思います) means \"I think so too\"."
    },
    {
      "title": "Disagreeing Politely: そう 思わない (I don't think so)",
      "formula": "いいえ、わたし は そう 思わない / そう 思いません。",
      "explanation": "To disagree politely, say「わたし は そう 思いません」(I don't think so). In casual speech with friends, use the plain negative:「そう 思わない」(sou omowanai)."
    },
    {
      "title": "Expressing Specific Thoughts: [Plain Form] と 思います",
      "formula": "[Sentence in Plain Form] + と 思います (I think that...)",
      "explanation": "Before the quotation particle と, the verb, adjective, or noun must be in the PLAIN form (dictionary form, nai-form, ta-form): \"あした あめ が ふる と 思います\" (I think it will rain tomorrow), \"この りょうり は おいしい と 思います\" (I think this food is delicious)."
    },
    {
      "title": "Asking Someone's Opinion: どう 思いますか",
      "formula": "[Topic] について どう 思いますか？ (What do you think about [Topic]?)",
      "explanation": "Use「どう 思いますか」(dou omoimasu ka) to ask what someone thinks: \"にほん の せいかつ は どう 思いますか？\" (What do you think of life in Japan?)."
    },
    {
      "title": "Plain Form Quick Reference Reminder",
      "formula": "ます-form vs Plain: きます = くる | きません = こない | きました = きた | きませんでした = こなかった",
      "explanation": "Japanese quotation clauses (～と思います) always convert polite ～ます endings into their plain short forms. For irregular verb きます: くる (will come), こない (will not come), きた (came). Always identify the plain equivalent before adding と思います!"
    }
  ],
  "tables": [
    {
      "title": "Plain Form Conjugations before と思います",
      "headers": [
        "Category",
        "Plain Form Example",
        "+ と思います",
        "English Meaning"
      ],
      "rows": [
        [
          "Verb (Affirmative)",
          "ふります -> ふる",
          "ふる と 思います",
          "I think it will rain"
        ],
        [
          "Verb (Negative)",
          "いきません -> いかない",
          "いかない と 思います",
          "I think I won't go"
        ],
        [
          "Verb (Past)",
          "かいました -> かった",
          "かった と 思います",
          "I think he bought it"
        ],
        [
          "i-Adjective",
          "おもしろい",
          "おもしろい と 思います",
          "I think it is interesting"
        ],
        [
          "na-Adjective",
          "べんり です -> べんり だ",
          "べんり だ と 思います",
          "I think it is convenient"
        ],
        [
          "Noun + Copula",
          "やすみ です -> やすみ だ",
          "やすみ だ と 思います",
          "I think it is a holiday"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "わたし も そう 思います。",
      "romaji": "watashi mo sou omoimasu.",
      "en": "I think so too."
    },
    {
      "ja": "にほんご は おもしろい と 思います。",
      "romaji": "nihongo wa omoshiroi to omoimasu.",
      "en": "I think Japanese is interesting."
    },
    {
      "ja": "あした は あめ が ふる と 思います。",
      "romaji": "ashita wa ame ga furu to omoimasu.",
      "en": "I think it will rain tomorrow."
    },
    {
      "ja": "たなかさん について どう 思いますか？",
      "romaji": "tanaka-san ni tsuite dou omoimasu ka?",
      "en": "What do you think about Mr. Tanaka?"
    }
  ],
  "quiz": [
    {
      "id": "omo-q1",
      "type": "fill-blank",
      "prompt": "Choose the correct phrase for \"I think so too\":",
      "options": [
        "わたし も そう 思います",
        "わたし は そう です",
        "わたし も これ です",
        "わたし は そう しました"
      ],
      "correctAnswer": 0,
      "explanation": "「わたし も そう 思います」(watashi mo sou omoimasu) means \"I think so too\"."
    },
    {
      "id": "omo-q2",
      "type": "fill-blank",
      "prompt": "Complete the sentence: \"あした あめ が [ ? ] と 思います。\" (I think it will rain tomorrow)",
      "options": [
        "ふる",
        "ふります",
        "ふって",
        "ふり"
      ],
      "correctAnswer": 0,
      "explanation": "Verbs before と思います must be in the plain (dictionary) form: ふる."
    },
    {
      "id": "omo-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"I think Japanese is fun.\"",
      "targetEn": "I think Japanese is fun.",
      "chips": [
        "にほんご は",
        "たのしい と",
        "思います",
        "たのしい です"
      ],
      "correctAnswerSentence": "にほんご は たのしい と 思います",
      "explanation": "i-adjectives keep い before と思います: たのしい と 思います."
    },
    {
      "id": "omo-q4",
      "type": "multiple-choice",
      "prompt": "How do you ask \"What do you think?\" in polite Japanese?",
      "options": [
        "どう 思いますか？",
        "なに 思いますか？",
        "どこ 思いますか？",
        "いつ 思いますか？"
      ],
      "correctAnswer": 0,
      "explanation": "「どう 思いますか？」(dou omoimasu ka) is the standard question for asking someone's opinion."
    },
    {
      "id": "omo-q5",
      "type": "audio-listening",
      "prompt": "Listen to the speaker's agreement.",
      "audioText": "はい、わたし も そう おもいます。",
      "options": [
        "Yes, I think so too.",
        "No, I don't think so.",
        "What do you think?",
        "I think it's delicious."
      ],
      "correctAnswer": 0,
      "explanation": "The speaker said「はい、わたし も そう おもいます」(Yes, I think so too)."
    },
    {
      "id": "omo-q6",
      "type": "fill-blank",
      "prompt": "For na-adjectives before と思います, add [ ? ]: \"この まち は べんり [ ? ] と 思います。\"",
      "options": [
        "だ",
        "な",
        "に",
        "で"
      ],
      "correctAnswer": 0,
      "explanation": "na-adjectives take だ before と思います in the plain present affirmative: べんり だ と 思います."
    },
    {
      "id": "omo-q7",
      "type": "word-bank",
      "prompt": "Assemble: \"I don't think so.\"",
      "targetEn": "I don't think so.",
      "chips": [
        "わたし は",
        "そう",
        "思いません",
        "そう です"
      ],
      "correctAnswerSentence": "わたし は そう 思いません",
      "explanation": "「わたし は そう 思いません」means \"I don't think so\"."
    },
    {
      "id": "omo-q8",
      "type": "multiple-choice",
      "prompt": "Which particle quotes the thought before 思います?",
      "options": [
        "と (to)",
        "を (o)",
        "に (ni)",
        "が (ga)"
      ],
      "correctAnswer": 0,
      "explanation": "The quotation particle と links the thought clause to 思います."
    },
    {
      "id": "omo-q9",
      "type": "error-hunt",
      "prompt": "Spot the grammatical error before と思います:",
      "options": [
        "たなかさん は くる と 思います。",
        "たなかさん は きます と 思います。",
        "たなかさん は こない と 思います。",
        "たなかさん は きた と 思います。"
      ],
      "correctAnswer": 1,
      "explanation": "Sentence B incorrectly uses the polite きます instead of plain form くる before と思います."
    },
    {
      "id": "omo-q10",
      "type": "multiple-choice",
      "prompt": "How do you say \"I think he won't come tomorrow\"?",
      "options": [
        "あした こない と 思います",
        "あした くる と 思います",
        "あした きません と 思います",
        "あした こなかった と 思います"
      ],
      "correctAnswer": 0,
      "explanation": "Use the plain negative form こない before と思います."
    }
  ]
};

export const lessonMeta = {
  "id": "special-sou-omoimasu",
  "jlptLevel": "N5",
  "category": "special",
  "grammarPoints": [
    "Expressing Opinions (~と思います)"
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
