import React from "react";
import {
	render,
	cleanup,
   waitFor,
	getByRole,
} from "@testing-library/react/";
import BubblePage from "./BubblePage";
import axios from "../__mock__/axios";
import Bubbles from "./Bubbles"
afterEach(cleanup);

const data = [
	{ color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
	{ color: "limegreen", code: { hex: "#99ddbc" }, id: 2 },
	{ color: "aqua", code: { hex: "#00ffff" }, id: 3 },
	{ color: "aquamarine", code: { hex: "#7fffd4" }, id: 4 },
];

test("Renders BubblePage without errors", async () => {
	axios.get.mockResolvedValueOnce(data);
	render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
	await render (<Bubbles colors ={data}/>)
});










//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading