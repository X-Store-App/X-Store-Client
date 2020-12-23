import { dialog, autoUpdater, ipcMain } from 'electron'
import log from 'electron-log'

function update () {
	autoUpdater.setFeedURL({
		url: 'https://github.com/X-Store-App/client'
	})

	autoUpdater.on('error', (err: Error) => {
		if (err) throw err
		log.error(err)
	})
	autoUpdater.on('update-available', async (listener: Function) => {
		log.info('An update is available')
		const updateDialog = await dialog.showMessageBox(null, {
			title: 'Update available',
			message: 'An update is available. Do you want to update?',
			buttons: ['Yes', 'No, thank you']
		})
		if (updateDialog.response === 0) {
			dialog.showErrorBox('hola', 'hola')
		}
	})
	autoUpdater.on('update-downloaded', () => {
		log.info('An update has been downloaded')
		autoUpdater.quitAndInstall()
	})
	autoUpdater.on('update-not-available', () => {
		log.info('An update is not available')
	})

	autoUpdater.checkForUpdates()
}

export default update
