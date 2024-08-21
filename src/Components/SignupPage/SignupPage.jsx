import React from 'react'
import './SignupPage.css'
import SignUpPic from '../../assets/signup-page-pic.png'
import SignupForm from '../SignUpForm/SignUpForm'

export default function SignupPage() {
  return (
    <div className="su">
        <div className="su-signup">
            <div className="su-picture">
                <img src={SignUpPic} alt="." />
            </div>
            <div className="su-form">
              <SignupForm/>
             </div>
        </div>
    </div>
  )
}
