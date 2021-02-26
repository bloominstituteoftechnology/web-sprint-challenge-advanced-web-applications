import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
    
        export const worker = setupWorker(...handlers); 
            <form> 
            <div className="login">
              <input type="text" placeholder="Phone number, username, or email" />
            </div>
            <div className="login">
              <input type="text" placeholder="Password" />
            </div>
            <div className="login2">
              <button className="login loginBtn">Log In</button>
            </div>
            </form>
        <p>Get the app.</p>
   <div className= "buttons">
      <img className="appBtn" src="https://i.ibb.co/bsscvkC/pngwing-com-8.png" alt="apple" />
      <img className= "googleBtn" src="https://i.ibb.co/5TRnkjQ/pngwing-com-7.png" alt="google"/>
      </div>
     
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.