import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

//***CHAYCE CLEAR THESE VALUES OUT BEFORE YOU PR! */
const initialCredentials = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
}
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubble-page')
    })
    .catch(err => {
      console.warn('POST ERROR: ' + err)
    })
    setCredentials(credentials)
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={handleSubmit}>

          <label className="login-form-label">
            Username:&nbsp;
            <input 
            name="username"
            type="text"
            placeholder="Username here..."
            value={credentials.username}
            onChange={handleChange}
            />
          </label>

          <label className="login-form-label">
          Password:&nbsp;
            <input 
            name="password"
            type="text"
            placeholder="Password here..."
            value={credentials.password}
            onChange={handleChange}
            />
          </label>
          <button className="submit">Login</button>
        </form>
    </>
  );
};

export default Login;
