import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import getBubbles from "./getBubbles";

jest.mock("./GetBubbles")



const data = []




test("Renders BubblePage without errors", () => {
  // Finish this test
  getBubbles.mockValueOnce(data)
   render(<BubblePage/>)






});

test("Fetches data and renders the bubbles on mounting", async() => {
  getBubbles.mockValueOnce(data)
 await render(<BubblePage data ={data}/>)
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading