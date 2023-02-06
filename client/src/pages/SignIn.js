// The majority of this code was taken from:
//https://github.com/the-debug-arena/login-registration/blob/main/src/components/signup_component.js

import React from "react"
import { useState } from 'react'
import bcrypt from 'bcryptjs'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import "../styles/auth.css"



export default function SignIn() {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  

  async function loginUser(event) {
		event.preventDefault()

	const response = await fetch('http://localhost:8080/api/user/auth', 
    {
      mode:'cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
    const data = await response.json()
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')

		if (data.email === email && bcrypt.compare(password, data.password)) {
			
			alert('Login successful')
      navigate("/user")
     
		} else {
			alert('Please check your username and password')
		}
  }
  return (
    <>
    <div >
    <section>
      <NavBar/>
      <h3><FaSignInAlt/>Sign In</h3>
    </section>
    <section  >
      <form onSubmit={loginUser} >
      
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              height={"20px"}
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/register">Sign Up</a>
        </p>
      </form>
      </section>
      </div>
    </>   
    );
  }

