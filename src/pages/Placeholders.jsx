import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineSound, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { speakJapanese } from '../utils/audio';

const LESSON_CONTENT = {
  'Basic Sentences': {
    description: 'Master the foundation of Japanese: Topic-Comment sentence structure, the polite copula です, and essential daily greetings.',
    sections: [
      {
        title: '1. Topic-Comment Structure (A は B です)',
        content: `In Japanese, the particle は (pronounced "wa") marks the topic of the sentence—what you are talking about.
        
Structure: [Topic] は [Description/Noun] です。 (As for [Topic], it is [B].)`,
        examples: [
          { jp: 'わたし は がくせい です。', romaji: 'Watashi wa gakusei desu.', en: 'I am a student.' },
          { jp: 'これ は ほん です。', romaji: 'Kore wa hon desu.', en: 'This is a book.' },
          { jp: 'たなかさん は せんせい です。', romaji: 'Tanaka-san wa sensei desu.', en: 'Mr. Tanaka is a teacher.' },
        ],
      },
      {
        title: '2. Negative & Past Tenses of です',
        content: `Polite affirmative: です (is/am/are)
Polite negative: ではありません / じゃありません (is not)
Polite past: でした (was/were)
Polite past negative: ではありませんでした (was not)`,
        examples: [
          { jp: 'わたし は がくせい じゃありません。', romaji: 'Watashi wa gakusei ja arimasen.', en: 'I am not a student.' },
          { jp: 'きのう は にちようび でした。', romaji: 'Kinou wa nichiyoubi deshita.', en: 'Yesterday was Sunday.' },
        ],
      },
      {
        title: '3. Essential Daily Greetings',
        content: 'Common Japanese phrases used every single day:',
        examples: [
          { jp: 'おはようございます', romaji: 'Ohayou gozaimasu', en: 'Good morning (polite)' },
          { jp: 'こんにちは', romaji: 'Konnichiwa', en: 'Hello / Good afternoon' },
          { jp: 'こんばんは', romaji: 'Konbanwa', en: 'Good evening' },
          { jp: 'ありがとうございます', romaji: 'Arigatou gozaimasu', en: 'Thank you very much' },
          { jp: 'すみません', romaji: 'Sumimasen', en: 'Excuse me / Sorry' },
          { jp: 'さようなら', romaji: 'Sayounara', en: 'Goodbye' },
        ],
      },
    ],
  },
  'Particles': {
    description: 'Particles (助詞, joshi) are grammatical markers that define the relationship between words in a Japanese sentence.',
    sections: [
      {
        title: 'Key JLPT N5 Particles',
        content: 'Understand the most important particles and their roles:',
        examples: [
          { jp: 'は (wa)', romaji: 'Topic marker', en: 'わたしは学生です (As for me, I am a student)' },
          { jp: 'が (ga)', romaji: 'Subject / Identifier marker', en: '猫がいます (There is a cat / focus on the cat)' },
          { jp: 'を (o/wo)', romaji: 'Direct object marker', en: 'りんごを食べます (Eat an apple)' },
          { jp: 'に (ni)', romaji: 'Target / Destination / Time marker', en: '日本に行きます (Go to Japan) / 七時に起きます (Wake up at 7:00)' },
          { jp: 'で (de)', romaji: 'Location of action / Means / Tool', en: '図書館で勉強します (Study at the library) / バスで行きます (Go by bus)' },
          { jp: 'と (to)', romaji: 'And (exhaustive) / Together with', en: '友達と話します (Talk with a friend)' },
          { jp: 'へ (e)', romaji: 'Direction towards', en: '東京へ行きます (Head towards Tokyo)' },
          { jp: 'も (mo)', romaji: 'Also / Too', en: 'わたしも学生です (I am also a student)' },
        ],
      },
    ],
  },
  'Adjectives (い-adjectives & な-adjectives)': {
    description: 'Japanese adjectives fall into two distinct grammatical categories: い-adjectives (i-keiyoushi) and な-adjectives (na-keiyoushi).',
    sections: [
      {
        title: '1. い-Adjectives (i-adjectives)',
        content: `All true い-adjectives end with the syllable い (such as 高い takai, 新しい atarashii, おいしい oishii).
They conjugate directly by modifying their suffix:
• Present affirmative: 高い (expensive)
• Present negative: 高くない (not expensive)
• Past affirmative: 高かった (was expensive)
• Past negative: 高くなかった (was not expensive)`,
        examples: [
          { jp: 'この車は高いです。', romaji: 'Kono kuruma wa takai desu.', en: 'This car is expensive.' },
          { jp: '昨日は寒くなかったです。', romaji: 'Kinou wa samukunakatta desu.', en: 'Yesterday was not cold.' },
        ],
      },
      {
        title: '2. な-Adjectives (na-adjectives)',
        content: `な-adjectives act like noun roots. When modifying a noun directly, they require な (na):
• 静かな町 (A quiet town)
• 有名な人 (A famous person)
Conjugation is done using です:
• Present: 静かです (is quiet)
• Negative: 静かじゃありません (is not quiet)
• Past: 静かでした (was quiet)
• Past negative: 静かじゃありませんでした (was not quiet)`,
        examples: [
          { jp: '京都は静かな町です。', romaji: 'Kyouto wa shizukana machi desu.', en: 'Kyoto is a quiet town.' },
          { jp: 'この本は有名です。', romaji: 'Kono hon wa yuumei desu.', en: 'This book is famous.' },
        ],
      },
    ],
  },
  'Verbs': {
    description: 'Japanese verbs are categorized into three groups: Group 1 (Godan), Group 2 (Ichidan), and Group 3 (Irregular).',
    sections: [
      {
        title: '1. The Three Verb Groups',
        content: `• Group 1 (Godan / -u verbs): 書く (kaku - to write), 飲む (nomu - to drink), 行く (iku - to go)
• Group 2 (Ichidan / -ru verbs): 食べる (taberu - to eat), 見る (miru - to see)
• Group 3 (Irregular verbs): する (suru - to do), 来る (kuru - to come)`,
        examples: [
          { jp: '食べる → 食べます', romaji: 'taberu → tabemasu', en: 'to eat (polite present)' },
          { jp: '飲む → 飲みます', romaji: 'nomu → nomimasu', en: 'to drink (polite present)' },
          { jp: 'する → します', romaji: 'suru → shimasu', en: 'to do (polite present)' },
          { jp: '来る → 来ます', romaji: 'kuru → kimasu', en: 'to come (polite present)' },
        ],
      },
      {
        title: '2. The ~te Form (~て形)',
        content: 'The て-form is used for making requests (〜てください), expressing ongoing actions (〜ています), and connecting actions in sequence.',
        examples: [
          { jp: '本を読んでください。', romaji: 'Hon o yonde kudasai.', en: 'Please read the book.' },
          { jp: '今、日本語を勉強しています。', romaji: 'Ima, nihongo o benkyou shite imasu.', en: 'I am currently studying Japanese.' },
        ],
      },
    ],
  },
  'Numbers & Time': {
    description: 'Learn how to count numbers, read clock times, and talk about dates and calendar units in Japanese.',
    sections: [
      {
        title: '1. Numbers 1 to 10 and Beyond',
        content: 'Basic numbers in Sino-Japanese reading:',
        examples: [
          { jp: '一 (いち) / 二 (に) / 三 (さん)', romaji: 'ichi / ni / san', en: '1 / 2 / 3' },
          { jp: '四 (よん/し) / 五 (ご) / 六 (ろく)', romaji: 'yon/shi / go / roku', en: '4 / 5 / 6' },
          { jp: '七 (なな/しち) / 八 (はち) / 九 (きゅう/く)', romaji: 'nana/shichi / hachi / kyuu/ku', en: '7 / 8 / 9' },
          { jp: '十 (じゅう) / 百 (ひゃく) / 千 (せん) / 万 (まん)', romaji: 'juu / hyaku / sen / man', en: '10 / 100 / 1,000 / 10,000' },
        ],
      },
      {
        title: '2. Telling Time (Hours & Minutes)',
        content: 'Hours use 〜時 (ji), and minutes use 〜分 (fun / pun):',
        examples: [
          { jp: '今、何時ですか。', romaji: 'Ima, nan-ji desu ka.', en: 'What time is it now?' },
          { jp: '三時半です。', romaji: 'San-ji han desu.', en: 'It is 3:30 (half past three).' },
          { jp: '午前九時十五分です。', romaji: 'Gozen ku-ji juu-go-fun desu.', en: 'It is 9:15 AM.' },
        ],
      },
    ],
  },
  'Daily Life': {
    description: 'Practical vocabulary and conversation models for daily routines, hobbies, and social interactions.',
    sections: [
      {
        title: 'Daily Routine Sentences',
        content: 'Express what you do every day:',
        examples: [
          { jp: '毎朝、七時に起きます。', romaji: 'Maiasa, shichi-ji ni okimasu.', en: 'Every morning, I wake up at 7:00.' },
          { jp: '朝ごはんを食べて、学校へ行きます。', romaji: 'Asagohan o tabete, gakkou e ikimasu.', en: 'I eat breakfast and go to school.' },
          { jp: '夜、十一時に寝ます。', romaji: 'Yoru, juu-ichi-ji ni nemasu.', en: 'At night, I go to sleep at 11:00.' },
        ],
      },
    ],
  },
};

