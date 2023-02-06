import React from "react";
import {Link} from 'react-router-dom';

import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import '../styles/profile.css'


export default function Create(){
    return <>
    <div >
        <NavBar/>
        <MenuToolbar/>
        <div>
        <br/><br/><br/>
            <div className="editProfile">
                <div className="postWrapper">
                    <div className="editProfileText">
                        <h5>Upload Post</h5>
                        <p>Drag your media here or upload file</p>
                        <ul><Link to ='/editProfile'>
                            <button className="editProfileButton">Browse for file</button>
                            </Link></ul>
                        </div>
                    </div>
                </div>
            <div className="editProfile">
            <div className="postWrapper">
                    <div className="editProfileText">
                        <h5>Write caption</h5>
                        <p>Drag your media here or upload file</p>
                        <ul><Link to ='/editProfile'>
                            <button className="editProfileButton">Browse for file</button>
                            </Link></ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
    }

    

     