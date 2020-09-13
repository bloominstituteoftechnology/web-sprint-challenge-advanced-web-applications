import React from 'react'
import {Route, Redirect, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
  const location = useLocation()
  const isAuhtenticated = useSelector((state) => state.auth.isAuthenticated)
  // const isAuhtenticated = true
  console.log(isAuhtenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuhtenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

export default PrivateRoute
