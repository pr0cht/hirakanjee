import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineSound, AiOutlineSearch, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { kanjiN5Data } from '../data/kanjiN5Data';
import { speakJapanese } from '../utils/audio';
import './KanjiPage.css';

const CATEGORIES = [
  'All',
  'Numbers & Counting',
  'Time & Dates',
  'Nature & Elements',
  'People & Body',
  'Directions & Positions',
  'Daily Life & Actions',
];

export default function KanjiPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReadings, setShowReadings] = useState(true);

  const filteredKanji = useMemo(() => {
    return kanjiN5Data.filter((k) => {
      const matchCategory = selectedCategory === 'All' || k.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchCategory;

      const matchText =
        k.char.includes(query) ||
        k.meaning.toLowerCase().includes(query) ||
        k.onyomi.toLowerCase().includes(query) ||
        k.kunyomi.toLowerCase().includes(query);

      return matchCategory && matchText;
    });
  }, [selectedCategory, searchQuery]);

  const handleAudio = (e, kanji) => {
    e.stopPropagation();
    e.preventDefault();
    // Speak kunyomi or character
    speakJapanese(kanji.kunyomi.split(',')[0].trim() || kanji.char);
  };

  return (
    <div className="page-content kanji-page-container">
      <div className="kanji-header">
        <div>
          <div className="kanji-title-row">
            <Link to="/learn" className="back-link" aria-label="Return to Learn">
              <AiOutlineArrowLeft className="back-icon" />
            </Link>
            <h1>JLPT N5 Kanji</h1>
          </div>
          <p className="kanji-subtitle">Master essential Kanji with readings, meanings, stroke counts, and AI handwriting practice.</p>
        </div>

        <div className="kanji-stats-badge">
          <span className="stat-pill">{kanjiN5Data.length} Characters</span>
          <span className="stat-pill">Level: N5</span>
        </div>
      </div>

      <div className="kanji-controls">
        <div className="kanji-search-bar">
          <input
            type="text"
            className="kanji-search-input"
            placeholder="Search by Kanji, English meaning, or reading..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className={`kanji-toggle-btn ${showReadings ? 'active' : ''}`}
            onClick={() => setShowReadings(!showReadings)}
            title="Toggle readings visibility for flashcard practice"
          >
            {showReadings ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            {showReadings ? 'Hide Readings' : 'Show Readings'}
          </button>
        </div>

        <div className="kanji-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredKanji.length === 0 ? (
        <div className="empty-state">
          <p>No kanji found matching "{searchQuery}".</p>
        </div>
      ) : (
        <div className="kanji-grid">
          {filteredKanji.map((kanji) => (
            <div key={kanji.char} className="kanji-card">
              <div className="kanji-card-top">
                <span className="stroke-badge">{kanji.strokes} strokes</span>
                <button
                  className="audio-btn"
                  onClick={(e) => handleAudio(e, kanji)}
                  title={`Pronounce ${kanji.char}`}
                  aria-label={`Pronounce ${kanji.char}`}
                >
                  <AiOutlineSound size={16} />
                </button>
              </div>

              <div className="kanji-character">{kanji.char}</div>
              <div className="kanji-meaning">{kanji.meaning}</div>

              {showReadings && (
                <div className="kanji-readings">
                  <div className="reading-row">
                    <span className="reading-label">音:</span>
                    <span className="reading-val">{kanji.onyomi || '—'}</span>
                  </div>
                  <div className="reading-row">
                    <span className="reading-label">訓:</span>
                    <span className="reading-val">{kanji.kunyomi || '—'}</span>
                  </div>
                </div>
              )}

              <Link
                to={`/learn/practice/kanji/${encodeURIComponent(kanji.char)}`}
                className="kanji-practice-btn"
              >
                Practice Writing
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
