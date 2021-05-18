import React from 'react'
import {Router, Redirect} from 'react-router-dom'


export const PrivateRoute =(props)=> {

    const { component: Component, ...rest} = props

    return (
        <Route {...rest}
            render= {(renderProps) => {
                if(localStorage.getItem('token')){
                    return <Component />
                }
            }}
        />
    )
}




//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in