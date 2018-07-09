import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'
import config from '../../utils/configuration'

export const socket = io(config.apiServerAddress, {
  query: {
    clientType: 'mobile',
    clientVersion: config.appVersion
  },
  transports: ['websocket']
})

export default createSocketIoMiddleware(socket, 'socket/')
