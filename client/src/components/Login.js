import React, { useState } from "react";
import axiosWithAuth from './axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [ credentials, setCredentials ] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
          placeholder='username'
        />
        <input
          type='text'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          placeholder='password'
        />
        <button>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
