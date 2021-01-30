import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors } from "../api/fetchColors"

jest.mock("../api/fetchColors")

test("Renders BubblePage without errors", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    data: fakeData
  })
  const { getbyText } = render(<BubblePage />)
  
  const bubblesTitle = getbyText(bubbles / i)
  const colorsTite = getbyText(colors / i)
  
  expect(bubblesTitle).toBeInTheDocument();
  expect(colorsTitle).toBeInTheDocument();
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
 
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading