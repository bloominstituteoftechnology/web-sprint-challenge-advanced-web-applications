import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export const PrivateRoute =(props)=> {

    const { component: Component, ...rest} = props

    return (
        <Route {...rest}
            render= {(renderProps) => {
                if(localStorage.getItem('token')){
                    console.log('render component')
                    return <Component {...renderProps} />
                } else {
                    console.log('Redirect')
                   return  <Redirect to= '/' />
                }
            }}
        />
    )
}




//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in