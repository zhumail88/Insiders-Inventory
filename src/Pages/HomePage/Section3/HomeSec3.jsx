import React from 'react'
import './HomeSec3.css'
import PropertyType from '../../../Components/PropertyType/PropertyType'
import PropertyType1 from '../../../assets/PropertyType1.png'
import PropertyType2 from '../../../assets/PropertyType2.png'
import PropertyType3 from '../../../assets/PropertyType3.png'

export default function HomeSec3() {
  return (
    <>
      <div className="h-sec3 padding">
        <div className="h-sec3-heading">
          <h1>Off-Market <span className="heading-green">Property Type</span></h1>
        </div>

        <div className="h-sec3-cards">
          <PropertyType
            image={PropertyType1}
            title="Buy & Hold Properties"
            description="Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."
          />

          <PropertyType
            image={PropertyType2}
            title="Retail - Owner Occupant"
            description="Tailored Retail Spaces for Owner-Occupied Success in Prime Locations."
          />

          {/* <PropertyType
            image={PropertyType3}
            title="Flip Opportunities"
            description="Seize Profit Potential: Explore High-Yield Flip Opportunities with Insider's Inventory."
          /> */}
        </div>
      </div>

    </>
  )
}
