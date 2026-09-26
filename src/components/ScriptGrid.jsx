import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSound, AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai';
import { speakJapanese } from '../utils/audio';
import './ScriptGrid.css';

function isItemLearned(char, masteryMap) {
  if (!char || !masteryMap) return false;
  const stats = masteryMap[char];
  if (!stats) return false;
  if (stats.learned === true) return true;
  if (typeof stats.mastery === 'number' && stats.mastery >= 60) return true;
  if (typeof stats.srsStage === 'number' && stats.srsStage >= 1) return true;
  if (typeof stats.correctReviews === 'number' && stats.correctReviews > 0) return true;
  return false;
}

function CharBlock({ char, romaji, style, dataSpan, isLearned, onClick }) {
  return (
    <div
      className={`char-block ${isLearned ? 'is-learned' : ''}`}
      style={style}
      data-span={dataSpan}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick && onClick(); }}
      title={isLearned ? `${char} (${romaji || ''}) • Learned` : `${char} (${romaji || ''}) • Click to inspect or practice`}
    >
      {isLearned && (
        <span className="char-learned-badge" title="Learned">
          <AiOutlineCheck size={11} strokeWidth={2.5} />
        </span>
      )}
      <div className="char-main">{char}</div>
      {romaji && <div className="char-romaji">{romaji}</div>}
    </div>
  );
}

function computeSpan(text) {
  if (!text) return 1;
  const len = text.length;
  if (len <= 1) return 1;
  if (len === 2) return 2;
  if (len <= 5) return 3;
  return 4;
}

