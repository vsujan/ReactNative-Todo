export default function createReducer(initialState, handlers) { // handlers=> action types
  return function reducer(state = initialState, action) { // returns reducer function
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
