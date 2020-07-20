import React from "react";
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
  //Redirect,
} from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PvtRoute from "./components/PvtRoute";

function App({ component: Component, ...rest }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PvtRoute exact path="/protected" component={BubblePage} />
          <Route exact path="/" component={Login} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route component={Login} /> */}
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