export function PlaceholderLesson({ title }) {
  const lesson = LESSON_CONTENT[title] || {
    description: `Structured lesson content for ${title}.`,
    sections: [
      {
        title: `Overview of ${title}`,
        content: `Explore key vocabulary, grammar points, and natural practice examples for ${title}.`,
        examples: [
          { jp: 'こんにちは', romaji: 'Konnichiwa', en: 'Hello' },
          { jp: 'がんばってください', romaji: 'Ganbatte kudasai', en: 'Do your best!' },
        ],
      },
    ],
  };

  return (
    <div className="page-content" style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <Link to="/learn" className="back-link" aria-label="Return to Learn">
          <AiOutlineArrowLeft className="back-icon" />
        </Link>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#111827' }}>{title}</h1>
      </div>

      <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        {lesson.description}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {lesson.sections.map((sec, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-card, #ffffff)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color, rgba(0,0,0,0.08))',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <h2 style={{ margin: '0 0 1rem', fontSize: '1.25rem', color: 'var(--accent-blue, #2563eb)' }}>{sec.title}</h2>
            <p style={{ whiteSpace: 'pre-line', color: 'var(--text-secondary, #374151)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {sec.content}
            </p>

            {sec.examples && sec.examples.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--text-muted, #6b7280)', margin: '0 0 4px', textTransform: 'uppercase' }}>
                  Example Phrases & Vocabulary
                </h3>
                {sec.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-card-subtle, #f8fafc)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color, #e2e8f0)',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary, #0f172a)' }}>{ex.jp}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)' }}>{ex.romaji}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary, #334155)', marginTop: '2px' }}>{ex.en}</div>
                    </div>
                    <button
                      onClick={() => speakJapanese(ex.jp)}
                      style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: 'none',
                        color: '#2563eb',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                      title="Pronounce Japanese phrase"
                      aria-label="Pronounce Japanese phrase"
                    >
                      <AiOutlineSound size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Placeholders() {
  return <PlaceholderLesson title="Lesson" />;
}
