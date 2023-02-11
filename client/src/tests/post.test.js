import { render, screen } from '@testing-library/react';
import Feed from '../components/post';

test('renders Post Component',() => {
    const setToggle= jest.fn(); 
    describe(<Post setToggle={setToggle} btnTxt="Like"/>); 
    const post = screen.getByTestId("post"); 
      
    // Test 1
    test("Post Rendering", () => {
        expect(post).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Post Text", () => {
        expect(postMessage).toHaveTextContent("Like"); 
    })
})