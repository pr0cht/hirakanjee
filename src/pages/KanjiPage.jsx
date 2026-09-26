import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineArrowLeft,
  AiOutlineSound,
  AiOutlineSearch,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineTrophy,
  AiOutlineLock,
} from 'react-icons/ai';
import { kanjiAllData, KANJI_AREAS } from '../data/kanjiAllData';
import { speakJapanese } from '../utils/audio';
import { getStoredProgression, isKanjiUnlocked } from '../utils/progression';
import './KanjiPage.css';

const LEVELS = [
  { id: 'All', label: 'All Levels' },
  { id: 'N5', label: 'JLPT N5' },
  { id: 'N4', label: 'JLPT N4' },
];

export default function KanjiPage() {
  const [progVer, setProgVer] = useState(0);
  const progData = useMemo(() => getStoredProgression(), [progVer]);

  useEffect(() => {
    const onProgUpdate = () => setProgVer((v) => v + 1);
    window.addEventListener('progressionUpdated', onProgUpdate);
    window.addEventListener('hirakanjee_global_reset', onProgUpdate);
    return () => {
      window.removeEventListener('progressionUpdated', onProgUpdate);
      window.removeEventListener('hirakanjee_global_reset', onProgUpdate);
    };
  }, []);

  const isN5Unlocked = useMemo(() => isKanjiUnlocked('N5', progData), [progData]);
  const isN4Unlocked = useMemo(() => isKanjiUnlocked('N4', progData), [progData]);

  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReadings, setShowReadings] = useState(true);

  // Compute available categories based on active level (or all)
  const availableCategories = useMemo(() => {
    return KANJI_AREAS;
  }, []);

  const filteredKanji = useMemo(() => {
    return kanjiAllData.filter((k) => {
      // Level filter
      if (selectedLevel !== 'All' && k.level !== selectedLevel) {
        return false;
      }

      // Category / Area filter
      if (selectedCategory !== 'All' && k.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;

      const matchChar = k.char.includes(query);
      const matchMeaning = k.meaning?.toLowerCase().includes(query);
      const matchOnyomi = k.onyomi?.toLowerCase().includes(query);
      const matchKunyomi = k.kunyomi?.toLowerCase().includes(query);
      const matchCategory = k.category?.toLowerCase().includes(query);
      const matchExample = k.examples?.some(
        (ex) => ex.word?.includes(query) || ex.reading?.includes(query) || ex.meaning?.toLowerCase().includes(query)
      );

      return matchChar || matchMeaning || matchOnyomi || matchKunyomi || matchCategory || matchExample;
    });
  }, [selectedLevel, selectedCategory, searchQuery]);

  // Overall counts for stats pills
  const stats = useMemo(() => {
    const n5Count = kanjiAllData.filter((k) => k.level === 'N5').length;
    const n4Count = kanjiAllData.filter((k) => k.level === 'N4').length;
    return { n5Count, n4Count, total: kanjiAllData.length };
  }, []);

  const handleAudio = (e, kanji) => {
    e.stopPropagation();
    e.preventDefault();
    // Speak kunyomi or character
    speakJapanese(kanji.kunyomi?.split(',')[0]?.trim() || kanji.char);
  };

  return (
    <div className="page-content kanji-page-container">
      {/* Header */}
      <div className="kanji-header">
        <div>
          <div className="kanji-title-row">
            <Link to="/learn" className="back-link" aria-label="Return to Learn">
              <AiOutlineArrowLeft className="back-icon" />
            </Link>
            <h1>Kanji</h1>
          </div>
          <p className="kanji-subtitle">
            Master essential JLPT N5 and N4 Kanji categorized by level and area with readings, stroke counts, and handwriting practice.
          </p>
        </div>

        <div className="kanji-stats-badge">
          <span className="stat-pill stat-pill-total">
            {filteredKanji.length} of {stats.total} Characters
          </span>
          <span className={`stat-pill ${isN5Unlocked ? 'stat-pill-unlocked' : 'stat-pill-locked'}`}>
            {isN5Unlocked ? '✓ N5 Unlocked' : '🔒 N5 Locked'}
          </span>
          <span className={`stat-pill ${isN4Unlocked ? 'stat-pill-unlocked' : 'stat-pill-locked'}`}>
            {isN4Unlocked ? '✓ N4 Unlocked' : '🔒 N4 Locked'}
          </span>
        </div>
      </div>

      {/* Level Filter Bar */}
      <div className="kanji-level-tabs">
        {LEVELS.map((lvl) => {
          const count =
            lvl.id === 'All'
              ? stats.total
              : lvl.id === 'N5'
              ? stats.n5Count
              : stats.n4Count;
          return (
            <button
              key={lvl.id}
              type="button"
              className={`level-tab-btn ${selectedLevel === lvl.id ? 'active' : ''}`}
              onClick={() => setSelectedLevel(lvl.id)}
            >
              <span>{lvl.label}</span>
              <span className="level-count-pill">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Controls: Search, Toggle Readings, and Area Categories */}
      <div className="kanji-controls">
        <div className="kanji-search-bar">
          <div className="search-input-wrapper">
            <AiOutlineSearch className="search-icon-inline" />
            <input
              type="text"
              className="kanji-search-input"
              placeholder="Search by Kanji, English meaning, reading, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="button"
            className={`kanji-toggle-btn ${showReadings ? 'active' : ''}`}
            onClick={() => setShowReadings(!showReadings)}
            title="Toggle readings visibility for flashcard practice"
          >
            {showReadings ? <AiOutlineEye size={16} /> : <AiOutlineEyeInvisible size={16} />}
            <span>{showReadings ? 'Hide Readings' : 'Show Readings'}</span>
          </button>
        </div>

        {/* Semantic Area Categories */}
        <div className="kanji-categories-wrapper">
          <span className="categories-label">Area:</span>
          <div className="kanji-categories">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kanji Grid or Empty State */}
      {filteredKanji.length === 0 ? (
        <div className="empty-state">
          <p>No kanji found matching "{searchQuery}".</p>
          <button
            type="button"
            className="btn-secondary-sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedLevel('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="kanji-grid">
          {filteredKanji.map((kanji) => {
            const isLocked = (kanji.level === 'N5' && !isN5Unlocked) || (kanji.level === 'N4' && !isN4Unlocked);

            return (
              <div key={kanji.char} className={`kanji-card ${isLocked ? 'is-locked' : ''}`}>
                <div className="kanji-card-top">
                  <span className={`level-pill-badge level-${kanji.level.toLowerCase()}`}>
                    {kanji.level}
                  </span>
                  <span className="stroke-badge">{kanji.strokes} strokes</span>
                  <button
                    type="button"
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
                <div className="kanji-area-tag">{kanji.category}</div>

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

                {isLocked ? (
                  <button
                    type="button"
                    className="kanji-practice-btn is-locked"
                    title={`Locked. Unlock the ${kanji.level} Kanji lesson on the Learn page to practice.`}
                    disabled
                  >
                    <AiOutlineLock size={14} /> Locked
                  </button>
                ) : (
                  <Link
                    to={`/learn/practice/kanji/${encodeURIComponent(kanji.char)}`}
                    className="kanji-practice-btn"
                  >
                    Practice Writing
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
