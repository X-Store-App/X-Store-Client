import path from 'path'
import { BrowserWindow, app, protocol } from 'electron'
import resources from '../../resources.json'
import isDev from 'electron-is-dev'

app.whenReady().then(() => {
  protocol.registerFileProtocol('xstore', (request, callback) => {

  })
  const win = new BrowserWindow({
    title: resources.title,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      nodeIntegration: false,
      enableRemoteModule: false
    }
  })
  win.loadURL(
    isDev === true
      ? 'http://localhost:3000'
      : 'file://' + path.join(__dirname, 'index.html')
  )
})
