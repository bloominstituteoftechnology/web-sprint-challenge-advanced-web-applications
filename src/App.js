import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import PrivateRoute from "./components/PrivateRoute";
import BubblesPage from "./components/BubblesPage"
import Bubbles from "./components/Bubbles";


import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
        </header> 

        <Route exact path="/" component={Login} />
      </div>


      <Switch>
     <PrivateRoute path="/bubblespage" component={BubblesPage}>
       <BubblesPage />
     </PrivateRoute>

     <Route path ="/login">
       <Login />
     </Route>

     <Route path ="/login">
       <Login />
     </Route>

     </Switch>

    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.