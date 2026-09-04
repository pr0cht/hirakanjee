import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import KanjiDrawingPad from './components/KanjiDrawingPad';
import HiraganaPage from './pages/HiraganaPage';
import KatakanaPage from './pages/KatakanaPage';
import KanjiPage from './pages/KanjiPage';
import CharacterPracticePage from './pages/CharacterPracticePage';
import N5LessonPage from './pages/N5LessonPage';
import { n5CoreLessons } from './data/n5CoreLessonsData';
import Placeholders, { PlaceholderLesson } from './pages/Placeholders';
import {
  AiOutlineFire,
  AiOutlineCheckCircle,
  AiOutlineBook,
  AiOutlineArrowRight,
  AiOutlineTrophy,
} from 'react-icons/ai';
import './App.css';

const accentMap = {
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
          <Link to="/learn" className="btn-primary" style={{ padding: '12px 20px', borderRadius: '10px' }}>
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
              to={`/learn/practice/${srsQueue[0].script}/${encodeURIComponent(srsQueue[0].char)}`}
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
                  to={`/learn/practice/${item.script}/${encodeURIComponent(item.char)}`}
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

  useEffect(() => {
    if (window.db?.getLessonProgress) {
      window.db.getLessonProgress().then((prog) => {
        if (prog) setLessonProgress(prog);
      }).catch(() => {});
    }
  }, []);

  const completedCount = Object.values(lessonProgress).filter((p) => p.completed).length;

  return (
    <div className="page-content">
      <h1>Learn Japanese - N5 Level</h1>
      <p>Master the basics of Japanese with structured lessons, stroke animations, grammar guides, and interactive quizzes.</p>

      <div className="learn-sections">
        {/* Section 1: Core Requirements (from mlcjapanese.co.jp) */}
        <section className="learn-section">
          <div className="section-header-row">
            <div>
              <h2>1. Core Requirements</h2>
              <p className="section-header-sub">
                12 Essential JLPT N5 grammar rules, structures, vocabulary, and interactive knowledge quizzes referenced from MLC Japanese (mlcjapanese.co.jp).
              </p>
            </div>
            <div className="curriculum-progress-badge">
              <AiOutlineTrophy size={16} />
              <span>{completedCount} / {n5CoreLessons.length} Completed</span>
            </div>
          </div>

          <div className="n5-core-grid">
            {n5CoreLessons.map((lesson) => {
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

        {/* Section 2: Basic Scripts */}
        <section className="learn-section">
          <h2>Basic Scripts</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Hiragana</h3>
              <p>Learn the fundamental Japanese syllabary used for native words and grammatical markers.</p>
              <Link to="/learn/hiragana" className="btn-primary">Start Learning</Link>
            </div>
            <div className="topic-card">
              <h3>Katakana</h3>
              <p>Master the syllabary used for loanwords, foreign names, and onomatopoeia.</p>
              <Link to="/learn/katakana" className="btn-primary">Start Learning</Link>
            </div>
            <div className="topic-card">
              <h3>JLPT N5 Kanji</h3>
              <p>Master all 86 basic kanji essential for the N5 level with On/Kun readings.</p>
              <Link to="/learn/kanji" className="btn-primary">Start Learning</Link>
            </div>
          </div>
        </section>

        {/* Section 3: Grammar & Vocabulary */}
        <section className="learn-section">
          <h2>Grammar & Vocabulary</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Basic Sentences</h3>
              <p>Learn to construct simple sentences, topic-comment patterns, and greetings.</p>
              <Link to="/learn/basic-sentences" className="btn-primary">Start Lesson</Link>
            </div>
            <div className="topic-card">
              <h3>Particles (は, が, を, に, で)</h3>
              <p>Understand key grammatical markers that tie sentences together.</p>
              <Link to="/learn/particles" className="btn-primary">Start Lesson</Link>
            </div>
            <div className="topic-card">
              <h3>Adjectives (い & な)</h3>
              <p>Learn affirmative, negative, and past conjugations of descriptive adjectives.</p>
              <Link to="/learn/adjectives" className="btn-primary">Start Lesson</Link>
            </div>
            <div className="topic-card">
              <h3>Verbs</h3>
              <p>Master Godan, Ichidan, and Irregular verbs with polite ます and て forms.</p>
              <Link to="/learn/verbs" className="btn-primary">Start Lesson</Link>
            </div>
          </div>
        </section>

        {/* Section 4: N5 Topics */}
        <section className="learn-section">
          <h2>N5 Topics</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Numbers & Time</h3>
              <p>Counting, dates, telling time in Japanese, and calendar units.</p>
              <Link to="/learn/numbers-time" className="btn-primary">Start Lesson</Link>
            </div>
            <div className="topic-card">
              <h3>Daily Life</h3>
              <p>Routines, hobbies, and everyday conversational phrases.</p>
              <Link to="/learn/daily-life" className="btn-primary">Start Lesson</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FoldersPage() {
  return (
    <div className="page-content">
      <h1>Folders & Study Lists</h1>
      <p>Organize custom character lists for targeted study sessions.</p>
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
function SettingsPage({ settings, onUpdateSetting }) {
  const { darkMode, appearance, accent, defaultPracticeMode, showNotifications, autoLaunch } = settings;

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
      accent: 'blue',
      defaultPracticeMode: 'hiragana',
      showNotifications: true,
      autoLaunch: false,
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
    const color = accentMap[settings.accent] || '#3b82f6';
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

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/n5/:lessonId" element={<N5LessonPage />} />
            <Route path="/learn/hiragana" element={<HiraganaPage />} />
            <Route path="/learn/katakana" element={<KatakanaPage />} />
            <Route path="/learn/kanji" element={<KanjiPage />} />
            <Route path="/learn/basic-sentences" element={<PlaceholderLesson title="Basic Sentences" />} />
            <Route path="/learn/adjectives" element={<PlaceholderLesson title="Adjectives (い-adjectives & な-adjectives)" />} />
            <Route path="/learn/verbs" element={<PlaceholderLesson title="Verbs" />} />
            <Route path="/learn/particles" element={<PlaceholderLesson title="Particles" />} />
            <Route path="/learn/numbers-time" element={<PlaceholderLesson title="Numbers & Time" />} />
            <Route path="/learn/daily-life" element={<PlaceholderLesson title="Daily Life" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/practice" element={<KanjiDrawingPad defaultScript={settings.defaultPracticeMode} />} />
            <Route path="/learn/practice/:script/:char" element={<CharacterPracticePage />} />
            <Route path="/folders" element={<FoldersPage />} />
            <Route path="/folders/sample" element={<FoldersPage />} />
            <Route
              path="/settings"
              element={<SettingsPage settings={settings} onUpdateSetting={handleUpdateSetting} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;