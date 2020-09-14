import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import Main from '../components/Main'
import {Provider} from 'react-redux'
import store from '../redux/store'

test('Initializes Main component and redux store w/ crash', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  )
})