export default function ScriptGrid({ sections, scriptName = 'hiragana' }) {
  const [selected, setSelected] = useState(null);
  const [showStroke, setShowStroke] = useState(false);
  const [masteryMap, setMasteryMap] = useState({});

  const fetchMastery = useCallback(async () => {
    try {
      if (window.db?.getScriptMastery) {
        const dbData = await window.db.getScriptMastery(scriptName);
        if (dbData && typeof dbData === 'object') {
          setMasteryMap(dbData);
          try {
            localStorage.setItem(`hirakanjee_${scriptName}_mastery`, JSON.stringify(dbData));
          } catch (e) {}
          return;
        }
      }
    } catch (err) {
      console.warn('Error querying DB mastery in ScriptGrid:', err);
    }

    try {
      const local = JSON.parse(localStorage.getItem(`hirakanjee_${scriptName}_mastery`) || '{}');
      setMasteryMap(local);
    } catch (e) {}
  }, [scriptName]);

  useEffect(() => {
    fetchMastery();

    const handleSync = () => {
      fetchMastery();
    };

    window.addEventListener('focus', handleSync);
    window.addEventListener('storage', handleSync);
    window.addEventListener('hirakanjee_global_reset', handleSync);
    return () => {
      window.removeEventListener('focus', handleSync);
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('hirakanjee_global_reset', handleSync);
    };
  }, [fetchMastery]);

  const toggleLearned = async (char) => {
    const currentlyLearned = isItemLearned(char, masteryMap);
    const willBeLearned = !currentlyLearned;

    // Optimistic UI update
    const updated = { ...masteryMap };
    if (willBeLearned) {
      updated[char] = {
        mastery: 100,
        srsStage: 1,
        totalReviews: (updated[char]?.totalReviews || 0) + 1,
        correctReviews: (updated[char]?.correctReviews || 0) + 1,
        learned: true,
        lastPracticedAt: new Date().toISOString(),
      };
    } else {
      delete updated[char];
    }
    setMasteryMap(updated);

    // Save to localStorage
    try {
      localStorage.setItem(`hirakanjee_${scriptName}_mastery`, JSON.stringify(updated));
    } catch (e) {}

    // Save to DB
    try {
      if (window.db?.setCharLearned) {
        await window.db.setCharLearned(scriptName, char, willBeLearned);
      } else if (window.db?.recordReview && willBeLearned) {
        await window.db.recordReview(scriptName, char, 100);
      }
    } catch (err) {
      console.warn('Error toggling character learned in DB:', err);
    }
  };

  const playAudio = (text) => {
    speakJapanese(text);
  };

  // Compute learned totals
  const allItems = useMemo(() => {
    return sections.flatMap((sec) => sec.items || []);
  }, [sections]);

  const learnedCount = useMemo(() => {
    return allItems.filter((it) => isItemLearned(it.char, masteryMap)).length;
  }, [allItems, masteryMap]);

  const learnedPercent = allItems.length > 0 ? Math.round((learnedCount / allItems.length) * 100) : 0;
  const isSelectedLearned = selected ? isItemLearned(selected.char, masteryMap) : false;

  return (
    <div className="script-page">
      {/* Progress & Legend Banner */}
      <div className="script-stats-banner">
        <div className="script-stats-left">
          <div className="script-stats-title">Progress Overview</div>
          <div className="script-stats-count">
            <span className="learned-number">{learnedCount}</span> of {allItems.length} Characters Learned ({learnedPercent}%)
          </div>
          <div className="script-stats-bar-bg">
            <div className="script-stats-bar-fill" style={{ width: `${learnedPercent}%` }} />
          </div>
        </div>

        <div className="script-legend">
          <div className="legend-item">
            <span className="legend-swatch unlearned" />
            <span>To Learn</span>
          </div>
          <div className="legend-item">
            <span className="legend-swatch learned" />
            <span>Learned</span>
          </div>
        </div>
      </div>

      {sections.map((sec) => (
        <section key={sec.title} className="script-section">
          <h3>{sec.title}</h3>
          <div className="script-grid">
            {sec.items.map((it, idx) => {
              const span = computeSpan(it.char);
              const learned = isItemLearned(it.char, masteryMap);
              return (
                <CharBlock
                  key={idx}
                  char={it.char}
                  romaji={it.romaji}
                  dataSpan={span}
                  isLearned={learned}
                  style={{ gridColumn: `span ${span}` }}
                  onClick={() => { setSelected(it); setShowStroke(false); }}
                />
              );
            })}
          </div>
        </section>
      ))}

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ margin: 0 }}>
                  {selected.char} {selected.romaji ? `(${selected.romaji})` : ''}
                </h2>
                {isSelectedLearned ? (
                  <span className="modal-badge-learned">
                    <AiOutlineCheck size={12} style={{ marginRight: 4 }} />
                    Learned
                  </span>
                ) : (
                  <span className="modal-badge-unlearned">To Learn</span>
                )}
              </div>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className={`modal-large-char ${isSelectedLearned ? 'is-learned' : ''}`}>
                {selected.char}
              </div>

              <div className="modal-btn-row">
                <button onClick={() => playAudio(selected.char)} className="modal-btn">
                  <AiOutlineSound size={16} style={{ marginRight: 6 }} />
                  Play Audio
                </button>
                <button onClick={() => setShowStroke((s) => !s)} className="modal-btn">
                  {showStroke ? 'Hide' : 'Show'} Stroke Order
                </button>
                <button
                  onClick={() => toggleLearned(selected.char)}
                  className={`modal-btn ${isSelectedLearned ? 'btn-unlearn' : 'btn-learn'}`}
                >
                  {isSelectedLearned ? 'Mark as To Learn' : '✓ Mark as Learned'}
                </button>
                <Link
                  to={`/learn/practice/${scriptName}/${encodeURIComponent(selected.char)}`}
                  className="modal-btn practice-link"
                >
                  <AiOutlineEdit size={16} style={{ marginRight: 6 }} />
                  Practice Writing
                </Link>
              </div>

              {showStroke && (
                <div className="stroke-placeholder">
                  <p>Stroke order visualization placeholder.</p>
                  <div className="stroke-box">{selected.char}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
