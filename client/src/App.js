import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" components={Login} />
        <PrivateRoute exact path="/bubble-page" components={BubblePage} />
      </Switch>
    </Router>
  );
}

export default App;
