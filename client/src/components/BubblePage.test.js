import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { FetchColors as mockFetchColors } from "../api/FetchColors";
jest.mock("../api/FetchColors");

const mockData = [
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
  },
];

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(mockData);
  render(<BubblePage />);
});
