import * as actions from '../actions/types'

const initalState = {
  loading: false,
  colors: [],
  error: '',
}

export const colorsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.FETCHING_COLORS:
      return {
        ...state,
        loading: true,
      }
    case actions.COLORS_FETCH_SUCCESS:
      return {
        ...state,
        colors: action.data,
        loading: false,
      }
    case actions.COLORS_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        loading: true,
      }
    case actions.COLORS_DELETE_SUCCESS:
      return {
        ...state,
        colors: state.colors.filter((color) => color.id !== action.id),
      }

    default:
      return state
  }
}
