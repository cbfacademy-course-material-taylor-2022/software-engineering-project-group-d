import React, { useState } from 'react';
import NavBar from './NavBar';
import MenuToolbar from './MenuToolbar';
import '../styles/profile.css';
import {useNavigate} from 'react-router-dom'


const EditProfile = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  // const [forgottenpassword, setForgottenPassword] = useState('true');
  const [changepassword, setChangePassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [submitted,setSubmitted] = useState(false);

  const navigate = useNavigate();

	async function updateProfile(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8080/api/user/profile', {
      mode:'cors',
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				bio,
        email,
        age,
        gender
			}),
		})

		const data = await response.json()
    const userName = localStorage.getItem('user')

		if (data.email=== userName ) {
      localStorage.setItem('bio', data.bio)
      localStorage.setItem('user', data.email)
			alert('Bio uploaded')
			navigate("/profile")
      
      
		}
    else {
			alert('error test')
		}}


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setSubmitted(true);
  // }

  return (
    <>
    <NavBar/>
    <MenuToolbar/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>

      <form onSubmit={updateProfile} className='profile'>
        <div> 
          <label><h2><br/> Welcome to Passion4Travel website </h2></label>  <br/> 
      
          <h5> Your email must be entered in order to submit succesfully!</h5><br/>

          <label> Full Name:
            <input 
            className='EditProfileText'
            type="text"
            placeholder="Insert your Fullname"
            value={fullname} 
            onChange={(e) => {setFullname(e.target.value); 
            setSubmitted(false) }}/>
          </label><br/>
             
          <label> Email:
            <input type="text" 
            value={email} 
            placeholder="Insert your email"
            onChange={(e) => {setEmail(e.target.value); 
            setSubmitted(false) }} />
          </label><br/> 
                
          <label >Bio: 
            <input type="text" 
            value={bio} 
            placeholder="Insert your bio"
            onChange={(e) => {setBio(e.target.value);
            setSubmitted(false) }} />
          </label><br/>
                
          <label>Age: 
            <input type="number" 
            placeholder="Insert your age"
            value={age} onChange={(e) => {setAge(e.target.value); 
            setSubmitted(false) }} />
          </label><br/>
                
          <label>Gender: 
            <input type="text" 
            placeholder="Insert your gender"
            value={gender} onChange={(e) => {setGender(e.target.value);
            setSubmitted(false) }} />
          </label><br/> 

          <h5> Forgotten Password </h5>
          <label >New Password: 
            <input 
            type="password" 
            value={changepassword} 
            placeholder="Insert your new password"
            onChange={(e) => {setChangePassword(e.target.value); 
            setSubmitted(false) }} />
          </label>

          <label >Confirm Password: 
            <input 
            type="password" 
            value={newpassword} 
            placeholder="Confirm your new password"
            onChange={(e) => {setNewPassword(e.target.value); 
            setSubmitted(false) }} />
          </label><br/>
                
        </div>

        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        {(submitted===true) &&
        <label>Thank you for submitting your details!</label> }      
      </div>
    </>
  );
}

export default EditProfile;