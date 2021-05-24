import React from "react";
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

function App() {



  
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">logout</a>
  
        <Switch> 
        <PrivateRoute exact path="/BubblePage" component={BubblePage}/>   

        <Route exact path="/" component={Login} />
         <Route component={Login} />
        </Switch>
        </header> 
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute [!]
//2. Build the logout button to remove the localStorage Item. [!]