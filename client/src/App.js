import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/">Login</Link>
       

       <Switch>
         <Route exact path="/"><Login /></Route>
         <Route path="login"><Login /></Route>
         <PrivateRoute exact path="/protected" component={BubblePage}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
