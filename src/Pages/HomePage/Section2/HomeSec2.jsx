import React from 'react'
import './HomeSec2.css'
import LeftArrow from '../../../assets/leftArrow.png'
import RightArrow from '../../../assets/rightArrow.png'
import PropertyCard from '../../../Components/PropertyCard/PropertyCard'
import Property1 from '../../../assets/property1.png'


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
                    <PropertyCard
                        propertyStatus="Vacant"
                        propertyPic={Property1}
                        propertyInfo={{
                            name: "Luxury Apartment",
                            price: 450000,
                            description: "3 bedroom | 1 bathroom | 971 sq. ft.",
                            location: "Pakistan",
                            initialInvestment: 45120,
                            roi: 37
                        }}

                    />

                    <PropertyCard
                        propertyStatus="Owner Occupied"
                        propertyPic={Property1}
                        propertyInfo={{
                            name: "Hostel",
                            price: 350000,
                            description: "1 bedroom | 1 bathroom | 271 sq. ft.",
                            location: "Pakistan",
                            initialInvestment: 45120,
                            roi: 37
                        }}

                    />

                    <PropertyCard
                        propertyStatus="Vacant"
                        propertyPic={Property1}
                        propertyInfo={{
                            name: "Banglow",
                            price: 450000,
                            description: "3 bedroom | 1 Garden | 1 bathroom | 971 sq. ft.",
                            location: "Pakistan",
                            initialInvestment: 35000,
                            roi: 42
                        }}

                    />

                    <PropertyCard
                        propertyStatus="Qabza Mafia"
                        propertyPic={Property1}
                        propertyInfo={{
                            name: "Apartment",
                            price: 450000,
                            description: "3 bedroom | 1 bathroom | 971 sq. ft.",
                            location: "Pakistan",
                            initialInvestment: 55120,
                            roi: 29
                        }}

                    />

                </div>


            </section>

        </>
    )
}
