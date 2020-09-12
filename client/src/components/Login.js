import React, { useState } from 'react';
import axios from 'axios';


const Login = (props) => {

    const [formState, setFormState] = useState({
        isLoading: false,
        credentials: {
            username: "",
            password: ""
        }
    });

    const userLogin = e => {
        e.preventDefault();
       // formState.isLoading = "true";
        console.log("logging in");
        axios
            .post("http://localhost:5000/api/login", formState.credentials)
            .then(res => 
             { console.log("Login",res.data.payload)
               localStorage.setItem("token", res.data.payload);
            props.history.push('/protected');
        }
        )
            .catch(err => console.log("login api error:", err))
    };

    const changeHandler = e => {
        e.persist();
        console.log("input change", e.target.name, e.target.value);
        setFormState({ 
            credentials: {...formState.credentials,
            [e.target.name]: e.target.value }});
    }

    return (
        <form onSubmit={userLogin}>
            <label>
                username
                <input
                    type="text"
                    name="username"
                    id="username"
                    palceholder="enter username"
                    value={formState.credentials.username}
                    onChange={changeHandler}
                />
            </label>
            <label>
                password
                <input
                    type="password"
                    name="password"
                    id="password"
                    palceholder="enter password"
                    value={formState.credentials.password}
                    onChange={changeHandler}
                />
            </label>
            <button>login</button>
        </form>
    );
}
export default Login;