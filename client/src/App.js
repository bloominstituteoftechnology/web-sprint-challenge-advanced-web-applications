import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import Login from './components/Login'
import Bubbles from './components/BubblePage'
import Colors from './components/Colors'
import Navigation from './components/Nav'
import AddColor from './components/AddColor'
// import './styles/styles.scss'

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <PrivateRoute path='/colors' component={Colors} />
        <PrivateRoute path='/addcolor' component={AddColor} />

        <Route exact path='/' component={Login} />
        {/* <Route exact path='*' component={<h1>404</h1>} /> */}
      </Switch>
    </>
  )
}

export default App
