import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((response) => {
        window.localStorage.setItem("token", response.data.payload);
        props.history.push("/protected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Log in</button>
    </form>
  );
};

export default Login;
