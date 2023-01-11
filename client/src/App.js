import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/profilePage";
import Post from "./components/post";
import CreatePost from "./pages/CreatePost";
// import "./App.css";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

// function App() {
//   return (
//     <div className="App">
//       <p>Hi I'm Gillian</p>
//     </div>
//   );
// }
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
          //<p>No profiles found</p>
          <BrowserRouter>
          <Route exact path="/" render={() =>(<CreatePost/>)}/>
          <Route exact path="/about" render={() =>(<About/>)} />
          <Route exact path="/signin" render={() =>(<SignIn/>)} />
          <Route exact path="/register" render={() =>(<Register/>)} />
          <Route exact path="/profile" render={() =>(<ProfilePage/>)} />
          <Route exact path="/editProfile" render={() =>(<EditProfile/>)} />
      </BrowserRouter>
        )}
      </ul>
    </div>
  );
}

export default App;
