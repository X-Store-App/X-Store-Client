import path from 'path'
import { BrowserWindow, app, protocol, Menu, dialog } from 'electron'
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
  const template = Menu.buildFromTemplate([
    {
      role: 'fileMenu'
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
          click () {
            dialog.showMessageBox(win, {
              title: 'XStore v' + app.getVersion(),
              message: 'XStore is an open source, cross platform app store made by the people for the people.',
              buttons: ['OK']
            })
          }
        }
      ]
    }
  ])

  Menu.setApplicationMenu(template)
})
