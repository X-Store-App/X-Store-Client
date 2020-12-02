import { Menu, ipcMain } from 'electron'
import api from 'API'

function setupMenus () {
	const menu = [
		{
			label: 'File',
			submenu: [
				{
					label: 'Quit',
					accelerator: 'CmdOrCtrl+Q'
				}
			]
		}
	]
	const nativeMenu = Menu.buildFromTemplate(menu)
	Menu.setApplicationMenu(nativeMenu)
}

export default setupMenus
