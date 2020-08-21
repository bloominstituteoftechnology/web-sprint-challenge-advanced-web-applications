import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColorsApi as mockFetchColorsApi, fetchColorsApi } from "../api/fetchColorsApi"

jest.mock("../api/fetchColorsApi")

const colorList = {

  data: 
  [
    {
      color: "red",
      code: { hex: "#ab2222" },
      },

      {
        color: "blue",
        code: { hex: "#ab2222" },
      },
  ]
}
  

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // can render BubblePage
  console.log(fetchColorsApi)

  mockFetchColorsApi.mockResolvedValueOnce(colorList)

  render(<BubblePage />)

  const colorsHeader = await screen.findByText(/colors/i)
  expect(colorsHeader).toBeInTheDocument()

  const colorArray = await screen.findAllByTestId("colors")
  
  expect(colorArray).toHaveLength(2)
  console.log(colorArray)
  
});
