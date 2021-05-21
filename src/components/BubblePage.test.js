import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<BubblePage />);

  await waitFor(() => {
    const colorTitle = screen.queryByText(/colors/i);

    const firstColor = screen.queryByText(/softpink/i);

    expect(colorTitle).toBeInTheDocument();

    expect(firstColor).toBeInTheDocument();

  })
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading