import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import {PrivateRoute} from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <LogoutButton />
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.