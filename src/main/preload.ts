import electron from 'electron'
import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld("ipc", {
    ipcRenderer: electron.ipcRenderer
})