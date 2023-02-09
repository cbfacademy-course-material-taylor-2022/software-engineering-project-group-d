import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/profilePage";

function App() {
  return (
    <div>
      <ul>       
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserHome/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/editProfile" element={<EditProfile/>}/>
              </Routes>
            </BrowserRouter>  
      </ul>
    </div>
  );
}

export default App;
