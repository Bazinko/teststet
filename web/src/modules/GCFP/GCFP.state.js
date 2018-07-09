import { GCF_RUN, GCF_RES } from '../../redux/actionTypes'

const initialState = {
  baseUrl: '',
  cfName: '',
  result: ''
}

export const rungcf = (cfName) => ({
  type: GCF_RUN,
  payload: { cfName, body: {} }
})

const apiReducers = {
  [GCF_RES]: (state, payload) => {
    return {
      ...state,
      ...payload,
    }
  },
  GCF_RUN: (state, payload) => {
    return {
      ...state,
      ...payload,
    }
  }
}

export const apiRootReducer = (state = initialState, action) => {
  let reducer = apiReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
