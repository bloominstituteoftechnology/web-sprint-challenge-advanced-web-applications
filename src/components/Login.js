import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    });
    const [error, setError] = useState(null);
    const { push } = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, user.credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                // localStorage.setItem("role", res.data.role);
                push('/view');
            })
            .catch(err => {
                console.log(err);
                setError("Invalid Login Information");
            })
    }

    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            {/* <FormGroup> */}
            <form onSubmit={handleLogin}>
                <Label htmlFor="username">Username
                    {/* <Input> */}
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={user.credentials.username}
                        onChange={handleChange}
                    />
                    {/* </Input> */}
                </Label>
                <Label htmlFor="password">Password
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={user.credentials.password}
                        onChange={handleChange}
                    />
                </Label>
                {/* <Button> */}
                <button id="submit">Submit</button>
                {/* </Button> */}
            </form>
            {/* </FormGroup> */}
            {
                !error ? <p></p> : <p id="error">{error}</p>
            }
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`