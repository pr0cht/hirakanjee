import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import KanjiDrawingPad from './components/KanjiDrawingPad';
import HiraganaPage from './pages/HiraganaPage';
import KatakanaPage from './pages/KatakanaPage';
import KanjiPage from './pages/KanjiPage';
import CharacterPracticePage from './pages/CharacterPracticePage';
import N5LessonPage from './pages/N5LessonPage';
import { n5Curriculum, allN5Lessons } from './data/n5/n5Curriculum';
import Placeholders, { PlaceholderLesson } from './pages/Placeholders';
import {
  AiOutlineFire,
  AiOutlineCheckCircle,
  AiOutlineBook,
  AiOutlineArrowRight,
  AiOutlineTrophy,
  AiOutlineSound,
} from 'react-icons/ai';
import {
  n4StudyComponents,
  n4GrammarLessons,
  n4VerbLessons,
  n4AdjectiveLessons,
  n4KanjiLessons,
  n4ListeningLessons,
  n4PracticeLessons,
} from './data/n4/n4Curriculum';
import { speakJapanese } from './utils/audio';
import './App.css';

const accentMap = {
  orange: '#ea580c',
  blue: '#3b82f6',
  green: '#22c55e',
  purple: '#8b5cf6',
  charcoal: '#4b5563',
};


