import React from 'react'
import GreenButton from '../../../Components/GreenButton/GreenButton'
import './HomeSec1.css'
import { useNavigate } from 'react-router-dom'

export default function HeadingSec1() {
    // const navigate = useNavigate();

    const showSignUpPage = ()=>{
        navigate('/SignUpPage');
    }
    return (
        <>
            {/* Section-1  : Headings and stuff */}
            <section className='h-sec1'>
                <div className="h-sec1-subHeading">
                    <h4>Insiders Off-Market Inventory</h4>
                </div>

                <div className="h-sec1-mainHeading">
                    <h1>Your <span className='mainHeading-span'>Next Opportunity</span> Awaits</h1>
                </div>

                <div className="h-sec1-description">
                    <p>Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments period.</p>
                </div>

                <div className="h-sec1-buttons">
                    <GreenButton
                        text="Sign up for the Latest Deals"
                        onClick={()=>showSignUpPage()}
                    />
                    <GreenButton
                        text="View our Off-Market Inventory"
                        btnStyle={{
                            background: 'transparent',
                            color: '#4DAD49',
                            border: '1px solid #4DAD49'
                        }}
                    />
                </div>

            </section>
        </>
    )
}
