import React from 'react'
import './FooterNewsLetter.css'
import BuildingPicture from '../../assets/footer-image.png'
import GreenButton from '../GreenButton/GreenButton'

export default function FooterNewsLetter() {
    return (
        <>
            <div className="signin-LatestDeal">
                <div className="si-image">
                    <img src={BuildingPicture} alt="." />
                </div>

                <div className="si-text">
                    <div className="si-heading">
                        <h2>
                            Signup for the Latest Deals
                        </h2>

                    </div>

                    <div className="si-para">
                        <p>
                            By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.
                        </p>
                    </div>

                    <div className="si-signup">

                        <input type="text" id="firstName" placeholder="First Name" />

                        <input type="text" id="lastName" placeholder="Last Name" />

                        <input type="text" id="email" placeholder="Email" />

                        <input type="text" id="phoneNumber" placeholder="Phone Number" />


                    </div>


                    <div className="si-button">
                        <GreenButton
                            text={'SignUp For The Latest Deals'}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
