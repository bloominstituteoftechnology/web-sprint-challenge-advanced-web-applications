import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import BubblePage from "./components/BubblePage"
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/protected">Bubble Page</Link>
        </li>
        </ul>

        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/protected" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
