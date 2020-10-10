import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Login = (props) => {
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });
  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("There was an error", err);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="login">
        <form onSubmit={submitLogin} className="loginForm">
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
          />
          <button className="loginButton">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
