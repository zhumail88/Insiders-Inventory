import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SignupForm from './Components/SignUpForm/SignUpForm'
import SignupPage from './Components/SignupPage/SignupPage'

export default function App() {
  return (
  <div className="maincontainer">
    <div className="nav">
      <Navbar />
    </div>
    <div className="signupPage"></div>
    <SignupPage />
  </div>
  
  )
}
