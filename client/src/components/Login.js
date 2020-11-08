import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'




 // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route




const Login = (props) => {
 const [login, setLogin] = useState({
   username: "",
   password: "",

 })

 const handleSubmit = (e) => {
   e.preventDefault()
  axiosWithAuth()
  .post('./api/login', login)
  .then(res => {
    console.log(res)
    localStorage.setItem('token', res.data.payload)
    props.history.push('/colors')
  })
  .catch(err => console.log('error axiosWithAuth', err))
 }

  const handleChange = e => {
    setLogin({...login, [e.target.name]: e.target.value})
  }



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form className='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder="Username"
          value={props.username}
          onChange={handleChange}
          className=''
        />
        <input
          type='password'
          name='password'
          placeholder="Password"
          value={props.password}
          onChange={handleChange}
          className=''
        />
      <button>Login!</button>
      </form>
      
    </>
  );
};

export default Login;
