import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

//Task List:
//1. Complete PrivateRoute