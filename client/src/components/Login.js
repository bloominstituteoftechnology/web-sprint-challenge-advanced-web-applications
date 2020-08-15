import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChanges = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log('from Login: hC: login', login)
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', login)
      .then(res => {
        console.log('from Login: post successful: res', res);
        localStorage.setItem('token', res.data.payload)
      })
    history.push('/bubblepage')
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>User Name</label>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          value={login.username}
          onChange={handleChanges}
          className='input' />
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={login.password}
          onChange={handleChanges}
          className='input' />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
