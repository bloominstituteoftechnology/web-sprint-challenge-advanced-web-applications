import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // Need state
  // HandleChange and HandleSubmit

  const [data, setData] = usestate({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="username"
          id="username"
          value={userName}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
