import React from "react";
import NavBar from "../components/NavBar";
import {Link} from 'react-router-dom';
import SignIn from "../components/SignIn";
import Logo from "../components/Logo";



export default function Homepage(){
    return <>
    <h1>HomePage</h1>
    <container>
        <NavBar/>
    </container>
    <div>
        <Logo/>
    <ul>
        <Link to ='/signin'><button>Sign In</button></Link>  <br/><br/>
        <Link to ='/register'><button>Register</button></Link>
    </ul>
    </div>
    </>
}
