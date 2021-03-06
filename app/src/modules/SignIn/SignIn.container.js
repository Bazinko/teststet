import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignInView from './SignIn.view'
import { signIn } from './SignIn.state'
// import { push } from 'react-router-redux'

export default connect(
  state => ({
    signIn: state.signIn
  }),
  dispatch => ({
    signIn: bindActionCreators(signIn, dispatch)
    // push: bindActionCreators(push, dispatch)
  })
)(SignInView)
