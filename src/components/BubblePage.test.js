import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { axiosWithAuth, axiosWithAuth as mockAxios } from '../helpers/axiosWithAuth';


test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {

  // render(<BubblePage colorList = {[]} />)
  let colors = [
        {id:1, color: 'name1', code: { hex:"#111111"}},
        {id:2, color: 'name2', code: { hex: "#211111"}},
        {id:3, color: 'name3', code: { hex: "#311111"}}
      ]
   //This is wron and I can't figure out why I tried two ways.
  const {rerender} = render(<BubblePage  /> )

  let circles = screen.queryAllByTestId('circles')
  expect(circles).toHaveLength(0)
  let colorList={colors}

  rerender(<BubblePage colorList={colors} /> );
  circles = screen.queryAllByTestId('circles')

  expect(circles).toHaveLength(3)

//   const data = [
//     {id:1, color: 'name1', code: { hex:"#111111"}},
//     {id:2, color: 'name2', code: { hex: "#211111"}},
//     {id:3, color: 'name3', code: { hex: "#311111"}}
//   ]
//   mockAxios.mockResolvedValueOnce(data);

//   // Finish this test
// //arrange: the render
//   render(<BubblePage />)

//   const colors = await screen.findAllByTestId('circle')

//   //Act: 
  
//   //Assert: 

//   await waitFor (() => {
//     expect(colors).toHaveLength(3);
  // })
});


//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading