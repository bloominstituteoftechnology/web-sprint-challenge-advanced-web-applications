import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetctApi as mockFetch } from './fetchApi'

jest.mock('./fetchApi')

const mockData = {
  
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1,
  
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
}

test("Fetches data and renders the bubbles", async () => {
  mockFetch.mockResolvedValueOnce(mockData)
  const { debug, getByText, getAllByText } = render(<BubblePage />)
  await waitFor(() => {
    expect(getByText(/aliceblue/i)).toBeInTheDocument()
    expect(getByText(/#f0f8ff/i)).toBeInTheDocument()
  })
  debug()
});
