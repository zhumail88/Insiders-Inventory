import React from 'react'
import './ClientReviews.css'

export default function ClientReviews({ review, image, clientDescription }) {
    return (
        <>
            <div className="clientReview">
                <div className="cr-review">
                    <p>{review}</p>
                </div>

                <div className="cr-description">
                    <div className="cr-image">
                        <img src={image} alt="" />
                    </div>

                    <div className="cr-client">
                        <div className="cr-name">
                            <h4>{clientDescription.name}</h4>
                        </div>

                        <div className="cr-designation">
                            <h5>{clientDescription.position} , {clientDescription.designation} </h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
