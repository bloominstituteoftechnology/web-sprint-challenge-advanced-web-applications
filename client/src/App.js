import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import ColorList from "./components/ColorList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
       <Switch>
         <PrivateRoute exact path="/colorlist" component={ColorList} />
         <Route component={Login} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
