import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColors as mockFetchColors } from {BubblePage};

test("Fetches data and renders the bubbles", () => {
  // Finish this test

jest.mock('./fetchColors');
    describe("Test App", ()=>{
        test("renders without errors", ()=>{
            render(<App />);
});

test('fetches colors', async () => {
    render(<App />);

    const newColors = {data: [
      {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    }
    ]

};
  });
  
  mockFetchColors.mockResolvedValueOnce(newColors);
    };
