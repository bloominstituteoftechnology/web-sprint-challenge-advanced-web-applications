import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const { push } = useHistory();
  const urlBase = 'http://localhost:5000/api';
  
  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
    .post(`${urlBase}/login`, credentials)
    .then(res => {
      //3. If request is successful, console.log our result
      console.log(res.data);
      localStorage.setItem('token', res.data.payload);
      push('/colors');
    })
    //4. If request fails show our error
      .catch(err=>{
        console.log(err.response);
      });
  };

  return (
  <div className='login-form'>
      <form onSubmit={login}>      
        <label htmlFor='username'>UserName:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}  
          />
        <label htmlFor='password'>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.