import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>

        // "token" can be named something else
        // but needs to be matched here
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (

            //can modify this:
            //redirect back to home,
            //to="/"

          <Redirect to="/bubbles" />
          
        )
      }
    />
  );

export default PrivateRoute