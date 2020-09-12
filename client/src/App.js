import React, { useState } from "react";
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/login">Login</Link>
        <Link to="/protected">Friends List</Link>
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */
      
        }
        <Switch>
          <PrivateRoute exact path="/protected" Component={BubblePage}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
