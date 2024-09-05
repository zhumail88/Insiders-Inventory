import React from 'react'
import './HomeSec4.css'
import Headings from '../../../Components/Headings/Headings'
import NavButtons from '../../../Components/NavButtons/NavButtons'
import ClientReviews from '../../../Components/ClientReviews/ClientReviews'
import Client1 from "../../../assets/zhumail.jpg"
import Grid from '@mui/material/Grid2';

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

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4} xl={3} >

                            <ClientReviews
                                review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                                image={Client1}
                                clientDescription={
                                    {
                                        name: 'Shumail',
                                        position: 'Augghhh',
                                        designation: 'Agghhh'

                                    }
                                }
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} xl={3}>
                            <ClientReviews
                                review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                                image={Client1}
                                clientDescription={
                                    {
                                        name: 'Shumail',

                                        position: 'Augghhh',
                                        designation: 'Agghhh'

                                    }
                                }
                            />

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} xl={3}>
                            <ClientReviews
                                review="Bohat maza a rha hai dil garden garden sa ho rha. Lab e sheerien sa lag rha hai . "
                                image={Client1}
                                clientDescription={
                                    {
                                        name: 'Shumail',
                                        position: 'Augghhh',
                                        designation: 'Agghhh'

                                    }
                                }
                            />

                        </Grid>
                    </Grid>



                </div>

                <div className="h-sec4-nav-btns">
                    <NavButtons />
                </div>
            </div>
        </>
    )
}
