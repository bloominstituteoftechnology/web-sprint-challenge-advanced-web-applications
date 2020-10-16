import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token')
    return(
        <div>
            <Route {...rest} render={(props) => {
                if(token) {
                    return <Component {...props} />
                }else{
                    return <Redirect to="/" />
                }
            }}/>
        </div>
    )
}

export default PrivateRoute;