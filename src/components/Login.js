import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  
  const { push } = useHistory();

  const urlBase = 'http://localhost:5000/api'

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  // make a post request to retrieve a token from the api
  const login = (e) => {
  e.preventDefault();
  axios.post(`${urlBase}/login`, credentials)
  .then(res => {
    console.log('happy path!', res.data.payload);
    localStorage.setItem('token', res.data.payload)
    push('/protected')
  })
  .catch(error => {
    console.log(error, 'oops, something went wrong!')
  })

  if (credentials.username === "" || credentials.password === '') {
    setError('Username and password are required.') 
  } else if (credentials.username !== 'Lambda' || credentials.password !== 'i<3Lambd4'){
    setError('Invalid credentials')
  }
};

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>L O G I N</h2>
        <form onSubmit={login}>
          <input name='username' placeholder= 'username' type='text' onChange={handleChange} value={credentials.username} />
          <br />
          <br />
          <input name='password' placeholder= 'password' type='password' onChange={handleChange} value={credentials.password} />
          <br />
           <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.