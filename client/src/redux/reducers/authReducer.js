import * as actions from '../actions/types'

const initalState = {
  isAuthenticated: false,
  token: '',
  error: '',
}

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data,
        isAuthenticated: true,
      }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
      }
    case actions.LOGOUT:
      return {
        ...state,
        token: '',
        isAuthenticated: false,
      }

    default:
      return state
  }
}
