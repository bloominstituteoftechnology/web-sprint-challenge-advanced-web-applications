import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockAxios } from "../api/axiosWithAuth"

const mockColor = {
  code: {
    hex: '#7fffd4'
  },
  color: 'aqua',
  id: 1
}
test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockAxios.mockResolvedValueOnce( mockColor );
  const {getByTestId} = render(<BubblePage />)

  await wait (() => {
    getByTestId(/color/i);
  });
  const color = screen.getByTestId(/color/i);
  expect(color).toBeInTheDocument();

});