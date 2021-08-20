import React from "react";

const Login = () => {
    //2. Add whatever state necessary for form functioning.
    const [credentials, setCredentials] = useState({ username: "", password: "" })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // const error = ""; //replace with error state //Part of #4B
  const [error, setError] = useState("");

  const submit = e => {
    e.preventDefault();
    //4.A If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
    if (!credentials.username || !credentials.password) {
      return (setError("Username or Password not valid."));
    }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        {/* <h2>Build login form here</h2> */}
        {/* //1. Build a form containing a username and password field. */}
        <form onSubmit={submit}></form>
        <label >Username:</label>
          <input
            id="username"
            data-testid="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />

          <label>Username:</label>
          <input
            id="password"
            data-testid="password"
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. Missing? or ommitted?
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"