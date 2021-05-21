import React, { useEffect, useState } from "react";
import axios from 'axios';

import { useParams, useHistory } from 'react-router-dom';


  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialValues = { username: 'Lambda School', password: 'i<3Lambd4'};

  const Login = () => {
    // const { push } = useHistory();
    const { id } = useParams();
      const [formValues, setFormValues] = useState(initialValues);
  
      const handleChanges = e => {
          setFormValues({ ...formValues, [e.target.name]: e.target.value});
      };
  
      const [bubblepage, setBubblePage] = useState({
        color: ""
      });


  useEffect(()=>{
    axios.get(`http://localhost:5000/api/login${id}`)
		.then(res=>{
				setBubblePage(res.data);
		})
		.catch(err=>{
				console.log(err.response);
		})
	},[]);
  
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
 
  
  const error = "";
  //replace with error state

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get("http://localhost:5000/api/login", formValues)
    .then((res) => {
      window.localStorage.setItem('token', res.data.payload);
      // push("/bubblepage");
    })
    .catch((err) => console.log(err.message));
};

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>

      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
        <input 
          id="username" 
          name="username"
          value={formValues.username} 
          onChange={handleChanges}/>

      <label htmlFor="password">Password</label>
        <input 
        id="password" 
        name="password"
        type="password"
        value ={formValues.password}
        onChange={handleChanges}/>
        <button>Login</button>
        </form>


    </div>

  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.