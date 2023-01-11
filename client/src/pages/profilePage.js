import React from "react";
import {Link} from 'react-router-dom';
// import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import Feed from "../components/feed";
import '../styles/post.css'


export default function ProfilePage(){
    return <>
    <div >
        <h1 >Profile Page</h1>
        <NavBar/>
        <MenuToolbar/>
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <h5>Username</h5>
                        <p>Saved user bio info</p>
                        <ul><Link to ='/editProfile'>
                            <button className="editProfileButton">Edit Profile</button>
                            </Link></ul>
                        </div>
                    </div>
                </div>
            <div className="post">
            {/* Here I will have to link to the data containing */}
            <p>Create a Post</p>
            </div>
        </div>
    </div>
    </>
    }

    

     