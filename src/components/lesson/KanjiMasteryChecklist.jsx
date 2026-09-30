import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineFilter,
  AiOutlineCheck,
  AiOutlineSound,
} from 'react-icons/ai';

/**
 * KanjiMasteryChecklist component.
 * Renders the N5 kanji mastery checklist with search, category filtering,
 * status filtering, and mastery statistics.
 */
export default function KanjiMasteryChecklist({
  kanjiSummaryStats,
  kanjiSearchQuery,
  setKanjiSearchQuery,
  kanjiCategoryFilter,
  setKanjiCategoryFilter,
  kanjiCategories,
  kanjiStatusFilter,
  setKanjiStatusFilter,
  filteredKanjiList,
  kanjiMasteryMap,
  onPronounce,
}) {
  return (
    <div className="kanji-mastery-checklist-section">
      <div className="checklist-hero-header">
        <div className="checklist-header-title">
          <h2>JLPT N5 Kanji Mastery Checklist ({kanjiSummaryStats.totalKanji} Characters)</h2>
          <p>
            Track your progress on all {kanjiSummaryStats.totalKanji} JLPT N5 Kanji. A character is marked as learned (
            <strong>✅ Learned</strong>) once you achieve at least 1 correct review and 70%+
            accuracy. Review statistics persist across study sessions.
          </p>
        </div>
      </div>

      {/* Checklist Summary Stats Bar */}
      <div className="kanji-checklist-stats-bar">
        <div className="k-stat-box highlight">
          <span className="k-stat-num">
            {kanjiSummaryStats.learnedCount} / {kanjiSummaryStats.totalKanji}
          </span>
          <span className="k-stat-sub">
            Learned Kanji ({kanjiSummaryStats.learnedPercent}%)
          </span>
          <div className="k-progress-bar-wrap">
            <div
              className="k-progress-bar-fill"
              style={{ width: `${kanjiSummaryStats.learnedPercent}%` }}
            />
          </div>
        </div>

        <div className="k-stat-box">
          <span className="k-stat-num">{kanjiSummaryStats.totalReviewsSum}</span>
          <span className="k-stat-sub">Total Quiz Attempts</span>
        </div>

        <div className="k-stat-box">
          <span className="k-stat-num">
            {kanjiSummaryStats.totalCorrectSum} / {kanjiSummaryStats.totalReviewsSum}
          </span>
          <span className="k-stat-sub">Correct vs Total</span>
        </div>

        <div className="k-stat-box">
          <span className="k-stat-num">{kanjiSummaryStats.overallAcc}%</span>
          <span className="k-stat-sub">Overall Accuracy</span>
        </div>
      </div>

      {/* Checklist Filters & Search Toolbar */}
      <div className="kanji-checklist-toolbar">
        <div className="kanji-search-box">
          <AiOutlineSearch size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search kanji, meaning, or reading (e.g. 日, sun, にち)..."
            value={kanjiSearchQuery}
            onChange={(e) => setKanjiSearchQuery(e.target.value)}
          />
          {kanjiSearchQuery && (
            <button className="clear-search-btn" onClick={() => setKanjiSearchQuery('')}>
              <AiOutlineClose size={14} />
            </button>
          )}
        </div>

        <div className="kanji-filter-group">
          <div className="kanji-category-select-wrap">
            <AiOutlineFilter size={16} className="filter-icon" />
            <select
              value={kanjiCategoryFilter}
              onChange={(e) => setKanjiCategoryFilter(e.target.value)}
              className="kanji-category-select"
            >
              {kanjiCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="kanji-status-tabs">
            <button
              type="button"
              className={`status-tab ${kanjiStatusFilter === 'all' ? 'active' : ''}`}
              onClick={() => setKanjiStatusFilter('all')}
            >
              All ({kanjiSummaryStats.totalKanji})
            </button>
            <button
              type="button"
              className={`status-tab ${kanjiStatusFilter === 'learned' ? 'active' : ''}`}
              onClick={() => setKanjiStatusFilter('learned')}
            >
              Learned ✅ ({kanjiSummaryStats.learnedCount})
            </button>
            <button
              type="button"
              className={`status-tab ${kanjiStatusFilter === 'in-progress' ? 'active' : ''}`}
              onClick={() => setKanjiStatusFilter('in-progress')}
            >
              In Progress 🔄
            </button>
            <button
              type="button"
              className={`status-tab ${kanjiStatusFilter === 'unlearned' ? 'active' : ''}`}
              onClick={() => setKanjiStatusFilter('unlearned')}
            >
              Unlearned ⚪
            </button>
          </div>
        </div>
      </div>

      {/* Kanji Cards Checklist Grid */}
      {filteredKanjiList.length === 0 ? (
        <div className="kanji-empty-state">
          <p>No Kanji match your current filter or search query.</p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setKanjiSearchQuery('');
              setKanjiCategoryFilter('All');
              setKanjiStatusFilter('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="kanji-checklist-grid">
          {filteredKanjiList.map((k) => {
            const stats = kanjiMasteryMap[k.char] || {};
            const total = stats.totalReviews || stats.total_reviews || 0;
            const correct = stats.correctReviews || stats.correct_reviews || 0;
            const wrong = Math.max(0, total - correct);
            const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
            const isLearned = correct > 0 && acc >= 70;

            return (
              <div
                key={k.char}
                className={`kanji-card-item ${isLearned ? 'is-learned' : total > 0 ? 'is-in-progress' : ''}`}
              >
                <div className="kanji-card-header-row">
                  <span className="kanji-large-char">{k.char}</span>
                  {isLearned ? (
                    <span className="kanji-status-badge learned">
                      <AiOutlineCheck size={13} /> Learned
                    </span>
                  ) : total > 0 ? (
                    <span className="kanji-status-badge in-progress">In Progress</span>
                  ) : (
                    <span className="kanji-status-badge unlearned">Not Started</span>
                  )}
                </div>

                <div className="kanji-meaning-block">
                  <h4 className="k-meaning-text">{k.meaning}</h4>
                  <span className="k-strokes-meta">
                    {k.strokes} strokes • {k.category}
                  </span>
                </div>

                <div className="kanji-readings-box">
                  <div className="k-reading-line">
                    <span className="r-label">On:</span>
                    <span className="r-text">{k.onyomi || '—'}</span>
                  </div>
                  <div className="k-reading-line">
                    <span className="r-label">Kun:</span>
                    <span className="r-text">{k.kunyomi || '—'}</span>
                  </div>
                </div>

                {k.examples && k.examples.length > 0 && (
                  <div className="kanji-example-tag">
                    <span className="ex-word">{k.examples[0].word}</span>
                    <span className="ex-reading">({k.examples[0].reading})</span>
                  </div>
                )}

                {/* Tally / Accuracy Breakdown */}
                <div className="kanji-card-footer-stats">
                  <div className="k-tally-counts">
                    <span className="tally-green">✓ {correct}</span>
                    <span className="tally-div">|</span>
                    <span className="tally-red">✗ {wrong}</span>
                  </div>
                  <span
                    className={`k-accuracy-pill ${acc >= 70 ? 'acc-high' : total > 0 ? 'acc-med' : 'acc-none'}`}
                  >
                    {total > 0 ? `${acc}%` : '0%'}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="kanji-card-actions-bar">
                  <button
                    type="button"
                    className="k-audio-btn"
                    onClick={() =>
                      onPronounce &&
                      onPronounce(k.examples?.[0]?.word || k.kunyomi?.split(',')[0] || k.char)
                    }
                    title="Pronounce Kanji Word"
                  >
                    <AiOutlineSound size={16} />
                  </button>
                  <Link
                    to={`/learn/practice/kanji/${k.char}`}
                    className="k-draw-practice-link"
                    title="Practice writing on canvas"
                  >
                    Practice Canvas
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
