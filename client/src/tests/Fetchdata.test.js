import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fetchdata from '../components/Fetchdata';

test('renders Fetchdata component', () => {
render(<Fetchdata/>);
const linkElement = getByText(/data/i);
expect(linkElement).toBeInTheDocument();
});
     