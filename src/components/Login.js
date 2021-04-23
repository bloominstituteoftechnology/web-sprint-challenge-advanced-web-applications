import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const cleared = {
	username: "",
	password: "",
};

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const [credentials, setCredentials] = useState(cleared);
	const { push } = useHistory();

	// not sure what this is for
	// useEffect(()=>{
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	// });

	const login = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", credentials)
			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				push("/bubbles");
			})
			.catch((err) => console.log("login error", err));
	};

	const update = (e) => {
		const { name, value } = e.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	return (
		<>
			<h1>
				Welcome to the Bubble App!
				<p>Build a login page here</p>
			</h1>

			<form onSubmit={login}>
				<div>
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={credentials.username}
						onChange={update}
					/>
				</div>

				<div>
					<label>Password</label>
					<input
						type="text"
						name="password"
						value={credentials.password}
						onChange={update}
					/>
				</div>
				<button>Log In</button>
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
