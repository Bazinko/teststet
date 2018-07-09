import { combineReducers } from 'redux'
import { drawerState } from '../modules/Drawer'
import { routerReducer } from 'react-router-redux'
import { signInRootReducer } from '../modules/SignIn/SignIn.state'
import { snackRootReducer } from './snackReducer'
import { spinnerRootReducer } from './spinnerState'
import { sessionRootReducer } from './sessionState'
import { apiRootReducer } from '../modules/GCFP/GCFP.state';

const rootReducer = combineReducers({
  routing: routerReducer,
  signInState: signInRootReducer,
  drawerState: drawerState,
  spinner: spinnerRootReducer,
  snack: snackRootReducer,
  session: sessionRootReducer,
  gcfapiState: apiRootReducer
})

export default rootReducer
