import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router'
//import axios from 'axios';
import createAxiosClientWithAuth from './../helpers/axiosWithAuth' 

const Login = () => {
  const [state, setState] = useState({
    username:"",
    password:"",  
  });
  const [error, setError] = useState();
  let history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

    const handleChange = e => {
      setState({
          ...state,
          [e.target.name]: e.target.value
      });
    }

  

  const handleSubmit = e => {
    e.preventDefault();
    if (state.username === "" || state.password === "") {
       setError("Username and password fields are required.");
    } else {
      createAxiosClientWithAuth().post(`http://localhost:5000/api/login`, {
        username: state.username, // Lambda School
        password: state.password, // i<3Lambd4
      }) 
      .then(res => {
         console.log(res);
         localStorage.setItem('token', res.data.payload); //setting the token
         history.push('/protected');//after the token is verified it takes us to this protected page (our friends list)
      }) 
      .catch(err => console.log(err));
    };
        
    
  }
  
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            data-testid="username"
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <input
            data-testid="password"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
}


export default Login;
/////////////////////////////////////////////////////////////////////


 

  

//Task List:
//1. Build a form containing a username and password field. [x]
//2. Add whatever state nessiary for form functioning.[x]
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"[x]
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.