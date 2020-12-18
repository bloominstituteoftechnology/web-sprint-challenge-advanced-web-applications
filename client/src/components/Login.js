import React, { useState } from "react";
import {useHistory, useParams} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState({
      username: 'Lambda School',
      password: 'i<3Lambd4'
  })

    const onChange = (e) => {
      setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
      })
    }

      const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', formValues)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            push('/bubbles/:id')
        })
        .catch(err => console.log(err))
      }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
                <label> Username: </label><br></br>
                    
                    <input 
                    name='username'
                    type='text'
                    value={formValues.username}
                    placeholder='Enter your name here'
                    onChange={onChange}
                    /><br></br>
                <label> Password: </label><br></br>
                    
                    <input 
                    name='password'
                    type='password'
                    value={formValues.password}
                    placeholder='Enter your name here'
                    onChange={onChange}
                    /><br></br>
                    <button>Log In</button>
            </form>
    </div>
  );
};

export default Login;
