import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/login'>Login</Link></li>  
          <li><Link to='/protected'>My Bubbles Page</Link></li>      
        </ul>
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      <Switch>
        <PrivateRoute exact path='/protected' component={BubblePage} /> 
        <Route exact path="/login" component={Login} />
          <Route component={Login} />
          
      </Switch>
          
      </div>
    </Router>
  );
}

export default App;
