import React from 'react'
import './Footer.css'
import FooterImage from "../../assets/footer-image.png"
import FooterLogo from "../../assets/logo.png"
import Heading from '../Heading/Heading'
import List from '../List/List'
import SocailLinks from '../SocialLinks/SocailLinks'



export default function Footer() {
  return (
    <div className="footer-container">
      
      <div className="footer-content">
      
        <div className="footer-signup">
          <div className="footer-image">
            {/* <img src={FooterImage} alt="" /> */}

          </div>

        </div>  
      
        <div className="footer-bottom">
            <div className="footer-logo-text">
              <img src={FooterLogo} alt="" />

              <Heading/>

              <p>Your Gateway to Real Estate Excellence.</p>
            </div>

            <div className="footer-links">
              <List/>
              <SocailLinks/>
            </div>

            
            
        </div>
        <div className="footer-copyrights">
          <hr />
              <p>Copyright Insider’s Inventory 2024 . All rights reserved.</p>
            </div>
      </div>

    </div>
  )
}
