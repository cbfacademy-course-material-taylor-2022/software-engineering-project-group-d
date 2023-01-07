import React from "react";
// import {Link} from 'react-router-dom';
// import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import Feed from "../components/feed";
import '../styles/home.css'

export default function UserHome(){
    return <>
    <div >
    <h1 >User HomePage</h1>
    <NavBar/>
    <MenuToolbar/>
     <div className="homeContainer">
     <Feed/>
       
            
       </div>
    </div>
   

    </>
    }