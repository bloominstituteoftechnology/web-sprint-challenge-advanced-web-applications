import React from "react";

import {render, screen, waitFor} from "@testing-library/react";
// setup file

import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from "./fetchBubbles";
jest.mock("./fetchBubbles");


    const newBubbles = { data:[
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    }
  ]};


describe("Bubble data is fetching and rendering", () => {
  it('logs in correctly', async () => {

    mockFetchBubbles.mockResolvedValueOnce(newBubbles);
    const {rerender} = render(<BubblePage/>);
    await waitFor(() => {
      rerender(<BubblePage/>);
    });

    const bubbles = screen.getByText(/aliceblue/i);
    expect(bubbles).toBeInTheDocument();
    // const wrapper = mount(<App />);
    // const username = wrapper.find('input#username');
    // const password = wrapper.find('input#password');
    // const button = wrapper.find('button');
    // const form = wrapper.find('form');

    // username.simulate('change', {target: {value : 'Lambda School'}});
    // password.simulate('change', {target: {value : 'i<3Lambd4'}});
    // button.at(0).simulate('click');

    // const preventDefault = jest.fn();
    // form.simulate('submit', { preventDefault });

    // setImmediate(() => {

    // wrapper.setProps({});
    // wrapper.update();
    // console.log("test");
    // console.log(wrapper.html());

    })
    
      });
