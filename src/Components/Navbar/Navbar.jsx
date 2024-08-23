import React from 'react'
import './Navbar.css'
import Heading from '../Heading/Heading'
import List from '../List/List'
import GreenButton from '../GreenButton/GreenButton'

export default function Navbar() {
    
    return (
        <div className="nb">
            <Heading/>
            <List/>
            <GreenButton
                text="Login/SignUp"
                
            />
            
        </div>
    )
}
