import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/protected">Protected BubblePage</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />

        <PrivateRoute path="/protected" component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
