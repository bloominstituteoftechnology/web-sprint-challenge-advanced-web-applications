import React from "react";
import { render, screen, wait, fireEvent } from "@testing-library/react";
import Login from './Login';
import BubblePage from "./BubblePage";
import { act } from "react-dom/test-utils";

//setting up token 
//failed
/*
let token;
  beforeAll((done) => {
    axiosWithAuth()
      .post('/login')
      .send({
        username: "Lambda School",
        password: "i<3Lambd4",
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
      */
     //setting up jest for hooks
     jest.mock('react-router', () => ({
       ...jest.requireActual('react-router'),
       useHistory: () => ({
         push:jest.fn()
       })
     }))

test("User Can Login ", async () => {
  const mockOnSubmit = jest.fn()
  const{getByTestId, getByRole} = render(<Login onSubmit = {mockOnSubmit} />);
  const usernameInput = getByTestId("username")
  const passwordInput = getByTestId("password")
  await act (async () => {
    fireEvent.change(usernameInput, {target:{value:"Lambda School"}})
    fireEvent.change(passwordInput , {target: {value:"I<3Lambd4"}})
  })
  await act(async () => {
    fireEvent.click(getByTestId("submit"))
})
  expect(mockOnSubmit).toHaveBeenCalled
});

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  localStorage.setItem('token', token);
  const {getByText} = render(<BubblePage />)

  await wait (() => {
    getByText(/lilac/i);
  });
  const bubble = screen.getByText(/lilac/i);

  expect(bubble).toBeInTheDocument();

});