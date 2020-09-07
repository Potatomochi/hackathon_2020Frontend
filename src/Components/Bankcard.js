import React from 'react'
import './Bankcard.css'

function Bankcard({image,name,description}) {
    return (
        <div className="bankCard">
            <img className="bankCard_thumbnail" src={image} alt="" />
            <div className="bankCard_info">

                <div className="bankCard_text">
                    <h4>{name}</h4>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    )
}

export default Bankcard
