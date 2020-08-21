import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  const[ form, setForm ] = useState({
    username: "",
    password: ""
  });
  
  const changeHandler = e => {
    return setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};
  
  const handleSubmit = e => {
    e.preventDefault();
      axiosWithAuth()
        .post("/api/login", form)
        .then((res) => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubbles");
        })
        .catch(err => console.log(err));
  };
  
 
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>The Bubbles App Welcomes You!</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Enter Username"
            onChange={changeHandler} 
            />
            
            <input
            name="password"
            type="text"
            placeholder="Enter Password"
            onChange={changeHandler} 
            />
            
            <button>Log In</button>
            
        </form>
    </>
  );
};

export default Login;
