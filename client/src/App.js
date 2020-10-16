import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

          <PrivateRoute exact path="/bubblepage" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;