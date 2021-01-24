
import React from "react";
import axiosWithAuth from "../utill/axiosWithAuth";

export default class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state= {
    credintials: {
      username: '',
      password: '',
    }
  }

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credintials)
      .then((res) => {
        console.log('Res is: ', res)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubbles')
      })
      .catch(err => console.log('Error Is: ', err))
  }

  handleChange = e => {
    this.setState({
      credintials: {
        ...this.state.credintials,
        [e.target.name]: e.target.value,
      }
    })
  }

  render(){
    return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={this.state.credintials.username}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={this.state.credintials.password}
          onChange={this.handleChange}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
  }
  
};