import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { axiosWithAuth as mockAxios} from '../helpers/axiosWithAuth';

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  jest.mock('../helpers/axiosWithAuth');
  const mockColors = [
    {id:1, color: 'name1', code: { hex:"#111111"}},
    {id:2, color: 'name2', code: { hex: "#211111"}},
    {id:3, color: 'name3', code: { hex: "#311111"}}
  ]
  
  // Finish this test
//arrange: the render
  render(<BubblePage />)
  mockAxios.get.mockResolvedValueOnce({mockColors});

  //Act: 
  // jest.mockResolvedValueOnce(mockGetData);


  //Assert: 
  
});
//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading