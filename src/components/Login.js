import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // look up what this does
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = () => {
  // adding state
  const [form, setForm] = useState({ username: "", password: ""});
  const [error, setError] = useState("");
  const { push } = useHistory();

  // make a post request to retrieve a token from the api
  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        console.log(res)
      })
      .catch(err => setError(err.response.data.error))
    
     
  }

  // when you have handled the token, navigate to the BubblePage route

  // adding functionality to handle input changes
  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }
  // testing - it works!!
  // console.log (handleChange)

 
  

  //const error = " ";
  //replace with error state ??? IDK what to do with this

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      {/*adding form */}
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input 
            id="username"
            onChange={handleChange}
            name="username"
            value={form.username}
          />
        </label>
        <label>Password:
          <input 
            id="password"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
        </label>
        <button 
          id="submit" 
          type="submit">
            Login
        </button>

      </form>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"