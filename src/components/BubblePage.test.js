import React from 'react';
import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import ColorList from './ColorList';

const testColors = [
    {code: {hex: "##ffebcd"},
    color: "blanchedalmond",
    id: 8},
    {code: {hex: "#6093ca"},
    color: "blue",
    id: 9},
    {code: {hex: "#ff000"},
    color: "red",
    id: 10}
];

test("Renders without errors", ()=> {
    render(<BubblePage />)  
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    const mockColorsFunc = jest.fn(() => { return (testColors) });
    render(<ColorList colors={mockColorsFunc()} />);

    await waitFor(()=>{
        const correctColorsReturned = screen.getAllByTestId(/color/i);
        expect(correctColorsReturned).toHaveLength(3);
    })
});
