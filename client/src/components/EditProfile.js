import React, { useState } from 'react';

const EditProfile = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  // const [forgottenpassword, setForgottenPassword] = useState('true');
  const [changepassword, setChangePassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [submitted,setSubmitted] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
   <form onSubmit={handleSubmit}>
        <div> 
        <label><h2><br/> Welcome to Passion4Travel website </h2></label>  <br/> 
      
          <br/>
          <label> FullName:<input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value); 
          setSubmitted(false) }} /></label><br/>
          <h>Insert your Fullname in the space provided or </h><br/> 
          <br/>  <label> Email:<input type="text" value={email} onChange={(e) => {setEmail(e.target.value); 
            setSubmitted(false) }} /></label><br/>
            <h>Insert your Email</h><br/> 
            <br/> <label>Age: <input type="number" value={age} onChange={(e) => {setAge(e.target.value); 
            setSubmitted(false) }} /></label><br/>
             <h>Insert your Age</h><br/> 
             <br/> <label >Gender: <input type="text" value={gender} onChange={(e) => {setGender(e.target.value);
             setSubmitted(false) }} /></label><br/>
             <h>Insert your Gender</h><br/> 
             <br/> <label >Password: <input type="password" value={password} onChange={(e) => {setPassword(e.target.value); 
            setSubmitted(false) }} /></label><br/>
             <h>Insert your Password</h><br/> 
             <br/> <h> ForgottenPassword </h><br/> 
             <br/> <label >ChangePassword: <input type="password" value={changepassword} onChange={(e) => {setChangePassword(e.target.value); 
            setSubmitted(false) }} /></label><br />
             
               <h>Insert New Password</h><br/>
             <br/> <label >NewPassword: <input type="password" value={newpassword} onChange={(e) => {setNewPassword(e.target.value); 
            setSubmitted(false) }} /></label><br />
               {/* <h>Insert your New Password</h><br/>  */}
               <br/> 
        </div>

        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
       
            {(submitted===true) &&<label>Thank you for submitting your details!
              </label> }
          
      </div>
    </>
  );
}

export default EditProfile;


        
