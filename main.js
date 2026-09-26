const { app, BrowserWindow, ipcMain } = require('electron/main');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const {
  initializeDatabase,
  db,
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
} = require('./src/database');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
    },
  });

  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));


  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    const prodIndex = path.join(__dirname, 'dist-renderer', 'index.html');
    if (fs.existsSync(prodIndex)) {
      win.loadFile(prodIndex);
    } else {
      win.loadFile(path.join(__dirname, 'index.html'));
    }
  }
};

app.whenReady().then(() => {
  initializeDatabase();

  // IPC handlers for database
  ipcMain.handle('db:getMastery', (event, hiragana) => {
    // For now, we assume a single user with id 1
    const stmt = db.prepare('SELECT mastery FROM WritingMastery WHERE user_id = ? AND hiragana = ?');
    const result = stmt.get(1, hiragana);
    return result ? result.mastery : 0;
  });

  ipcMain.handle('db:setMastery', (event, hiragana, mastery) => {
    // UPSERT operation: Insert or replace the mastery level.
    const stmt = db.prepare('INSERT INTO WritingMastery (user_id, hiragana, mastery) VALUES (?, ?, ?) ON CONFLICT(user_id, hiragana) DO UPDATE SET mastery = excluded.mastery');
    stmt.run(1, hiragana, mastery);
  });

  ipcMain.handle('db:recordReview', (event, script, char, score) => {
    return recordReview(1, script, char, score);
  });

  ipcMain.handle('db:getSRSQueue', (event, limit) => {
    return getSRSQueue(1, limit || 20);
  });

  ipcMain.handle('db:getStats', (event) => {
    return getStats(1);
  });

  ipcMain.handle('db:getStreakHistory', (event) => {
    return getStreakHistory(1);
  });

  ipcMain.handle('db:getWeakCharacters', (event, limit) => {
    return getWeakCharacters(1, limit || 8);
  });

  ipcMain.handle('db:getSettings', () => {
    return getSettings();
  });

  ipcMain.handle('db:saveSetting', (event, key, value) => {
    return saveSetting(key, value);
  });

  ipcMain.handle('db:getLessonProgress', () => {
    return getLessonProgress(1);
  });

  ipcMain.handle('db:saveLessonProgress', (event, lessonId, completed, quizScore) => {
    return saveLessonProgress(1, lessonId, completed, quizScore);
  });

  ipcMain.handle('db:getScriptMastery', (event, script) => {
    return getScriptMastery(1, script || 'kanji');
  });

  ipcMain.handle('db:setCharLearned', (event, script, char, isLearned) => {
    return setCharLearned(1, script || 'hiragana', char, isLearned);
  });

  ipcMain.handle('db:resetAllProgress', () => {
    return resetAllProgress(1);
  });

  ipcMain.handle('ai:gradeImage', async (event, dataUrl, targetChar, script) => {
    const tempDir = app.getPath('temp');
    const tempPath = path.join(tempDir, `hirakanjee-${Date.now()}.png`);
    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(tempPath, Buffer.from(base64Data, 'base64'));

    const pythonCandidates = [
      process.env.PYTHON,
      process.env.PYTHON_PATH,
      'python',
      'python3',
      'C:/Python313/python.exe',
    ].filter(Boolean);

    const pythonPath = pythonCandidates[0];
    const scriptPath = path.join(__dirname, 'python', 'ai_check.py');

    const spawnArgs = [scriptPath, 'grade', '--image', tempPath, '--target', targetChar || 'あ'];
    if (script) {
      spawnArgs.push('--script', script);
    }

    try {
      const output = await new Promise((resolve, reject) => {
        const child = spawn(pythonPath, spawnArgs, {
          cwd: __dirname,
          env: process.env,
        });

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (chunk) => {
          stdout += chunk.toString();
        });

        child.stderr.on('data', (chunk) => {
          stderr += chunk.toString();
        });

        child.on('error', reject);
        child.on('close', (code) => {
          if (code !== 0) {
            reject(new Error(stderr.trim() || `Python exited with code ${code}`));
            return;
          }

          try {
            resolve(JSON.parse(stdout.trim()));
          } catch (error) {
            reject(new Error(`Unable to parse AI output: ${stdout}`));
          }
        });
      });

      return output;
    } finally {
      try {
        fs.unlinkSync(tempPath);
      } catch (error) {
        // Ignore cleanup failures for temporary image files.
      }
    }
  });

  ipcMain.handle('ping', () => 'pong');
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})