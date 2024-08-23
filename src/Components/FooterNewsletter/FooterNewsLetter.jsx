import React from 'react'
import './FooterNewsLetter.css'
import BuildingPicture from '../../assets/footer-image.png'

export default function FooterNewsLetter() {
  return (
   <>
    <div className="signin-LatestDeal">
        <div className="si-image">
            <img src={BuildingPicture} alt="." />
        </div>

        <div className="si-text">
            <h2>
            Signup for the Latest Deals
            </h2>

            <p>
            By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.
            </p>

            
        </div>
    </div>
   </>
  )
}
