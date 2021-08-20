import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

//I inpspected the res.data to see the needed syntax/structure.See my pic of this data in readme.md preview mode under testing. I created a TOC Table of Contents for easy reference. 
test("Renders without errors with blank color passed into component", () => {
    render(
        <Color
            color={{
                code: { hex: "" },
                color: "",
                id: 0,
            }}
        />
    );
});

test("Renders the color passed into component", () => {
    //Arrange - Usually Render/const/screen to prep for Action step
    render(
        <Color
            color={{
                code: { hex: "99ddbc" },
                color: "limegreen",
                id: 1,
            }}
        />
    );
    //Act - Usually const/screen for something
    let testColor = screen.getByText(/limegreen/i)
    //Assert - What's "expected"
    expect(testColor).toBeInTheDocument();

});
test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    //Arrange - Usually Render/const/screen to prep for Action step (review Day 1 (Monday) testing Display.test.js)
    const mockToggleFunc = jest.fn();
    const mockDeleteFunc = jest.fn();
    render(
        <Color
            color={{
                code: { hex: "" },
                color: "",
                id: 1,
            }}
            deleteColor={mockDeleteFunc}
            toggleEdit={mockToggleFunc}
        />
    );
    let theXToDelete = screen.getByText(/x/i);//it says "icon" on line 39 but it's a text letter "x". 

    //Act - Usually doing something to what you just const/screened/arranged
    userEvent.click(theXToDelete);

    //Assert - What's "expected"
    expect(mockToggleFunc).toHaveBeenCalled();
    expect(mockDeleteFunc).toHaveBeenCalled();
    expect(mockDeleteFunc.mock.calls).toHaveLength(1);
    expect(mockToggleFunc.mock.calls).toHaveLength(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    //Arrange - Usually Render/const/screen to prep for Action step
    const mocksetEditColorFunc = jest.fn();
    const mockToggleEditFunc = jest.fn();
    //Act - Usually doing something to what you just const/screened/arranged
    render(
        <Color
            color={{
                code: { hex: "" },
                color: "",
                id: 1,
            }}
            setEditColor={mocksetEditColorFunc}
            toggleEdit={mockToggleEditFunc}
        />
    );
    let theColorDiv = 
    //Assert - What's "expected"
});