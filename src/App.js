import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
      .catch(err => console.error('unable to logout'));
      localStorage.removeItem('token');
  }
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to ='/login'>Login</Link>
          </li>
          <li>
            <Link to ='/logout' onClick={logout}>Log Out</Link>
          </li>
          <li>
            <Link to ='protected'>Bubbles Page</Link>
          </li>
        </ul>
        <Switch>
        <PrivateRoute exact path='/protected' component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute