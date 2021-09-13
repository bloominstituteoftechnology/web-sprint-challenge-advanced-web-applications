import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen , waitFor } from "@testing-library/react";
import ColorList from './ColorList';

import { handlers as mockFetch } from '../mocks/handlers';
import BubblePage from './BubblePage';
jest.mock("../mocks/handlers")

test("Renders an empty list of colors without errors", () => {
    render(<ColorList />)
    screen.debug()
});

test("Renders a list of colors without errors", () => {
    mockFetch.mockResolveValueOnce({data: handlers})
    render(<ColorList />)
    screen.debug
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<EditForm />)
});
