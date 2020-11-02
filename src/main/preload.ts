import electron, { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('ipc', {
  ipcRenderer: electron.ipcRenderer
})
