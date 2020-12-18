import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const bubbles = [
  {
     color: "limegreen",
     code: { hex: "#99ddbc" },
     id: 1
  },
  {
    color: "aqua",
    code: { hex: "#00ffff"},
    id: 2
  },
]

test("Fetches data and renders the bubbles", () => {
  const { rerender } = render(
  <BubblePage error="" bubbles={[]} />
  );

  let bubbleObjects = screen.queryAllByTestId("bubbles");
  expect(bubbleObjects).toStrictEqual([]);
  expect(bubbleObjects).toHaveLength(0);

  rerender(<BubblePage error="" bubbles={bubbles} />);
  bubbleObjects = screen.queryAllByTestId("bubbles");
  expect(bubbleObjects).toHaveLength(0);

});
