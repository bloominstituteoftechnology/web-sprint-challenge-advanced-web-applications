import React from "react";
import { Route, Redirect } from "react-router-dom";

const PvtRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            // if the token is in localStorage, render the given component
            return <Component {...props} />;
          } else {
            // redirect to login
            console.log("redirecting!");
            return <Redirect to="/login" />;
          }
        }}
      />
    </div>
  );
};

export default PvtRoute;
