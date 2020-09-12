import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory();
  const[credentials, setCredentials] = useState({
    username: '',
    password:''
  })

  const onChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value});
  };
  
  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log('here is the response from login',res)
        localStorage.setItem('token', res.data.payload);
        history.push('/api/colors')
      })
      .catch((err) => console.log(err));
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
                <form onSubmit={login}>
                <label htmlFor='username'>Username:</label>
                    <input 
                        type='text'
                        name='username'
                        id='username'
                        value={credentials.username}
                        onChange={onChange}
                    />
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        value={credentials.password}
                        onChange={onChange}
                    />
                    <button type='submit'>Log in</button>
                </form>
            </div>
    </>
  );
};

export default Login;
