import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './Spinner'; // Adjust the import path based on your file structure

describe('Spinner Component', () => {
  test('renders correctly when "on" is true', () => {
    render(<Spinner on={true} />);
    
    // Check if the spinner is in the document
    const spinner = screen.getByText(/please wait/i);
    expect(spinner).toBeInTheDocument();

    // Check if the spinner has the correct ID
    const spinnerContainer = screen.getByTestId('spinner');
    expect(spinnerContainer).toBeInTheDocument();
  });

  test('does not render when "on" is false', () => {
    render(<Spinner on={false} />);

    // Ensure the spinner is not in the document
    expect(screen.queryByText(/please wait/i)).not.toBeInTheDocument();
  });
});
