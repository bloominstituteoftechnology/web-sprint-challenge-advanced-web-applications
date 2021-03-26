import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [state, setState] = useState({
		username: "Lambda School",
		password: "i<3Lambd4",
		errorMessage: "this is the wrong info",
		successMessage: "Welcome Back. please hold while we load your profile",
	});
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const { push } = useHistory();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const token =
		"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

	const handleSubmit = (e) => {
		e.preventDefault();
		const login_Info = {
			username: state.username,
			password: state.password,
		};
		console.log("logininfo", login_Info);

		// if (state.username === "" || state.password === "" ) {
		// 	errorMessage = "Name, position and nickname fields are required.";
		// }
		axios
			.post(`http://localhost:5000/api/login`, login_Info)
			.then((res) => {
				if (res.data.payload === token) {
					setSuccess(true);
					setTimeout(() => {
						push("/bubblepage");
					}, 3000);
				}
			})
			.catch((err) => {
				setError(true);
				console.log(err);
			});
	};
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	return (
		<>
			<div>
				<h1>Welcome to Bubble App</h1>
				<p>Please login :</p>
			</div>
			<form onSubmit={handleSubmit}>
				<lable>Username</lable>
				<input
					onChange={handleChange}
					type="text"
					value={state.username}
					name="username"
					id="username"
				/>

				<lable>Password</lable>
				<input
					onChange={handleChange}
					type="password"
					value={state.password}
					name="password"
					id="password"
				/>
				{error ? <p>{state.errorMessage}</p> : null}
				{success ? <h2>{state.successMessage}</h2> : <h2>Ready to Login</h2>}

				<button type="submit">Login</button>
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
