import React from 'react'
import '../Navbar/Navbar.css'

export default function List() {
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
        <>
            <div className="nb-links">
                <ul>
                    {
                        links.map((item, index) => (
                            <li key="item.name"> {item.name}</li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}
