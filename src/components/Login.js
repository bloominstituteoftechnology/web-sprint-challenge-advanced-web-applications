import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const { push } = useHistory();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    error: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/view");
      })
      .catch((e) => {
        // console.log(e);
        setError("Incorrect username / password combination.");
      });
  };

  return (
    <div>
      <ComponentContainer>
        <ModalContainer>
          <h1>Welcome to Blogger Pro</h1>
          <h2>Please enter your account information.</h2>
        </ModalContainer>
      </ComponentContainer>
      <ComponentContainer>
        <ModalContainer>
          <FormGroup onSubmit={handleSubmit}>
            <Label>Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <Label>Password</Label>
            <Input
              id="password"
              name="password"
              type="text"
              onChange={handleChange}
            />
            <Button id="submit">Login</Button>
          </FormGroup>
          {error && <p id="error">{error.error}</p>}
        </ModalContainer>
      </ComponentContainer>
    </div>
  );
};

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
