import React from 'react'
import './NavButtons.css'
import LeftButton from '../../assets/leftArrow.png'
import RightButton from '../../assets/rightArrow.png'


export default function NavButtons() {
 return (
    <>
        <div className="nav-btns">
            <img id='left' src={LeftButton} alt="" />
            <img id='right' src={RightButton} alt="" />
        </div>
    </>
  )
}
