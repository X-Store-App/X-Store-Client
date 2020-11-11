import path from 'path'
import { BrowserWindow, app, protocol, Menu, dialog, shell } from 'electron'
import isDev from 'electron-is-dev'

app.whenReady().then(() => {
  protocol.registerFileProtocol('xstore', (request, callback) => {

  })
  const win: BrowserWindow = new BrowserWindow({
    title: 'XStore v' + app.getVersion(),
    webPreferences: {
      preload: isDev === false
        ? path.resolve(__dirname, 'preload.js')
        : path.resolve(process.cwd(), 'resources', 'app', 'bin', 'preload.js'),
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true
    }
  })
  win.loadURL(
    isDev === true
      ? 'http://localhost:3000'
      : 'file://' + path.join(process.cwd(), 'resources', 'app', 'bin', 'index.html')
  )
  const template: Menu = Menu.buildFromTemplate([
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
