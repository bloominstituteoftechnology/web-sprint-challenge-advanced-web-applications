// replace the 'Route' component in our Routing
// PrivateRoute should be able to take in all the same props as  `<Route/>`
// Render a <Route /> component and forward the given props to it
// should check to see if the user if authenticated
// if yes, render the given component
// if not, re-route to the login page

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				if (localStorage.getItem("token")) {
					// render component
					return <Component {...rest} />;
				} else {
					// route to login
					return <Redirect to="/" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
