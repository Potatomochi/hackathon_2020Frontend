import React from 'react'
import './Homecontent.css'
import {Link} from "react-router-dom";

function Homecontent() {
    return (
        <div className="homeContent">
            <h1>THE MARKET IS EXPANDING, <br />YOURS SHOULD TOO.</h1>
            <p>With an in-depth risk profiling framework, we recommend the most appropriate products and relevant information according to your true risk tolerance and financial knowledge. This will ensure that you will only make the most-sound investment decisions. </p>
            <h3>Find the Investment Strategy that suits you best</h3>

            <div className="homeRow">
                <Link to="/basic" className="link_Style">
                <div className="split_item"><h3>Beginner</h3></div>
                </Link>
                <Link to="/intermediate" className="link_Style">
                <div className="split_item"><h3>Basic</h3></div>
                </Link>
                <Link to="/advanced" className="link_Style">
                <div className="split_item"><h3>Pro</h3></div>
                </Link>


            </div>
        </div>
    )
}

export default Homecontent
