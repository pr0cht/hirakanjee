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
});

contextBridge.exposeInMainWorld('ai', {
  gradeImage: (dataUrl, targetChar) => ipcRenderer.invoke('ai:gradeImage', dataUrl, targetChar),
});
