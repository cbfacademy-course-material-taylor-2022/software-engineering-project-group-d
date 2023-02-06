import React from "react";
import NavBar from "../components/NavBar";
import {Link} from 'react-router-dom';
import SignIn from "../pages/SignIn";
import Logo from "../components/Logo";
import "../styles/homepage.css"



export default function Homepage(){
    return <>
    
    <div className="centered">
    <container>
        <NavBar/>
    </container>
        <Logo/>
    <ul>
        <Link to ='/signin'><button className="btn-grad1">Sign In</button></Link>  <br/><br/>
        <Link to ='/register'><button className="btn-grad">Register</button></Link>
    </ul>
    </div>
    </>
}
