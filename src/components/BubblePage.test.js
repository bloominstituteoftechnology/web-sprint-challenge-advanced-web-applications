import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
  // Finish this test
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<BubblePage />);
  const bubbles = screen.findByTestId(/bubbles/i)
  expect(bubbles).toBeTruthy();
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading