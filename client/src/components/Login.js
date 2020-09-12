import React,{useState} from "react";
import axios from 'axios';


class Login extends React.Component{
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const defaultState=
  //    {username:'',
  //     password:''}
  
  state={
    credentials: {
        username: "",
        password: ""
    }
}
  handleChange=(e)=>{
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]:e.target.value
        }
    })
}

login=(e)=>{
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login',this.state.credentials)
    .then((res)=>{
        localStorage.setItem('token',res.data.payload)
        this.props.history.push('/protected/BubblePage');
    }
    ) 
    .catch((error=>console.log(error)));
}
  render(){
    return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={this.login}>
          <input name='username' type='text' placeholder='username' value={this.state.credentials.username} onChange={this.handleChange}/>
          <input name='password' type='text' placeholder='password' value={this.state.credentials.password} onChange={this.handleChange}/>
          <button>Login</button>
        </form>
      </div>
    </>
  );}
};

export default Login;
