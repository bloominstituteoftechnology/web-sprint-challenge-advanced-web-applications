import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axios from 'axios'

test("Renders BubblePage without errors", () => {
    render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
    render(<BubblePage />)
    const colors = screen.getByText(/colors/i)
    expect(colors).toBeInTheDocument()
}); 