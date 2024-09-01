import React from 'react'
import './SignupPage.css'
import SignUpPic from '../../assets/signup-page-pic.png'
import SignupForm from '../../Components/SignUpForm/SignUpForm'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export default function SignupPage() {
  return (

    <>
      <Navbar />
      <div className="su">
        <div className="su-signup">
          <div className="su-picture">
            <img src={SignUpPic} alt="." />
          </div>

          <div className="su-form">
            <SignupForm />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
