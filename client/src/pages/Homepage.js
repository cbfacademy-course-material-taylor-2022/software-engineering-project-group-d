import React from "react";
import NavBar from "../components/NavBar";


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
        <button>Sign In</button><br/><br/>
        <button>Register</button>
    </ul>
    </div>
    </>
}
