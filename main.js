const { app, BrowserWindow } = require('electron');
const AutoLaunch = require('auto-launch');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
    },
    frame: false,
    fullscreen: true,
  });

  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.executeJavaScript(`
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    `);
  });
}

app.on('ready', createWindow);

let autoLaunch = new AutoLaunch({
  name: 'Your App Name',
  path: app.getPath('exe'),
});

autoLaunch.isEnabled().then((isEnabled) => {
  if (!isEnabled) autoLaunch.enable();
});