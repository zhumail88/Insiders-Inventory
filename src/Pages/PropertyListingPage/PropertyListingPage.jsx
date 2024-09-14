import React from 'react';
import './PropertyListingPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Headings from '../../Components/Headings/Headings';
import Dropdown from '../../Components/Dropdown/Dropdown';
import ddData from '../../Data/DropdownData.js';

export default function PropertyListingPage() {
    return (
        <>
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

            <section className="pl-sec2">
                <div className="pl-sec2-select">
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
        </>
    );
}
