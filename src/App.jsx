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
  return (
    <div className="page-content">
      <h1>Settings</h1>
      <p>Configure your preferences here</p>
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