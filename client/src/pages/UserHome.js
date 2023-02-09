import React from "react";
// import {Link} from 'react-router-dom';
// import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import Feed from "../components/feed";
import '../styles/home.css'
import '../styles/profile.css'
import '../styles/menuToolbar.css'

export default function UserHome(){
    return <>
      <div className="homeContainer">
        
        <div>
        <NavBar/>
        </div>
        <MenuToolbar/>
        <div id="scroll-container"> 
        <div className="sidebarWrapper">
        <ul className="sidebarList">
           <Feed/>
           </ul>
           </div> 
        </div>
  
    
    
  
   
   

       
    </div>
   

    </>
    }