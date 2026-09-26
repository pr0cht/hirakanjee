// JLPT N5 Learning Quiz Engine & Question Generator
// Powers the "Start Learning" guided lesson quiz mode across all N5 lessons.

// Shuffles an array with Fisher-Yates
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =========================================================================
// HANDCRAFTED COMPREHENSIVE LEARNING BANK: LESSON 1 (BASIC STRUCTURE ~は~です)
// 38 Deep pedagogical questions covering formulas, pronunciation, writing,
// 4 polite tenses of desu, question particle ka, diverse sentences, & builders.
// =========================================================================
export const lesson1LearningBank = [
  // --- Category 1: Structure Formulas & Grammar Mechanics ---
  {
    id: 'l1-learn-f1',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: 'What is the standard formula for a basic Japanese topic-comment sentence?',
    question: 'What is the standard formula for a basic Japanese topic-comment sentence?',
    options: [
      '[Topic] は [Description] です',
      '[Description] は [Topic] です',
      '[Topic] です [Description] は',
      'は [Topic] です [Description]'
    ],
    correctAnswer: 0,
    explanation: 'Japanese sentences follow a Topic-Comment pattern: [Topic] は [Description] です (Speaking of Topic, it is Description).'
  },
  {
    id: 'l1-learn-f2',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: "In the sentence formula 'A は B です', what is the grammatical role of the particle 'は'?",
    question: "In the sentence formula 'A は B です', what is the grammatical role of the particle 'は'?",
    options: [
      "It marks 'A' as the topic of the sentence ('As for A...' / 'Speaking of A...')",
      "It indicates the direct object of an action verb",
      "It joins two nouns together meaning 'and'",
      "It marks the physical location where an event takes place"
    ],
    correctAnswer: 0,
    explanation: "The particle は (pronounced wa) is the topic marker. It establishes the frame or theme of the sentence: 'Speaking of A...'."
  },
  {
    id: 'l1-learn-f3',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: "What is the role and meaning of 'です' (desu) in Japanese grammar?",
    question: "What is the role and meaning of 'です' (desu) in Japanese grammar?",
    options: [
      "Polite affirmative copula meaning 'is / am / are'",
      "Past tense action verb meaning 'did'",
      "Negative particle meaning 'not'",
      "Question particle meaning 'what?'"
    ],
    correctAnswer: 0,
    explanation: "です (desu) is the polite copula, equivalent to the English verb 'to be' (is / am / are). It expresses polite states and descriptions."
  },
  {
    id: 'l1-learn-f4',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: "How do you turn a statement like 'わたし は がくせい です' into a question?",
    question: "How do you turn a statement like 'わたし は がくせい です' into a question?",
    options: [
      "Add the question particle 'か' (ka) to the very end of the sentence without changing word order",
      "Place 'です' at the very beginning of the sentence",
      "Invert the topic and description nouns",
      "Replace the particle 'は' with 'か'"
    ],
    correctAnswer: 0,
    explanation: "In Japanese, forming a question is effortless: add 'か' (ka) to the end of any statement with rising pitch. You never invert the word order!"
  },
  {
    id: 'l1-learn-f5',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: "Where does the copula 'です' (or main verb) always appear in a standard Japanese sentence?",
    question: "Where does the copula 'です' (or main verb) always appear in a standard Japanese sentence?",
    options: [
      "At the very end of the sentence",
      "Immediately after the topic marker",
      "At the start of the sentence before the subject",
      "Between the topic and the particle は"
    ],
    correctAnswer: 0,
    explanation: "Japanese is an SOV (Subject-Object-Verb) language. Verbs and copulas (like です) always appear at the end of the sentence or clause."
  },
  {
    id: 'l1-learn-f6',
    category: 'formula',
    categoryLabel: '📐 STRUCTURE & FORMULA',
    type: 'multiple-choice',
    prompt: "In the sentence 'これ は にほんご の ほん です', what is the role of the particle 'の' (no)?",
    question: "In the sentence 'これ は にほんご の ほん です', what is the role of the particle 'の' (no)?",
    options: [
      "It connects two nouns, showing that the book pertains to the Japanese language ('Japanese book')",
      "It marks the main topic of the sentence",
      "It turns the sentence into a polite question",
      "It expresses the past negative tense"
    ],
    correctAnswer: 0,
    explanation: "The particle の (no) links two nouns (Noun 1 の Noun 2) to show possession, category, or modification ('Japanese language book')."
  },

  // --- Category 2: Japanese Writing & Pronunciation ---
  {
    id: 'l1-learn-p1',
    category: 'writing-pronunciation',
    categoryLabel: '✍️ WRITING & PRONUNCIATION',
    type: 'multiple-choice',
    prompt: "Although spelled with the hiragana character 'は' (ha), how is it pronounced when used as the topic marker?",
    question: "Although spelled with the hiragana character 'は' (ha), how is it pronounced when used as the topic marker?",
    options: ["wa", "ha", "ba", "ya"],
    correctAnswer: 0,
    explanation: "When acting as the grammatical topic marker, the character 'は' is historically and always pronounced 'wa'.",
    romaji: 'ha -> pronounced wa'
  },
  {
    id: 'l1-learn-p2',
    category: 'writing-pronunciation',
    categoryLabel: '✍️ WRITING & PRONUNCIATION',
    type: 'multiple-choice',
    prompt: "Which hiragana character MUST be used to write the topic marker pronounced 'wa'?",
    question: "Which hiragana character MUST be used to write the topic marker pronounced 'wa'?",
    options: ["は", "わ", "を", "へ"],
    correctAnswer: 0,
    explanation: "The topic particle is always written with the hiragana 'は' (ha), NEVER with 'わ' (wa).",
    romaji: 'Spelled: は (not わ)'
  },
  {
    id: 'l1-learn-p3',
    category: 'writing-pronunciation',
    categoryLabel: '✍️ WRITING & PRONUNCIATION',
    type: 'multiple-choice',
    prompt: "In natural standard Japanese speech, how does 'です' (desu) typically sound?",
    question: "In natural standard Japanese speech, how does 'です' (desu) typically sound?",
    options: [
      "The final 'u' is devoiced/whispered, sounding like 'dess'",
      "The 'u' is heavily emphasized and elongated, like 'de-SOO'",
      "The 'd' is silent, sounding like 'ess'",
      "It is pronounced identically to 'dasu'"
    ],
    correctAnswer: 0,
    explanation: "In modern standard Tokyo Japanese, the vowel 'u' in です (desu) and ます (masu) is devoiced, sounding like 'dess' in fluent speech.",
    romaji: 'desu -> pronounced [dess]'
  },
  {
    id: 'l1-learn-p4',
    category: 'writing-pronunciation',
    categoryLabel: '✍️ WRITING & PRONUNCIATION',
    type: 'multiple-choice',
    prompt: "How is the past affirmative copula 'でした' written in hiragana and pronounced?",
    question: "How is the past affirmative copula 'でした' written in hiragana and pronounced?",
    options: [
      "Written でした, pronounced 'deshita' (often sounding like 'deshta')",
      "Written でした, pronounced 'deshida'",
      "Written てした, pronounced 'teshita'",
      "Written でちた, pronounced 'dechita'"
    ],
    correctAnswer: 0,
    explanation: "でした is spelled で (de) + し (shi) + た (ta), pronounced 'deshita' (often with a devoiced 'i', sounding like 'deshta').",
    romaji: 'deshita'
  },
  {
    id: 'l1-learn-p5',
    category: 'writing-pronunciation',
    categoryLabel: '✍️ WRITING & PRONUNCIATION',
    type: 'multiple-choice',
    prompt: "When forming a question with 'か' (ka) at the end of a sentence, what vocal intonation is used?",
    question: "When forming a question with 'か' (ka) at the end of a sentence, what vocal intonation is used?",
    options: [
      "Rising intonation on 'か' at the end of the sentence",
      "Falling drop in pitch at the end",
      "Completely flat monotone intonation",
      "Sudden stress on the first syllable only"
    ],
    correctAnswer: 0,
    explanation: "Questions ending in 'か' (ka) feature a rising pitch intonation, signaling to the listener that an answer is expected.",
    romaji: 'Rising intonation with ka'
  },

  // --- Category 3: Meanings & Tense Inflections ---
  {
    id: 'l1-learn-m1',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "Which form of the copula expresses the present affirmative ('is / am / are')?",
    question: "Which form of the copula expresses the present affirmative ('is / am / are')?",
    options: ["です (desu)", "でした (deshita)", "じゃありません (ja arimasen)", "じゃありませんでした (ja arimasen deshita)"],
    correctAnswer: 0,
    explanation: "です (desu) is the polite present affirmative copula meaning 'is / am / are'."
  },
  {
    id: 'l1-learn-m2',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "Which form expresses the present negative ('is not / am not / are not') in polite speech?",
    question: "Which form expresses the present negative ('is not / am not / are not') in polite speech?",
    options: ["じゃありません (ja arimasen)", "でした (deshita)", "です (desu)", "じゃありませんでした (ja arimasen deshita)"],
    correctAnswer: 0,
    explanation: "じゃありません (ja arimasen) or ではありません (dewa arimasen) expresses the present negative ('is not / am not / are not')."
  },
  {
    id: 'l1-learn-m3',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "Which form expresses the past affirmative ('was / were')?",
    question: "Which form expresses the past affirmative ('was / were')?",
    options: ["でした (deshita)", "です (desu)", "じゃありません (ja arimasen)", "じゃありませんでした (ja arimasen deshita)"],
    correctAnswer: 0,
    explanation: "でした (deshita) expresses the past affirmative state ('was / were')."
  },
  {
    id: 'l1-learn-m4',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "Which form expresses the past negative ('was not / were not')?",
    question: "Which form expresses the past negative ('was not / were not')?",
    options: ["じゃありませんでした (ja arimasen deshita)", "じゃありません (ja arimasen)", "でした (deshita)", "ではありません (dewa arimasen)"],
    correctAnswer: 0,
    explanation: "じゃありませんでした (ja arimasen deshita) is formed by attaching でした to じゃありません, meaning 'was not / were not'."
  },
  {
    id: 'l1-learn-m5',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "What is the key difference between 'じゃありません' and 'ではありません'?",
    question: "What is the key difference between 'じゃありません' and 'ではありません'?",
    options: [
      "ではありません is more formal and used in writing/speeches, while じゃありません is common in spoken Japanese",
      "じゃありません is past tense, whereas ではありません is present tense",
      "ではありません is used only for questions",
      "They mean completely different things"
    ],
    correctAnswer: 0,
    explanation: "Both mean 'is not'. ではありません is more formal and preferred in formal writing/speeches, while じゃありません is the natural spoken conversational form."
  },
  {
    id: 'l1-learn-m6',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "How do you answer affirmatively ('Yes, I am') to the question: 'あなた は がくせい です か？'?",
    question: "How do you answer affirmatively ('Yes, I am') to the question: 'あなた は がくせい です か？'?",
    options: [
      "はい、がくせい です。(Hai, gakusei desu.)",
      "いいえ、がくせい じゃありません。(Iie, gakusei ja arimasen.)",
      "はい、がくせい でした。(Hai, gakusei deshita.)",
      "いいえ、がくせい です。(Iie, gakusei desu.)"
    ],
    correctAnswer: 0,
    explanation: "To answer affirmatively: use 'はい' (yes) followed by the noun and affirmative copula 'です'."
  },
  {
    id: 'l1-learn-m7',
    category: 'meaning',
    categoryLabel: '💡 MEANING & TENSE',
    type: 'multiple-choice',
    prompt: "How do you answer negatively ('No, I am not') to the question: 'あなた は せんせい です か？'?",
    question: "How do you answer negatively ('No, I am not') to the question: 'あなた は せんせい です か？'?",
    options: [
      "いいえ、せんせい じゃありません。(Iie, sensei ja arimasen.)",
      "はい、せんせい です。(Hai, sensei desu.)",
      "いいえ、せんせい でした。(Iie, sensei deshita.)",
      "はい、せんせい じゃありません。(Hai, sensei ja arimasen.)"
    ],
    correctAnswer: 0,
    explanation: "To answer negatively: use 'いいえ' (no) followed by the noun and negative copula 'じゃありません'."
  },

  // --- Category 4: Sentence Comprehension & Translation (Diverse Sentences) ---
  {
    id: 'l1-learn-s1',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate this sentence to English: 'わたし は がくせい です。'",
    question: "Translate this sentence to English: 'わたし は がくせい です。'",
    options: ["I am a student.", "I am a teacher.", "Mr. Tanaka is a student.", "This is a student."],
    correctAnswer: 0,
    explanation: "わたし (I) + は (topic) + がくせい (student) + です (am) = 'I am a student.'",
    romaji: "Watashi wa gakusei desu.",
    audioText: "わたし は がくせい です。"
  },
  {
    id: 'l1-learn-s2',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What does 'たなかさん は せんせい です。' mean?",
    question: "What does 'たなかさん は せんせい です。' mean?",
    options: ["Mr. Tanaka is a teacher.", "I am Mr. Tanaka.", "Mr. Tanaka is a doctor.", "Is Mr. Tanaka a teacher?"],
    correctAnswer: 0,
    explanation: "たなかさん (Mr. Tanaka) + は (topic) + せんせい (teacher) + です (is) = 'Mr. Tanaka is a teacher.'",
    romaji: "Tanaka-san wa sensei desu.",
    audioText: "たなかさん は せんせい です。"
  },
  {
    id: 'l1-learn-s3',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'これ は にほんご の ほん です。'",
    question: "Translate: 'これ は にほんご の ほん です。'",
    options: [
      "This is a Japanese language book.",
      "That is an English language book.",
      "This is a Japanese teacher.",
      "Whose book is this?"
    ],
    correctAnswer: 0,
    explanation: "これ (this) + は + にほんご の ほん (Japanese book) + です (is) = 'This is a Japanese language book.'",
    romaji: "Kore wa nihongo no hon desu.",
    audioText: "これ は にほんご の ほん です。"
  },
  {
    id: 'l1-learn-s4',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate into English: 'わたし は いしゃ じゃありません。'",
    question: "Translate into English: 'わたし は いしゃ じゃありません。'",
    options: ["I am not a doctor.", "I am a doctor.", "I was not a doctor.", "Are you a doctor?"],
    correctAnswer: 0,
    explanation: "わたし (I) + は + いしゃ (doctor) + じゃありません (am not) = 'I am not a doctor.'",
    romaji: "Watashi wa isha ja arimasen.",
    audioText: "わたし は いしゃ じゃありません。"
  },
  {
    id: 'l1-learn-s5',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What does 'きのう は にちようび でした。' mean?",
    question: "What does 'きのう は にちようび でした。' mean?",
    options: ["Yesterday was Sunday.", "Today is Sunday.", "Tomorrow will be Sunday.", "Yesterday was Monday."],
    correctAnswer: 0,
    explanation: "きのう (yesterday) + は + にちようび (Sunday) + でした (was) = 'Yesterday was Sunday.'",
    romaji: "Kinou wa nichiyoubi deshita.",
    audioText: "きのう は にちようび でした。"
  },
  {
    id: 'l1-learn-s6',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'おととい は やすみ じゃありませんでした。'",
    question: "Translate: 'おととい は やすみ じゃありませんでした。'",
    options: [
      "The day before yesterday was not a day off.",
      "Yesterday was a day off.",
      "Tomorrow is not a day off.",
      "Today was not a holiday."
    ],
    correctAnswer: 0,
    explanation: "おととい (day before yesterday) + やすみ (day off) + じゃありませんでした (was not) = 'The day before yesterday was not a day off.'",
    romaji: "Ototoi wa yasumi ja arimasen deshita.",
    audioText: "おととい は やすみ じゃありませんでした。"
  },
  {
    id: 'l1-learn-s7',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What is the meaning of the question: 'あなた は がくせい です か？'?",
    question: "What is the meaning of the question: 'あなた は がくせい です か？'?",
    options: ["Are you a student?", "Who is a student?", "I am a student.", "Is this a student?"],
    correctAnswer: 0,
    explanation: "あなた (you) + は + がくせい (student) + です か (are you?) = 'Are you a student?'",
    romaji: "Anata wa gakusei desu ka?",
    audioText: "あなた は がくせい です か？"
  },
  {
    id: 'l1-learn-s8',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'きょう は げつようび です。'",
    question: "Translate: 'きょう は げつようび です。'",
    options: ["Today is Monday.", "Yesterday was Monday.", "Tomorrow is Monday.", "Today is Tuesday."],
    correctAnswer: 0,
    explanation: "きょう (today) + は + げつようび (Monday) + です (is) = 'Today is Monday.'",
    romaji: "Kyou wa getsuyoubi desu.",
    audioText: "きょう は げつようび です。"
  },
  {
    id: 'l1-learn-s9',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What does 'あした は やすみ です。' mean?",
    question: "What does 'あした は やすみ です。' mean?",
    options: ["Tomorrow is a day off.", "Today is a day off.", "Yesterday was a day off.", "Tomorrow is Monday."],
    correctAnswer: 0,
    explanation: "あした (tomorrow) + は + やすみ (day off / holiday) + です (is) = 'Tomorrow is a day off.'",
    romaji: "Ashita wa yasumi desu.",
    audioText: "あした は やすみ です。"
  },
  {
    id: 'l1-learn-s10',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'さとうさん は にほんじん です。'",
    question: "Translate: 'さとうさん は にほんじん です。'",
    options: ["Ms. Sato is Japanese.", "Mr. Sato is a teacher.", "I am Japanese.", "Is Ms. Sato Japanese?"],
    correctAnswer: 0,
    explanation: "さとうさん (Ms. Sato) + は + にほんじん (Japanese person) + です (is) = 'Ms. Sato is Japanese.'",
    romaji: "Satou-san wa nihonjin desu.",
    audioText: "さとうさん は にほんじん です。"
  },
  {
    id: 'l1-learn-s11',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What does 'すずきさん は エンジニア じゃありません。' mean?",
    question: "What does 'すずきさん は エンジニア じゃありません。' mean?",
    options: [
      "Mr. Suzuki is not an engineer.",
      "Mr. Suzuki is an engineer.",
      "I am not an engineer.",
      "Mr. Suzuki was an engineer."
    ],
    correctAnswer: 0,
    explanation: "すずきさん (Mr. Suzuki) + エンジニア (engineer) + じゃありません (is not) = 'Mr. Suzuki is not an engineer.'",
    romaji: "Suzuki-san wa enjinia ja arimasen.",
    audioText: "すずきさん は エンジニア じゃありません。"
  },
  {
    id: 'l1-learn-s12',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'きのう は あめ でした。'",
    question: "Translate: 'きのう は あめ でした。'",
    options: ["Yesterday was rainy.", "Today is rainy.", "Tomorrow will be rainy.", "Yesterday was sunny."],
    correctAnswer: 0,
    explanation: "きのう (yesterday) + は + あめ (rain/rainy) + でした (was) = 'Yesterday was rainy.'",
    romaji: "Kinou wa ame deshita.",
    audioText: "きのう は あめ でした。"
  },
  {
    id: 'l1-learn-s13',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "What does 'これ は わたし の かばん です。' mean?",
    question: "What does 'これ は わたし の かばん です。' mean?",
    options: ["This is my bag.", "That is my bag.", "This is my book.", "Whose bag is this?"],
    correctAnswer: 0,
    explanation: "これ (this) + は + わたし の かばん (my bag) + です (is) = 'This is my bag.'",
    romaji: "Kore wa watashi no kaban desu.",
    audioText: "これ は わたし の かばん です。"
  },
  {
    id: 'l1-learn-s14',
    category: 'sentence-comprehension',
    categoryLabel: '💬 SENTENCE UNDERSTANDING',
    type: 'multiple-choice',
    prompt: "Translate: 'それ は にほん の くるま です か？'",
    question: "Translate: 'それ は にほん の くるま です か？'",
    options: ["Is that a Japanese car?", "This is a Japanese car.", "Is that an American car?", "Where is the car?"],
    correctAnswer: 0,
    explanation: "それ (that) + は + にほん の くるま (Japanese car) + です か (is it?) = 'Is that a Japanese car?'",
    romaji: "Sore wa nihon no kuruma desu ka?",
    audioText: "それ は にほん の くるま です か？"
  },

  // --- Category 5: Fill in the Blank Drills ---
  {
    id: 'l1-learn-b1',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Choose the correct particle to mark the topic: 'わたし ___ がくせい です。'",
    sentence: "わたし ___ がくせい です。",
    blankWord: "は",
    options: ["は", "が", "を", "に"],
    correctAnswer: 0,
    explanation: "は (wa) marks 'わたし' (I) as the topic of the sentence.",
    romaji: "watashi [ ? ] gakusei desu."
  },
  {
    id: 'l1-learn-b2',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Choose the appropriate copula for yesterday: 'きのう は にちようび ___。'",
    sentence: "きのう は にちようび ___。",
    blankWord: "でした",
    options: ["でした", "です", "ます", "でしたか"],
    correctAnswer: 0,
    explanation: "Since 'きのう' (yesterday) refers to past time, the past affirmative copula 'でした' is required.",
    romaji: "kinou wa nichiyoubi [ ? ]."
  },
  {
    id: 'l1-learn-b3',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Complete the negative sentence: 'わたし は いしゃ ___。' (I am not a doctor.)",
    sentence: "わたし は いしゃ ___。",
    blankWord: "じゃありません",
    options: ["じゃありません", "です", "でした", "ありません"],
    correctAnswer: 0,
    explanation: "じゃありません (ja arimasen) forms the present negative polite state ('am not').",
    romaji: "watashi wa isha [ ? ]."
  },
  {
    id: 'l1-learn-b4',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Choose the particle to make this a polite question: 'たなかさん は せんせい です ___？'",
    sentence: "たなかさん は せんせい です ___？",
    blankWord: "か",
    options: ["か", "ね", "よ", "は"],
    correctAnswer: 0,
    explanation: "Adding 'か' (ka) to the end of a sentence forms a polite question ('Is Mr. Tanaka a teacher?').",
    romaji: "tanaka-san wa sensei desu [ ? ]?"
  },
  {
    id: 'l1-learn-b5',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Complete the sentence: 'おととい は やすみ ___。' (The day before yesterday was not a day off.)",
    sentence: "おととい は やすみ ___。",
    blankWord: "じゃありませんでした",
    options: ["じゃありませんでした", "じゃありません", "でした", "ではありません"],
    correctAnswer: 0,
    explanation: "おととい indicates past time, and 'was not' is expressed by 'じゃありませんでした'.",
    romaji: "ototoi wa yasumi [ ? ]."
  },
  {
    id: 'l1-learn-b6',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Link the two nouns: 'これ は にほんご ___ ほん です。' (This is a Japanese language book.)",
    sentence: "これ は にほんご ___ ほん です。",
    blankWord: "の",
    options: ["の", "は", "と", "も"],
    correctAnswer: 0,
    explanation: "The particle の links にほんご (Japanese) and ほん (book) to specify what kind of book it is.",
    romaji: "kore wa nihongo [ ? ] hon desu."
  },
  {
    id: 'l1-learn-b7',
    category: 'fill-blank',
    categoryLabel: '✏️ FILL IN THE BLANK',
    type: 'fill-blank',
    prompt: "Select the polite affirmative ending: 'きょう は げつようび ___。'",
    sentence: "きょう は げつようび ___。",
    blankWord: "です",
    options: ["です", "でした", "じゃありません", "だ"],
    correctAnswer: 0,
    explanation: "きょう (today) is present time, so the polite affirmative copula 'です' completes 'Today is Monday.'",
    romaji: "kyou wa getsuyoubi [ ? ]."
  },

  // --- Category 6: Sentence Builders (Word Bank) ---
  {
    id: 'l1-learn-wb1',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Build the Japanese sentence: 'I am a student.'",
    targetEn: "I am a student.",
    chips: ["わたし", "は", "がくせい", "です", "せんせい", "じゃありません"],
    correctOrder: ["わたし", "は", "がくせい", "です"],
    explanation: "Topic わたし (I) + は (wa) + がくせい (student) + です (am) = 'わたし は がくせい です。'",
    romaji: "watashi wa gakusei desu"
  },
  {
    id: 'l1-learn-wb2',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Build the Japanese sentence: 'Mr. Tanaka is a teacher.'",
    targetEn: "Mr. Tanaka is a teacher.",
    chips: ["たなかさん", "は", "せんせい", "です", "いしゃ", "わたし"],
    correctOrder: ["たなかさん", "は", "せんせい", "です"],
    explanation: "たなかさん (Mr. Tanaka) + は + せんせい (teacher) + です (is).",
    romaji: "tanaka-san wa sensei desu"
  },
  {
    id: 'l1-learn-wb3',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Assemble: 'This is a Japanese language book.'",
    targetEn: "This is a Japanese language book.",
    chips: ["これ", "は", "にほんご", "の", "ほん", "です", "それ"],
    correctOrder: ["これ", "は", "にほんご", "の", "ほん", "です"],
    explanation: "これ (this) + は + にほんご (Japanese) + の + ほん (book) + です (is).",
    romaji: "kore wa nihongo no hon desu"
  },
  {
    id: 'l1-learn-wb4',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Build the sentence: 'I was not a doctor.'",
    targetEn: "I was not a doctor.",
    chips: ["わたし", "は", "いしゃ", "じゃありません", "でした", "です", "がくせい"],
    correctOrder: ["わたし", "は", "いしゃ", "じゃありません", "でした"],
    explanation: "Past negative of です is formed with じゃありません + でした.",
    romaji: "watashi wa isha ja arimasen deshita"
  },
  {
    id: 'l1-learn-wb5',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Build the question: 'Are you a student?'",
    targetEn: "Are you a student?",
    chips: ["あなた", "は", "がくせい", "です", "か", "せんせい"],
    correctOrder: ["あなた", "は", "がくせい", "です", "か"],
    explanation: "あなた (you) + は + がくせい (student) + です (are) + か (?).",
    romaji: "anata wa gakusei desu ka"
  },
  {
    id: 'l1-learn-wb6',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Assemble: 'Yesterday was Sunday.'",
    targetEn: "Yesterday was Sunday.",
    chips: ["きのう", "は", "にちようび", "でした", "きょう", "です"],
    correctOrder: ["きのう", "は", "にちようび", "でした"],
    explanation: "きのう (yesterday) + は + にちようび (Sunday) + でした (was).",
    romaji: "kinou wa nichiyoubi deshita"
  },
  {
    id: 'l1-learn-wb7',
    category: 'word-bank',
    categoryLabel: '🧩 SENTENCE BUILDER',
    type: 'word-bank',
    prompt: "Assemble: 'Today is Monday.'",
    targetEn: "Today is Monday.",
    chips: ["きょう", "は", "げつようび", "です", "きのう", "でした"],
    correctOrder: ["きょう", "は", "げつようび", "です"],
    explanation: "きょう (today) + は + げつようび (Monday) + です (is).",
    romaji: "kyou wa getsuyoubi desu"
  }
];

