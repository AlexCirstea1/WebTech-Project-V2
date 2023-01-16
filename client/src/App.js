import React, { useEffect, useState } from 'react'
import Join from './Pages/Join';
import HomePage from './HomePage'; 
import ProfessorPage from './ProfessorPage';


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
        <Route exact path="/professor/:code" component={HomePage}/>
        <Route exact path="/activity/:code" component={ProfessorPage}/>
      </Switch>
    </Router>
  )
}

export default App