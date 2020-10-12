import React from "react";
import { Route,Redirect } from "react-router-dom";

const isUserAuthenticated = () =>{
    return localStorage.getItem("Token received") !== null;
};


const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = window.localStorage.getItem("token");
  
    return (
      <Route
        {...rest}
        render={(props) => {
          if (token) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
export default PrivateRoute;
