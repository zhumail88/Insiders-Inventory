import React from 'react'
import LeftArrow from '../../../assets/leftArrow.png'
import RightArrow from '../../../assets/rightArrow.png'
import PropertyCard from '../../../Components/PropertyCard/PropertyCard'
import './HomeSec2.css'


export default function HeadingSec2() {
    return (
        <>

            {/* Section-2  : Off-Market-properties */}

            <section className='h-sec2  padding'>

                <div className="h-sec2-header">
                    <div className="h-sec2-heading">
                        <h1>Off-Market <span className='heading-green'>Properties</span></h1>
                    </div>
                    <div className="h-sec2-slider">
                        <img src={LeftArrow} alt="<-" />
                        <img src={RightArrow} alt="->" />
                    </div>
                </div>

                <div className="h-sec2-cards">
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                    <PropertyCard />
                </div>


            </section>

        </>
    )
}
