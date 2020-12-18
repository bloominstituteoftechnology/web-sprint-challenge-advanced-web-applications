import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const bubbles = [
  {
    bubbles_name: "acaiblue",
    bubbles_id: '123456'
  },
  {
    bubbles_name: 'purple',
    bubbles_id: '456789'
  }
];

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { rerender } = render(
    <BubblePage bubbles={[]} />
  );

  let bubblesObjects = screen.queryAllByTestId("bubbles");
  expect(bubblesObjects).toStrictEqual([]);

  rerender(<BubblePage bubbles={bubbles} />);
  bubblesObjects = screen.queryAllByTestId("bubbles");
  expect(bubblesObjects).toHaveLength(2);
  

});
