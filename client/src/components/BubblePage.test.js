import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import userEvent from '@testing-library/user-event'
import { axiosWithAuth } from '../utils/axiosWithAuth'

//GET the color first.
const getColor = () => {
  axiosWithAuth()
    .get('/colors')
    .then(res => console.log(res.data))
    .catch(err => console.log('ERROR: ', err))
}

const mockGetColors = getColor()
jest.mock(mockGetColors)

test('should render on the page', () => {
  render(<BubblePage colors={[]}/>)
})

test("Fetches data and renders the bubbles", () => {
  // Finish this test

  const mockColor = [
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
]

const { rerender } = render(<BubblePage mockColor={[]} />)

rerender(<BubblePage mockColor={mockColor} />)

const bubbleRender = screen.getByText(/bubbles/i)
expect(bubbleRender).toBeInTheDocument()


});
