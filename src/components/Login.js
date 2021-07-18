import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState();

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    if (formValues.username !== 'Lambda' || formValues.password !== 'School') {
      setError('Username or Password incorrect')
    }

    axiosWithAuth()
      .post('/api/login', formValues)
      .then((res) => {
        console.log("Axios Login Post", res)
        localStorage.setItem('token', res.data.payload)
        push('/bubblepage')
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">
            Username
          </label><br/>
          <input
            id="username"
            data-testid="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          /><br/><br/>

          <label htmlFor="password">
            Password
          </label><br/>
          <input
            id="password"
            data-testid="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          /><br/>

          <button>Login</button>

        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

const initialValues = {
  username: '',
  password: ''
}
//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"