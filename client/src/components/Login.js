//(username === "Lambda School" && password === "i<3Lambd4")
import React, { useState } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [values, setValues] = useState(initialValues);

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch((err) => console.log("UhOh"));
  };

  return (
    <>
      <div className="login">
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
          <label>
            Username:
            <input
              value={values.username}
              onChange={change}
              name="username"
              placeholder="Enter Username"
              type="text"
            />
          </label>
          <label>
            Password:
            <input
              value={values.password}
              onChange={change}
              name="password"
              placeholder="Enter Password"
              type="password"
            />
          </label>
          <button>Login!</button>
        </form>
      </div>
    </>
  );
};

export default Login;
