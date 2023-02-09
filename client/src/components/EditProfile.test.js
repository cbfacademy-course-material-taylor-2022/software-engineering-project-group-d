import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditProfile from './EditProfile';

test('renders EditProfile component', () => {
  render(<EditProfile />);
  const testElement = screen.getByText(/Welcome to Passion4Travel website/i)
  expect(testElement).toBeInTheDocument();
});