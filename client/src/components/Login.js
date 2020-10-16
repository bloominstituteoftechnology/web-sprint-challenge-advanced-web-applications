import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
  const [login, setLogin] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
