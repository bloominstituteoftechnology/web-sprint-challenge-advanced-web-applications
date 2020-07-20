import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [state, setState] = useState({
    credentials: { username: "", password: "" },
  });
  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const loggedin = (e) => {
    e.preventDefault();
    console.log("dk I amd loggedIn and I have been invoked");
    console.log(state.credentials);
    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        console.log(res.data);
      })
      .catch((err) => console.log({ err }));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={loggedin}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
