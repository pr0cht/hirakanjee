/**
 * JLPT N5 Core Requirements Curriculum
 * Referenced from MLC Japanese (Meguro Language Center - mlcjapanese.co.jp)
 * 12 Fundamental Japanese Language Lessons with Grammatical Explanations,
 * Pronounceable Example Sentences, and Interactive Quizzes.
 */

export const n5CoreLessons = [
  {
    id: 'basic-structure',
    number: 1,
    title: 'JLPT N5: Basic structure ～は～です。 ... wa ... desu.',
    shortTitle: 'Basic Structure (~は~です)',
    subtitle: 'Master the core topic-comment sentence pattern and polite copula.',
    description: 'The foundation of Japanese grammar: defining topics with the particle は (wa) and expressing equivalence, descriptions, and polite states with です (desu).',
    sections: [
      {
        title: '1. Topic-Comment Pattern: [Topic] は [Description] です。',
        content: `In Japanese, sentences follow a Topic-Comment pattern. The particle は (written with the hiragana 'ha' but pronounced 'wa') flags what the sentence is about.
        
Structure Formula:
  A は B です。 (As for A, it is B / A is B.)`,
        table: {
          headers: ['Role', 'Japanese', 'Pronunciation', 'Meaning'],
          rows: [
            ['Topic Marker', 'は', 'wa', 'As for... / Speaking of...'],
            ['Affirmative Copula', 'です', 'desu', 'is / am / are'],
            ['Question Marker', 'か', 'ka', '? (turns sentence into question)'],
          ],
        },
        examples: [
          { jp: 'わたし は がくせい です。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
          { jp: 'これ は にほんご の ほん です。', romaji: 'Kore wa nihongo no hon desu.', en: 'This is a Japanese language book.' },
          { jp: 'たなかさん は せんせい です。', romaji: 'Tanaka-san wa sensei desu.', en: 'Mr. Tanaka is a teacher.' },
        ],
      },
      {
        title: '2. Four Polite Tenses of です (Desu)',
        content: `The copula です inflects across present/future and past, affirmative and negative. Memorize these four primary conjugations:`,
        table: {
          headers: ['Tense', 'Form', 'Romaji', 'Meaning'],
          rows: [
            ['Present Affirmative', '～です', '~ desu', 'is / am / are'],
            ['Present Negative', '～じゃありません / ～ではありません', '~ ja arimasen / dewa arimasen', 'is not / are not'],
            ['Past Affirmative', '～でした', '~ deshita', 'was / were'],
            ['Past Negative', '～じゃありませんでした', '~ ja arimasen deshita', 'was not / were not'],
          ],
        },
        examples: [
          { jp: 'わたし は いしゃ じゃありません。', romaji: 'Watashi wa isha ja arimasen.', en: 'I am not a doctor.' },
          { jp: 'きのう は にちようび でした。', romaji: 'Kinou wa nichiyoubi deshita.', en: 'Yesterday was Sunday.' },
          { jp: 'おととい は やすみ じゃありませんでした。', romaji: 'Ototoi wa yasumi ja arimasen deshita.', en: 'The day before yesterday was not a day off.' },
        ],
      },
      {
        title: '3. Asking Questions with か (Ka)',
        content: `To make a question in Japanese, simply add the particle か (ka) to the end of the sentence with rising intonation. You do not change the word order!`,
        examples: [
          { jp: 'あなた は がくせい です か。', romaji: 'Anata wa gakusei desu ka.', en: 'Are you a student?' },
          { jp: 'はい、がくせい です。', romaji: 'Hai, gakusei desu.', en: 'Yes, I am a student.' },
          { jp: 'いいえ、がくせい じゃありません。', romaji: 'Iie, gakusei ja arimasen.', en: 'No, I am not a student.' },
        ],
      },
    ],
    quiz: [
      {
        question: "How is the topic-marking particle 'は' pronounced when used after a topic?",
        options: ['ha', 'wa', 'ba', 'ya'],
        answer: 1,
        explanation: "Although spelled with the hiragana character 'は' (ha), when acting as a grammatical topic marker it is always pronounced 'wa'.",
      },
      {
        question: "What is the polite past negative of 'です'?",
        options: ['でした', 'じゃありません', 'じゃありませんでした', 'くありません'],
        answer: 2,
        explanation: "'じゃありませんでした' (or 'ではありませんでした') is the polite past negative ('was not / were not').",
      },
      {
        question: "Select the natural translation for: '田中さんは先生ではありません。'",
        options: [
          'Mr. Tanaka was a teacher.',
          'Mr. Tanaka is not a teacher.',
          'Is Mr. Tanaka a teacher?',
          'Mr. Tanaka is a student.',
        ],
        answer: 1,
        explanation: "'ではありません' indicates present negative, meaning 'is not a teacher'.",
      },
      {
        question: "To turn 'これ は ほん です' into a question, what particle is added to the end?",
        options: ['ね', 'よ', 'か', 'を'],
        answer: 2,
        explanation: "'か' (ka) placed at the end of a sentence functions as a verbal question mark.",
      },
    ],
  },
  {
    id: 'japanese-pronouns',
    number: 2,
    title: 'JLPT N5: Japanese Pronouns: I, You, She, He, They, We',
    shortTitle: 'Japanese Pronouns (I, You, She, He...)',
    subtitle: 'Learn personal pronouns and their cultural usage and omissions.',
    description: 'Master Japanese personal pronouns for self, conversational partners, and third parties, and understand when native speakers omit pronouns.',
    sections: [
      {
        title: '1. Singular & Plural Personal Pronouns',
        content: `Japanese has distinct pronouns depending on gender, relationship, and formality. Plurals are typically formed by adding the suffix ～たち (~tachi) or ～ら (~ra).`,
        table: {
          headers: ['Pronoun', 'Japanese', 'Romaji', 'Usage Note'],
          rows: [
            ['I / Me', 'わたし (私)', 'watashi', 'Standard, polite for everyone'],
            ['I / Me (Casual Male)', 'ぼく (僕)', 'boku', 'Friendly, informal used by males'],
            ['You', 'あなた (貴方)', 'anata', 'Use cautiously; better to use their name + さん'],
            ['He / Him', 'かれ (彼)', 'kare', 'Third person male, also means boyfriend'],
            ['She / Her', 'かのじょ (彼女)', 'kanojo', 'Third person female, also means girlfriend'],
            ['We / Us', 'わたしたち (私たち)', 'watashitachi', 'Standard plural of I'],
            ['They / Them', 'かれら (彼ら)', 'karera', 'Plural third person (mixed or male)'],
          ],
        },
        examples: [
          { jp: 'わたし は エンジニア です。', romaji: 'Watashi wa enjinia desu.', en: 'I am an engineer.' },
          { jp: 'かのじょ は にほんじん です。', romaji: 'Kanojo wa nihonjin desu.', en: 'She is Japanese.' },
          { jp: 'わたしたち は ともだち です。', romaji: 'Watashitachi wa tomodachi desu.', en: 'We are friends.' },
        ],
      },
      {
        title: '2. The Cultural Golden Rule: Dropping Pronouns',
        content: `In natural Japanese, pronouns (especially 'you' - あなた) are dropped whenever the subject is already obvious from the context.
        
Instead of saying "あなた は どこ に いきます か" (Where are you going?), it is far more polite to address the person by name: "たなかさん は どこ に いきます か" or simply "どこ に いきます か".`,
        examples: [
          { jp: 'すずきさん は にほんご が じょうず です ね。', romaji: 'Suzuki-san wa nihongo ga jouzu desu ne.', en: 'Ms. Suzuki, your Japanese is very good!' },
          { jp: 'あした、いっしょ に いきましょう。', romaji: 'Ashita, issho ni ikimashou.', en: "Let's go together tomorrow. (Subject 'we' is naturally implied)" },
        ],
      },
    ],
    quiz: [
      {
        question: "What is the standard, polite word for 'I / me' in Japanese?",
        options: ['あなた', 'わたし', 'かれ', 'ぼく'],
        answer: 1,
        explanation: "'わたし' (watashi) is the universal, polite pronoun for 'I'.",
      },
      {
        question: "How do you form the plural pronoun for 'We' from 'わたし'?",
        options: ['わたしたち', 'わたしら', 'わたしかた', 'わたしども'],
        answer: 0,
        explanation: "Adding the suffix 'たち' (~tachi) creates 'わたしたち' (we / us).",
      },
      {
        question: "Why do native Japanese speakers avoid frequently saying 'あなた' (anata)?",
        options: [
          'It is grammatically incorrect',
          'It can sound impersonal, direct, or distant; using the person’s name + さん is more polite',
          'It can only be used with children',
          'It only means he or she',
        ],
        answer: 1,
        explanation: "Using 'あなた' to a colleague or acquaintance can sound overly blunt; addressing them by name + さん is standard Japanese etiquette.",
      },
    ],
  },
  {
    id: 'temporal-relative-words',
    number: 3,
    title: 'JLPT N5: Yesterday, today, tomorrow きのう／きょう／あした、せんしゅう／こんしゅう／らいしゅう…',
    shortTitle: 'Yesterday, Today, Tomorrow (Time Words)',
    subtitle: 'Learn relative time expressions for days, weeks, months, and years.',
    description: 'Essential temporal adverbs in Japanese used to describe when actions occurred without requiring the particle に (ni).',
    sections: [
      {
        title: '1. Daily Timeline Expressions',
        content: `Relative time words change meaning depending on the present moment. They usually do NOT take the time particle に (ni).`,
        table: {
          headers: ['Two days ago', 'Yesterday', 'Today', 'Tomorrow', 'Two days later'],
          rows: [
            ['おととい', 'きのう (昨日)', 'きょう (今日)', 'あした (明日)', 'あさって'],
            ['ototoi', 'kinou', 'kyou', 'ashita', 'asatte'],
          ],
        },
        examples: [
          { jp: 'きょう は てんき が いい です。', romaji: 'Kyou wa tenki ga ii desu.', en: 'Today the weather is nice.' },
          { jp: 'きのう は とても いそがしかった です。', romaji: 'Kinou wa totemo isogashikatta desu.', en: 'Yesterday was very busy.' },
          { jp: 'あした ともだち と あいます。', romaji: 'Ashita tomodachi to aimasu.', en: 'Tomorrow I will meet a friend.' },
        ],
      },
      {
        title: '2. Weeks, Months, and Years Timeline',
        content: `Notice the regular prefix patterns:
• 先 (せん / sen) = Last / Previous
• 今 (こん / kon) = This / Current
• 来 (らい / rai) = Next / Coming`,
        table: {
          headers: ['Category', 'Last / Past', 'This / Present', 'Next / Future'],
          rows: [
            ['Week', 'せんしゅう (先週)', 'こんしゅう (今週)', 'らいしゅう (来週)'],
            ['Month', 'せんげつ (先月)', 'こんげつ (今月)', 'らいげつ (来月)'],
            ['Year', 'きょねん (去年)', 'ことし (今年)', 'らいねん (来年)'],
          ],
        },
        examples: [
          { jp: 'こんしゅう の どようび は やすみ です。', romaji: 'Konshuu no doyoubi wa yasumi desu.', en: 'This week Saturday is a holiday.' },
          { jp: 'らいげつ にほん に いきます。', romaji: 'Raigetsu nihon ni ikimasu.', en: 'Next month I am going to Japan.' },
          { jp: 'きょねん にほんご の べんきょう を はじめました。', romaji: 'Kyonen nihongo no benkyou o hajimemashita.', en: 'Last year I started studying Japanese.' },
        ],
      },
    ],
    quiz: [
      {
        question: "What is the Japanese word for 'Tomorrow'?",
        options: ['きのう', 'きょう', 'あした', 'おととい'],
        answer: 2,
        explanation: "'あした' (ashita) means tomorrow ('きょう' = today, 'きのう' = yesterday).",
      },
      {
        question: "Which term means 'Last Week'?",
        options: ['こんしゅう', 'らいしゅう', 'せんしゅう', 'まいしゅう'],
        answer: 2,
        explanation: "'せんしゅう' (先週, senshuu) uses the prefix 先 (previous) to mean last week.",
      },
      {
        question: "What is the word for 'This Year'?",
        options: ['らいねん', 'ことし', 'きょねん', 'おととし'],
        answer: 1,
        explanation: "'ことし' (今年, kotoshi) is the special reading for this year.",
      },
    ],
  },
  {
    id: 'directions-vocabulary',
    number: 4,
    title: 'JLPT N5: Directions Vocabulary: Left, Right, North, South & More',
    shortTitle: 'Directions Vocabulary (Left, Right, North...)',
    subtitle: 'Navigating locations, relative positions, and the compass points.',
    description: 'Learn relative positional prepositions (inside, outside, front, behind, next to) and the 4 cardinal compass directions.',
    sections: [
      {
        title: '1. Relative Positions & Locations',
        content: `Positional words combine with nouns using the possessive particle の:
Structure: [Place/Object] の [Position]
Example: つくえ の うえ (On top of the desk)`,
        table: {
          headers: ['Position', 'Japanese', 'Romaji', 'Opposite Pair'],
          rows: [
            ['Right / Left', 'みぎ (右) / ひだり (左)', 'migi / hidari', 'みぎ ↔ ひだり'],
            ['Front / Back', 'まえ (前) / うしろ (後ろ)', 'mae / ushiro', 'まえ ↔ うしろ'],
            ['Up / Down', 'うえ (上) / した (下)', 'ue / shita', 'うえ ↔ した'],
            ['Inside / Outside', 'なか (中) / そと (外)', 'naka / soto', 'なか ↔ そと'],
            ['Next to / Nearby', 'となり (隣) / ちかく (近く)', 'tonari / chikaku', 'Side-by-side vs Nearby'],
          ],
        },
        examples: [
          { jp: 'ぎんこう は えき の まえ に あります。', romaji: 'Ginkou wa eki no mae ni arimasu.', en: 'The bank is in front of the station.' },
          { jp: 'ねこ は はこ の なか に います。', romaji: 'Neko wa hako no naka ni imasu.', en: 'The cat is inside the box.' },
          { jp: 'ほん は つくえ の うえ に あります。', romaji: 'Hon wa tsukue no ue ni arimasu.', en: 'The book is on top of the desk.' },
        ],
      },
      {
        title: '2. Cardinal Compass Directions (東西南北)',
        content: `The four cardinal directions:
• きた (北, kita) = North
• みなみ (南, minami) = South
• ひがし (東, higashi) = East
• にし (西, nishi) = West`,
        examples: [
          { jp: 'とうきょう は にほん の ひがし に あります。', romaji: 'Toukyou wa nihon no higashi ni arimasu.', en: 'Tokyo is in the east of Japan.' },
          { jp: 'ほっかいどう は きた に あります。', romaji: 'Hokkaidou wa kita ni arimasu.', en: 'Hokkaido is in the north.' },
        ],
      },
    ],
    quiz: [
      {
        question: "What is the Japanese word for 'Left'?",
        options: ['みぎ', 'ひだり', 'まえ', 'うしろ'],
        answer: 1,
        explanation: "'ひだり' (hidari) means left; 'みぎ' (migi) means right.",
      },
      {
        question: "How do you say 'Inside the bag' in Japanese?",
        options: ['かばん の なか', 'かばん の そと', 'かばん の うえ', 'かばん の した'],
        answer: 0,
        explanation: "'なか' (naka) means inside/in, so 'かばん の なか' is inside the bag.",
      },
      {
        question: "Which compass direction is 'みなみ' (minami)?",
        options: ['North', 'South', 'East', 'West'],
        answer: 1,
        explanation: "'みなみ' (minami) is South ('きた' = North, 'ひがし' = East, 'にし' = West).",
      },
    ],
  },
  {
    id: 'numbers-1-100000',
    number: 5,
    title: 'JLPT N5: Japanese Numbers 1-100,000: How to Read & Pronounce',
    shortTitle: 'Numbers 1–100,000 (How to Read & Count)',
    subtitle: 'Systematic counting, large units, and crucial phonetic sound shifts.',
    description: 'Master counting from 1 to 100,000 in Japanese, including sound shifts for 300, 600, 800, 3000, 8000, and the 10,000-based (万) numbering system.',
    sections: [
      {
        title: '1. Basic Digits & Tens (1–99)',
        content: `Japanese numbers are built systematically:
10 = じゅう (juu)
20 = にじゅう (ni-juu)
35 = さんじゅうご (san-juu-go)`,
        table: {
          headers: ['Digit', 'Reading', 'Digit', 'Reading'],
          rows: [
            ['1', 'いち (ichi)', '6', 'ろく (roku)'],
            ['2', 'に (ni)', '7', 'なな / しち (nana / shichi)'],
            ['3', 'さん (san)', '8', 'はち (hachi)'],
            ['4', 'よん / し (yon / shi)', '9', 'きゅう / く (kyuu / ku)'],
            ['5', 'ご (go)', '10', 'じゅう (juu)'],
          ],
        },
        examples: [
          { jp: 'わたし は にじゅうご さい です。', romaji: 'Watashi wa nijuugo sai desu.', en: 'I am 25 years old.' },
          { jp: 'この りんご は ひゃくえん です。', romaji: 'Kono ringo wa hyakuen desu.', en: 'This apple is 100 yen.' },
        ],
      },
      {
        title: '2. Hundreds (百) and Thousands (千) Sound Shifts',
        content: `Certain numbers trigger euphonic sound changes (rendaku) to make pronunciation smoother:
        
Hundreds (百 - ひゃく / hyaku):
• 300: さんびゃく (sanbyaku) [sound changes to 'byaku']
• 600: ろっぴゃく (roppyaku) [sound changes to 'ppyaku']
• 800: はっぴゃく (happyaku) [sound changes to 'ppyaku']

Thousands (千 - せん / sen):
• 3,000: さんぜん (sanzen) [sound changes to 'zen']
• 8,000: はっせん (hassen) [sound changes to double 'ss']`,
        examples: [
          { jp: 'この シャツ は さんぜん ろっぴゃく えん です。', romaji: 'Kono shatsu wa sanzen roppyaku en desu.', en: 'This shirt is 3,600 yen.' },
          { jp: 'くるま は はちじゅう はちまん えん です。', romaji: 'Kuruma wa hachijuu hachiman en desu.', en: 'The car is 880,000 yen.' },
        ],
      },
      {
        title: '3. The Ten-Thousand Unit: 万 (まん / man)',
        content: `Unlike English which groups numbers in thousands (1,000 $\\rightarrow$ 1,000,000), Japanese groups numbers in units of four zeros (10,000 = 一万 / いちまん).
• 10,000 = いちまん (ichiman)
• 50,000 = ごまん (goman)
• 100,000 = じゅうまん (juuman)`,
        examples: [
          { jp: 'パソコン は じゅうまん えん でした。', romaji: 'Pasokon wa juuman en deshita.', en: 'The laptop was 100,000 yen.' },
        ],
      },
    ],
    quiz: [
      {
        question: "What is the correct pronunciation for 300 (三百)?",
        options: ['さんひゃく', 'さんびゃく', 'さんぴゃく', 'さっぴゃく'],
        answer: 1,
        explanation: "300 undergoes rendaku to become 'さんびゃく' (sanbyaku).",
      },
      {
        question: "What is the correct pronunciation for 8,000 (八千)?",
        options: ['はちせん', 'はっせん', 'はちぜん', 'はっぜん'],
        answer: 1,
        explanation: "8,000 contracts to 'はっせん' (hassen).",
      },
      {
        question: "How is 10,000 written in Japanese units?",
        options: ['じゅうせん', 'いちまん', 'ひゃくひゃく', 'じゅうまん'],
        answer: 1,
        explanation: "10,000 is represented by '一万' (いちまん / ichiman).",
      },
    ],
  },
  {
    id: 'telling-time',
    number: 6,
    title: "JLPT N5: Japanese Telling Time: O' clock, Minutes, and Hours in Japanese",
    shortTitle: 'Telling Time (~時, ~分, ~時間)',
    subtitle: 'Learn hours, minutes, durations, and irregular readings.',
    description: 'Master telling exact time with ~時 (ji) and ~分 (fun/pun), asking what time it is, and expressing time spans with ~時間 (jikan).',
    sections: [
      {
        title: '1. Hours: ～時 (じ / ji)',
        content: `Hours are formed by: [Number] + 時 (ji). Watch out for 3 key irregular readings:
• 4:00 = よじ (yoji) — NOT yon-ji!
• 7:00 = しちじ (shichiji) — NOT nana-ji!
• 9:00 = くじ (kuji) — NOT kyuu-ji!`,
        table: {
          headers: ['Time', 'Reading', 'Time', 'Reading'],
          rows: [
            ['1:00', 'いちじ', '7:00', 'しちじ (Irregular!)'],
            ['2:00', 'にじ', '8:00', 'はちじ'],
            ['3:00', 'さんじ', '9:00', 'くじ (Irregular!)'],
            ['4:00', 'よじ (Irregular!)', '10:00', 'じゅうじ'],
            ['5:00', 'ごじ', '11:00', 'じゅういちじ'],
            ['6:00', 'ろくじ', '12:00', 'じゅうにじ'],
          ],
        },
        examples: [
          { jp: 'いま なんじ です か。', romaji: 'Ima nanji desu ka.', en: 'What time is it right now?' },
          { jp: 'いま よじ はん です。', romaji: 'Ima yoji han desu.', en: 'It is 4:30 right now.' },
        ],
      },
      {
        title: '2. Minutes: ～分 (ふん / ぷん - fun/pun)',
        content: `Minutes alternate between ふん (fun) and ぷん (pun) depending on the preceding digit:
• 1 min: いっぷん (ippun)
• 2 min: にふん (nifun)
• 3 min: さんぷん (sanpun)
• 4 min: よんぷん (yonpun)
• 5 min: ごふん (gofun)
• 6 min: ろっぷん (roppun)
• 7 min: ななふん (nanafun)
• 8 min: はっぷん (happun)
• 9 min: きゅうふん (kyuufun)
• 10 min: じゅっぷん / じっぷん (juppun / jippun)
• Half past: はん (半 / han)`,
        examples: [
          { jp: 'かいぎ は くじ じゅっぷん から です。', romaji: 'Kaigi wa kuji juppun kara desu.', en: 'The meeting is from 9:10.' },
          { jp: 'いま しちじ じゅうごふん です。', romaji: 'Ima shichiji juugofun desu.', en: 'It is 7:15 right now.' },
        ],
      },
    ],
    quiz: [
      {
        question: "How do you say 4:00 (four o'clock) in Japanese?",
        options: ['よんじ', 'よじ', 'しじ', 'よんじかん'],
        answer: 1,
        explanation: "4:00 is irregularly read as 'よじ' (yoji).",
      },
      {
        question: "How is '9:30' expressed naturally?",
        options: ['きゅうじ はん', 'くじ はん', 'くじ さんじゅっぷん', 'Both B and C are correct'],
        answer: 3,
        explanation: "9:00 is 'くじ' (kuji), and 30 minutes can be 'はん' (half) or 'さんじゅっぷん'.",
      },
      {
        question: "What is the reading for 1 minute (1分)?",
        options: ['いちふん', 'いちぷん', 'いっぷん', 'ひとふん'],
        answer: 2,
        explanation: "1 minute contracts to 'いっぷん' (ippun).",
      },
    ],
  },
  {
    id: 'calendar-dates',
    number: 7,
    title: 'JLPT N5: day of the week, day of the month, month of the year ～ようび、～にち、～がつ',
    shortTitle: 'Days, Months & Calendar (~ようび, ~日, ~月)',
    subtitle: 'The 7 days of the week, 12 months, and special calendar day readings.',
    description: 'Master the Japanese calendar: days of the week (~youbi), the 12 months (~gatsu), and the 1st through 31st dates (~nichi) with native irregular readings.',
    sections: [
      {
        title: '1. Days of the Week: ～曜日 (ようび / youbi)',
        content: `The Japanese days of the week are named after celestial bodies and the five traditional elements:`,
        table: {
          headers: ['Day', 'Japanese', 'Romaji', 'Associated Element'],
          rows: [
            ['Monday', 'げつようび (月曜日)', 'getsuyoubi', '月 (Moon)'],
            ['Tuesday', 'かようび (火曜日)', 'kayoubi', '火 (Fire)'],
            ['Wednesday', 'すいようび (水曜日)', 'suiyoubi', '水 (Water)'],
            ['Thursday', 'もくようび (木曜日)', 'mokuyoubi', '木 (Wood/Tree)'],
            ['Friday', 'きんようび (金曜日)', 'kinyoubi', '金 (Gold/Metal)'],
            ['Saturday', 'どようび (土曜日)', 'doyoubi', '土 (Earth/Soil)'],
            ['Sunday', 'にちようび (日曜日)', 'nichiyoubi', '日 (Sun)'],
          ],
        },
        examples: [
          { jp: 'きょう は きんようび です。', romaji: 'Kyou wa kinyoubi desu.', en: 'Today is Friday.' },
          { jp: 'にちようび に えいが を みます。', romaji: 'Nichiyoubi ni eiga o mimasu.', en: 'On Sunday I will watch a movie.' },
        ],
      },
      {
        title: '2. Irregular Calendar Days: 1st to 10th & 20th',
        content: `The 1st through 10th days of the month use ancient native Japanese readings rather than standard Sino-Japanese numbers. These are high-priority test items for JLPT N5:
• 1st: ついたち (一日)
• 2nd: ふつか (二日)
• 3rd: みっか (三日)
• 4th: よっか (四日)
• 5th: いつか (五日)
• 6th: むいか (六日)
• 7th: なのか (七日)
• 8th: ようか (八日)
• 9th: ここのか (九日)
• 10th: とおか (十日)
• 14th: じゅうよっか (十四日)
• 20th: はつか (二十日)
• 24th: にじゅうよっか (二十四日)`,
        examples: [
          { jp: 'わたし の たんじょうび は ごがつ ついたち です。', romaji: 'Watashi no tanjoubi wa gogatsu tsuitachi desu.', en: 'My birthday is May 1st.' },
          { jp: 'りょこう は じゅうがつ はつか から です。', romaji: 'Ryokou wa juugatsu hatsuka kara desu.', en: 'The trip is from October 20th.' },
        ],
      },
      {
        title: '3. Months of the Year: ～月 (がつ / gatsu)',
        content: `Months simply follow: [Number 1–12] + 月 (gatsu).
Watch for:
• April = しがつ (四月) — NOT yon-gatsu!
• July = しちがつ (七月) — NOT nana-gatsu!
• September = くがつ (九月) — NOT kyuu-gatsu!`,
        examples: [
          { jp: 'にほん の しんがっき は しがつ に はじまります。', romaji: 'Nihon no shingakki wa shigatsu ni hajimarimasu.', en: 'The Japanese school year begins in April.' },
        ],
      },
    ],
    quiz: [
      {
        question: "How do you pronounce the 1st day of the month (1日)?",
        options: ['いちにち', 'ついたち', 'ひとひ', 'いちがつ'],
        answer: 1,
        explanation: "The 1st day of the month is irregularly read 'ついたち' (tsuitachi).",
      },
      {
        question: "How do you pronounce the 20th day of the month (20日)?",
        options: ['にじゅうにち', 'はつか', 'ふたつか', 'にじゅうか'],
        answer: 1,
        explanation: "The 20th is read 'はつか' (hatsuka).",
      },
      {
        question: "Which day of the week is Wednesday?",
        options: ['かようび', 'すいようび', 'もくようび', 'きんようび'],
        answer: 1,
        explanation: "'すいようび' (水曜日, suiyoubi) is Wednesday (associated with water 水).",
      },
    ],
  },
  {
    id: 'question-words',
    number: 8,
    title: 'JLPT N5: Question Words: Who, What, When, Where, Why, How',
    shortTitle: 'Question Words (Who, What, Where...)',
    subtitle: 'The 5Ws and 1H of Japanese: interrogatives and sentence framing.',
    description: 'Learn to ask essential questions using だれ, なに, いつ, どこ, どうして, and どう in daily Japanese conversations.',
    sections: [
      {
        title: '1. The Core 6 Question Words',
        content: `In Japanese, question words go where the answer would go in the sentence—no inversion needed!`,
        table: {
          headers: ['Meaning', 'Japanese', 'Romaji', 'Polite Variant'],
          rows: [
            ['Who', 'だれ (誰)', 'dare', 'どなた (donata)'],
            ['What', 'なに / なん (何)', 'nani / nan', 'なん (before d, t, n or counters)'],
            ['Where', 'どこ (何処)', 'doko', 'どちら (dochira)'],
            ['When', 'いつ (何時)', 'itsu', 'なんじ (what time)'],
            ['Why', 'どうして / なぜ', 'doushite / naze', 'なんで (casual)'],
            ['How', 'どう', 'dou', 'いかが (ikaga)'],
            ['Which one', 'どれ / どの', 'dore / dono', 'どれ (pronoun) / どの + Noun'],
          ],
        },
        examples: [
          { jp: 'これ は なん です か。', romaji: 'Kore wa nan desu ka.', en: 'What is this?' },
          { jp: 'トイレ は どこ です か。', romaji: 'Toire wa doko desu ka.', en: 'Where is the restroom?' },
          { jp: 'にほんご の レッスン は いつ です か。', romaji: 'Nihongo no ressun wa itsu desu ka.', en: 'When is the Japanese lesson?' },
          { jp: 'あの ひと は だれ です か。', romaji: 'Ano hito wa dare desu ka.', en: 'Who is that person?' },
        ],
      },
      {
        title: '2. Difference Between なに (nani) and なん (nan)',
        content: `Use なん (nan):
1. Before words starting with d, t, or n sounds: なん です か (What is it?)
2. Before counters: なんじ (what time), なんさい (how old), なんびゃく (how many hundreds)
Otherwise, use なに (nani): なに を たべます か (What will you eat?)`,
        examples: [
          { jp: 'あさごはん に なに を たべました か。', romaji: 'Asagohan ni nani o tabemashita ka.', en: 'What did you eat for breakfast?' },
          { jp: 'いま なんじ です か。', romaji: 'Ima nanji desu ka.', en: 'What time is it now?' },
        ],
      },
    ],
    quiz: [
      {
        question: "Which question word means 'Where'?",
        options: ['いつ', 'どこ', 'だれ', 'どう'],
        answer: 1,
        explanation: "'どこ' (doko) means where.",
      },
      {
        question: "How do you ask 'Who is that person?' politely?",
        options: ['あのひとはなんですか', 'あのひとはいつですか', 'あのかたはどなたですか', 'あのひとはどこですか'],
        answer: 2,
        explanation: "'あのかたはどなたですか' uses the polite words 'かた' (person) and 'どなた' (who).",
      },
      {
        question: "Fill in the blank: 'これ は ______ です か。' (What is this?)",
        options: ['なん', 'どこ', 'だれ', 'いつ'],
        answer: 0,
        explanation: "Before です, '何' is pronounced 'なん' (nan).",
      },
    ],
  },
  {
    id: 'frequency-words',
    number: 9,
    title: 'JLPT N5: Japanese Frequency Words: Every Day, Every Week, Every Month',
    shortTitle: 'Frequency Adverbs (Always, Often, Never...)',
    subtitle: 'Express routine actions, recurring events, and habit frequencies.',
    description: 'Learn adverbs of frequency from 100% (いつも) down to 0% (ぜんぜん), plus recurring calendar units with 毎 (まい).',
    sections: [
      {
        title: '1. Frequency Spectrum (100% to 0%)',
        content: `Notice that あまり (not often) and ぜんぜん (not at all) MUST pair with a negative verb!`,
        table: {
          headers: ['Frequency', 'Japanese', 'Romaji', 'Required Verb Form'],
          rows: [
            ['100% Always', 'いつも', 'itsumo', 'Affirmative'],
            ['80% Often', 'よく', 'yoku', 'Affirmative'],
            ['50% Sometimes', 'ときどき', 'tokidoki', 'Affirmative'],
            ['20% Not often / Rarely', 'あまり', 'amari', 'MUST be Negative (~ません)'],
            ['0% Not at all / Never', 'ぜんぜん', 'zenzen', 'MUST be Negative (~ません)'],
          ],
        },
        examples: [
          { jp: 'わたし は いつも あさ コーヒー を のみます。', romaji: 'Watashi wa itsumo asa koohii o nomimasu.', en: 'I always drink coffee in the morning.' },
          { jp: 'よく としょかん で べんきょうします。', romaji: 'Yoku toshokan de benkyoushimasu.', en: 'I often study at the library.' },
          { jp: 'おさけ は あまり のみません。', romaji: 'Osake wa amari nomimasen.', en: 'I do not drink alcohol very often.' },
          { jp: 'テレビ を ぜんぜん みません。', romaji: 'Terebi o zenzen mimasen.', en: 'I do not watch TV at all.' },
        ],
      },
      {
        title: '2. Recurrence with 毎 (まい / mai)',
        content: `The prefix 毎 (まい) means 'every':
• まいにち (毎日) = Every day
• まいしゅう (毎週) = Every week
• まいつき (毎月) = Every month
• まいとし / まいねん (毎年) = Every year
• まいあさ (毎朝) = Every morning
• まいばん (毎晩) = Every night`,
        examples: [
          { jp: 'まいにち にほんご を れんしゅうします。', romaji: 'Mainichi nihongo o renshuushimasu.', en: 'I practice Japanese every day.' },
          { jp: 'まいばん じゅういちじ に ねます。', romaji: 'Maiban juuichiji ni nemasu.', en: 'Every night I sleep at 11:00.' },
        ],
      },
    ],
    quiz: [
      {
        question: "Which frequency adverb must ALWAYS be used with a negative verb?",
        options: ['いつも', 'よく', 'ときどき', 'あまり'],
        answer: 3,
        explanation: "'あまり' (amari) and 'ぜんぜん' (zenzen) always take negative verbs (e.g. あまり食べません).",
      },
      {
        question: "What is the Japanese word for 'Sometimes'?",
        options: ['いつも', 'よく', 'ときどき', 'ぜんぜん'],
        answer: 2,
        explanation: "'ときどき' (tokidoki) means sometimes.",
      },
      {
        question: "What does 'まいしゅう' (maishuu) mean?",
        options: ['Every day', 'Every week', 'Every month', 'Every year'],
        answer: 1,
        explanation: "'まいしゅう' (毎週) means every week.",
      },
    ],
  },
  {
    id: 'demonstratives-kore-sore-are',
    number: 10,
    title: 'JLPT N5: This, That, Which in Japanese: Kore, Sore, Are, Dore',
    shortTitle: 'Demonstratives (これ, それ, あれ, どれ)',
    subtitle: 'The Ko-So-A-Do system of spatial and conversational distance.',
    description: 'Master the elegant Ko-So-A-Do system connecting pronouns, noun modifiers, places, and directions based on distance from the speaker and listener.',
    sections: [
      {
        title: '1. The Ko-So-A-Do Concept',
        content: `Japanese demonstratives follow a beautifully consistent 4-way prefix system:
• こ (Ko) = Near the speaker (This)
• そ (So) = Near the listener (That)
• あ (A) = Far from both speaker and listener (That over there)
• ど (Do) = Question form (Which / Where)`,
        table: {
          headers: ['Type', 'Near Speaker (こ)', 'Near Listener (そ)', 'Far (あ)', 'Question (ど)'],
          rows: [
            ['Thing (Noun alone)', 'これ (this)', 'それ (that)', 'あれ (that over there)', 'どれ (which)'],
            ['Modifier (+ Noun)', 'この (this...)', 'その (that...)', 'あの (that...)', 'どの (which...)'],
            ['Place', 'ここ (here)', 'そこ (there)', 'あそこ (over there)', 'どこ (where)'],
            ['Direction', 'こちら (this way)', 'そちら (that way)', 'あちら (that way)', 'どちら (which way)'],
          ],
        },
        examples: [
          { jp: 'これ は わたし の かさ です。', romaji: 'Kore wa watashi no kasa desu.', en: 'This is my umbrella.' },
          { jp: 'それ は あなた の ほん です か。', romaji: 'Sore wa anata no hon desu ka.', en: 'Is that your book?' },
          { jp: 'あれ は なに です か。', romaji: 'Are wa nan desu ka.', en: 'What is that over there?' },
        ],
      },
      {
        title: '2. Difference Between これ (Kore) and この (Kono)',
        content: `• これ / それ / あれ stand alone as independent nouns:
  これ は ペン です。 (This is a pen.)
• この / その / あの must be followed immediately by a noun:
  この ペン は わたし の です。 (This pen is mine.)`,
        examples: [
          { jp: 'この ケーキ は とても おいしい です。', romaji: 'Kono keeki wa totemo oishii desu.', en: 'This cake is very delicious.' },
          { jp: 'あの くるま は たかい です。', romaji: 'Ano kuruma wa takai desu.', en: 'That car over there is expensive.' },
        ],
      },
    ],
    quiz: [
      {
        question: "Which word means 'That (near the listener)' standing alone as a pronoun?",
        options: ['これ', 'それ', 'あれ', 'どれ'],
        answer: 1,
        explanation: "'それ' (sore) refers to an object near the person you are speaking to.",
      },
      {
        question: "Fill in the blank: '______ ひとは だれ です か。' (Who is that person over there?)",
        options: ['あれ', 'あの', 'あそこ', 'これ'],
        answer: 1,
        explanation: "Because it modifies the noun 'ひと', you must use the adjective form 'あの' (ano).",
      },
      {
        question: "What is the question word meaning 'Which one' (among 3 or more objects)?",
        options: ['どれ', 'どの', 'どこ', 'どちら'],
        answer: 0,
        explanation: "'どれ' (dore) is the pronoun question word meaning 'which one'.",
      },
    ],
  },
  {
    id: 'contrast-but-words',
    number: 11,
    title: "JLPT N5: Japanese has many 'but' words depending on formality and sentence connection.",
    shortTitle: 'Contrast & "But" Words (でも, けど, が, しかし)',
    subtitle: 'Connect conflicting clauses smoothly from casual to formal levels.',
    description: 'Learn the differences between でも, ～けど, ～が, and しかし, and avoid common errors when connecting sentences.',
    sections: [
      {
        title: '1. Formality and Position Comparison',
        content: `Japanese uses different words for 'but' depending on whether they connect two clauses within the same sentence or begin a brand new sentence:`,
        table: {
          headers: ['Word', 'Position', 'Formality Level', 'Key Characteristics'],
          rows: [
            ['でも (demo)', 'Start of a new sentence', 'Neutral / Conversational', 'Cannot connect two clauses in one sentence'],
            ['～けど / ～けれど', 'Middle of sentence (clause connector)', 'Casual / Spoken', 'Softer, conversational nuance'],
            ['～が (ga)', 'Middle of sentence (clause connector)', 'Polite / Standard', 'Standard in polite conversation & writing'],
            ['しかし (shikashi)', 'Start of a new sentence', 'Formal / Written', 'Emphatic, used in speeches and essays'],
          ],
        },
        examples: [
          { jp: 'にほんご は むずかしい です。でも、おもしろい です。', romaji: 'Nihongo wa muzukashii desu. Demo, omoshiroi desu.', en: 'Japanese is difficult. But, it is interesting.' },
          { jp: 'にほんご は むずかしい です が、おもしろい です。', romaji: 'Nihongo wa muzukashii desu ga, omoshiroi desu.', en: 'Japanese is difficult, but it is interesting.' },
          { jp: 'たかい です けど、かいます。', romaji: 'Takai desu kedo, kaimasu.', en: "It is expensive, but I'll buy it." },
        ],
      },
      {
        title: "2. Common Pitfall: Don't put 'でも' in the middle of a sentence!",
        content: `Incorrect: ❌ にほんご は むずかしい です でも おもしろい です。
Correct: ⭕ にほんご は むずかしい です が、おもしろい です。 (Use が or けど to join clauses!)
Correct: ⭕ にほんご は むずかしい です。でも、おもしろい です。 (Start a new sentence with でも!)`,
        examples: [
          { jp: 'じかん が ありません でした。しかし、しごと を おわらせました。', romaji: 'Jikan ga arimasen deshita. Shikashi, shigoto o owarasemashita.', en: 'There was no time. However, I finished the work.' },
        ],
      },
    ],
    quiz: [
      {
        question: "Which conjunction connects two clauses inside the same polite sentence?",
        options: ['でも', '～が', 'しかし', 'または'],
        answer: 1,
        explanation: "'～が' directly attaches to the end of a clause to mean 'although / but' in polite speech.",
      },
      {
        question: "Where should 'でも' be placed?",
        options: [
          'In the middle between two adjectives',
          'At the beginning of a new sentence',
          'At the end of a sentence',
          'Directly after a noun',
        ],
        answer: 1,
        explanation: "'でも' is a sentence-initial conjunction (used after a period).",
      },
      {
        question: "Which word for 'however' is most formal and commonly found in written texts?",
        options: ['けど', 'でも', 'しかし', 'けれど'],
        answer: 2,
        explanation: "'しかし' (shikashi) is the formal written conjunction for 'however'.",
      },
    ],
  },
  {
    id: 'choice-or-words',
    number: 12,
    title: 'JLPT N5: Japanese "Or": ka, Matawa, Soretomo',
    shortTitle: 'Expressing "Or" (か, または, それとも)',
    subtitle: 'Choices, alternatives, and selecting between options.',
    description: 'Learn how to say "A or B" using the particle か, the formal written conjunction または, and the conversational choice question marker それとも.',
    sections: [
      {
        title: '1. Three Ways to Say "Or" in Japanese',
        content: `Japanese does not have a single catch-all word for 'or'. The right word depends on whether you are presenting noun options, offering alternative questions, or writing formally:`,
        table: {
          headers: ['Expression', 'Usage Context', 'Structure Pattern'],
          rows: [
            ['か (ka)', 'Particle joining two nouns or alternatives', 'A か B (A or B)'],
            ['それとも (soretomo)', 'Starts an alternative question sentence', 'A ですか。それとも B ですか。'],
            ['または (matawa)', 'Formal / written conjunction', '[Noun A] または [Noun B] / [Sentence A] または [Sentence B]'],
          ],
        },
        examples: [
          { jp: 'コーヒー か おちゃ を のみます か。', romaji: 'Koohii ka ocha o nomimasu ka.', en: 'Will you drink coffee or tea?' },
          { jp: 'バス で いきます か。それとも でんしゃ で いきます か。', romaji: 'Basu de ikimasu ka. Soretomo densha de ikimasu ka.', en: 'Will you go by bus? Or will you go by train?' },
          { jp: 'ペン または えんぴつ で かいて ください。', romaji: 'Pen matawa enpitsu de kaite kudasai.', en: 'Please write with a pen or pencil.' },
        ],
      },
      {
        title: '2. Offering Multiple Choices in Questions with それとも',
        content: `When asking someone to choose between options A and B in conversation, end the first sentence with か, then begin the next sentence with それとも (soretomo):
        
Question 1: おちゃ に します か。 (Will you have green tea?)
Question 2: それとも コーヒー に します か。 (Or will you have coffee?)`,
        examples: [
          { jp: 'きょう は うち で たべます か。それとも レストラン に いきます か。', romaji: 'Kyou wa uchi de tabemasu ka. Soretomo resutoran ni ikimasu ka.', en: 'Will you eat at home today? Or will you go to a restaurant?' },
        ],
      },
    ],
    quiz: [
      {
        question: "How do you say 'Coffee or tea' in Japanese?",
        options: ['コーヒー と おちゃ', 'コーヒー か おちゃ', 'コーヒー も おちゃ', 'コーヒー で おちゃ'],
        answer: 1,
        explanation: "'か' (ka) placed between two nouns means 'or' (A か B). Note that 'と' means 'and'.",
      },
      {
        question: "When presenting a two-sentence alternative choice question, what word begins the second question?",
        options: ['しかし', 'それとも', 'だから', 'そして'],
        answer: 1,
        explanation: "'それとも' (soretomo) translates to 'Or (is it...)?' at the start of an alternative question.",
      },
      {
        question: "Which word for 'or' is most commonly used in formal announcements and official forms?",
        options: ['か', 'それとも', 'または', 'でも'],
        answer: 2,
        explanation: "'または' (matawa) is the standard formal conjunction for 'or'.",
      },
    ],
  },
];
