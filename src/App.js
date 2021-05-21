import React, { useState } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import "./styles.scss";

function App() {

  let { push } = useHistory()

   const logOutHandle = (e) => {
     e.preventDefault()
      localStorage.clear()
      push('/')

   }
  return (
    <>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button data-testid="logoutButton" onClick ={logOutHandle}>logout</button>
        </header> 
        <Switch>
        <Route exact path="/" component={Login} />

        <PrivateRoute path='/bubblePage' component={BubblePage} />
        </Switch>
      </div>
    </>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.