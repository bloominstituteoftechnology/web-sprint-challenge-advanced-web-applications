import React, { Component } from "react";
import { Route,Redirect } from "react-router-dom";

const isUserAuthenticated = () =>{
    return localStorage.getItem("Token received") !== null;
};


const PrivateRoute = ({ component: Component, ...props }) =>{
    return(
        <Route
        {...props}
        render={() =>{
            if(isUserAuthenticated()){
                return <Component />
            }
            return <Redirect to= "/api/login" />;
        }}
        />
    )
}
export default PrivateRoute;
