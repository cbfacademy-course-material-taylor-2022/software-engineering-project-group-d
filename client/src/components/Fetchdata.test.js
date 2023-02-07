import { render, screen } from '@testing-library/react';
import Fetchdata from './Fetchdata';

test('renders Fetchdata component', () => {
render(<Fetchdata/>);
const linkElement = getByText(/data/i);
expect(linkElement).toBeInTheDocument();
});
      


 
