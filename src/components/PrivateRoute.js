import { render } from '@testing-library/react';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isUserLoggedIn = () => {
    return localStorage.getItem("token") !== null;

};


const PrivateRoute =({ component: Component, ...props })=>{
    return(
        <Route{...props}
        render={() =>   {
            if (isUserLoggedIn()){
                return <Component />
                
            } else {
                return <Redirect to ="/" /> 
            }
        }}
        />
    )
}

export default PrivateRoute;