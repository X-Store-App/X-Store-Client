import { CrossPlatformEventEmitter } from '../../common/utils/CrossPlatformEventEmitter'

const StaticEmitter = new CrossPlatformEventEmitter()
StaticEmitter.on('hola', () => {
  console.log('HOLA')
})

export default StaticEmitter
