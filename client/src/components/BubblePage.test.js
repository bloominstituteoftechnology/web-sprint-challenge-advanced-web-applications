import React from "react";
import { render, screen, wait, getByText } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetch } from './fetchApi'
import { act } from 'react-dom/test-utils'

jest.mock('./fetchApi')

const mockData = {
  data: [
    {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  await act( async () => {
    await mockFetch.mockResolvedValueOnce(mockData)
  }) 
  const { debug, queryByText, getByText} = render(<BubblePage />)
  await wait( async () => {
  await getByText('aliceblue')
  })
  await expect(queryByText(/aliceblue/i)).toBeInTheDocument()
  await expect(queryByText(/#f0f8ff/i)).toBeInTheDocument()
  debug()
});
