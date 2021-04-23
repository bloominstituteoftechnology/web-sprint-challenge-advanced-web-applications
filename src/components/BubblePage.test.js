import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from "../helpers/fetchColors";

test("Renders BubblePage without errors", () => {
	// Finish this test
	render(<BubblePage />);

	const bubblesHeader = screen.getByText(/bubbles/i);
	const colorsHeader = screen.getByText(/colors/i);

	expect(bubblesHeader).toBeInTheDocument();
	expect(colorsHeader).toBeInTheDocument();
});

// jest.mock("../helpers/fetchColors")

test("Fetches data and renders the bubbles on mounting", () => {
	// Finish this test
	// render(<BubblePage />)
});
