const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    enableRemoteModule: true,
    },
    frame: false,
    fullscreen: true,
  });

  mainWindow.loadURL('https://mira-lovat.vercel.app');

  geolocation((err, location) => {
    if (err) {
      console.error('Error getting location:', err);
      return;
    }
    console.log('Latitude:', location.coords.latitude);
    console.log('Longitude:', location.coords.longitude);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
