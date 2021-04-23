import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('')

  const {push} = useHistory()

  const handleChanges = e => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    e.preventDefault();
        axios.post('http://localhost:5000/api/login', loginInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/protected');
        })
        .catch(err => {
            console.log(err)
        })
        //If no username or password is entered than display error saying it is required
    if (loginInfo.username === "" || loginInfo.password === '' ) {
      setError('Username and Password field is required.')
        //If username and password don't match correct information then display error
        //saying incorrect login.
    }else if (loginInfo.username !== "Lambda" || loginInfo.password !== 'i<3Lambd4' ) {
      setError('Incorrect Login.')
    }
  };
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={submitHandler}>
                <input data-testid="username" name="username" type="text" value={loginInfo.username} placeholder="Username" onChange={handleChanges}/> 
                <input data-testid="password" name="password" type="password" value={loginInfo.password} placeholder="Password" onChange={handleChanges}/> 
                <button>Login</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. X
//2. Add whatever state nessiary for form functioning. X
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password" X
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.