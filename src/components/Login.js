import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const initialState = {
    credientials: {
        username: '',
        password: '',
    }
};

  const { push } = useHistory();

  const [error, setError] = useState('')
  const [state, setState] = useState(initialState)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, state.credientials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      push('/protected')
    })
    .catch(err => {
      console.log(err)
    })
    if (state.credientials.username === "" || state.credientials.password === "" ) {
      setError("Username or Password not valid.")
    }
  }

  const handleChange = (e) => {
    setState({
        credientials:{
          ...state.credientials,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  return (
    <>
    <h2>Please Log in  to continue</h2>
    <form onSubmit={login}>
      <label htmlFor='username'>User Name: </label>
      <input
        type='text'
        name='username'
        value={state.credientials.username}
        onChange={handleChange}
        />
      <label htmlFor='password'>Password: </label>
      <input
        type='text'
        name='password'
        value={state.credientials.password}
        onChange={handleChange}
        />
        {
          error && <div className='error' data-testid='errorMessage' role='alert'>Error: {error}</div>
        }
        <button>Submit</button>

    </form>
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