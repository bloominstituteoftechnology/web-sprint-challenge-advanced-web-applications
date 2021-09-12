import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

import Login from "./components/Login";
import "./styles.scss";

import BubblePage from "./components/BubblePage";
import { PrivateRoute } from "./components/PrivateRoute";


function App() {

  const handleLogOut = () => {
    console.log('fired')
    //evt.preventDefault()
    axiosWithAuth().post(`http://localhost:5000/api/logout`)
    .then(() => {
      localStorage.removeItem("token")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={handleLogOut}>logout</a>
        </header>
        {/* <PrivateRoute path="/bubbles" component={BubblePage} /> */}
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute - ??? Problem
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.