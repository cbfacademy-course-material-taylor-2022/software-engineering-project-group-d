import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import EditProfile from '../components/EditProfile';

test('renders EditProfile component', async () => {
    render(
      <BrowserRouter>
        <EditProfile />
      </BrowserRouter>
    );

  const testElement = screen.getByText(/Welcome to Passion4Travel website/i)
  expect(testElement).toBeInTheDocument();
});