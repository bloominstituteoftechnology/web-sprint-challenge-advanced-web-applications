import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import BubblePage from './components/BubblePage';
import PrivateRoute from './utlis/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute exact path='/bubble-page' component={BubblePage} />
        </div>
      </Switch>

    </Router>
  );
}

export default App;
