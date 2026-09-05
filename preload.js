const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
});

contextBridge.exposeInMainWorld('db', {
  getMastery: (hiragana) => ipcRenderer.invoke('db:getMastery', hiragana),
  setMastery: (hiragana, mastery) => ipcRenderer.invoke('db:setMastery', hiragana, mastery),
  recordReview: (script, char, score) => ipcRenderer.invoke('db:recordReview', script, char, score),
  getSRSQueue: (limit) => ipcRenderer.invoke('db:getSRSQueue', limit),
  getStats: () => ipcRenderer.invoke('db:getStats'),
  getStreakHistory: () => ipcRenderer.invoke('db:getStreakHistory'),
  getWeakCharacters: (limit) => ipcRenderer.invoke('db:getWeakCharacters', limit),
  getSettings: () => ipcRenderer.invoke('db:getSettings'),
  saveSetting: (key, value) => ipcRenderer.invoke('db:saveSetting', key, value),
  getLessonProgress: () => ipcRenderer.invoke('db:getLessonProgress'),
  saveLessonProgress: (lessonId, completed, quizScore) => ipcRenderer.invoke('db:saveLessonProgress', lessonId, completed, quizScore),
  getScriptMastery: (script) => ipcRenderer.invoke('db:getScriptMastery', script),
  resetAllProgress: () => ipcRenderer.invoke('db:resetAllProgress'),
});

contextBridge.exposeInMainWorld('ai', {
  gradeImage: (dataUrl, targetChar, script) => ipcRenderer.invoke('ai:gradeImage', dataUrl, targetChar, script),
});
