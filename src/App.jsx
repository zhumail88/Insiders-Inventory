import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SignupPage from './Components/SignupPage/SignupPage'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <div className="maincontainer">
      <div className="nav">
        <Navbar />
      </div>
      <div className="signupPage">
        <SignupPage />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>

  )
}
