import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import "./styles.scss";

function App() {
  const logout = () => {
      localStorage.removeItem('token');
  }
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
          <Link to ='/login'>Login</Link>
          </li>
          <li>
            <Link to ='/logout' onClick={logout}>Log Out</Link>
          </li>
          <li>
            <Link to ='/protected'>Bubbles Page</Link>
          </li>
        </ul>
        <Switch>
        <PrivateRoute exact path='/protected' component={BubblePage} />
        <Route exact path='/login' component={Login} />
        <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute