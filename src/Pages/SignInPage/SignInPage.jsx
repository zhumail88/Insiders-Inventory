import React from 'react'
import './SignInPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SignInPic from '../../assets/signup-page-pic.png'
import Footer from '../../Components/Footer/Footer'
import SignInForm from '../../Components/SignInForm/SignInForm'

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <div className="si-content">
          
        <div className="si-image">
          <img src={SignInPic} alt="" />
        </div>

        <div className="si-form">
          <SignInForm/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
