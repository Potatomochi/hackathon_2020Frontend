import React from 'react'
import './FinanceContent.css'
import './Advanced.css'
import Data from './data.js'

function Advanced({difficulty, description, age }) {
    return (
        <div className="financeContent_advanced">
            <div className="title">
            <h2>{difficulty}</h2>
            
            <h5>{description}</h5>
            <h5 className="age" >Recommended Age Group : {age}</h5>
            </div>
            <div className="dataTitle">
            <h1>Stock</h1>
            <h1>Open Price</h1>
            <h1>Last Price</h1>
            <h1 className="dataHigh">High   </h1>
            <h1>Low</h1>
            <h1>Closing Price</h1>
            </div>
            <Data />
            
        </div>
    )
}

export default Advanced