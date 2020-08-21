import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ColorList from './components/ColorList'
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute>
          <BubblePage />
        </PrivateRoute>  
      </div>
    </Router>
  );
}

export default App;
