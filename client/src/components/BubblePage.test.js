import React from "react";
import { getByAltText, render, waitFor } from "@testing-library/react";
import fetchColors  from '../api/fetchColors';
import BubblePage from "./BubblePage";

jest.mock('../api/fetchColors');

test("Fetches data and renders the bubbles", async () => {
  fetchColors.mockResolvedValueOnce([{
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
  }])
  const {getByText} = render(<BubblePage/>)
  expect(getByText('bubbles')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByText(/aliceblue/i).tBeVisible());
  })



});


