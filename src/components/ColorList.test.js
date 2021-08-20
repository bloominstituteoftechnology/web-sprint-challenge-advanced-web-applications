import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
const testColors = [
    {code: {hex: "#blanchedalmond"},
    color: "aliceblue",
    id: 8},
    {code: {hex: "#6093ca"},
    color: "blue",
    id: 9},
    {code: {hex: "#ff000"},
    color: "red",
    id: 10}
];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});
