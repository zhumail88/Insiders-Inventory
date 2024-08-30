import React from 'react'
import './MasterLogin.css'
import InsidersLogo from '../../assets/masterLoginLogo.png'
import Heading from '../../Components/Heading/Heading'
import GreenButton from '../../Components/GreenButton/GreenButton'
import BackLogo from '../../assets/backlogo.png'

export default function MasterLogin() {
    return (
        <>
            <div className="masterLogin">
                <div className="ml-heading">
                    <img src={InsidersLogo} alt="" />
                    <Heading />
                </div>

                <div className="ml-login">
                    <p>Administration Login</p>

                    <div className="ml-input">
                        <label htmlFor="username">Username</label>
                        <input type="text" />

                        <label htmlFor="password">Password</label>
                        <input type="password" />

                    </div>

                    <div className="ml-checkbox-fp">
                        <div className="ml-checkbox">
                            <input type="checkbox" />
                            <label htmlFor="rememberMe">Remember Me</label>

                        </div>

                        <div className="forgetPassword">
                            <li>Forget Password?</li>

                        </div>

                    </div>


                    <div className="ml-btn">
                        <GreenButton
                            text='Sign In'
                        />
                    </div>

                </div>

                <div className="ml-backBtn">
                    <img src={BackLogo} alt="" />
                    <li>
                        Back To Insider's Inventory
                    </li>
                </div>
            </div>
        </>
    )
}
