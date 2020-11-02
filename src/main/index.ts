import path from 'path'
import { BrowserWindow, app, protocol } from 'electron'
import resources from '../../resources.json'

app.whenReady().then(() => {
  protocol.registerFileProtocol('xstore', (request, callback) => {

  })
  const win = new BrowserWindow({
    title: resources.title,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      nodeIntegration: false,
      enableRemoteModule: false
    }
  })
})
