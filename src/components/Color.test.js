import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

import { handlers as mockFetch } from '../mocks/handlers';
import BubblePage from './BubblePage';
jest.mock("../mocks/handlers")

test("Renders without errors with blank color passed into component", () => {
    mockFetch.mockResolveValueOnce({data: handlers})
    render(<BubblePage />)
    screen.debug
});
  
test("Renders the color passed into component", () => {

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {

});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});