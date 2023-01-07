import React, { useState, useEffect } from "react";
import EditProfile from "./component/EditProfile";
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
        //<p> No profiles found</p>
            <EditProfile/>
        )}
      </ul>
    </div>
  );
}

export default App;
