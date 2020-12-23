import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
	updater: {
		checkForUpdates: () => ipcRenderer.send('check-updates')
	}
})
