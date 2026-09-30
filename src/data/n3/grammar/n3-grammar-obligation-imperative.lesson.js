// JLPT N3 Lesson Module
export const lesson = {
  "id": "n3-grammar-obligation-imperative",
  "number": 10,
  "title": "JLPT N3 Grammar: Obligation, Directives & Frequency (～べき, 命令形, 禁止形, めったに～ない)",
  "shortTitle": "Obligation & Directives (~べき, 命令形)",
  "category": "Directives & Obligation",
  "subtitle": "Express ethical obligations (~べき), direct emergency commands (命令形), prohibitions (禁止形), and rare frequencies (めったに～ない).",
  "formula": "V-辞書形 + べき(だ) • するべき / すべき • 命令形 (V-e / V-ro) • V-辞書形 + な • めったに + V-ない",
  "description": "Learn the ethical duty expressed by ～べき, recognize workplace and signage imperative and prohibitive forms (行け, 止まれ, 入るな), and convey rarity with めったに～ない.",
  "sections": [
    {
      "title": "1. ～べき / ～べきではない (Should / Ought to do)",
      "content": "Expresses what is objectively or socially right based on common sense, ethical duty, or morality:\n\n• Form: V-辞書形 + べき (する becomes するべき or すべき).\n• Negative: V-辞書形 + べきではない (Ought not to do).\n• Past: ～べきだった (Should have done - with regret).",
      "table": null,
      "examples": [
        {
          "jp": "借りたお金は、約束の期日までに返すべきです。",
          "romaji": "Karita okane wa, yakusoku no kijitsu made ni kaesu beki desu.",
          "en": "Borrowed money ought to be returned by the promised date."
        },
        {
          "jp": "他人のプライベートな問題に、必要以上に干渉するべきではない。",
          "romaji": "Tanin no puraibeeto na mondai ni, hitsuyou ijou ni kanshou suru beki dewa nai.",
          "en": "You should not interfere more than necessary in other people's private matters."
        }
      ]
    },
    {
      "title": "2. 命令形 (Imperative) & 禁止形 (Prohibitive) & めったに～ない",
      "content": "• 命令形 (Imperative): Used by superiors, in sports cheering, factory emergencies, or quoted speech: 早く走れ！(Run faster!), 頑張れ！(Hang in there!). Group 1 ends in -e (行け), Group 2 ends in -ro (起きろ), Group 3: しろ, こい.\n• 禁止形 (Prohibitive): Dictionary form + な: 触るな！(Don't touch!), 諦めるな！(Don't give up!).\n• めったに～ない: \"Rarely / Seldom\": Expresses that an event almost never takes place: 彼はめったに遅刻しない (He rarely arrives late).",
      "table": null,
      "examples": [
        {
          "jp": "非常口の前に荷物を置くなと、厳しく注意された。",
          "romaji": "Hijouguchi no mae ni nimotsu o oku na to, kibishiku chuui sareta.",
          "en": "We were strictly cautioned not to place baggage in front of the emergency exit."
        },
        {
          "jp": "この地方では、冬でもめったに雪が降りません。",
          "romaji": "Kono chihou dewa, fuyu demo metta ni yuki ga furimasen.",
          "en": "In this region, it rarely snows even during the winter."
        }
      ]
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the ethical obligation form:",
      "question": "学生はもっと自分の将来について真剣に考える＿＿＿＿＿。",
      "options": [
        "べきだ",
        "気味だ",
        "せいだ",
        "つもりだ"
      ],
      "correctAnswer": 0,
      "explanation": "考えるべきだ expresses that students ought to consider their future earnestly.",
      "romaji": "Gakusei wa motto jibun no shourai ni tsuite shinken ni kangaeru _____.",
      "romajiOptions": [
        "beki da",
        "gimi da",
        "sei da",
        "tsumori da"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Select the low frequency expression:",
      "question": "祖父はとても健康で、＿＿＿＿＿病院に行きません。",
      "options": [
        "めったに",
        "かならず",
        "もっとも",
        "まさに"
      ],
      "correctAnswer": 0,
      "explanation": "めったに takes a negative verb (行きません) meaning \"rarely / seldom goes to the hospital\".",
      "romaji": "Sofu wa totemo kenkou de, _____ byouin ni ikimasen.",
      "romajiOptions": [
        "metta ni",
        "kanarazu",
        "mottomo",
        "masa ni"
      ]
    }
  ]
};

export const lessonMeta = {
  "id": "n3-grammar-obligation-imperative",
  "jlptLevel": "N3",
  "grammarPoints": [
    "Obligation & Directives (~べき, 命令形)"
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
