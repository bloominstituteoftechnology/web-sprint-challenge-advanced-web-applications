import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  credentials: { username: "Lambda School", password: "i<3Lambd4" },
  errors: "",
};

const Login = () => {
  const [state, setState] = useState(initialState);

  const history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      credentials: { ...state.credentials, [e.target.name]: e.target.value },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", state.credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => {
        setState({ ...state, errors: err.response.data.error });
      });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
      </div>
      <br />
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.username}
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={state.password}
            placeholder="password"
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
        <p>{state.errors}</p>
      </div>
    </>
  );
};

export default Login;
