import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [info, setInfo] = useState({ username: "", password: "" });

  const handleChanges = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", info)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch((err) => {
        if (err.response) {
          console.error("bad", err.response.data);
        } else {
          console.error(err);
        }
      });
  };
  return (
    <div>
      <>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={info.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </>
    </div>
  );
};

export default Login;
