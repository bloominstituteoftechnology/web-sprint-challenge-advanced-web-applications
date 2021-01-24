import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState(initialState);
  const history = useHistory();
  const handleChanges = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={login.username}
          onChange={handleChanges}
          placeholder="username"
        />
        <input
          name="password"
          type="password"
          value={login.password}
          onChange={handleChanges}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
