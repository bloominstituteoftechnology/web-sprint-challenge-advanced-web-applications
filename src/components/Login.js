import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";

const formCredentials = {
  username: '', 
  password: ''
}

export const Login = () => {
  const history = useHistory(); 
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [ credentials, setCredentials ] = useState(formCredentials); 

//HELPER FUNCTIONS
const handleChange = e => {
  const {name, value} = e.target; 
  setCredentials({
    ...credentials, 
    [name]: value
  })
}


const loginUser = (e) => {
  e.preventDefault(); 
  axios.post('http://localhost:5000/api/login', credentials)
.then(res => {
  localStorage.setItem('token', res.data.payload)
  // console.log(res.data.payload)
  history.push('/bubblepage')
})
.catch(err => {
  console.log('error from login', err)
})
}

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={loginUser}>
        <input type="text" onChange={handleChange} name="username" placeholder='enter username' />
        <input type="text" onChange={handleChange} name="password" placeholder='enter password' />
        <button>Login</button>
      </form>
    </>
  );
};


//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
