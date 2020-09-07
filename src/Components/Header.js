import React from 'react'
import './Header.css';


function Header({difficulty,description,age,}) {
    return (
        <div className="header">
            <div className="header_left">
            <h1>{difficulty}</h1>
            <h4>{description}</h4>
            </div>
            

            <div className="header_right">
            <h4>Recommended Age Group: {age}</h4>

            </div>
        </div>
    )
}

export default Header
