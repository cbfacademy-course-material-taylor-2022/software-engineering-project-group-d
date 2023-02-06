import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/profilePage";
import Post from "./components/post";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllUsers } from "./services/userService";

function App() {

  
  
  return (
  <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/user" element={<UserHome/> } />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/create" element={<Post/>} />
          <Route path="/editProfile" element={<EditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  </>
  );
}

export default App;
