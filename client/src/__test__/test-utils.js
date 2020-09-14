import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import * as actions from '../redux/actions/types'
// Import your own reducer

const startingState = {
  loading: false,
  colors: [
    {
      color: 'limegreen',
      code: {
        hex: '#99ddbc',
      },
      id: 2,
      favorite: true,
    },
  ],
  error: '',
  favorite: false,
}

const reducer = (state = startingState, action) => {
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

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'
// override render method
export {render}
