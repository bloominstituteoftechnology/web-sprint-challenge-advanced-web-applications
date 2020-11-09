import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axiosWithAuth  from '../utils/axiosWithAuth';

const fetchColors = () => {
  axiosWithAuth()
    .get("/api/colors")
    .then((response) => setColorList(response.data))
    .catch((error) => console.log(error.response.data));
};

let mockFetchColors = fetchColors();

jest.mock(mockFetchColors);
console.log("colors", mockFetchColors);

describe("Colors test", ()=>{
  test('Renders without error', ()=>{
    render(<BubblePage colors={[]}/>);
  });

  test("Fetches data and renders the bubbles", async () => {
    const mockColors = [
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

    const { rerender } = render(<BubblePage mockColors={[]} />);

    rerender(<BubblePage mockColors={mockColors} />);

    expect(await screen.findByText(/bubbles/i)).toBeInTheDocument();
    expect(await screen.findByText(/colors/i)).toBeInTheDocument();
    });
})
