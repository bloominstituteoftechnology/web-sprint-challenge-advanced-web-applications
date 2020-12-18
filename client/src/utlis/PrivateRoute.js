import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Comment, ...rest }) => {
    
    const token = window.localStorage.getItem('token');

    return (
        <Route { ...rest } render={props => {
            if (token) {
                return <Comment { ...props } />
            } else {
                return <Redirect to='/' />
            }
        }}/>
    )
}

export default PrivateRoute;