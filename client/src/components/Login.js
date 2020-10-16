import React, { useState, useEffect } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
  username: '',
  password: ''
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialValues);

  useEffect(() => {
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        console.log('Login: useEffect: DT: ', res);
      })
      .catch(err => console.error('Login: useEffect: DT: ', err));
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
