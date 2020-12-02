import electron from 'electron'
import { Menu, ipcMain, dialog } from 'electron'
import api from 'API'

function setupMenus () {
	const menu: electron.MenuItemConstructorOptions[] = [
		{
			label: 'File',
			submenu: [
				{
					label: 'Settings',
					submenu: [
						{
							label: 'Open Settings file',
							click () {
								electron.shell.openPath(
									electron.app.getPath('appData') + '/.xstore/client/settings.json'
								)
							}
						}
					]
				},
				{
					type: 'separator'
				},
				{
					role: 'quit'
				}
			]
		},
		{
			role: 'editMenu'
		},
		{
			role: 'viewMenu'
		},
		{
			role: 'windowMenu'
		},
		{
			label: 'Help',
			submenu: [
				{
					label: 'About',
					click (mi, bw) {
						dialog.showMessageBox(bw, {
							title: 'XStore Desktop',
							message: 'Made by dragonDScript\nLicensed under the MIT license\nMade with open source techonologies like React.js, Electron.js and others',
							type: 'info',
							buttons: ['OK']
						})
					}
				}
			]
		}
	]
	const nativeMenu = Menu.buildFromTemplate(menu)
	Menu.setApplicationMenu(nativeMenu)
}

export default setupMenus
