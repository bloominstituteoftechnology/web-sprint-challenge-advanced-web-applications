import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const credentialValues = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(credentialValues);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (!e.target.username || !e.target.password) {
      alert("Username or Password not valid.");
    } else {
      axios
        .post("http://localhost:5000/api/login", credentials)
        .then((res) => {
          localStorage.setItem("token", res.data.payload);
          window.location.href = "/protected";
          console.log(res, "axios post");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios
          .get(`http://localhost:5000/api/colors`, {
            headers: {
              authorization: "",
            },
          })
          .then((res) => {
            console.log(res);
          });
        console.log(res);
      });
  });

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <br></br>

      <br></br>
      <form onSubmit={login}>
        <h1>Login below</h1>
        <label>
          username
          <input
            type="text"
            placeholder="enter a username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          password
          <input
            type="password"
            placeholder="enter a password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>

        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
