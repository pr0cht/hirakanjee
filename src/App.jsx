import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import KanjiDrawingPad from './components/KanjiDrawingPad';
import { Link } from 'react-router-dom';
import HiraganaPage from './pages/HiraganaPage';
import KatakanaPage from './pages/KatakanaPage';
import KanjiPage from './pages/KanjiPage';
import CharacterPracticePage from './pages/CharacterPracticePage';
import Placeholders, { PlaceholderLesson } from './pages/Placeholders';
import './App.css';

const accentMap = {
  blue: '#3b82f6',
  green: '#22c55e',
  purple: '#8b5cf6',
  charcoal: '#4b5563',
};

function getPreferredSystemTheme() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Page Components
function HomePage() {
  const [pingResponse, setPingResponse] = useState('');

  useEffect(() => {
    const func = async () => {
      const response = await window.versions.ping();
      setPingResponse(response);
    };
    func();
  }, []);
  return (
    <div className="page-content">
      <h1>Welcome</h1>
      <p>App status: {pingResponse}</p>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <p>Dashboard content goes here</p>
    </div>
  );
}

function LearnPage() {
  return (
    <div className="page-content">
      <h1>Learn Japanese - N5 Level</h1>
      <p>Master the basics of Japanese with structured lessons and practice.</p>

      <div className="learn-sections">
        <section className="learn-section">
          <h2>Basic Scripts</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Hiragana</h3>
              <p>Learn the fundamental Japanese syllabary used for native words.</p>
              <Link to="/learn/hiragana" className="btn-primary">Start Learning</Link>
            </div>
            <div className="topic-card">
              <h3>Katakana</h3>
              <p>Master the script for foreign words and onomatopoeia.</p>
              <Link to="/learn/katakana" className="btn-primary">Start Learning</Link>
            </div>
            <div className="topic-card">
              <h3>Kanji</h3>
              <p>Begin with basic kanji characters essential for N5 level.</p>
              <Link to="/learn/kanji" className="btn-primary">Start Learning</Link>
            </div>
          </div>
        </section>

        <section className="learn-section">
          <h2>Grammar & Vocabulary</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Basic Sentences</h3>
              <p>Learn to construct simple sentences and greetings.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Adjectives (い-adjectives & な-adjectives)</h3>
              <p>Understand how to describe nouns and states.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Verbs</h3>
              <p>Master basic verb conjugations and usage.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Particles</h3>
              <p>Learn essential particles like は, が, を, に, で.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
          </div>
        </section>

        <section className="learn-section">
          <h2>N5 Topics</h2>
          <div className="section-grid">
            <div className="topic-card">
              <h3>Numbers & Time</h3>
              <p>Counting, dates, and telling time in Japanese.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Family & Relationships</h3>
              <p>Vocabulary for family members and social relationships.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Food & Shopping</h3>
              <p>Common food items and shopping expressions.</p>
              <button className="btn-primary">Start Learning</button>
            </div>
            <div className="topic-card">
              <h3>Daily Life</h3>
              <p>Routines, hobbies, and everyday conversations.</p>
              <button className="btn-primary">Start Learning</button>
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
      <h1>Folders</h1>
      <p>Manage your folders here</p>
    </div>
  );
}

function ReportingPage() {
  return (
    <div className="page-content">
      <h1>Reporting</h1>
      <p>View your reports here</p>
    </div>
  );
}

function SettingsPage() {
  const [darkMode, setDarkMode] = useState(getPreferredSystemTheme() === 'dark');
  const [appearance, setAppearance] = useState('classic');
  const [accent, setAccent] = useState('blue');
  const [showNotifications, setShowNotifications] = useState(true);
  const [autoLaunch, setAutoLaunch] = useState(false);
  const [defaultPracticeMode, setDefaultPracticeMode] = useState('hiragana');

  useEffect(() => {
    const bodyClass = document.body.classList;
    bodyClass.toggle('theme-dark', darkMode);
  }, [darkMode]);

  return (
    <div className="page-content settings-page">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Choose the app appearance and desktop preferences.</p>
      </div>

      <section className="settings-card">
        <h2>Theme</h2>
        <p>Toggle light and dark mode, and choose how the app looks.</p>

        <div className="setting-row">
          <label className="setting-label">Dark Mode</label>
          <div className="setting-control">
            <button
              className={`toggle-pill ${darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode((value) => !value)}
            >
              {darkMode ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        <div className="setting-row">
          <label className="setting-label">Appearance</label>
          <select
            value={appearance}
            onChange={(event) => setAppearance(event.target.value)}
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
                onClick={() => setAccent(key)}
                aria-label={`Accent ${key}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="settings-card">
        <h2>Desktop Preferences</h2>
        <p>These controls are placeholders for desktop-specific app features.</p>

        <div className="setting-row">
          <label className="setting-label">Auto-launch on startup</label>
          <button
            className={`toggle-pill ${autoLaunch ? 'active' : ''}`}
            onClick={() => setAutoLaunch((value) => !value)}
          >
            {autoLaunch ? 'On' : 'Off'}
          </button>
        </div>

        <div className="setting-row">
          <label className="setting-label">Show desktop notifications</label>
          <button
            className={`toggle-pill ${showNotifications ? 'active' : ''}`}
            onClick={() => setShowNotifications((value) => !value)}
          >
            {showNotifications ? 'On' : 'Off'}
          </button>
        </div>

        <div className="setting-row">
          <label className="setting-label">Default Practice Mode</label>
          <select
            value={defaultPracticeMode}
            onChange={(event) => setDefaultPracticeMode(event.target.value)}
            className="setting-select"
          >
            <option value="hiragana">Hiragana</option>
            <option value="katakana">Katakana</option>
            <option value="kanji">Kanji</option>
          </select>
        </div>
      </section>

      <section className="settings-card settings-note">
        <h2>Note</h2>
        <p>
          These settings are currently placeholders. They show how desktop features like theme, appearance,
          startup launch, notifications, and default practice mode can be surfaced in the app.
        </p>
      </section>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/hiragana" element={<HiraganaPage />} />
            <Route path="/learn/katakana" element={<KatakanaPage />} />
            <Route path="/learn/kanji" element={<KanjiPage />} />
            <Route path="/learn/basic-sentences" element={<PlaceholderLesson title="Basic Sentences" />} />
            <Route path="/learn/adjectives" element={<PlaceholderLesson title="Adjectives (い-adjectives & な-adjectives)" />} />
            <Route path="/learn/verbs" element={<PlaceholderLesson title="Verbs" />} />
            <Route path="/learn/particles" element={<PlaceholderLesson title="Particles" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/practice" element={<KanjiDrawingPad />} />
            <Route path="/learn/practice/:script/:char" element={<CharacterPracticePage />} />
            <Route path="/folders" element={<FoldersPage />} />
            <Route path="/folders/sample" element={<FoldersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;