import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

jest.mock("./BubblePage")

const fakeColors = [
  {
    color: "red",
    code: {
      hex: "#FF0000"
    },
    id: 1
  },
  {
    color: "black",
    code: {
      hex: "#000000"
    },
    id: 2
  },
  {
    color: "white",
    code: {
      hex: "#255255255"
    },
    id: 3
  },
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  render(<BubblePage colorList={fakeColors}/>)

  let colors = screen.queryAllByTestId("colorList");

  expect(colors).toHaveLength(3);
  expect(colors[0].color).toHaveTextContent("red");
  
});

// LOL this simple test still fails. I give up. Absolutely not worth it. Idk if I will ever get testing. It is just the worst
