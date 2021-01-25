import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <nav>
        <p>
          <Link to="login">Login</Link>
        </p>
        <p>
          <Link to="/bubbles">Bubbles</Link>
        </p>
      </nav>
      <Switch>
        <PrivateRoute exact path="/bubbles" components={BubblePage} />
        <Redirect exact from="/bubbles/reload" to="/bubbles" />
        <Route exact path="/" components={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
