import React/*, { useState }*/ from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";



function App() {

  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Route 
          exact path="/" 
          // component={Login} 
          render={(props)=>(
            <Login 
              {...props} 
              // setLoggedIn={setLoggedIn}
            />
          )}
        />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
