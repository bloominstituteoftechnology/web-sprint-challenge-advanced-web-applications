import React from 'react';

import {render, screen, waitFor} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from "@testing-library/user-event";

const testColorList = [
        {
            color: 'aliceblue',
            code: {
                hex: '#f0f8ff',
            },
            id: 1,
        },
        {
            color: 'limegreen',
            code: {
                hex: '#99ddbc',
            },
            id: 2,
        },
        {
            color: 'aqua',
            code: {
                hex: '#00ffff',
            },
            id: 3,
        },
    ];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />);
    const colorList = screen.getByText(/colors/i);
    expect(colorList).toBeDefined;
    expect(colorList).not.toBeNull;
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColorList} />);
    const colorList = screen.getAllByTestId('color');
    expect(colorList).toHaveLength(3);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", async () => {
    const { rerender } = render(<ColorList colors={testColorList} editing={true} />);
    await waitFor(() => {
        const color = screen.getByText(/aqua/i);
        userEvent.click(color);
        const editColor = screen.queryAllByTestId('editMenu');
        expect(editColor).not.toBeNull;
        expect(editColor).toHaveLength(1);
        rerender(<ColorList colors={testColorList} editing={false} />);
        const checkEditMenu = screen.queryAllByTestId('editMenu');
        expect(checkEditMenu).toHaveLength(0);
    })
});
