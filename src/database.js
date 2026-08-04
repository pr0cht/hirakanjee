const path = require('path');
const { app } = require('electron');
const Database = require('better-sqlite3');

const dbPath = path.join(app.getPath('userData'), 'hirakanjee.db');
const db = new Database(dbPath);

// Set up pragmas for performance and to enable foreign keys
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Function to initialize the database tables
function initializeDatabase() {
  // We'll wrap our table creation in a transaction for efficiency
  const transaction = db.transaction(() => {
    // Users table - storing this separately is good practice
    db.exec(`
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // WritingMastery table as requested
    db.exec(`
      CREATE TABLE IF NOT EXISTS WritingMastery (
        user_id INTEGER NOT NULL,
        hiragana TEXT NOT NULL,
        mastery INTEGER NOT NULL DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
        PRIMARY KEY (user_id, hiragana)
      );
    `);

    // For demonstration, let's ensure a default user exists
    try {
      db.prepare("INSERT INTO Users (username) VALUES (?)").run('default_user');
    } catch (error) {
      // Ignore unique constraint error if user already exists
      if (error.code !== 'SQLITE_CONSTRAINT_UNIQUE') {
        console.error('Error inserting default user:', error);
      }
    }
  });

  try {
    transaction();
    console.log('Database initialized successfully.');
  } catch (err) {
    console.error('Database initialization failed:', err);
  }
}

module.exports = {
  db,
  initializeDatabase,
};
