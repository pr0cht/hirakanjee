// JLPT N4 Lesson Module
export const lesson = {
  "id": "vocab-seasons-weather",
  "number": 3,
  "section": "vocabulary",
  "title": "Seasons & Weather Vocabulary: Haru, Natsu, Aki, Fuyu",
  "shortTitle": "Seasons & Weather",
  "subtitle": "Master the 4 seasons, weather phenomena (rain, snow, sunny, cloudy), and seasonal expressions.",
  "rules": [
    {
      "title": "The Four Distinct Japanese Seasons (四季 Shiki)",
      "formula": "春 (はる - Spring) | 夏 (なつ - Summer) | 秋 (あき - Autumn) | 冬 (ふゆ - Winter)",
      "explanation": "Japan values the seasonal cycle deeply. N5 tests your mastery of the four seasons and their accompanying weather patterns."
    },
    {
      "title": "Natural Weather Verbs with が",
      "formula": "あめ が ふります (Rain falls) | ゆき が ふります (Snow falls) | かぜ が ふきます (Wind blows)",
      "explanation": "Weather phenomena are spontaneous events marked by が with special verbs: ふります (falls - for rain/snow) and ふきます (blows - for wind)."
    }
  ],
  "tables": [
    {
      "title": "Seasons & Weather Lexicon",
      "headers": [
        "Category",
        "Japanese",
        "Romaji",
        "Meaning",
        "Sample Phrase"
      ],
      "rows": [
        [
          "Season",
          "はる",
          "haru",
          "spring",
          "はる に さくら が さきます。"
        ],
        [
          "Season",
          "なつ",
          "natsu",
          "summer",
          "なつ は とても あつい です。"
        ],
        [
          "Season",
          "あき",
          "aki",
          "autumn / fall",
          "あき の もみじ は きれい です。"
        ],
        [
          "Season",
          "ふゆ",
          "fuyu",
          "winter",
          "ふゆ は ゆき が ふります。"
        ],
        [
          "Weather",
          "てんき",
          "tenki",
          "weather",
          "きょう は いい てんき です。"
        ],
        [
          "Weather",
          "あめ",
          "ame",
          "rain",
          "あめ が ふって います。"
        ],
        [
          "Weather",
          "ゆき",
          "yuki",
          "snow",
          "ゆき が たくさん ふりました。"
        ],
        [
          "Weather",
          "はれ",
          "hare",
          "clear / sunny",
          "あした は はれ です。"
        ],
        [
          "Weather",
          "くもり",
          "kumori",
          "cloudy",
          "きょう は くもり です。"
        ],
        [
          "Weather",
          "かぜ",
          "kaze",
          "wind",
          "つよい かぜ が ふきます。"
        ],
        [
          "Weather",
          "たいふう",
          "taifuu",
          "typhoon",
          "たいふう が きます。"
        ]
      ]
    }
  ],
  "examples": [
    {
      "ja": "きょう は いい てんき です ね。",
      "romaji": "kyou wa ii tenki desu ne.",
      "en": "The weather is nice today, isn't it?"
    },
    {
      "ja": "ふゆ は ゆき が ふります から、とても さむい です。",
      "romaji": "fuyu wa yuki ga furimasu kara, totemo samui desu.",
      "en": "In winter it snows, so it is very cold."
    },
    {
      "ja": "きのう は いちにちじゅう あめ でした。",
      "romaji": "kinou wa ichinichijuu ame deshita.",
      "en": "Yesterday it was rainy all day long."
    }
  ],
  "quiz": [
    {
      "id": "vocab3-q1",
      "type": "multiple-choice",
      "prompt": "Which season is \"あき\" (aki)?",
      "question": "Which season is \"あき\" (aki)?",
      "options": [
        "Autumn / Fall",
        "Spring",
        "Summer",
        "Winter"
      ],
      "correctAnswer": 0,
      "explanation": "あき (秋) means autumn / fall. はる is spring, なつ is summer, ふゆ is winter."
    },
    {
      "id": "vocab3-q2",
      "type": "fill-blank",
      "prompt": "Natural phenomenon verb: \"あめ が [ ? ]。\"",
      "options": [
        "ふって います",
        "のんで います",
        "たべて います",
        "いって います"
      ],
      "correctAnswer": 0,
      "explanation": "Rain and snow \"fall\" using ふる -> ふって います (it is raining)."
    },
    {
      "id": "vocab3-q3",
      "type": "word-bank",
      "prompt": "Assemble: \"Summer is very hot.\"",
      "targetEn": "Summer is very hot.",
      "chips": [
        "なつ は",
        "とても",
        "あつい です",
        "ふゆ は",
        "さむい です"
      ],
      "correctAnswerSentence": "なつ は とても あつい です",
      "explanation": "なつ (summer) + とても あつい です (very hot)."
    },
    {
      "id": "vocab3-q4",
      "type": "audio-listening",
      "prompt": "Listen and identify today's weather forecast.",
      "audioText": "あした は はれ です。",
      "options": [
        "Clear / Sunny",
        "Rainy",
        "Snowy",
        "Cloudy"
      ],
      "correctAnswer": 0,
      "explanation": "はれ (晴れ) means clear / sunny weather."
    },
    {
      "id": "vocab3-q5",
      "type": "error-hunt",
      "prompt": "Which sentence uses an incorrect weather verb?",
      "options": [
        "かぜ が ふります。",
        "かぜ が ふきます。",
        "ゆき が ふります。",
        "あめ が ふります。"
      ],
      "correctAnswer": 0,
      "explanation": "Wind blows (ふきます - 吹く), it does not fall (ふります - 降る). It must be \"かぜ が ふきます\".",
      "romajiOptions": [
        "kaze ga furimasu.",
        "kaze ga fukimasu.",
        "yuki ga furimasu.",
        "ame ga furimasu."
      ]
    },
    {
      "id": "vocab3-q6",
      "type": "multiple-choice",
      "prompt": "Which word means \"cloudy\"?",
      "question": "Which word means \"cloudy\"?",
      "options": [
        "くもり (kumori)",
        "はれ (hare)",
        "あめ (ame)",
        "ゆき (yuki)"
      ],
      "correctAnswer": 0,
      "explanation": "くもり means cloudy weather."
    },
    {
      "id": "vocab3-q7",
      "type": "fill-blank",
      "prompt": "Complete for spring: \"[ ? ] に さくら が さきます。\" (cherry blossoms bloom)",
      "options": [
        "はる",
        "なつ",
        "あき",
        "ふゆ"
      ],
      "correctAnswer": 0,
      "explanation": "さくら (cherry blossoms) bloom in spring (はる)."
    },
    {
      "id": "vocab3-q8",
      "type": "word-bank",
      "prompt": "Assemble: \"Yesterday it rained all day.\"",
      "targetEn": "Yesterday it rained all day.",
      "chips": [
        "きのう は",
        "あめ が",
        "ふりました",
        "ふります",
        "ゆき"
      ],
      "correctAnswerSentence": "きのう は あめ が ふりました",
      "explanation": "Past precipitation: あめ が ふりました."
    },
    {
      "id": "vocab3-q9",
      "type": "audio-listening",
      "prompt": "Listen and identify the season being described.",
      "audioText": "ふゆ は ゆき が たくさん ふります。",
      "options": [
        "Winter",
        "Summer",
        "Autumn",
        "Spring"
      ],
      "correctAnswer": 0,
      "explanation": "ふゆ (winter), ゆき が ふります (snow falls)."
    },
    {
      "id": "vocab3-q10",
      "type": "multiple-choice",
      "prompt": "What is the word for \"typhoon\"?",
      "question": "What is the word for \"typhoon\"?",
      "options": [
        "たいふう (taifuu)",
        "つなみ (tsunami)",
        "じしん (jishin)",
        "かみなり (kaminari)"
      ],
      "correctAnswer": 0,
      "explanation": "たいふう (台風) means typhoon."
    }
  ]
};

export const lessonMeta = {
  "id": "vocab-seasons-weather",
  "jlptLevel": "N5",
  "category": "vocabulary",
  "grammarPoints": [
    "Seasons & Weather"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n5-vocabulary"
    ],
    "difficulty": "beginner"
  }
};

export default lesson;
