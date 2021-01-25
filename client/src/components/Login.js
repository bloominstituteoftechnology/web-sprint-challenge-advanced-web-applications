import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
  
  const [login, setLogin] = useState({username: "" , password: ""});
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", login)
    .then(res => {
      localStorage.setItem("token", res.data.payload)
      props.history.push("/bubblePage")
    })
    .catch(error => {
      setError(error.message);
      console.error(error.message);
    })
  }

  return (
    <>
    <div className="login__header">
      <h1>Welcome to the Bubble App!</h1>
      <h2>Please Login to</h2>
    </div>
    <section className="login__form">
      <form onSubmit={handleLogin}>
        <label htmlFor="name">Name: </label>
        <input required id="name" type="text" onChange={(e) => setLogin({...login, username: e.target.value})}/>
        <label htmlFor="password">Password: </label>
        <input required id="password" type="text" onChange={(e) => setLogin({...login, password: e.target.value})}/>
        <div className="space__small">{error ? <h3>{error}</h3> : ""}</div>
        <button type="submit">Login</button>
      </form>
    </section>
    </>
  );
};

export default Login;
