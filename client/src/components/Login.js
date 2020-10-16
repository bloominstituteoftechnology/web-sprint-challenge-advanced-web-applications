import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  // const { setLoggedIn } = props;
  const { push } = useHistory();
  const initialValues={
    username:"",
    password:""
  }
  const [cred, setCred] = useState(initialValues);

  const sendAuth = () => {
    axios
      .post('http://localhost:5000/api/login',cred)
      .then(res => {
        console.log('Login successful');
        localStorage.setItem("token",res.data.payload);
        // setLoggedIn(true);
        push('/bubbles');
      })
      .catch(err=>{
        console.log('Login error: ', err);
      })
  }

  const handleChange=(e)=>{
    setCred({...cred,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    sendAuth();
    console.log('Logging in...');
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        </label>

        <label>Password:
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
