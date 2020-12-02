const path = require('path')

const config = {
	packagerConfig: {
		ignore: (file) => {
			if (!file) return false
			const files = ['bin', 'package.json', 'LICENSE']
			return !files.includes(path.basename(file))
		}
	},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				name: 'xstore_electron_client'
			}
		},
		{
			name: '@electron-forge/maker-zip',
			platforms: [
				'darwin'
			]
		},
		{
			name: '@electron-forge/maker-deb',
			config: {}
		},
		{
			name: '@electron-forge/maker-rpm',
			config: {}
		}
	]
}

module.exports = config
