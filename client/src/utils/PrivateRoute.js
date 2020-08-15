import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
    return (
        <Route
            {...restOfProps}
            render={(props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                        <Redirect to='/login' />
                    )
            )}
        />
    )
}

export default PrivateRoute;