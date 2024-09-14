import React from 'react'
import './PropertyCard.css'
import LocationLogo from "../../assets/location.png"
import GreenButton from '../GreenButton/GreenButton.jsx'
import { Navigate, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'

export default function PropertyCard(
    {
        status,
        propertyStatus = "Unavailable",
        propertyPic,
        propertyInfo = {
            name: "Unavailable",
            price: 0,
            description: "Unavailable",
            location: "Unavailable",
            initialInvestment: 0,
            roi: 0

        }
    }
) {
    // const navigate = useNavigate();
    return (
        <>
            <div className="propertyCard">

                <div className="propertyImage">
                    <div className="imageAndStatus">
                        <img src={propertyPic} alt="" />
                        <span>{propertyStatus}</span>
                        {status &&
                            <div
                                className='currentStatus'
                                style={{
                                    backgroundColor: status == 'New' ? '#4DAD49' : status == 'Sold' ? 'red' : 'background: #FFCB11',
                                    
                                }}
                            >
                                <p>{status}</p>
                            </div>
                        }

                    </div>

                    <div className="investmentOption">

                        <div className="intialInvestment">
                            <h2>Initial Investment</h2>
                            <span
                                className='money'
                            >{propertyInfo.initialInvestment} Rs/-</span>
                        </div>

                        <hr />

                        <div className="roi">
                            <h2>Potential ROI</h2>
                            <span
                                className='money'
                            >{propertyInfo.roi} %</span>
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
                        onClick={() => navigate('/SignInPage')}
                    />

                </div>

            </div>

        </>
    )
}
