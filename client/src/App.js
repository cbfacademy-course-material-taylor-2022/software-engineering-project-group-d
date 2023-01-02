import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"

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
          {`${user.first_name} 
          ${user.last_name}`}
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
              <Route exact path="/" render={() =>(<Homepage/>)}/>
              <Route exact path="/about" render={() =>(<About/>)} />
          </BrowserRouter>
           {/* <EditProfile/> */}
        </>  
         
        )}
      </ul>
    </div>
  );
}

export default App;
