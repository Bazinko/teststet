import { fromJS } from 'immutable'
import showMessage from '../services/showMessage'

export const SNACK = 'SNACK'

const initialState = fromJS({
  message: ''
})

const snackReducers = {
  [SNACK]: (state = initialState, { payload: { message = '' } } = {}) => {
    showMessage(message)
    return state.set('message', message)
  }
}

export default (state = initialState, action = {}) => {
  let reducer = snackReducers[action.type]
  return reducer ? reducer(state, action) : state
}
