import React, {useState} from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";




const Login = (props) => {


const [form, setForm] = useState({
  username: "",
  password: ""
})


let handleChange = (e) => {
  e.preventDefault()
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const signIn = (e) => {
  e.preventDefault()
  axiosWithAuth.post("/api/login", form)
  .then(res => {
    console.log(res)
    window.localStorage.setItem('token', res.data.payload)
    props.history.push('/protected')
  })
  .catch(err => {
    console.error(err.response)
  })

}




  return (
    <div>
      <form onSubmit={signIn}>
        <input
        name="username"
        type="text"
        placeholder="Username"
        value={form.username}
        onChange= {handleChange}
        />
        <input
        name="password"
        type="text"
        placeholder="Password"
        value={form.Password}
        onChange= {handleChange}
        />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // need axios request
  // need handle change function
  // need login function
  // need to write out log in