import React from 'react'
import './FinanceContent.css'


function Basic({difficulty, description, age }) {
    return (
        <div className="financeContent">
            <div className="title">
            <h2>{difficulty}</h2>
            <h5>{description}</h5>
            <h5 className="age">Recommended Age Group : {age}</h5>
            </div>


                <p><h3 className="basic_title">Guaranteed returns:</h3>
                Unlike the stock, commodities, bonds, FX market which have fluctuating rates, fixed deposits are not as risky as the investor will be getting back a guaranteed amount at the end of the agreed date.</p>
                <p><h3 className="basic_title">Higher rate of return:</h3>
                Not only are interest rates higher than most savings accounts, fixed deposits are also a safe way to invest where returns are assured.</p>
                <p><h3 className="basic_title">Encourages saving habit:</h3>
                Fixed deposits locks in your money for an agreed time period to earn the said interest amount. The penalty required to break the deposit prevents most people from spending the money, encouraging better saving habits and more efficient management of finances.</p>
                <p>
                <h3 className="basic_title">Tips for investing in fixed deposits:</h3>
                Consider investing with different providers. In times of emergency, you will prefer not to break an entire deposit, losing all the accumulated interest. The premature withdrawal penalty will be paid for a smaller sum while the remaining cash can continue earning interest. 
                </p>


            <div className="bankGrid">
                <div className="card">
                <div className="icon"><img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/4d0a46b787684f866f8896adc9f7553c" alt="" /></div>
                <p className="title">UOB</p>
                <p className="text">UOB's interest rates are : 4.3% currently. A Big bank with alot of potential</p>
                </div>

                <div className="card">
                    <div className="icon"><img src="https://seekvectorlogo.com/wp-content/uploads/2019/11/dbs-bank-vector-logo-small.png" alt="" /></div>
                    <p className="title">DBS</p>
                    <p className="text">DBS's interest rates are : 1.3% currently. A Big bank with alot of potential</p>
                </div>

                <div className="card">
                    <div className="icon"><img src="https://nmpidigital.com/wp-content/uploads/2015/09/ocbc-bank-logo.png" className="image_right" alt="" /></div>
                    <p className="title">OCBC</p>
                    <p className="text">OCBC'sinterest rates are : 2.3% currently. A Big bank with alot of potential</p>
                </div>

                <div className="card">
                    <div className="icon"><img src="https://www.fintechfutures.com/files/2019/03/Standard_Chartered_logo.jpg" className="image_right" alt="" /></div>
                    <p className="title">Standard Chartered</p>
                    <p className="text">Standard Chartered'sinterest rates are : 2.3% currently. A Big bank with alot of potential</p>
                </div>

                <div className="card">
                    <div className="icon"><img src="https://cdn.shopify.com/s/files/1/1224/1890/products/MayBank_1024x1024.png?v=1550542062" className="image_right" alt="" /></div>
                    <p className="title">Maybank</p>
                    <p className="text">Maybank'sinterest rates are : 2.3% currently. A Big bank with alot of potential</p>
                </div>


            </div>


        </div>

    )
}

export default Basic
