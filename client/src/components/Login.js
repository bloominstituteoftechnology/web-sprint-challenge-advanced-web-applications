import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });


  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    // e.preventDefault();    
    //1. make a request to our server for login
    axiosWithAuth()
    //2. we need to pass in our credential
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      //3. If request is successful, console.log our result
      console.log(res.data);
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/protected');
    })
    //4. If request fails show our error
      .catch(err=>{
        console.log(err.response);
      });
  };

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    login()
  });

  return (
  <div className='login'>
      <form onSubmit={login}>      
        UserName:
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}  
          />
        Password:
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