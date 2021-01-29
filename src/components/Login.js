import React, { useEffect, useState } from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formData, setFormData]=useState({
    username:'',
    password:''
  });
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    axios.post("http://localhost:5000/api/login",formData)
      .then((res)=>{
        // console.log(res.data)
        localStorage.setItem('token',res.data.payload)
        props.history.push('/bubble-page');
      })
      .catch((err)=>{
        console.log(err)
        if(err){
          return(<h1>Username or Password not valid</h1>)
        }
      })
  }
  // console.log(formData)


  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Login here</p>
        <form >
          <input lable="username" placeholder="username" type='text' value={formData.username} name='username' onChange={handleChange}/>
          <input lable="password" type='password'value={formData.password} name='password'onChange={handleChange}/>
        </form>
        <button onClick={handleFormSubmit}>login</button>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.