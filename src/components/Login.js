import axios from "axios"
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"


const Login = () => {

  const [ user, setUser ] = useState({
    login:{
      username:"",
      password:"",
    },
    isLoading:false,
  });

  const history = useHistory();

  const handleChanges = (e) => {
    console.log(e,"something changed")
    setUser({
      login:{
        ...user.login,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitLogin = (e) =>{

    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login",user.login)
    .then((res) =>{

      console.log(res,"login successful");
      window.localStorage.setItem("token", res.data.payload);
      history.push("/bubblespage");
    })

    .catch((err) => console.log(err,"error logging in"))
  }

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios
        .get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <div className ="login-form">
      <form onSubmit={submitLogin}>
        <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.login.username}
            onChange={handleChanges}
            placeholder="Username"
          />
     <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.login.password}
            onChange={handleChanges}
            placeholder="Password"
          />
           <button type="submit"> Log in</button>
      </form>

    </div>
  );
};

export default Login;