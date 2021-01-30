import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  username: '',
  password: '',
}

const Login = () => {
  const [formValues, setFormValues] = useState(initialState)
  // const [formErrors, setFormErros]
  const { push } = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    e.persist();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }
  
  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", formValues)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload)
        push('/protected')
      })
      .catch(err => {
        console.log("cannot login", err.error)
    
      })
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>  
      <div>
        <h3>Login here!</h3>
        <form onSubmit={login}>
         <label>username: 
         <input type="text"
              placeholder="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}/>
        </label>
          
          <br/>
        <label>password: 
         <input type="password"
            placeholder= "password"
            name="password"
            value={formValues.password}
            onChange={handleChange}/>
        </label>

        <br /><br />
          <p>{formValues.errorMessage}
           </p>
        <button>Login
        </button>
      </form>

    </div>      
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. DONE
//2. Add whatever state neccesary for form functioning. DONE
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY. DONE
//4. If either the username or password is not displayed, display EXACTLY the following words: Username or Password not valid.  DONE
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage. DONE