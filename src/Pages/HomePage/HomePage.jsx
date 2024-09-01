import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import HomeSec1 from './Section1/HomeSec1'
import HomeSec2 from './Section2/HomeSec2'
import HomeSec3 from './Section3/HomeSec3'
import HomeSec4 from './Section4/HomeSec4'
import Footer from '../../Components/Footer/Footer'


export default function HomePage() {
    return (
        <>
            <Navbar />
            <HomeSec1/>
            <HomeSec2/>
            <HomeSec3/>
            <HomeSec4/>
            <Footer/>
        </>
    )
}
