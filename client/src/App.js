import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
        
            <PrivateRoute 
            exact 
            path='/api/colors/' 
            render={(props) => (<BubblePage {...props} ColorList={ColorList} BubblePage={BubblePage}/>)}
            component={BubblePage}/>

            <PrivateRoute 
            exact 
            path='/api/colors/:id' 
            component={ColorList, BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
