const path = require('path');
const { app } = require('electron');
const Database = require('better-sqlite3');

const userDataDir = app && typeof app.getPath === 'function' ? app.getPath('userData') : path.join(__dirname, '..');
const dbPath = path.join(userDataDir, 'hirakanjee.db');
const db = new Database(dbPath);

// Set up pragmas for performance and enable foreign keys
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// SRS interval definitions in days:
// 0: New, 1: 4h (0.167d), 2: 8h (0.333d), 3: 1d, 4: 3d, 5: 7d, 6: 14d, 7: 30d, 8: 120d (Burned)
const SRS_INTERVALS = [0, 0.167, 0.333, 1.0, 3.0, 7.0, 14.0, 30.0, 120.0];

function initializeDatabase() {
  const transaction = db.transaction(() => {
    // Users table
    db.exec(`
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // WritingMastery (legacy table preserved for compatibility)
    db.exec(`
      CREATE TABLE IF NOT EXISTS WritingMastery (
        user_id INTEGER NOT NULL,
        hiragana TEXT NOT NULL,
        mastery INTEGER NOT NULL DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
        PRIMARY KEY (user_id, hiragana)
      );
    `);

    // CharacterMastery (Unified SRS for Hiragana, Katakana, Kanji)
    db.exec(`
      CREATE TABLE IF NOT EXISTS CharacterMastery (
        user_id INTEGER NOT NULL,
        script TEXT NOT NULL,
        char TEXT NOT NULL,
        mastery INTEGER NOT NULL DEFAULT 0,
        srs_stage INTEGER NOT NULL DEFAULT 0,
        interval_days REAL NOT NULL DEFAULT 0,
        ease_factor REAL NOT NULL DEFAULT 2.5,
        next_review_at TEXT NOT NULL DEFAULT (datetime('now')),
        last_practiced_at TEXT,
        total_reviews INTEGER NOT NULL DEFAULT 0,
        correct_reviews INTEGER NOT NULL DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
        PRIMARY KEY (user_id, script, char)
      );
    `);

    // Practice Logs (session-level history)
    db.exec(`
      CREATE TABLE IF NOT EXISTS PracticeLogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        script TEXT NOT NULL,
        char TEXT NOT NULL,
        score REAL NOT NULL,
        is_correct INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
      );
    `);

    // User Settings persistence
    db.exec(`
      CREATE TABLE IF NOT EXISTS UserSettings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);

    // Ensure default settings exist if not already populated
    try {
      const defaultSettings = [
        ['darkMode', false],
        ['appearance', 'classic'],
        ['accent', 'blue'],
        ['defaultPracticeMode', 'hiragana'],
        ['showNotifications', true],
        ['autoLaunch', false],
      ];
      const insertSettingStmt = db.prepare(`
        INSERT OR IGNORE INTO UserSettings (key, value) VALUES (?, ?)
      `);
      for (const [k, v] of defaultSettings) {
        insertSettingStmt.run(k, JSON.stringify(v));
      }
    } catch (error) {
      // Ignore
    }

    // Lesson Progress persistence (for JLPT N5 grammar lessons & quizzes)
    db.exec(`
      CREATE TABLE IF NOT EXISTS LessonProgress (
        user_id INTEGER NOT NULL,
        lesson_id TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        quiz_score REAL DEFAULT 0,
        last_studied_at TEXT NOT NULL DEFAULT (datetime('now')),
        PRIMARY KEY (user_id, lesson_id),
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
      );
    `);

    // Create index on next_review_at for fast SRS queue lookups
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_char_srs ON CharacterMastery (user_id, next_review_at);
      CREATE INDEX IF NOT EXISTS idx_logs_created ON PracticeLogs (user_id, created_at);
      CREATE INDEX IF NOT EXISTS idx_lesson_prog ON LessonProgress (user_id, lesson_id);
    `);

    // Ensure default user exists
    try {
      db.prepare("INSERT OR IGNORE INTO Users (id, username) VALUES (1, 'default_user')").run();
    } catch (error) {
      // Ignore
    }
  });

  try {
    transaction();
    console.log('Database initialized successfully with SRS tables.');
  } catch (err) {
    console.error('Database initialization failed:', err);
  }
}

/**
 * Records a practice attempt for a character, updates SRS stage, calculates next review interval,
 * and logs the attempt in PracticeLogs.
 */
function recordReview(userId, script, char, score) {
  const isCorrect = score >= 70 ? 1 : 0;
  const now = new Date().toISOString();

  const getStmt = db.prepare(`
    SELECT * FROM CharacterMastery WHERE user_id = ? AND script = ? AND char = ?
  `);
  let current = getStmt.get(userId, script, char);

  let newStage = 1;
  let newMastery = Math.round(score);
  let totalReviews = 1;
  let correctReviews = isCorrect ? 1 : 0;

  if (current) {
    totalReviews = current.total_reviews + 1;
    correctReviews = current.correct_reviews + (isCorrect ? 1 : 0);

    if (isCorrect) {
      newStage = Math.min(8, (current.srs_stage || 0) + 1);
      newMastery = Math.min(100, Math.max(current.mastery, Math.round(score * 0.4 + (newStage / 8) * 60)));
    } else {
      newStage = Math.max(1, (current.srs_stage || 1) - 2);
      newMastery = Math.max(0, current.mastery - 12);
    }
  }

  const intervalDays = SRS_INTERVALS[newStage] || 1.0;
  const nextReviewDate = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000).toISOString();

  const upsertMastery = db.prepare(`
    INSERT INTO CharacterMastery (
      user_id, script, char, mastery, srs_stage, interval_days, ease_factor,
      next_review_at, last_practiced_at, total_reviews, correct_reviews
    ) VALUES (?, ?, ?, ?, ?, ?, 2.5, ?, ?, ?, ?)
    ON CONFLICT(user_id, script, char) DO UPDATE SET
      mastery = excluded.mastery,
      srs_stage = excluded.srs_stage,
      interval_days = excluded.interval_days,
      next_review_at = excluded.next_review_at,
      last_practiced_at = excluded.last_practiced_at,
      total_reviews = excluded.total_reviews,
      correct_reviews = excluded.correct_reviews
  `);

  const insertLog = db.prepare(`
    INSERT INTO PracticeLogs (user_id, script, char, score, is_correct, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction(() => {
    upsertMastery.run(
      userId,
      script,
      char,
      newMastery,
      newStage,
      intervalDays,
      nextReviewDate,
      now,
      totalReviews,
      correctReviews
    );
    insertLog.run(userId, script, char, score, isCorrect, now);

    // Legacy table update if hiragana
    if (script === 'hiragana') {
      db.prepare(`
        INSERT INTO WritingMastery (user_id, hiragana, mastery) VALUES (?, ?, ?)
        ON CONFLICT(user_id, hiragana) DO UPDATE SET mastery = excluded.mastery
      `).run(userId, char, newMastery);
    }
  });

  transaction();

  return {
    char,
    script,
    score,
    isCorrect,
    srsStage: newStage,
    mastery: newMastery,
    nextReviewAt: nextReviewDate,
  };
}

/**
 * Retrieves the characters currently due for SRS review (next_review_at <= now).
 */
function getSRSQueue(userId, limit = 20) {
  const stmt = db.prepare(`
    SELECT script, char, mastery, srs_stage, next_review_at, total_reviews
    FROM CharacterMastery
    WHERE user_id = ? AND datetime(next_review_at) <= datetime('now')
    ORDER BY next_review_at ASC
    LIMIT ?
  `);
  return stmt.all(userId, limit);
}

/**
 * Returns overall learning metrics: total reviews, streak, counts per SRS tier.
 */
function getStats(userId) {
  const summaryStmt = db.prepare(`
    SELECT
      COUNT(*) as total_tracked,
      SUM(CASE WHEN srs_stage BETWEEN 1 AND 3 THEN 1 ELSE 0 END) as apprentice,
      SUM(CASE WHEN srs_stage BETWEEN 4 AND 5 THEN 1 ELSE 0 END) as guru,
      SUM(CASE WHEN srs_stage BETWEEN 6 AND 7 THEN 1 ELSE 0 END) as master,
      SUM(CASE WHEN srs_stage >= 8 THEN 1 ELSE 0 END) as burned,
      SUM(total_reviews) as total_reviews_all,
      SUM(correct_reviews) as correct_reviews_all,
      AVG(mastery) as avg_mastery
    FROM CharacterMastery
    WHERE user_id = ?
  `);
  const summary = summaryStmt.get(userId) || {};

  const dueStmt = db.prepare(`
    SELECT COUNT(*) as due_count
    FROM CharacterMastery
    WHERE user_id = ? AND datetime(next_review_at) <= datetime('now')
  `);
  const due = dueStmt.get(userId) || { due_count: 0 };

  // Calculate streak from PracticeLogs
  const streakStmt = db.prepare(`
    SELECT DISTINCT date(created_at) as practice_date
    FROM PracticeLogs
    WHERE user_id = ?
    ORDER BY practice_date DESC
    LIMIT 60
  `);
  const dates = streakStmt.all(userId).map((r) => r.practice_date);

  let streak = 0;
  if (dates.length > 0) {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    let checkDate = dates[0] === today ? today : (dates[0] === yesterday ? yesterday : null);

    if (checkDate) {
      let expected = new Date(checkDate);
      for (const d of dates) {
        const expectedStr = expected.toISOString().slice(0, 10);
        if (d === expectedStr) {
          streak++;
          expected = new Date(expected.getTime() - 86400000);
        } else {
          break;
        }
      }
    }
  }

  return {
    totalTracked: summary.total_tracked || 0,
    apprentice: summary.apprentice || 0,
    guru: summary.guru || 0,
    master: summary.master || 0,
    burned: summary.burned || 0,
    totalReviews: summary.total_reviews_all || 0,
    accuracy: summary.total_reviews_all ? Math.round((summary.correct_reviews_all / summary.total_reviews_all) * 100) : 0,
    avgMastery: Math.round(summary.avg_mastery || 0),
    dueReviews: due.due_count || 0,
    currentStreak: streak,
  };
}

/**
 * Returns practice volume by date (last 180 days) for the activity heatmap.
 */
function getStreakHistory(userId) {
  const stmt = db.prepare(`
    SELECT date(created_at) as date, COUNT(*) as count, AVG(score) as avg_score
    FROM PracticeLogs
    WHERE user_id = ? AND datetime(created_at) >= datetime('now', '-180 days')
    GROUP BY date(created_at)
    ORDER BY date(created_at) ASC
  `);
  return stmt.all(userId);
}

/**
 * Returns characters with lowest scores/accuracy for targeted weak-point drills.
 */
function getWeakCharacters(userId, limit = 8) {
  const stmt = db.prepare(`
    SELECT script, char, mastery, srs_stage, total_reviews,
           ROUND(CAST(correct_reviews AS REAL) / total_reviews * 100, 1) as accuracy
    FROM CharacterMastery
    WHERE user_id = ? AND total_reviews > 0 AND (mastery < 70 OR (correct_reviews * 1.0 / total_reviews) < 0.7)
    ORDER BY mastery ASC, accuracy ASC
    LIMIT ?
  `);
  return stmt.all(userId, limit);
}

/**
 * Settings Get and Save
 */
function getSettings() {
  const stmt = db.prepare('SELECT key, value FROM UserSettings');
  const rows = stmt.all();
  const settings = {};
  for (const r of rows) {
    try {
      settings[r.key] = JSON.parse(r.value);
    } catch {
      settings[r.key] = r.value;
    }
  }
  return settings;
}

function saveSetting(key, value) {
  const valStr = JSON.stringify(value);
  const stmt = db.prepare(`
    INSERT INTO UserSettings (key, value) VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `);
  stmt.run(key, valStr);
}

/**
 * Lesson Progress tracking
 */
function getLessonProgress(userId = 1) {
  const stmt = db.prepare('SELECT lesson_id, completed, quiz_score, last_studied_at FROM LessonProgress WHERE user_id = ?');
  const rows = stmt.all(userId);
  const map = {};
  for (const r of rows) {
    map[r.lesson_id] = {
      completed: Boolean(r.completed),
      quizScore: r.quiz_score,
      lastStudiedAt: r.last_studied_at,
    };
  }
  return map;
}

function saveLessonProgress(userId = 1, lessonId, completed = true, quizScore = 0) {
  const stmt = db.prepare(`
    INSERT INTO LessonProgress (user_id, lesson_id, completed, quiz_score, last_studied_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, lesson_id) DO UPDATE SET
      completed = MAX(completed, excluded.completed),
      quiz_score = MAX(quiz_score, excluded.quiz_score),
      last_studied_at = excluded.last_studied_at
  `);
  stmt.run(userId, lessonId, completed ? 1 : 0, quizScore || 0);
  return getLessonProgress(userId);
}

/**
 * Returns a map of character mastery stats for a given script ('kanji', 'hiragana', 'katakana').
 */
function getScriptMastery(userId = 1, script = 'kanji') {
  const stmt = db.prepare(`
    SELECT char, mastery, srs_stage, total_reviews, correct_reviews, last_practiced_at
    FROM CharacterMastery
    WHERE user_id = ? AND script = ?
  `);
  const rows = stmt.all(userId, script);
  const map = {};
  for (const r of rows) {
    map[r.char] = {
      mastery: r.mastery,
      srsStage: r.srs_stage,
      totalReviews: r.total_reviews,
      correctReviews: r.correct_reviews,
      lastPracticedAt: r.last_practiced_at,
    };
  }
  if (script === 'hiragana') {
    try {
      const wmRows = db.prepare('SELECT hiragana, mastery FROM WritingMastery WHERE user_id = ?').all(userId);
      for (const w of wmRows) {
        if (!map[w.hiragana]) {
          map[w.hiragana] = {
            mastery: w.mastery,
            srsStage: w.mastery >= 70 ? 2 : 1,
            totalReviews: 1,
            correctReviews: w.mastery >= 70 ? 1 : 0,
            lastPracticedAt: null,
          };
        }
      }
    } catch (e) {
      // Ignore legacy table errors
    }
  }

  return map;
}

/**
 * Toggles or sets learned status for a character directly.
 */
function setCharLearned(userId = 1, script = 'hiragana', char, isLearned = true) {
  if (isLearned) {
    recordReview(userId, script, char, 100);
  } else {
    db.prepare('DELETE FROM CharacterMastery WHERE user_id = ? AND script = ? AND char = ?').run(userId, script, char);
    if (script === 'hiragana') {
      try {
        db.prepare('DELETE FROM WritingMastery WHERE user_id = ? AND hiragana = ?').run(userId, char);
      } catch (e) {}
    }
  }
  return getScriptMastery(userId, script);
}

/**
 * Resets all learning progress (mastery, logs, lesson completions) for the user.
 * Preserves UserSettings.
 */
function resetAllProgress(userId = 1) {
  const deleteMastery = db.prepare('DELETE FROM CharacterMastery WHERE user_id = ?');
  const deleteLogs = db.prepare('DELETE FROM PracticeLogs WHERE user_id = ?');
  const deleteLessons = db.prepare('DELETE FROM LessonProgress WHERE user_id = ?');

  const txn = db.transaction(() => {
    deleteMastery.run(userId);
    deleteLogs.run(userId);
    deleteLessons.run(userId);
  });
  txn();

  return { success: true };
}

module.exports = {
  db,
  initializeDatabase,
  recordReview,
  getSRSQueue,
  getStats,
  getStreakHistory,
  getWeakCharacters,
  getSettings,
  saveSetting,
  getLessonProgress,
  saveLessonProgress,
  getScriptMastery,
  setCharLearned,
  resetAllProgress,
};
