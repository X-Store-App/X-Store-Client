import { Menu, ipcMain } from 'electron'
import menu from './menu.json'
import api from 'API'

function setupMenus () {
  api.emit('hola')
}

export default setupMenus
