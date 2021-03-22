import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Login from './Login';
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<Login />);
  userEvent.type(screen.getByLabelText(/username:/i), 'Lambda School');
  userEvent.type(screen.getByLabelText(/password:/i), 'i<3Lambd4');
  userEvent.click(screen.getByRole('button', { name: /login/i }));
  render(<BubblePage />);
  expect(screen.getByText(/colors/i).toBeInTheDocument());
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading