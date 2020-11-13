import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../components/utils/axiosWithAuth'

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.name
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth.post('/login', login)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/colors')
    })
    .catch(err => console.log(err.res));
      setLogin({username: '', password:''})
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='enter your username'
          value={login.password}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          placeholder='type your password'
          value={login.password}
          onChange={handleChange}
        />
        <button type='submit'>Log in to see the fun</button>
      </form>
    </>
  );
};

export default Login;
