import path from "path"
/// @ts-expect-error
import electron, { ipcMain, BrowserWindow, app, protocol } from "electron"
import resources from '../../config/resources.json'

app.whenReady().then(() => {
    const win = new BrowserWindow({
        title: resources.title,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
            nodeIntegration: false,
            enableRemoteModule: false
        } 
    })
})