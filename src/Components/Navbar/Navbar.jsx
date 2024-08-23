import React from 'react'
import './Navbar.css'
import Arrow from "../../assets/Arrow.png"
import Heading from '../Heading/Heading'
import List from '../List/List'

export default function Navbar() {
    
    return (
        <div className="nb">
            <Heading/>
            <List/>

            <div className="nb-btn">
                <button>Login/SignUp <img src={Arrow} alt="" /></button>
            </div>
        </div>
    )
}
