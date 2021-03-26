import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/bubblepage">
					<BubblePage />
				</Route>
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
