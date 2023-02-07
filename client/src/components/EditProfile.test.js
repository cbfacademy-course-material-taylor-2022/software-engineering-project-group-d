import { render, screen } from '@testing-library/react';
import EditProfile from './EditProfile';

test('renders EditProfile component', () => {
  render(<EditProfile/>);
  const linkElement =screen.getByText(/Welcome to Passion4Travel website/i);
  expect(linkElement).toBeInTheDocument();
});



