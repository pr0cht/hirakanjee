const { app, BrowserWindow, ipcMain } = require('electron/main');
const fs = require('fs');
const path = require('path');

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
  ipcMain.handle('ping', () => 'pong');
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})