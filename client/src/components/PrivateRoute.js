import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route
        {...rest}
        render={(props) => {
            localStorage.getItem('auth-token') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )
        }}
    />
};

export default PrivateRoute;