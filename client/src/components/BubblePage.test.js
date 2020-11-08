import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import from '../App'

test("Fetches data and renders the bubbles", () => {
  render(<App/>);
});