import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<BubblePage isFetchingData={true}/>);

  
  const value = screen.queryByText(/we are fetching data/i);
  
  
  expect(value).toBeInTheDocument();
  expect(value).toBeTruthy();
  expect(value).toHaveTextContent(/we are fetching data/i);
  expect(value).not.toBeNull();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading

// * [*] Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API