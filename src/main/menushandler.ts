import { Menu, dialog, MenuItemConstructorOptions } from 'electron'
import store from './store'
import openExternal from './openexternal'

function setupMenus () {
	const menu: MenuItemConstructorOptions[] = [
		{
			label: 'XStore',
			submenu: [
				{
					label: 'About XStore',
					click (mi, bw) {
						dialog.showMessageBox(bw, {
							title: 'XStore Desktop',
							message: 'Made by dragonDScript\nLicensed under the MIT license',
							type: 'info',
							buttons: ['OK']
						})
					}
				},
				{
					label: 'Preferences',
					submenu: [
						{
							label: 'Auto update',
							type: 'checkbox',
							click: (mi) => store.set('auto-updates', mi.checked),
							checked: Boolean(store.get('auto-updates'))
						}
					]
				},
				{
					role: 'services',
					enabled: process.platform === 'darwin'
				},
				{
					type: 'separator'
				},
				{
					role: 'quit',
					label: 'Quit XStore'
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
					label: 'Website',
					click () {
						openExternal('https://X-Store-App.github.io')
					}
				},
				{
					label: 'Discord',
					click: () => openExternal('https://discord.gg/ewBsKZB75N')
				},
				{
					label: 'GitHub',
					click () {
						openExternal('https://github.com/X-Store-App/client')
					}
				},
				{
					label: 'Issues',
					click () {
						openExternal('https://github.com/X-Store-App/client/issues')
					}
				}
			]
		}
	]
	const nativeMenu = Menu.buildFromTemplate(menu)
	Menu.setApplicationMenu(nativeMenu)
}

export default setupMenus