// =========================================================================
// UNIVERSAL AUTOMATIC LEARNING QUIZ GENERATOR FOR ANY N5 LESSON
// Extracts tables, formulas, examples, and existing quiz items into a
// rich learning pool of 25-60+ questions.
// =========================================================================
export function generateLearningQuizFromLesson(lesson) {
  if (!lesson) return [];

  // If Lesson 1, use the handcrafted 38-question bank
  if (lesson.id === 'basic-structure') {
    return [...lesson1LearningBank];
  }

  const generatedQuestions = [];

  // Helper to extract tables across schemas
  const allTables = [];
  if (Array.isArray(lesson.tables)) {
    allTables.push(...lesson.tables);
  }
  if (Array.isArray(lesson.sections)) {
    lesson.sections.forEach((sec) => {
      if (sec.table) allTables.push(sec.table);
    });
  }

  // Helper to extract examples across schemas
  const allExamples = [];
  if (Array.isArray(lesson.examples)) {
    lesson.examples.forEach((ex) => {
      const jp = ex.jp || ex.ja;
      if (jp && ex.en) allExamples.push({ jp, en: ex.en, romaji: ex.romaji || '' });
    });
  }
  if (Array.isArray(lesson.sections)) {
    lesson.sections.forEach((sec) => {
      if (Array.isArray(sec.examples)) {
        sec.examples.forEach((ex) => {
          const jp = ex.jp || ex.ja;
          if (jp && ex.en) allExamples.push({ jp, en: ex.en, romaji: ex.romaji || '' });
        });
      }
    });
  }

  // 1. Extract from Rules & Formulas (lesson.rules)
  if (Array.isArray(lesson.rules)) {
    lesson.rules.forEach((rule, rIdx) => {
      if (rule.title && rule.formula) {
        // Formula recognition
        const otherRules = lesson.rules.filter((_, idx) => idx !== rIdx);
        const distractorFormulas = shuffle(otherRules.map((r) => r.formula)).slice(0, 3);
        if (distractorFormulas.length >= 2) {
          generatedQuestions.push({
            id: `${lesson.id}-auto-rule-form-${rIdx}`,
            category: 'formula',
            categoryLabel: '📐 STRUCTURE & FORMULA',
            type: 'multiple-choice',
            prompt: `What is the core structure formula for '${rule.title}'?`,
            question: `What is the core structure formula for '${rule.title}'?`,
            options: [rule.formula, ...distractorFormulas],
            correctAnswer: 0,
            explanation: rule.explanation || `Formula for ${rule.title}: ${rule.formula}`
          });
        }

        // Rule Concept / Explanation
        if (rule.explanation && otherRules.length >= 2) {
          const distractorExpls = shuffle(otherRules.map((r) => r.explanation)).slice(0, 3);
          if (distractorExpls.length >= 2) {
            generatedQuestions.push({
              id: `${lesson.id}-auto-rule-expl-${rIdx}`,
              category: 'formula',
              categoryLabel: '📐 GRAMMAR RULE',
              type: 'multiple-choice',
              prompt: `In this lesson, how does '${rule.title}' function?`,
              question: `In this lesson, how does '${rule.title}' function?`,
              options: [rule.explanation, ...distractorExpls],
              correctAnswer: 0,
              explanation: rule.explanation
            });
          }
        }
      }
    });
  }

  // 2. Extract from Lesson Tables (Definitions, readings, meanings)
  allTables.forEach((table, tIdx) => {
    if (Array.isArray(table.rows) && table.rows.length >= 2) {
      const rows = table.rows;
      const headers = (table.headers || []).map((h) => h.toLowerCase());

      // Determine column indices
      let jpCol = headers.findIndex(
        (h) => h.includes('japanese') || h.includes('form') || h.includes('word') || h.includes('pronoun') || h.includes('verb') || h.includes('particle')
      );
      let enCol = headers.findIndex(
        (h) => h.includes('meaning') || h.includes('usage') || h.includes('english') || h.includes('role') || h.includes('explanation')
      );
      let romCol = headers.findIndex((h) => h.includes('romaji') || h.includes('pronunciation'));

      if (jpCol === -1) jpCol = 0;
      if (enCol === -1) enCol = rows[0]?.length > 2 ? rows[0].length - 1 : 1;
      if (romCol === -1) romCol = headers.findIndex((h) => h.includes('rom'));

      rows.forEach((row, rIdx) => {
        const rawJp = row[jpCol];
        const rawEn = row[enCol];
        const rawRom = romCol !== -1 ? row[romCol] : null;

        // Clean out parenthetical notes if needed
        const jpText = typeof rawJp === 'string' ? rawJp.trim() : null;
        const enText = typeof rawEn === 'string' ? rawEn.trim() : null;
        const romText = typeof rawRom === 'string' ? rawRom.trim() : null;

        if (jpText && enText && jpText !== enText) {
          // Generate JP -> EN Meaning Question
          const otherRows = rows.filter((_, idx) => idx !== rIdx && _[enCol]);
          const distractors = shuffle(otherRows).slice(0, 3).map((r) => r[enCol]);

          if (distractors.length >= 2) {
            const options = [enText, ...distractors];
            generatedQuestions.push({
              id: `${lesson.id}-auto-t-m-${tIdx}-${rIdx}`,
              category: 'meaning',
              categoryLabel: '💡 MEANING & VOCABULARY',
              type: 'multiple-choice',
              prompt: `In this lesson, what is the meaning / usage of '${jpText}'?`,
              question: `In this lesson, what is the meaning / usage of '${jpText}'?`,
              options,
              correctAnswer: 0,
              explanation: `'${jpText}' means: ${enText}.`
            });
          }

          // Generate EN -> JP Expression Question
          const jpDistractors = shuffle(otherRows).slice(0, 3).map((r) => r[jpCol]);
          if (jpDistractors.length >= 2) {
            const options = [jpText, ...jpDistractors];
            generatedQuestions.push({
              id: `${lesson.id}-auto-t-jp-${tIdx}-${rIdx}`,
              category: 'writing-pronunciation',
              categoryLabel: '✍️ JAPANESE EXPRESSION',
              type: 'multiple-choice',
              prompt: `How do you express '${enText}' in Japanese?`,
              question: `How do you express '${enText}' in Japanese?`,
              options,
              correctAnswer: 0,
              explanation: `'${enText}' corresponds to '${jpText}'.`
            });
          }

          // Generate Pronunciation Question if romaji available
          if (romText && romCol !== -1) {
            const romDistractors = shuffle(otherRows).slice(0, 3).map((r) => r[romCol]).filter(Boolean);
            if (romDistractors.length >= 2) {
              generatedQuestions.push({
                id: `${lesson.id}-auto-t-rom-${tIdx}-${rIdx}`,
                category: 'writing-pronunciation',
                categoryLabel: '✍️ PRONUNCIATION',
                type: 'multiple-choice',
                prompt: `What is the correct pronunciation / romaji for '${jpText}'?`,
                question: `What is the correct pronunciation / romaji for '${jpText}'?`,
                options: [romText, ...romDistractors],
                correctAnswer: 0,
                explanation: `'${jpText}' is pronounced '${romText}'.`,
                romaji: romText
              });
            }
          }
        }
      });
    }
  });

  // 3. Extract from Lesson Examples (Sentences, translations, fill-in-blank, builders)
  allExamples.forEach((ex, eIdx) => {
    // Sentence Comprehension (JP -> EN)
    const otherExamples = allExamples.filter((_, idx) => idx !== eIdx);
    const distractorEns = shuffle(otherExamples).slice(0, 3).map((e) => e.en);

    if (distractorEns.length >= 2) {
      generatedQuestions.push({
        id: `${lesson.id}-auto-ex-comp-${eIdx}`,
        category: 'sentence-comprehension',
        categoryLabel: '💬 SENTENCE UNDERSTANDING',
        type: 'multiple-choice',
        prompt: `Translate this sentence to English: '${ex.jp}'`,
        question: `Translate this sentence to English: '${ex.jp}'`,
        options: [ex.en, ...distractorEns],
        correctAnswer: 0,
        explanation: `'${ex.jp}' translates to: '${ex.en}'.`,
        romaji: ex.romaji || '',
        audioText: ex.jp
      });
    }

    // Reverse Translation (EN -> JP)
    const distractorJps = shuffle(otherExamples).slice(0, 3).map((e) => e.jp);
    if (distractorJps.length >= 2) {
      generatedQuestions.push({
        id: `${lesson.id}-auto-ex-rev-${eIdx}`,
        category: 'sentence-comprehension',
        categoryLabel: '💬 SENTENCE UNDERSTANDING',
        type: 'multiple-choice',
        prompt: `Which Japanese sentence means: '${ex.en}'?`,
        question: `Which Japanese sentence means: '${ex.en}'?`,
        options: [ex.jp, ...distractorJps],
        correctAnswer: 0,
        explanation: `'${ex.en}' is '${ex.jp}'.`,
        romaji: ex.romaji || '',
        audioText: ex.jp
      });
    }

    // Sentence Builder (Word Bank) from example
    const rawTokens = ex.jp.replace(/[。！？\?]/g, '').trim().split(/\s+/);
    if (rawTokens.length >= 3 && rawTokens.length <= 8) {
      // Pick 2 distractor tokens from other examples
      const extraTokens = shuffle(
        allExamples
          .flatMap((o) => o.jp.replace(/[。！？\?]/g, '').trim().split(/\s+/))
          .filter((t) => !rawTokens.includes(t))
      ).slice(0, 2);

      generatedQuestions.push({
        id: `${lesson.id}-auto-ex-wb-${eIdx}`,
        category: 'word-bank',
        categoryLabel: '🧩 SENTENCE BUILDER',
        type: 'word-bank',
        prompt: `Build the Japanese sentence: '${ex.en}'`,
        targetEn: ex.en,
        chips: shuffle([...rawTokens, ...extraTokens]),
        correctOrder: rawTokens,
        explanation: `'${ex.en}' is built as: ${rawTokens.join(' ')}`,
        romaji: ex.romaji || ''
      });
    }

    // Fill in the blank (Detect common particles or verb endings)
    const particleMatch = ex.jp.match(/\s(は|が|を|に|で|へ|と|の|から|まで|か|です|でした|じゃありません)\s/);
    if (particleMatch) {
      const targetParticle = particleMatch[1];
      const sentenceWithBlank = ex.jp.replace(
        new RegExp(`\\s${targetParticle}\\s`),
        ' ___ '
      );
      const commonParticles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'の'];
      const blankDistractors = shuffle(commonParticles.filter((p) => p !== targetParticle)).slice(0, 3);

      generatedQuestions.push({
        id: `${lesson.id}-auto-ex-fb-${eIdx}`,
        category: 'fill-blank',
        categoryLabel: '✏️ FILL IN THE BLANK',
        type: 'fill-blank',
        prompt: `Choose the correct missing element to complete the sentence:`,
        sentence: sentenceWithBlank,
        blankWord: targetParticle,
        options: [targetParticle, ...blankDistractors],
        correctAnswer: 0,
        explanation: `'${targetParticle}' correctly completes '${ex.jp}' (${ex.en}).`,
        romaji: ex.romaji ? ex.romaji.replace(new RegExp(`\\b${targetParticle}\\b`, 'i'), '[ ? ]') : ''
      });
    }
  });

  // 4. Merge existing lesson.quiz items
  if (Array.isArray(lesson.quiz)) {
    lesson.quiz.forEach((q, qIdx) => {
      const existingPrompt = q.prompt || q.question;
      const isDuplicate = generatedQuestions.some(
        (g) => (g.prompt || g.question) === existingPrompt
      );
      if (!isDuplicate) {
        generatedQuestions.push({
          ...q,
          id: `${lesson.id}-orig-q-${qIdx}`,
          category: q.type === 'word-bank' ? 'word-bank' : q.type === 'fill-blank' ? 'fill-blank' : 'meaning',
          categoryLabel: q.type === 'word-bank' ? '🧩 SENTENCE BUILDER' : q.type === 'fill-blank' ? '✏️ FILL IN THE BLANK' : '💡 CORE PRACTICE'
        });
      }
    });
  }

  return generatedQuestions;
}

