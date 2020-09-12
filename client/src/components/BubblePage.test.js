import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorsData = [
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
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
];

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { rerender, getAllByTestId, queryAllByTestId } = render(<BubblePage colorList={[]} />);

  const colorList = queryAllByTestId(/color/i);
  expect(colorList).toHaveLength(0);

  rerender(<BubblePage colorList={colorsData} />);
  const colorsList2 = getAllByTestId(/color/i);

  expect(colorsList2).toHaveLength(3);
});
