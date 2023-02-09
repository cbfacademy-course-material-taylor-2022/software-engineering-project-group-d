//This page was create by Gillian

import React from "react";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";
import '../styles/profile.css';
import '../styles/post.css';


// import { TextField } from "@mui/material";




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
                    <h3>Create New Post</h3>
                    <h3>Upload video or image</h3> <br />

                    <input type="file" accept="image/*" style={{ display: 'none' }}  id="contained-button-file"/>

                    <label htmlFor="contained-button-file">
                        {/* <Button variant="contained" color="primary" component="span">Upload</Button> */}
                    </label>

                    <h3> OR </h3>

                    <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />

                    <label htmlFor="icon-button-file">
                        {/* <Button color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </Button> */}
                    </label>

                      {/* <TextField id="first-name" label="Name" value={this.state.name}
                            onChange={this.handleChange('name')} margin="normal"  /> */}
   
                        <ul>
                            <button className="editProfileButton">Browse for file</button>
                        </ul>
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

    
    
    
   
    
    
    
   
    
    
    
    
  
    
  
    
  
     