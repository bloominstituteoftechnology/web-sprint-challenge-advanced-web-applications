import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute"
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <PrivateRoute path="/BubblePage" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
