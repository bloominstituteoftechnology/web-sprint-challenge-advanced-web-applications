import React,{useState} from "react";
import axios from 'axios';
// import { axiosWithAuth } from "./AxiosWithAuth";
import {useHistory} from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials,setCredentials]=useState({ 
      username: '', 
      password: '' })
    
      const {push}=useHistory()
  
      const handleChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})

  };

  const login =()=>{
    axios
    .post('http://localhost:5000/api/login',credentials)
    .then(res=>localStorage.setItem('token',res.data.payload))
    .catch(err=>console.log(err))
  } 

 const handleSubmit=(e)=>{
    e.preventDefault();
    login();
    setCredentials(     
      {...credentials,username: '', 
      password: '' });
    push('/bubblePage');
    
  };
  console.log(credentials)
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <br></br>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='username' onChange={handleChange} value={credentials.username}/>
        <input type='text' name='password' placeholder='password' onChange={handleChange} value={credentials.password}/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
