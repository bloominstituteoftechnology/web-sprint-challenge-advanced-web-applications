import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColorsApi as mockFetchColorsApi } from "../api/fetchColorsApi"

jest.mock("../api/fetchColorsApi")

const colorList = {
  data: 
  [
    {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff"
        },
        id: 1
      },

      {
        color: "red",
        code: {
          hex: "#f0f8ff"
        },
        id: 2
      },
  ]
}
  

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // can render BubblePage

  mockFetchColorsApi.mockResolvedValueOnce(colorList)

  render(<BubblePage />)

  const colorsHeader = await screen.findByText(/colors/i)
  expect(colorsHeader).toBeInTheDocument()

  const colorArray = await screen.findAllByTestId("colors")
  
  expect(colorArray).toHaveLength(2)
  console.log(colorArray)

});
