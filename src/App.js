import React, { useState } from "react";
import { BrowserRouter as Router, Route,Link ,Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";
import BubblePage from "./components/BubblePage"

function App() {
  return (
    <Router>
       <li>
      <Link to="/login">Login</Link>
      </li>
       <li>{
         (localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>)
      }
      </li>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path ="/protected" component={BubblePage}/>
      
      </Switch>
      </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute