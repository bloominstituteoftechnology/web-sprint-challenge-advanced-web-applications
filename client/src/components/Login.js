import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {
  const [loginValues, setLoginValues] = useState({
      username: 'Lambda School',
      password: 'i<3Lambd4'
  })
  const {push} = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onchange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value
    })
  }
    const onSubmit = (e) => {
      
      e.preventDefault();
      axios.post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
      .then((req) => {
        console.log(req.data.payload)
        localStorage.setItem('token', req.data.payload);
        push('/BubblePage');
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={onSubmit}>
        <label>
          Usernmane:
          <input 
          type='text'
          name='username'
          value={loginValues.username}
          placeholder='Enter username'
          onChange={onchange}
          />
        </label>
        <label>
          Password:
          <input 
          type='password'
          name='password'
          value={loginValues.password}
          placeholder='Enter Password'
          onChange={onchange}
          />
        </label>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
