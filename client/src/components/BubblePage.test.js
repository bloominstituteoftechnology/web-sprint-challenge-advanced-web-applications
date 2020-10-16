import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchColors as mockFetchColors } from '../api/getData';
jest.mock('../api/getData');

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    colors: [
      {color: "aliceblue", code: {hex: "#f0f8ff"}, id: 1},
      {color: "green", code: {hex: "#00ff00"}, id: 2}
    ]
  });

  render(<BubblePage/>);

  
});
