import {
  SIGN_IN,
  RESET_STATE,
  INITIALIZE_STATE,
  SESSION_STATE,
  RESET_CONNECTION,
  SIGN_OUT
} from '../../redux/actionTypes'
// Initial state
const initialState = {
  isReady: false,
  isConnected: false,
  didShowChangeDefaultPassword: false,
  user: {},
  isLoggedIn: false
}

export const resetSessionStateFromSnapshot = state => {
  return {
    type: RESET_STATE,
    payload: state
  }
}

export const initializeSessionState = () => {
  return {
    type: INITIALIZE_STATE
  }
}

export const signOut = () => ({
  type: SIGN_OUT
})

// Reducer
const sessionStateReducers = {
  [INITIALIZE_STATE]: state => ({ ...state, isReady: true }),
  [RESET_STATE]: state => ({ ...state, isReady: true }),
  [SESSION_STATE]: (state, payload = {}) => ({
    ...state,
    isConnected: true,
    ...payload
  }),
  [SIGN_OUT]: state => ({
    ...state,
    isLoggedIn: false
  })
}

export const resetConnection = () => ({
  type: RESET_CONNECTION
})

export const SessionStateReducer = (state = initialState, action) => {
  let reducer = sessionStateReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
