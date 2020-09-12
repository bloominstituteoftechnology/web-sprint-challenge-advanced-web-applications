import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorsData = [
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { rerender, getAllByTestId, queryAllByTestId } = render(<BubblePage colors={[]} />);

  const colorList = queryAllByTestId(/color/i);
  expect(colorList).toHaveLength(0);

  rerender(<BubblePage colors={colorsData} />);
  // const colorsList2 = getAllByTestId(/color/i);

  // expect(colorsList2).toHaveLength(3);
});