import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";



const colors = {
  color: "Red",
  code: { hex: "#ab2222" },
}

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  // can render BubblePage

  render(<BubblePage />)

});
