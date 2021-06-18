import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from 'react-router';

const initialValues = {username: 'Lambda', password: 'School'};

const Login = () => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues)
    axiosWithAuth()
    .post('/api/login', formValues)
        .then((res) =>{
          console.log("Axios Login Post ", res)
          localStorage.setItem('token', res.data.payload)
          push('/bubblepage')
        })
        .catch((err) => {
          console.log({err})
        })
  }

  
  const error = "Username or Password not valid.";
  //replace with error state

  console.log("Form Values ", formValues)

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          data-testid="username"
          name="username"
          value={formValues.username}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          data-testid="password"
          name="password"
          // type="password"
          value={formValues.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//+++1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//+++3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.