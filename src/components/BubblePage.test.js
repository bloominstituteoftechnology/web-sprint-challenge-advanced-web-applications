import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render (<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
//ARRANGE 

//ACT
//ASSERT
});

//Task List
//1. Setup test for basic rendering of component - done 
//2. Setup test for initial rendering of bubbles on loading

// data-testid="color"
// expect(screen.getAllByTestId('color')).toHaveLength(2);