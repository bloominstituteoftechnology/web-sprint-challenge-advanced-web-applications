import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {setColorList as mockSetColorList } from './BubblePage';
test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

//set up the mock function
jest.mock(mockSetColorList)

test("Fetches data and renders the bubbles on mounting",async () => {
  // Finish this test
  mockSetColorList.mockResolvedValueOnce({
    message:[{color:'red',color:'blue',color:'green'}]
  })

});


//first i want to test bubbles with mock data



//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading