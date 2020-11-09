import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("Fetches data and renders the bubbles", async () => {

  render(<App />);
  const username = screen.getByPlaceholderText('1');
  const password = screen.getByPlaceholderText('2');
  const loginButton = screen.getByRole('button');
  const yoshi = screen.getByText('Protected Page');

  fireEvent.change(username, { target: {value: 'Lambda School'}});

  fireEvent.change(password, { target: {value: "i<3Lambd4"}});
  fireEvent.click(loginButton);
  fireEvent.click(yoshi);


  const bubbles = screen.getByText('bubbles');
});
