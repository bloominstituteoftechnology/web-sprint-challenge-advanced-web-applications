import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchAPI as mockFetchAPI } from '../utils/fetchAPI'; 


const mockData = {
 data: [  
    {
  color: "aliceblue",
  code: {
    hex: "#f0f8ff"
  },
  id: 1
},
{
  color: "limegreen",
  code: {
    hex: "#99ddbc"
  },
  id: 2
},
{
  color: "aqua",
  code: {
    hex: "#00ffff"
  },
  id: 3
} 
] }

jest.mock('../utils/fetchAPI'); 

test("Fetches data and renders the bubbles", async () => {
  mockFetchAPI.mockResolvedValueOnce(mockData); 
  const { debug, getByText, getAllByTestId } = render(<BubblePage />); 
  await waitFor(() => {
    expect(getByText(/aliceblue/i)).toBeInTheDocument(); 
    expect(getAllByTestId(/color/i)).toHaveLength(3); 
  })
});