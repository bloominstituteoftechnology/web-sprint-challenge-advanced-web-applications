import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {authColors} from './authColors'
import mockResponse from './response.json'


jest.mock('./authColors');

test("Renders the bubble page", ()=>{
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles", async() => {
  authColors.mockResolvedValuesOnce(mockResponse);
  render(<BubblePage />);
  await waitFor(()=>{
    const testColor=screen.getAllByText(/aliceblue/i);
    expect(testColor[0]).toBeInTheDocument();
  });
});

