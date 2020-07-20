import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { push } = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChanges = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', formData)
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.payload)
      push('/colors')
    })
    .catch(error => console.log(error))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username' value={formData.username} onChange={handleChanges} />
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' value={formData.password} onChange={handleChanges} />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};
export default Login;