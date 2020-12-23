import { ipcMain } from 'electron'
import update from './updater'

function setupIpc ():void {
	ipcMain.on('check-updates', () => {
		update()
	})
}

export default setupIpc
