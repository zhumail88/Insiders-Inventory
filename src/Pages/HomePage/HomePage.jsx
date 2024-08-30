import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import HeadingSec1 from './Section1/HomeSec1'
import HeadingSec2 from './Section2/HomeSec2'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeadingSec1/>
            <HeadingSec2/>
            
        </>

    )
}
