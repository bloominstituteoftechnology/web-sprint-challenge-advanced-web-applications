import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList'

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

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors} />)
});


test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    // //Arrange - Usually Render/const/screen to prep for Action step
    const { rerender } = render(<ColorList colors={testColors} editing={true} />)
    // //See/inspect DOM for variable name choices. 
    const editColorLegend = screen.getByText(/edit color/i);
    const labelForColorName = screen.getByText(/color name/i);
    const labelForColorHex = screen.getByText(/hex code/i);
    
    // //Act - Usually doing something to what you just const/screened/arranged
    // //in this case the form should be true and therefore all the above would be present.So not additional actions are needed after editing = true which I've set above in line 
    
    
    // //Assert - What's "expected" from the actions taken
    expect(editColorLegend).toBeInTheDocument()
    expect(labelForColorName).toBeInTheDocument();
    expect(labelForColorHex ).toBeInTheDocument();
    
    // //ReArrange for "falsey" conditions- Usually Render/const/screen to prep for Action step
    rerender(<ColorList colors={testColors} editing={false} />);
    // // //Act - Usually doing something to what you just const/screened/arranged
    // // //Assert - What's "expected" from the actions taken
    expect(editColorLegend).not.toBeInTheDocument();
    expect(labelForColorName).not.toBeInTheDocument();
    expect(labelForColorHex).not.toBeInTheDocument();
    });