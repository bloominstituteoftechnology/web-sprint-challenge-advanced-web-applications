import React, { useState } from "react";
import axios from "axios";



const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [values, setValues] = useState(initialFormValues);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };


  const submit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', values)
    .then(res=>{
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        window.location.href = '/bubbles'
    })
    .catch(err=>{
        console.log('axios login error', err)
    });

}

  return (
    <>
    
      <form onSubmit={submit}>
        <label>
          Username
          <input
            type="text"
            value={values.username}
            onChange={handleChange}
            name="username"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.