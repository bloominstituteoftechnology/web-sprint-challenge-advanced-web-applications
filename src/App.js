import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import PrivateRoute from "./components/PrivateRoute";


function App() {
const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
      <Route exact path="/" 
        render={(props) => {
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />
        <PrivateRoute exact path='/bubblepage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute