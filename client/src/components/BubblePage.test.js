import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  useEffect(() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
        setColorList(res.data)
    })
    .catch(err => console.log('error dashboard', err))
}, [update])
});
