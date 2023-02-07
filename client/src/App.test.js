import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { render, screen } from '@testing-library/react';

import Homepage from "./pages/Homepage"
import About from "./pages/About"
import EditProfile from "./components/EditProfile"
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import UserHome from "./pages/UserHome";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/editprofile" component={EditProfile} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/userhome" component={UserHome} />
      <Route path="/profilepage/:id" component={ProfilePage} />
    </BrowserRouter>
  );
}

test('renders the landing page', () => {
    render(<App />);
    
    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to Passion4Travel website /);
    expect(screen.getByRole("Profile")).toHaveDisplayValue("Enter username");
    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });