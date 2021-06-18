import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({username: "", password: "" });
  const {push} = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault()
axiosWithAuth().post('/login', form)
.then(res => {
  localStorage.setItem('token', res.data.payload)
  push('/colors');
  // console.log(res)
})
.catch((err) => console.log(err));
}

useEffect(() => {});

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid='loginForm' className='login-form'>
        {/* <h2>Build login form here</h2> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'> User Name: </label>
          <input id='usernane' name='username' value={form.username} onChange={handleChange} />
          <label htmlFor='password'> Password: </label>
          <input id='password' name='password' value={form.password} onChange={handleChange} type='password'/>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.