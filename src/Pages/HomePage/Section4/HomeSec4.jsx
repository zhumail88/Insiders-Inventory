import React from 'react'
import './HomeSec4.css'
import Headings from '../../../Components/Headings/Headings'
import NavButtons from '../../../Components/NavButtons/NavButtons'
import ClientReviews from '../../../Components/ClientReviews/ClientReviews'
import Client1 from "../../../assets/zhumail.jpg"
export default function HomeSec4() {
    return (
        <>
            <div className="h-sec4 padding">

                <div className="h-sec4-heading">
                    <Headings
                        normalHeading="What our"
                        greenHeading="Clients Say ?"
                    />
                </div>

                <div className="h-sec4-reviews">
                    <ClientReviews
                        review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                        image={Client1}
                        clientDescription={
                            {
                                name: 'Shumail',
                                position: 'CEO',
                                designation: 'Bakchod Nagar'

                            }
                        }
                    />
                    <ClientReviews
                        review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                        image={Client1}
                        clientDescription={
                            {
                                name: 'Shumail',
                                position: 'CEO',
                                designation: 'Bakchod Nagar'

                            }
                        }
                    />

                    <ClientReviews
                        review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                        image={Client1}
                        clientDescription={
                            {
                                name: 'Shumail',
                                position: 'CEO',
                                designation: 'Bakchod Nagar'

                            }
                        }
                    />
                </div>

                <div className="h-sec4-nav-btns">
                    <NavButtons />
                </div>
            </div>
        </>
    )
}
