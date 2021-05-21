import React, { useState } from "react";
import { useHistory, BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  const history = useHistory()
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    history.pushState('/login')
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>
        </header> 

        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/bubblepage/" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item. test