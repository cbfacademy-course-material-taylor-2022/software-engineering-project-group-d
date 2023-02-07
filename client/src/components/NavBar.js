import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/navBar.css"



function NavBar(){
return <>
    <nav className="nav">
    <div className='logo-box'>
    <img 
            align-items="center"
            src="imgs/Passion4Travel.png"
            alt="Logo" 
            style={{ width: "40px"}}/>
    <Link to ='/'>Home</Link> <n/>
    <Link to ='/about'>About</Link>
    </div>
    </nav>
</> 
}

export default NavBar;