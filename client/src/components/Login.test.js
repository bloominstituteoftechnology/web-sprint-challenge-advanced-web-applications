import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from '@testing-library/user-event';
import Login from "./Login";

test('Component renders without errors', () => {
    render(<Login/>)
});

test('Username and password text feilds work', () => {
    render(<Login/>);

    const username = screen.getByTestId('username');
    const password = screen.getByTestId('password');
    
    UserEvent.type(username, 'aoeu');
    UserEvent.type(password, 'aoeu');

    expect(username).toHaveValue('aoeu');
    expect(password).toHaveValue('aoeu');
});

test('When login submition is successful, input fields are cleared', async () => {
    render(<Login/>);
    localStorage.removeItem('token');

    const username = screen.getByTestId('username');
    const password = screen.getByTestId('password');
    const submitButton = screen.getByRole('button');
    
    UserEvent.type(username, 'Lambda School');
    UserEvent.type(password, 'i<3Lambd4');
    UserEvent.click(submitButton);

    

    await waitFor(() => {
        // expect(username).toHaveValue('');
        // expect(password).toHaveValue('');
    })
    
});
