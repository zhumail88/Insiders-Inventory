import React from 'react'
import '../../Components/Navbar/Navbar.css'
import Arrow from "../../assets/Arrow.png"


export default function GreenButton({ text , btnStyle , onClick }) {
  return (
    <>
      <div className="nb-btn">
        <button
          style={btnStyle}
          onClick={onClick}
        >
          {text}<img src={Arrow} alt="" />
        
        </button>
      </div>
    </>
  )
}
  