// =========================================================================
// MAIN EXPORT: GET A FRESH, BALANCED 15-QUESTION LEARNING QUIZ SESSION
// Ensures questions are repeatable but randomized with fresh variety every time.
// =========================================================================
export function getLearningQuizForLesson(lesson, questionCount = 15) {
  if (!lesson) return [];

  // 1. Get complete question bank for lesson
  const pool = generateLearningQuizFromLesson(lesson);
  if (!pool || pool.length === 0) return lesson.quiz || [];

  // If pool has fewer than requested, return all of them shuffled
  if (pool.length <= questionCount) {
    return prepareQuestionInstances(shuffle(pool));
  }

  // 2. Group pool by pedagogical categories
  const categories = {
    formula: [],
    'writing-pronunciation': [],
    meaning: [],
    'sentence-comprehension': [],
    'fill-blank': [],
    'word-bank': []
  };

  pool.forEach((q) => {
    const cat = q.category || (q.type === 'word-bank' ? 'word-bank' : q.type === 'fill-blank' ? 'fill-blank' : 'meaning');
    if (categories[cat]) {
      categories[cat].push(q);
    } else {
      categories.meaning.push(q);
    }
  });

  // 3. Balanced quota selection
  const selected = [];
  const quotas = [
    { cat: 'formula', count: 2 },
    { cat: 'writing-pronunciation', count: 2 },
    { cat: 'meaning', count: 3 },
    { cat: 'sentence-comprehension', count: 4 },
    { cat: 'fill-blank', count: 2 },
    { cat: 'word-bank', count: 2 }
  ];

  quotas.forEach(({ cat, count }) => {
    const available = shuffle(categories[cat]);
    const take = available.slice(0, count);
    selected.push(...take);
  });

  // 4. Fill remaining slots up to questionCount if needed
  if (selected.length < questionCount) {
    const selectedIds = new Set(selected.map((q) => q.id));
    const remaining = shuffle(pool.filter((q) => !selectedIds.has(q.id)));
    const needed = questionCount - selected.length;
    selected.push(...remaining.slice(0, needed));
  }

  // Trim if quota exceeded
  const finalSet = selected.slice(0, questionCount);

  // 5. Randomize instance options & chips so choices aren't fixed in position
  return prepareQuestionInstances(shuffle(finalSet));
}

