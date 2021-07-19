import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const testColor = {
    color: 'limegreen',
    code: {
        hex: '#99ddbc',
    },
    id: 2,
};

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{ color: '', code: { hex: '' } }} />);
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor} />);
    const colorName = screen.getByText(/limegreen/i);
    expect(colorName).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    render(
        <Color
            color={testColor}
            deleteColor={() => {}}
            toggleEdit={() => {}}
        />
    );
    const deleteButton = screen.getByTestId('delete');
    userEvent.click(deleteButton);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    render(
        <Color
            color={testColor}
            deleteColor={() => {}}
            toggleEdit={() => {}}
            setEditColor={() => {}}
        />
    );
    const colorDiv = screen.getByTestId('color');
    userEvent.click(colorDiv);
});