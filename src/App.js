import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bubbles</h1>
        <nav>
          <ul className='menu'>
            <li className='main-menu'>
              <Link to="/">Login</Link>
            </li>
            <li className='main-menu'>
              {localStorage.getItem('token') && <Link to="/colors">Access Bubbles</Link>}
            </li>
            </ul>
          </nav>
        <Switch>
          <PrivateRoute exact path='/colors' component={BubblePage}/>
          <Route exact path="/" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute