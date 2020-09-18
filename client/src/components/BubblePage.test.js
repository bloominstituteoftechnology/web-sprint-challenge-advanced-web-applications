import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import { GetColors as mockGetColors } from "../utils/GetColors";

//create mock *before* setting up test
jest.mock("../utils/GetColors");

const mockData = [
  { color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
  { color: "aquamarine", code: { hex: "#7fffd4" }, id: 4 },
  { color: "lilac", code: { hex: "#9a99dd" }, id: 5 },
  { color: "softpink", code: { hex: "#dd99ba" }, id: 6 },
  { color: "bisque", code: { hex: "#dd9a99" }, id: 7 },
  { color: "softyellow", code: { hex: "#dcdd99" }, id: 8 },
  { color: "blanchedalmond", code: { hex: "#ffebcd" }, id: 9 },
  { color: "blue", code: { hex: "#6093ca" }, id: 10 },
  { color: "red", code: { hex: "#e30048" }, id: 11 },
];
test("Fetches data and renders the bubbles", async () => {
  mockGetColors.mockResolvedValueOnce({
    data: mockData,
  });
  // Finish this test
  const { getAllByTestId } = render(<ColorList colors={mockData} />);

  await waitFor(() => expect(getAllByTestId(/color/i)).toHaveLength(9));
});
