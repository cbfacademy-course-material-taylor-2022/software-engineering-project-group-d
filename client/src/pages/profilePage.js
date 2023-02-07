import React from "react";
import {Link} from 'react-router-dom';
// import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import '../styles/profile.css'




export default function ProfilePage(){


  const userName = localStorage.getItem('user');
 

    return <>
    <div >
        <NavBar/>
        <MenuToolbar/>
        <div>
        <br/><br/><br/>
            <div className="editProfile">
                <div className="postWrapper">
                    <div className="editProfileText" >
                        <h5>{`Username: ${userName}`} </h5>
                        <p>Saved user bio info</p>
                        <ul><Link to ='/editProfile'>
                            <button className="editProfileButton">Edit Profile</button>
                            </Link></ul>
                        </div>
                    </div>
                </div>
            <div className="editProfile">
            Here I will have to link to the data containing
            </div>
        </div>
    </div>
    </>
    };

    

     