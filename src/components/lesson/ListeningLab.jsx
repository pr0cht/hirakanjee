import React, { useState } from 'react';
import { AiOutlineSound, AiOutlinePlayCircle } from 'react-icons/ai';

export default function ListeningLab({
  tracks = [],
  selectedTrackId,
  onSelectTrack,
  shouldShowRomaji = false,
  onPlayAudio,
}) {
  const [internalSelectedId, setInternalSelectedId] = useState(tracks[0]?.id || 'track-1');
  const activeId = selectedTrackId !== undefined ? selectedTrackId : internalSelectedId;
  const setActiveId = onSelectTrack || setInternalSelectedId;

  const activeTrack = tracks.find((t) => t.id === activeId) || tracks[0] || null;

  return (
    <div className="listening-mastery-lab-section">
      <div className="checklist-hero-header">
        <div className="checklist-header-title">
          <h2>JLPT N5 Listening Dialogue Lab & Practice Tracks</h2>
          <p>
            Listen to authentic native Japanese conversations covering daily transit, shopping, meetings, and the 4 core Te-form patterns. Practice comprehension and shadowing with synchronized text.
          </p>
        </div>
      </div>

      {/* Track Selector Tabs */}
      <div className="listening-track-tabs-bar">
        {tracks.map((tr) => {
          const isActive = activeId === tr.id;
          return (
            <button
              key={tr.id}
              type="button"
              className={`listening-track-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveId(tr.id)}
            >
              <span className="track-btn-badge">{tr.level}</span>
              <span className="track-btn-title">{tr.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Track Player Box */}
      {activeTrack && (
        <div className="listening-active-track-box">
          <div className="track-box-header">
            <div>
              <div className="track-level-tag">{activeTrack.level}</div>
              <h3 className="track-name">{activeTrack.title}</h3>
              <p className="track-desc">{activeTrack.scenario}</p>
            </div>
            <button
              type="button"
              className="track-play-all-btn"
              onClick={() => {
                const full = activeTrack.dialogue.map((d) => d.text).join(' ');
                if (onPlayAudio) onPlayAudio(full);
              }}
            >
              <AiOutlinePlayCircle size={20} />
              <span>Play Full Audio</span>
            </button>
          </div>

          <div className="dialogue-flow-list">
            {activeTrack.dialogue.map((line, lIdx) => (
              <div key={lIdx} className="dialogue-line-card">
                <div className="dialogue-speaker-pill">{line.speaker}</div>
                <div className="dialogue-text-block">
                  <div className="dialogue-jp">{line.text}</div>
                  {shouldShowRomaji && line.romaji && (
                    <div className="dialogue-romaji">{line.romaji}</div>
                  )}
                  <div className="dialogue-en">{line.en}</div>
                </div>
                <button
                  type="button"
                  className="dialogue-audio-btn"
                  onClick={() => onPlayAudio && onPlayAudio(line.text)}
                  title="Listen to this line"
                >
                  <AiOutlineSound size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
