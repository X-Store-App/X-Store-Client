import { shell, app } from 'electron'

export default (url: string) => {
	shell.openPath(
		url
	)
}