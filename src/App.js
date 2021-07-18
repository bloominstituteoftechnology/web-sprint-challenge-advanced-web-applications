import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="http://localhost:3000/">logout</a>
        </header>
        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.