// Home Page Component
function HomePage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (window.db?.getStats) {
      window.db.getStats().then(setStats).catch(() => {});
    }
  }, []);

  return (
    <div className="page-content">
      <div className="dashboard-hero" style={{ marginBottom: '24px' }}>
        <div className="dashboard-hero-content">
          <div className="dashboard-streak-pill">
            <AiOutlineFire size={18} />
            <span>{stats?.currentStreak || 0} Day Streak</span>
          </div>
          <h1>Welcome to Hirakanjee</h1>
          <p>The AI-powered Japanese handwriting mastery & spaced repetition system.</p>
        </div>

        <div className="dashboard-hero-actions">
          <Link to="/practice" className="srs-due-badge">
            <AiOutlineArrowRight size={18} />
            <span>Practice Canvas</span>
          </Link>
          <Link to="/learn" className="btn-primary">
            Browse Lessons
          </Link>
        </div>
      </div>

      <div className="learn-sections">
        <section className="learn-section">
          <h2>Start Practicing</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Hiragana (71)</h3>
              <p>Master native phonetic characters with real-time AI handwriting grading.</p>
              <Link to="/learn/hiragana" className="btn-primary">Study Hiragana</Link>
            </div>
            <div className="topic-card">
              <h3>Katakana (72)</h3>
              <p>Learn script for loanwords and onomatopoeia with guided stroke recognition.</p>
              <Link to="/learn/katakana" className="btn-primary">Study Katakana</Link>
            </div>
            <div className="topic-card">
              <h3>JLPT N5 Kanji (86)</h3>
              <p>86 fundamental Kanji characters with Onyomi, Kunyomi, and stroke counters.</p>
              <Link to="/learn/kanji" className="btn-primary">Study Kanji</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Activity Heatmap Generator
function ActivityHeatmap({ history = [] }) {
  const historyMap = {};
  for (const item of history) {
    historyMap[item.date] = item.count;
  }

  // Generate 16 weeks (112 days) leading up to today
  const cells = [];
  const today = new Date();
  for (let i = 111; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const count = historyMap[dateStr] || 0;
    let lvl = '';
    if (count >= 15) lvl = 'lvl-4';
    else if (count >= 8) lvl = 'lvl-3';
    else if (count >= 3) lvl = 'lvl-2';
    else if (count >= 1) lvl = 'lvl-1';

    cells.push({ date: dateStr, count, lvl });
  }

  return (
    <div>
      <div className="heatmap-grid">
        {cells.map((c) => (
          <div
            key={c.date}
            className={`heatmap-cell ${c.lvl}`}
            title={`${c.date}: ${c.count} reviews completed`}
          />
        ))}
      </div>
      <div className="heatmap-legend">
        <span>Less</span>
        <div className="heatmap-cell" />
        <div className="heatmap-cell lvl-1" />
        <div className="heatmap-cell lvl-2" />
        <div className="heatmap-cell lvl-3" />
        <div className="heatmap-cell lvl-4" />
        <span>More</span>
      </div>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage() {
  const [stats, setStats] = useState({
    totalTracked: 0,
    apprentice: 0,
    guru: 0,
    master: 0,
    burned: 0,
    totalReviews: 0,
    accuracy: 0,
    dueReviews: 0,
    currentStreak: 0,
  });
  const [history, setHistory] = useState([]);
  const [weakChars, setWeakChars] = useState([]);
  const [srsQueue, setSrsQueue] = useState([]);

  useEffect(() => {
    if (window.db) {
      window.db.getStats().then(setStats).catch(() => {});
      window.db.getStreakHistory().then(setHistory).catch(() => {});
      window.db.getWeakCharacters(8).then(setWeakChars).catch(() => {});
      window.db.getSRSQueue(5).then(setSrsQueue).catch(() => {});
    }
  }, []);

  return (
    <div className="page-content dashboard-container">
      {/* Hero Streak & Due Card */}
      <div className="dashboard-hero">
        <div className="dashboard-hero-content">
          <div className="dashboard-streak-pill">
            <AiOutlineFire size={18} />
            <span>{stats.currentStreak} Day Study Streak</span>
          </div>
          <h1>Learning Command Center</h1>
          <p>
            {stats.dueReviews > 0
              ? `You have ${stats.dueReviews} character${stats.dueReviews > 1 ? 's' : ''} due for review right now.`
              : 'All caught up on reviews! Excellent consistency.'}
          </p>
        </div>

        <div className="dashboard-hero-actions">
          {srsQueue.length > 0 ? (
            <Link
              to={`/learn/practice/${srsQueue[0].script}/${encodeURIComponent(srsQueue[0].char)}?from=dashboard`}
              state={{ from: 'dashboard' }}
              className="srs-due-badge"
            >
              <AiOutlineCheckCircle size={18} />
              <span>Review Now ({stats.dueReviews} Due)</span>
            </Link>
          ) : (
            <Link to="/practice" className="srs-due-badge">
              <AiOutlineArrowRight size={18} />
              <span>Free Practice</span>
            </Link>
          )}
        </div>
      </div>

      {/* SRS Stages Grid */}
      <div className="srs-stages-grid">
        <div className="stage-card apprentice">
          <span className="stage-title">Apprentice</span>
          <span className="stage-count">{stats.apprentice}</span>
          <span className="stage-desc">Stages 1–3 • Review in 4h to 1d</span>
        </div>
        <div className="stage-card guru">
          <span className="stage-title">Guru</span>
          <span className="stage-count">{stats.guru}</span>
          <span className="stage-desc">Stages 4–5 • Review in 3d to 1w</span>
        </div>
        <div className="stage-card master">
          <span className="stage-title">Master</span>
          <span className="stage-count">{stats.master}</span>
          <span className="stage-desc">Stages 6–7 • Review in 2w to 1mo</span>
        </div>
        <div className="stage-card burned">
          <span className="stage-title">Burned</span>
          <span className="stage-count">{stats.burned}</span>
          <span className="stage-desc">Stage 8 • Mastered permanently</span>
        </div>
      </div>

      {/* Practice Activity Heatmap */}
      <div className="dashboard-section-card">
        <h2>Practice Activity (Last 16 Weeks)</h2>
        <ActivityHeatmap history={history} />
      </div>

      {/* Weak Characters / Needs Attention */}
      {weakChars.length > 0 && (
        <div className="dashboard-section-card">
          <h2>Focus Areas (Needs Practice)</h2>
          <div className="weak-chars-grid">
            {weakChars.map((item) => (
              <div key={`${item.script}-${item.char}`} className="weak-char-card">
                <span className="weak-char-symbol">{item.char}</span>
                <span className="weak-char-score">
                  {item.accuracy}% ({item.total_reviews} reviews)
                </span>
                <Link
                  to={`/learn/practice/${item.script}/${encodeURIComponent(item.char)}?from=dashboard`}
                  state={{ from: 'dashboard' }}
                  className="weak-char-link"
                >
                  Practice
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Learn Page Component
function LearnPage() {
  const [lessonProgress, setLessonProgress] = useState({});
  const [activeLevel, setActiveLevel] = useState('N5');

  useEffect(() => {
    if (window.db?.getLessonProgress) {
      window.db.getLessonProgress().then((prog) => {
        if (prog) setLessonProgress(prog);
      }).catch(() => {});
    }
  }, []);

  const completedCount = Object.values(lessonProgress).filter((p) => p.completed).length;

  const jlptLevels = [
    { id: 'N5', label: 'JLPT N5', desc: 'Beginner' },
    { id: 'N4', label: 'JLPT N4', desc: 'Elementary' },
    { id: 'N3', label: 'JLPT N3', desc: 'Intermediate' },
    { id: 'N2', label: 'JLPT N2', desc: 'Pre-Advanced' },
    { id: 'N1', label: 'JLPT N1', desc: 'Advanced' },
  ];

  const placeholderData = {
    N4: {
      title: 'JLPT N4 Curriculum (Elementary / 初級後半)',
      subtitle: 'Advance from beginner basics to conversational fluency. Covers 300 essential Kanji, complex verb inflections (passive, causative, potential), conditional forms (~tara, ~nara), and everyday reading/listening.',
      sections: [
        { title: 'Core Grammar Structures', desc: 'Conjugations including ~te kara, ~temo ii, ~nakereba narimasen, ~sou desu, and plain conditionals.' },
        { title: 'JLPT N4 Kanji (300 Kanji)', desc: 'Fundamental Kanji characters with comprehensive stroke order practice, On-yomi, and Kun-yomi.' },
        { title: 'Honorifics & Social Speech', desc: 'Polite and humble speech fundamentals (Sonkeigo and Kenjougo) for everyday interactions.' },
        { title: 'Conversational Listening', desc: 'Realistic listening comprehension tasks for train stations, restaurants, shopping, and campus life.' },
      ]
    },
    N3: {
      title: 'JLPT N3 Curriculum (Intermediate / 中級)',
      subtitle: 'The gateway to natural Japanese fluency. Bridges everyday communication and formal expression with 650+ Kanji, nuanced sentence connectors, and near-native audio clips.',
      sections: [
        { title: 'Intermediate Grammar Nuances', desc: 'Subtle grammar points including ~wake ga nai, ~ni shite mo, ~ni taishite, and ~wo komete.' },
        { title: 'JLPT N3 Kanji (650 Kanji)', desc: 'Expanded Kanji repertoire covering abstract ideas, media terms, and compound words.' },
        { title: 'Essay & Article Reading', desc: 'Short opinion essays, newspaper columns, and instructional notices with comprehension quizzes.' },
        { title: 'Natural-Speed Listening', desc: 'Authentic multi-speaker dialogues, interviews, and radio programs at standard speaking speed.' },
      ]
    },
    N2: {
      title: 'JLPT N2 Curriculum (Pre-Advanced / 上級手前)',
      subtitle: 'Professional, academic, and business-ready Japanese. Master 1,000+ Kanji, newspaper editorials, business correspondence, and workplace conversations.',
      sections: [
        { title: 'Advanced Grammar & Discourse', desc: 'Formal and literary expressions including ~ni hoka naranai, ~wo keiki ni, and ~bakari ka.' },
        { title: 'JLPT N2 Kanji (1,000 Kanji)', desc: 'High-frequency kanji found in business contracts, editorials, and formal correspondence.' },
        { title: 'Business Japanese & Etiquette', desc: 'Corporate email templates, meeting discussions, client negotiations, and keigo refinement.' },
        { title: 'News & Media Comprehension', desc: 'In-depth news reports, documentary excerpts, and topical panel discussions.' },
      ]
    },
    N1: {
      title: 'JLPT N1 Curriculum (Advanced / 最上級)',
      subtitle: 'The highest tier of Japanese proficiency. Comprehend intricate literary prose, academic lectures, complex philosophical debates, and all 2,136 Joyo Kanji.',
      sections: [
        { title: 'Literary & Classical Expressions', desc: 'Nuanced grammar forms including ~ya ina ya, ~ga hayai ka, and ~wo kawakiri ni.' },
        { title: 'Complete Joyo Kanji (2,136 Kanji)', desc: 'Full mastery of all standard educational kanji with rare onyomi/kunyomi readings.' },
        { title: 'Critical Reading & Editorial Analysis', desc: 'Advanced texts covering philosophy, sociology, economics, and technical commentary.' },
        { title: 'Academic & Professional Audio', desc: 'University lectures, roundtable debates, press conferences, and abstract presentations.' },
      ]
    }
  };

  const renderN4Cards = (lessons) => (
    <div className="n4-grammar-grid">
      {lessons.map((lesson) => {
        const prog = lessonProgress[lesson.id];
        const isCompleted = Boolean(prog?.completed);
        const quizScore = prog?.quizScore ?? 0;
        const firstEx = lesson.sections?.[0]?.examples?.[0];

        return (
          <div
            key={lesson.id}
            className={`n4-grammar-card ${isCompleted ? 'is-completed' : ''}`}
          >
            <div className="n4-grammar-header">
              <span className="grammar-badge">{lesson.category}</span>
              {isCompleted ? (
                <span className="n5-score-pill completed">
                  <AiOutlineCheckCircle size={13} /> {quizScore}% Score
                </span>
              ) : (
                <span className="grammar-lesson-num">Lesson {lesson.number}</span>
              )}
            </div>

            <h3 className="grammar-card-title">{lesson.shortTitle}</h3>
            <p className="grammar-card-desc">{lesson.subtitle}</p>

            {lesson.formula && (
              <div className="grammar-formula-box">
                <span className="formula-tag">Form</span>
                <code className="formula-code">{lesson.formula}</code>
              </div>
            )}

            {firstEx && (
              <div className="grammar-example-preview">
                <div className="example-text">
                  <span className="example-jp">{firstEx.jp}</span>
                  <span className="example-en">{firstEx.en}</span>
                </div>
                <button
                  type="button"
                  className="example-audio-btn"
                  onClick={() => speakJapanese(firstEx.jp)}
                  title="Pronounce example"
                  aria-label={`Pronounce ${firstEx.jp}`}
                >
                  <AiOutlineSound size={16} />
                </button>
              </div>
            )}

            <div className="n4-card-footer">
              <Link
                to={`/learn/n4/${lesson.id}`}
                className="btn-primary n4-action-btn"
              >
                {isCompleted ? 'Review & Retake' : 'Start Lesson'} <AiOutlineArrowRight size={14} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="page-content">
      <h1>Learn Japanese</h1>
      <p>Master Japanese with structured lessons, handwriting stroke practice, grammar guides, and interactive quizzes.</p>

      {/* 1. Basic Handwriting Scripts on Top */}
      <section className="learn-section" style={{ marginTop: '28px' }}>
        <h2>Basic Handwriting Scripts</h2>
        <div className="section-grid">
          <div className="topic-card">
            <h3>Hiragana (71)</h3>
            <p>Learn the fundamental Japanese syllabary used for native words and grammatical markers.</p>
            <Link to="/learn/hiragana" className="btn-primary">Start Learning</Link>
          </div>
          <div className="topic-card">
            <h3>Katakana (72)</h3>
            <p>Master the syllabary used for loanwords, foreign names, and onomatopoeia.</p>
            <Link to="/learn/katakana" className="btn-primary">Start Learning</Link>
          </div>
          <div className="topic-card">
            <h3>JLPT N5 Kanji</h3>
            <p>Master all basic kanji essential for the N5 level with On/Kun readings.</p>
            <Link to="/learn/kanji" className="btn-primary">Start Learning</Link>
          </div>
        </div>
      </section>

      {/* 2. JLPT Level Tabs Navigation */}
      <div className="jlpt-tabs-container">
        <div className="jlpt-tabs-bar">
          {jlptLevels.map((lvl) => (
            <button
              key={lvl.id}
              type="button"
              className={`jlpt-tab-btn ${activeLevel === lvl.id ? 'active' : ''}`}
              onClick={() => setActiveLevel(lvl.id)}
            >
              <span>{lvl.label}</span>
              <span className="jlpt-tab-pill">{lvl.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Level Curriculum Content */}
      {activeLevel === 'N5' ? (
        <div className="learn-sections">
          {/* Render MLC Japanese N5 Curriculum Sections (1-8) */}
          {n5Curriculum.map((section) => {
            const sectionCompletedCount = section.lessons.filter((l) => lessonProgress[l.id]?.completed).length;

            return (
              <section key={section.id} className="learn-section">
                <div className="section-header-row">
                  <div>
                    <h2>{section.title}</h2>
                    <p className="section-header-sub">
                      {section.description || section.subtitle}
                    </p>
                  </div>
                  <div className="curriculum-progress-badge">
                    <AiOutlineTrophy size={16} />
                    <span>{sectionCompletedCount} / {section.lessons.length} Completed</span>
                  </div>
                </div>

                <div className="n5-core-grid">
                  {section.lessons.map((lesson) => {
                    const prog = lessonProgress[lesson.id];
                    const isCompleted = Boolean(prog?.completed);
                    const quizScore = prog?.quizScore ?? 0;

                    return (
                      <div
                        key={lesson.id}
                        className={`n5-lesson-card ${isCompleted ? 'is-completed' : ''}`}
                      >
                        <div className="n5-card-header">
                          <span className="n5-lesson-num">Lesson {lesson.number}</span>
                          {isCompleted ? (
                            <span className="n5-score-pill completed">
                              <AiOutlineCheckCircle size={13} /> {quizScore}% Score
                            </span>
                          ) : (
                            <span className="n5-score-pill pending">Ready</span>
                          )}
                        </div>
                        <h3 className="n5-card-title">{lesson.shortTitle}</h3>
                        <p className="n5-card-desc">{lesson.subtitle}</p>

                        {lesson.sections?.[0]?.examples?.[0] && (
                          <div className="grammar-example-preview">
                            <div className="example-text">
                              <span className="example-jp">{lesson.sections[0].examples[0].jp}</span>
                              <span className="example-en">{lesson.sections[0].examples[0].en}</span>
                            </div>
                            <button
                              type="button"
                              className="example-audio-btn"
                              onClick={() => speakJapanese(lesson.sections[0].examples[0].jp)}
                              title="Pronounce example"
                              aria-label={`Pronounce ${lesson.sections[0].examples[0].jp}`}
                            >
                              <AiOutlineSound size={16} />
                            </button>
                          </div>
                        )}

                        <div className="n5-card-footer">
                          <Link
                            to={`/learn/n5/${lesson.id}`}
                            className="btn-primary n5-action-btn"
                          >
                            {isCompleted ? 'Review & Retake' : 'Start Lesson'} <AiOutlineArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Section: Quick Jump by Topic */}
          <section className="learn-section">
            <h2>Quick Topic Jump</h2>
            <div className="section-grid">
              <div className="topic-card">
                <h3>Basic Sentences</h3>
                <p>Learn to construct simple sentences, topic-comment patterns, and greetings.</p>
                <Link to="/learn/n5/basic-structure" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Particles (は, が, を, に, で)</h3>
                <p>Understand key grammatical markers, contrast, locations, and time deadlines.</p>
                <Link to="/learn/n5/part-wa-ga" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Adjectives (い & な)</h3>
                <p>Learn 104+ adjectives, degree words, exceptions, and conjugations.</p>
                <Link to="/learn/n5/adj-i-and-na-104" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Verbs</h3>
                <p>Master movement, existence, 40 core masu verbs, te-form, and plain forms.</p>
                <Link to="/learn/n5/verb-movement" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Special Topics</h3>
                <p>Fractions, quiz symbols, expressing opinions (sou omoimasu), and apologies.</p>
                <Link to="/learn/n5/special-fractions" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Listening Comprehension</h3>
                <p>Real-world Japanese audio dialogues, tasks, and Te-form listening patterns.</p>
                <Link to="/learn/n5/listening-n5-mastery" className="btn-primary">Start Lesson</Link>
              </div>
            </div>
          </section>
        </div>
      ) : activeLevel === 'N4' ? (
        <div className="learn-sections n4-curriculum-container">
          {/* 1. Core Study Components (What to Study for JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>{n4StudyComponents.title}</h2>
                <p className="section-header-sub">
                  {n4StudyComponents.description}
                </p>
              </div>
            </div>

            <div className="n4-study-components-grid">
              {n4StudyComponents.checklist.map((item) => (
                <div key={item.id} className="n4-study-card">
                  <div className="n4-study-badge">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Grammar Guide (JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Grammar Guide (JLPT N4)</h2>
                <p className="section-header-sub">
                  Learn the most important JLPT N4 grammar patterns with simple explanations and targeted practice links. Focus on conditionals, giving/receiving, explanations, and passive/causative forms.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4GrammarLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4GrammarLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4GrammarLessons)}
          </section>

          {/* 3. Verb Forms & Key Differences (JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Verb Forms & Key Differences (JLPT N4)</h2>
                <p className="section-header-sub">
                  Review essential N4 verb forms such as potential and volitional, plus compound verbs and transitive vs intransitive pairs. These patterns appear often in reading, listening, and conversation.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4VerbLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4VerbLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4VerbLessons)}
          </section>

          {/* 4. Adjectives (JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Adjectives (JLPT N4)</h2>
                <p className="section-header-sub">
                  Expand your descriptive power with N4-level i-adjectives and na-adjectives. Practice common adjective patterns and review kanji spellings used at this level.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4AdjectiveLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4AdjectiveLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4AdjectiveLessons)}
          </section>

          {/* 5. Kanji for JLPT N4 */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Kanji for JLPT N4</h2>
                <p className="section-header-sub">
                  Build kanji recognition and writing confidence with N4 kanji quizzes, flashcards, and email practice. Study in small sets and review frequently.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4KanjiLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4KanjiLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4KanjiLessons)}
          </section>

          {/* 6. Listening Practice (JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Listening Practice (JLPT N4)</h2>
                <p className="section-header-sub">
                  Improve comprehension with short listening drills designed for the JLPT N4 level. Practice regularly to build speed, accuracy, and real-life understanding.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4ListeningLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4ListeningLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4ListeningLessons)}
          </section>

          {/* 7. Essential Practice Topics & Nuance Mastery (JLPT N4) */}
          <section className="learn-section">
            <div className="section-header-row">
              <div>
                <h2>Essential Practice Topics & Nuance Mastery (JLPT N4)</h2>
                <p className="section-header-sub">
                  Strengthen high-frequency patterns, connect grammar points naturally, and master vital nuance distinctions. These targeted practice topics bridge foundational grammar into fluent conversational understanding.
                </p>
              </div>
              <div className="curriculum-progress-badge">
                <AiOutlineTrophy size={16} />
                <span>
                  {n4PracticeLessons.filter((l) => lessonProgress[l.id]?.completed).length} / {n4PracticeLessons.length} Completed
                </span>
              </div>
            </div>
            {renderN4Cards(n4PracticeLessons)}
          </section>

          {/* Quick Jump — N4 */}
          <section className="learn-section">
            <h2>Quick Topic Jump</h2>
            <div className="section-grid">
              <div className="topic-card">
                <h3>Giving & Receiving</h3>
                <p>て-form giving/receiving verbs: あげる, もらう, くれる.</p>
                <Link to="/learn/n4/te-agemasu-moraimasu-kuremasu" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Conditional Forms</h3>
                <p>Four conditional structures: たら, ば, と, なら.</p>
                <Link to="/learn/n4/tara" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Passive & Causative</h3>
                <p>受身・使役 — describe actions done to or caused for others.</p>
                <Link to="/learn/n4/passive" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>Potential Form</h3>
                <p>Express what you can or cannot do in Japanese.</p>
                <Link to="/learn/n4/potential-form" className="btn-primary">Start Lesson</Link>
              </div>
              <div className="topic-card">
                <h3>N4 Kanji Quiz</h3>
                <p>100 essential N4 Kanji reading quiz across 10 structured sets.</p>
                <Link to="/learn/n4/n4-kanji-quiz-100" className="btn-primary">Start Quiz</Link>
              </div>
              <div className="topic-card">
                <h3>Listening Practice</h3>
                <p>Graded N4 listening drills with native speakers.</p>
                <Link to="/learn/n4/n4-listening-module-1" className="btn-primary">Start Listening</Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* Placeholder for N3 - N1 */
        <div className="learn-sections">
          <div className="jlpt-placeholder-hero">
            <div>
              <div className="jlpt-placeholder-title">{placeholderData[activeLevel].title}</div>
              <p className="jlpt-placeholder-sub">{placeholderData[activeLevel].subtitle}</p>
            </div>
            <div className="jlpt-status-tag">
              <span>Under Active Development</span>
            </div>
          </div>

          <section className="learn-section">
            <h2>Planned Curriculum Modules</h2>
            <div className="jlpt-preview-grid">
              {placeholderData[activeLevel].sections.map((sec, idx) => (
                <div key={idx} className="jlpt-preview-card">
                  <span className="jlpt-preview-badge">Module 0{idx + 1}</span>
                  <h4>{sec.title}</h4>
                  <p>{sec.desc}</p>
                  <span className="jlpt-status-tag" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}


// Reporting Page
function ReportingPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (window.db?.getStats) {
      window.db.getStats().then(setStats).catch(() => {});
    }
  }, []);

  return (
    <div className="page-content">
      <h1>Performance & Mastery Reporting</h1>
      <p>Review comprehensive statistics on your Japanese handwriting performance.</p>

      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '20px' }}>
          <div className="dashboard-section-card">
            <h3>Total Characters Tracked</h3>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#1e3a8a', marginTop: '8px' }}>
              {stats.totalTracked}
            </div>
          </div>
          <div className="dashboard-section-card">
            <h3>Total Reviews Completed</h3>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#2563eb', marginTop: '8px' }}>
              {stats.totalReviews}
            </div>
          </div>
          <div className="dashboard-section-card">
            <h3>Overall AI Grading Accuracy</h3>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', marginTop: '8px' }}>
              {stats.accuracy}%
            </div>
          </div>
          <div className="dashboard-section-card">
            <h3>Current Study Streak</h3>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#ea580c', marginTop: '8px' }}>
              {stats.currentStreak} Days
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Settings Page with SQLite Persistence
function SettingsPage({ settings, onUpdateSetting, onResetProgress }) {
  const { darkMode, appearance, accent, defaultPracticeMode, showNotifications, autoLaunch, showRomaji = true } = settings;
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleConfirmReset = async () => {
    setIsResetting(true);
    try {
      if (onResetProgress) {
        await onResetProgress();
      }
      setResetSuccess(true);
      setShowConfirmReset(false);
      setTimeout(() => setResetSuccess(false), 5000);
    } catch (err) {
      console.error('Reset error:', err);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="page-content settings-page">
      <div className="settings-header">
        <h1>Settings & Preferences</h1>
        <p>Configure app appearance, theme, and persistent learning defaults.</p>
      </div>

      <section className="settings-card">
        <h2>Theme & Appearance</h2>
        <p>Customize the look and feel of Hirakanjee.</p>

        <div className="setting-row">
          <label className="setting-label">Dark Mode</label>
          <div className="setting-control">
            <button
              type="button"
              className={`toggle-pill ${darkMode ? 'active' : ''}`}
              onClick={() => onUpdateSetting('darkMode', !darkMode)}
            >
              {darkMode ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        <div className="setting-row">
          <label className="setting-label">Appearance Style</label>
          <select
            value={appearance}
            onChange={(e) => onUpdateSetting('appearance', e.target.value)}
            className="setting-select"
          >
            <option value="classic">Classic</option>
            <option value="compact">Compact</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>

        <div className="setting-row">
          <label className="setting-label">Accent Color</label>
          <div className="accent-grid">
            {Object.entries(accentMap).map(([key, color]) => (
              <button
                key={key}
                className={`accent-swatch ${accent === key ? 'selected' : ''}`}
                style={{ background: color }}
                onClick={() => onUpdateSetting('accent', key)}
                aria-label={`Accent ${key}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="settings-card">
        <h2>Learning & Desktop Preferences</h2>
        <p>Defaults for canvas practice and desktop features.</p>

        <div className="setting-row">
          <label className="setting-label">Default Practice Mode</label>
          <select
            value={defaultPracticeMode}
            onChange={(e) => onUpdateSetting('defaultPracticeMode', e.target.value)}
            className="setting-select"
          >
            <option value="hiragana">Hiragana</option>
            <option value="katakana">Katakana</option>
            <option value="kanji">Kanji (JLPT N5)</option>
          </select>
        </div>

        <div className="setting-row">
          <label className="setting-label">Desktop Notifications</label>
          <button
            type="button"
            className={`toggle-pill ${showNotifications ? 'active' : ''}`}
            onClick={() => onUpdateSetting('showNotifications', !showNotifications)}
          >
            {showNotifications ? 'On' : 'Off'}
          </button>
        </div>

        <div className="setting-row">
          <label className="setting-label">Auto-launch on Startup</label>
          <button
            type="button"
            className={`toggle-pill ${autoLaunch ? 'active' : ''}`}
            onClick={() => onUpdateSetting('autoLaunch', !autoLaunch)}
          >
            {autoLaunch ? 'On' : 'Off'}
          </button>
        </div>

        <div className="setting-row">
          <div>
            <label className="setting-label">Show Romaji in Quizzes</label>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Display pronunciation reading guide under Japanese sentences
            </div>
          </div>
          <button
            type="button"
            className={`toggle-pill ${showRomaji ? 'active' : ''}`}
            onClick={() => onUpdateSetting('showRomaji', !showRomaji)}
          >
            {showRomaji ? 'On' : 'Off'}
          </button>
        </div>
      </section>

      <section className="settings-card settings-danger-card">
        <div className="danger-header">
          <h2>Data Management</h2>
          <span className="danger-badge">Caution</span>
        </div>
        <p>Manage your local learning progress, quiz history, and SRS practice records.</p>

        <div className="setting-row" style={{ alignItems: 'flex-start' }}>
          <div>
            <label className="setting-label" style={{ color: 'var(--text-primary)' }}>
              Reset All Learning Progress
            </label>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px', maxWidth: '460px', lineHeight: '1.5' }}>
              Clears all JLPT N5 lesson completions, quiz scores, character SRS mastery, and practice streaks.
              Your visual settings (dark mode, theme accents, and romaji toggles) will be preserved.
            </div>
          </div>

          <div className="setting-control">
            {!showConfirmReset ? (
              <button
                type="button"
                className="btn-danger"
                onClick={() => setShowConfirmReset(true)}
              >
                Reset Progress
              </button>
            ) : (
              <div className="reset-confirm-box">
                <span className="reset-confirm-warning">Are you sure? This cannot be undone.</span>
                <div className="reset-confirm-actions">
                  <button
                    type="button"
                    className="btn-danger-confirm"
                    onClick={handleConfirmReset}
                    disabled={isResetting}
                  >
                    {isResetting ? 'Resetting...' : 'Yes, Reset All'}
                  </button>
                  <button
                    type="button"
                    className="btn-secondary-sm"
                    onClick={() => setShowConfirmReset(false)}
                    disabled={isResetting}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {resetSuccess && (
          <div className="reset-success-alert">
            ✓ All learning progress has been successfully reset.
          </div>
        )}
      </section>
    </div>
  );
}

// Main App Router Component
function App() {
  const [settings, setSettings] = useState(() => {
    const initial = {
      darkMode: false,
      appearance: 'classic',
      accent: 'orange',
      defaultPracticeMode: 'hiragana',
      showNotifications: true,
      autoLaunch: false,
      showRomaji: true,
    };
    try {
      for (const k of Object.keys(initial)) {
        const cached = localStorage.getItem(`hirakanjee_${k}`);
        if (cached !== null) {
          initial[k] = JSON.parse(cached);
        }
      }
    } catch (e) {}
    return initial;
  });

  // Load persistent settings from SQLite database on app startup
  useEffect(() => {
    if (window.db?.getSettings) {
      window.db.getSettings().then((saved) => {
        if (saved) {
          setSettings((prev) => {
            const next = { ...prev };
            if (typeof saved.darkMode === 'boolean') next.darkMode = saved.darkMode;
            if (saved.appearance) next.appearance = saved.appearance;
            if (saved.accent) next.accent = saved.accent;
            if (saved.defaultPracticeMode) next.defaultPracticeMode = saved.defaultPracticeMode;
            if (saved.showNotifications !== undefined) next.showNotifications = saved.showNotifications;
            if (saved.autoLaunch !== undefined) next.autoLaunch = saved.autoLaunch;
            if (saved.showRomaji !== undefined) next.showRomaji = saved.showRomaji;

            // Cache to localStorage for instant startup next time
            try {
              for (const [k, v] of Object.entries(next)) {
                localStorage.setItem(`hirakanjee_${k}`, JSON.stringify(v));
              }
            } catch (e) {}

            return next;
          });
        }
      }).catch(() => {});
    }
  }, []);

  // Globally sync theme-dark class on document body
  useEffect(() => {
    document.body.classList.toggle('theme-dark', settings.darkMode);
  }, [settings.darkMode]);

  // Globally sync accent color
  useEffect(() => {
    const color = accentMap[settings.accent] || '#ea580c';
    document.documentElement.style.setProperty('--accent-color', color);
    document.documentElement.style.setProperty('--accent-blue', color);
  }, [settings.accent]);

  // Globally sync appearance attribute
  useEffect(() => {
    document.body.setAttribute('data-appearance', settings.appearance);
  }, [settings.appearance]);

  const handleUpdateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    try {
      localStorage.setItem(`hirakanjee_${key}`, JSON.stringify(value));
    } catch (e) {}
    if (window.db?.saveSetting) {
      window.db.saveSetting(key, value).catch(() => {});
    }
  };

  const handleResetProgress = async () => {
    try {
      if (window.db?.resetAllProgress) {
        await window.db.resetAllProgress();
      }
      // Remove cached progress in localStorage
      const keys = [
        'hirakanjee_kanji_mastery',
        'hirakanjee_lesson_progress',
        'hirakanjee_practice_logs',
        'hirakanjee_stats',
      ];
      keys.forEach((k) => {
        try {
          localStorage.removeItem(k);
        } catch (e) {}
      });

      // Refresh lesson progress in active state
      if (window.db?.getLessonProgress) {
        const prog = await window.db.getLessonProgress();
        setLessonProgress(prog || {});
      } else {
        setLessonProgress({});
      }
      return true;
    } catch (err) {
      console.error('Failed to reset progress:', err);
      return false;
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/n5/:lessonId" element={<N5LessonPage settings={settings} />} />
            <Route path="/learn/n4/:lessonId" element={<N5LessonPage settings={settings} />} />
            <Route path="/learn/hiragana" element={<HiraganaPage />} />
            <Route path="/learn/katakana" element={<KatakanaPage />} />
            <Route path="/learn/kanji" element={<KanjiPage />} />
            <Route path="/learn/basic-sentences" element={<Navigate to="/learn/n5/basic-structure" replace />} />
            <Route path="/learn/adjectives" element={<Navigate to="/learn/n5/adj-i-and-na-104" replace />} />
            <Route path="/learn/verbs" element={<Navigate to="/learn/n5/verb-movement" replace />} />
            <Route path="/learn/particles" element={<Navigate to="/learn/n5/part-wa-ga" replace />} />
            <Route path="/learn/numbers-time" element={<Navigate to="/learn/n5/time-calendar" replace />} />
            <Route path="/learn/daily-life" element={<Navigate to="/learn/n5/vocab-802-core" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/practice" element={<KanjiDrawingPad defaultScript={settings.defaultPracticeMode} />} />
            <Route path="/learn/practice/:script/:char" element={<CharacterPracticePage />} />
            <Route path="/folders" element={<Navigate to="/dashboard" replace />} />
            <Route path="/folders/*" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/settings"
              element={
                <SettingsPage
                  settings={settings}
                  onUpdateSetting={handleUpdateSetting}
                  onResetProgress={handleResetProgress}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;