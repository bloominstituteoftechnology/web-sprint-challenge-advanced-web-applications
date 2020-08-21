import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";



const colorList = [
  {
  color: "red",
  code: { hex: "#ab2222" },
  }
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // can render BubblePage
  const { rerender } = render(<BubblePage colors={[]} />)

  let colorArray = screen.queryAllByTestId(/colors/i)

  rerender(<BubblePage colors={[colorList]} />)
  const colorsHeader = await screen.findByText("colors")

  colorArray = screen.findAllByTestId("colors")
  expect(colorArray).toHaveLength(0)
  console.log(colorArray)
});