// Randomizes option orders for multiple-choice and chip order for word bank
function prepareQuestionInstances(questions) {
  return questions.map((q, idx) => {
    const copy = { ...q, instanceId: `${q.id}-inst-${idx}-${Date.now()}` };

    if (copy.type === 'multiple-choice' || copy.type === 'fill-blank' || copy.type === 'audio-listening') {
      if (Array.isArray(copy.options) && copy.correctAnswer !== undefined) {
        const correctText = copy.options[copy.correctAnswer];
        const correctRomaji = copy.romajiOptions ? copy.romajiOptions[copy.correctAnswer] : null;

        // Pair options with their romaji if available
        const paired = copy.options.map((opt, optIdx) => ({
          text: opt,
          romaji: copy.romajiOptions ? copy.romajiOptions[optIdx] : null,
          isCorrect: optIdx === copy.correctAnswer
        }));

        const shuffledPaired = shuffle(paired);
        copy.options = shuffledPaired.map((p) => p.text);
        if (copy.romajiOptions) {
          copy.romajiOptions = shuffledPaired.map((p) => p.romaji || p.text);
        }
        copy.correctAnswer = shuffledPaired.findIndex((p) => p.isCorrect);
      }
    } else if (copy.type === 'word-bank' && Array.isArray(copy.chips)) {
      copy.chips = shuffle([...copy.chips]);
    }

    return copy;
  });
}

export default getLearningQuizForLesson;
