import { combineReducers } from 'redux'
import NavigatorStateReducer from '../modules/navigator/NavigatorState'
import { CounterStateReducer } from '../modules/counter/CounterState'
import { SessionStateReducer } from '../modules/session/SessionState'
import { SignInStateReducer } from '../modules/SignIn/SignIn.state'
import snackBarReducer from './SnackbarReducer'

// ## Generator Reducer Imports

const mainReducer = combineReducers({
  counter: CounterStateReducer,
  navigatorState: NavigatorStateReducer,
  session: SessionStateReducer,
  signIn: SignInStateReducer,
  snack: snackBarReducer
})

export default mainReducer
