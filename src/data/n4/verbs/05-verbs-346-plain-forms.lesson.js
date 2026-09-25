// JLPT N4 Lesson Module
export const lesson = {
  "id": "verbs-346-plain-forms",
  "number": 5,
  "title": "JLPT N4: 346 Verbs (Dictionary, Nai, Ta, Nakatta Plain Forms)",
  "shortTitle": "346 Verbs: 4 Plain Forms",
  "category": "Verb Conjugation",
  "subtitle": "Master the 4 essential plain forms (Dictionary, Nai, Ta, Nakatta) across all verb groups.",
  "formula": "辞書形 (Dict: -u) | ない形 (Nai: -a+nai) | た形 (Ta: -ta/-da) | なかった形 (Nakatta: -a+nakatta)",
  "description": "The 4 plain forms form the grammatical engine of intermediate Japanese. Every major JLPT N4 construction—from conditionals (~たら), reasons (~ので), contrast (~のに), and background (~んです) to passive, causative, and potential—derives from these 4 core forms.",
  "sections": [
    {
      "title": "1. The 4 Foundation Pillars of Japanese Verbs",
      "content": "Every Japanese verb can be conjugated into 4 fundamental plain forms:\n\n1. 辞書形 (Dictionary Form): Plain non-past affirmative (飲む, 食べる, する).\n2. ない形 (Nai-Form): Plain non-past negative (飲まない, 食べない, しない).\n3. た形 (Ta-Form): Plain past affirmative (飲んだ, 食べた, した).\n4. なかった形 (Nakatta-Form): Plain past negative (飲まなかった, 食べなかった, しなかった).\n\nMastering these forms allows you to easily plug verbs into complex sentence patterns like 〜たら (if/when), 〜ので (because), 〜のに (despite), 〜前に (before), and 〜ことがあります (past experience).",
      "table": null,
      "examples": [
        {
          "jp": "昨日 宿題を しなかった。",
          "romaji": "Kinou shukudai o shinakatta.",
          "en": "I did not do homework yesterday (Plain past negative)."
        },
        {
          "jp": "日本へ 行った ことが ありますか。",
          "romaji": "Nihon e itta koto ga arimasu ka.",
          "en": "Have you ever been to Japan? (Ta-form experience)."
        }
      ]
    },
    {
      "title": "2. Godan 5-Vowel Shifts & Te/Ta Euphony Rules",
      "content": "• Group 1 (Godan Verbs) shifts through the Japanese 5-vowel matrix:\n  - A-row + ない: 書かない, 飲まない, 待たない. (Exception: verbs ending in -u take -wa: 買う → 買わない).\n  - U-row: Dictionary form (書く, 飲む, 待つ).\n  - E-row + る: Potential form (書ける, 飲める, 待てる).\n  - O-row + う: Volitional form (書こう, 飲もう, 待とう).\n\n• Ta-Form Sound Changes (Euphony / 音便):\n  - く → いた (書いた); ぐ → いだ (泳いだ) [Exception: 行く → 行った]\n  - す → した (話した)\n  - つ・る・う → った (待った, 取った, 買った)\n  - ぬ・ぶ・む → んだ (死んだ, 呼んだ, 飲んだ)\n\n• Group 2 (Ichidan Verbs): Keep stem and attach る, ない, た, なかった (食べる, 食べない, 食べた, 食べなかった).\n• Group 3 (Irregular): する → しない, した, しなかった | くる → こない, きた, こなかった.",
      "table": null,
      "examples": [
        {
          "jp": "明日は どこへも 行かない。",
          "romaji": "Ashita wa doko e mo ikanai.",
          "en": "I am not going anywhere tomorrow (Nai-form)."
        },
        {
          "jp": "明日 友達と 映画を 見に行く。",
          "romaji": "Ashita tomodachi to eiga o mi ni iku.",
          "en": "I am going to see a movie with a friend tomorrow."
        }
      ]
    },
    {
      "title": "3. Master Reference Table for Common N4 Verbs",
      "content": "",
      "table": {
        "headers": [
          "Verb",
          "Group",
          "辞書形 (Dict)",
          "ない形 (Nai)",
          "た形 (Ta)",
          "なかった形 (Nakatta)",
          "English"
        ],
        "rows": [
          [
            "行く",
            "Group 1",
            "いく (iku)",
            "いかない (ikanai)",
            "いった (itta)",
            "いかなかった (ikanakatta)",
            "go"
          ],
          [
            "書く",
            "Group 1",
            "かく (kaku)",
            "かかない (kakanai)",
            "かいた (kaita)",
            "かなかかった (kakanakatta)",
            "write"
          ],
          [
            "飲む",
            "Group 1",
            "のむ (nomu)",
            "のまない (nomanai)",
            "のんだ (nonda)",
            "のまなかった (nomanakatta)",
            "drink"
          ],
          [
            "話す",
            "Group 1",
            "はなす (hanasu)",
            "はなさない (hanasanai)",
            "はなした (hanashita)",
            "はなさなかった (hanasanakatta)",
            "speak"
          ],
          [
            "待つ",
            "Group 1",
            "まつ (matsu)",
            "またない (matanai)",
            "まった (matta)",
            "またなかった (matanakatta)",
            "wait"
          ],
          [
            "買う",
            "Group 1",
            "かう (kau)",
            "かわない (kawanai)",
            "かった (katta)",
            "かわなかった (kawanakatta)",
            "buy"
          ],
          [
            "泳ぐ",
            "Group 1",
            "およぐ (oyogu)",
            "およがない (oyoganai)",
            "およいだ (oyoida)",
            "およがなかった (oyoganakatta)",
            "swim"
          ],
          [
            "食べる",
            "Group 2",
            "たべる (taberu)",
            "たべない (tabenai)",
            "たべた (tabeta)",
            "たべなかった (tabenakatta)",
            "eat"
          ],
          [
            "見る",
            "Group 2",
            "みる (miru)",
            "みない (minai)",
            "みた (mita)",
            "みなかった (minakatta)",
            "see/watch"
          ],
          [
            "する",
            "Group 3",
            "する (suru)",
            "しない (shinai)",
            "した (shita)",
            "しなかった (shinakatta)",
            "do"
          ],
          [
            "来る",
            "Group 3",
            "くる (kuru)",
            "こない (konai)",
            "きた (kita)",
            "こなかった (konakatta)",
            "come"
          ]
        ]
      },
      "examples": []
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "What is the plain past negative (なかった形) of the verb 買う (かう - to buy)?",
      "question": "高かったので、何も ＿＿＿。",
      "options": [
        "買わなかった",
        "買わなかったです",
        "買えなかった",
        "買いたかった"
      ],
      "correctAnswer": 0,
      "explanation": "Verbs ending in -u change to -wa in negative forms: 買う → 買わない → 買わなかった.",
      "romaji": "Takakatta node, nani mo ___.",
      "romajiOptions": [
        "kawanakatta",
        "kawanakatta desu",
        "kaenakatta",
        "kaitakatta"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "What is the plain past form (た形) of the irregular exception 行く (いく - to go)?",
      "question": "去年 日本へ ＿＿＿。",
      "options": [
        "行った",
        "行いた",
        "行いたった",
        "行きた"
      ],
      "correctAnswer": 0,
      "explanation": "Although -ku verbs usually become -ita (e.g. 書く → 書いた), 行く is an exception and becomes 行った.",
      "romaji": "Kyonen Nihon e ___.",
      "romajiOptions": [
        "itta",
        "ikitata",
        "ikitatta",
        "ikita"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I did not eat anything yesterday.\"",
      "chips": [
        "きのうは",
        "なにも",
        "たべなかった。"
      ],
      "correctOrder": [
        0,
        1,
        2
      ],
      "explanation": "きのうは (yesterday) + なにも (nothing) + たべなかった (did not eat)."
    }
  ]
};

export const lessonMeta = {
  "id": "verbs-346-plain-forms",
  "jlptLevel": "N4",
  "grammarPoints": [
    "346 Verbs: 4 Plain Forms"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-verbs"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
