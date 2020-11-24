import { CrossPlatformEventEmitter } from '../utils/CrossPlatformEventEmitter'

const StaticEmitter = new CrossPlatformEventEmitter()
StaticEmitter.on('hola', () => {
  console.log('HOLA')
})

export default StaticEmitter
