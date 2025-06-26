const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const WhatsAppManager = require('./managers/WhatsAppManager');

let mainWindow;
const manager = new WhatsAppManager();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

app.whenReady().then(createWindow);

ipcMain.handle('add-account', async () => {
  return manager.addAccount();
});

ipcMain.on('disconnect-account', (_, id) => {
  manager.disconnectAccount(id);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
