import React, { useState } from 'react';

const ProfilePage = () => {
  const [fullname, setFullname] = useState('');
  //const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [submitted,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <h2>Insert your fullname in the space provided or your email</h2>
      <h3>Insert your age</h3>
      <h4>Insert your gender</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> fullName:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label> email:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label>Age: <input type="number" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
          <label >gender: <input type="text" value={colours} onChange={(e) => { setColours(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        <h3>Results </h3>
            Name: {name}<br />
            Age: {age}<br />
            Colours: {gender}<br />
            {(submitted===true) &&<label>Thank you for submitting</label> }
      </div>
    </>
  );
}

export default PetForm;