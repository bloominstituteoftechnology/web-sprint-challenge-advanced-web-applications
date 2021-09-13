import React from 'react';
import { render, screen, wait, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BubblePage from './BubblePage';

import fetchColorServices from '../services/fetchColorService';
jest.mock('../services/fetchColorService');

const testColor = {
    color: "blue",
    code: {hex: "#7fffd4"},
    id: 1
}

test("Renders without errors", ()=> {

    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {

    fetchColorServices.mockResolvedValueOnce(testColor);

    render(<BubblePage />);
    const colors = screen.getAllByTestId("color");

    await waitFor(() => {
    expect(colors).toHaveLength(1);
    })
}); 