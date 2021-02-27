import React from "react";
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
                render={(props) => 
                    localStorage.getItem('token') ? (
                                <Component {...props} />
                     ) : (<Redirect to ='/login' />)
                    }
            />
    )
}

export default PrivateRoute

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in