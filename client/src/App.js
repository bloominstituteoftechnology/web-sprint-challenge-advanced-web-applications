import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/private">Bubble Page</Link>
          </li>
        </ul> */}
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/bubblepage">
            <BubblePage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
