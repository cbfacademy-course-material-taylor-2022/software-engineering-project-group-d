// The majority of this code was taken from:
//https://github.com/the-debug-arena/login-registration/blob/main/src/components/signup_component.js

import React from "react"
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

import { login, reset } from '../services/authSlice'

export default function SignIn() {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/user'
		} else {
			alert('Please check your username and password')
		}
  }
  return (
    <>
      <form onSubmit={loginUser} >
        <h3><FaSignInAlt/>Sign In</h3>

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

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </>   
    );
  }

