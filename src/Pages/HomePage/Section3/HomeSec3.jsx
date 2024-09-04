import React from 'react'
import './HomeSec3.css'
import PropertyType from '../../../Components/PropertyType/PropertyType'
import PropertyType1 from '../../../assets/PropertyType1.png'
import PropertyType2 from '../../../assets/PropertyType2.png'
import PropertyType3 from '../../../assets/PropertyType3.png'
import Headings from '../../../Components/Headings/Headings'
import Grid from '@mui/material/Grid2';

export default function HomeSec3() {
  return (
    <>
      <div className="h-sec3 padding">

        <div className="h-sec3-heading">

          <Headings
            normalHeading="Off-Market"
            greenHeading="Property Types"
          />

        </div>

        <div className="h-sec3-cards">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <PropertyType
                image={PropertyType1}
                title="Buy & Hold Properties"
                description="Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <PropertyType
                image={PropertyType2}
                title="Retail - Owner Occupant"
                description="Tailored Retail Spaces for Owner-Occupied Success in Prime Locations."
              />

            </Grid>

            <Grid item xs={12} sm={6} md={4}>

              <PropertyType
                image={PropertyType3}
                title="Flip Opportunities"
                description="Seize Profit Potential: Explore High-Yield Flip Opportunities with Insider's Inventory."
              />
            </Grid>
          </Grid >



        </div>
      </div>

    </>
  )
}
