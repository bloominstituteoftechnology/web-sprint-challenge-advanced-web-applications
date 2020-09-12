import React from "react";
import { Route, Redirect } from "react-router-dom";

// Private Route requirements:
// 1. It has the same api as <Route>
// 2. It renders a <Route /> and passes all the props through to it
// 3. It checks if the user is authenticated. If they are, it renders the component prop, otherwise it redirect the user to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          // user is logged in, woo! Render the component
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;