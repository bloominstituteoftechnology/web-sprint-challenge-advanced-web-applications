import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    isLoading: false,
    error: '',
    credentials: {
      username: '',
      password: ''
    }
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true
    })
    axiosWithAuth()
      .post(`/login`, this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.setState({
          ...this.state,
          isLoading: false,
          error: '',
          credentials: {
            username: '',
            password: ''
          }
        });
        window.location.href = '/BubblePage';
      })
      .catch(err => {
        this.setState({
          ...this.state,
          isLoading: false,
          error: err.response.data.error
        })});
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input 
            onChange={this.handleInput}
            value={this.state.credentials.username} 
            type='text' 
            name='username' 
            data-testid='username'
          />
          <label>Password: </label>
          <input 
            onChange={this.handleInput}
            value={this.state.credentials.password} 
            type='password' 
            name='password'
            data-testid='password'
          />
          <button>{this.state.isLoading ? 'Loading...' : 'Login'}</button>
        </form>
      </div>
    );
  }
};

export default Login;
