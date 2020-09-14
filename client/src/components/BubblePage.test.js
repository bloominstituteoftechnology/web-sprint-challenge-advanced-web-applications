import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import BubblePage from './BubblePage'
import apiAuth from 'axios'
// import {apiAuth} from '../utils/auth'

jest.mock('../utils/auth')

const colors = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff',
    },
    id: 1,
    favorite: false,
  },
]

test('Fetches data and renders the bubbles', async () => {
  apiAuth.get.mockResolvedValueOnce({data: colors})
  render(<BubblePage />)
  expect(getByTestId('loading')).toHaveTextContent('loading')
})
