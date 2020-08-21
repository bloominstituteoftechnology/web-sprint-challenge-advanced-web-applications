import React, { useState, } from "react"
import { useHistory } from "react-router-dom"

import axiosWithAuth from '../utils/axiosWithAuth'

const initialCredentials = {
  username: "",
  password: "",
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  const [ credentials, setCredentials] = useState(initialCredentials)

  const onFormChange = e => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      })
  }

  const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post("/api/login", credentials)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page")
    })
    .catch(err => {
        console.log(err, "You fool! You absolute buffoon!")
    })
    setCredentials(credentials)
}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <section className="form-container">
        <form onSubmit={onSubmit} className="login-form">

          <label className="login-form-label">
            Username:&nbsp;
            <input 
            name="username"
            type="text"
            placeholder="Username here..."
            value={credentials.username}
            onChange={onFormChange}
            />
          </label>

          <label className="login-form-label">
          Password:&nbsp;
            <input 
            name="password"
            type="text"
            placeholder="Password here..."
            value={credentials.password}
            onChange={onFormChange}
            />
          </label>
          <button className="submit">Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
