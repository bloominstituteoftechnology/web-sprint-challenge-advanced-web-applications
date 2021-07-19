import React from 'react';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const testColorList = [];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={testColorList} />);
});

test("Renders a list of colors without errors", () => {
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});
