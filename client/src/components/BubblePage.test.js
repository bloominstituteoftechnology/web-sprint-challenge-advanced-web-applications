import React from "react";
import { getByAltText, render, waitFor } from "@testing-library/react";
import fetchColors  from '../api/fetchColors';
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";

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
  const {getByText, getByTestId} = render(<BubblePage/>)
  expect(getByText('bubbles')).toBeInTheDocument();
  expect(getByTestId('bubbles')).toBeInTheDocument();
 


});


