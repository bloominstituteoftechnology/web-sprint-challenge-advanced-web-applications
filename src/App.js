import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";
import BubblePage from "./components/BubblePage"

function App() {
  return (
    <Router>
      <div className="App">
   
       <li>{
         (localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>)
      }
      </li>
        <Route exact path="/" component={Login} />
      </div>
      <PrivateRoute exact path ="/protected" component={BubblePage} />
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute