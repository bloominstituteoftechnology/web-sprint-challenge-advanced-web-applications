import React, from "react";
import {Route, Redirect} from "react-router-dom";

const isUserAuthenticated = () =>{
    return localStorage.getItem("token") !== null;

};

const PrivateRoute =({ component: Component, ...props })=>{
    return(
        <Route{...props}
        render={() =>   {
            if (isUserAuthenticated()){
                return <Component />
            }
            return <Redirect to="/api/login" />
        }}
        />
    )
}

export default PrivateRoute;





//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in