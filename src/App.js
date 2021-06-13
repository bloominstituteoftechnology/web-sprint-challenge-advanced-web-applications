import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";
import ColorList from "./components/ColorList";
import Login from "./components/Login";
import axios from "axios";
import "./styles.scss";

function App() {
	const logout = () => {
		axios.post("http://localhost:5000/api/logout").then((res) => {
			console.log("Logged out!");
			localStorage.removeItem("token");
			window.location.href = "/";
		});
	};
	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a data-testid="logoutButton" onClick={logout} href="/login">
						logout
					</a>
				</header>
				<Switch>
					<PrivateRoute path="/colors" component={ColorList} />
					<Route exact path="/" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
