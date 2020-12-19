import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../util/axiosWithAuth";
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });
console.log(credentials)
  const handleChange = (e) => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
      axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.authorization);
      })
      .catch((err) => {
        console.log("Axios Login error", err.message);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login</p>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
