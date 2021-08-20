import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

//3A Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          {/* //3b. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page. */}
          <a data-testid="logoutButton" href="/" onClick={logout}>logout</a>
        </header>
        <Switch>
        {/* //2. Render BubblePage as a PrivateRoute */}
        <PrivateRoute exact path="/bubble" component={BubblePage} />
        {/* //1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'. */}
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.