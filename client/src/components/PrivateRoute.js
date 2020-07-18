import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
            console.log("you are in Route render");
            if (localStorage.getItem("token")) {
              // if the token is in localStorage, render the given component
              console.log("found token");
              return <Component {...props} />;
            } else {
              // redirect to login
              console.log("redirecting!");
              return <Redirect to="/" />;
            }
        }}
        /> 
    )
}

export default PrivateRoute;