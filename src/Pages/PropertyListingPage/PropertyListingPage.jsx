import React from 'react';
import './PropertyListingPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Headings from '../../Components/Headings/Headings';
import Dropdown from '../../Components/Dropdown/Dropdown';
import ddData from '../../Data/DropdownData.js';
import Properties from '../../Data/PropertiesData.js';
import PropertyCard from '../../Components/PropertyCard/PropertyCard.jsx'
import Grid from '@mui/material/Grid2';

export default function PropertyListingPage() {
    return (
        <>

            {/* Hero Page */}


            <section className="pl-sec1">
                <Navbar />
                <div className="pl-heroPage">
                    <Headings
                        normalHeading={'Off-Market'}
                        greenHeading={'Inventory'}
                        fontSize={'2rem'}
                    />
                    <p>Our off-market inventory features unique opportunities tailored to your needs. Contact us to explore these hidden gems today.</p>
                </div>
            </section>


            {/* Dropdown */}
            <section className="pl-sec2">
                <div className="pl-sec2-select padding">
                    {
                        ddData.map((item, index) => (
                            <Dropdown
                                key={index}
                                logo={item.logo}
                                type={item.type}
                                options={item.options}
                            />
                        ))
                    }
                </div>
            </section>


            {/* Displaying Properteis */}
            <section className="pl-sec3 padding">
                <div className="pl-sec3-info">
                    <p>
                        Showing 1-25 results out of 480 properties
                    </p>


                </div>

                <div className="pl-sec3-properties padding" >
                    <Grid container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center">

                        {
                            Properties.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <PropertyCard
                                        status={item.currentStatus}
                                        propertyStatus={item.status}
                                        propertyPic={item.img}
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
                            ))
                        }
                    </Grid>
                </div>
            </section >


        </>
    );
}
