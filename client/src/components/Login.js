import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; 

import { axiosWithAuth } from '../utils/axiosWithAuth'; 

const initialState = {
  username: "", 
  password: ""
}

const Login = () => {
  const [form, setForm] = useState(initialState); 
  const history = useHistory(); 

  const handleInput = (e) => {
    setForm({
        ...form, 
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axiosWithAuth()
    .post('/api/login', form)
        .then(res => {
          console.log(res)
            localStorage.setItem("token", res.data.payload); 
            history.push("/bubble-page")
        })
        .catch(err => console.log(err.message))
  }
  
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input 
            type="username"
            name="username"
            onChange={handleInput}
            value={form.username}
            required
            /> 
            <label>Password:</label>
            <input
            type="password"
            name="password"
            onChange={handleInput}
            value={form.password}
            required
            />
            </div> 
            <div>
                <button type="submit">Login</button>
            </div>
    </form>
</div>
  );
};

export default Login;
