import React from 'react'
import {createStore} from 'redux'

import {Provider} from 'react-redux'
import * as actions from '../redux/actions/types'
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from '@testing-library/react'
import Main from '../components/Main'
import '@testing-library/jest-dom'

afterEach(cleanup)

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

function renderWithRedux(
  component,
  {initalState, store = createStore(reducer, initalState)} = {}
) {
  return {
    ...render(<Provider store={store}> {component}</Provider>),
  }
}

it('Renders the connected app with initialState', async () => {
  const {getByTestId} = renderWithRedux(<Main />)
})
