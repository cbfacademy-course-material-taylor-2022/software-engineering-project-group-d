import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the landing page', () => {
    render(<App />);
    
    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to Passion4Travel website /);
    expect(screen.getByRole("Profile")).toHaveDisplayValue("Enter username");
    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });