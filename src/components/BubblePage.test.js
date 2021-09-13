import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from './BubblePage';

import { handlers as mockFetch } from '../mocks/handlers';

test("Renders without errors", ()=> {
    render(<BubblePage />)
    screen.debug
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    mockFetch.mockResolvedValueOnce({data: handlers})
    render(<BubblePage />)
    await waitFor(() => {
        const colors = screen.getAllByTestId(/colors/i)
    })
    screen.debug
});