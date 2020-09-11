import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblesPage from './components/BubblePage'
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute exact path ="/colors" component={BubblesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
