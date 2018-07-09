import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GCFPView from './GCFP.view'
import { rungcf } from './GCFP.state'

export default connect(
  state => {
    return state.gcfapiState
  },
  dispatch => ({
    gcfR: bindActionCreators(rungcf, dispatch),
  })
)(GCFPView)
