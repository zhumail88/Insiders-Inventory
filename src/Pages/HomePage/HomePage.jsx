import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import GreenButton from '../../Components/GreenButton/GreenButton'

export default function HomePage() {
    return (
        <>
            <Navbar />

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

                {/* Section-2  : Off-Market-properties */}




            </section>
        </>

    )
}
