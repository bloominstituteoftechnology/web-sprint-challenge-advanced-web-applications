import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from '../helpers/axiosWithAuth';

const Login = () => {
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
  if (formValues.username !== 'Lambda' || formValues.passowrd !== 'School') {
    setError('Username or Password is incorrect')
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