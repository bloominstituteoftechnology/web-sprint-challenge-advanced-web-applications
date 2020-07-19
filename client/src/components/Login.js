import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [state, setState] = useState({
    credential: { username: "", password: "" },
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
    // make a post request to the login endpoint on the server
    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // redirect the user to the app's main logged in page
        // this.props.history.push("/protected");
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
        <form onSubmit={Login.loggedin}>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={state.password}
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
