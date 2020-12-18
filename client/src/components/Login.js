import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
  username: '',
  password: ''
}

const Login = props => {
  const [formValues, setFormValues] = useState(initialState)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const handleUpdate = e => {
  setFormValues({
    ...formValues,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault()
  axiosWithAuth()
    .post('/login', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubble-page')
    })
    .catch(err => console.log('ERROR: ', err))
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
      
      <label>Username:</label>
      <input 
      type='text'
      name='username'
      value={formValues.username}
      onChange={handleUpdate}
      />

      <label>Password</label>
      <input
      type='text'
      name='password'
      value={formValues.password}
      onChange={handleUpdate}
      />

      <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
