import React, { useState } from 'react';
import './Dropdown.css';

export default function Dropdown({ type, logo, options }) {
    const [selectedValue, setSelectedValue] = useState(''); // Initialize with an empty string

    const handleChange = (event) => {
        setSelectedValue(event.target.value); // Update the state with the selected option's value
    };

    return (
        <div className="dropdown">
            <img src={logo} alt="dropdown-logo" />

            <select 
                value={selectedValue} 
                onChange={handleChange}
            >
                {/* Render the type as the placeholder option */}
                <option value="" disabled>{type}</option>

                {/* Map over the options and render each option */}
                {Object.entries(options).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}
