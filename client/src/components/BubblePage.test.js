import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetch } from './fetchApi';

jest.mock('./fetchApi')

const testColorData =  {
  data:[
  
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
]
}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetch.mockResolvedValueOnce(testColorData)
  const { debug } =render( <BubblePage />);
  await waitFor(() =>{})
  debug();
});
