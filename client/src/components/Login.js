import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const Login = props => {

  const [ credentials, setCredentials ] = useState({
    username:'',
    password:''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
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
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
