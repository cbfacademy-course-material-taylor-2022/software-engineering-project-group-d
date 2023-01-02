import React from "react";
import NavBar from "../components/NavBar";
import {Link} from 'react-router-dom';
import SignIn from "../components/SignIn";



export default function Homepage(){
    return <>
    <h1>HomePage</h1>
    <container>
        <NavBar/>
    </container>
    <div>
        <img 
                alig
                src="imgs/TravelLogo.png"
                alt="Logo" 
                style={{ width: "200px"}}/>
        {/* <button onClick={() =>addBook(title)}>Sign In</button> */}
    <ul>
        <Link to ='/signin'><button>Sign In</button></Link>  <br/><br/>
        <Link to ='/register'><button>Register</button></Link>
    </ul>
    </div>
    </>
}
