import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import EditMenu from './EditMenu';
import userEvent from '@testing-library/user-event';


const testColor = {
    color: "blue",
    code: {hex: "#7fffd4"},
    id: 1
}

const noColor = [];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList color={noColor}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList color={testColor}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const toggleEdit = jest.fn()
    render(<ColorList color={testColor}/>);
    let editing = screen.queryByTestId("color");
    userEvent.click(editing);
    expect(toggleEdit).toBeCalled();
});