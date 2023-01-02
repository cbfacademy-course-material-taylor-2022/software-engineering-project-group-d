import React, { useState } from 'react';

const EditProfile = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
  const [submitted,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <h2>Insert your fullname in the space provided or your email</h2> or
      <h2>Insert your email</h2>
      <h2>Insert your age</h2>
      <h2>Insert your gender</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> fullname:<input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value); setSubmitted(false) }} /></label>
          <label> email:<input type="text" value={email} onChange={(e) => {setEmail(e.target.value); setSubmitted(false) }} /></label>
          <label>age: <input type="number" value={age} onChange={(e) => {setAge(e.target.value); setSubmitted(false) }} /></label>
          <label >gender: <input type="text" value={gender} onChange={(e) => {setGender(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      {/* <div id="results">
        //<h3>Results </h3>
        Name: {fullname}<br />
            Email:  {email}<br />
            Age: {age}<br />
            Gender: {gender}<br />
            {(submitted===true) &&<label>Thank you for submitting</label> }
      </div> */}
    </>
  );
}

export default EditProfile;