import React from 'react'
import '../../Components/Navbar/Navbar.css'
import Arrow from "../../assets/Arrow.png"


export default function GreeButton({ text }) {
  return (
    <>
      <div className="nb-btn">
        <button>{text}<img src={Arrow} alt="" /></button>
      </div>
    </>
  )
}
  