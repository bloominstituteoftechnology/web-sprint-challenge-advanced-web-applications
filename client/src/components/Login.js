import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { axiosWithAuth } from './utils/axiosWithAuth'


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: 'Lambda',
        password: 'password',
    })
 const history = useHistory()


    const handleChange = e => {
        setCredentials({
            credentials: {
                 ...credentials,
                [e.target.name]: e.target.value,
            }
        })
    }
    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .post('/api/login', credentials)
          .then(res => {
            localStorage.setItem("token", res.data.payload);
            history.push("/protected");
          })
          .catch(err => {
            console.log(err);
          });
      };
        
return (
    <div>
        <form onSubmit={login}>
            <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            />
               <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            />
            <button>Log In</button>
        </form>
    </div>
)

}
export default Login;
