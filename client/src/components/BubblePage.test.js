import React from "react";
import { render, screen,wait, getByText } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Login from "./Login"
import { axiosWithAuth as mockAxios } from "../api/axiosWithAuth"

console.log("kh: Bubblepage.test.js:mockaxios")
test("Fetches data and renders the bubbles", async () => {
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  localStorage.setItem('token', token);
  const {getByText} = render(<BubblePage />)

  await wait (() => {
    getByText(/blanchedalmond/i);
  });
  const color = screen.getByText(/blanchedalmond/i);

  expect(color).toBeInTheDocument();

});
