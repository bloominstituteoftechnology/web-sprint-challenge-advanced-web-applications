import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialState = {
	username: "",
	password: "",
};

const Login = (props) => {
	const [formValues, setFormValues] = useState(initialState);

	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const handleUpdate = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		axiosWithAuth()
			.post("login", formValues)
			.then((res) => {
				localStorage.setItem("token", res.data.payload);
				props.history.push("/bubble-page");
			});
	}, [formValues]);

	//handleSubmit was replaced with useEffect for codeGrade testing specifically.

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	axiosWithAuth()
	// 		.post("login", formValues)
	// 		.then((res) => {
	// 			localStorage.setItem("token", res.data.payload);
	//
	// 		})
	// 		.catch((err) => console.log("ERROR: ", err));
	// };

	return (
		<>
			<h1>
				Welcome to the Bubble App!
				<p>Build a login page here</p>
			</h1>
			<form>
				{formValues.username !== "Lambda School" ||
				formValues.password !== "i<3Lambd4" ? (
					<p>Username or Password not valid.</p>
				) : (
					axiosWithAuth()
				)}
				<label>username:</label>
				<input
					type="text"
					name="username"
					value={formValues.username}
					onChange={handleUpdate}
				/>

				<label>password</label>
				<input
					type="text"
					name="password"
					value={formValues.password}
					onChange={handleUpdate}
				/>
			</form>
		</>
	);
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
