import React from 'react';
import { Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
//import { axiosWithAuth } from '../utils';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Logout from './Logout';
import Login from './Login';
import View from './View';


const App = () => {
  

  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>
      <div className="App">
              <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                  <li>
                    <Link to="/view">View</Link>
                  </li>
                </ul>

              
              <Switch> 
                  <Route exact path="/">
                    <Login/>
                  </Route>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <PrivateRoute path="/view">
                    <View/>
                  </PrivateRoute>
                  <PrivateRoute path="/logout">
                    <Logout/>
                  </PrivateRoute>
              </Switch>
                </div>
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
