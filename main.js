const { app, BrowserWindow, ipcMain } = require('electron/main');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { initializeDatabase, db } = require('./src/database');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
    },
  });

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

  ipcMain.handle('ai:gradeImage', async (event, dataUrl, targetChar) => {
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

    try {
      const output = await new Promise((resolve, reject) => {
        const child = spawn(pythonPath, [scriptPath, 'grade', '--image', tempPath, '--target', targetChar || 'あ'], {
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