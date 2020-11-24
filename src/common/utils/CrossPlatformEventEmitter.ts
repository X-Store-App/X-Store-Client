class CrossPlatformEventEmitter {
  private _listeners: {
    listenerName: string,
    listeners: () => void[] | null
  }[] = []

  on (index: string, listener: () => void) {
    this._listeners[index].listeners += listener
  }

  emit (index: string) {
    const listeners = this._listeners[index].listeners
    listeners.forEach((element: () => void) => {
      element()
    })
  }

  removeListeners (index: string) {

  }
}

export { CrossPlatformEventEmitter }
