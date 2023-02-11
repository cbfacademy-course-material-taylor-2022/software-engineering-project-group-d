import { render, screen } from '@testing-library/react';
import Feed from '../components/feed';

test('renders Feed component', () => {
render(<Share/>); 
  const linkElement = screen.getByText(/post/i);
  expect(linkElement).toBeInTheDocument();
});