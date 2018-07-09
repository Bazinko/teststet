import env from '../../env/env'
const {apiServerAddress} = env
const build = 14
const appVersion = '1.0.0'

const configs = {
  apiServerAddress: apiServerAddress ? apiServerAddress: '',
  TRACKING_ID: 'UA-111707281-2',
  appVersion
}

export default {
  build,
  appVersion,
  ...configs
}
