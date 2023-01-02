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