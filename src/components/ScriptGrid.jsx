import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ScriptGrid.css';

function CharBlock({ char, romaji, style, dataSpan, onClick }) {
  return (
    <div
      className="char-block"
      style={style}
      data-span={dataSpan}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick && onClick(); }}
    >
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

  const playAudio = (text) => {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ja-JP';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="script-page">
      {sections.map((sec) => (
        <section key={sec.title} className="script-section">
          <h3>{sec.title}</h3>
          <div className="script-grid">
            {sec.items.map((it, idx) => {
              const span = computeSpan(it.char);
              return (
                <CharBlock
                  key={idx}
                  char={it.char}
                  romaji={it.romaji}
                  dataSpan={span}
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
              <h2 style={{margin:0}}>{selected.char} {selected.romaji ? `(${selected.romaji})` : ''}</h2>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-large-char">{selected.char}</div>
              <div style={{marginTop:12}}>
                <button onClick={() => playAudio(selected.char)} className="modal-btn">Play Audio</button>
                <button onClick={() => setShowStroke((s) => !s)} className="modal-btn">{showStroke ? 'Hide' : 'Show'} Stroke Order</button>
                <Link to={`/learn/practice/${scriptName}/${encodeURIComponent(selected.char)}`} className="modal-btn practice-link">Practice</Link>
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
