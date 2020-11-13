import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// username: 'Lambda School', password: 'i<3Lambd4'
const initialValues = {
  credentials: {username: '', password: ''}
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [formValues, setFormValues] = useState(initialValues);
const { push } = useHistory();

const submitForm = (e) => {
  e.preventDefault();
  useEffect(()=> {
    axios
    .get('http://localhost:5000/api/login', formValues.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        push("/colors");
      })
      .catch(err => console.log(err));
    
  }, []);
};

  const handleChange = (e) => {
    setFormValues({
      credentials: {
        ...formValues.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitForm}>
        <input
        type="text"
        name="username"
        onChange={handleChange}
        value={formValues.username}
        placeholder="username"
        />
        <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formValues.password}
        placeholder="password"
        />
        <button onClick={()=>push("/bubblepage")}>Log In</button>
      </form>
    </>
  );
};

export default Login;
