// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {register, reset} from "./services/authSlice";

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/profilePage";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllUsers } from "./services/userService";

function App() {
  return (
  <>
    <div>
      <BrowserRouter>
          <Route exact path="/" render={() =>(<Homepage/>)}/>
          <Route exact path="/user" render={() =>(<UserHome/>)}/>
          <Route exact path="/about" render={() =>(<About/>)} />
          <Route exact path="/signin" render={() =>(<SignIn/>)} />
          <Route exact path="/register" render={() =>(<Register/>)} />
          <Route exact path="/profile" render={() =>(<ProfilePage/>)} />
          <Route exact path="/editProfile" render={() =>(<EditProfile/>)} />
      </BrowserRouter>
    </div>
    {/* <ToastContainer/> */}
  </>
  );
}

export default App;
