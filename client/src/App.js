import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/profilePage";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";


function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.fullname} 
           ${user.email}`}
           ${user.Age}`}
           ${user.Gender}`}
           ${user.Password}`}
           ${user.ChangePassword}`}
           ${user.NewPassword}`}
           
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
<<<<<<< HEAD
        //<p> No profiles found</p>
            <EditProfile/>
=======
          <>
          {/* <p>No profiles found</p> */}
           
          <BrowserRouter>
              <Route exact path="/" render={() =>(<UserHome/>)}/>
              <Route exact path="/about" render={() =>(<About/>)} />
              <Route exact path="/signin" render={() =>(<SignIn/>)} />
              <Route exact path="/register" render={() =>(<Register/>)} />
              <Route exact path="/profile" render={() =>(<ProfilePage/>)} />
              <Route exact path="/editProfile" render={() =>(<EditProfile/>)} />
          </BrowserRouter>
     
           
           {/* <EditProfile/> */}
           {/* <UserHome/> */}
        </>  
         
>>>>>>> e4c031f1eff5c3c0fdf0d565a1d14adc5f0b19b7
        )}
      </ul>
    </div>
  );
}

export default App;
