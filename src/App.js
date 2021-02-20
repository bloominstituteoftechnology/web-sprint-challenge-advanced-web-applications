import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="links">
          <Link to="/"> Login</Link>
          <Link to="/bubblespage">Bubbles</Link>
        </nav>

        <Switch>
          <PrivateRoute exact path="bubblespage" component={BubblePage} />
          <Route exact path="/" component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute