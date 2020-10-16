import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
  const history = useHistory()
  const [formState, setFormState] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  })

  const inputChange = e => {
    e.persist()
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
    axiosWithAuth()
      .post('/login', formState)
      .then(res => {
        console.log(res.data)
        window.localStorage.setItem('token', res.data.payload)
        history.push('/protected')
      })
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
          Username:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formState.username}
            onChange={inputChange}
            />
          Password:
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={formState.password}
            onChange={inputChange}
            />
            <button onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;