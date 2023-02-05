// The majority of this code was taken from:
//https://github.com/SinghDigamber/react-login-signup-ui-template/blob/master/src/components/signup.component.js

import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { register, reset } from '../services/authSlice'
import { FaUser } from 'react-icons/fa'
import NavBar from '../components/NavBar'
// import Spinner from '../components/Spinner'
import { useHistory } from 'react-router-dom'

export default function Register() {
  // const [formData, setFormData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  //   password2: '',
  // })

  // const { first_name, last_name, email, password, password2 } = formData

  // const redirect = Redirect()
  // const dispatch = useDispatch()

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // )

  // useEffect(() => {
  //   if (isError) {
  //     Redirect('/')
  //   }

  //   if (isSuccess || user) {
  //     Redirect('/user')
  //   }

  //   dispatch(reset())
  // }, [user, isError, isSuccess, message, redirect, dispatch])

  // const onSubmit = (e) => {
  //   e.preventDefault()

  //   if (password !== password2) {
  //     toast.error('Passwords do not match')
  //   } else {
  //     const userData = {
  //       first_name,
  //       last_name,
  //       email,
  //       password,
  //     }

  //     dispatch(register(userData))
  //   }
  // }

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

 

  // if (isLoading) {
  //   return <Spinner />
  // }

  const history = useHistory()

	const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8080/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_name,
        last_name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}


    return (
        <>
        <container>
          <NavBar/>
      </container>
      <form onSubmit={registerUser}>
        <h3> <FaUser /> Register</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={first_name}
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
            type="text" 
            className="form-control" 
            name="last_name"
            value={last_name}
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          
            />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
           
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={(e) => setPassword2(e.target.value)}
            
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </>
    )
  
}