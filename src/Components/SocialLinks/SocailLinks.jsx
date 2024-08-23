import React from 'react'
import './SocialLinks.css'
import FBLogo from '../../assets/FB-logo.png'
import TwitterLogo from '../../assets/Twitter-logo.png'
import LinkdInLogo from '../../assets/LinkdIn-logo.png'
import InstagramLogo from '../../assets/Instagram-logo.png'




export default function SocailLinks() {
    const socialLinks = [
        {
            social: "Facebook",
            logo: FBLogo
        },
        {
            social: "Twitter",
            logo: TwitterLogo
        },
        {
            social: "LinkdIn",
            logo: LinkdInLogo
        },
        {
            social: "Instagram",
            logo: InstagramLogo
        },
    ]
    return (
        <>
            <div className="social-logos">
                {
                    socialLinks.map((item, index) => (
                        <ul>
                            <li>
                                <img
                                    key={index}
                                    src={item.logo}
                                    alt={item.social}
                                />
                            </li>
                        </ul>

                    ))
                }

            </div>

        </>
    )
}
