import React from 'react'
import './HomeSec2.css'
import PropertyCard from '../../../Components/PropertyCard/PropertyCard'
import Property1 from '../../../assets/property1.png'
import NavButtons from '../../../Components/NavButtons/NavButtons'
import Headings from '../../../Components/Headings/Headings'
import Grid from '@mui/material/Grid2';

export default function HeadingSec2() {
    return (
        <>

            {/* Section-2  : Off-Market-properties */}

            <section className='h-sec2  padding'>

                <div className="h-sec2-header">
                    <div className="h-sec2-heading">
                        <Headings
                            normalHeading="Off-Market"
                            greenHeading="Properties"
                        />

                    </div>

                    <div className="h-sec2-slider">
                        <NavButtons />
                    </div>

                </div>

                <div className="h-sec2-cards">
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={6} md={4} lg={3}>

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

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                        </Grid>
                    </Grid>
                </div>
            </section>

        </>
    )
}
