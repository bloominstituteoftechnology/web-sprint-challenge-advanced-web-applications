import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "../components/ColorList";
import Bubbles from "../components/Bubbles";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

//1. Setup test for basic rendering of component
const getColor = () => {
	axiosWithAuth()
		.get("/colors")
		.then((res) => res.data)
		.catch((err) => console.log("ERROR: ", err));
};

const color = [
	{
		color: "bisque",
		code: {
			hex: "#dd9a99",
		},
		id: 7,
	},
	{
		color: "softyellow",
		code: {
			hex: "#dcdd99",
		},
		id: 8,
	},
	{
		color: "blanchedalmond",
		code: {
			hex: "#ffebcd",
		},
		id: 9,
	},
	{
		color: "blue",
		code: {
			hex: "#6093ca",
		},
		id: 10,
	},
	{
		color: "blueviolet",
		code: {
			hex: "#8a2be2",
		},
		id: 11,
	},
];

const mockGetColors = getColor();
jest.mock(mockGetColors);

//Testing mocked GET

test("Renders BubblePage without errors", () => {
	render(<BubblePage />);
});

//2. Setup test for initial rendering of bubbles on loading

test("Fetches data and renders the bubbles on mounting", () => {
	render(<BubblePage />);
	render(<ColorList colors={color} />);
	render(<Bubbles colors={color} />);
	expect(screen.getByText(/blueviolet/i)).toBeInTheDocument();
});
