import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/navBar.css"


function NavBar(){
return <>
    <nav className="nav">
    <img 
            align-items="center"
            src="imgs/TravelLogo.png"
            alt="Wheel" 
            style={{ width: "40px"}}/>
    <Link to ='/'>Home</Link> <n/>
    <Link to ='/about'>About</Link>
    </nav>
</>
}

export default NavBar;
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function NavigationBar() {
//   return (
//     <>
//       <Navbar bg="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
      
//     </>
//   );
// }

// export default NavigationBar;