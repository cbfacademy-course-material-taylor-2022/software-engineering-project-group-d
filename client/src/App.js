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
          <>
          {/* <p>No profiles found</p> */}
           
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
     
           
           {/* <EditProfile/> */}
           {/* <UserHome/> */}
        </>  
        )}
      </ul>
    </div>
  );
}

export default App;
