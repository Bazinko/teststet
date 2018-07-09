import { connect } from 'react-redux'
import RootView from './RootView'

export default connect(
  ({ session }) => ({
    session
  }),
  dispatch => ({
    dispatch
  })
)(RootView)
