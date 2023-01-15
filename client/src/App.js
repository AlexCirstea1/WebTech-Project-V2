import React, { useEffect, useState } from 'react'
import LoginForm from './Components/Login'
import Register from './Components/Register'
import './App.css'

function App() {


  return (
    <div class="main">
      <h1>Join activity</h1>
      <LoginForm />
      <h1>Create an activity</h1>
      <Register />
    </div>
  )
}

export default App