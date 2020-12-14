import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const Private = ({component: Component, ...props}) => {
    return<Route {...props} render={() =>{
        if (localStorage.getItem('token')) {
                return <Component/>
        }
        return <Redirect to="/login" />
    }} />
}

export default Private
