'use strict';
const electron = require('electron');
const app = electron.app;
const DEBUG = true;
// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

//avoid it being garbage collected
var mainWindow = null;

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 800,
		height: 600,
		toolbar:false
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', function(){mainWindow = null});
	if (DEBUG)
		win.webContents.openDevTools({detach:true});

	win.setMenu(null);
	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
