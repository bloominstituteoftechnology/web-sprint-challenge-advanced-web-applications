import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to ='/'>Login</Link>
          <Link to = '/bubblepage'>Bubble Page</Link>
        </nav>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path = '/bubblepage'>
          <BubblePage/>
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
