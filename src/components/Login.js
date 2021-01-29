import React from "react";
import axios from "axios";

class Login extends React.Component  {
  // make a post request to retrieve a token from the api
  // // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username:'',
      password:''
    }
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then((request) => {
        // console.log(request)
        localStorage.setItem('token', request.data.payload);
        this.props.history.push('/bubblepage');
        this.props.setLoggedIn(true);

    })
    .catch((err) => {
      console.log(err)
    })
  }
 
render(){

      return (

        <>

          <h1>Welcome to the Bubble App!</h1>
      
        <form onSubmit={this.handleLogin} >
      
        <label>
            UserName:
              <input
                  type='text'
                  name='username'  
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
          </label>
      
          <label>
            Password:
              <input
                  type='password'
                  name='password'  
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
          </label>

          <button>Submit</button>
          
        </form>
        </>
      );
    }
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.