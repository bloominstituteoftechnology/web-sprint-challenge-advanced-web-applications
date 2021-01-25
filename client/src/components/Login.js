import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    login: {
      username: "",
      password: "",
    },
  };

  handleChanges = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.login)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubbles");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            value={this.state.login.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            value={this.state.login.password}
            onChange={this.handleChanges}
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
