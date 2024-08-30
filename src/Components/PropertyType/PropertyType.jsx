import React from 'react'
import './PropertyType.css'


export default function PropertyType({image , title , description}) {
  return (
    <>
        <div className="propertyType">
            
            <div className="pt-image">
                <img src={image} alt="x" />
            </div>

            <div className="pt-title">
                <h2>{title}</h2>
            </div>

            <div className="pt-description">
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}
