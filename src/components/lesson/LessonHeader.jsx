import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

/**
 * LessonHeader component.
 * Renders the top navigation bar with breadcrumbs, prev/next lesson pagination, and Romaji toggle.
 *
 * @param {Object} props
 * @param {Object} props.currentLesson
 * @param {Object} [props.prevLesson]
 * @param {Object} [props.nextLesson]
 * @param {Object} [props.currentSection]
 * @param {number} [props.sectionLessonNumber]
 * @param {boolean} [props.shouldShowRomaji]
 * @param {Function} [props.onToggleRomaji]
 * @param {Function} [props.onExitRequest]
 */
export default function LessonHeader({
  currentLesson,
  prevLesson,
  nextLesson,
  currentSection,
  sectionLessonNumber,
  shouldShowRomaji,
  onToggleRomaji,
  onExitRequest,
}) {
  const navigate = useNavigate();

  const getLessonLevel = (l) => {
    if (!l) return 'n5';
    if (l.id?.startsWith('n3-') || l.id?.includes('n3')) return 'n3';
    if (l.id?.startsWith('n4-') || l.id?.includes('n4')) return 'n4';
    return 'n5';
  };

  return (
    <div className="lesson-nav-bar">
      {onExitRequest ? (
        <button type="button" onClick={onExitRequest} className="lesson-nav-back">
          <AiOutlineArrowLeft size={16} />
          <span>Back to Curriculum</span>
        </button>
      ) : (
        <Link to="/learn" className="lesson-nav-back">
          <AiOutlineArrowLeft size={16} />
          <span>Back to Curriculum</span>
        </Link>
      )}

      <div className="lesson-nav-pagination">
        {prevLesson ? (
          <button
            onClick={() => {
              const level = getLessonLevel(prevLesson);
              navigate(`/learn/${level}/${prevLesson.id}`);
            }}
            className="lesson-nav-btn"
            title={prevLesson.shortTitle || prevLesson.title}
          >
            <AiOutlineArrowLeft size={14} /> Prev: Lesson {prevLesson.number}
          </button>
        ) : (
          <span className="lesson-nav-btn disabled">First Lesson</span>
        )}

        {currentSection && (
          <span className="lesson-nav-indicator">
            {(currentSection.title || '').replace(/^\d+\.\s*/, '')}: Lesson {sectionLessonNumber || 1} of{' '}
            {currentSection.lessons?.length || 1}
          </span>
        )}

        {nextLesson ? (
          <button
            onClick={() => {
              const level = getLessonLevel(nextLesson);
              navigate(`/learn/${level}/${nextLesson.id}`);
            }}
            className="lesson-nav-btn"
            title={nextLesson.shortTitle || nextLesson.title}
          >
            Next: Lesson {nextLesson.number} <AiOutlineArrowRight size={14} />
          </button>
        ) : (
          <span className="lesson-nav-btn disabled">End of Curriculum</span>
        )}
      </div>

      {onToggleRomaji && (
        <button
          type="button"
          className={`romaji-header-toggle-btn ${shouldShowRomaji ? 'active' : ''}`}
          onClick={onToggleRomaji}
          title={shouldShowRomaji ? 'Disable Romaji guide' : 'Enable Romaji guide'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: shouldShowRomaji ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${shouldShowRomaji ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
            color: shouldShowRomaji ? '#a5b4fc' : '#94a3b8',
            padding: '5px 12px',
            borderRadius: '16px',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <span>Romaji:</span>
          <span style={{ color: shouldShowRomaji ? '#818cf8' : '#64748b' }}>
            {shouldShowRomaji ? 'ON' : 'OFF'}
          </span>
        </button>
      )}
    </div>
  );
}
