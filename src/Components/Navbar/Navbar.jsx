import React, { useState } from 'react'
import './Navbar.css'
import Heading from '../Heading/Heading'
import List from '../List/List'
import GreenButton from '../GreenButton/GreenButton'
import MenuBtn from '../../assets/menu.png'

export default function Navbar() {

    const [menuBtnState , setMenuBtnState] = useState(false);
    
    function toggleMenu(){
        setMenuBtnState(!menuBtnState);
    }
    return (
        <div className="nb">
            <Heading />
            <List />
            <div className="nb-btns">

                <button
                 className='menuBtn'
                 onClick={() => toggleMenu()}
                 >
                    
                    <img src={MenuBtn} alt=":" /></button>


                <GreenButton
                    text="Login/SignUp"
                />
            </div>

        </div>
    )
}
