import React from 'react'
import './Navbar.css'
import Arrow from "../../assets/Arrow.png"

export default function Navbar() {
    const links = [
        {
            name: "Home",
            to: "/"
        },
        {
            name: "Buyers",
            to: "/"
        },
        {
            name: "Sellers",
            to: "/"
        },
        {
            name: "Buy & Hold",
            to: "/"
        },
        {
            name: "Retail",
            to: "/"
        },
        {
            name: "Flip Oportunities",
            to: "/"
        },
        {
            name: "Off-Market Invetory",
            to: "/"
        }
    ]
    return (
        <div className="nb">
            <div className="nb-text">
                <h2>Insider's <span className='nb-Inventory-Text'>Inventory</span></h2>
            </div>

            <div className="nb-links">
                <ul>
                {
                    links.map((item, index) => (
                        <li key="item.name"> {item.name}</li>
                    ))
                }
                </ul>

            </div>

            <div className="nb-btn">
                <button>Login/SignUp <img src={Arrow} alt="" /></button>
            </div>
        </div>
    )
}
