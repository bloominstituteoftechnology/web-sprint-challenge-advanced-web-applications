import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ColorList from "./components/ColorList";
import BubblePage from "./components/BubblePage";
import Bubles from "./components/Bubbles";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="App">
          {localStorage.getItem("token") === null ? (
            <>Log in</>
          ) : (
            <div className="protected-container">
              <button className="logout" color="inherit" onClick={logout}>
                Log Out
              </button>
            </div>
          )}
          <Route exact path="/" component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <switch>
            <PrivateRoute path="/bubbles" component={BubblePage} />
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;