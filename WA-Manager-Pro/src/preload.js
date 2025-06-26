const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  addAccount: () => ipcRenderer.invoke('add-account'),
  disconnectAccount: (id) => ipcRenderer.send('disconnect-account', id),
});
