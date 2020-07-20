import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link,Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">BubblePage</Link>
        </li>
        <li>
          <Link to= "/contact">Contact Us</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path = "/protected" component = {BubblePage} />
        <Route path = "/contact" component = {ContactPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
