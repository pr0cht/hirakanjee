// JLPT N4 Lesson Module
export const lesson = {
  "id": "n4-kanji-videos-flashcards-youtube",
  "number": 4,
  "title": "JLPT N4: Kanji Quizzes & Flashcards (YouTube Practice Videos)",
  "shortTitle": "Kanji Quizzes & Flashcards (YouTube)",
  "category": "Video & Flashcards",
  "subtitle": "A collection of JLPT N4 kanji YouTube resources, including 30 reading quizzes and 30 writing quizzes, plus two sets of 100 kanji flashcards (with and without audio).",
  "formula": "30 Reading + 30 Writing Video Quizzes • 100 Audio Flashcards • YouTube Playlist",
  "description": "A rich multimedia collection featuring 30 video reading quizzes, 30 video writing quizzes, and two sets of 100 animated flashcard drills with native audio pronunciation on YouTube.",
  "sections": [
    {
      "title": "1. Overview of YouTube Multimedia Practice",
      "content": "Watching and listening to kanji video quizzes engages visual and auditory memory pathways simultaneously.\n\nYouTube Collection Breakdown:\n• 100 Kanji Flashcards with Native Audio Pronunciation (Practice shadowing and listening).\n• 100 Kanji Flashcards without Audio (Fast-paced visual reading recall).\n• 30 Reading Video Quizzes with timed countdowns.\n• 30 Writing Video Quizzes focusing on stroke components and character shapes.\n",
      "table": null,
      "examples": [
        {
          "jp": "動画を 見ながら、漢字の 読み方を 練習します。",
          "romaji": "Douga o minagara, kanji no yomikata o renshuu shimasu.",
          "en": "Practice kanji reading while watching the videos."
        },
        {
          "jp": "音声の あとに 続いて 発音して ください。",
          "romaji": "Onsei no ato ni tsuzuite hatsuon shite kudasai.",
          "en": "Please pronounce following the audio (shadowing)."
        },
        {
          "jp": "毎日 フラッシュカードで 復習しましょう。",
          "romaji": "Mainichi furasshu kaado de fukushuu shimashou.",
          "en": "Let’s review with flashcards every day."
        }
      ]
    },
    {
      "title": "2. Multi-Sensory Study Table & Video Links",
      "content": "",
      "table": {
        "headers": [
          "Resource Video",
          "Focus Area",
          "YouTube Link",
          "Recommended Training Workflow"
        ],
        "rows": [
          [
            "100 Kanji Flashcards (Audio)",
            "Pronunciation & Jukugo readings",
            "youtu.be/jTLMYkizoNk",
            "Shadow aloud immediately following the native speaker audio"
          ],
          [
            "100 Kanji Flashcards (Silent)",
            "Fast visual recognition speed",
            "youtu.be/NflwT_rdkCs",
            "Speak the reading before the answer card flips (2-sec challenge)"
          ],
          [
            "JLPT N4 Kanji Quiz Vol. 1",
            "Reading in complete sentences",
            "youtu.be/BjhDIpWAx6Q",
            "Pause video, select your answer, then check explanation"
          ],
          [
            "JLPT N4 Kanji Quiz Vol. 2",
            "Reading in complete sentences",
            "youtu.be/jTLMYkizoNk",
            "Timed exam simulation drill"
          ],
          [
            "Full YouTube Playlist",
            "Complete 60+ video library",
            "playlist?list=PLx2HM-ubAFNDwLmk4i_ypyW3N9DIfLw8m",
            "Weekly weekend marathon review session"
          ]
        ]
      },
      "examples": []
    },
    {
      "title": "3. Integrating Videos with Hirakanjee Canvas",
      "content": "• Open a video quiz on your mobile or second monitor.\n• Pause when a writing quiz prompt appears.\n• Switch to the Hirakanjee Practice Canvas and draw the kanji from memory.\n• Compare your stroke grade and accuracy with the video answer!",
      "table": null,
      "examples": []
    }
  ],
  "quiz": [
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct reading for the kanji compound 発音 (pronunciation):",
      "question": "音声の あとに 続いて 発音（＿＿＿）して ください。",
      "options": [
        "はつおん",
        "はつご",
        "はつおと",
        "はつこえ"
      ],
      "correctAnswer": 0,
      "explanation": "発音 is read はつおん (hatsuon), meaning \"pronunciation\".",
      "romaji": "Onsei no ato ni tsuzuite hatsuon (___) shite kudasai.",
      "romajiOptions": [
        "hatsuon",
        "hatsugo",
        "hatsuoto",
        "hatsukoe"
      ]
    },
    {
      "type": "multiple-choice",
      "prompt": "Choose the correct kanji for「れんしゅう」(practice/drill):",
      "question": "漢字の 読み方を ＿＿＿します。",
      "options": [
        "練習",
        "練習",
        "連習",
        "恋習"
      ],
      "correctAnswer": 0,
      "explanation": "練習 (れんしゅう) is written with 練 (practice/drill) and 習 (learn).",
      "romaji": "Kanji no yomikata o ___ shimasu.",
      "romajiOptions": [
        "renshuu",
        "renshuu",
        "renshuu",
        "renshuu"
      ]
    },
    {
      "type": "word-bank",
      "prompt": "Build the sentence: \"I listen to the audio and pronounce.\"",
      "chips": [
        "おんせいを",
        "きいて",
        "はつおんします。"
      ],
      "correctOrder": [
        0,
        1,
        2
      ],
      "explanation": "音声を (audio) 聞いて (listen to) 発音します (pronounce)."
    }
  ]
};

export const lessonMeta = {
  "id": "n4-kanji-videos-flashcards-youtube",
  "jlptLevel": "N4",
  "grammarPoints": [
    "Kanji Quizzes & Flashcards (YouTube)"
  ],
  "generationConfig": {
    "sentenceTemplates": [],
    "vocabularyScope": [
      "n4-kanji"
    ],
    "difficulty": "intermediate"
  }
};

export default lesson;
