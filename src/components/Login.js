import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
}

const Login = (props) => {
  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault()

    axios.post('http://localhost:5000/api/login', state)
      .then( res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friendslist')
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          value={state.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={state.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.