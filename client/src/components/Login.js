import React,{useState} from "react";
import {axiosWithAuth} from "./axiosWithAuth";

const Login = (props) => {

    const [credentials, setCredentials] = useState({});

    const login = e =>{

        e.preventDefault();

        axiosWithAuth().post('http://localhost:5000/api/login', credentials)
            .then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.payload);
                props.history.push('/bubblePage')

            })
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const handleChange = e => {
        setCredentials( {
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={login} >
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                />

                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button>login</button>
            </form>
        </div>

    )
}

export default Login;