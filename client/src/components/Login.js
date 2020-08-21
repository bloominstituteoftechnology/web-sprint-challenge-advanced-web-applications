import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const [form, setForm] = useState({ username:'', password: '' })
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', form)
    .then((res) =>{
      localStorage.setItem('token', res.data.payload)
      history.push('/colors')
    })
    .catch((err) => console.dir(err));
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange ={(e) => setForm({...form, username: e.target.value})} 
        />
        <input
          onChange ={(e) => setForm({...form, password: e.target.value})} 
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
