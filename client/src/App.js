import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* <Link to="bubblepage">Bubbles</Link> */}
        <div className="nav">
        <Link to="login">Login</Link>
        </div>
       <Switch>
       

         <PrivateRoute exact path="/bubblepage" component={BubblePage} />
         <Route component={Login} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
