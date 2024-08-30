import React from 'react'
import './Headings.css'

export default function Headings({ normalHeading, greenHeading, size }) {
    return (
        <>
            <div className="generalHeading">
                <h1
                    style={{
                        fontsize: { size }
                    }}
                > {normalHeading} <span className='greenHeading'>{greenHeading}</span>
                </h1>
            </div>
        </>
    )
}
