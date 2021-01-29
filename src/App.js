import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import bubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/bubble-page" component={bubblePage} />
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
