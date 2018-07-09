import { connect } from 'react-redux'
import View from './Drawer.view'
import { signOut } from '../session/SessionState'
import { bindActionCreators } from 'redux'

export default connect(
  ({ session }) => ({
    session
  }),
  dispatch => ({
    signOut: bindActionCreators(signOut, dispatch)
  })
)(View)
