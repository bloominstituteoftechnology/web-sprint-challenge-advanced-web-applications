import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
const testArticle = {
    id: 'qOkzu', 
    headline: "test headline", 
    createdOn: '1921-11-05T12:00:21-05:00', 
    summary: "test summary", 
    body: "something interesting..." } 


test('renders component without errors', ()=> {
 render(<Article  />)
    
});

// test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)

    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
// });

// test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle} />);

    const author = screen.queryByTestId('author');
    expect(author).toHaveTextContent(/Associated Press/i);
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
         const handleDelete = jest.fn();

    render(<Article article={testArticle} handleDelete={handleDelete}/>);

    const deleteBtn = screen.queryByTestId('deleteButton');
    userEvent.click(deleteBtn);
    
    expect(handleDelete).toHaveBeenCalled();
    

// });

//Task List:
//1. Complete all above tests. Create test article data when needed.