import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import Bubbles from "./Bubbles";

const testData = [
  {
    color: 'cyan',
    code: {hex: '#00FFFF'},
    id: 0,
  },

  {
    color: 'magenta',
    code: {hex: '#FF00FF'},
    id: 1,
  },
    
  {
    color: 'yellow',
    code: {hex: '#FFFF00'},
    id: 2,
  },

  {
    color: 'black',
    code: {hex: '#000000'},
    id: 3,
  }
]

test("Renders BubblePage without errors", async () => {
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<ColorList colors={testData} />)
  render(<Bubbles colors={testData} />)

  const color = await screen.findByText(/cyan/i)
  const colorTwo = await screen.findByText(/black/i)
  const bubblesRendered = await screen.findByTestId(/bubbles/i)

  expect(color).toBeInDocument()
  expect(colorTwo).toBeInDocument()
  expect(bubblesRendered).toBeInDocument()
  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading