import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Loader from 'react-loader-spinner';

const Login = () => {

  const initialState = {
      username: '',
      password: '',
      isLoading: false
  }

  const [credentials, setCredentials] = useState(initialState);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  };

  const { push } = useHistory();

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('authToken', res.data.payload);
      })
      .catch(err => console.log(err));
      push('/protected')
  };

  const loading = e => {
    setCredentials({
      ...credentials,
      isLoading: !credentials.isLoading
    })
    
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>

      <form onSubmit={login}>

        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type='text'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />

        <button onClick={loading}> 
          Login
        </button>

        {credentials.isLoading === true && <Loader />}

      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.