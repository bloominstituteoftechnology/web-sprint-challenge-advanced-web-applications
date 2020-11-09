import React from "react";
import { render, screen,waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from './ColorList'

test("Fetches data and renders the bubbles", () => {
render(<BubblePage />);
const {rerender}=render(<ColorList colors={[]}/>)
  let colorsList= screen.findByText(/color-list/i)
  expect(colorsList).toHaveLength(0)



  // Finish this test
});
