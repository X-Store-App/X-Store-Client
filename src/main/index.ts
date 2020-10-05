import path from "path"
import electron, { ipcMain, BrowserWindow, app } from "electron"
import resources from '../../config/resources.json'

app.whenReady().then(() => {
    const win = new BrowserWindow({
        title: resources.title,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.ts")
        } 
    })
})