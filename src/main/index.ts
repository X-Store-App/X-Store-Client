import path from "path"
import electron, { ipcMain, BrowserWindow, app, protocol } from "electron"
import resources from '../../config/resources.json'

app.whenReady().then(() => {
    protocol.registerFileProtocol('xstore', (request, callback) => {
        const url = request.url.substr(7)
        callback({ path: path.normalize(`${__dirname}/${url}`) })
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