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
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});