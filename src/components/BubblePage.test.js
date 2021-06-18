import React from 'react';
import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
// import { fetchColorService as mockFetch } from '../services/fetchColorService'; 

// jest.mock('../services/fetchColorService');

test("Renders without errors", ()=> {
    // mockFetch.mockResolvedValueOnce([]);
    render(<BubblePage />)
    screen.debug()
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage />)
    const colors = screen.getByText(/colors/i)
    expect(colors).toBeInTheDocument()
});