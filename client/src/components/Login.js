import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { useHistory } from "react-router-dom";


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const cred = {username: "Lambda School", password: "i<3Lambd4"}
  const [state, setState] = useState(cred);
  const { push } = useHistory();

  const handleChange = e => {
    e.persist();
    
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    // make a post request to the login endpoint on the server
    axiosWithAuth()
      .post("/api/login", state)
      .then(res => {
        console.log("POST response: ",res);
        localStorage.setItem("token", res.data.payload);
        // redirect the user to the app's main logged in page
        push("/protected");
      })
      .catch(err =>  { 
        console.log(err);
        const error = document.querySelector(".error");
        error.textContent = "Incorrect Login";
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div className="login">
        <p>{"password: i<3Lambd4"}</p>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            placeholder = "username"
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder = "password"
          />
          <button>Log in</button>
          <span className = "error"></span>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
