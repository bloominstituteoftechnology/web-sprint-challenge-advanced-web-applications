import React, { useState } from "react";
import axios from 'axios';


const Login = (props) => {
  //2. Add whatever state necessary for form functioning.
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  // const error = ""; //replace with error state
  const [error, setError] = useState("");

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    //4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
    if (!credentials.username || !credentials.password) {
      return (setError("Username or Password not valid."));
    }
    
    // make a post request to retrieve a token from the api
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        //5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route. 
        localStorage.setItem("token", res.data.payload);
        // when you have handled the token, navigate to the BubblePage route
        props.history.push('/bubbles');
      })
      .catch(err => {
        setError("Error logging in");
      })
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        {/* <h2>Build login form here</h2> */}
        {/* //1. Build a form containing a username and password field. */}
        <form onSubmit={submit}>
          {/* //6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password" */}
          <label >Username:</label>
          <input
            id="username"
            data-testid="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            id="password"
            data-testid="password"
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <div>
            {/* //7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit" */}
            <button data-testid="submit"
              id="submit" >Login
            </button>
          </div>
        </form>
      </div>
      {/* //8. MAKE SURE YOUR ERROR p tag contains the id="error" */}
      <p data-testid="errorMessage" id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:

//3??? missing 


