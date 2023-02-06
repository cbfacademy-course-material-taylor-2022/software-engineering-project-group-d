import React, { useState } from 'react'
import NavBar from "../components/NavBar"
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
// import { TextField } from "@mui/material";
import '../styles/post.css';
export default function Post() {
  return <>
  <div className="post">
    <h3>Create New Post</h3> 
    <h3>Upload video or image</h3> <br />
  </div>
  <div>
  <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
  />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <h3>  OR  </h3>
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      {/* <TextField
  id="first-name"
  label="Name"
  value={this.state.name}
  onChange={this.handleChange('name')}
  margin="normal"
  /> */}
      </div>

    </>
  ;
}


 