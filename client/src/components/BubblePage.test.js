import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { FetchAPI as mockFetch } from "./fetchApi";


jest.mock("./fetchApi");

const mockData = {
  data: [
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
  ],
};

test("Fetches data and renders the bubbles", async () => {
  mockFetch.mockResolvedValueOnce(mockData);

  const { findByText } = render(<BubblePage />);

  const colorFind = await findByText(/bubbles/i);

  expect(colorFind).toBeVisible;
});
