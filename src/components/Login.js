import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";




const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const initialFormState = {
		username: "Lambda School",
		password: "i<3Lambd4",
	};

	const [login, setLogin] = useState(initialFormState);

	console.log(login);
	const history = useHistory();

	const loginRequest = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", login)
			.then((res) => {
        console.log(res)
				localStorage.setItem("token", res.data.payload);
				history.push("/protected");
				console.log(login.credentials);
			})
			.catch((err) => {
				console.log(err);
				console.log(login.credentials);
			});
	};
	const handleChange = (e) => {
		e.persist();
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<div>
				<form onSubmit={loginRequest}>
					<label htmlFor="username">
						username
						<input
							type="text"
							name="username"
							value={login.username}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="password">
						password
						<input
							type="password"
							name="password"
							value={login.password}
							onChange={handleChange}
						/>
					</label>
					<button onChange={handleChange}>Log in</button>
				</form>
			</div>
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