import React from "react";
import * as rtl from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", async () => {
 let app = rtl.render(<BubblePage colorList={[]} />)
 const text = await app.findByText('bubbles')
 expect(text).toBeInTheDocument();
expect(text).toBeVisible();

});
