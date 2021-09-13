import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from 'react-router';

const initialValues = {username: 'Lambda', password: 'School'};

const Login = () => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState();

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValues.username !== "Lambda" || formValues.password !== "School") {
      setError("Username or Password not valid.")
    } 

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
          type="password"
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