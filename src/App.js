import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute"


function App() {
  const logoutClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = '/'
  }
  
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={logoutClick} href="#">logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.