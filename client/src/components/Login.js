import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";

// username: '', password: ''
const initialValues = {
  credentials: {username: 'Lambda School', password: 'i<3Lambd4'}
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [formValues, setFormValues] = useState(initialValues);
const { push } = useHistory();

const handleChange = (e) => {
    setFormValues({
      credentials: {
        ...formValues.credentials,
        [e.target.name]: e.target.value
      }
    });
  };


const submitForm = (e) => {
  e.preventDefault();
    axiosWithAuth()
    .post('/login', formValues.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        push("/bubblepage");
      })
      .catch(err => console.log(err));
};

  

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitForm}>
        <input
        type="text"
        name="username"
        onChange={handleChange}
        value={formValues.credentials.username}
        placeholder="username"
        />
        <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formValues.credentials.password}
        placeholder="password"
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
