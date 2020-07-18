import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  
  const [state, setState] = useState({
    credentials: {
      username: "Lambda School",
      password: "i<3Lambd4",
    },
  });
  const handleChange = (event) => {
    setState({
      credentials: {
        ...state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  function login(event) {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push('/colors');
      })
      .catch((err) => {
        console.log("Err is: ", err);
      });
  }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={state.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="username"
          value={state.credentials.password}
          onChange={handleChange}
        />
        <button onClick={login} type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
