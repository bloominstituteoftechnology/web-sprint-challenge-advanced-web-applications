import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import {render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';

import { fetchColorService as mockFetch } from "../services/fetchColorService";

jest.mock("../services/fetchColorService")

const colors = {
    data: [
        {
            color: "aliceblue",
            code: {
                hex: "#f0f8ff",
            },
            id: 1,
        },
        {
            color: "limegreen",
            code: {
                hex: "#99ddbc",
            },
            id: 2,
        },
        {
            color: "aqua",
            code: {
                hex: "#00ffff",
            },
            id: 3,
        },
        {
            color: "aquamarine",
            code: {
                hex: "#7fffd4",
            },
            id: 4,
        },
        {
            color: "lilac",
            code: {
                hex: "#9a99dd",
            },
            id: 5,
        },
    ]
}

test("Renders without errors", async ()=> {
    mockFetch.mockResolvedValueOnce([])
    render(<BubblePage />);
    await waitFor(() => {
        const colors = screen.getByText(/colors/i)
        const bubbles = screen.getByText(/bubbles/i)
        expect(colors).toHaveTextContent('Colors')
        expect(bubbles).toHaveTextContent('Bubbles')
    });
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    mockFetch.mockResolvedValueOnce(colors);
    render(<BubblePage />);
    await waitFor(() => []);
    const list = screen.getAllByTestId('color');
    const lilac = screen.getByText(/lilac/i);
    expect(list).toHaveLength(5);
    expect(lilac).toBeInTheDocument();
});