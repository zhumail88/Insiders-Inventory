import React from 'react'
import './SignInForm.css'
import GreenButton from '../GreenButton/GreenButton'
import { Link } from 'react-router-dom'

export default function SignInForm() {
    return (
        <>
            <form className='signin-form'>
                <h2>Sign In To Submit Off-Market Property</h2>
                <div className="si-input">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" placeholder="John Doe" />
                </div>

                <div className="si-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                </div>

                <div className='confirmButton'>
                    <div className="rmbr-cb">
                        <input type="checkbox" />
                        <label>
                            Remember Me
                        </label>
                    </div>

                    <div className="forget-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <GreenButton
                    text='Sign In'
                />


                <div className='su-haveAccount'>
                    Don't have an account? <Link to='/SignUpPage'>Sign Up</Link>
                </div>

            </form>
        </>
    )
}
