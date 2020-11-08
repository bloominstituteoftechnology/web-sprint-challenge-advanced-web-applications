import React from "react";
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // error handling
  const [error, setError] = useState()

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleSubmit = (event) => {
     event.preventDefault()

     axios
      .post('http://localhost:5000/api/login', data) // send the data object
      .then(result => {
         console.log(result.data)
        localStorage.setItem('payload', result.data.payload) // stores token in localStorage so that it persists
      })
      .catch(err => {
        setError(err.response.data.message)
      })

   }
  
  // -initial data state as an object
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  // -function that takes an event for controlled input fields (onchange & values stored in state)
  const handleChange = (event) => {
    // -take target name & target value and use these to assign new state.
    setData({
      // -make object immutable by spreading data
      ...data,
      [event.target.name]: event.target.value,
    }) 
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p></p>
      <form onSubmit={handleSubmit}> 
        {error && <div className='error'>{error}</div>}

        <input type='text' name='username' placeholder='UserName' value={data.text} onChange={handleChange} />
        <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange}/>

        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
