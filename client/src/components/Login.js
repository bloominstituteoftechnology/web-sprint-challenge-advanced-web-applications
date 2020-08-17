import React,{useState} from "react";
import axios from 'axios'


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [user,setUser] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  console.log('login:user:', user)

  const userSubmit=(e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login',user)
      .then(res=> localStorage.setItem('token',res.data.payload))
      .catch(err => console.log(err))
  }
  
  return (
    <>
      
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={userSubmit}>
        <input name='username' placeholder='username' value={user.username} onChange={handleChange}>
        
        </input>

        <input name='password' placeholder='password' value={user.password} onChange={handleChange}>
        </input>

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
