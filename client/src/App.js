import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import Login from './components/Login'
import Bubbles from './components/BubblePage'
import Colors from './components/Colors'
import Navigation from './components/Nav'
// import './styles/styles.scss'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Login} />

        <PrivateRoute path='/colors' component={Colors} />
        {/* <PrivateRoute path='/bubbles' component={Bubbles} /> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </Switch>
    </>
  )
}

export default App
