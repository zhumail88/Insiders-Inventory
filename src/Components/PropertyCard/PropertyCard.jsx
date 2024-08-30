import React from 'react'
import './PropertyCard.css'
import Property1 from '../../assets/property1.png'
import LocationLogo from "../../assets/location.png"
import GreenButton from '../GreenButton/GreenButton.jsx'

export default function PropertyCard(
    {
        propertyStatus = "Unavailable",
        propertyPic,
        propertyInfo = {
            name: "Unavailable",
            price: "Unavailable",
            description: "Unavailable",
            location: "Unavailable"
        }
    }
) {
    return (
        <>
            <div className="propertyCard">

                <div className="propertyImage">
                    <div className="imageAndStatus">
                        <img src={Property1} alt="" />
                        <p>{propertyStatus}</p>
                    </div>

                    <div className="investmentOption">
                        <div className="intialInvestment">
                            <h2>Initial Investment 
                                <span
                                    className='money'
                                >{propertyInfo.initialInvestment} 789234</span> 

                            </h2>
                        </div>

                        <div className="roi">
                            <h2>Potential ROI 
                                <span
                                className='money'
                                >{propertyInfo.roi} 457903</span>
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="propertyDetails">
                    <h1>{propertyInfo.name}</h1>
                    <h3>{propertyInfo.price}</h3>
                    <p>{propertyInfo.description}</p>
                    <span> <img src={LocationLogo} alt="" />{propertyInfo.location}</span>

                </div>


                <div className="propertyBtn">
                    <GreenButton
                        text="Login To Make An Offer"
                    />

                </div>

            </div>

        </>
    )
}
