import * as actions from '../actions/types'

const initalState = {
  loading: false,
  colors: [],
  error: '',
  favorite: false,
}

export const colorsReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.ADD_FAVORITE_TOGGLE:
      return {
        colors: state.colors.map((fav) =>
          fav.id === action.id ? {...fav, favorite: !fav.favorite} : fav
        ),
      }
    case actions.ADD_NEW_COLOR:
      return {
        ...state,
        colors: action.data,
      }

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
    case actions.COLORS_UPDATE_SUCCESS:
      return {
        colors: state.colors.map((color) =>
          color.id === action.data.id ? (color = action.data) : color
        ),
      }

    default:
      return state
  }
}
