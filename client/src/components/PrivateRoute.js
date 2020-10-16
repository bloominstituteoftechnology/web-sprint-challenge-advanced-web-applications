import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: BubblePage, ...rest }) => {
    return (
        
        <Route
        {...rest}
        render={(props) => {
            //checking local storage for a token
            if (localStorage.getItem("token")) {
                return <BubblePage {...props} />;
            //redirecting the user to the login route w/o token
            } else {
                return <Redirect to="/login" />;
            }
            
        }}
        />
    );
};

export default PrivateRoute;