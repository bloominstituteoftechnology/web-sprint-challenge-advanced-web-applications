import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [formValues, setFormValues] = useState({username:"", password:"", error:""})
    const history = useHistory();

    const onChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValues)
        .then((res)=>{
            localStorage.setItem('token', res.data.payload)
            history.push('/colors')
        })
        .catch((err)=>{
            console.log(err.response)
            setFormValues({...formValues, error:"Username or Password not valid."})
        })
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <form onSubmit={onSubmit}>
        <label>Username
        <input 
        type = "text"
        name = "username"
        onChange = {onChange}
        value = {formValues.username}
        />
        </label>
        <label>Password
        <input 
        type = "password"
        name = "password"
        onChange = {onChange}
        value = {formValues.password}
        />
        </label>
        {formValues.error && <p>{formValues.error}</p>}
        <button>Login</button>
    </form>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.