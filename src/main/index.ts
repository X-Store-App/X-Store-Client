import path from 'path'
import { BrowserWindow, app } from 'electron'
import isDev from 'electron-is-dev'
import setupIpc from './ipc'
import setupMenus from './menushandler'
import update from './updater'
import log from 'electron-log'

app.whenReady().then(() => {
	app.setAsDefaultProtocolClient('xstore')
	log.info('Starting')

	const win: BrowserWindow = new BrowserWindow({
		title: 'XStore v' + app.getVersion(),
		webPreferences: {
			preload: isDev === true
				? path.resolve(process.cwd(), 'bin', 'preload.js')
				: path.resolve(process.cwd(), 'resources', 'app', 'bin', 'preload.js'),
			nodeIntegration: isDev,
			enableRemoteModule: isDev,
			contextIsolation: true,
			sandbox: true,
			webSecurity: !isDev,
			devTools: isDev
		}
	})
	win.loadURL(
		isDev === true
			? 'http://localhost:3000'
			: 'file://' + path.join(process.cwd(), 'resources', 'app', 'bin', 'index.html')
	)
	setupMenus()
	update()

	// IPC
	win.webContents.on('did-finish-load', () => {
		setupIpc()
	})
})
