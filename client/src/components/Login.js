import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [ login, setLogin ] = useState({
    username:'',
    password:''
  })

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    //console.log(login)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", login)
    .then(res => {
      console.log(res);
      window.localStorage.setItem('token', res.data.payload)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          name='username'
          label='username'
          value={login.username}
          onChange={handleChange}
        ></input>
        <input
          type='text'
          name='password'
          label='password'
          value={login.password}
          onChange={handleChange}
        ></input>

        <button>Log In</button>

      </form>
    </>
  );
};

export default Login;
