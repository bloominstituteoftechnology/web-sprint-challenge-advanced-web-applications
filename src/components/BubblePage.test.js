import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import { fetchBubbles as mockFetchBubbles} from '../api/fetchBubbles'
// jest.mock('../api/fetchBubbles');

test("Renders BubblePage without errors", () => {
  render (<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", () => {
//ARRANGE 
// mockFetchBubbles.mockResolvedValueOnce({
//       data:[
//           {color:"firstcolor", id:"1"},
//           {color:"secondcolor", id:"2"}
//       ]
//   });

// //ACT
// render(<BubblePage/>);
// //ASSERT

// await waitFor(()=> {
// expect(screen.getAllByTestId('color')).toHaveLength(2);
// });
// });


//Task List
//1. Setup test for basic rendering of component - done 
//2. Setup test for initial rendering of bubbles on loading

// data-testid="color"
// expect(screen.getAllByTestId('color')).toHaveLength(2);
});