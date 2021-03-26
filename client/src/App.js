import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import { axiosWithAuth } from './helpers/axiosWithAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    
    axiosWithAuth()
    //1. do a request to our server to delete the token
    .post('/api/logout')
    .then(res => {
      //2. remove our local token
      localStorage.removeItem('token');
      //3. redirect to login page
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err.response);
    });
  };


  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <ul className='menu'>
            <li className='main-menu'>
              <Link to="/login">Login</Link>
            </li>
            <li className='main-menu'>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li className='main-menu'>
              {localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>}
            </li>
            </ul>
          </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={BubblePage}/>
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