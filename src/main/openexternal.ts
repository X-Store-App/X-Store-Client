import { shell } from 'electron'

export default (url: string) => {
	shell.openPath(
		url
	)
}
