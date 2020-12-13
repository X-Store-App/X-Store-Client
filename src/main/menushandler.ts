import { Menu, dialog, app, MenuItemConstructorOptions } from 'electron'

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
							label: '',
							enabled: false
						},
						{
							type: 'separator'
						},
						{
							label: 'Open Settings file',
							click () {
								openExternal(app.getPath('appData') + '/.xstore/client/settings.json')
							},
							accelerator: 'CmdOrCtrl+,'
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
			label: 'Online',
			submenu: [
				{
					label: 'Store'
				},
				{
					label: 'Library'
				},
				{
					label: 'Profile'
				},
				{
					type: 'separator'
				},
				{
					label: 'Login...'
				},
				{
					label: 'Register...'
				}
			]
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
