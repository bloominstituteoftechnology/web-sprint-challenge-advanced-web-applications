import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';
jest.mock('../services/fetchColorService');

const testColor = {
    color: "purple",
    code: { hex: "#9345EE"},
    id: 1
}

test("Renders without errors", ()=> {
    render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    fetchColorServices.mockResolvedValueOnce(testColor);
    render(<BubblePage />);
    const colors = screen.getAllByTestId("color");
    await waitFor(() => {
        expect(colors).toHaveLength(1);
    })
});