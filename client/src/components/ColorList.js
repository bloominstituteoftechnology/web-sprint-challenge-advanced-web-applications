import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            value={props.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={props.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
