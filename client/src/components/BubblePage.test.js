import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  render(<App />);
  const username = screen.getByPlaceholderText("username");
  const password = screen.getByPlaceholderText("password");
  const loginBtn = screen.getByRole("button");
  const bubblesLink = screen.getByText("Bubbles");

  fireEvent.change(username, { target: { value: "user" } });
  fireEvent.change(password, { target: { value: "guest" } });
  fireEvent.click(loginBtn);
  fireEvent.click(bubblesLink);
});
