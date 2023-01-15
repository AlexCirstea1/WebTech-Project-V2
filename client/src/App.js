import React, { useEffect, useState } from 'react'
import Join from './Pages/Join';
import HomePage from './HomePage'; 
import LoginForm from './Components/Login'
import Register from './Components/Register'
import text from './text';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Join}/>
        <Route exact path="/activity/:code" component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default App