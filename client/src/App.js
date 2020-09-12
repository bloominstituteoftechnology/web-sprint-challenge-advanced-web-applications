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
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */
      
        }
        <switch>
          <PrivateRoute exact path="/Protected" component={BubblePage}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </switch>
      </div>
    </Router>
  );
}

export default App;
