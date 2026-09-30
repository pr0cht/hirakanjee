import React from 'react';
import {
  AiOutlineSound,
  AiOutlinePlayCircle,
  AiOutlineArrowRight,
} from 'react-icons/ai';

/**
 * LessonSections component.
 * Renders the core lesson reading material: formula callouts, content paragraphs,
 * summary tables, example sentences with native audio playback, video drills,
 * and bottom CTA card.
 *
 * @param {Object} props
 * @param {Array} props.normalizedSections
 * @param {boolean} [props.shouldShowRomaji]
 * @param {Object} [props.currentLesson]
 * @param {Function} [props.onPlayAudio]
 * @param {Function} [props.onStartPractice]
 */
export default function LessonSections({
  normalizedSections = [],
  shouldShowRomaji = true,
  currentLesson,
  onPlayAudio,
  onStartPractice,
}) {
  return (
    <>
      {/* YouTube Video Drill Section */}
      {currentLesson?.video && (
        <div className="lesson-video-section">
          <div className="lesson-video-card">
            <div className="lesson-video-header">
              <div className="video-badge">
                <AiOutlinePlayCircle size={18} />
                <span>YouTube Video Drill • {currentLesson.video.drillType || 'Video Practice'}</span>
              </div>
              {currentLesson.video.duration && (
                <span className="video-duration-pill">{currentLesson.video.duration}</span>
              )}
            </div>

            <div className="lesson-video-player-wrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentLesson.video.youtubeId}`}
                title={currentLesson.video.title || currentLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="lesson-video-iframe"
              />
            </div>

            <div className="lesson-video-footer">
              <div className="video-info">
                <h4>{currentLesson.video.title}</h4>
                <p>
                  Watch the video drill, pause to test your handwriting and recall, then complete the quiz below!
                </p>
              </div>
              <a
                href={currentLesson.video.url || `https://youtu.be/${currentLesson.video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary video-external-btn"
              >
                Open on YouTube <AiOutlineArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Lesson Material Guide */}
      <div className="lesson-guide-container">
        {normalizedSections.map((section, secIdx) => (
          <div key={secIdx} className="lesson-section-card">
            <h2 className="section-title">{section.title}</h2>
            {section.content && (
              <div className="section-content-text">
                {section.content.split('\n').map((line, lIdx) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <div key={lIdx} style={{ height: '8px' }} />;
                  if (
                    trimmed.startsWith('Structure Formula:') ||
                    trimmed.startsWith('Word Order:') ||
                    trimmed.startsWith('Pattern:')
                  ) {
                    return (
                      <div key={lIdx} className="formula-callout">
                        <strong>{trimmed}</strong>
                      </div>
                    );
                  }
                  return <p key={lIdx}>{line}</p>;
                })}
              </div>
            )}

            {/* Data Table */}
            {section.table && (
              <div className="lesson-table-wrapper">
                <table className="lesson-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((h, hIdx) => (
                        <th key={hIdx}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={
                              cIdx === 1 ? 'table-cell-jp' : cIdx === 0 ? 'table-cell-lead' : ''
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Audio Pronunciation Examples */}
            {section.examples && section.examples.length > 0 && (
              <div className="examples-container">
                <h3 className="examples-header">Example Sentences & Pronunciation</h3>
                <div className="examples-list">
                  {section.examples.map((ex, exIdx) => {
                    return (
                      <div key={exIdx} className="example-card">
                        {onPlayAudio && (
                          <button
                            type="button"
                            className="audio-play-btn"
                            onClick={() => onPlayAudio(ex.jp)}
                            title="Play Native Audio"
                          >
                            <AiOutlineSound size={20} />
                          </button>
                        )}
                        <div className="example-details">
                          <div className="example-jp">{ex.jp}</div>
                          {shouldShowRomaji && ex.romaji && (
                            <div className="example-romaji">{ex.romaji}</div>
                          )}
                          <div className="example-en">{ex.en}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Bottom CTA */}
        {onStartPractice && (
          <div className="lesson-cta-card">
            <div className="lesson-cta-text">
              <h3>
                {currentLesson?.id === 'kanji-n5-mastery'
                  ? 'Ready to test your Kanji readings?'
                  : currentLesson?.id === 'listening-n5-mastery'
                    ? 'Ready to test your listening comprehension?'
                    : 'Ready to test what you learned?'}
              </h3>
              <p>
                {currentLesson?.id === 'kanji-n5-mastery'
                  ? 'Start a 10-question randomized reading quiz sampled across Kanji Parts 1–10!'
                  : currentLesson?.id === 'listening-n5-mastery'
                    ? 'Start a 10-question randomized listening test across Level 1, Level 2, and Te-form patterns!'
                    : 'Take the interactive practice session to test what you have learned and earn your mastery badge!'}
              </p>
            </div>
            <button className="btn-primary lesson-cta-btn" onClick={onStartPractice}>
              {currentLesson?.id === 'kanji-n5-mastery'
                ? 'Start Random Quiz'
                : currentLesson?.id === 'listening-n5-mastery'
                  ? 'Start Listening Quiz'
                  : 'Start Practice Session'}{' '}
              <AiOutlineArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
