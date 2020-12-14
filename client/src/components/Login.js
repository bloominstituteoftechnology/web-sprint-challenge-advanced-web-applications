import React, {useState} from "react";

const Login = () => {

const [form, setForm] = useState({
  username: "",
  password: ""
})


let onChange = (e) => {
  e.preventDefault()
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}




  return (
    <div>
      <form>
        <input
        name="username"
        type="text"
        placeholder="Username"
        value={form.username}
        onChange= {onChange}
        />
        <input
        name="username"
        type="text"
        placeholder="Password"
        value={form.Password}
        onChange= {onChange}
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