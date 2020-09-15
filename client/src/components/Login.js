import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  console.log(props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/BubblePage");
      })
      .catch((err) => console.log(err.response));
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
