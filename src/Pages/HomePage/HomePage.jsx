import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeSec1 from './Section1/HomeSec1'
import HomeSec2 from './Section2/HomeSec2'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HomeSec1/>
            <HomeSec2/>
        </>

    )
}
