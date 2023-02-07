import { render } from '@testing-library/react';
import Register from './Register';

test('renders Register correctly', () => {
  const { getByText } = render(<NavBar />);
  const headerElement = getByText(/Sign Up/i);
  expect(headerElement).toBeInTheDocument();
});
