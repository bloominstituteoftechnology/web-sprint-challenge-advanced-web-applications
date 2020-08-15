import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label htmlFor='username'>User Name</label>
        <input 
        type='text' 
        name='username'
        placeholder='User Name'
        // value={}
        // onChange={} 
        className='input' />
        <label htmlFor='password'>Password</label>
        <input 
        type='text' 
        name='password'
        placeholder='Password'
        // value={}
        // onChange={} 
        className='input' />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
