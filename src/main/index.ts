import path from 'path'
import { BrowserWindow, app, protocol, Menu, dialog, shell } from 'electron'
import isDev from 'electron-is-dev'

app.whenReady().then(() => {
  protocol.registerFileProtocol('xstore', (request, callback) => {

  })
  const win = new BrowserWindow({
    title: 'XStore v' + app.getVersion(),
    webPreferences: {
      preload: path.resolve(process.cwd(), 'bin', 'preload.js'),
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true
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
          label: 'Website',
          click () {
            shell.openExternal('https://web.xstore.vercel.app')
          }
        },
        {
          label: 'GitHub',
          click () {
            shell.openExternal('https://github.com/X-Store-App/')
          }
        },
        {
          label: 'Discord',
          click () {
            shell.openExternal('https://discord.gg/ByDn5PX')
          }
        },
        {
          type: 'separator'
        },
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
