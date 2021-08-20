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
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});