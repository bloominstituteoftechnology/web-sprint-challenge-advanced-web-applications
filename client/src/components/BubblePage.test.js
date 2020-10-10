import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { axiosWithAuth as mockAxiosWithAuth } from "../api/axiosWithAuth";
import BubblePage from "./BubblePage";

jest.mock("../api/axiosWithAuth.js");
const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];
// test("BubblePage renders", () => {
//   render(<BubblePage />);
// });

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockAxiosWithAuth.mockResolvedValueOnce(colors);
  console.log("colors in test", colors);
  const { getByText } = render(<BubblePage />);
  expect(mockAxiosWithAuth).toHaveBeenCalledTimes(1);
  await waitFor(() => expect(getByText(/aliceblue/i)).toBeInTheDocument);
});
