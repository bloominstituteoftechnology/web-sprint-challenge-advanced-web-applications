import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialLoginValues = {
    username: "",
    password: ""
  }

  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const history = useHistory();

  const submitHandler = event => {
    event.preventDefault()
    axiosWithAuth().post("/api/login", loginValues)
      .then(response => {
        localStorage.setItem("token", response.config.headers.Authorization)
        history.push("/protected")
      })
      .catch(error => {
        console.log(error);
      })
  }

  const changeHandler = event => {
    setLoginValues({...loginValues, [event.target.name]: event.target.value})
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
        <label> Username
          <input 
          name="username"
          type="text"
          placeholder="Enter Username..."
          value={loginValues.username}
          onChange={changeHandler}
          />
        </label>
        <label> Password
          <input 
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginValues.password}
          onChange={changeHandler}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
