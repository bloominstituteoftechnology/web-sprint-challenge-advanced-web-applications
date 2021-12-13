import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

test("renders zero articles without errors", async () => {
    const { rerender } = render(<View articles={[]}/>);
    let articles = screen.queryAllByTestId('articles')
    expect(articles).toHaveLength(0);
});

// test("renders three articles without errors", async ()=> {
    const { rerender } = render(<View articles={[3]}/>);
    let articles = screen.queryAllByTestId('articles')
    expect(articles).toHaveLength(3);

// });

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.