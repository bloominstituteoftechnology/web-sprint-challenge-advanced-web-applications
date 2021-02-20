import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const { push } = useHistory();

  const [error, setError] = useState('');
  const [cred, setCred] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCred({...cred, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', cred)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      push('./bubblepage');
    })
    .catch(err => {
      setError('Username or Password not valid.')
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:
            <input
            id='username'
            name='username'
            value={cred.username}
            onChange={handleChange}
            />
          </label>
          <label htmlFor='password'>Password:
            <input
            id='password'
            name='password'
            value={cred.password}
            onChange={handleChange}
            />
          </label>
          <button>Log In</button>
        </form>
        {error && <h2>{error}</h2>}
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.